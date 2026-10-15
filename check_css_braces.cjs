const fs = require('fs');
const path = require('path');
function walk(dir){
  let res = [];
  for(const f of fs.readdirSync(dir)){
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if(s.isDirectory()) res = res.concat(walk(p));
    else if(/\.css$/.test(f)) res.push(p);
  }
  return res;
}
const root = path.join(process.cwd(), 'src');
if(!fs.existsSync(root)){
  console.error('src directory not found');
  process.exit(2);
}
const files = walk(root);
let bad = false;
for(const f of files){
  const c = fs.readFileSync(f, 'utf8');
  let stack = 0;
  let line = 1;
  let underflow = false;
  for(let i=0;i<c.length;i++){
    const ch = c[i];
    if(ch === '\n') line++;
    if(ch === '{') stack++;
    if(ch === '}') { stack--; if(stack < 0){ underflow = true; break; } }
  }
  if(underflow || stack !== 0){
    console.log(`${f}: underflow=${underflow}, balance=${stack}`);
    bad = true;
  }
}
if(!bad) console.log('All CSS files balanced (matching { } )');
