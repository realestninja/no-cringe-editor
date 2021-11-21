import React, { useState } from "react";
import PropTypes from "prop-types";

import { Editor, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const NoCringeEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const currentContent = editorState.getCurrentContent();

  const html = stateToHTML(currentContent);
  console.log("html:", html);

  return (
    <div>
      <hr />
      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />
      <hr />
    </div>
  );
};

NoCringeEditor.propTypes = {
};

NoCringeEditor.defaultProps = {
};

export default NoCringeEditor;
