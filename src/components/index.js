import React, { useState } from "react";
import PropTypes from "prop-types";

import { Editor, EditorState, RichUtils } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const NoCringeEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const currentContent = editorState.getCurrentContent();

  const html = stateToHTML(currentContent);
  console.log("html:", html);

  const handleBold = () => setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  const handleUnderline = () => setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));

  const wordCount = currentContent.getPlainText("\u0001").split(" ").filter(item => !!item.length).length;

  return (
    <div>
      <button type="button" onClick={handleBold}>bold</button>
      <button type="button" onClick={handleUnderline}>underline</button>
      <hr />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
      <hr />
      Word count: {wordCount}
    </div>
  );
};

NoCringeEditor.propTypes = {
};

NoCringeEditor.defaultProps = {
};

export default NoCringeEditor;
