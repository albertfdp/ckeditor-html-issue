import { useCallback, useRef } from "react";
import Editor from "./Editor";

const App = () => {
  const editorRef = useRef(null);

  const onReady = useCallback((editor) => {
    editorRef.current = editor;
  }, []);

  const onChange = useCallback((event, editor) => {
    const data = editor.getData();
    console.log(data);
  }, []);

  return <Editor onChange={onChange} onReady={onReady} />;
};

export default App;
