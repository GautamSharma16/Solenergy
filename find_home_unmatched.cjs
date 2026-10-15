const fs = require('fs');
const path = require('path');
const f = path.join(process.cwd(),'src','pages','Home.css');
const c = fs.readFileSync(f,'utf8');
let stack = 0, line = 1, pos=-1;
for(let i=0;i<c.length;i++){
  const ch = c[i];
  if(ch==='\n') line++;
  if(ch === '{') stack++;
  if(ch === '}') { stack--; if(stack<0){ pos=i; break; } }
}
if(pos===-1) { console.log('No underflow found'); process.exit(0); }
// compute line number at pos
let lineNum = 1; for(let i=0;i<pos;i++) if(c[i]==='\n') lineNum++;
console.log('Underflow at line', lineNum);
const lines = c.split(/\r?\n/);
const start = Math.max(0,lineNum-6), end = Math.min(lines.length, lineNum+4);
for(let i=start;i<end;i++){
  const mark = (i+1===lineNum)?'>>':'  ';
  console.log(mark, (i+1)+':', lines[i]);
}
