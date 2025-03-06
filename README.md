# CKEditor HTML issue

This repository demonstrates a specific bug in CKEditor 5 when using the [General HTML Support](https://ckeditor.com/docs/ckeditor5/latest/features/html/general-html-support.html) plugin together with the [Remove formatting](https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html) feature.

The main issue occurs when:

1. The editor is configured to allow empty <span> elements via the htmlSupport configuration
2. The content contains empty spans with attributes (like data-name or class)
3. A user tries to use the "Remove Format" button from the toolbar
4. When these conditions are met, the editor crashes completely.

Example configuration for `htmlSupport`:

```js
htmlSupport: {
  allowEmpty: ["span"],
  allow: [{ name: "span", classes: true }],
},
```

Example content:

```html
<p>
  Hello from CKEditor 5! <span data-name="example" class="test"></span> here
  test
</p>
```

## Running the example

```sh
yarn install
yarn dev
```
