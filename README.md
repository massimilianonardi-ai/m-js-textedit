# m-js-textedit

GUI-independent text editing engine. Owns `m.text.document` and `m.text.selection`; no dependency on m-js-core. Extracted without source changes from [m-js-core@8666f294](https://github.com/massimilianonardi-ai/m-js-core/tree/8666f2940affc44e80996ab7fb4e0e9c636c1031/m/text). GUI belongs to m-js-textedit-gui.

In an initialized m environment with mk, jsc and Node.js installed:

```sh
mk build
mk test
```

The build emits `build/textedit.js`, a JSC CommonJS/browser classic bundle. Browser scripts load it before the GUI; in Node `require` returns the m namespace. Do not load two engine bundles in one realm: document contracts rely on nominal class identity. Release/catalog integration and real m-os acceptance are pending.

See [interfaces](docs/interfaces.md) and [tests](docs/tests.md).
