import { useCallback, useRef } from "react";
import Editor from "./Editor";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";

const App = () => {
  const editorRef = useRef(null);

  const onReady = useCallback((editor) => {
    editorRef.current = editor;
    CKEditorInspector.attach(editor);
  }, []);

  const onChange = useCallback((event, editor) => {
    const data = editor.getData();
    console.log(data);
  }, []);

  return <Editor onChange={onChange} onReady={onReady} />;
};

export default App;
