import { useMemo } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  ClassicEditor,
  Essentials,
  GeneralHtmlSupport,
  Italic,
  Paragraph,
  RemoveFormat,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

function Editor({ onChange, onReady }) {
  const config = useMemo(() => {
    return {
      licenseKey: import.meta.env.VITE_CKEDITOR_LICENSE_KEY,
      plugins: [
        Essentials,
        Paragraph,
        Bold,
        Italic,
        GeneralHtmlSupport,
        RemoveFormat,
      ],
      toolbar: [
        "undo",
        "redo",
        "heading",
        "|",
        "bold",
        "italic",
        "removeFormat",
      ],
      initialData:
        "<p>Hello from CKEditor 5! <span data-name='example' class='test'></span> here test</p>",
      htmlSupport: {
        allowEmpty: ["span"],
        allow: [{ name: "span", classes: true }],
      },
    };
  }, []);

  return (
    <CKEditor
      editor={ClassicEditor}
      config={config}
      onChange={onChange}
      onReady={onReady}
    />
  );
}

export default Editor;
