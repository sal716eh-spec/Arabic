#!/usr/bin/env node
/* Extracts every sentence that wants audio from drills.html + vocab-data.js
   and writes audio-manifest.json.  Run:  node tools/build-manifest.js        */
const fs=require('fs'), path=require('path'), root=path.join(__dirname,'..');

// Must match aid() in the browser — same input, same filename.
function aid(s){let h=5381;for(let i=0;i<s.length;i++)h=((h*33)^s.charCodeAt(i))>>>0;return h.toString(36);}

const h=fs.readFileSync(path.join(root,'drills.html'),'utf8');
eval(h.slice(h.indexOf('const DATA=['),h.indexOf('const GLUE=[')).replace('const DATA=','globalThis.DATA='));
eval(h.slice(h.indexOf('const EXTRA={'),h.indexOf('/* ── merge extra')).replace('const EXTRA=','globalThis.EXTRA='));
Object.keys(EXTRA).forEach(k=>Object.assign(DATA.find(u=>u.n===k),EXTRA[k]));
eval(fs.readFileSync(path.join(root,'vocab-data.js'),'utf8').replace('const VOCAB','globalThis.VOCAB'));

const glue=(a,s)=>a+(s.startsWith('،')?'':' ')+s, J=a=>a.reduce(glue);
const seen=new Map();
const add=(bucket,unit,text)=>{
  if(!text) return; text=String(text).trim(); if(!text) return;
  const id=aid(text);
  if(!seen.has(id)) seen.set(id,{id,text,bucket,unit,chars:text.length});
};

DATA.forEach(u=>{
  u.dialogue.forEach(d=>add('dialogue',u.n,d[1]));
  u.ladders.forEach(l=>l.steps.forEach((_,i)=>add('ladder',u.n,J(l.steps.slice(0,i+1)))));
  u.transforms.forEach(t=>{add('transform',u.n,t.src);add('transform',u.n,t.ans);});
  u.cloze.forEach(c=>add('cloze',u.n,c.q.replace('___',c.o[c.a])));
  u.fix.forEach(f=>add('fix',u.n,f.good));
  u.builds.forEach(b=>add('build',u.n,J(b.parts)));
  u.prompts.forEach(p=>{add('prompt',u.n,p[0]);add('model',u.n,p[2]);});
  (u.grammar||[]).forEach(g=>add('grammar',u.n,g.ar));
});
VOCAB.forEach(v=>add('vocab',v.unit,v.ar));

const items=[...seen.values()];
fs.writeFileSync(path.join(root,'audio-manifest.json'),JSON.stringify(items,null,1));
const by={}; items.forEach(i=>{by[i.bucket]=by[i.bucket]||{n:0,c:0};by[i.bucket].n++;by[i.bucket].c+=i.chars;});
console.log('bucket'.padEnd(12),'clips'.padStart(6),'chars'.padStart(8));
Object.entries(by).forEach(([k,v])=>console.log(k.padEnd(12),String(v.n).padStart(6),String(v.c).padStart(8)));
console.log(''.padEnd(28,'-'));
console.log('total'.padEnd(12),String(items.length).padStart(6),String(items.reduce((a,b)=>a+b.chars,0)).padStart(8));
console.log('\nwrote audio-manifest.json');
