/* Shared audio: voice ranking, pre-rendered clip playback, persisted preferences,
   and the settings panel. Loaded by Words, Verbs and Connectors; Sentences has the
   same logic inline because it also shows progress in the panel. */
(function(){
  const VKEY='bay_voice_uri', RKEY='bay_voice_rate', WKEY='bay_voicewarn_dismissed';

  function aid(s){let h=5381;for(let i=0;i<s.length;i++)h=((h*33)^s.charCodeAt(i))>>>0;return h.toString(36);}

  let CLIPS=null, curAudio=null;
  try{
    if(typeof fetch==='function'){
      fetch('audio/index.json?t='+Math.floor(Date.now()/60000)).then(r=>r.ok?r.json():[])
        .then(a=>{CLIPS=new Set(a);sync()}).catch(()=>{CLIPS=new Set()});
    } else CLIPS=new Set();
  }catch(e){ CLIPS=new Set(); }

  const sig=v=>((v.voiceURI||'')+' '+(v.name||'')).toLowerCase();
  function quality(v){
    const t=sig(v);
    if(/premium|neural|natural/.test(t))return 'premium';
    if(/enhanced/.test(t))return 'enhanced';
    if(/siri/.test(t))return 'siri';
    if(/compact/.test(t))return 'basic';
    return 'standard';
  }
  const RANK={premium:4,enhanced:3,siri:2,standard:1,basic:0};
  function score(v){
    let s=RANK[quality(v)]*100; const l=(v.lang||'').toLowerCase();
    if(/^ar-sa/.test(l))s+=10; else if(/^ar-(eg|ae|jo|kw|qa|bh)/.test(l))s+=6; else if(/^ar-001/.test(l))s+=4;
    if(v.localService===false)s+=3;
    return s;
  }
  function list(){
    const raw=(window.speechSynthesis? speechSynthesis.getVoices()||[] : []).filter(v=>/^ar/i.test(v.lang));
    const seen=new Map();                      // iOS repeats the same voice several times
    raw.forEach(v=>{const k=(v.voiceURI||v.name)+'|'+v.lang; if(!seen.has(k))seen.set(k,v)});
    return [...seen.values()].sort((a,b)=>score(b)-score(a));
  }
  function stored(){ try{return localStorage.getItem(VKEY)}catch(e){return null} }
  function chosen(){
    const l=list(); if(!l.length) return null;
    const want=stored();
    return (want && l.find(v=>(v.voiceURI||v.name)===want)) || l[0];
  }
  function rate(){
    let r=parseFloat((()=>{try{return localStorage.getItem(RKEY)}catch(e){return null}})());
    return (r>=0.5&&r<=1.1)?r:0.8;
  }
  function setRate(r){ try{localStorage.setItem(RKEY,r)}catch(e){} }
  function setVoice(uri){ try{localStorage.setItem(VKEY,uri)}catch(e){} }

  function stop(){
    if(curAudio){curAudio.pause();curAudio=null}
    if(window.speechSynthesis) speechSynthesis.cancel();
    document.querySelectorAll('.speaking').forEach(e=>e.classList.remove('speaking'));
  }
  function speak(text,el){
    stop();
    if(el)el.classList.add('speaking');
    const done=()=>{if(el)el.classList.remove('speaking')};
    const id=aid(text);
    if(CLIPS&&CLIPS.has(id)){
      const a=new Audio('audio/'+id+'.mp3');
      a.playbackRate=Math.max(0.6,Math.min(1.3,rate()+0.15));
      curAudio=a; a.onended=()=>{curAudio=null;done()};
      a.onerror=()=>{curAudio=null;tts(text,done)};
      a.play().catch(()=>{curAudio=null;tts(text,done)});
      return;
    }
    tts(text,done);
  }
  function tts(text,done){
    const v=chosen(); if(!v){if(done)done();return}
    const u=new SpeechSynthesisUtterance(text);
    u.lang=v.lang||'ar-SA'; u.rate=rate(); u.pitch=1; u.voice=v;
    u.onend=done; u.onerror=done;
    speechSynthesis.speak(u);
  }
  const available=()=> (CLIPS&&CLIPS.size>0) || list().length>0;

  /* ── the panel ── */
  function mount(host){
    if(!host) return;
    host.innerHTML=
      '<button class="cog" id="rq-cog" type="button" aria-expanded="false" aria-controls="rq-panel" title="Audio settings">'+
      '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">'+
      '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>'+
      '</svg><span>Audio</span></button>'+
      '<div class="voicebox" id="rq-panel">'+
        '<div class="voicerow">'+
          '<select id="rq-voice" aria-label="Arabic voice"></select>'+
          '<label class="label" for="rq-rate">Speed</label>'+
          '<input type="range" id="rq-rate" min="0.5" max="1.1" step="0.05">'+
          '<span class="label" id="rq-ratev"></span>'+
          '<button class="btn" id="rq-test" type="button">Test</button>'+
          '<button class="btn" id="rq-stop" type="button">Stop</button>'+
        '</div><div class="warn" id="rq-warn" hidden></div>'+
        '<div class="acctrow"><span class="label" id="rq-who">Signed in</span>'+
        '<button class="btn logout-link" type="button">Sign out</button></div>'+
      '</div>';
    const cog=host.querySelector('#rq-cog');
    cog.onclick=()=>{
      const open=document.body.classList.toggle('gear-open');
      cog.setAttribute('aria-expanded',open);
    };
    const rIn=host.querySelector('#rq-rate'), rOut=host.querySelector('#rq-ratev');
    rIn.value=rate(); rOut.textContent=rate().toFixed(2)+'×';
    rIn.oninput=()=>{setRate(+rIn.value);rOut.textContent=(+rIn.value).toFixed(2)+'×'};
    host.querySelector('#rq-test').onclick=()=>
      speak('السَّلامُ عَلَيْكُمْ، كَيْفَ حالُكَ؟ أَنا أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ.');
    host.querySelector('#rq-stop').onclick=stop;
    host.querySelector('#rq-voice').onchange=e=>{
      const l=list(); const v=l[e.target.value]; if(v) setVoice(v.voiceURI||v.name);
    };
    showWho();
    sync();
  }
  /* auth.js handles the click via .logout-link; this just shows who you are */
  async function showWho(){
    const el=document.getElementById('rq-who'); if(!el) return;
    let name=''; try{name=localStorage.getItem('bay_name')||''}catch(e){}
    if(typeof sb!=='undefined' && sb){
      try{const {data}=await sb.auth.getUser();
        if(data&&data.user) name=name||data.user.email||'';}catch(e){}
    }
    el.textContent = name? ('Signed in as '+name) : 'Account';
  }
  function sync(){
    const sel=document.getElementById('rq-voice'), warn=document.getElementById('rq-warn');
    if(!sel) return;
    const l=list();
    sel.innerHTML='';
    if(!l.length){
      sel.innerHTML='<option>'+(CLIPS&&CLIPS.size?'Using recorded audio':'No Arabic voice')+'</option>';
      sel.disabled=true;
      if(warn && !(CLIPS&&CLIPS.size)) showWarn(warn,
        'No Arabic voice on this device.<br><b>iPhone:</b> Settings → Accessibility → Spoken Content → Voices → Arabic.'+
        '<br><b>Android:</b> Settings → Accessibility → Text-to-speech → install Arabic.');
      return;
    }
    sel.disabled=false;
    const used={};
    l.forEach((v,i)=>{
      const q=quality(v);
      let t=(v.name||'Arabic')+' ('+v.lang+')'+(q==='standard'?'':' — '+q);
      used[t]=(used[t]||0)+1; if(used[t]>1) t+=' ('+used[t]+')';
      const o=document.createElement('option');o.value=i;o.textContent=t;sel.appendChild(o);
    });
    // match by voiceURI, not object identity — getVoices() may hand back new objects
    const cur=chosen(), key=cur?(cur.voiceURI||cur.name):null;
    const idx=l.findIndex(v=>(v.voiceURI||v.name)===key);
    sel.value=String(idx<0?0:idx);
    const q=quality(cur);
    if(warn){
      if(q==='basic'||q==='standard'){
        showWarn(warn,'Your device is using its default Arabic voice. A clearer one is a free download:<br>'+
          '<b>iPhone:</b> Settings → Accessibility → Spoken Content → Voices → Arabic → tap ⤓ beside an <i>Enhanced</i> voice, then reload.');
      } else warn.hidden=true;
    }
  }
  function showWarn(warn,html){
    let done=false; try{done=localStorage.getItem(WKEY)==='1'}catch(e){}
    if(done){warn.hidden=true;return}
    warn.hidden=false;
    warn.innerHTML=html+' <button type="button" class="wdismiss">Got it</button>';
    const b=warn.querySelector('.wdismiss');
    if(b)b.onclick=()=>{try{localStorage.setItem(WKEY,'1')}catch(e){}warn.hidden=true};
  }

  if(window.speechSynthesis) speechSynthesis.onvoiceschanged=sync;
  let unlocked=false;
  ['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,()=>{
    if(unlocked)return; unlocked=true;
    try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}
    setTimeout(sync,350);
  },{once:true,passive:true}));

  window.RQ={speak,stop,mount,sync,available,aid,rate,list,chosen};
})();
