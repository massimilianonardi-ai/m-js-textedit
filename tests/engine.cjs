'use strict';
const assert=require('node:assert/strict');
const {text:{document:D}}=require('../build/textedit.js');
for(const Backend of [D.FlatDocument,D.PieceDocument]) {
  const doc=new Backend('A😀\r\nB\tC');
  assert.equal(doc.lineCount,2);
  const raw=new D.RawDocument2D(doc);
  const cell=new D.CellDocument2D(raw,4);
  assert.equal(cell.rowCount,2);
  assert.ok(cell.getRegions(0,0,1,10)[0].some(r=>r.text==='😀'));
  doc.replace(0,1,'X');
  assert.equal(doc.toString(),'X😀\r\nB\tC');
  cell.destroy(); raw.destroy();
}
console.log('PASS: extracted TextEdit Flat/Piece and Raw/Cell');
