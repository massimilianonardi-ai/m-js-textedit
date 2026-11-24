# Tests

`mk test` builds the real JSC bundle and runs `tests/engine.cjs` using both physical backends, CRLF, a Unicode grapheme, a composed Raw/Cell view and a committed edit. Extraction checked using actual JSC rendering code with virtual filesystem and V8 runtime; full real m-os invocation, browser regression and installed pkg remain pending.
