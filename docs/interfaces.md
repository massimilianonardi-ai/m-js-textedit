# Engine boundary

`m.text.document.Document` and `Document2D` are nominal interfaces. FlatDocument and PieceDocument implement the source store; RawDocument2D and CellDocument2D, FoldDocument2D, AnnotationDocument2D and SubstitutionDocument2D expose composed views. Selection classes live under `m.text.selection`. The ordered JSC manifest is authoritative for exports. No DOM, HTTP, Electron or persistence dependency is introduced by extraction.
