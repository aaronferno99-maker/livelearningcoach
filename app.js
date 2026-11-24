"use strict";
/* LIVE LANGUAGE COACH  v2  - Supabase-backed. Replace item banks / portfolio text below with your own. */
const CONFIG={url:"https://kjeuwzwbthgzvssiwrqk.supabase.co",key:"sb_publishable_ef0XW6YElc27l5p8D_LHwA_xPTmn8JK"};
const SK=["Listening","Speaking","Reading","Writing","Grammar","Vocabulary"];
const PORTFOLIO={
 researcher:{name:"Maria Kaisar Aaron R",role:"PhD Research Scholar, English",inst:"St. Joseph's College (Autonomous), Tiruchirappalli · Bharathidasan University",
  short:"Maria Kaisar Aaron R is a doctoral researcher in English whose work focuses on coastal, narrative-based English language teaching. He designed this platform to study how place-based stories can support undergraduate learners' English skills and confidence.",
  bio:"Doctoral research scholar in English at St. Joseph's College (Autonomous), Tiruchirappalli, registered with Bharathidasan University. His research develops coastal (Neithal) narrative-based pedagogy for English language teaching, drawing on the stories and landscapes of Tamil Nadu's southern coast. He is fluent in Tamil and English.",
  edu:["Ph.D. in English (ongoing), Bharathidasan University","M.A. English Literature, St. Joseph's College (Autonomous), Tiruchirappalli, 2020–2022 (First Class)","B.A. English Literature, Loyola College, 2017–2020 (First Class)"],
  qual:["UGC NET 2026 (95.26 percentile)","TNSET qualified"],
  items:["Therukoothu / Jama film discourse paper (Emerald / ICSSR)","Ashoka Mitran's The Rat (Mergen)"],
  interests:["English language teaching and flipped learning","Coastal and place-based narrative pedagogy","Postcolonial and decolonial literary studies","Sangam landscape taxonomy and the blue humanities"]},
 guide:{name:"Dr. V. L. Jayapaul",role:"Research Guide · Associate Professor and Dean, School of Languages and Culture",inst:"St. Joseph's College (Autonomous), Tiruchirappalli · Bharathidasan University",
  short:"Dr. V. L. Jayapaul is Associate Professor and Dean of Languages and Culture at St. Joseph's College (Autonomous), Tiruchirappalli, and supervises this doctoral research at Bharathidasan University.",
  bio:"Associate Professor and Dean of Languages and Culture at St. Joseph's College (Autonomous), Tiruchirappalli. He supervises doctoral research in English at Bharathidasan University and guides this study from design through analysis.",
  edu:[],qual:[],items:[],interests:[]}};
const CONTACT={email:"mariakaisaraaron@gmail.com",linkedin:"https://www.linkedin.com/in/maria-kaisar-aaron-r-8b3539151",whatsapp:"",place:"Tiruchirappalli, Tamil Nadu, India"}; // whatsapp: digits with country code, e.g. "919876543210" (empty = hidden)
(function(){const f=document.querySelector("footer");if(f&&!f.querySelector(".social-row")){const d=document.createElement("div");d.className="social-row";d.innerHTML=socialLinks();f.prepend(d)}})();
const PORTALS={student:{label:"Student",icon:"✎",text:"Take your tests, practise the six skills, read feedback and join live classes."},teacher:{label:"Professor",icon:"☰",text:"Unlock skills for your class, score speaking and writing, and send feedback."},researcher:{label:"Researcher",icon:"◉",text:"Manage the study, verify participants, view analytics and export data."}};
const REC={Listening:"Replay the podcast chapters and answer the chapter questions.",Speaking:"Record a 1-minute talk daily and compare it with the model dialogue.",Reading:"Read one short passage a day and note three new words.",Writing:"Write five sentences daily and revise them using the checklist.",Grammar:"Complete the tense and error-correction exercises again.",Vocabulary:"Review the word bank and use each new word in your own sentence."};
const BANK={
 Listening:{passage:"Meena's bus leaves at seven fifteen from the market stop. She must carry her lab coat and two notebooks. The practical exam is in Room 12 on the second floor, and it starts at nine. After the exam she will meet her friend Karthik at the library, not at the canteen, because the canteen closes at noon.",
  q:[["When does Meena's bus leave?",["7:15","7:50","9:00","12:00"],0],["Where is the exam?",["Room 12, second floor","Library","Canteen","Market stop"],0],["What must she carry?",["A lab coat and two notebooks","A laptop","Lunch","A map"],0],["Where will she meet Karthik?",["At the library","At the canteen","At the bus stop","In Room 12"],0],["Why not the canteen?",["It closes at noon","It is far away","It is dirty","It is crowded"],0],["What time does the exam start?",["Nine","Seven","Twelve","Ten"],0]]},
 Reading:{passage:"Tides rise and fall because of the pull of the moon's gravity on the oceans. Along the coast, fishermen read tide tables carefully, since boats can leave the harbour safely only when the water is high. Twice a month, at full moon and new moon, the sun and moon pull together and cause spring tides, which are higher than usual. Because of this, villagers move their nets farther from the shore before those days.",
  q:[["What mainly causes tides?",["The moon's gravity","Strong winds","Fishing boats","Rain"],0],["Why do fishermen read tide tables?",["Boats leave safely only at high water","To sell fish","To find the moon","To mend nets"],0],["When do spring tides occur?",["At full and new moon","Every day","Only in winter","At noon"],0],["Closest in meaning to 'carefully':",["Attentively","Carelessly","Quickly","Loudly"],0],["What can we infer about the villagers?",["They prepare for higher water","They ignore the tides","They leave the village","They stop fishing for ever"],0],["Best title:",["How the Moon Shapes Coastal Life","A Day at Sea","Nets and Boats","Rainy Season"],0]]},
 Grammar:{q:[["She ___ to college every day.",["goes","go","going","gone"],0],["If it rains, we ___ at home.",["will stay","stayed","would stayed","staying"],0],["Which sentence is correct?",["She has finished her work.","She have finished her work.","She finish her work.","She finishing her work."],0],["They ___ dinner when the power went out.",["were having","are having","have had","has"],0],["I have lived here ___ 2019.",["since","for","from","by"],0],["The books are on ___ table.",["the","a","an","some"],0]]},
 Vocabulary:{q:[["'Reluctant' means:",["unwilling","eager","angry","tired"],0],["'Abundant' means:",["plentiful","rare","small","hidden"],0],["Synonym of 'swift':",["fast","slow","heavy","quiet"],0],["The villagers were ___ to the visitors, offering food and shelter.",["hospitable","hostile","careless","distant"],0],["Opposite of 'ancient':",["modern","old","broken","wide"],0],["'Fragile' means:",["easily broken","very strong","very large","shiny"],0]]},
 Speaking:{A:"Introduce yourself and describe your hometown for about one minute.",B:"Describe a festival you enjoy and explain why."},
 Writing:{A:"Write a paragraph (80-100 words) about a person who inspires you.",B:"Write an email to your teacher requesting one day's leave."}};
const ANX=["I feel nervous when I have to speak English in class.","I worry about making mistakes when I use English.","I feel confident when I answer in English.","I get anxious when I do not understand what the teacher says in English.","I avoid speaking English when I can.","I feel relaxed when I write in English.","I worry that other students will laugh at my English.","I feel prepared for English tests."];
const ANX_REVERSE=[2,5,7]; /* indices of positively worded items (reverse-scored). PLACEHOLDER: replace with the validated instrument and its official scoring. */
const TABS={student:[["dash","My learning"],["videos","Video lectures"],["materials","Materials"],["feedback","Feedback"],["live","Live class"],["profile","Profile"]],
 teacher:[["overview","Students"],["videos","Video lectures"],["materials","Materials"],["unlock","Unlock skills"],["assess","Assess"],["live","Live class"]],
 researcher:[["research","Research"],["cohort","Cohort"],["setup","Setup"],["data","Data"],["overview","Students"],["unlock","Unlock skills"],["assess","Assess"],["videos","Video lectures"],["materials","Materials"],["live","Live class"]],
 guide:[["research","Research"],["cohort","Cohort"],["data","Data"]]};
const ROLE_NAME={student:"Student",teacher:"Professor",researcher:"Researcher",guide:"Researcher"};

const URLH=new URLSearchParams(location.hash.slice(1));let RECOVERY=URLH.get("type")==="recovery",BOOTED=false;
const AUTH_ERR=URLH.get("error_description");
const db=window.supabase?window.supabase.createClient(CONFIG.url,CONFIG.key):null;
if(db)db.auth.onAuthStateChange(ev=>{if(ev==="PASSWORD_RECOVERY"){RECOVERY=true;if(BOOTED){S={page:"newpass"};render()}}});
const $=id=>document.getElementById(id);
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let selectedSkill="Listening",skillMarks={};let user=null,profile=null,sp=null,settings={phase:"pre",week:1,rubric:{}},S={page:"home",tab:"",test:null,skill:null},mine=null,synthetic=false,channel=null,sessionNow=null,rec={};
const toast=m=>{const t=$("toast");t.textContent=m;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",3200)};
async function ok(p){const r=await p;if(r.error){toast(r.error.message);throw r.error}return r.data}
const role=()=>profile?.role||null;
const pct1=x=>x==null?"-":Math.round(x)+"%";
const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
const sd=a=>{if(a.length<2)return null;const m=mean(a);return Math.sqrt(a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1))};
const median=a=>{if(!a.length)return null;const s=[...a].sort((x,y)=>x-y),h=s.length>>1;return s.length%2?s[h]:(s[h-1]+s[h])/2};
const fx=(x,d=1)=>x==null||isNaN(x)?"-":x.toFixed(d);


/* ===== v5 Helpers: Audio Feedback, Quotes, Weather/Clock, Skill SVGs ===== */
const QUOTES_LOGIN=[
  "Every coastal tide begins with a single ripple—welcome back to your English journey!",
  "Small daily practice builds lasting fluency. You've got this today!",
  "Language is your bridge to the world. Take one confident step forward."
];
const QUOTES_LOW=[
  "Mistakes are proof you are trying. Review the feedback, breathe, and try again—you are growing!",
  "Every expert started where you are today. Use this buzz as a gentle nudge to level up!",
  "Low scores are just stepping stones. Revisit the coastal module and watch your next score rise!"
];
const QUOTES_GOOD=[
  "Brilliant work! Your steady practice is shining through.",
  "Great score! Keep riding this wave of momentum."
];
let __audioCtx=null;
function getAudioCtx(){
  const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return null;
  if(!__audioCtx)__audioCtx=new Ctx();
  if(__audioCtx.state==="suspended")__audioCtx.resume().catch(()=>{});
  return __audioCtx;
}
document.addEventListener("pointerdown",()=>{getAudioCtx()},{once:true,passive:true});
function playFeedbackSound(good){
  try{
    const ctx=getAudioCtx();if(!ctx)return;
    const now=ctx.currentTime;
    if(good){
      // Ascending celebration chime + synthesized applause bursts
      [523.25,659.25,783.99,1046.5].forEach((freq,i)=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type="triangle";o.frequency.setValueAtTime(freq,now+i*0.08);
        g.gain.setValueAtTime(0.001,now+i*0.08);
        g.gain.exponentialRampToValueAtTime(0.14,now+i*0.08+0.02);
        g.gain.exponentialRampToValueAtTime(0.001,now+i*0.08+0.34);
        o.connect(g);g.connect(ctx.destination);o.start(now+i*0.08);o.stop(now+i*0.08+0.36);
      });
      const bufLen=Math.floor(ctx.sampleRate*0.09);
      for(let c=0;c<8;c++){
        const buf=ctx.createBuffer(1,bufLen,ctx.sampleRate),data=buf.getChannelData(0);
        for(let k=0;k<bufLen;k++)data[k]=(Math.random()*2-1)*Math.exp(-k/(ctx.sampleRate*0.025));
        const src=ctx.createBufferSource(),flt=ctx.createBiquadFilter(),g=ctx.createGain();
        src.buffer=buf;flt.type="bandpass";flt.frequency.value=1200+Math.random()*900;flt.Q.value=1.2;
        const t=now+c*0.095+Math.random()*0.03;
        g.gain.setValueAtTime(0.22,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.085);
        src.connect(flt);flt.connect(g);g.connect(ctx.destination);src.start(t);
      }
    }else{
      // Unmistakable dual-tone low buzz sound
      [0,0.22].forEach(offset=>{
        [135,142].forEach(freq=>{
          const o=ctx.createOscillator(),flt=ctx.createBiquadFilter(),g=ctx.createGain();
          o.type="sawtooth";o.frequency.setValueAtTime(freq,now+offset);
          flt.type="lowpass";flt.frequency.value=520;
          g.gain.setValueAtTime(0.001,now+offset);
          g.gain.exponentialRampToValueAtTime(0.16,now+offset+0.02);
          g.gain.exponentialRampToValueAtTime(0.001,now+offset+0.19);
          o.connect(flt);flt.connect(g);g.connect(ctx.destination);
          o.start(now+offset);o.stop(now+offset+0.2);
        });
      });
    }
  }catch(e){}
}
function showQuoteModal(kind,scoreLabel=""){
  const m=$("quoteModal");if(!m)return;
  const list=kind==="low"?QUOTES_LOW:kind==="good"?QUOTES_GOOD:QUOTES_LOGIN;
  const q=list[Math.floor(Math.random()*list.length)];
  const cls=kind==="low"?"glow-low":kind==="good"?"glow-good":"";
  const badge=kind==="low"?"Keep Going!":kind==="good"?"Appreciation!":"Welcome Back!";
  m.innerHTML=`<div class="quote-box ${cls}">
    <div class="eyebrow">${badge}</div>
    <h2 id="quoteTitle" style="margin:6px 0">${scoreLabel?esc(scoreLabel):"Daily Motivation"}</h2>
    <blockquote>“${esc(q)}”</blockquote>
    <button type="button" class="primary" onclick="document.getElementById('quoteModal').classList.add('hidden')">Continue</button>
  </div>`;
  m.classList.remove("hidden");
}
const SKILL_SVGS={
  Listening:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(92,89,232,0.1)"/><circle cx="24" cy="28" r="5" fill="#5C59E8"/><path class="skill-arc-1" d="M32 20a11 11 0 010 16" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/><path class="skill-arc-2" d="M37 15a18 18 0 010 26" stroke="#5C59E8" stroke-width="2.2" stroke-linecap="round"/></svg>',
  Speaking:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(20,184,166,0.12)"/><rect class="eq-bar eq-1" x="15" y="20" width="4" height="18" rx="2" fill="#5C59E8"/><rect class="eq-bar eq-2" x="22" y="14" width="4" height="24" rx="2" fill="#14B8A6"/><rect class="eq-bar eq-3" x="29" y="17" width="4" height="21" rx="2" fill="#5C59E8"/><rect class="eq-bar eq-4" x="36" y="22" width="4" height="16" rx="2" fill="#14B8A6"/></svg>',
  Reading:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(92,89,232,0.1)"/><rect x="16" y="15" width="24" height="26" rx="3" stroke="#5C59E8" stroke-width="2" fill="#fff"/><line x1="20" y1="21" x2="36" y2="21" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="27" x2="34" y2="27" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/><line class="read-scan" x1="18" y1="19" x2="38" y2="19" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/></svg>',
  Writing:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(20,184,166,0.12)"/><path class="ink-draw" d="M15 37 Q22 32 28 36 T41 35" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/><g class="pen-glide"><path d="M22 30l12-12 4 4-12 12-5 1 1-5z" fill="#5C59E8"/></g></svg>',
  Grammar:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(92,89,232,0.1)"/><line x1="20" y1="22" x2="36" y2="28" stroke="#94A3B8" stroke-width="1.8"/><line x1="20" y1="34" x2="36" y2="28" stroke="#94A3B8" stroke-width="1.8"/><circle class="syntax-node-a" cx="19" cy="21" r="4.5" fill="#5C59E8"/><circle class="syntax-node-b" cx="19" cy="35" r="4.5" fill="#14B8A6"/><circle cx="37" cy="28" r="5" fill="#4338CA"/></svg>',
  Vocabulary:'<svg viewBox="0 0 56 56" width="44" height="44" fill="none"><rect x="6" y="6" width="44" height="44" rx="14" fill="rgba(20,184,166,0.12)"/><line x1="18" y1="33" x2="28" y2="19" stroke="#CBD5E1" stroke-width="1.6"/><line x1="28" y1="19" x2="38" y2="32" stroke="#CBD5E1" stroke-width="1.6"/><circle class="vocab-dot-1" cx="28" cy="19" r="4.5" fill="#5C59E8"/><circle class="vocab-dot-2" cx="18" cy="33" r="4" fill="#14B8A6"/><circle class="vocab-dot-3" cx="38" cy="32" r="4" fill="#5C59E8"/></svg>'
};
let teleTimer=null;
function startTelemetry(){
  clearInterval(teleTimer);
  const tick=()=>{
    const dEl=$("liveDate"),tEl=$("liveTime");
    if(!dEl||!tEl)return;
    const now=new Date();
    dEl.textContent=now.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"});
    tEl.textContent=now.toLocaleTimeString(undefined,{hour:"2-digit",minute:"2-digit",second:"2-digit"});
  };
  tick();teleTimer=setInterval(tick,1000);
  const wEl=$("liveWeather"),lEl=$("liveLoc");
  if(!wEl||!lEl)return;
  const loadWeather=async(lat,lon,fallbackLabel)=>{
    try{
      const [wr,gr]=await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`),
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
      ]);
      const wj=await wr.json(),gj=await gr.json();
      if(wj?.current)wEl.textContent=`${Math.round(wj.current.temperature_2m)}°C · Live`;
      const city=gj?.city||gj?.locality||gj?.principalSubdivision;
      const state=gj?.principalSubdivision;
      lEl.textContent=city?(state&&city!==state?`${city}, ${state}`:city):fallbackLabel;
    }catch(e){lEl.textContent=fallbackLabel;wEl.textContent="29°C · Live";}
  };
  const detectGps=()=>{
    if(!navigator.geolocation){loadWeather(10.7905,78.7047,"Tiruchirappalli, TN");return;}
    lEl.textContent="Locating GPS…";
    navigator.geolocation.getCurrentPosition(
      pos=>loadWeather(pos.coords.latitude.toFixed(4),pos.coords.longitude.toFixed(4),`${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}`),
      ()=>loadWeather(10.7905,78.7047,"Tiruchirappalli, TN"),
      {enableHighAccuracy:true,timeout:10000,maximumAge:30000}
    );
  };
  detectGps();
  const locCard=$("liveLocCard");
  if(locCard)locCard.onclick=detectGps;
}

/* ------------------------------------------------------------- navigation */
const LAND=["about","purpose","framework","contact","portals","copyright"];
function go(p,t){
 const a=$("app");
 if(a){a.classList.add("is-leaving");setTimeout(()=>{S.page=p;if(t)S.tab=t;render();a.classList.remove("is-leaving");window.scrollTo({top:0,behavior:"smooth"})},150);}
 else{S.page=p;if(t)S.tab=t;render();}
}
function buildNav(){
 let items;
 if(!user)items=[["home","Home"],["about","About"],["purpose","Research"],["framework","Framework"],["portfolio","Portfolio"],["contact","Contact"],["portals","Portals"],["join","Join live"]];
 else items=(TABS[role()]||[]).map(([t,l])=>["app:"+t,l]);
 $("nav").innerHTML=items.map(([k,l])=>{const tab=k.startsWith("app:")?k.slice(4):null;const act=tab?(S.page==="app"&&S.tab===tab):(S.page===k);return `<button data-act="nav" data-k="${k}" class="${act?"active":""}">${l}</button>`}).join("");
 $("who").textContent=user?`${profile?.full_name||user.email} · ${ROLE_NAME[role()]||""}`:"Not signed in";
 $("authBtn").textContent=user?"Sign out":"Sign in";
}
async function loadUser(){
 const {data}=await db.auth.getSession();user=data.session?.user||null;
 if(!user){profile=null;sp=null;return}
 profile=await ok(db.from("profiles").select("*").eq("id",user.id).maybeSingle());
 sp=profile?.role==="student"?await ok(db.from("student_profiles").select("*").eq("user_id",user.id).maybeSingle()):null;
 const st=await ok(db.from("app_settings").select("*").eq("id",1).maybeSingle());if(st)settings=st;
}
const homeTab=()=>({student:"dash",teacher:"overview",researcher:"research",guide:"research"}[role()]||"dash");

/* ------------------------------------------------------------- render */
async function render(){
 if(!(S.page==="app"&&S.tab==="videos"&&S.video))stopPlayer();
 buildNav();if(user)watchLive();else unwatchLive();const a=$("app");
 try{
  if(S.page==="home"){a.innerHTML=`<div class="view-enter">${landingHome()}</div>`;startTelemetry()}else if(LAND.includes(S.page)){a.innerHTML=`<div class="view-enter">${landingSection(S.page)}</div>`}
  else if(S.page==="portfolio")a.innerHTML=portfolioPage();
  else if(S.page.startsWith("staff-"))a.innerHTML=staffPage(S.page.slice(6));
  else if(S.page==="login")a.innerHTML=loginPage();
  else if(S.page==="forgot")a.innerHTML=forgotPage();
  else if(S.page==="newpass")a.innerHTML=newPassPage();
  else if(S.page==="register")a.innerHTML=registerPage();
  else if(S.page==="join")a.innerHTML=joinPage();
  else if(S.page==="play")a.innerHTML=playPage();
  else if(S.page==="app"){
   if(!user){go("login");return}
   if(!TABS[role()]?.some(t=>t[0]===S.tab)&&!(role()==="student"&&["test","anx"].includes(S.tab)))S.tab=homeTab();
   buildNav();a.innerHTML='<div class="card muted">Loading…</div>';
   a.innerHTML=await TAB[S.tab]();
  }
 }catch(e){console.error(e);a.innerHTML=`<div class="notice">Something went wrong: ${esc(e.message||e)}<br>If this is a new Supabase project, run schema.sql first.</div>`}
 if(S.after){const f=S.after;S.after=null;f()}
}

/* ------------------------------------------------------------- landing + auth */
function landingHome(){
 return `<div class="hero"><div><div class="eyebrow">ENGLISH LANGUAGE LEARNING &amp; RESEARCH PLATFORM</div><h1>Learn, practise and grow across six English skills.</h1><p>Interactive lessons, professor-guided progression, weekly assessment and personal feedback, built for undergraduate learners.</p><div class="actions"><button class="primary" data-act="nav" data-k="register">Register as a student</button><button class="soft" data-act="nav" data-k="login">Student login</button><button class="soft" data-act="nav" data-k="framework">Explore 6 skills →</button></div></div><div class="orb"><svg viewBox="0 0 180 180" width="150" height="150" fill="none"><circle class="orbit-slow" cx="90" cy="90" r="72" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="8 6"/><circle class="orbit-reverse" cx="90" cy="90" r="50" stroke="rgba(94,234,212,0.55)" stroke-width="1.5"/><path class="wave-float" d="M46 94 Q68 74 90 94 T134 94" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg></div></div>

 <div class="live-telemetry" aria-label="Live date, time, weather and location">
   <button type="button" class="tele-item tele-join" data-act="nav" data-k="join" aria-label="Join live class"><div class="tele-icon"><span class="join-dot"></span></div><div><small>Live class</small><strong>Join Live</strong></div><span class="join-arrow">→</span></button>
   <div class="tele-item"><div class="tele-icon">📅</div><div><small>Date</small><strong id="liveDate">--</strong></div></div>
   <div class="tele-item"><div class="tele-icon">🕒</div><div><small>Live Time</small><strong id="liveTime">--</strong></div></div>
   <div class="tele-item"><div class="tele-icon">🌤️</div><div><small>Live Weather</small><strong id="liveWeather">Loading…</strong></div></div>
   <div id="liveLocCard" class="tele-item tele-refresh" title="Tap to refresh GPS location"><div class="tele-icon">📍</div><div><small>Location (tap for GPS)</small><strong id="liveLoc">Detecting…</strong></div></div>
 </div>

 <div class="head"><div class="eyebrow">PLATFORM DIRECTORY</div><h2>Choose a section to open</h2><p>Click any button below to smoothly open that workspace.</p></div>
 <div class="features three">
   <button class="feature" style="text-align:left" data-act="nav" data-k="framework">${SKILL_SVGS.Vocabulary}<h3>Six Skills Framework</h3><p>Interactive motion cards for Listening, Speaking, Reading, Writing, Grammar &amp; Vocabulary.</p></button>
   <button class="feature" style="text-align:left" data-act="nav" data-k="portals">${SKILL_SVGS.Grammar}<h3>Choose Your Portal</h3><p>Student, Professor, and Researcher sign-in workspaces.</p></button>
   <button class="feature" style="text-align:left" data-act="nav" data-k="purpose">${SKILL_SVGS.Reading}<h3>The Research</h3><p>Coastal narrative pedagogy, study purpose, and team.</p></button>
   <button class="feature" style="text-align:left" data-act="nav" data-k="portfolio">${SKILL_SVGS.Writing}<h3>Portfolio</h3><p>Academic profile, qualifications, and publications.</p></button>
   <button class="feature" style="text-align:left" data-act="nav" data-k="join">${SKILL_SVGS.Listening}<h3>Join Live</h3><p>Enter a classroom session code for live polls and quizzes.</p></button>
   <button class="feature" style="text-align:left" data-act="nav" data-k="contact">${SKILL_SVGS.Speaking}<h3>Contact Details</h3><p>Connect with Maria Kaisar Aaron R via LinkedIn or Gmail.</p></button>
 </div>`;
}
function landingSection(sec){
 const P=PORTFOLIO,y=new Date().getFullYear();
 const back=`<div class="actions" style="margin:0 0 14px"><button class="outline" data-act="nav" data-k="home">← Back to home</button></div>`;
 const bio=(p,tag)=>`<div class="card"><div class="eyebrow">${tag}</div><h3>${esc(p.name)}</h3><p class="muted">${esc(p.role)}<br>${esc(p.inst)}</p><p>${esc(p.short)}</p></div>`;
 const portal=k=>`<div class="card portal"><i>${PORTALS[k].icon}</i><h3>${PORTALS[k].label} portal</h3><p class="muted">${PORTALS[k].text}</p><button class="primary" data-act="nav" data-k="${k==="student"?"login":"staff-"+k}">${k==="student"?"Student login":PORTALS[k].label+" login"}</button>${k==="student"?`<button class="soft" data-act="nav" data-k="register">Register</button>`:""}</div>`;
 if(sec==="portals")return back+`<div class="head"><div class="eyebrow">LOG IN</div><h2>Choose your portal</h2></div><div class="features three">${["student","teacher","researcher"].map(portal).join("")}</div>`;
 if(sec==="about")return back+`<div class="head"><div class="eyebrow">ABOUT THE WEBSITE</div><h2>What Live Language Coach is</h2></div><div class="card"><p>Live Language Coach is a web-based English learning platform for undergraduate students across six skills with guided materials, practice activities, assessments and personal feedback.</p></div>`;
 if(sec==="framework"){
  const desc={Listening:"Podcasts, conversations and comprehension.",Speaking:"Recorded responses, dialogues and role-play.",Reading:"Passages, inference and vocabulary in context.",Writing:"Paragraphs, emails and narratives with rubric feedback.",Grammar:"Sentence construction, tense and error correction.",Vocabulary:"Word banks, contextual use and word games."};
  const focus={
    Listening:"Guided listening tasks pair authentic South Tamil Nadu coastal stories with scaffolded comprehension prompts.",
    Speaking:"Low-anxiety speaking turns help students transition from Tamil-medium comfort to clear academic English.",
    Reading:"Structured pre-reading, skimming, and critical reflection exercises rooted in familiar regional contexts.",
    Writing:"Step-by-step drafting supported by surface-strategy error feedback and personal instructor notes.",
    Grammar:"Micro-lessons connecting tense, concord, and clause structure directly to coastal reading texts.",
    Vocabulary:"Interactive word cards with pronunciation cues, collocations, and Alai coach practice."
  };
  const stages=[
    ["01","Pre-test","Baseline diagnostic across six English skills."],
    ["02","Intervention","Place-based coastal narrative modules."],
    ["03","Weekly assessments","Continuous formative checks & coach feedback."],
    ["04","Post-test","Measured proficiency gain & research synthesis."]
  ];
  const m=skillMarks[selectedSkill], fGlow=m==="good"?" glow-good":m==="low"?" glow-low":"";
  return back+`<div class="head"><div class="eyebrow">LEARNING FRAMEWORK</div><h2>Six skills, one pathway</h2><p>Click any skill card to inspect its coastal pedagogy focus and test score feedback.</p></div>
  <div class="features">${SK.map(k=>{
    const act=k===selectedSkill, km=skillMarks[k], kg=km==="good"?" glow-good":km==="low"?" glow-low":"";
    return `<button type="button" class="feature skill-btn${act?" is-active":""}${kg}" data-act="pickskill" data-k="${k}"><div class="skill-top">${SKILL_SVGS[k]||""}<span class="skill-pill">${act?"Active":"Explore"}</span></div><h3 style="margin:0">${k}</h3><p style="margin:0">${desc[k]}</p></button>`;
  }).join("")}</div>
  <div class="card focus-banner${fGlow}">
    <div style="flex:1;min-width:240px"><div class="eyebrow">${selectedSkill} Module Focus</div><p style="margin:6px 0 0">${focus[selectedSkill]}</p></div>
    <div class="focus-actions">
      <button type="button" class="btn-good" data-act="simmark" data-kind="good">Simulate Good Mark (85%)</button>
      <button type="button" class="btn-low" data-act="simmark" data-kind="low">Simulate Low Mark (35%)</button>
      <button type="button" class="primary" data-act="nav" data-k="register">Start pathway</button>
    </div>
  </div>
  <div class="card pathway-card">
    <div class="pathway-head"><h3 style="margin:0">Research Intervention Pathway</h3><span class="muted small">4-Stage Longitudinal Sequence</span></div>
    <div class="pathway-wrap">
      <div class="pathway-line" aria-hidden="true"></div>
      <div class="pathway-grid">${stages.map(([n,t,d])=>`<div class="pathway-step"><span class="pathway-num">${n}</span><h4>${t}</h4><p>${d}</p></div>`).join("")}</div>
    </div>
  </div>`;
 }
 if(sec==="purpose")return back+`<div class="head"><div class="eyebrow">THE RESEARCH</div><h2>Purpose &amp; Team</h2></div><div class="card"><p>This study investigates how coastal, place-based narratives, taught through a flipped-classroom design, support undergraduate English learning in Tamil Nadu.</p><div class="notice">Participation is part of an academic research study with informed consent and pseudonymised results.</div></div><div class="grid2" style="grid-template-columns:1fr 1fr;margin-top:14px">${bio(P.researcher,"RESEARCHER")}${bio(P.guide,"RESEARCH GUIDE")}</div>`;
 if(sec==="contact")return back+`<div class="head"><div class="eyebrow">CONTACT</div><h2>Maria Kaisar Aaron R</h2></div><div class="card stack"><p><b>Name:</b> Maria Kaisar Aaron R</p><p><b>Gmail:</b> <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p><p><b>LinkedIn:</b> <a href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer">${CONTACT.linkedin}</a></p>${CONTACT.whatsapp?`<p><b>WhatsApp:</b> <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener noreferrer">+${CONTACT.whatsapp}</a></p>`:""}<div class="social-row">${socialLinks()}</div><p><b>Institution:</b> St. Joseph's College (Autonomous), ${esc(CONTACT.place)}</p></div>`;
 if(sec==="copyright")return back+`<div class="head"><div class="eyebrow">COPYRIGHT</div><h2>Copyright and use</h2></div><div class="card"><p>© ${y} Maria Kaisar Aaron R. All rights reserved.</p></div>`;
 return landingHome();
}
function portfolioPage(){
 const P=PORTFOLIO,list=(t,a)=>a.length?`<h4>${t}</h4><ul>${a.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>`:"";
 const card=(p,tag)=>`<div class="card"><div class="eyebrow">${tag}</div><h2>${esc(p.name)}</h2><p class="muted">${esc(p.role)}<br>${esc(p.inst)}</p><p>${esc(p.bio)}</p>${list("Education",p.edu)}${list("Qualifications",p.qual)}${list("Publications",p.items)}${list("Research interests",p.interests)}</div>`;
 return `<div class="head"><div class="eyebrow">PORTFOLIO</div><h1>Researcher and research guide</h1><p>Academic profiles for the people behind Live Language Coach.</p></div><div class="stack">${card(P.researcher,"RESEARCHER")}${card(P.guide,"RESEARCH GUIDE")}</div><div class="actions"><button class="outline" data-act="nav" data-k="home">← Back to home</button><button class="soft" data-act="nav" data-k="contact">Contact the researcher</button></div>`;
}
function staffPage(r){
 const P=PORTALS[r];if(!P)return landing();
 return `<div class="card auth-card view-enter stack" style="max-width:460px;margin:40px auto"><div class="auth-head"><div><div class="eyebrow">${P.label.toUpperCase()} PORTAL</div><h2 style="margin:4px 0">${P.label} login</h2></div><svg viewBox="0 0 56 56" width="46" height="46" fill="none"><circle class="orbit-slow" cx="28" cy="28" r="22" stroke="#14B8A6" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="28" cy="28" r="8" fill="rgba(92,89,232,0.18)"/></svg></div><p class="muted">${P.text}</p>
 <form data-form="staff" data-role="${r}" class="stack"><label>Email<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="primary">Log in as ${P.label.toLowerCase()}</button></form><p class="small"><a href="#" data-act="nav" data-k="forgot">Forgot password?</a></p>
 <details><summary class="muted">First time here? Activate your invited account</summary><form data-form="staffnew" data-role="${r}" class="stack" style="margin-top:12px"><label>Full name<input name="full_name" required></label><label>Invited email address<input name="email" type="email" required></label><label>Create a password (min 8 characters)<input name="password" type="password" minlength="8" required autocomplete="new-password"></label><button class="soft">Activate account</button><p class="muted small">Only works for the email address the researcher invited for this role.</p></form></details>
 <p class="muted small">Student? <a href="#" data-act="nav" data-k="login">Use the student portal</a> · <a href="#" data-act="nav" data-k="home">Back to home</a></p></div>`;
}
const loginPage=()=>`<div class="card auth-card view-enter stack" style="max-width:440px;margin:40px auto"><div class="auth-head"><div><div class="eyebrow">STUDENT PORTAL</div><h2 style="margin:4px 0">Student login</h2></div><svg viewBox="0 0 56 56" width="46" height="46" fill="none"><circle class="orbit-slow" cx="28" cy="28" r="22" stroke="#5C59E8" stroke-width="1.5" stroke-dasharray="5 4"/><path class="wave-float" d="M16 30 Q22 22 28 30 T40 30" stroke="#14B8A6" stroke-width="2.2" stroke-linecap="round"/></svg></div><form data-form="login" class="stack"><label>Email<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="primary">Log in</button></form><p class="small"><a href="#" data-act="nav" data-k="forgot">Forgot password?</a></p><p class="muted small">New student? <a href="#" data-act="nav" data-k="register">Register</a>. Professors, the researcher and the guide have their own portals: <a href="#" data-act="nav" data-k="staff-teacher">Professor</a> · <a href="#" data-act="nav" data-k="staff-researcher">Researcher</a>.</p></div>`;
const forgotPage=()=>`<div class="card auth-card stack" style="max-width:460px;margin:40px auto"><div class="eyebrow">FORGOT PASSWORD</div><h2>Reset your password</h2><p class="muted">Students: your password was your last name and year of birth, for example <b>Aaron1999</b>, unless you changed it. Try that first.</p>
 <form data-form="forgot" class="stack"><label>Your registered email<input name="email" type="email" required autocomplete="username"></label><button class="primary">Send reset link</button></form>
 <p class="muted small">You can also ask your professor or the researcher to reset it for you.</p><p class="small"><a href="#" data-act="nav" data-k="login">Back to login</a></p></div>`;
const newPassPage=()=>`<div class="card auth-card stack" style="max-width:460px;margin:40px auto"><div class="eyebrow">NEW PASSWORD</div><h2>Choose a new password</h2>${user?"":'<div class="notice">This reset link has expired or was already used. Please ask for a new one.</div>'}
 <form data-form="newpass" class="stack"><label>New password (at least 6 characters)<input name="p1" type="password" minlength="6" required autocomplete="new-password"></label><label>Type it again<input name="p2" type="password" minlength="6" required autocomplete="new-password"></label><button class="primary" ${user?"":"disabled"}>Save new password</button></form></div>`;
function registerPage(){
 const f=(n,l,t="text",x="")=>`<label>${l}<input name="${n}" type="${t}" ${x}></label>`;
 return `<div class="card stack" style="max-width:720px;margin:30px auto"><h2>Student registration</h2><form data-form="register" class="stack">
 <div class="form-grid">${f("full_name","Full name","text",'required data-pwsrc="1"')}${f("student_no","Student ID number","text","required")}${f("mobile","Mobile number (10 digits)","tel",'required pattern="[6-9][0-9]{9}"')}${f("email","Email address","email","required")}${f("birth_year","Year of birth","number",'required min="1980" max="2012" data-pwsrc="1" placeholder="e.g. 2005"')}${f("place","Native place / district","text","required")}
 <label>Gender<select name="gender" required><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></label>
 ${f("subject","Subject / stream (e.g. Tamil, English)","text","required")}
 <label>Study level<select name="study_level" required data-chg="studylevel"><option value="">Select</option><option value="UG">Undergraduate (UG)</option><option value="PG">Postgraduate (PG)</option></select></label>
 <label>Year<select name="year" required><option value="">Select</option><option value="1">I Year</option><option value="2">II Year</option><option value="3">III Year</option></select></label>
 <label>Rural / Urban<select name="locality" required><option value="">Select</option><option value="Rural">Rural</option><option value="Urban">Urban</option></select></label>
 ${f("college","College / Department","text","required")}</div>
 <div class="pwbox"><div><div class="eyebrow">YOUR PASSWORD</div><output id="pwOut" class="pwout">Type your full name and year of birth</output><p class="muted small">Your password is your <b>last name</b> followed by your <b>year of birth</b>, for example <b>Aaron1999</b>. Write it down. You can change it later under Profile.</p></div><input type="hidden" name="password" id="pwVal"></div>
 <label class="check"><input type="checkbox" name="consent_research" required> I have read the study information and give informed consent to take part in this research.</label>
 <label class="check"><input type="checkbox" name="consent_email" checked> Send my assessment feedback by email.</label>
 <label class="check"><input type="checkbox" name="consent_whatsapp"> Send short notifications by WhatsApp (needs your consent; you can change this later).</label>
 <button class="primary">Create account</button></form><div class="notice">Registering with many classmates on the same Wi-Fi? Sign-ups are limited per network, so if you see a "rate limit" message, wait five minutes and try again, or use mobile data. Use an email address you can open. Mobile OTP is not enabled in this version.</div></div>`;
}
const FORM={
 async login(f,d){const r=await db.auth.signInWithPassword({email:d.get("email"),password:d.get("password")});if(r.error)return toast(r.error.message);await loadUser();
  if(role()&&role()!=="student"){const k=role()==="teacher"?"Professor":ROLE_NAME[role()];await db.auth.signOut();user=null;profile=null;sp=null;buildNav();return toast(`This is a ${k.toLowerCase()} account. Please use the ${k} portal.`)}
  go("app",homeTab());setTimeout(()=>showQuoteModal("login"),350)},
 async staff(f,d){const want=f.dataset.role;const r=await db.auth.signInWithPassword({email:d.get("email"),password:d.get("password")});if(r.error)return toast(r.error.message);await loadUser();
  if(role()!==want){const got=role();await db.auth.signOut();user=null;profile=null;sp=null;buildNav();return toast(got==="guide"?"The research guide portal has been closed. Please contact the researcher.":got==="student"?`This account is not registered as ${PORTALS[want].label.toLowerCase()}. Ask the researcher for an invitation.`:`This account belongs to a different portal (${PORTALS[got]?.label||got}). Please use that portal.`)}
  go("app",homeTab())},
 async staffnew(f,d){const want=f.dataset.role;const r=await db.auth.signUp({email:String(d.get("email")).trim(),password:d.get("password"),options:{data:{full_name:String(d.get("full_name")).trim()}}});if(r.error)return toast(r.error.message);
  if(!r.data.session)return toast("Check your email to confirm, then log in here.");
  await loadUser();if(role()!==want){await db.auth.signOut();user=null;profile=null;sp=null;buildNav();return toast("This email has not been invited for this portal. Ask the researcher to invite it, then try again.")}
  go("app",homeTab());toast("Welcome!")},
 async register(f,d){
  const meta={};["full_name","student_no","mobile","birth_year","place","gender","year","college","subject","study_level","locality"].forEach(k=>meta[k]=String(d.get(k)||"").trim());
  const by=+meta.birth_year,pw=genPassword(meta.full_name,by);if(!(by>=1980&&by<=2012))return toast("Enter your year of birth, e.g. 2005.");if(!pw)return toast("Type your full name in English letters.");
  meta.age=String(new Date().getFullYear()-by);d.set("password",pw);
  meta.consent_research=!!d.get("consent_research");meta.consent_email=!!d.get("consent_email");meta.consent_whatsapp=!!d.get("consent_whatsapp");
  if(!/^[6-9]\d{9}$/.test(meta.mobile))return toast("Enter a valid 10-digit mobile number.");
  const r=await db.auth.signUp({email:String(d.get("email")).trim(),password:d.get("password"),options:{data:meta}});
  if(r.error)return toast(r.error.message);
  if(!r.data.session){$("app").innerHTML='<div class="card" style="max-width:520px;margin:40px auto"><h2>Check your email</h2><p>We sent a confirmation link. After confirming, log in. The researcher will verify your details and give you a research ID.</p></div>';return}
  await loadUser();go("app","dash");toast(`Welcome! Your password is ${pw}. Please remember it.`)},
 async forgot(f,d){const email=String(d.get("email")).trim();const r=await db.auth.resetPasswordForEmail(email,{redirectTo:location.origin+"/"});
  if(r.error)return toast(/rate|limit/i.test(r.error.message)?"Too many reset emails were sent just now. Please try again in an hour, or ask your professor to reset your password.":r.error.message);
  $("app").innerHTML=`<div class="card auth-card stack" style="max-width:460px;margin:40px auto"><div class="eyebrow">CHECK YOUR EMAIL</div><h2>Reset link sent</h2><p>If an account exists for <b>${esc(email)}</b>, an email with a reset link is on its way. Open it on this device and choose a new password. Check your spam folder too.</p><p class="muted small">No email after 10 minutes? Ask your professor or the researcher to reset your password for you.</p><button class="soft" data-act="nav" data-k="login">Back to login</button></div>`},
 async newpass(f,d){const a1=d.get("p1"),a2=d.get("p2");if(a1!==a2)return toast("The two passwords do not match.");const r=await db.auth.updateUser({password:a1});if(r.error)return toast(r.error.message);
  RECOVERY=false;history.replaceState(history.state,"",location.pathname);await loadUser();toast("Your password has been changed.");user?go("app",homeTab()):go("login")},
 async chpw(f,d){const a1=d.get("p1"),a2=d.get("p2");if(a1!==a2)return toast("The two passwords do not match.");const r=await db.auth.updateUser({password:a1});if(r.error)return toast(r.error.message);f.reset();toast("Password changed. Use the new one next time you log in.")},
};
function genPassword(name,by){
 const w=String(name||"").replace(/[^A-Za-z\s]/g," ").split(/\s+/).filter(Boolean);if(!w.length||!by)return "";
 let pick=[...w].reverse().find(x=>x.length>=3)||w.reduce((a,b)=>b.length>a.length?b:a);
 return pick[0].toUpperCase()+pick.slice(1).toLowerCase()+by}
document.addEventListener("input",e=>{if(!e.target.closest("[data-pwsrc]"))return;const f=e.target.form;const pw=genPassword(f.full_name.value,+f.birth_year.value>=1980&&+f.birth_year.value<=2012?f.birth_year.value:"");const o=$("pwOut");if(o){o.textContent=pw||"Type your full name and year of birth";o.classList.toggle("ready",!!pw)}$("pwVal").value=pw});

/* ------------------------------------------------------------- student */
async function loadMine(){
 const [att,unl,fb,qr,mat]=await Promise.all([ok(db.from("attempts").select("*").eq("student_id",user.id).order("created_at")),ok(db.from("skill_unlocks").select("*")),ok(db.from("feedback").select("*").eq("student_id",user.id).order("created_at",{ascending:false})),ok(db.from("questionnaire_responses").select("*").eq("student_id",user.id)),ok(db.from("materials").select("*").order("created_at",{ascending:false}))]);
 mine={att,unl,fb,qr,mat};
}
const unlockedFor=k=>mine.unl.some(u=>u.skill===k&&u.unlocked&&(u.student_id==null||u.student_id===user.id));
function skillStatus(k){
 const a=mine.att.filter(x=>x.skill===k);
 if(a.some(x=>x.status==="pending"))return "Assessment pending";
 if(settings.phase==="intervention"){
  if(!unlockedFor(k))return "Locked";
  const w=a.filter(x=>x.kind==="weekly"),cur=w.find(x=>x.week===settings.week);
  if(cur)return +cur.pct<50?"Needs improvement":"Completed";
  return w.length?"In progress":"Available";
 }
 const kind=settings.phase;const d=a.find(x=>x.kind===kind);
 return d?(+d.pct<50?"Needs improvement":"Completed"):"Available";
}
const chip=s=>`<span class="chip c-${s.replace(/\s/g,"")}">${s}</span>`;
const latest=k=>{const a=mine.att.filter(x=>x.skill===k&&x.pct!=null);return a.length?+a[a.length-1].pct:null};
async function dash(){
 await loadMine();
 const ph=settings.phase,phName={pre:"Pre-test",intervention:"Intervention",post:"Post-test"}[ph];
 const anx=mine.qr.find(q=>q.phase===ph);
 const cards=SK.map(k=>{
  const st=skillStatus(k);let btn="";
  const kind=ph==="intervention"?"weekly":ph,done=mine.att.find(x=>x.skill===k&&x.kind===kind&&(kind!=="weekly"||x.week===settings.week));
  if(ph==="intervention"){
   if(!unlockedFor(k))btn='<span class="muted small">Waiting for your professor to unlock</span>';
   else btn=`<button class="soft" data-act="mat" data-k="${k}">Materials</button> `+(done?'<span class="muted small">This week done ✓</span>':`<button class="primary" data-act="start" data-k="${k}" data-kind="weekly">Weekly test (week ${settings.week})</button>`);
  }else btn=done?`<span class="muted small">${phName} submitted ✓</span>`:`<button class="primary" data-act="start" data-k="${k}" data-kind="${ph}">Start ${phName.toLowerCase()}</button>`;
  const sc=latest(k),glowCls=sc==null?"":(sc>=60?" glow-good":" glow-low");
  return `<div class="card skill${glowCls}"><div class="row"><div style="display:flex;align-items:center;gap:8px">${SKILL_SVGS[k]||""}<h3>${k}</h3></div>${chip(st)}</div><div class="big">${pct1(latest(k))}</div><div class="bar"><i style="width:${latest(k)||0}%"></i></div><div class="actions">${btn}</div></div>`}).join("");
 const anxCard=ph==="intervention"?"":`<div class="card"><div class="row"><h3>English language anxiety questionnaire</h3>${chip(anx?"Completed":"Available")}</div><p class="muted small">Eight short statements. This is a learning-research questionnaire, not a diagnosis.</p>${anx?"":`<button class="primary" data-act="anx">Start questionnaire</button>`}</div>`;
 return `${await liveBanner()}<div class="head"><div class="eyebrow">${esc(sp?.verified?"Research ID "+sp.research_id:"Awaiting verification")}</div><h1>Hello, ${esc(profile.full_name||"learner")}</h1><p>Current phase: <b>${phName}</b>${ph==="intervention"?" · Week "+settings.week:""}</p></div><div class="skillgrid">${cards}</div><div style="margin-top:14px">${anxCard}</div>`;
}
function startTest(k,kind){S.test={skill:k,kind};go("app","test")}
function testPage(){
 const {skill,kind}=S.test||{};if(!skill)return '<div class="empty">No test selected.</div>';
 const form=kind==="post"?"B":"A",b=BANK[skill];
 let body="";
 if(skill==="Speaking"||skill==="Writing"){
  const prompt=b[form];
  body=`<div class="notice">${esc(prompt)}</div>`+(skill==="Writing"?`<label>Your answer<textarea name="text" rows="9" required></textarea></label><div class="muted small" id="wc">0 words</div>`:`<div class="card"><button type="button" class="soft" data-act="rec" id="recBtn">● Start recording</button> <span id="recInfo" class="muted small"></span><audio id="recAudio" controls class="hidden" style="width:100%;margin-top:10px"></audio></div><label>Transcript or notes (optional if recorded; required if your microphone is blocked)<textarea name="text" rows="4"></textarea></label>`);
  S.after=()=>{const t=document.querySelector('[name=text]');if(t&&skill==="Writing")t.oninput=()=>$("wc").textContent=(t.value.trim().split(/\s+/).filter(Boolean).length)+" words"};
 }else{
  const idx=kind==="pre"?[0,1,2]:kind==="post"?[3,4,5]:[0,1,2,3,4,5];
  const lis=skill==="Listening";
  body=(skill==="Reading"?`<div class="card passage">${esc(b.passage)}</div>`:"")+(lis?`<div class="card"><button type="button" class="soft" data-act="play">▶ Play audio</button> <span class="muted small" id="plays">You may play it twice.</span></div>`:"")+
   idx.map((qi,n)=>`<div class="qbox"><b>${n+1}. ${esc(b.q[qi][0])}</b>${b.q[qi][1].map((o,oi)=>`<label class="opt"><input type="radio" name="q${qi}" value="${oi}" required> ${esc(o)}</label>`).join("")}</div>`).join("");
  rec.plays=0;
 }
 return `<div class="head"><div class="eyebrow">${kind==="weekly"?"Weekly test · week "+settings.week:kind+"-test"}</div><h1>${skill}</h1></div><form data-form="test" class="card stack">${body}<button class="primary">Submit</button></form>`;
}
function genFeedback(skill,pct,wrong){
 const band=pct>=80?"Excellent":pct>=60?"Good":pct>=40?"Developing":"Needs support";
 const body=`You scored ${Math.round(pct)}% in ${skill} (${band}). `+(wrong.length?`Review these items: ${wrong.join("; ")}.`:"All answers were correct.");
 return {band,body,recommendation:REC[skill]};
}
Object.assign(FORM,{
 async test(f,d){
  const {skill,kind}=S.test,week=kind==="weekly"?settings.week:0;let row;
  if(skill==="Speaking"||skill==="Writing"){
   const text=String(d.get("text")||"").trim();let audio=null;
   if(skill==="Writing"&&text.split(/\s+/).filter(Boolean).length<30)return toast("Please write at least 30 words.");
   if(skill==="Speaking"){
    if(rec.blob){const path=`${user.id}/${Date.now()}.webm`;const u=await db.storage.from("recordings").upload(path,rec.blob,{contentType:rec.blob.type||"audio/webm"});if(u.error)return toast(u.error.message);audio=path}
    if(!audio&&!text)return toast("Record your answer or type a transcript.");
   }
   row={student_id:user.id,skill,kind,week,status:"pending",pct:null,answers:{text,audio_path:audio,form:kind==="post"?"B":"A"}};
  }else{
   const b=BANK[skill],idx=kind==="pre"?[0,1,2]:kind==="post"?[3,4,5]:[0,1,2,3,4,5];let sc=0;const ans={},wrong=[];
   idx.forEach(qi=>{const v=+d.get("q"+qi);ans[qi]=v;if(v===b.q[qi][2])sc++;else wrong.push(b.q[qi][0].replace(/\s+/g," ").slice(0,60))});
   const pct=sc/idx.length*100;row={student_id:user.id,skill,kind,week,status:"scored",score:sc,max_score:idx.length,pct,answers:ans};row._fb=genFeedback(skill,pct,wrong);
  }
  const fb=row._fb;delete row._fb;
  const r=await db.from("attempts").insert(row).select("id").single();
  if(r.error)return toast(r.error.code==="23505"?"You have already submitted this test.":r.error.message);
  if(fb)await db.from("feedback").insert({attempt_id:r.data.id,student_id:user.id,skill,band:fb.band,body:fb.body,recommendation:fb.recommendation,source:"auto"});
  rec={};toast(row.status==="pending"?"Submitted. Your professor will score it.":"Submitted. Feedback is ready.");if(row.status==="scored"){const good=row.pct>=60;playFeedbackSound(good);showQuoteModal(good?"good":"low",`${Math.round(row.pct)}% in ${skill}`);}S.test=null;go("app",row.status==="pending"?"dash":"feedback")},
 async anx(f,d){
  const items=ANX.map((_,i)=>+d.get("a"+i));
  const total=items.reduce((s,v,i)=>s+(ANX_REVERSE.includes(i)?6-v:v),0);
  const r=await db.from("questionnaire_responses").insert({student_id:user.id,phase:settings.phase,items,total});
  if(r.error)return toast(r.error.code==="23505"?"Already submitted.":r.error.message);
  toast("Questionnaire submitted.");go("app","dash")},
});
const anxPage=()=>`<div class="head"><div class="eyebrow">QUESTIONNAIRE · ${settings.phase==="post"?"POST":"PRE"}</div><h1>English language anxiety</h1><p>Choose the option that fits you best (1 = strongly disagree, 5 = strongly agree).</p></div><div class="notice">Item wording here is a placeholder. Replace it with your validated instrument and its official scoring before collecting data.</div><form data-form="anx" class="card stack" style="margin-top:12px">${ANX.map((t,i)=>`<div class="qbox"><b>${i+1}. ${esc(t)}</b><div class="likert">${[1,2,3,4,5].map(v=>`<label><input type="radio" name="a${i}" value="${v}" required>${v}</label>`).join("")}</div></div>`).join("")}<button class="primary">Submit</button></form>`;

/* Graphic narrative shelf (static reader in /materials/graphic-narrative/) */
const GN_SHELF=`<a class="gn-shelf" href="/materials/graphic-narrative/"><img src="/materials/graphic-narrative/cover.webp" alt="" loading="lazy"><div class="gn-info"><span class="gn-kick">GRAPHIC NARRATIVE · 6 EPISODES</span><b>The Varipuliyan</b><small>A coastal sea story told in comic panels. Tap words to learn them, listen to every panel, and take a quiz after each episode.</small><span class="gn-btn">Read now ›</span></div></a>`;
async function materialsTab(){
 const m=await ok(db.from("materials").select("*").order("created_at",{ascending:false}));
 const staff=["teacher","researcher"].includes(role());
 if(role()==="student"){await loadMine()}
 const vis=m.filter(x=>role()!=="student"||settings.phase!=="intervention"||unlockedFor(x.skill));
 const filter=S.skill;
 const list=vis.filter(x=>!filter||x.skill===filter);
 return `<div class="head"><div class="eyebrow">LIBRARY</div><h1>Learning materials</h1>${filter?`<p>Showing ${filter}. <a href="#" data-act="mat" data-k="">Show all</a></p>`:""}</div>
 ${GN_SHELF}
 ${staff?`<form data-form="material" class="card stack"><b>Add material</b><div class="form-grid"><label>Title<input name="title" required></label><label>Skill<select name="skill">${SK.map(k=>`<option>${k}</option>`).join("")}</select></label><label>Type<select name="kind">${["PDF","PPT","Audio","Video","Dialogue","Link"].map(k=>`<option>${k}</option>`).join("")}</select></label><label>Link (YouTube, Drive…)<input name="url" type="url" placeholder="https://…"></label></div><label>Or upload a file (PDF, PPT, audio)<input name="file" type="file"></label><button class="primary">Add</button></form>`:""}
 <div class="card" style="margin-top:14px">${list.map(x=>`<div class="activity"><div class="badge">${x.kind}</div><div class="info"><b>${esc(x.title)}</b><small>${x.skill}</small></div><button class="soft" data-act="openmat" data-id="${x.id}">Open</button>${staff?`<button class="outline danger" data-act="delmat" data-id="${x.id}">Remove</button>`:""}</div>`).join("")||'<p class="muted">Nothing here yet.</p>'}</div>`;
}
Object.assign(FORM,{async material(f,d){
 let storage_path=null;const file=d.get("file");
 if(file&&file.size){if(file.size>50*1048576)return toast("File is larger than 50 MB.");storage_path=`${user.id}/${Date.now()}_${file.name.replace(/[^\w.-]/g,"_")}`;const u=await db.storage.from("materials").upload(storage_path,file);if(u.error)return toast(u.error.message)}
 const url=String(d.get("url")||"").trim()||null;if(!url&&!storage_path)return toast("Add a link or choose a file.");
 await ok(db.from("materials").insert({title:d.get("title"),skill:d.get("skill"),kind:d.get("kind"),url,storage_path,uploaded_by:user.id}));toast("Added.");render()}});

async function feedbackTab(){
 await loadMine();
 return `<div class="head"><div class="eyebrow">FEEDBACK</div><h1>Your feedback</h1></div>${mine.fb.map(x=>`<div class="card" style="margin-bottom:12px"><div class="row"><h3>${x.skill}</h3><span class="badge">${esc(x.band||"")}</span></div><p>${esc(x.body)}</p>${x.recommendation?`<p><b>Next step:</b> ${esc(x.recommendation)}</p>`:""}${x.teacher_remark?`<p><b>Professor remark:</b> ${esc(x.teacher_remark)}</p>`:""}<small class="muted">${new Date(x.created_at).toLocaleDateString()}</small></div>`).join("")||'<div class="empty">No feedback yet. Complete a test to see it here.</div>'}`;
}
const chpwCard=()=>`<form data-form="chpw" class="card stack" style="margin-top:16px"><h3>Change password</h3><div class="form-grid"><label>New password (at least 6 characters)<input name="p1" type="password" minlength="6" required autocomplete="new-password"></label><label>Type it again<input name="p2" type="password" minlength="6" required autocomplete="new-password"></label></div><button class="soft">Change password</button></form>`;
async function profileTab(){return (await profileTab0())+chpwCard()}
async function profileTab0(){
 if(!sp)return `<div class="head"><h1>My account</h1></div><div class="card"><div class="form-grid"><div><b>Name</b><br>${esc(profile?.full_name||"")}</div><div><b>Email</b><br>${esc(profile?.email||user.email)}</div><div><b>Role</b><br>${ROLE_NAME[role()]||""}</div></div></div>`;
 return `<div class="head"><h1>My profile</h1></div><div class="card stack"><div class="form-grid"><div><b>Name</b><br>${esc(profile.full_name)}</div><div><b>Email</b><br>${esc(profile.email)}</div><div><b>Mobile</b><br>${esc(profile.mobile)}</div><div><b>Year</b><br>${sp.year||"-"}</div><div><b>Year of birth</b><br>${sp.birth_year||"-"}</div><div><b>College</b><br>${esc(sp.college)}</div><div><b>Research ID</b><br>${esc(sp.research_id||"pending verification")}</div></div>
 <form data-form="prefs" class="stack"><label class="check"><input type="checkbox" name="consent_email" ${sp.consent_email?"checked":""}> Email notifications</label><label class="check"><input type="checkbox" name="consent_whatsapp" ${sp.consent_whatsapp?"checked":""}> WhatsApp notifications</label><button class="primary">Save preferences</button></form></div>`;
}
FORM.prefs=async(f,d)=>{await ok(db.from("student_profiles").update({consent_email:!!d.get("consent_email"),consent_whatsapp:!!d.get("consent_whatsapp")}).eq("user_id",user.id));await loadUser();toast("Saved.")};

/* ------------------------------------------------------------- staff */
async function roster(){
 const [ps,sps]=await Promise.all([ok(db.from("profiles").select("id,full_name,email,mobile,role")),ok(db.from("student_profiles").select("*"))]);
 const m={};sps.forEach(s=>m[s.user_id]=s);
 return ps.filter(p=>p.role==="student").map(p=>({...p,sp:m[p.id]||{}}));
}
async function overview(){
 const [st,att]=await Promise.all([roster(),ok(db.from("attempts").select("student_id,skill,kind,week,pct,status").order("created_at"))]);
 const rows=st.map(s=>{const a=att.filter(x=>x.student_id===s.id&&x.pct!=null);const cell=k=>{const z=a.filter(x=>x.skill===k);return z.length?+z[z.length-1].pct:null};const v=SK.map(cell);return {s,v,low:v.some(x=>x!=null&&x<50),pending:att.some(x=>x.student_id===s.id&&x.status==="pending")}});
 const yr=[1,2,3].map(y=>{const r=rows.filter(x=>x.s.sp.year===y).flatMap(x=>x.v.filter(z=>z!=null));return mean(r)});
 return `<div class="head"><div class="eyebrow">LEARNING PERFORMANCE</div><h1>Students</h1><p>${rows.length} student(s) visible to you.</p></div>
 <div class="card"><b>Average latest score by UG year</b>${barChart(["Year I","Year II","Year III"],[{name:"Average %",vals:yr,color:"#6558d3"}],{max:100})}</div>
 <div class="card" style="margin-top:14px;overflow:auto"><table><thead><tr><th>Name</th><th>Year</th>${SK.map(k=>`<th>${k.slice(0,4)}</th>`).join("")}<th></th><th>Login</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.s.full_name)}</td><td>${r.s.sp.year||"-"}</td>${r.v.map(x=>`<td class="${x!=null&&x<50?"low":""}">${pct1(x)}</td>`).join("")}<td>${r.low?'<span class="badge warn">needs practice</span>':""}${r.pending?'<span class="badge">to assess</span>':""}</td><td><button class="soft small-btn" data-act="resetpw" data-id="${r.s.id}" data-pw="${esc(genPassword(r.s.full_name,r.s.sp.birth_year))}" data-name="${esc(r.s.full_name)}">Reset password</button></td></tr>`).join("")||'<tr><td colspan="9" class="muted">No students yet.</td></tr>'}</tbody></table></div>`;
}
async function unlockTab(){
 const [un,st]=await Promise.all([ok(db.from("skill_unlocks").select("*")),roster()]);
 const sid=S.unlockStu||"";const on=(k,s)=>un.some(u=>u.skill===k&&u.unlocked&&(s?u.student_id===s:u.student_id==null));
 const row=(s)=>SK.map(k=>`<button class="tog ${on(k,s)?"on":""}" data-act="unlock" data-k="${k}" data-s="${s||""}" data-on="${on(k,s)?0:1}">${k} ${on(k,s)?"unlocked":"locked"}</button>`).join("");
 return `<div class="head"><div class="eyebrow">PROGRESSION</div><h1>Unlock next skill</h1><p>Skills are shown to students in the intervention phase only after you unlock them.</p></div><div class="card"><b>Whole cohort</b><div class="actions">${row(null)}</div></div>
 <div class="card" style="margin-top:14px"><b>Individual student</b><div class="actions"><select data-chg="unlockStu"><option value="">Choose a student</option>${st.map(s=>`<option value="${s.id}" ${s.id===sid?"selected":""}>${esc(s.full_name)}</option>`).join("")}</select></div>${sid?`<div class="actions">${row(sid)}</div>`:""}</div>`;
}
async function assessTab(){
 const [pend,st]=await Promise.all([ok(db.from("attempts").select("*").eq("status","pending").order("created_at")),roster()]);
 const name=id=>st.find(s=>s.id===id)?.full_name||"Student";
 const sel=pend.find(p=>p.id===S.assessId);
 let detail="";
 if(sel){
  const R=settings.rubric[sel.skill]||{max:4,dims:[]};
  let media="";
  if(sel.answers?.audio_path){const u=await db.storage.from("recordings").createSignedUrl(sel.answers.audio_path,3600);media=u.data?.signedUrl?`<audio controls src="${esc(u.data.signedUrl)}" style="width:100%"></audio>`:'<p class="muted">Recording could not be loaded.</p>'}
  detail=`<div class="card" style="margin-top:14px"><h3>${name(sel.student_id)} · ${sel.skill} · ${sel.kind}</h3>${media}${sel.answers?.text?`<div class="passage">${esc(sel.answers.text)}</div>`:""}<form data-form="rubric" class="stack"><input type="hidden" name="id" value="${sel.id}"><div class="form-grid">${R.dims.map(([n],i)=>`<label>${n} (0-${R.max})<input name="d${i}" type="number" min="0" max="${R.max}" step="1" required></label>`).join("")}</div><label>Remarks<textarea name="remarks" rows="2"></textarea></label><button class="primary">Save score and send feedback</button></form></div>`;
 }
 return `<div class="head"><div class="eyebrow">RUBRIC SCORING</div><h1>Speaking and writing</h1></div><div class="card">${pend.map(p=>`<div class="activity"><div class="info"><b>${esc(name(p.student_id))}</b><small>${p.skill} · ${p.kind} · ${new Date(p.created_at).toLocaleDateString()}</small></div><button class="soft" data-act="pick" data-id="${p.id}">Score</button></div>`).join("")||'<p class="muted">Nothing waiting.</p>'}</div>${detail}`;
}
Object.assign(FORM,{async rubric(f,d){
 const {data:a}=await db.from("attempts").select("*").eq("id",d.get("id")).single();const R=settings.rubric[a.skill];
 const scores={};let num=0,den=0;R.dims.forEach(([n,w],i)=>{const v=+d.get("d"+i);scores[n]=v;num+=v*w;den+=R.max*w});
 const pct=Math.round(num/den*1000)/10;
 await ok(db.rpc("score_attempt",{p_attempt:a.id,p_scores:scores,p_pct:pct,p_remarks:d.get("remarks")||null,p_rec:REC[a.skill]}));
 S.assessId=null;toast("Saved ("+pct+"%).");render()}});

/* ------------------------------------------------------------- live class (v1 features) */
async function liveTab(){
 if(role()==="student")return (await liveCard())+joinPage(true);
 const s=await ok(db.from("sessions").select("*").order("created_at",{ascending:false}).limit(20));
 if(S.present)return presentPage(S.present);
 return `${await liveCard()}<div class="head"><div class="eyebrow">LIVE CLASSROOM</div><h1>Live activities</h1><p>Create a poll, word cloud, quiz or open question and share the six-digit code.</p></div>
 <form data-form="session" class="card stack"><div class="form-grid"><label>Title<input name="title" required></label><label>Type<select name="type"><option value="poll">Live poll</option><option value="word">Word cloud</option><option value="quiz">Quiz</option><option value="open">Open response</option></select></label></div><label>Question<textarea name="prompt" rows="2" required></textarea></label><label>Options (poll/quiz: one per line; for a quiz the first line is the correct answer)<textarea name="options" rows="3"></textarea></label><label class="check"><input type="checkbox" name="anon"> Conference mode: allow guests without accounts</label><button class="primary">Create and start</button></form>
 <div class="card" style="margin-top:14px">${s.map(x=>`<div class="activity"><div class="info"><b>${esc(x.title)}</b><small>Code ${x.code} · ${x.activity_type}</small></div><button class="soft" data-act="present" data-id="${x.id}">Open</button></div>`).join("")||'<p class="muted">No activities yet.</p>'}</div>`;
}
Object.assign(FORM,{async session(f,d){
 const type=d.get("type"),opts=String(d.get("options")||"").split("\n").map(x=>x.trim()).filter(Boolean);
 if((type==="poll"||type==="quiz")&&opts.length<2)return toast("Add at least two options.");
 let code,n=0;do{code=String(Math.floor(100000+Math.random()*900000));n++}while(n<6&&((await db.from("sessions").select("id").eq("code",code)).data||[]).length);
 const r=await ok(db.from("sessions").insert({owner_id:user.id,code,title:d.get("title"),prompt:d.get("prompt"),activity_type:type,options:(type==="poll"||type==="quiz")?opts:[],correct_answer:type==="quiz"?opts[0]:null,anonymous_allowed:!!d.get("anon"),is_open:true}).select("id").single());
 S.present=r.id;render()}});
async function presentPage(id){
 const s=await ok(db.from("sessions").select("*").eq("id",id).single());sessionNow=s;
 S.after=()=>{refreshResults();if(channel)db.removeChannel(channel);channel=db.channel("r-"+id).on("postgres_changes",{event:"INSERT",schema:"public",table:"responses",filter:`session_id=eq.${id}`},refreshResults).subscribe()};
 return `<div class="head"><div class="eyebrow">PRESENTER</div><h1>${esc(s.title)}</h1><p>${esc(s.prompt)}</p></div><div class="card"><div class="codebox"><div><div>Join code</div><div class="code">${s.code}</div></div><div class="actions" style="margin:0"><button class="soft" data-act="pause" data-id="${s.id}" data-open="${s.is_open?0:1}">${s.is_open?"Pause":"Resume"}</button><button class="soft" data-act="csv" data-id="${s.id}">CSV</button><button class="soft" data-act="back">Back</button></div></div></div><div class="grid2"><div class="card"><div id="results">Waiting…</div></div><div class="card"><h2><span id="total">0</span> responses</h2><div id="feed"></div></div></div>`;
}
async function refreshResults(){
 const s=sessionNow;if(!s||!$("results"))return;
 const rows=(await db.from("responses").select("participant_name,answer,created_at").eq("session_id",s.id).order("created_at")).data||[];
 $("total").textContent=rows.length;const c={};rows.forEach(r=>c[r.answer]=(c[r.answer]||0)+1);
 if(s.activity_type==="word"){const w={};rows.forEach(r=>r.answer.toLowerCase().split(/[\s,]+/).filter(Boolean).forEach(x=>w[x]=(w[x]||0)+1));$("results").innerHTML='<div class="cloud">'+(Object.entries(w).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`<b style="font-size:${Math.min(38,15+n*4)}px">${esc(k)}</b>`).join("")||"Waiting for words…")+"</div>"}
 else if(s.activity_type==="poll"||s.activity_type==="quiz")$("results").innerHTML=s.options.map(o=>{const n=c[o]||0,p=rows.length?Math.round(n/rows.length*100):0;return `<div class="barrow"><div><b>${esc(o)}${s.correct_answer===o?" ✓":""}</b><span>${n} · ${p}%</span></div><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("");
 else $("results").innerHTML=rows.map(r=>`<div class="activity"><div class="info">${esc(r.answer)}<small>${esc(r.participant_name||"Anonymous")}</small></div></div>`).join("")||"Waiting…";
 $("feed").innerHTML=rows.slice(-8).reverse().map(r=>`<div class="activity"><div class="info"><b>${esc(r.participant_name||"Anonymous")}</b><small>${esc(r.answer)}</small></div></div>`).join("");
}
function joinPage(inApp){
 return `${inApp?'<div class="head"><div class="eyebrow">LIVE CLASSROOM</div><h1>Join a live activity</h1></div>':'<div class="head"><div class="eyebrow">AUDIENCE</div><h1>Join the conversation</h1><p>Enter the six-digit code from your presenter.</p></div>'}<div class="card stack" style="max-width:560px"><label>Session code<input id="joinCode" inputmode="numeric" maxlength="6" placeholder="482913" style="font:800 28px Manrope;letter-spacing:7px;text-align:center"></label><label>Your name<input id="displayName" value="${esc(profile?.full_name||"")}" placeholder="Needed to join a live quiz" maxlength="40"></label><button class="primary" data-act="lookup">Join</button><p class="muted small">Works for live quizzes and live polls. You do not need to log in.</p><div id="participant"></div></div>`;
}
Object.assign(FORM,{});

/* ------------------------------------------------------------- researcher / guide */
async function cohortTab(){
 const [st,tch,asg]=await Promise.all([roster(),ok(db.from("profiles").select("id,full_name,email,role").in("role",["teacher"])),ok(db.from("teacher_assignments").select("*"))]);
 const can=role()==="researcher";
 return `<div class="head"><div class="eyebrow">COHORT · IDENTITY RECORDS</div><h1>${st.length} student(s)</h1><p>Verify a student to assign a research ID. Identity details stay on this screen; exports use research IDs only.</p></div>
 <div class="card" style="overflow:auto"><table><thead><tr><th>Name</th><th>Mobile</th><th>Email</th><th>Year</th><th>College</th><th>Student no.</th><th>Research ID</th><th>Consent</th><th>Professor</th></tr></thead><tbody>${st.map(s=>{const a=asg.find(x=>x.student_id===s.id);return `<tr><td>${esc(s.full_name)}</td><td>${esc(s.mobile)}</td><td>${esc(s.email)}</td><td>${s.sp.year||"-"}</td><td>${esc(s.sp.college)}</td><td>${esc(s.sp.student_no)}</td><td>${s.sp.research_id?esc(s.sp.research_id):(can?`<button class="soft" data-act="verify" data-id="${s.id}">Verify</button>`:"-")}</td><td>${s.sp.consent_research?"✓":"✗"}</td><td>${can?`<select data-chg="assign" data-id="${s.id}"><option value="">-</option>${tch.map(t=>`<option value="${t.id}" ${a?.teacher_id===t.id?"selected":""}>${esc(t.full_name||t.email)}</option>`).join("")}</select>`:(tch.find(t=>t.id===a?.teacher_id)?.full_name||"-")}</td></tr>`}).join("")||'<tr><td colspan="9" class="muted">No registrations yet.</td></tr>'}</tbody></table></div>
 ${can?`<form data-form="role" class="card stack" style="margin-top:14px"><b>Grant a role to a registered account</b><div class="form-grid"><label>Account email<input name="email" type="email" required></label><label>Role<select name="role"><option value="teacher">Professor</option><option value="researcher">Researcher</option><option value="student">Student</option></select></label></div><button class="primary">Set role</button></form>`:""}`;
}
Object.assign(FORM,{async role(f,d){const p=await ok(db.from("profiles").select("id").eq("email",String(d.get("email")).trim()).maybeSingle());if(!p)return toast("No account with that email. Ask them to register first.");await ok(db.rpc("set_role",{p_user:p.id,p_role:d.get("role")}));toast("Role updated.");render()}});

async function setupTab(){
 const R=settings.rubric||{};
 return `<div class="head"><div class="eyebrow">STUDY SETUP</div><h1>Phase and rubrics</h1></div><form data-form="setup" class="card stack"><div class="form-grid"><label>Current phase<select name="phase">${["pre","intervention","post"].map(p=>`<option value="${p}" ${settings.phase===p?"selected":""}>${{pre:"Pre-test",intervention:"Intervention",post:"Post-test"}[p]}</option>`).join("")}</select></label><label>Current week<input name="week" type="number" min="1" max="52" value="${settings.week}"></label></div>
 ${["Speaking","Writing"].map(k=>`<div><b>${k} rubric</b> <span class="muted small">weight per dimension; scale 0 to <input name="${k}_max" type="number" min="1" max="10" value="${R[k]?.max||4}" style="width:70px;display:inline-block"></span><div class="form-grid">${(R[k]?.dims||[]).map(([n,w],i)=>`<label>${n}<input name="${k}_w${i}" type="number" min="0" step="0.5" value="${w}"></label>`).join("")}</div></div>`).join("")}
 <div class="notice">Change rubrics before the pre-test and keep them for the post-test so scores stay comparable. Every change is written to the audit log.</div><button class="primary">Save</button></form>`;
}
Object.assign(FORM,{async setup(f,d){
 const rub=JSON.parse(JSON.stringify(settings.rubric));
 ["Speaking","Writing"].forEach(k=>{rub[k].max=+d.get(k+"_max")||4;rub[k].dims=rub[k].dims.map(([n],i)=>[n,+d.get(`${k}_w${i}`)||0])});
 await ok(db.from("app_settings").update({phase:d.get("phase"),week:+d.get("week"),rubric:rub,updated_at:new Date().toISOString()}).eq("id",1));
 await db.from("audit_logs").insert({actor:user.id,action:"settings_changed",detail:{phase:d.get("phase"),week:+d.get("week")}});
 await loadUser();toast("Saved.");render()}});

/* analytics */
const erf=x=>{const s=x<0?-1:1;x=Math.abs(x);const t=1/(1+.3275911*x);return s*(1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-x*x))};
const Phi=z=>.5*(1+erf(z/Math.SQRT2));
function paired(pairs){
 const d=pairs.map(([a,b])=>b-a),n=d.length;if(n<3)return null;
 const m=mean(d),s=sd(d),se=s/Math.sqrt(n),t=s?m/se:0,dz=s?m/s:0;
 const nz=d.filter(x=>x!==0).map(x=>({a:Math.abs(x),g:Math.sign(x)})).sort((x,y)=>x.a-y.a),rk=[];let i=0;
 while(i<nz.length){let j=i;while(j+1<nz.length&&nz[j+1].a===nz[i].a)j++;for(let k=i;k<=j;k++)rk[k]=(i+j)/2+1;i=j+1}
 const W=nz.reduce((s2,x,k)=>s2+(x.g>0?rk[k]:0),0),N=nz.length,mu=N*(N+1)/4,sg=Math.sqrt(N*(N+1)*(2*N+1)/24),z=sg?(W-mu)/sg:0;
 const skew=s?d.reduce((q,x)=>q+((x-m)/s)**3,0)*n/((n-1)*(n-2)):0;
 return {n,m,s,t,p:2*(1-Phi(Math.abs(t))),dz,ci:[m-1.96*se,m+1.96*se],z,pw:2*(1-Phi(Math.abs(z))),skew};
}
const fp=p=>p==null?"-":p<.001?"<0.001":p.toFixed(3);
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function synth(){
 const r=rng(2026),g=()=>{let u=0,v=0;while(!u)u=r();while(!v)v=r();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)},cl=(x,a,b)=>Math.max(a,Math.min(b,x));
 const rows=[];
 for(let i=0;i<300;i++){
  const year=1+Math.floor(i/100),ab=g()*9+(year-1)*3,pre={},post={};
  SK.forEach(k=>{const p=cl(48+ab+g()*7-(k==="Speaking"?4:0),8,96);pre[k]=p;post[k]=cl(p+9+g()*6+(k==="Speaking"?3:0),10,100)});
  const mp=mean(Object.values(pre)),mo=mean(Object.values(post));
  const ap=cl(Math.round(27+g()*5),8,40);
  rows.push({rid:"S"+String(i+1).padStart(3,"0"),year,pre,post,weekly:[1,2,3,4,5,6].map(w=>cl(mp+(mo-mp)*w/6+g()*4,5,100)),anxPre:ap,anxPost:cl(Math.round(ap-4.5+g()*3.5),8,40)});
 }
 return {rows,rub:{pre:{Fluency:1.9,Pronunciation:1.8,Accuracy:2.0,Vocabulary:1.9,Interaction:1.8,Content:2.1,Organisation:1.9,Grammar:1.8,Mechanics:2.0},post:{Fluency:2.6,Pronunciation:2.4,Accuracy:2.7,Vocabulary:2.6,Interaction:2.5,Content:2.8,Organisation:2.6,Grammar:2.5,Mechanics:2.7}}};
}
async function realData(){
 const [att,sps,qr,rs]=await Promise.all([ok(db.from("attempts").select("*").order("created_at")),ok(db.from("student_profiles").select("*")),ok(db.from("questionnaire_responses").select("*")),ok(db.from("rubric_scores").select("*").order("created_at"))]);
 const by={};sps.filter(s=>s.research_id&&s.verified).forEach(s=>by[s.user_id]={rid:s.research_id,year:s.year,pre:{},post:{},wk:{},anxPre:null,anxPost:null});
 const kindOf={};att.forEach(a=>{kindOf[a.id]=a.kind;const r=by[a.student_id];if(!r||a.pct==null||a.status==="pending")return;if(a.kind==="pre")r.pre[a.skill]=+a.pct;else if(a.kind==="post")r.post[a.skill]=+a.pct;else(r.wk[a.week]=r.wk[a.week]||[]).push(+a.pct)});
 qr.forEach(q=>{const r=by[q.student_id];if(!r)return;q.phase==="pre"?r.anxPre=q.total:r.anxPost=q.total});
 const rows=Object.values(by).map(r=>({...r,weekly:Array.from({length:Math.max(6,settings.week)},(_,i)=>r.wk[i+1]?mean(r.wk[i+1]):null)}));
 const last={};rs.forEach(x=>last[x.attempt_id]=x);const acc={pre:{},post:{}};
 Object.values(last).forEach(x=>{const k=kindOf[x.attempt_id];if(!acc[k])return;Object.entries(x.scores).forEach(([d,v])=>(acc[k][d]=acc[k][d]||[]).push(+v))});
 const rub={pre:{},post:{}};["pre","post"].forEach(k=>Object.entries(acc[k]).forEach(([d,a])=>rub[k][d]=mean(a)));
 return {rows,rub};
}
function barChart(labels,series,{max=100,h=230}={}){
 const W=640,pl=40,pb=30,pt=12,pr=8,iw=W-pl-pr,ih=h-pt-pb,gw=iw/labels.length,bw=Math.min(34,gw*.7/series.length);
 let s=`<svg viewBox="0 0 ${W} ${h}" class="chart" role="img">`;
 for(let i=0;i<=4;i++){const y=pt+ih-ih*i/4;s+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" class="gl"/><text x="${pl-6}" y="${y+4}" class="ax" text-anchor="end">${Math.round(max*i/4)}</text>`}
 labels.forEach((l,i)=>{const gx=pl+gw*i+gw/2-bw*series.length/2;series.forEach((se,j)=>{const v=se.vals[i];if(v==null)return;const bh=ih*Math.min(v,max)/max;s+=`<rect class="chart-bar-anim" style="animation-delay:${(i*45+j*70)}ms" x="${gx+j*bw}" y="${pt+ih-bh}" width="${bw-3}" height="${bh}" rx="4" fill="${se.color}"><title>${esc(se.name)}: ${fx(v)}</title></rect>`});s+=`<text x="${pl+gw*i+gw/2}" y="${h-9}" class="ax" text-anchor="middle">${esc(l)}</text>`});
 return s+"</svg>"+legend(series);
}
function lineChart(labels,series,{max=100,h=230}={}){
 const W=640,pl=40,pb=30,pt=12,pr=12,iw=W-pl-pr,ih=h-pt-pb,x=i=>pl+iw*(labels.length>1?i/(labels.length-1):.5),y=v=>pt+ih-ih*v/max;
 let s=`<svg viewBox="0 0 ${W} ${h}" class="chart" role="img">`;
 for(let i=0;i<=4;i++){const yy=pt+ih-ih*i/4;s+=`<line x1="${pl}" x2="${W-pr}" y1="${yy}" y2="${yy}" class="gl"/><text x="${pl-6}" y="${yy+4}" class="ax" text-anchor="end">${Math.round(max*i/4)}</text>`}
 series.forEach(se=>{const pts=se.vals.map((v,i)=>v==null?null:[x(i),y(v)]).filter(Boolean);if(pts.length)s+=`<polyline class="chart-line-anim" fill="none" stroke="${se.color}" stroke-width="2.5" points="${pts.map(p=>p.join(",")).join(" ")}"/>`+pts.map(p=>`<circle class="chart-dot-anim" cx="${p[0]}" cy="${p[1]}" r="3.5" fill="${se.color}"/>`).join("")});
 labels.forEach((l,i)=>s+=`<text x="${x(i)}" y="${h-9}" class="ax" text-anchor="middle">${esc(l)}</text>`);
 return s+"</svg>"+legend(series);
}
const legend=se=>se.length>1||se[0].name?`<div class="legend">${se.map(x=>`<span><i style="background:${x.color}"></i>${esc(x.name)}</span>`).join("")}</div>`:"";
const allMean=v=>{v=v.filter(x=>x!=null&&!isNaN(x));return v.length?mean(v):null};
async function researchTab(){
 const D=synthetic?synth():await realData(),rows=D.rows,PRE="#9aa4d6",POST="#13a99b";
 const ov=(r,w)=>{const v=SK.map(k=>r[w][k]).filter(x=>x!=null);return v.length?mean(v):null};
 const pairsOverall=rows.map(r=>[ov(r,"pre"),ov(r,"post")]).filter(p=>p[0]!=null&&p[1]!=null);
 const skillStats=SK.map(k=>{const p=rows.map(r=>[r.pre[k],r.post[k]]).filter(p=>p[0]!=null&&p[1]!=null);return {k,n:p.length,a:mean(p.map(x=>x[0])),b:mean(p.map(x=>x[1])),st:paired(p)}});
 const yearMeans=w=>[1,2,3].map(y=>mean(rows.filter(r=>r.year===y).map(r=>ov(r,w)).filter(x=>x!=null)));
 const bins=Array.from({length:10},(_,i)=>`${i*10}-${i*10+10}`),hist=w=>{const c=Array(10).fill(0);rows.forEach(r=>{const v=ov(r,w);if(v!=null)c[Math.min(9,Math.floor(v/10))]++});return c};
 const hp=hist("pre"),hq=hist("post"),hmax=Math.max(10,...hp,...hq);
 const weeks=Array.from({length:Math.max(6,...rows.map(r=>r.weekly.length))},(_,i)=>i);
 const wk=weeks.map(i=>{const v=rows.map(r=>r.weekly[i]).filter(x=>x!=null);return v.length?mean(v):null});
 const ap=rows.map(r=>[r.anxPre,r.anxPost]).filter(p=>p[0]!=null&&p[1]!=null);
 const dims=Object.keys({...D.rub.pre,...D.rub.post});
 const part=[["Pre-test",rows.filter(r=>Object.keys(r.pre).length).length],["Weekly",rows.filter(r=>r.weekly.some(x=>x!=null)).length],["Post-test",rows.filter(r=>Object.keys(r.post).length).length],["Questionnaire (pre)",rows.filter(r=>r.anxPre!=null).length]].map(([l,n])=>[l,rows.length?n/rows.length*100:0]);
 const so=paired(pairsOverall);
 const stTable=[{k:"Overall",n:pairsOverall.length,a:mean(pairsOverall.map(p=>p[0])),b:mean(pairsOverall.map(p=>p[1])),st:so},...skillStats,{k:"Anxiety score (8-40)",n:ap.length,a:mean(ap.map(p=>p[0])),b:mean(ap.map(p=>p[1])),st:paired(ap)}];
 const card=(t,b)=>`<div class="card"><b>${t}</b>${b}</div>`;
 return `<div class="head"><div class="eyebrow">RESEARCH DASHBOARD</div><h1>Analysis</h1><p>${rows.length} verified participant(s) with a research ID. ${synthetic?'<b>Showing a synthetic preview dataset (not real, not saved).</b>':""}</p><div class="actions"><button class="${synthetic?"outline":"soft"}" data-act="syn">${synthetic?"Back to real data":"Preview with synthetic data"}</button></div></div>
 ${rows.length?"":'<div class="notice">No verified participants with data yet. Verify students in Cohort, run the pre-test, or preview with synthetic data.</div>'}
 <div class="chartgrid">${card("1 · Pre-test vs post-test (overall)",barChart(["Overall"],[{name:"Pre",vals:[allMean(rows.map(r=>ov(r,"pre")))],color:PRE},{name:"Post",vals:[allMean(rows.map(r=>ov(r,"post")))],color:POST}])+(pairsOverall.length?"":'<p class="muted small">Bars show every student who has taken each test. Paired statistics appear once students have both a pre-test and a post-test.</p>'))}
 ${card("2 · Six-skill comparison",barChart(SK,[{name:"Pre",vals:SK.map(k=>allMean(rows.map(r=>r.pre[k]))),color:PRE},{name:"Post",vals:SK.map(k=>allMean(rows.map(r=>r.post[k]))),color:POST}]))}
 ${card("3 · Weekly assessment trend",lineChart(weeks.map(i=>"W"+(i+1)),[{name:"Mean %",vals:wk,color:"#6558d3"}]))}
 ${card("4 · Year-wise comparison",barChart(["Year I","Year II","Year III"],[{name:"Pre",vals:yearMeans("pre"),color:PRE},{name:"Post",vals:yearMeans("post"),color:POST}]))}
 ${card("5 · Score distribution (students per 10-point band)",barChart(bins,[{name:"Pre",vals:hp,color:PRE},{name:"Post",vals:hq,color:POST}],{max:hmax}))}
 ${card("6 · Skill-wise % improvement",barChart(SK,[{name:"Improvement %",vals:skillStats.map(s=>s.a?(s.b-s.a)/s.a*100:null),color:POST}],{max:Math.max(20,Math.ceil(Math.max(0,...skillStats.map(s=>s.a?(s.b-s.a)/s.a*100:0))/10)*10)}))}
 ${card("7 · Anxiety questionnaire (total 8-40)",barChart(["Pre","Post"],[{name:"Mean total",vals:[mean(ap.map(p=>p[0])),mean(ap.map(p=>p[1]))],color:"#e0875a"}],{max:40}))}
 ${card("8 · Participation and completion (%)",barChart(part.map(p=>p[0]),[{name:"% of cohort",vals:part.map(p=>p[1]),color:"#6558d3"}]))}
 ${card("9 · Rubric dimensions (mean, scale 0-4)",dims.length?barChart(dims,[{name:"Pre",vals:dims.map(d=>D.rub.pre[d]??null),color:PRE},{name:"Post",vals:dims.map(d=>D.rub.post[d]??null),color:POST}],{max:4}):'<p class="muted">No rubric scores yet.</p>')}</div>
 <div class="card" style="margin-top:14px;overflow:auto"><b>Paired statistics (post minus pre)</b><table><thead><tr><th>Measure</th><th>n</th><th>Mean pre</th><th>Mean post</th><th>Mean diff [95% CI]</th><th>SD diff</th><th>t</th><th>p</th><th>d<sub>z</sub></th><th>Wilcoxon z</th><th>p</th><th>Skew</th></tr></thead><tbody>${stTable.map(r=>{const s=r.st;return `<tr><td>${r.k}</td><td>${r.n}</td><td>${fx(r.a)}</td><td>${fx(r.b)}</td><td>${s?`${fx(s.m)} [${fx(s.ci[0])}, ${fx(s.ci[1])}]`:"-"}</td><td>${fx(s?.s)}</td><td>${fx(s?.t,2)}</td><td>${fp(s?.p)}</td><td>${fx(s?.dz,2)}</td><td>${fx(s?.z,2)}</td><td>${fp(s?.pw)}</td><td>${fx(s?.skew,2)}</td></tr>`}).join("")}</tbody></table>
 <p class="muted small">p-values use a normal approximation (adequate for n ≥ 30). Check the skew of the differences before choosing between the t-test and Wilcoxon, and confirm assumptions in your statistics package. Scores here are percentages; anxiety totals follow your instrument's scoring, with no clinical categories.</p></div>`;
}
async function dataTab(){
 const log=await ok(db.from("audit_logs").select("*").order("created_at",{ascending:false}).limit(60));
 return `<div class="head"><div class="eyebrow">EXPORT</div><h1>Research data</h1></div><div class="card stack"><p>Exports contain research IDs, year and scores only. No names, mobile numbers or emails.</p><div class="actions"><button class="primary" data-act="export" data-w="wide">Download per-student dataset (CSV)</button><button class="soft" data-act="export" data-w="long">Download all assessment rows (CSV)</button></div></div><div class="card" style="margin-top:14px;overflow:auto"><b>Audit log</b><table><thead><tr><th>When</th><th>Action</th><th>Detail</th></tr></thead><tbody>${log.map(l=>`<tr><td>${new Date(l.created_at).toLocaleString()}</td><td>${esc(l.action)}</td><td class="small">${esc(JSON.stringify(l.detail))}</td></tr>`).join("")||'<tr><td colspan="3" class="muted">No entries.</td></tr>'}</tbody></table></div>`;
}
function download(name,text){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:"text/csv"}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
const csvLine=r=>r.map(v=>'"'+String(v??"").replaceAll('"','""')+'"').join(",");

const TAB={videos:videosTab,dash:dash,test:async()=>testPage(),anx:async()=>anxPage(),materials:materialsTab,feedback:feedbackTab,live:liveTab,profile:profileTab,overview,unlock:unlockTab,assess:assessTab,research:researchTab,cohort:cohortTab,setup:setupTab,data:dataTab};

/* ------------------------------------------------------------- video lectures */
const LIVE_HOSTS=[[/(^|\.)zoom\.(us|com)$/i,"Zoom"],[/^meet\.google\.com$/i,"Google Meet"]];
function ytId(u){try{const x=new URL(String(u).trim());const h=x.hostname.replace(/^(www|m)\./,"");let id=null;
 if(h==="youtu.be")id=x.pathname.slice(1).split("/")[0];
 else if(/^youtube(-nocookie)?\.com$/.test(h)){if(x.pathname==="/watch")id=x.searchParams.get("v");else{const m=x.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{11})/);if(m)id=m[2]}}
 return /^[\w-]{11}$/.test(id||"")?id:null}catch{return null}}
function parseQuiz(txt){
 const lines=String(txt||"").split("\n").map(x=>x.trim()).filter(Boolean);
 if(lines.length!==10)return {error:`Enter exactly 10 questions, one per line (you have ${lines.length}).`};
 const qs=[],ans=[];
 for(let i=0;i<10;i++){const p=lines[i].split("|").map(x=>x.trim());
  if(p.length!==6||p.slice(0,5).some(x=>!x))return {error:`Line ${i+1}: use  Question | Option A | Option B | Option C | Option D | correct letter`};
  const k="ABCD".indexOf(p[5].toUpperCase());if(p[5].length!==1||k<0)return {error:`Line ${i+1}: the last part must be A, B, C or D.`};
  qs.push({q:p[0],options:p.slice(1,5)});ans.push(k)}
 return {qs,ans}}
let VP=null;
function stopPlayer(){if(!VP)return;clearInterval(VP.t);if(VP.student&&VP.dirty)vpSave(false);try{VP.player?.destroy()}catch{};VP=null}
function loadYT(){return new Promise((res,rej)=>{if(window.YT&&YT.Player)return res();const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";t.onerror=()=>rej(new Error("blocked"));window.onYouTubeIframeAPIReady=res;document.head.appendChild(t);setTimeout(()=>rej(new Error("timeout")),12000)})}
const vpOnes=()=>VP.cov.reduce((a,b)=>a+b,0);
function vpPaint(){const el=$("vidPct");if(!el||!VP)return;const p=Math.min(100,Math.round(100*vpOnes()/VP.n));el.style.width=p+"%";const t=$("vidPctTxt");if(t)t.textContent=p+"% watched"}
async function vpSave(ended){
 if(!VP||!VP.student||VP.saving)return;VP.saving=true;VP.dirty=false;
 const v=VP.id;
 try{const r=await db.rpc("save_video_progress",{p_video:v,p_duration:VP.n,p_cov:VP.cov.join(""),p_ended:!!ended});
  if(r.error)throw r.error;const d=r.data;
  if(d?.completed&&!VP.done){VP.done=true;toast("Video completed. The quiz is now open.");VP.saving=false;stopPlayer();if(S.video===v)render();return}
  if(ended&&!d?.completed&&$("vidMsg"))$("vidMsg").textContent="Some parts of the video were skipped. Replay the parts you missed and watch to the end to unlock the quiz."}
 catch(e){console.error(e);VP&&(VP.dirty=true)}
 if(VP)VP.saving=false}
async function startPlayer(v,prog,student){
 stopPlayer();const holder=$("ytPlayer");if(!holder)return;
 try{await loadYT()}catch{holder.outerHTML='<div class="notice">The video could not be loaded. Check your internet connection or ask your professor.</div>';return}
 if(!$("ytPlayer"))return;
 VP={id:v.id,student,cov:[],n:0,last:null,dirty:false,saving:false,done:!!prog?.completed_at,t:null,player:null};
 VP.player=new YT.Player("ytPlayer",{videoId:v.youtube_id,host:"https://www.youtube-nocookie.com",width:"100%",height:"100%",playerVars:{rel:0,modestbranding:1,playsinline:1,origin:location.origin},events:{
  onReady(){const d=Math.floor(VP.player.getDuration()||0);VP.n=prog?.duration||d;if(!VP.n)return;
   VP.cov=Array.from({length:VP.n},(_,i)=>prog?.coverage?.[i]==="1"?1:0);vpPaint();
   VP.t=setInterval(()=>{if(!VP||!student||VP.player.getPlayerState?.()!==1){if(VP)VP.last=null;return}
    const cur=VP.player.getCurrentTime(),rate=VP.player.getPlaybackRate?.()||1;
    if(VP.last!=null){const dl=cur-VP.last;if(dl>=0&&dl<=2.6*rate){for(let i=Math.floor(VP.last);i<Math.floor(cur)&&i<VP.n;i++)if(!VP.cov[i]){VP.cov[i]=1;VP.dirty=true}}}
    VP.last=cur;vpPaint();VP.tick=(VP.tick||0)+1;if(VP.dirty&&VP.tick%10===0)vpSave(false)},1000)},
  onStateChange(e){if(!VP||!student)return;
   if(e.data===1)VP.last=VP.player.getCurrentTime();
   if(e.data===2){VP.last=null;if(VP.dirty)vpSave(false)}
   if(e.data===0){const cur=VP.player.getCurrentTime();if(VP.last!=null&&cur-VP.last<=3){for(let i=Math.floor(VP.last);i<VP.n;i++)if(!VP.cov[i]){VP.cov[i]=1;VP.dirty=true}}VP.last=null;vpPaint();vpSave(true)}}}})}
const fmtDT=t=>new Date(t).toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"});
async function videosTab(){
 if(S.video)return watchPage(S.video);
 const vids=await ok(db.from("videos").select("id,title,description,skill,youtube_id,created_at").order("created_at",{ascending:false}));
 const stu=role()==="student",res=role()==="researcher";
 let prog=[],att=[];if(stu){[prog,att]=await Promise.all([ok(db.from("video_progress").select("video_id,completed_at,coverage,duration")),ok(db.from("video_quiz_attempts").select("video_id,score,total"))])}
 const card=v=>{const p=prog.find(x=>x.video_id===v.id),a=att.filter(x=>x.video_id===v.id),best=a.length?Math.max(...a.map(x=>x.score)):null;
  const st=stu?(p?.completed_at?`<span class="chip c-Completed">Completed</span>`:p&&p.coverage?`<span class="chip c-Inprogress">${Math.round(100*[...p.coverage].filter(c=>c==="1").length/Math.max(1,p.duration))}% watched</span>`:`<span class="chip c-Available">Not started</span>`):"";
  return `<div class="card vcard"><img alt="" loading="lazy" src="https://i.ytimg.com/vi/${v.youtube_id}/mqdefault.jpg"><div><div class="row"><h3>${esc(v.title)}</h3>${st}</div><p class="muted small">${v.skill?esc(v.skill)+" · ":""}${new Date(v.created_at).toLocaleDateString()}${best!=null?` · Quiz best ${best}/10`:""}</p>${v.description?`<p class="small">${esc(v.description)}</p>`:""}<button class="primary" data-act="openvid" data-id="${v.id}">${stu?"Watch":"Open"}</button></div></div>`};
 return `<div class="head"><div class="eyebrow">VIDEO LECTURES</div><h1>Video lectures</h1><p>${stu?"Watch the full lecture on this page. The quiz opens when you have watched the whole video.":"Lectures added by the researcher appear here for every portal."}</p></div>
 ${res?`<form data-form="video" class="card stack"><b>Add a video lecture</b><div class="form-grid"><label>Title<input name="title" required></label><label>YouTube link<input name="link" required placeholder="https://www.youtube.com/watch?v=…"></label><label>Related skill<select name="skill"><option value="">None</option>${SK.map(k=>`<option>${k}</option>`).join("")}</select></label></div><label>Short description (optional)<textarea name="description" rows="2"></textarea></label>
 <label>Quiz: exactly 10 questions, one per line<textarea name="quiz" rows="11" required placeholder="What is a tide? | Rise and fall of the sea | A kind of fish | A boat | A net | A&#10;(…10 lines in total…)"></textarea></label><div class="muted small">Format: <code>Question | Option A | Option B | Option C | Option D | correct letter</code>. The correct answers are kept hidden from students.</div><button class="primary">Add lecture</button></form>`:""}
 <div class="stack" style="margin-top:14px">${vids.map(card).join("")||'<div class="empty">No video lectures yet.</div>'}</div>`}
async function watchPage(id){
 const stu=role()==="student",res=role()==="researcher",staff=!stu;
 const v=await ok(db.from("videos").select("*").eq("id",id).single());
 const [mats,prog,att,keys]=await Promise.all([ok(db.from("materials").select("*").eq("video_id",id).order("created_at")),
  stu?ok(db.from("video_progress").select("*").eq("video_id",id).maybeSingle()):Promise.resolve(null),
  ok(db.from("video_quiz_attempts").select("*").eq("video_id",id).order("created_at")),
  staff?ok(db.from("video_keys").select("answers").eq("video_id",id).maybeSingle()):Promise.resolve(null)]);
 S.after=()=>startPlayer(v,prog,stu);
 const done=!!prog?.completed_at,ones=prog?[...prog.coverage].filter(c=>c==="1").length:0,pct=prog?Math.min(100,Math.round(100*ones/Math.max(1,prog.duration))):0;
 let status="";
 if(stu)status=done?`<div class="comment done"><b>✓ Video completed</b><span>You watched this lecture in full on ${fmtDT(prog.completed_at)}.</span></div>`
  :`<div class="comment"><b>Watch the whole video to unlock the quiz</b><div class="bar"><i id="vidPct" style="width:${pct}%"></i></div><span id="vidPctTxt" class="small">${pct}% watched</span><div id="vidMsg" class="small muted"></div><span class="small muted">Skipping ahead does not count. Only the parts you actually watch are recorded.</span></div>`;
 let quiz="";
 if(stu){
  const last=S.vres?.id===id?S.vres:null,best=att.length?Math.max(...att.map(a=>a.score)):null;
  if(!done)quiz=`<div class="card quizlock"><h3>Quiz (10 questions)</h3><p class="muted">🔒 Locked. Finish watching the video to attempt the quiz.</p></div>`;
  else quiz=`<form data-form="vquiz" data-id="${id}" class="card stack"><div class="row"><h3>Quiz (10 questions)</h3>${best!=null?`<span class="badge">Best ${best}/10 · ${att.length} attempt${att.length>1?"s":""}</span>`:""}</div>${last?`<div class="notice">You scored <b>${last.score}/${last.total}</b>. Questions marked ✗ were not correct. You may try again.</div>`:""}
   ${v.questions.map((q,i)=>`<div class="qbox${last?(last.correct[i]?" right":" wrong"):""}"><b>${i+1}. ${esc(q.q)}</b> ${last?(last.correct[i]?"✓":"✗"):""}${q.options.map((o,oi)=>`<label class="opt"><input type="radio" name="q${i}" value="${oi}" required> ${esc(o)}</label>`).join("")}</div>`).join("")}<button class="primary">Submit quiz</button></form>`}
 else{
  const ks=keys?.answers||[];
  quiz=`<div class="card"><h3>Quiz (10 questions)</h3>${v.questions.map((q,i)=>`<div class="qbox"><b>${i+1}. ${esc(q.q)}</b>${q.options.map((o,oi)=>`<div class="${ks[i]===oi?"keyopt":"muted"}">${"ABCD"[oi]}. ${esc(o)}${ks[i]===oi?" ✓":""}</div>`).join("")}</div>`).join("")}</div>`;
 }
 let stats="";
 if(staff){
  const [st,pg]=await Promise.all([roster(),ok(db.from("video_progress").select("student_id,coverage,duration,completed_at").eq("video_id",id))]);
  const rows=st.map(s=>{const p=pg.find(x=>x.student_id===s.id),a=att.filter(x=>x.student_id===s.id),b=a.length?Math.max(...a.map(x=>x.score)):null;return {s,p,b,n:a.length}});
  stats=`<div class="card" style="overflow:auto"><h3>Student progress</h3><p class="muted small">${rows.filter(r=>r.p?.completed_at).length} of ${rows.length} completed</p><table><thead><tr><th>Name</th><th>Watched</th><th>Completed</th><th>Quiz best</th><th>Attempts</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.s.full_name)}</td><td>${r.p?Math.round(100*[...r.p.coverage].filter(c=>c==="1").length/Math.max(1,r.p.duration))+"%":"-"}</td><td>${r.p?.completed_at?"✓ "+fmtDT(r.p.completed_at):"-"}</td><td>${r.b!=null?r.b+"/10":"-"}</td><td>${r.n||"-"}</td></tr>`).join("")||'<tr><td colspan="5" class="muted">No students yet.</td></tr>'}</tbody></table></div>`}
 const matBlock=`<div class="card stack"><h3>Materials for this lecture</h3>${mats.map(x=>`<div class="activity"><div class="badge">${x.kind}</div><div class="info"><b>${esc(x.title)}</b></div><button class="soft" data-act="openmat" data-id="${x.id}">Open</button>${staff?`<button class="outline danger" data-act="delmat" data-id="${x.id}">Remove</button>`:""}</div>`).join("")||'<p class="muted">No files yet.</p>'}
  ${staff?`<form data-form="vmaterial" data-id="${id}" class="stack" style="border-top:1px solid var(--line);padding-top:14px"><b>Upload material for students</b><div class="form-grid"><label>Title<input name="title" required></label><label>Type<select name="kind">${["PDF","PPT","Audio","Video","Dialogue","Link"].map(k=>`<option>${k}</option>`).join("")}</select></label><label>Link (optional)<input name="url" type="url" placeholder="https://…"></label></div><label>Or upload a file (up to 50 MB)<input name="file" type="file"></label><button class="primary">Upload</button></form>`:""}</div>`;
 return `<div class="actions" style="margin:0 0 12px"><button class="outline" data-act="closevid">← All lectures</button>${res?`<button class="outline danger" data-act="delvid" data-id="${id}">Delete lecture</button>`:""}</div>
 <div class="head" style="margin-top:0"><div class="eyebrow">VIDEO LECTURE</div><h1>${esc(v.title)}</h1>${v.description?`<p>${esc(v.description)}</p>`:""}</div>
 <div class="player"><div id="ytPlayer"></div></div>
 ${status}<div class="stack" style="margin-top:14px">${quiz}${matBlock}${stats}</div>`}
Object.assign(FORM,{
 async video(f,d){const id=ytId(d.get("link"));if(!id)return toast("Paste a valid YouTube link (youtube.com/watch?v=… or youtu.be/…).");
  const q=parseQuiz(d.get("quiz"));if(q.error)return toast(q.error);
  const r=await ok(db.from("videos").insert({title:String(d.get("title")).trim(),youtube_id:id,description:String(d.get("description")||"").trim()||null,skill:d.get("skill")||null,questions:q.qs,created_by:user.id}).select("id").single());
  const k=await db.from("video_keys").insert({video_id:r.id,answers:q.ans});if(k.error){await db.from("videos").delete().eq("id",r.id);return toast(k.error.message)}
  toast("Video lecture added.");render()},
 async vquiz(f,d){const id=f.dataset.id,a=[];for(let i=0;i<10;i++)a.push(+d.get("q"+i));
  const r=await db.rpc("submit_video_quiz",{p_video:id,p_answers:a});if(r.error)return toast(r.error.message);
  S.vres={id,...r.data};const good=(r.data.score/Math.max(1,r.data.total))>=0.6;playFeedbackSound(good);showQuoteModal(good?"good":"low",`Quiz Score: ${r.data.score}/${r.data.total}`);toast(`Score: ${r.data.score}/${r.data.total}`);render();window.scrollTo(0,document.body.scrollHeight*.3)},
 async vmaterial(f,d){const id=f.dataset.id,v=await ok(db.from("videos").select("skill").eq("id",id).single());
  let storage_path=null;const file=d.get("file");
  if(file&&file.size){if(file.size>50*1048576)return toast("File is larger than 50 MB.");storage_path=`${user.id}/${Date.now()}_${file.name.replace(/[^\w.-]/g,"_")}`;const u=await db.storage.from("materials").upload(storage_path,file);if(u.error)return toast(u.error.message)}
  const url=String(d.get("url")||"").trim()||null;if(!url&&!storage_path)return toast("Add a link or choose a file.");
  await ok(db.from("materials").insert({title:d.get("title"),skill:v.skill||"Listening",kind:d.get("kind"),url,storage_path,uploaded_by:user.id,video_id:id}));toast("Uploaded for students.");render()},
 async livecfg(f,d){let u;try{u=new URL(String(d.get("url")).trim())}catch{return toast("Enter the full meeting link starting with https://")}
  const pl=LIVE_HOSTS.find(([re])=>re.test(u.hostname));if(u.protocol!=="https:"||!pl)return toast("Use a Zoom or Google Meet link (https://…).");
  await ok(db.from("live_class").update({url:u.href,title:String(d.get("title")||"").trim()||"Live class",platform:pl[1],updated_by:user.id,updated_at:new Date().toISOString()}).eq("id",1));toast("Meeting link saved.");render()}});
/* ------------------------------------------------------------- live class link (Zoom / Google Meet) */
async function liveRow(){return await ok(db.from("live_class").select("*").eq("id",1).maybeSingle())}
async function liveBanner(){const r=await liveRow();if(!r?.is_live||!r.url)return "";return `<div class="livebar"><span class="dot"></span><div><b>Your class is live${r.title?": "+esc(r.title):""}</b><div class="small">${esc(r.platform||"Online class")}</div></div><button class="primary" data-act="joinlive" data-url="${esc(r.url)}">Join class</button></div>`}
async function liveCard(){
 const r=await liveRow();
 if(role()==="student"){
  if(r?.is_live&&r.url)return `<div class="card livecard on"><div class="row"><div><div class="eyebrow">LIVE NOW</div><h2><span class="dot"></span> ${esc(r.title||"Live class")}</h2><p class="muted">${esc(r.platform||"")} class is running. Join from here. It opens in a new tab and brings you back to this page afterwards.</p></div><button class="primary big-btn" data-act="joinlive" data-url="${esc(r.url)}">Join class</button></div></div>`;
  return `<div class="card livecard"><div class="eyebrow">LIVE CLASS</div><h3>No class is live right now</h3><p class="muted small">This page updates by itself. When your professor starts the class, a Join button appears here and on your dashboard.</p></div>`}
 return `<div class="card livecard${r?.is_live?" on":""}"><div class="row"><div><div class="eyebrow">LIVE CLASS (ZOOM / GOOGLE MEET)</div><h2>${r?.is_live?'<span class="dot"></span> Class is live':"Class is not live"}</h2></div>${r?.url?`<button class="${r.is_live?"outline danger":"primary"}" data-act="golive" data-on="${r.is_live?0:1}">${r.is_live?"End class":"Go live"}</button>`:""}</div>
 <form data-form="livecfg" class="stack"><div class="form-grid"><label>Class title<input name="title" value="${esc(r?.title||"")}" placeholder="e.g. Reading skills, Week 2"></label><label>Meeting link<input name="url" type="url" required value="${esc(r?.url||"")}" placeholder="https://meet.google.com/… or https://zoom.us/j/…"></label></div><button class="soft">Save link</button></form>
 <p class="muted small">Create the meeting in Zoom or Google Meet, paste the link, save, then press <b>Go live</b>. Students see a Join button immediately and the link stays hidden from them until the class is live.</p></div>`}
let liveCh=null;
function watchLive(){if(role()!=="student"||liveCh||!db)return;
 liveCh=db.channel("lc").on("postgres_changes",{event:"UPDATE",schema:"public",table:"live_class"},p=>{if(p.new?.is_live)toast("Your class is live. Press Join class.");if(S.page==="app"&&["dash","live"].includes(S.tab))render()}).subscribe()}
function unwatchLive(){if(liveCh){db.removeChannel(liveCh);liveCh=null}}

/* ------------------------------------------------------------- actions */
const ACT={
 async delmat(el){const m=await ok(db.from("materials").select("title,storage_path").eq("id",el.dataset.id).single());if(!confirm(`Remove "${m.title}" for all students? This cannot be undone.`))return;
  if(m.storage_path)await db.storage.from("materials").remove([m.storage_path]);await ok(db.from("materials").delete().eq("id",el.dataset.id));toast("Removed.");render()},
 openvid(el,e){e.preventDefault();stopPlayer();S.video=el.dataset.id;render();window.scrollTo(0,0)},
 closevid(){stopPlayer();S.video=null;render()},
 async delvid(el){if(!confirm("Delete this video lecture with its quiz, student progress and attached materials? This cannot be undone."))return;stopPlayer();await ok(db.from("videos").delete().eq("id",el.dataset.id));S.video=null;toast("Video deleted.");render()},
 async golive(el){const on=el.dataset.on==="1";await ok(db.from("live_class").update({is_live:on,updated_by:user.id,updated_at:new Date().toISOString()}).eq("id",1));toast(on?"Class is live. Students can join now.":"Class ended.");render()},
 joinlive(el){const u=el.dataset.url;if(/^https:\/\//i.test(u))window.open(u,"_blank","noopener");},
 async nav(el,e){e.preventDefault();const k=el.dataset.k;S.video=null;if(k.startsWith("app:")){S.present=null;go("app",k.slice(4))}else go(k)},
 start(el){startTest(el.dataset.k,el.dataset.kind)},
 anx(){go("app","anx")},
 mat(el,e){e.preventDefault();S.skill=el.dataset.k||null;go("app","materials")},
 async openmat(el){const m=await ok(db.from("materials").select("*").eq("id",el.dataset.id).single());let u=m.url;if(m.storage_path){const s=await db.storage.from("materials").createSignedUrl(m.storage_path,3600);u=s.data?.signedUrl}if(u)window.open(u,"_blank","noopener");else toast("Could not open this file.")},
 unlock:async el=>{await ok(db.rpc("set_unlock",{p_student:el.dataset.s||null,p_skill:el.dataset.k,p_on:el.dataset.on==="1"}));render()},
 pick(el){S.assessId=el.dataset.id;render()},
 pickskill(el){selectedSkill=el.dataset.k;render()},
 simmark(el){const good=el.dataset.kind==="good";skillMarks[selectedSkill]=good?"good":"low";playFeedbackSound(good);showQuoteModal(good?"good":"low",good?`85% in ${selectedSkill} — Great Job!`:`35% in ${selectedSkill} — Keep Practising!`);render()},
 verify:async el=>{const r=await ok(db.rpc("verify_student",{p_user:el.dataset.id}));toast("Research ID "+r);render()},
 syn(){synthetic=!synthetic;render()},
 async export(el){
  const D=await realData(),rows=D.rows;
  if(el.dataset.w==="wide")download("research_dataset.csv",[csvLine(["research_id","year",...SK.map(k=>"pre_"+k),...SK.map(k=>"post_"+k),"anxiety_pre","anxiety_post"]),...rows.map(r=>csvLine([r.rid,r.year,...SK.map(k=>r.pre[k]),...SK.map(k=>r.post[k]),r.anxPre,r.anxPost]))].join("\n"));
  else{const att=await ok(db.from("attempts").select("student_id,skill,kind,week,pct,status,created_at")),sps=await ok(db.from("student_profiles").select("user_id,research_id,year"));const m={};sps.forEach(s=>m[s.user_id]=s);
   download("assessment_rows.csv",[csvLine(["research_id","year","skill","kind","week","pct","status","date"]),...att.filter(a=>m[a.student_id]?.research_id).map(a=>csvLine([m[a.student_id].research_id,m[a.student_id].year,a.skill,a.kind,a.week,a.pct,a.status,a.created_at.slice(0,10)]))].join("\n"))}
  await db.from("audit_logs").insert({actor:user.id,action:"export_"+el.dataset.w,detail:{rows:rows.length}});toast("Downloaded.")},
 play(){if(rec.plays>=2)return toast("Audio can be played twice.");rec.plays++;const u=new SpeechSynthesisUtterance(BANK.Listening.passage);u.lang="en-IN";u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u);$("plays").textContent=`Played ${rec.plays} of 2`},
 async rec(el){
  if(rec.r&&rec.r.state==="recording"){rec.r.stop();return}
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true});rec.chunks=[];rec.r=new MediaRecorder(st);rec.r.ondataavailable=e=>rec.chunks.push(e.data);
   rec.r.onstop=()=>{st.getTracks().forEach(t=>t.stop());rec.blob=new Blob(rec.chunks,{type:rec.r.mimeType||"audio/webm"});const a=$("recAudio");a.src=URL.createObjectURL(rec.blob);a.classList.remove("hidden");el.textContent="● Record again"};
   rec.r.start();el.textContent="■ Stop"}catch(e){toast("Microphone not available. Type a transcript instead.")}},
 async lookup(){
  const code=$("joinCode").value.trim();if(!code)return toast("Type the six-digit code first.");if(await joinLiveQuiz(code))return;
  const r=await db.rpc("get_public_session",{join_code:code});if(r.error||!r.data?.length)return toast("No live quiz or session found with that code. Check the code with your presenter.");
  const x=r.data[0];if(!x.session_open)return toast("This session is paused.");
  if(!user&&!x.anonymous_allowed){toast("Please log in to join this session.");return go("login")}
  sessionNow={code,activity_type:x.activity_type};const opt=["poll","quiz"].includes(x.activity_type);
  $("participant").innerHTML=`<div class="eyebrow">${esc(x.session_title)}</div><div class="question">${esc(x.session_prompt)}</div><div id="answers">${opt?x.activity_options.map(o=>`<button class="answer" data-act="pickans" data-a="${esc(o)}">${esc(o)}</button>`).join(""):`<textarea id="free" placeholder="Your response"></textarea>`}</div><button class="primary" data-act="send" style="width:100%">Submit</button>`},
 pickans(el){document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));el.classList.add("selected");$("answers").dataset.a=el.dataset.a},
 async send(){const a=$("answers"),ans=a.dataset.a||$("free")?.value.trim();if(!ans)return toast("Choose or type a response.");const r=await db.rpc("submit_session_response",{join_code:sessionNow.code,answer_text:ans,display_name:$("displayName").value.trim()||null});if(r.error)return toast(r.error.message);$("participant").innerHTML='<div class="notice">✓ Response submitted. Thank you!</div>'},
 present(el){S.present=el.dataset.id;render()},
 back(){S.present=null;if(channel){db.removeChannel(channel);channel=null}render()},
 async pause(el){await ok(db.from("sessions").update({is_open:el.dataset.open==="1"}).eq("id",el.dataset.id));render()},
 async csv(el){const s=await ok(db.from("sessions").select("title,code,collect_profile,ask_confidence").eq("id",el.dataset.id).single());const d=await ok(db.from("responses").select("participant_name,answer,is_anonymous,created_at,g_subject,g_study_level,g_year,g_locality,g_gender,g_native,g_consent,confidence").eq("session_id",el.dataset.id));
  const base=["Participant","Answer","Anonymous","Submitted"],prof=s.collect_profile?["Subject","Study level","Year","Rural/Urban","Gender","Native","Consent"]:[],conf=s.ask_confidence?["Confidence (1-10)"]:[];
  download(`${s.title}_${s.code}.csv`,[csvLine([...base,...prof,...conf]),...d.map(r=>csvLine([r.participant_name||"Anonymous",r.answer,r.is_anonymous?"Yes":"No",r.created_at,...(s.collect_profile?[r.g_subject||"",r.g_study_level||"",r.g_year||"",r.g_locality||"",r.g_gender||"",r.g_native||"",r.g_consent?"Yes":"No"]:[]),...(s.ask_confidence?[r.confidence??""]:[])]))].join("\n"))},
};
const CHG={unlockStu(el){S.unlockStu=el.value;render()},async assign(el){await ok(db.rpc("assign_teacher",{p_student:el.dataset.id,p_teacher:el.value||null}));toast("Professor assigned.")},
 studylevel(el){const form=el.closest("form"),ysel=form?.querySelector("[name=year]"),pg=el.value==="PG";if(!ysel)return;const opt3=ysel.querySelector('option[value="3"]');if(opt3)opt3.disabled=pg;if(pg&&ysel.value==="3")ysel.value=""}};

document.addEventListener("click",async e=>{const el=e.target.closest("[data-act]");if(!el)return;try{await ACT[el.dataset.act]?.(el,e)}catch(err){console.error(err)}});
document.addEventListener("submit",async e=>{const f=e.target.closest("[data-form]");if(!f)return;e.preventDefault();const b=f.querySelector("button:not([type=button])");if(b)b.disabled=true;try{await FORM[f.dataset.form](f,new FormData(f))}catch(err){console.error(err)}finally{if(b)b.disabled=false}});
document.addEventListener("change",async e=>{const el=e.target.closest("[data-chg]");if(!el)return;try{await CHG[el.dataset.chg](el)}catch(err){console.error(err)}});
$("authBtn").onclick=async()=>{if(user){stopPlayer();unwatchLive();await db.auth.signOut();user=null;profile=null;sp=null;mine=null;S={page:"home"};render()}else go("portals")};
$("homeLink").onclick=e=>{e.preventDefault();user?go("app",homeTab()):go("home")};

/* =====================================================================
   v6 MODULE: research journey, activity runner, confidence meter
   ===================================================================== */
const PURPOSE={anxiety:"Anxiety questionnaire",pre_questionnaire:"Questionnaire (before pre-test)",pretest:"Pre-test",intervention:"Intervention",posttest:"Post-test",post_questionnaire:"Final questionnaire",practice:"Practice",general:"Normal quiz"};
const KIND={quiz:"Quiz",reading:"Reading passage",flashcards:"Flashcards",questionnaire:"Questionnaire"};
const SEGMENTS=["Podcast","Video","Graphic novel","Multimodal"];
const AR_OPTS=["Both the assertion and the reason are true, and the reason correctly explains the assertion.","Both the assertion and the reason are true, but the reason does not explain the assertion.","The assertion is true, but the reason is false.","The assertion is false, but the reason is true."];
const LIKERT=["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"];
const TARGET={pretest:50,intervention:25};
const CONF_WORDS=["","Very unsure","Very unsure","Unsure","Unsure","Okay","Okay","Fairly confident","Confident","Very confident","Very confident"];
const rpc=async(n,a)=>ok(db.rpc(n,a||{}));
const R=()=>S.r||(S.r={});
const setR=o=>{S.r=o;render();window.scrollTo(0,0)};
const lsGet=k=>{try{return JSON.parse(localStorage.getItem(k)||"null")}catch{return null}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const lsDel=k=>{try{localStorage.removeItem(k)}catch{}};

/* allow only simple formatting in passages typed by staff */
function cleanHTML(html){
 const ALLOW={P:1,BR:1,B:1,STRONG:1,I:1,EM:1,U:1,H2:1,H3:1,H4:1,UL:1,OL:1,LI:1,BLOCKQUOTE:1,DIV:1,SPAN:1,SUB:1,SUP:1};
 const doc=new DOMParser().parseFromString(`<div>${html||""}</div>`,"text/html");
 const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3)return;if(c.nodeType!==1){c.remove();return}
  if(["SCRIPT","STYLE","IFRAME","OBJECT","EMBED","LINK","META"].includes(c.tagName)){c.remove();return}
  walk(c);if(!ALLOW[c.tagName]){c.replaceWith(...c.childNodes);return}
  [...c.attributes].forEach(a=>c.removeAttribute(a.name))})};
 walk(doc.body.firstChild);return doc.body.firstChild.innerHTML}

/* ---------- back button on every section (also the phone's own back button) ---------- */
let navDepth=0,navKey=null;
const navSnap=()=>({page:S.page,tab:S.tab,video:S.video||null,r:S.r?{view:S.r.view||null,id:S.r.id||null,thread:S.r.thread||null,sess:S.r.sess||null}:null});
const _render0=render;
render=async function(){
 const snap=navSnap(),key=JSON.stringify(snap);
 if(key!==navKey){
  if(navKey===null||(snap.page==="app"&&JSON.parse(navKey).page!=="app")){navDepth=0;history.replaceState({llc:snap,d:0},"")}
  else{navDepth++;history.pushState({llc:snap,d:navDepth},"")}
  navKey=key}
 await _render0();
 const a=$("app");
 if(a&&navDepth>0&&!a.querySelector(".backbtn")&&!["home"].includes(S.page)&&!lgPlaying()){const b=document.createElement("button");b.className="backbtn";b.type="button";b.dataset.act="back";b.innerHTML='<span aria-hidden="true">←</span> Back';a.prepend(b)}
};
addEventListener("popstate",e=>{const st=e.state?.llc;if(!st)return;
 if(lgPlaying()){history.pushState({llc:navSnap(),d:navDepth},"");toast("You are still in the quiz. To go, press “Leave quiz” at the bottom.");return}
 if((RUN.busy()||(ED&&ED.dirty&&S.r?.view==="edit"))&&!confirm(RUN.busy()?"Leave this page? Your answers so far are kept on this device.":"Leave without saving your changes?")){history.pushState({llc:navSnap(),d:navDepth},"");return}
 navDepth=e.state.d||0;stopTimers();S.page=st.page;S.tab=st.tab;S.video=st.video;S.r=st.r?{...st.r}:null;navKey=JSON.stringify(navSnap());render()});
let timers=[];const every=(ms,f)=>{const t=setInterval(f,ms);timers.push(t);return t};
function stopTimers(){timers.forEach(clearInterval);timers=[]}

/* ---------- confidence meter ---------- */
function gauge(v){const p=(v-1)/9,ang=Math.PI*(1-p),x=100+80*Math.cos(ang),y=100-80*Math.sin(ang);
 return `<svg viewBox="0 0 200 118" class="gauge" aria-hidden="true"><defs><linearGradient id="gg" x1="0" x2="1"><stop offset="0" stop-color="#f29fb5"/><stop offset=".55" stop-color="#8f84ea"/><stop offset="1" stop-color="#13a99b"/></linearGradient></defs>
 <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#e3e1f3" stroke-width="16" stroke-linecap="round"/>
 <path d="M20 100 A80 80 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)}" fill="none" stroke="url(#gg)" stroke-width="16" stroke-linecap="round"/>
 <text x="100" y="96" text-anchor="middle" class="gauge-num">${v}</text></svg>`}
function confCard(title,sub,btn,form,extra=""){
 return `<form data-form="${form}" class="card conf-card stack"><div class="eyebrow">CONFIDENCE METER</div><h2>${title}</h2><p class="muted">${sub}</p>
 <div id="confGauge">${gauge(5)}</div><div id="confWord" class="conf-word">${CONF_WORDS[5]}</div>
 <input type="range" name="conf" min="1" max="10" step="1" value="5" data-inp="conf" aria-label="Confidence from 1 to 10"><div class="row small muted"><span>1 · not confident</span><span>10 · very confident</span></div>${extra}
 <button class="primary">${btn}</button></form>`}

/* ---------- student: research home ---------- */
async function loadState(){return S.rs=await rpc("research_state")}
const attOf=(a,ctx="")=>a.attempts.filter(t=>t.context===ctx);
const doneOf=(a,ctx="")=>attOf(a,ctx).some(t=>t.status==="done");
function stepInfo(st){
 const A=p=>st.activities.filter(a=>a.purpose===p),anx=A("anxiety")[0]||null,pr=st.progress||{},o=st.stages||{},d=st.done||{};
 const consent=!!pr.consent_at;
 return {anx,consent,read:!!pr.process_read_at,
  steps:[
   {k:"pre_questionnaire",n:"Questionnaire",d:"Tell us how you feel about using English. There are no right or wrong answers.",items:[...(anx?[{a:anx,ctx:"pre"}]:[]),...A("pre_questionnaire").map(a=>({a,ctx:""}))],
    lock:!consent?"Give your consent first.":!o.pre_questionnaire?"Your professor has not opened this yet.":null,done:consent&&d.pre_questionnaire},
   {k:"pretest",n:"Pre-test",d:"One test for each skill. It shows your level before the classes begin.",items:A("pretest").map(a=>({a,ctx:""})),
    lock:!consent?"Give your consent first.":!d.pre_questionnaire?"Finish the questionnaire first.":!o.pretest?"Your professor has not opened this yet.":null,done:d.pretest&&A("pretest").length>0},
   {k:"intervention",n:"Interventions",d:"Flipped-learning sessions with podcasts, videos, graphic novels and mixed media. Each has a quiz with explanations.",items:A("intervention").map(a=>({a,ctx:""})),
    lock:!d.pretest||!A("pretest").length?"Finish every pre-test first.":!o.intervention?"Your professor will open the sessions after the pre-test.":null,done:A("intervention").length>0&&A("intervention").every(a=>doneOf(a))},
   {k:"posttest",n:"Post-test",d:"One final test that covers all the skills.",items:A("posttest").map(a=>({a,ctx:""})),
    lock:!d.pretest||!A("pretest").length?"Finish every pre-test first.":!o.posttest?"Your professor will open the post-test at the end of the course.":null,done:d.posttest},
   {k:"post_questionnaire",n:"Final questionnaire",d:"Your views after the course. This opens once the post-test is submitted.",items:A("post_questionnaire").map(a=>({a,ctx:""})),
    lock:!d.posttest?"Submit the post-test first.":!o.post_questionnaire?"Your professor has not opened this yet.":null,done:d.post_questionnaire&&A("post_questionnaire").length>0}]}}
function itemRow(it,locked,anx){
 const a=it.a,done=doneOf(a,it.ctx),open=attOf(a,it.ctx).find(t=>t.status==="open"),last=attOf(a,it.ctx).filter(t=>t.status==="done").slice(-1)[0];
 const isTest=a.kind!=="questionnaire",learn=a.purpose==="intervention";
 let right="";
 if(locked)right=`<span class="chip c-Locked">Locked</span>`;
 else if(done&&!learn)right=`<span class="chip c-Completed">Completed${isTest&&last?.total?` · ${last.score}/${last.total}`:""}</span>`;
 else right=`${done&&last?`<span class="chip c-Completed">${last.score}/${last.total}</span>`:""}<button class="${done?"soft":"primary"}" data-act="rstart" data-id="${a.id}" data-ctx="${it.ctx}">${open?"Continue":done?"Try again":"Start"}</button>`;
 return `<div class="activity"><div class="badge">${a.segment||a.skill||KIND[a.kind]}</div><div class="info"><b>${esc(a.title)}</b><div class="muted small">${a.n} ${a.kind==="questionnaire"?"statements":"questions"}${learn&&anx?" · short feelings check first":""}</div></div>${right}</div>`}
function journeyModel(st){
 const I=stepInfo(st),frac=s=>s.items.length?s.items.filter(it=>doneOf(it.a,it.ctx)).length/s.items.length:0;
 const list=[{k:"process",n:"How it works",done:I.read,lock:null,f:I.read?1:0,cnt:""},{k:"consent",n:"Consent",done:I.consent,lock:I.read?null:"Read how the research works first.",f:I.consent?1:0,cnt:""},
  ...I.steps.map(s=>{const t=s.items.length,d=s.items.filter(it=>doneOf(it.a,it.ctx)).length;return {...s,done:t>0&&d===t,f:frac(s),cnt:t?`${d}/${t}`:"",empty:!t}})];
 const cur=list.findIndex(x=>!x.done);return {I,list,cur:cur<0?list.length-1:cur,pct:Math.round(100*list.reduce((a,x)=>a+x.f,0)/list.length),all:cur<0}}
async function researchHome(){
 const r=R();
 if(r.view==="process")return processPage();
 if(r.view==="run")return RUN.page();
 const [st,banner]=await Promise.all([loadState(),liveBanner()]);const M=journeyModel(st),I=M.I,L=M.list;
 const sel=L.some(x=>x.k===r.sel)?r.sel:L[M.cur].k,S_=L.find(x=>x.k===sel),si=L.indexOf(S_);
 /* live: refresh when a professor opens a stage or new work is published */
 stopTimers();const snap=JSON.stringify(st);S.after=()=>every(20000,async()=>{if(S.page!=="app"||S.tab!=="dash"||S.r?.view)return;try{const n=await db.rpc("research_state");if(!n.error&&JSON.stringify(n.data)!==snap)render()}catch{}});
 const tile=(x,i)=>{const state=x.done?"is-done":x.lock?"is-locked":"is-open";
  return `<button type="button" class="ptile ${state} ${i===M.cur&&!M.all?"is-cur":""} ${x.k===sel?"is-sel":""}" data-act="jsel" data-k="${x.k}" aria-pressed="${x.k===sel}"><span class="pconn"><i style="width:${Math.round(100*x.f)}%"></i></span><span class="pnode">${x.done?"✓":x.lock?"🔒":i+1}</span><b>${x.n}</b><span class="pstat">${x.done?"Done":x.lock?"Locked":x.empty?"Coming soon":"Open"}${x.cnt?` · ${x.cnt}`:""}</span></button>`};
 let detail="";
 if(sel==="process")detail=`<p class="muted">See what will happen, step by step, before you agree to take part.</p><button class="${I.read?"soft":"primary"}" data-act="rview" data-v="process">${I.read?"Read again":"See how it works"}</button>`;
 else if(sel==="consent")detail=I.consent?`<p class="muted">You agreed to take part on ${fmtDT(st.progress.consent_at)}. You can withdraw at any time by telling the researcher.</p>`:I.read?`<form data-form="consent" class="stack"><label class="check"><input type="checkbox" name="agree" required> <span>I have read how the research works. I understand that taking part is voluntary, that my scores and answers will be used for research with my name removed, and that I can stop at any time. I agree to take part.</span></label><button class="primary">I agree, continue</button></form>`:'<p class="lockmsg">🔒 Read how the research works first.</p>';
 else detail=`<p class="muted">${S_.d}</p>${S_.lock?`<p class="lockmsg">🔒 ${S_.lock}</p>`:""}${S_.items.length?`<div class="stack">${S_.items.map(it=>itemRow(it,!!S_.lock,I.anx)).join("")}</div>`:'<p class="muted small">Your professor has not added anything here yet.</p>'}`;
 return `${banner}<div class="head"><div class="eyebrow">${esc(sp?.verified?"Research ID "+sp.research_id:"Research participant")}</div><h1>Hello, ${esc((profile.full_name||"").split(" ")[0])}</h1><p>Your research journey. Complete the steps in order.</p></div>
 <div class="card pcard"><div class="row"><b>${M.all?"All steps complete 🎉":`Step ${M.cur+1} of ${L.length}: ${L[M.cur].n}`}</b><span class="ppct">${M.pct}%</span></div><div class="bar pbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${M.pct}" aria-label="Research progress"><i style="width:${M.pct}%"></i></div>
 <div class="pgrid">${L.map(tile).join("")}</div></div>
 <div class="card jdetail"><div class="row"><h3><span class="jd-num">${si+1}</span> ${sel==="process"?"How this research works":S_.n}</h3>${S_.done?'<span class="chip c-Completed">Done</span>':S_.lock?'<span class="chip c-Locked">Locked</span>':'<span class="chip c-Available">Open</span>'}</div>${detail}</div>`}
function processPage(){
 const st=S.rs,read=!!st?.progress?.process_read_at;
 const steps=[["Read and agree","You read this page and tick the consent box. Taking part is your choice."],["Questionnaire","A short questionnaire about how you feel when you use English. You answer on a five-point scale from Strongly disagree to Strongly agree."],
  ["Pre-test","One test for each of the six skills: Listening, Speaking, Reading, Writing, Grammar and Vocabulary. Before and after each test you set a confidence meter."],
  ["Interventions","Flipped-learning sessions. You study a podcast, a video, a graphic novel or mixed material, then answer a quiz. When an answer is wrong you see an explanation. A very short feelings check comes before each session."],
  ["Post-test","One final test covering all the skills, so your progress can be compared with the pre-test."],["Final questionnaire","A last questionnaire about your experience. It opens only after the post-test."]];
 return `<div class="head"><div class="eyebrow">THE RESEARCH PROCESS</div><h1>How this research works</h1><p>This study looks at how coastal stories and flipped teaching can help undergraduate students learn English.</p></div>
 <div class="card"><div class="timeline">${steps.map((s,i)=>`<div class="tl"><b>${i+1}</b><div><h3>${s[0]}</h3><p class="muted">${s[1]}</p></div></div>`).join("")}</div>
 <div class="notice"><b>Your information.</b> Your attendance, scores, questionnaire answers and confidence ratings are recorded. The researcher and your professors can see them, including messages in the discussion area. Results are reported without names. You may ask questions or withdraw at any time by writing to the researcher.</div>
 <div class="actions">${read?'<button class="primary" data-act="rview" data-v="">Back to my steps</button>':'<button class="primary" data-act="rack">I have read this</button>'}</div></div>`}

/* ---------- activity runner (students, and staff preview) ---------- */
const RUN={st:null,
 busy(){return !!(RUN.st&&RUN.st.phase==="q"&&!RUN.st.preview)},
 key(){return "llc_run_"+RUN.st.attempt},
 async begin(a,ctx){ /* a = entry from research_state */
  const I=stepInfo(S.rs);
  if(a.purpose==="intervention"||a.purpose==="posttest"){const c=a.purpose==="posttest"?"post":"int:"+a.id;
   if(I.anx&&!doneOf(I.anx,c)&&!attOf(a).some(t=>t.status==="open")){RUN.st={phase:"chain",next:a,meta:I.anx,ctx:c};return RUN.open(I.anx,c)}}
  const open=attOf(a,ctx).find(t=>t.status==="open");
  if(a.kind==="questionnaire"||open)return RUN.open(a,ctx,null);
  RUN.st={phase:"conf",meta:a,ctx};setR({view:"run"})},
 async open(a,ctx,conf){
  const r=await rpc("start_activity",{p_activity:a.id,p_context:ctx||"",p_conf:conf??null});
  const prev=RUN.st?.phase==="chain"?RUN.st.next:null;
  RUN.st={phase:"q",attempt:r.attempt,act:r.activity,learn:r.learn,ctx,i:0,ans:{},fb:{},next:prev};
  const act=r.activity;
  if(r.learn){Object.entries(r.answers||{}).forEach(([k,v])=>RUN.st.ans[k]=v);RUN.st.i=Math.min(Object.keys(RUN.st.ans).length,act.questions.length-1);RUN.st.resumed=Object.keys(RUN.st.ans).length>0}
  else{const sv=lsGet(RUN.key());if(sv)RUN.st.ans=sv}
  setR({view:"run"})},
 preview(act,keys){RUN.st={phase:"q",preview:true,act,keys,learn:true,i:0,ans:{},fb:{}};setR({...R(),view:"preview"})},
 page(){const s=RUN.st;if(!s)return `<div class="card">Nothing is open. <button class="soft" data-act="rview" data-v="">Back</button></div>`;
  if(s.phase==="conf")return confCard("How confident do you feel right now?",`Before you start <b>${esc(s.meta.title)}</b>, slide to show how confident you feel about it.`,"Save my check-in and start","confstart");
  if(s.phase==="result")return RUN.result();
  if(s.act.kind==="questionnaire")return RUN.likert();
  return RUN.quiz()},
 likert(){const a=RUN.st.act;
  return `<div class="head"><div class="eyebrow">${a.purpose==="anxiety"?"FEELINGS CHECK":"QUESTIONNAIRE"}</div><h1>${esc(a.title)}</h1><p>${esc(a.intro||"Choose the answer that best matches how you feel. There are no right or wrong answers.")}</p></div>
  <form data-form="likert" class="card stack"><div class="likert-scale small muted">${LIKERT.map((l,i)=>`<span>${i+1} = ${l}</span>`).join("")}</div>
  ${a.questions.map((q,i)=>`<fieldset class="likert-row"><legend>${i+1}. ${esc(q.q)}</legend><div class="likert-opts">${LIKERT.map((l,v)=>`<label title="${l}"><input type="radio" name="q${i}" value="${v+1}" required><span>${v+1}</span><em>${l}</em></label>`).join("")}</div></fieldset>`).join("")}
  <button class="primary">Submit</button></form>`},
 media(a){const u=a.media_url;if(!u)return "";const y=ytId(u);
  if(y)return `<div class="player"><iframe src="https://www.youtube-nocookie.com/embed/${y}?rel=0" title="Video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`;
  if(!/^https:\/\//i.test(u))return "";
  if(/\.(mp3|m4a|wav|ogg)(\?|$)/i.test(u))return `<audio controls src="${esc(u)}" style="width:100%"></audio>`;
  if(/\.(png|jpe?g|gif|webp)(\?|$)/i.test(u))return `<img src="${esc(u)}" alt="" class="media-img">`;
  return `<a class="soft linkbtn" href="${esc(u)}" target="_blank" rel="noopener">Open the ${esc((a.segment||"material").toLowerCase())} ↗</a>`},
 qbody(q,i,given,locked){
  const say=q.say?`<div class="saybar"><button type="button" class="soft" data-act="say">▶ Play audio</button><span class="muted small">Listen, then answer. You can play it again.</span></div>`:"";
  const tiles=(opts)=>`<div class="tiles t${opts.length}">${opts.map((o,oi)=>`<button type="button" class="tile c${oi%4}${given===oi?" picked":""}" ${locked?"disabled":""} data-act="pick" data-v="${oi}"><span>${"ABCD"[oi]||""}</span>${esc(o)}</button>`).join("")}</div>`;
  if(q.type==="tf")return `${say}<div class="qtext">${esc(q.q)}</div>${tiles(["True","False"])}`;
  if(q.type==="ar")return `${say}<div class="qtext"><div class="ar"><b>Assertion (A)</b> ${esc(q.assertion)}</div><div class="ar"><b>Reason (R)</b> ${esc(q.reason)}</div></div>${tiles(AR_OPTS)}`;
  if(q.type==="match"){const g=Array.isArray(given)?given:[];
   return `${say}<div class="qtext">${esc(q.q||"Match each item with its pair.")}</div><div class="match">${q.left.map((l,li)=>`<div class="mrow"><span>${esc(l)}</span><select data-chg="pickmatch" data-li="${li}" ${locked?"disabled":""}><option value="">Choose…</option>${q.right.map((r,ri)=>`<option value="${ri}" ${g[li]===ri?"selected":""}>${esc(r)}</option>`).join("")}</select></div>`).join("")}</div>${locked?"":`<button type="button" class="primary" data-act="lockmatch">${RUN.st?.learn?"Check answer":"Save answer"}</button>`}`}
  return `${say}<div class="qtext">${esc(q.q)}</div>${tiles(q.options||[])}`},
 ansText(q,k){if(q.type==="tf")return ["True","False"][k];if(q.type==="ar")return "ABCD"[k]+". "+AR_OPTS[k];if(q.type==="match")return q.left.map((l,i)=>`${l} → ${q.right[k[i]]}`).join("; ");return q.options?.[k]},
 quiz(){const s=RUN.st,a=s.act,n=a.questions.length,i=s.i,q=a.questions[i],given=s.ans[i],fb=s.fb[i],answered=Object.keys(s.ans).filter(k=>s.ans[k]!=null&&!(Array.isArray(s.ans[k])&&s.ans[k].some(x=>x==null))).length;
  const lockedQ=s.learn&&!!fb;
  const fbBox=fb?`<div class="fb ${fb.correct?"good":"bad"}"><b>${fb.correct?"✓ Correct":"✗ Not quite"}</b>${fb.correct?"":`<div>Correct answer: <b>${esc(RUN.ansText(q,fb.answer))}</b></div>`}${fb.explanation&&(!fb.correct||s.preview)?`<div class="expl"><b>Explanation.</b> ${esc(fb.explanation)}</div>`:""}</div>`:"";
  const nav=s.preview
   ?`<div class="actions"><button class="outline" data-act="qprev" ${i===0?"disabled":""}>← Previous</button>${i<n-1?`<button class="primary" data-act="qnext">Next →</button>`:`<button class="primary" data-act="qfinish">End preview</button>`}</div>
     <div class="palette">${a.questions.map((_,j)=>`<button type="button" data-act="qgo" data-i="${j}" class="${j===i?"cur":""} ${s.ans[j]!=null?"ans":""}">${j+1}</button>`).join("")}</div>`
   :s.learn
   ?`<div class="actions">${fb||s.resumed&&given!=null?`<button class="primary" data-act="${i<n-1?"qnext":"qfinish"}">${i<n-1?"Next question →":"Finish and see my score"}</button>`:""}</div>`
   :`<div class="actions"><button class="outline" data-act="qprev" ${i===0?"disabled":""}>← Previous</button>${i<n-1?`<button class="primary" data-act="qnext">Next →</button>`:`<button class="primary" data-act="qfinish">Submit test (${answered}/${n} answered)</button>`}</div>
     <div class="palette">${a.questions.map((_,j)=>`<button type="button" data-act="qgo" data-i="${j}" class="${j===i?"cur":""} ${s.ans[j]!=null?"ans":""}">${j+1}</button>`).join("")}</div>`;
  const qcard=`<div class="card qcard"><div class="row"><span class="badge">Question ${i+1} of ${n}</span><span class="muted small">${({mcq:"Multiple choice",tf:"True or false",ar:"Assertion and reason",match:"Match the following"})[q.type]||""}</span></div><div class="bar"><i style="width:${Math.round(100*(i+(fb||(!s.learn&&given!=null)?1:0))/n)}%"></i></div>${RUN.qbody(q,i,given,lockedQ)}${fbBox}${nav}</div>`;
  const head=`<div class="head"><div class="eyebrow">${s.preview?"PREVIEW · ":""}${PURPOSE[a.purpose].toUpperCase()}${a.segment?" · "+a.segment.toUpperCase():""}${a.skill?" · "+a.skill.toUpperCase():""}</div><h1>${esc(a.title)}</h1>${a.intro?`<p>${esc(a.intro)}</p>`:""}</div>`;
  const media=RUN.media(a);
  if(a.kind==="reading"||a.passage)return `${head}${media}<div class="readwrap"><div class="card passage-pane"><div class="passage-body">${cleanHTML(a.passage)}</div></div><div>${qcard}</div></div>`;
  return `${head}${media?`<div class="card">${media}</div>`:""}${qcard}`},
 result(){const s=RUN.st,r=s.res,a=s.act,p=Math.round(100*r.score/Math.max(1,r.total));
  const review=r.keys?`<div class="card"><h3>Review</h3>${a.questions.map((q,i)=>`<div class="qbox ${r.correct[i]?"right":"wrong"}"><b>${i+1}. ${esc(q.q||q.assertion||"Match the following")}</b> ${r.correct[i]?"✓":"✗"}<div class="small">Correct answer: ${esc(RUN.ansText(q,r.keys[i].answer))}</div>${!r.correct[i]&&r.keys[i].explanation?`<div class="expl small"><b>Explanation.</b> ${esc(r.keys[i].explanation)}</div>`:""}</div>`).join("")}</div>`:"";
  return `<div class="card result"><div class="eyebrow">${PURPOSE[a.purpose].toUpperCase()} SUBMITTED</div><h1>${r.score} / ${r.total}</h1><p class="muted">${esc(a.title)} · ${p}%</p></div>
  ${s.confDone?`<div class="actions"><button class="primary" data-act="rview" data-v="">Back to my steps</button></div>`:confCard("How confident do you feel now?","Now that you have finished, slide to show how confident you feel about this skill.","Save my check-in","confafter")}${review}`}};

Object.assign(FORM,{
 async consent(){await rpc("research_ack",{p_step:"consent"});toast("Thank you. Your consent is recorded.");render()},
 async confstart(f,d){const s=RUN.st;await RUN.open(s.meta,s.ctx,+d.get("conf"))},
 async confafter(f,d){await rpc("set_conf_after",{p_attempt:RUN.st.attempt,p_value:+d.get("conf")});RUN.st.confDone=true;toast("Check-in saved.");render()},
 async likert(f,d){if(RUN.st.preview)return toast("This is a preview. Nothing is recorded.");const s=RUN.st,n=s.act.questions.length,a=[];for(let i=0;i<n;i++)a.push(+d.get("q"+i));
  await rpc("finish_activity",{p_attempt:s.attempt,p_answers:a});toast("Thank you. Your answers are saved.");const nx=s.next;RUN.st=null;await loadState();
  if(nx){const fresh=S.rs.activities.find(x=>x.id===nx.id);return RUN.begin(fresh,"")}
  setR({})}});
Object.assign(ACT,{
 back(){history.back()},
 jsel(el){R().sel=el.dataset.k;render()},
 say(){const q=RUN.st?.act?.questions[RUN.st.i];if(!q?.say||!window.speechSynthesis)return toast("Audio is not supported in this browser.");const u=new SpeechSynthesisUtterance(q.say);u.lang="en-IN";u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u)},
 rview(el){stopTimers();if(el.dataset.v==="")RUN.st=null;setR(el.dataset.v?{view:el.dataset.v}:{})},
 async rack(){await rpc("research_ack",{p_step:"process"});await loadState();toast("Thank you. Now tick the consent box.");setR({})},
 async rstart(el){const st=S.rs||await loadState();const a=st.activities.find(x=>x.id===el.dataset.id);if(a)await RUN.begin(a,el.dataset.ctx||"")},
 async pick(el){const s=RUN.st;if(!s||s.phase!=="q")return;const v=+el.dataset.v;await RUN_answer(v)},
 async lockmatch(){const s=RUN.st,q=s.act.questions[s.i],g=s.ans[s.i]||[];if(g.length<q.left.length||g.some(x=>x==null||x===""))return toast("Match every item first.");await RUN_answer(g,true)},
 qnext(){try{speechSynthesis.cancel()}catch{};const s=RUN.st;if(s.i<s.act.questions.length-1){s.i++;s.resumed=false;render();window.scrollTo(0,0)}},
 qprev(){const s=RUN.st;if(s.i>0){s.i--;render()}},
 qgo(el){RUN.st.i=+el.dataset.i;render()},
 async qfinish(){const s=RUN.st,a=s.act,n=a.questions.length;
  if(s.preview){RUN.st=null;return setR({view:"edit",id:R().id})}
  let payload=null;
  if(!s.learn){const arr=[];for(let i=0;i<n;i++){const v=s.ans[i];if(v==null||(Array.isArray(v)&&(v.length<a.questions[i].left.length||v.some(x=>x==null)))){s.i=i;render();return toast(`Question ${i+1} is not answered yet.`)}arr.push(v)}
   if(!confirm("Submit the test? You cannot change your answers afterwards."))return;payload=arr}
  else if(Object.keys(s.ans).length<n&&!confirm("Some questions are not answered. Finish anyway?"))return;
  const res=await rpc("finish_activity",{p_attempt:s.attempt,p_answers:payload});lsDel(RUN.key());
  s.phase="result";s.res=res;try{playFeedbackSound(res.score/res.total>=.6);if(s.learn)showQuoteModal(res.score/res.total>=.6?"good":"low",`You scored ${res.score} out of ${res.total}`)}catch{};render();window.scrollTo(0,0)}});
async function RUN_answer(v,isMatch){const s=RUN.st,i=s.i;
 if(s.learn){if(s.fb[i])return;
  if(s.preview){const k=s.keys[i]||{};s.ans[i]=v;s.fb[i]={correct:JSON.stringify(v)===JSON.stringify(k.answer),answer:k.answer,explanation:k.explanation}}
  else{const r=await rpc("answer_question",{p_attempt:s.attempt,p_idx:i,p_answer:v});s.ans[i]=r.given;s.fb[i]=r}
  try{playFeedbackSound(s.fb[i].correct)}catch{}}
 else{s.ans[i]=v;lsSet(RUN.key(),s.ans)}
 render()}
CHG.pickmatch=el=>{const s=RUN.st,i=s.i,q=s.act.questions[i];const g=Array.isArray(s.ans[i])?[...s.ans[i]]:Array(q.left.length).fill(null);g[+el.dataset.li]=el.value===""?null:+el.value;s.ans[i]=g;if(!s.learn){lsSet(RUN.key(),s.ans);if(!g.some(x=>x==null)){const p=document.querySelector(".palette .cur");p&&p.classList.add("ans")}}};
document.addEventListener("input",e=>{const el=e.target.closest("[data-inp=conf]");if(!el)return;const v=+el.value;const g=$("confGauge"),w=$("confWord");if(g)g.innerHTML=gauge(v);if(w)w.textContent=CONF_WORDS[v]});
addEventListener("beforeunload",e=>{if(RUN.busy()&&!RUN.st.learn){e.preventDefault();e.returnValue=""}});

/* ---------- student: practice (flashcards and practice quizzes) ---------- */
async function practiceTab(){
 const r=R();
 if(r.view==="run")return RUN.page();
 if(r.view==="cards")return cardsPage(r.id);
 const st=await loadState(),items=st.activities.filter(a=>a.purpose==="practice");
 return `<div class="head"><div class="eyebrow">PRACTICE</div><h1>Flashcards and practice</h1><p>Extra practice from your professors. These do not count towards the research tests.</p></div>
 <div class="stack">${items.map(a=>`<div class="card activity"><div class="badge">${KIND[a.kind]}</div><div class="info"><b>${esc(a.title)}</b><div class="muted small">${a.n} ${a.kind==="flashcards"?"cards":"questions"}${a.skill?" · "+a.skill:""}</div></div>${a.kind==="flashcards"?`<button class="primary" data-act="cards" data-id="${a.id}">Open cards</button>`:`<button class="primary" data-act="rstart" data-id="${a.id}" data-ctx="">${attOf(a).some(t=>t.status==="open")?"Continue":"Start"}</button>`}</div>`).join("")||'<div class="empty">No practice sets yet.</div>'}</div>`}
async function cardsPage(id,preview){
 const a=preview||await ok(db.from("activities").select("*").eq("id",id).single());const r=R();const n=a.cards.length;if(!n)return '<div class="card">This set has no cards yet.</div>';
 const i=Math.min(r.ci||0,n-1),c=a.cards[i];
 return `<div class="head"><div class="eyebrow">${preview?"PREVIEW · ":""}FLASHCARDS</div><h1>${esc(a.title)}</h1><p>Tap the card to turn it over.</p></div>
 <div class="flash ${r.flip?"flipped":""}" data-act="flip" role="button" tabindex="0" aria-label="Flashcard, tap to turn"><div class="flash-in"><div class="flash-f"><span>${esc(c.front)}</span></div><div class="flash-b"><span>${esc(c.back)}</span></div></div></div>
 <div class="actions flash-nav"><button class="outline" data-act="cardgo" data-d="-1" ${i===0?"disabled":""}>← Previous</button><span class="badge">${i+1} / ${n}</span><button class="primary" data-act="cardgo" data-d="1" ${i===n-1?"disabled":""}>Next →</button></div>`}
Object.assign(ACT,{cards(el){setR({view:"cards",id:el.dataset.id,ci:0})},flip(){const r=R();r.flip=!r.flip;document.querySelector(".flash")?.classList.toggle("flipped",r.flip)},
 cardgo(el){const r=R();r.ci=(r.ci||0)+ +el.dataset.d;r.flip=false;render()}});

/* =====================================================================
   v6 MODULE: My library, activity builder, research control, attendance
   ===================================================================== */
async function fetchAll(table,cols="*",mod){const out=[];for(let from=0;;from+=1000){let q=db.from(table).select(cols);if(mod)q=mod(q);const rows=await ok(q.range(from,from+999));out.push(...rows);if(rows.length<1000)break}return out}
const band=p=>p==null?"-":p>=80?"Excellent":p>=60?"Good":p>=40?"Developing":"Needs support";
const isStaff=()=>["teacher","researcher"].includes(role());
let ED=null;
const blankQ=kind=>kind==="questionnaire"?{type:"likert"}:{type:"mcq"};
function newED(kind,cat){ED={id:null,locked:false,qi:null,qf:blankQ(kind),keys:[],data:{kind,purpose:cat==="general"?"general":kind==="questionnaire"?"anxiety":kind==="flashcards"?"practice":"pretest",title:"",skill:"",segment:"",media_url:"",intro:"",passage:"",cards:[],questions:[],status:"draft",sort:0}}}
async function loadED(id){const [a,k,att]=await Promise.all([ok(db.from("activities").select("*").eq("id",id).single()),ok(db.from("activity_keys").select("keys").eq("activity_id",id).maybeSingle()),ok(db.from("activity_attempts").select("id").eq("activity_id",id).limit(1))]);
 ED={id,locked:att.length>0,qi:null,qf:blankQ(a.kind),keys:k?.keys||[],data:{kind:a.kind,purpose:a.purpose,title:a.title,skill:a.skill||"",segment:a.segment||"",media_url:a.media_url||"",intro:a.intro||"",passage:a.passage||"",cards:a.cards||[],questions:a.questions||[],status:a.status,sort:a.sort||0}}}
const purposesFor=k=>k==="questionnaire"?["anxiety","pre_questionnaire","post_questionnaire","general"]:k==="flashcards"?["practice","general"]:["pretest","intervention","posttest","practice","general"];
function edSync(){if(!ED)return;const d=ED.data;document.querySelectorAll("[data-ed]").forEach(el=>{d[el.dataset.ed]=el.dataset.ed==="sort"?(+el.value||0):el.value});
 const p=$("edPassage");if(p)d.passage=cleanHTML(p.innerHTML);
 const c=$("edCards");if(c)d.cards=c.value.split("\n").map(l=>l.trim()).filter(Boolean).map(l=>{const m=l.split(/\s*\|\s*|\s+[-–:]\s+|\t/);return {front:(m[0]||"").trim(),back:m.slice(1).join(" - ").trim()}}).filter(x=>x.front&&x.back);
 const f=document.querySelector("form[data-form=edq]");if(f){const fd=new FormData(f);ED.qf={...ED.qf,...Object.fromEntries(fd.entries()),reverse:fd.get("reverse")==="on"}}}
function shuffleIdx(n){const a=[...Array(n).keys()];for(let i=n-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}if(n>1&&a.every((v,i)=>v===i))[a[0],a[1]]=[a[1],a[0]];return a}
/* turn the form / an import line into {q (student view), k (hidden key)} */
function buildQ(f){const t=f.type,ex=(f.explanation||"").trim()||undefined,sk=f.skill||undefined,sy=(f.say||"").trim()||undefined;const need=(v,m)=>{if(!String(v||"").trim())throw new Error(m);return String(v).trim()};
 if(t==="likert")return {q:{type:"likert",q:need(f.q,"Type the statement."),...(f.reverse?{reverse:true}:{})},k:{}};
 if(t==="tf"){if(!["0","1",0,1].includes(f.answer))throw new Error("Choose True or False as the answer.");return {q:{type:"tf",q:need(f.q,"Type the statement."),skill:sk,say:sy},k:{answer:+f.answer,explanation:ex}}}
 if(t==="ar"){if(f.answer===""||f.answer==null)throw new Error("Choose the correct option.");return {q:{type:"ar",assertion:need(f.assertion,"Type the assertion."),reason:need(f.reason,"Type the reason."),skill:sk,say:sy},k:{answer:+f.answer,explanation:ex}}}
 if(t==="match"){const pairs=String(f.pairs||"").split(/\n|;/).map(l=>l.trim()).filter(Boolean).map(l=>l.split(/\s*=\s*/));if(pairs.length<2||pairs.some(p=>p.length!==2||!p[0]||!p[1]))throw new Error("Write at least two pairs, one per line, as  left = right");
  const sh=shuffleIdx(pairs.length);return {q:{type:"match",q:(f.q||"").trim()||"Match the following.",left:pairs.map(p=>p[0]),right:sh.map(i=>pairs[i][1]),skill:sk,say:sy},k:{answer:pairs.map((_,i)=>sh.indexOf(i)),explanation:ex}}}
 const opts=[f.o0,f.o1,f.o2,f.o3].map(o=>String(o||"").trim());const used=opts.filter(Boolean);if(used.length<2)throw new Error("Give at least two options.");
 const ai=+f.answer;if(f.answer===""||f.answer==null||!opts[ai])throw new Error("Choose which option is correct.");
 return {q:{type:"mcq",q:need(f.q,"Type the question."),options:used,skill:sk,say:sy},k:{answer:used.indexOf(opts[ai]),explanation:ex}}}
function qToForm(q,k){if(q.type==="likert")return {type:"likert",q:q.q,reverse:!!q.reverse};const b={type:q.type,explanation:k.explanation||"",skill:q.skill||"",say:q.say||""};
 if(q.type==="tf")return {...b,q:q.q,answer:String(k.answer)};if(q.type==="ar")return {...b,assertion:q.assertion,reason:q.reason,answer:String(k.answer)};
 if(q.type==="match")return {...b,q:q.q,pairs:q.left.map((l,i)=>`${l} = ${q.right[k.answer[i]]}`).join("\n")};
 return {...b,q:q.q,o0:q.options[0]||"",o1:q.options[1]||"",o2:q.options[2]||"",o3:q.options[3]||"",answer:String(k.answer)}}
/* ---------- importer: pipes, spreadsheet paste (tabs), CSV, or numbered questions with A) B) options ---------- */
function csvRows(txt,sep){const rows=[];let row=[],cell="",q=false;for(let i=0;i<txt.length;i++){const c=txt[i];
  if(q){if(c==='"'){if(txt[i+1]==='"'){cell+='"';i++}else q=false}else cell+=c}
  else if(c==='"'&&cell.trim()==="")q=true;else if(c===sep){row.push(cell);cell=""}else if(c==="\n"){row.push(cell);rows.push(row);row=[];cell=""}else if(c!=="\r")cell+=c}
 row.push(cell);rows.push(row);return rows.map(r=>r.map(x=>x.trim())).filter(r=>r.some(Boolean))}
const TYPE_ALIASES={mcq:"mcq",mc:"mcq","multiple choice":"mcq","multiple-choice":"mcq",multiplechoice:"mcq",choice:"mcq",tf:"tf","t/f":"tf","true/false":"tf","true or false":"tf",truefalse:"tf","true false":"tf",ar:"ar","a/r":"ar","assertion":"ar","assertion reason":"ar","assertion and reason":"ar","assertion-reason":"ar","assertion & reason":"ar",match:"match",matching:"match","match the following":"match"};
const typeOf=x=>TYPE_ALIASES[String(x||"").toLowerCase().replace(/\s+/g," ").trim()];
function letterOf(ans,opts){const a=String(ans||"").trim().replace(/^(option|ans(wer)?|correct( answer)?)\s*[:.\-]?\s*/i,"").replace(/^[(\[]\s*|\s*[)\].:]\s*$/g,"").trim();
 if(/^[A-Da-d]$/.test(a))return "ABCD".indexOf(a.toUpperCase());if(/^[1-4]$/.test(a))return +a-1;
 const m=a.match(/^([A-Da-d])[).:\-]\s/);if(m)return "ABCD".indexOf(m[1].toUpperCase());
 const i=(opts||[]).findIndex(o=>o&&o.toLowerCase()===a.toLowerCase());return i}
const tfOf=x=>{const v=String(x||"").trim().toLowerCase().replace(/[.)\]]$/,"");return /^(t|true|yes|correct)$/.test(v)?"0":/^(f|false|no|incorrect)$/.test(v)?"1":null};
function rowToForm(c){ /* c = cells of one row */
 let t=typeOf(c[0]),r=c.slice(1);
 if(!t){r=c;const tf=tfOf(c[1]);t=c.length>=6?"mcq":(c.length<=3&&tf!=null)?"tf":null;if(!t)throw new Error("could not tell the question type. Start the line with MCQ, TF, AR or MATCH, or use the template")}
 if(t==="mcq"){const opts=r.slice(1,5);const ai=letterOf(r[5],opts);if(ai<0)throw new Error(`the answer "${r[5]||""}" should be A, B, C or D`);return {type:"mcq",q:r[0],o0:opts[0],o1:opts[1],o2:opts[2],o3:opts[3],answer:String(ai),explanation:r[6],skill:SK.find(k=>k.toLowerCase()===String(r[7]||"").toLowerCase()),say:r[8]}}
 if(t==="tf"){const v=tfOf(r[1])??tfOf(r[5]);if(v==null)throw new Error("the answer should be True or False");return {type:"tf",q:r[0],answer:v,explanation:r[1]&&tfOf(r[1])!=null?r[2]:r[6],say:r[8]}}
 if(t==="ar"){const ai=letterOf(r[2],[]);const ai2=ai>=0?ai:letterOf(r[5],[]);if(ai2<0)throw new Error("the answer should be A, B, C or D");return {type:"ar",assertion:r[0],reason:r[1],answer:String(ai2),explanation:ai>=0?r[3]:r[6]}}
 return {type:"match",q:r[0],pairs:(r[1]||"").split(/;|\n/).map(x=>x.replace(/\s*(->|→|-|:)\s*/,"=")).join("\n"),explanation:r[2]||r[6]}}
function parseBlocks(txt){ /* numbered questions with options on their own lines */
 const out=[],errs=[];let cur=null;const push=()=>{if(cur){out.push(cur)};cur=null};
 const lines=txt.split("\n").map(l=>l.trim()).filter(Boolean);const isOpt=l=>/^\(?[A-Da-d][).:\]]\s*\S/.test(l||"");
 for(let li=0;li<lines.length;li++){const l=lines[li];
  let m;
  if(cur&&(cur.ansSeen||cur.opts.length)&&!isOpt(l)&&isOpt(lines[li+1])&&!/^(?:correct\s+)?(?:answer|ans|key|explanation|reason|why)\s*[:.\-]/i.test(l)){push();cur={q:l.replace(/^(?:q(?:uestion)?\s*)?\d+\s*[).:\-]\s*/i,""),opts:[]};continue}
  if((m=l.match(/^\(?([A-Da-d])[).:\]]\s*(.+)$/))&&cur&&!cur.ansSeen){cur.opts["ABCD".indexOf(m[1].toUpperCase())]=m[2].trim();continue}
  if((m=l.match(/^(?:correct\s+)?(?:answer|ans|key)\s*[:.\-]\s*(.+)$/i))&&cur){cur.ans=m[1].trim();cur.ansSeen=true;continue}
  if((m=l.match(/^(?:explanation|reason|why)\s*[:.\-]\s*(.+)$/i))&&cur){cur.ex=m[1].trim();continue}
  if((m=l.match(/^(?:q(?:uestion)?\s*)?\d+\s*[).:\-]\s*(.+)$/i))){push();cur={q:m[1].trim(),opts:[]};continue}
  if(cur&&!cur.opts.length&&!cur.ansSeen){cur.q+=" "+l;continue}
  if(!cur){cur={q:l,opts:[]};continue}
  if(cur.ansSeen&&!cur.ex){cur.ex=l}}
 push();
 return out.filter(b=>b.opts.some(Boolean)||b.ans||/\?\s*$/.test(b.q)).map((b,i)=>{try{const o=b.opts.filter(Boolean);let f;
  if(o.length===2&&o.every(x=>/^(true|false)$/i.test(x))||(!o.length&&tfOf(b.ans)!=null)){const v=o.length?letterOf(b.ans,o):+tfOf(b.ans);f={type:"tf",q:b.q.replace(/\s*\(?true\s*(\/|or)\s*false\)?\s*[:?]?$/i,""),answer:String(o.length&&/^false$/i.test(o[v])?1:o.length?0:v),explanation:b.ex}}
  else{if(o.length<2)throw new Error("needs options A), B), C), D) on separate lines");const ai=letterOf(b.ans,o);if(ai<0)throw new Error(`add a line like "Answer: B" (found "${b.ans||"no answer"}")`);
   f={type:"mcq",q:b.q,o0:o[0],o1:o[1],o2:o[2],o3:o[3],answer:String(ai),explanation:b.ex}}
  return {ok:buildQ(f)}}catch(e){return {err:`Question ${i+1}: ${e.message}`}}})}
function parseImport(txt,kind){txt=String(txt||"").replace(/\r\n?/g,"\n").replace(/ /g," ");const out=[],errs=[];
 if(kind==="questionnaire"){
  const sep=txt.includes("\t")?"\t":txt.includes("|")?"|":/,(\s*)(r|rev|reverse|yes|no|)\s*$/im.test(txt)?",":null;
  const rows=sep?csvRows(txt,sep):txt.split("\n").map(l=>[l.trim()]).filter(r=>r[0]);
  rows.forEach((c,i)=>{const st=c[0].replace(/^\d+\s*[).:\-]\s*/,"");if(i===0&&/^(statement|question|item)s?$/i.test(st))return;if(!st)return;try{out.push(buildQ({type:"likert",q:st,reverse:/^(r|rev|reverse|yes|y|true)$/i.test(c[1]||"")}))}catch(e){errs.push(`Line ${i+1}: ${e.message}`)}});
  return {out,errs}}
 const lines=txt.split("\n").filter(l=>l.trim());
 const pipe=lines.filter(l=>l.includes("|")).length>=lines.length/2,tab=!pipe&&lines.filter(l=>l.includes("\t")).length>=lines.length/2;
 const comma=!pipe&&!tab&&lines.filter(l=>(l.match(/,/g)||[]).length>=4).length>=lines.length/2;
 if(pipe||tab||comma){const rows=csvRows(txt,pipe?"|":tab?"\t":",");
  rows.forEach((c,i)=>{if(i===0&&/^(type|question type|q\.?\s*type|question)$/i.test(c[0]))return;
   try{out.push(buildQ(rowToForm(c)))}catch(e){errs.push(`Line ${i+1}: ${e.message}`)}});return {out,errs}}
 parseBlocks(txt).forEach(r=>r.ok?out.push(r.ok):errs.push(r.err));return {out,errs}}
function templateCSV(kind){
 const L=kind==="questionnaire"?[["statement","reverse"],["I feel nervous when I speak English in class.",""],["I feel confident when I answer in English.","R"]]
 :[["type","question","option_a","option_b","option_c","option_d","answer","explanation","skill","audio_script"],
  ["MCQ","What is a tide?","Rise and fall of the sea","A fish","A boat","A net","A","Tides are the regular rise and fall of sea level.","Vocabulary",""],
  ["TF","A catamaran is a kind of boat.","","","","","True","Catamarans are boats with two hulls.","",""],
  ["AR","Fishermen read the sky. (assertion)","The sky shows the weather. (reason)","","","","A","The reason explains the assertion.","",""],
  ["MATCH","Match the word with its meaning.","bow=front of a boat; stern=back of a boat; net=used to catch fish","","","","","Bow is the front, stern is the back.","",""],
  ["MCQ","When do the boats return?","At five","Before noon","In the evening","At midnight","B","The speaker says before noon.","Listening","The boats leave at five in the morning and return before noon."]];
 return "﻿"+L.map(csvLine).join("\r\n")}
const qLabel=q=>q.q||q.assertion||"Match the following";
const typeName={mcq:"Multiple choice",tf:"True / False",ar:"Assertion & reason",match:"Match the following",likert:"Statement (1–5)"};

const libSeg=cur=>`<div class="seg" style="margin-bottom:16px">${[["research","Research activities"],["general","Normal quizzes"],["guestdata","Guest Live Quiz data"]].map(x=>`<button data-act="libcat" data-c="${x[0]}" class="${cur===x[0]?"on":""}">${x[1]}</button>`).join("")}</div>`;
/* Shared library row: the same Edit / Preview / Publish / Host live / Results / Duplicate /
   Delete controls everywhere an activity is listed. `extra` appends more buttons (used by
   the Guest Live Quiz data tab to add "View guest data report" alongside them). */
function libRow(a,cnt={},extra=""){const n=a.kind==="flashcards"?a.cards.length:a.questions.length,tg=null;
 return `<div class="card lib-row"><div class="lib-main"><div class="row"><b>${esc(a.title)}</b><span class="chip ${a.status==="published"?"c-Completed":"c-Inprogress"}">${a.status==="published"?"Published":"Draft"}</span></div>
 <div class="muted small">${KIND[a.kind]}${a.skill?" · "+a.skill:""}${a.segment?" · "+a.segment:""} · ${n} ${a.kind==="flashcards"?"cards":a.kind==="questionnaire"?"statements":"questions"}${tg&&a.kind!=="flashcards"?` (target ${tg})`:""} · ${(cnt[a.id]?.size)||0} students completed</div></div>
 <div class="lib-acts"><button class="soft" data-act="libedit" data-id="${a.id}">Edit</button><button class="soft" data-act="libprev" data-id="${a.id}">Preview</button><button class="soft" data-act="libpub" data-id="${a.id}" data-s="${a.status==="published"?"draft":"published"}">${a.status==="published"?"Unpublish":"Publish"}</button>
 ${["quiz","reading"].includes(a.kind)?`<button class="soft" data-act="libhost" data-id="${a.id}">Host live</button>`:""}<button class="soft" data-act="libres" data-id="${a.id}">Results</button><button class="soft" data-act="libdup" data-id="${a.id}">Duplicate</button><button class="outline danger" data-act="libdel" data-id="${a.id}">Delete</button>${extra}</div></div>`}
/* "Guest Live Quiz data" folder: every live quiz / poll / wordcloud / open-response session
   this teacher turned on guest-detail collection for, across every activity. Live-quiz rows
   carry the same Edit/Preview/Host live/etc. controls as the rest of My library, plus a
   "View guest data report" button; session rows (polls/wordclouds/open-response) only get
   the report button, since they aren't editable library activities. */
async function guestDataListPage(){
 const rows=await rpc("my_guest_quizzes");
 const actIds=new Set(rows.filter(s=>s.kind==="live_quiz"&&s.activity_id).map(s=>s.activity_id));
 const acts={};
 if(actIds.size){(await ok(db.from("activities").select("*"))).forEach(a=>{if(actIds.has(a.id))acts[a.id]=a})}
 return `<div class="head"><div class="eyebrow">MY LIBRARY</div><h1>Guest Live Quiz data</h1><p>Demographic details and consent collected from participants, for every live quiz or session where you turned that on.</p></div>
 ${libSeg("guestdata")}
 <div class="stack">${rows.map(s=>{
  const reportBtn=`<button class="soft" data-act="lgdatareport" data-id="${s.id}" data-k="${s.kind}">View guest data report</button>`;
  const act=s.kind==="live_quiz"?acts[s.activity_id]:null;
  if(act)return libRow(act,{},reportBtn);
  return `<div class="card lib-row"><div class="lib-main"><div class="row"><b>${esc(s.title||"Untitled")}</b><span class="chip ${s.is_open?"c-Inprogress":"c-Completed"}">${s.is_open?"Open":"Ended / closed"}</span></div>
  <div class="muted small">${s.kind==="live_quiz"?"Live quiz":"Session"} · Code ${esc(s.code)} · ${s.n_participants} participant(s) · ${fmtDT(s.created_at)}</div></div>
  <div class="lib-acts">${reportBtn}</div></div>`}).join("")||'<div class="empty">No guest details collected yet. Turn on "Collect each participant\'s details" when you host a live quiz, poll, wordcloud or open-response session.</div>'}</div>`}
async function guestReportPage(id,kind){
 if(kind==="live_quiz"){
  const rows=await rpc("live_guest_csv",{p_game:id});
  return `<div class="head"><div class="eyebrow">GUEST LIVE QUIZ DATA</div><h1>Live quiz report</h1></div>
  ${libSeg("guestdata")}<div class="actions" style="margin-bottom:12px"><button class="outline" data-act="libcat" data-c="guestdata">← Back to Guest Live Quiz data</button></div>
  ${guestReportHTML(rows)}`}
 const [s,rows]=await Promise.all([ok(db.from("sessions").select("title,code").eq("id",id).single()),ok(db.from("responses").select("participant_name,is_anonymous,answer,created_at,g_subject,g_study_level,g_year,g_locality,g_gender,g_native,g_consent,confidence").eq("session_id",id))]);
 const withConf=rows.filter(r=>r.confidence!=null);
 const bandCounts={"Low confidence":0,"Neutral":0,"High confidence":0};
 withConf.forEach(r=>bandCounts[confBand(r.confidence)]++);
 const avgConf=withConf.length?mean(withConf.map(r=>r.confidence)):null;
 return `<div class="head"><div class="eyebrow">GUEST LIVE QUIZ DATA</div><h1>${esc(s.title||"Session")} report</h1></div>
 ${libSeg("guestdata")}<div class="actions" style="margin-bottom:12px"><button class="outline" data-act="libcat" data-c="guestdata">← Back to Guest Live Quiz data</button></div>
 <div class="card stack" style="text-align:left"><h3>Overall report</h3><div class="form-grid">
  <div class="statbox"><b>${avgConf==null?"-":fx(avgConf,1)}</b><span>Overall confidence (1-10)</span></div>
  <div class="statbox"><b>${bandCounts["Low confidence"]}</b><span>Low confidence (1-3)</span></div>
  <div class="statbox"><b>${bandCounts["Neutral"]}</b><span>Neutral (4-7)</span></div>
  <div class="statbox"><b>${bandCounts["High confidence"]}</b><span>High confidence (8-10)</span></div></div>
  <h3>Participants (${rows.length})</h3><div style="overflow:auto"><table><thead><tr><th>Participant</th><th>Anonymous</th><th>Answer</th><th>Subject</th><th>Study level</th><th>Year</th><th>Rural/Urban</th><th>Gender</th><th>Native</th><th>Consent</th><th>Confidence (1-10)</th><th>Band</th><th>Submitted</th></tr></thead><tbody>
  ${rows.map(r=>`<tr><td>${esc(r.participant_name||"Anonymous")}</td><td>${r.is_anonymous?"Yes":"No"}</td><td>${esc(r.answer||"")}</td><td>${esc(r.g_subject||"-")}</td><td>${esc(r.g_study_level||"-")}</td><td>${r.g_year??"-"}</td><td>${esc(r.g_locality||"-")}</td><td>${esc(r.g_gender||"-")}</td><td>${esc(r.g_native||"-")}</td><td>${r.g_consent?"Yes":"No"}</td><td>${r.confidence??"-"}</td><td>${confBand(r.confidence)||"-"}</td><td>${fmtDT(r.created_at)}</td></tr>`).join("")||'<tr><td colspan="13" class="muted">No submissions yet.</td></tr>'}
  </tbody></table></div></div>`}
async function libraryTab(){
 const r=R();
 if((r.view==="edit"||r.view==="preview")&&!ED){if(r.id)await loadED(r.id);else r.view=null}
 if(r.view==="edit")return editorPage();
 if(r.view==="preview")return previewPage();
 if(r.view==="results")return resultsPage(r.id);
 if(r.view==="perf")return perfPage();
 if(r.view==="host")return hostPage();
 if(r.view==="guestreport")return guestReportPage(r.gid,r.gkind);
 ED=null;RUN.st=null;
 const cat=r.lcat==="guestdata"?"guestdata":r.lcat==="general"?"general":"research";
 if(cat==="guestdata")return guestDataListPage();
 const [acts,atts]=await Promise.all([ok(db.from("activities").select("*").order("sort").order("created_at")),fetchAll("activity_attempts","activity_id,student_id,status")]);
 const cnt={};atts.filter(a=>a.status==="done").forEach(a=>(cnt[a.activity_id]=cnt[a.activity_id]||new Set()).add(a.student_id));
 const pool=acts.filter(a=>cat==="general"?a.purpose==="general":a.purpose!=="general");
 const f=r.f||"all",shown=pool.filter(a=>f==="all"||a.status===f);
 const row=a=>libRow(a,cnt);
 const groups=cat==="general"?[["general",shown]].filter(g=>g[1].length):Object.keys(PURPOSE).filter(p=>p!=="general").map(p=>[p,shown.filter(a=>a.purpose===p)]).filter(g=>g[1].length);
 return `<div class="head"><div class="eyebrow">MY LIBRARY</div><h1>Activities and content</h1><p>${cat==="general"?"Ordinary quizzes for everyday practice — kept separate from the main research sequence.":"Create, preview, publish and remove everything students see in the research steps."}</p></div>
 <div class="seg" style="margin-bottom:16px">${[["research","Research activities"],["general","Normal quizzes"],["guestdata","Guest Live Quiz data"]].map(x=>`<button data-act="libcat" data-c="${x[0]}" class="${cat===x[0]?"on":""}">${x[1]}</button>`).join("")}</div>
 <div class="createbar">${[["quiz","✎","Quiz","Multiple choice, true/false, assertion-reason, matching"],["reading","☰","Reading passage","A passage with questions beside it"],["flashcards","❏","Flashcards","Term on the front, meaning on the back"],["questionnaire","◔","Questionnaire","Statements on a five-point scale"]].map(c=>`<button class="createtile" data-act="libnew" data-k="${c[0]}" data-cat="${cat}"><i>${c[1]}</i><b>${c[2]}</b><span>${c[3]}</span></button>`).join("")}</div>
 <div class="row" style="margin:18px 0 10px"><div class="seg">${[["all","All"],["draft","Drafts"],["published","Published"]].map(x=>`<button data-act="libf" data-f="${x[0]}" class="${f===x[0]?"on":""}">${x[1]} (${pool.filter(a=>x[0]==="all"||a.status===x[0]).length})</button>`).join("")}</div>${cat==="research"?'<button class="soft" data-act="rview" data-v="perf">Students by performance</button>':""}</div>
 ${groups.map(([p,list])=>cat==="general"?`<div class="stack">${list.map(row).join("")}</div>`:`<h3 class="libh">${PURPOSE[p]}</h3><div class="stack">${list.map(row).join("")}</div>`).join("")||`<div class="empty">${cat==="general"?"No normal quizzes yet. Choose a type above to create one — it won't be part of the research sequence.":"Nothing here yet. Choose a type above to create your first activity."}</div>`}`}

function editorPage(){
 const d=ED.data,isQ=d.kind==="questionnaire",isF=d.kind==="flashcards",n=d.questions.length,tg=null,f=ED.qf,lock=ED.locked;
 const sel=(name,opts,val)=>`<select data-ed="${name}" data-chg="edre">${opts.map(o=>`<option value="${o[0]}" ${String(val)===String(o[0])?"selected":""}>${o[1]}</option>`).join("")}</select>`;
 const skillSel=(nm,val)=>`<select name="${nm}"><option value="">Same as activity</option>${SK.map(k=>`<option ${val===k?"selected":""}>${k}</option>`).join("")}</select>`;
 const ansSel=(labels,val)=>`<select name="answer"><option value="">Choose…</option>${labels.map((l,i)=>`<option value="${i}" ${String(val)===String(i)?"selected":""}>${l}</option>`).join("")}</select>`;
 let qfields="";
 if(f.type==="likert")qfields=`<label>Statement<textarea name="q" rows="2">${esc(f.q||"")}</textarea></label><label class="check"><input type="checkbox" name="reverse" ${f.reverse?"checked":""}> <span>Positively worded (reverse-scored), e.g. "I feel confident when I speak English."</span></label>`;
 else if(f.type==="tf")qfields=`<label>Statement<textarea name="q" rows="2">${esc(f.q||"")}</textarea></label><label>Correct answer${ansSel(["True","False"],f.answer)}</label>`;
 else if(f.type==="ar")qfields=`<label>Assertion (A)<textarea name="assertion" rows="2">${esc(f.assertion||"")}</textarea></label><label>Reason (R)<textarea name="reason" rows="2">${esc(f.reason||"")}</textarea></label><label>Correct option${ansSel(AR_OPTS.map((o,i)=>"ABCD"[i]+". "+o),f.answer)}</label>`;
 else if(f.type==="match")qfields=`<label>Instruction<input name="q" value="${esc(f.q||"Match the following.")}"></label><label>Pairs, one per line, written as <code>left = right</code><textarea name="pairs" rows="5" placeholder="tide = rise and fall of the sea&#10;net = used to catch fish">${esc(f.pairs||"")}</textarea></label><p class="muted small">The right-hand side is shuffled for students.</p>`;
 else qfields=`<label>Question<textarea name="q" rows="2">${esc(f.q||"")}</textarea></label><div class="form-grid">${[0,1,2,3].map(i=>`<label>Option ${"ABCD"[i]}<input name="o${i}" value="${esc(f["o"+i]||"")}"></label>`).join("")}</div><label>Correct option${ansSel(["A","B","C","D"],f.answer)}</label>`;
 const qform=isF?"":`<form data-form="edq" class="card stack"><div class="row"><h3>${ED.qi!=null?`Edit question ${ED.qi+1}`:isQ?"Add a statement":"Add a question"}</h3>${lock?'<span class="chip c-Locked">Locked</span>':""}</div>
  ${lock?'<div class="notice">Students have already taken this activity, so its questions cannot be changed. Use <b>Duplicate</b> in My library to make a new version.</div>':`
  ${isQ?'<input type="hidden" name="type" value="likert">':`<label>Question type<select name="type" data-chg="qtype">${["mcq","tf","ar","match"].map(t=>`<option value="${t}" ${f.type===t?"selected":""}>${typeName[t]}</option>`).join("")}</select></label>`}
  ${qfields}${isQ?"":`<label>Explanation (shown to students after a wrong answer in interventions and practice)<textarea name="explanation" rows="2">${esc(f.explanation||"")}</textarea></label><label>Audio script (optional): the website reads this aloud when the student presses Play audio. Use it for listening questions.<textarea name="say" rows="2">${esc(f.say||"")}</textarea></label>${d.purpose==="posttest"?`<label>Skill this question tests${skillSel("skill",f.skill)}</label>`:""}`}
  <div class="actions"><button class="primary">${ED.qi!=null?"Update question":"Add to list"}</button>${ED.qi!=null?'<button type="button" class="outline" data-act="edqcancel">Cancel</button>':""}</div>`}</form>
  ${lock?"":`<details class="card" ${ED.importOpen?"open":""} data-imp="1"><summary>Import many ${isQ?"statements":"questions"} at once</summary><form data-form="edimport" class="stack" style="margin-top:12px"><p class="muted small">${isQ?"Paste one statement per line, or a spreadsheet with the columns <b>statement</b> and <b>reverse</b> (R for positively worded statements).":`You can paste any of these:<br>• rows copied from Excel or Google Sheets, or a CSV file, using the template columns;<br>• numbered questions with options on separate lines, for example<br><code>1. What is a tide?</code><br><code>A) Rise and fall of the sea</code> <code>B) A fish</code> <code>C) A boat</code> <code>D) A net</code><br><code>Answer: A</code> <code>Explanation: …</code>;<br>• one question per line with <code>|</code> between parts: <code>MCQ | question | A | B | C | D | answer | explanation</code>, <code>TF | statement | True | explanation</code>, <code>AR | assertion | reason | answer | explanation</code>, <code>MATCH | instruction | left=right; left=right | explanation</code>.`}</p>
  <div class="actions" style="margin:0"><button type="button" class="soft" data-act="edtemplate">Download the template (opens in Excel or Google Sheets)</button></div>
  <textarea name="txt" id="edImportTxt" rows="8">${esc(ED.importText||"")}</textarea>${ED.importErrs?.length?`<div class="notice"><b>${ED.importErrs.length} line(s) could not be read:</b><ul class="small">${ED.importErrs.slice(0,12).map(e=>`<li>${esc(e)}</li>`).join("")}</ul></div>`:""}<label>Or choose a CSV or text file<input type="file" accept=".txt,.csv,.tsv,text/plain,text/csv" data-chg="edfile"></label><button class="soft">Import</button></form></details>`}`;
 const side=isF?"":`<div class="card qlist"><div class="row"><h3>${isQ?"Statements":"Questions"} (${n}${tg?` / ${tg}`:""})</h3></div>${tg?`<div class="bar"><i style="width:${Math.min(100,Math.round(100*n/tg))}%"></i></div>`:""}
  ${d.questions.map((q,i)=>`<div class="qitem ${ED.qi===i?"cur":""}"><div><span class="muted small">Q${i+1} · ${typeName[q.type]}${q.reverse?" · reversed":""}${q.skill?" · "+q.skill:""}</span><div>${esc(qLabel(q))}</div></div>${lock?"":`<div class="qbtns"><button type="button" title="Move up" data-act="edqmove" data-i="${i}" data-d="-1" ${i===0?"disabled":""}>↑</button><button type="button" title="Move down" data-act="edqmove" data-i="${i}" data-d="1" ${i===n-1?"disabled":""}>↓</button><button type="button" title="Edit" data-act="edqedit" data-i="${i}">✎</button><button type="button" title="Remove" class="danger" data-act="edqdel" data-i="${i}">✕</button></div>`}</div>`).join("")||`<p class="muted small">No ${isQ?"statements":"questions"} yet.</p>`}</div>`;
 const tool=(cmd,label,title,val)=>`<button type="button" data-act="edfmt" data-cmd="${cmd}" ${val?`data-val="${val}"`:""} title="${title}">${label}</button>`;
 return `<div class="edtop"><div><div class="eyebrow">${ED.id?"EDIT":"NEW"} ${KIND[d.kind].toUpperCase()} · ${isF?d.cards.length+" cards":n+(isQ?" statements":" questions")}</div><h1>${esc(d.title||"Untitled "+KIND[d.kind].toLowerCase())}</h1></div>
  <div class="actions"><span class="chip ${d.status==="published"?"c-Completed":"c-Inprogress"}">${d.status==="published"?"Published":"Draft"}</span><button class="outline" data-act="edpreview">▶ Preview</button><button class="soft" data-act="edsave" data-s="draft">Save draft</button><button class="primary" data-act="edsave" data-s="published">Publish</button></div></div>
 <div class="edwrap ${isF?"one":""}"><div class="stack">
  <div class="card stack"><h3>Settings</h3><div class="form-grid"><label>Title<input data-ed="title" value="${esc(d.title)}" placeholder="e.g. Listening pre-test"></label>
   <label>Used for${sel("purpose",purposesFor(d.kind).map(p=>[p,PURPOSE[p]]),d.purpose)}</label>
   ${isQ||isF?"":`<label>Skill${sel("skill",[["","All skills / not set"],...SK.map(k=>[k,k])],d.skill)}</label><label>Segment (interventions)${sel("segment",[["","None"],...SEGMENTS.map(k=>[k,k])],d.segment)}</label>`}
   <label>Order in the list<input data-ed="sort" type="number" value="${d.sort}"></label></div>
   ${isF?"":`<label>${isQ?"Instructions shown to students":"Short introduction (optional)"}<textarea data-ed="intro" rows="2">${esc(d.intro)}</textarea></label>`}
   ${isQ||isF?"":`<label>Media link (optional): YouTube video, audio file, image, or any https link to the podcast or graphic novel<input data-ed="media_url" type="url" value="${esc(d.media_url)}" placeholder="https://…"></label>`}
   ${d.kind==="questionnaire"?'<p class="muted small">Students answer every statement on a five-point scale: 1 Strongly disagree, 2 Disagree, 3 Neutral, 4 Agree, 5 Strongly agree. The anxiety questionnaire is given before the pre-test, before each intervention and before the post-test.</p>':""}</div>
  ${d.kind==="reading"?`<div class="card stack"><h3>Passage</h3><div class="rtbar">${tool("formatBlock","Heading","Heading","H3")}${tool("formatBlock","Text","Normal text","P")}${tool("bold","<b>B</b>","Bold")}${tool("italic","<i>I</i>","Italic")}${tool("underline","<u>U</u>","Underline")}${tool("insertUnorderedList","• List","Bulleted list")}${tool("insertOrderedList","1. List","Numbered list")}${tool("removeFormat","Clear","Remove formatting")}</div><div id="edPassage" class="passage-edit" contenteditable="true" role="textbox" aria-multiline="true" aria-label="Passage text">${cleanHTML(d.passage)||"<p></p>"}</div><p class="muted small">Type or paste the passage. Select words to format them, or add and remove text freely.</p></div>`:""}
  ${isF?`<div class="card stack"><h3>Cards (${d.cards.length})</h3><p class="muted small">One card per line: the word or term, then <code>|</code>, then its meaning.</p><textarea id="edCards" rows="14" placeholder="estuary | the place where a river meets the sea&#10;trawler | a boat that pulls a large net">${esc(d.cards.map(c=>`${c.front} | ${c.back}`).join("\n"))}</textarea></div>`:""}
  ${qform}</div>${side}</div>`}
async function previewPage(){const d=ED?.data;if(!d)return '<div class="card">Nothing to preview.</div>';
 const bar=`<div class="notice previewbar"><b>Preview.</b> This is what students will see. Nothing is recorded. <button class="soft" data-act="edback">Back to editing</button></div>`;
 if(d.kind==="flashcards")return bar+await cardsPage(null,d);
 if(!d.questions.length)return bar+'<div class="card">Add at least one question to preview.</div>';
 if(d.kind==="questionnaire"){RUN.st={preview:true,phase:"q",act:{...d}};return bar+RUN.likert()}
 if(!RUN.st||!RUN.st.preview||RUN.st.act.kind==="questionnaire")RUN.st={phase:"q",preview:true,act:{...d},keys:ED.keys,learn:true,i:0,ans:{},fb:{}};
 return bar+RUN.quiz()}
async function resultsPage(id){
 const [a,atts,st]=await Promise.all([ok(db.from("activities").select("*").eq("id",id).single()),fetchAll("activity_attempts","*",q=>q.eq("activity_id",id)),roster()]);
 const nm={};st.forEach(s=>nm[s.id]=s);const done=atts.filter(t=>t.status==="done").sort((x,y)=>x.finished_at>y.finished_at?1:-1);const isQ=a.kind==="questionnaire";
 return `<div class="head"><div class="eyebrow">RESULTS</div><h1>${esc(a.title)}</h1><p>${done.length} submissions from ${new Set(done.map(t=>t.student_id)).size} students${!isQ&&done.length?` · average ${fx(mean(done.map(t=>+t.pct)))}%`:""}</p></div>
 <div class="card" style="overflow:auto"><table><thead><tr><th>Student</th>${isQ?"<th>Time point</th><th>Total</th><th>Mean (1–5)</th>":"<th>Attempt</th><th>Score</th><th>%</th><th>Confidence before</th><th>Confidence after</th>"}<th>Submitted</th></tr></thead><tbody>
 ${done.map(t=>`<tr><td>${esc(nm[t.student_id]?.full_name||"Student")}</td>${isQ?`<td>${esc(ctxLabel(t.context))}</td><td>${t.score}/${t.total}</td><td>${fx(+t.detail?.mean,2)}</td>`:`<td>${t.attempt_no}</td><td>${t.score}/${t.total}</td><td>${fx(+t.pct)}</td><td>${t.conf_before??"-"}</td><td>${t.conf_after??"-"}</td>`}<td>${fmtDT(t.finished_at)}</td></tr>`).join("")||'<tr><td colspan="7" class="muted">No submissions yet.</td></tr>'}</tbody></table></div>`}
const ctxLabel=c=>c==="pre"?"Before pre-test":c==="post"?"Before post-test":c?.startsWith("int:")?"Before an intervention":"-";
async function perfPage(){
 const [acts,atts,st]=await Promise.all([ok(db.from("activities").select("id,purpose,kind")),fetchAll("activity_attempts","student_id,activity_id,pct,status,attempt_no"),roster()]);
 const P={};acts.forEach(a=>P[a.id]=a);
 const rows=st.map(s=>{const m=p=>{const v=atts.filter(t=>t.student_id===s.id&&t.status==="done"&&t.attempt_no===1&&P[t.activity_id]?.purpose===p&&P[t.activity_id].kind!=="questionnaire").map(t=>+t.pct);return v.length?mean(v):null};
  const pre=m("pretest"),iv=m("intervention"),po=m("posttest"),all=[pre,iv,po].filter(x=>x!=null);return {s,pre,iv,po,o:all.length?mean(all):null}}).sort((a,b)=>(a.o??-1)-(b.o??-1));
 return `<div class="head"><div class="eyebrow">MY LIBRARY</div><h1>Students by performance</h1><p>Averages of first attempts. Students who need the most support are listed first.</p></div>
 <div class="card" style="overflow:auto"><table><thead><tr><th>Student</th><th>Pre-test</th><th>Interventions</th><th>Post-test</th><th>Overall</th><th>Band</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.s.full_name)}</td><td>${pct1(r.pre)}</td><td>${pct1(r.iv)}</td><td>${pct1(r.po)}</td><td><b>${pct1(r.o)}</b></td><td>${r.o==null?'<span class="muted">No tests yet</span>':`<span class="chip c-${band(r.o).replace(/\s/g,"")}">${band(r.o)}</span>`}</td></tr>`).join("")||'<tr><td colspan="6" class="muted">No students yet.</td></tr>'}</tbody></table></div>`}

Object.assign(ACT,{
 libnew(el){newED(el.dataset.k,el.dataset.cat);setR({view:"edit",id:null})},
 libcat(el){setR({lcat:el.dataset.c,f:"all"})},
 lgdatareport(el){setR({lcat:"guestdata",view:"guestreport",gid:el.dataset.id,gkind:el.dataset.k})},
 async libedit(el){await loadED(el.dataset.id);setR({view:"edit",id:el.dataset.id})},
 async libprev(el){await loadED(el.dataset.id);RUN.st=null;setR({view:"preview",id:el.dataset.id})},
 libf(el){setR({f:el.dataset.f})},libres(el){setR({view:"results",id:el.dataset.id})},
 async libpub(el){await rpc("set_activity_status",{p_id:el.dataset.id,p_status:el.dataset.s});toast(el.dataset.s==="published"?"Published. Students can now see it in its step.":"Moved back to drafts.");render()},
 async libdup(el){await loadED(el.dataset.id);const d={...ED.data,title:ED.data.title+" (copy)",status:"draft"};await rpc("save_activity",{p_id:null,p_data:d,p_keys:ED.keys});ED=null;toast("Copy saved as a draft.");render()},
 async libdel(el){if(!confirm("Delete this activity and every student result recorded for it? This cannot be undone."))return;await ok(db.from("activities").delete().eq("id",el.dataset.id));toast("Deleted.");render()},
 edtemplate(){download(ED.data.kind==='questionnaire'?'questionnaire_template.csv':'quiz_template.csv',templateCSV(ED.data.kind))},
 edfmt(el,e){e.preventDefault();$("edPassage")?.focus();document.execCommand(el.dataset.cmd,false,el.dataset.val||null)},
 edqedit(el){edSync();ED.qi=+el.dataset.i;ED.qf=qToForm(ED.data.questions[ED.qi],ED.keys[ED.qi]||{});render();document.querySelector("form[data-form=edq]")?.scrollIntoView({behavior:"smooth",block:"center"})},
 edqcancel(){edSync();ED.qi=null;ED.qf=blankQ(ED.data.kind);render()},
 edqdel(el){edSync();const i=+el.dataset.i;ED.data.questions.splice(i,1);ED.keys.splice(i,1);ED.qi=null;ED.dirty=true;render()},
 edqmove(el){edSync();const i=+el.dataset.i,j=i+ +el.dataset.d;[ED.data.questions[i],ED.data.questions[j]]=[ED.data.questions[j],ED.data.questions[i]];[ED.keys[i],ED.keys[j]]=[ED.keys[j],ED.keys[i]];ED.qi=null;ED.dirty=true;render()},
 edpreview(){edSync();RUN.st=null;setR({view:"preview",id:ED.id})},
 edback(){RUN.st=null;setR({view:"edit",id:ED.id})},
 async edsave(el){edSync();const d={...ED.data,status:el.dataset.s};
  if(!d.title.trim())return toast("Give it a title first.");
  if(el.dataset.s==="published"){if(d.kind==="flashcards"?!d.cards.length:!d.questions.length)return toast("Add content before publishing.");
}
  const id=await rpc("save_activity",{p_id:ED.id,p_data:d,p_keys:ED.keys});ED.id=id;ED.data.status=d.status;ED.dirty=false;S.r.id=id;navKey=JSON.stringify(navSnap());history.replaceState({llc:navSnap(),d:navDepth},"");toast(d.status==="published"?"Published.":"Draft saved.");render()}});
Object.assign(FORM,{
 edq(f,fd){edSync();let b;try{b=buildQ(ED.qf)}catch(e){return toast(e.message)}
  if(ED.qi!=null){ED.data.questions[ED.qi]=b.q;ED.keys[ED.qi]=b.k}else{ED.data.questions.push(b.q);ED.keys.push(b.k)}
  ED.qi=null;ED.qf={type:ED.qf.type};ED.dirty=true;render();toast("Added to the list. Press Save draft or Publish at the top to save it.")},
 edimport(f,fd){edSync();const txt=fd.get("txt");const {out,errs}=parseImport(txt,ED.data.kind);out.forEach(b=>{ED.data.questions.push(b.q);ED.keys.push(b.k)});if(out.length)ED.dirty=true;
  ED.importErrs=errs;ED.importText=errs.length?txt:"";ED.importOpen=!!errs.length;render();
  toast(out.length?`${out.length} question${out.length>1?"s":""} added${errs.length?`, ${errs.length} could not be read (listed under the import box)`:""}. Press Publish at the top when ready.`:`Nothing was imported. ${errs[0]||"The box is empty."}`)}});
CHG.edre=()=>{edSync();ED.dirty=true;render()};
CHG.qtype=el=>{edSync();ED.qf={type:el.value,explanation:ED.qf.explanation,skill:ED.qf.skill};render()};
CHG.edfile=async el=>{const file=el.files[0];if(!file)return;if(file.size>2e6)return toast("That file is too large.");$("edImportTxt").value=await file.text();toast("File loaded. Press Import.")};

/* ---------- research control ---------- */
async function controlTab(){
 const [stages,acts,atts,prog,st]=await Promise.all([ok(db.from("research_stages").select("*")),ok(db.from("activities").select("id,purpose,kind,status,title")),fetchAll("activity_attempts","student_id,activity_id,context,status"),fetchAll("research_progress"),roster()]);
 const open={};stages.forEach(s=>open[s.stage]=s.is_open);const pub=p=>acts.filter(a=>a.status==="published"&&a.purpose===p);const PR={};prog.forEach(p=>PR[p.student_id]=p);
 const doneSet=new Set(atts.filter(t=>t.status==="done").map(t=>t.student_id+"|"+t.activity_id+"|"+t.context));
 const cnt=(sid,p)=>pub(p).filter(a=>doneSet.has(sid+"|"+a.id+"|")).length;const anx=pub("anxiety")[0];
 const cell=(sid,p)=>{const t=pub(p).length;if(!t)return '<span class="muted">-</span>';const c=cnt(sid,p);return c===t?`<span class="chip c-Completed">${c}/${t}</span>`:c?`<span class="chip c-Inprogress">${c}/${t}</span>`:`<span class="muted">0/${t}</span>`};
 const order=[["pre_questionnaire","Questionnaire","Anxiety and other questionnaires before the pre-test"],["pretest","Pre-test","One test per skill"],["intervention","Interventions","Flipped sessions; each starts with the anxiety questionnaire"],["posttest","Post-test","Single combined test; starts with the anxiety questionnaire"],["post_questionnaire","Final questionnaire","Opens for a student only after their post-test"]];
 return `<div class="head"><div class="eyebrow">RESEARCH CONTROL</div><h1>Open and close each stage</h1><p>The researcher and professors decide when each stage is available. Students must also finish the earlier steps in order.</p></div>
 <div class="card stack">${order.map(([k,n,d])=>`<div class="stage-row"><div><b>${n}</b><div class="muted small">${d} · ${pub(k==="pre_questionnaire"?"pre_questionnaire":k).length+(k==="pre_questionnaire"&&anx?1:0)} published</div></div><label class="switch"><input type="checkbox" data-chg="stage" data-k="${k}" ${open[k]?"checked":""}><span></span><em>${open[k]?"Open":"Closed"}</em></label></div>`).join("")}
 ${anx?"":'<div class="notice">No anxiety questionnaire is published yet. Until one is published in My library, students are not asked about anxiety before the pre-test, interventions or post-test.</div>'}</div>
 <div class="card" style="overflow:auto;margin-top:16px"><h3>Student progress</h3><table><thead><tr><th>Student</th><th>Read process</th><th>Consent</th><th>Anxiety (pre)</th><th>Pre-tests</th><th>Interventions</th><th>Post-test</th><th>Final questionnaire</th></tr></thead><tbody>
 ${st.map(s=>`<tr><td>${esc(s.full_name)}</td><td>${PR[s.id]?.process_read_at?"✓":"-"}</td><td>${PR[s.id]?.consent_at?"✓":"-"}</td><td>${anx?(doneSet.has(s.id+"|"+anx.id+"|pre")?"✓":"-"):'<span class="muted">-</span>'}</td><td>${cell(s.id,"pretest")}</td><td>${cell(s.id,"intervention")}</td><td>${cell(s.id,"posttest")}</td><td>${cell(s.id,"post_questionnaire")}</td></tr>`).join("")||'<tr><td colspan="8" class="muted">No students yet.</td></tr>'}</tbody></table></div>`}
CHG.stage=async el=>{await ok(db.from("research_stages").update({is_open:el.checked,updated_by:user.id,updated_at:new Date().toISOString()}).eq("stage",el.dataset.k));toast(el.checked?"Stage opened for students.":"Stage closed.");render()};

/* ---------- attendance ---------- */
async function attendTab(){
 if(role()==="student"){const [ss,at]=await Promise.all([ok(db.from("class_sessions").select("*").order("started_at",{ascending:false})),ok(db.from("attendance").select("*").eq("student_id",user.id))]);
  const m={};at.forEach(a=>m[a.session_id]=a);const pres=ss.filter(s=>m[s.id]&&m[s.id].status!=="absent").length;
  return `<div class="head"><div class="eyebrow">ATTENDANCE</div><h1>My attendance</h1><p>Your attendance is recorded when you press Join class during a live class, or when your professor marks it.</p></div>
  <div class="statrow"><div class="card stat"><b>${ss.length?Math.round(100*pres/ss.length):0}%</b><span>Attendance</span></div><div class="card stat"><b>${pres}</b><span>Classes attended</span></div><div class="card stat"><b>${ss.length}</b><span>Classes held</span></div></div>
  <div class="card" style="overflow:auto"><table><thead><tr><th>Class</th><th>Date</th><th>Status</th></tr></thead><tbody>${ss.map(s=>{const a=m[s.id]?.status||"absent";return `<tr><td>${esc(s.title)}</td><td>${fmtDT(s.started_at)}</td><td><span class="chip ${a==="absent"?"c-Locked":a==="late"?"c-Inprogress":"c-Completed"}">${a[0].toUpperCase()+a.slice(1)}</span></td></tr>`}).join("")||'<tr><td colspan="3" class="muted">No classes yet.</td></tr>'}</tbody></table></div>`}
 const r=R();const [ss,at,st]=await Promise.all([ok(db.from("class_sessions").select("*").order("started_at",{ascending:false})),fetchAll("attendance"),roster()]);
 if(r.sess){const s=ss.find(x=>x.id===r.sess);if(!s)return '<div class="card">Class not found.</div>';const m={};at.filter(a=>a.session_id===s.id).forEach(a=>m[a.student_id]=a);
  return `<div class="head"><div class="eyebrow">ATTENDANCE</div><h1>${esc(s.title)}</h1><p>${fmtDT(s.started_at)} · ${s.mode==="live"?"Live class (students are marked when they join)":"Marked by professor"}</p></div>
  <div class="actions" style="margin:0 0 12px"><button class="soft" data-act="attall" data-id="${s.id}">Mark everyone present</button><button class="outline danger" data-act="attdel" data-id="${s.id}">Delete this class</button></div>
  <div class="card" style="overflow:auto"><table><thead><tr><th>Student</th><th>Student no.</th><th>Status</th><th>Joined</th></tr></thead><tbody>${st.map(x=>{const a=m[x.id];return `<tr><td>${esc(x.full_name)}</td><td>${esc(x.sp.student_no||"")}</td><td><select data-chg="attset" data-s="${s.id}" data-u="${x.id}">${["absent","present","late"].map(o=>`<option ${((a?.status)||"absent")===o?"selected":""}>${o}</option>`).join("")}</select></td><td class="muted small">${a?.joined_at&&a.status!=="absent"?fmtDT(a.joined_at):"-"}</td></tr>`}).join("")}</tbody></table></div>`}
 const pc=sid=>ss.length?Math.round(100*at.filter(a=>a.student_id===sid&&a.status!=="absent").length/ss.length):null;
 return `<div class="head"><div class="eyebrow">ATTENDANCE</div><h1>Class attendance</h1><p>A class is added automatically each time you press Go live. Students are marked present when they join. You can also add a class and mark it by hand.</p></div>
 <form data-form="attnew" class="card stack"><b>Add a class to mark by hand</b><div class="form-grid"><label>Class title<input name="title" required placeholder="e.g. Classroom session, Week 3"></label><label>Date and time<input name="when" type="datetime-local" required></label></div><button class="soft">Add class</button></form>
 <div class="card" style="overflow:auto;margin-top:16px"><div class="row"><h3>Classes (${ss.length})</h3><button class="soft" data-act="attcsv">Download CSV</button></div><table><thead><tr><th>Class</th><th>Date</th><th>Type</th><th>Present</th><th></th></tr></thead><tbody>${ss.map(s=>`<tr><td>${esc(s.title)}</td><td>${fmtDT(s.started_at)}</td><td>${s.mode==="live"?"Live":"Manual"}</td><td>${at.filter(a=>a.session_id===s.id&&a.status!=="absent").length} / ${st.length}</td><td><button class="soft" data-act="attopen" data-id="${s.id}">Open</button></td></tr>`).join("")||'<tr><td colspan="5" class="muted">No classes yet.</td></tr>'}</tbody></table></div>
 <div class="card" style="overflow:auto;margin-top:16px"><h3>Attendance by student</h3><table><thead><tr><th>Student</th><th>Student no.</th><th>Attended</th><th>%</th></tr></thead><tbody>${st.map(x=>`<tr><td>${esc(x.full_name)}</td><td>${esc(x.sp.student_no||"")}</td><td>${at.filter(a=>a.student_id===x.id&&a.status!=="absent").length} / ${ss.length}</td><td>${pc(x.id)==null?"-":pc(x.id)+"%"}</td></tr>`).join("")||'<tr><td colspan="4" class="muted">No students yet.</td></tr>'}</tbody></table></div>`}
Object.assign(FORM,{async attnew(f,d){const r=await ok(db.from("class_sessions").insert({title:String(d.get("title")).trim(),mode:"manual",started_at:new Date(d.get("when")).toISOString(),created_by:user.id}).select("id").single());toast("Class added. Mark the students.");setR({sess:r.id})}});
Object.assign(ACT,{attopen(el){setR({sess:el.dataset.id})},
 async attdel(el){if(!confirm("Delete this class and its attendance record?"))return;await ok(db.from("class_sessions").delete().eq("id",el.dataset.id));toast("Class deleted.");setR({})},
 async attall(el){const id=el.dataset.id,[st,ex]=await Promise.all([roster(),ok(db.from("attendance").select("student_id").eq("session_id",id))]);const have=new Set(ex.map(x=>x.student_id));
  if(ex.length)await ok(db.from("attendance").update({status:"present",marked_by:user.id}).eq("session_id",id));
  const add=st.filter(x=>!have.has(x.id)).map(x=>({session_id:id,student_id:x.id,status:"present",marked_by:user.id}));if(add.length)await ok(db.from("attendance").insert(add));toast("Everyone marked present.");render()},
 async attcsv(){const [ss,at,st]=await Promise.all([ok(db.from("class_sessions").select("*").order("started_at")),fetchAll("attendance"),roster()]);const m={};at.forEach(a=>m[a.session_id+"|"+a.student_id]=a.status);
  download("attendance.csv",[csvLine(["Name","Student no","Research ID",...ss.map(s=>`${s.title} (${new Date(s.started_at).toLocaleDateString()})`),"Attended","Percent"]),...st.map(x=>{const v=ss.map(s=>m[s.id+"|"+x.id]||"absent"),p=v.filter(y=>y!=="absent").length;return csvLine([x.full_name,x.sp.student_no,x.sp.research_id,...v,p,ss.length?Math.round(100*p/ss.length):""])})].join("\n"))}});
CHG.attset=async el=>{const s=el.dataset.s,u=el.dataset.u,v=el.value;const up=await ok(db.from("attendance").update({status:v,marked_by:user.id}).eq("session_id",s).eq("student_id",u).select("student_id"));if(!up.length)await ok(db.from("attendance").insert({session_id:s,student_id:u,status:v,marked_by:user.id}));toast("Saved.")};
/* live class: going live starts a class in the register; joining marks the student present */
ACT.golive=async el=>{const on=el.dataset.on==="1";await rpc("set_live",{p_on:on});toast(on?"Class is live. Students can join now and attendance is being recorded.":"Class ended.");render()};
ACT.joinlive=async()=>{const w=window.open("about:blank","_blank");try{const u=await rpc("join_live");if(w){w.opener=null;w.location.href=u}else location.href=u;toast("Attendance recorded. Enjoy the class.")}catch(e){w&&w.close()}};
document.addEventListener("input",e=>{if(ED&&e.target.closest("[data-ed],#edPassage,#edCards"))ED.dirty=true});
addEventListener("beforeunload",e=>{if(ED&&ED.dirty&&S.r?.view==="edit"){e.preventDefault();e.returnValue=""}});
document.addEventListener("toggle",e=>{if(ED&&e.target.matches&&e.target.matches("details[data-imp]"))ED.importOpen=e.target.open},true);

/* =====================================================================
   v6 MODULE: discussion forum, live quiz game
   ===================================================================== */
const FK={public:["Class discussion","Everyone in the class can read and reply."],staff:["Ask a professor","Private between one student and the researcher or professors."],dm:["Friends","Private chat between two classmates. Professors can read it for safety."]};
async function forumTab(){
 const r=R(),staff=isStaff();
 if(r.thread)return threadPage(r.thread);
 const k=r.k||"public";const [ths,mates]=await Promise.all([ok(db.from("forum_threads").select("*").order("last_at",{ascending:false})),staff?roster():rpc("classmates")]);
 const list=ths.filter(t=>t.kind===k);
 const other=t=>t.kind==="public"?`Started by ${esc(t.creator_name||"")}`:staff?`${esc(t.creator_name||"")}${t.peer_name?" ↔ "+esc(t.peer_name):""}`:t.kind==="dm"?`With ${esc(t.created_by===user.id?t.peer_name:t.creator_name)}`:"With your professors";
 const canNew=!(staff&&k==="dm");
 return `<div class="head"><div class="eyebrow">DISCUSSION</div><h1>Discussion forum</h1><p>Ask questions, talk with the class, or message privately.</p></div>
 <div class="seg">${Object.entries(FK).map(([x,v])=>`<button data-act="fk" data-k="${x}" class="${k===x?"on":""}">${staff&&x==="staff"?"Private with students":staff&&x==="dm"?"Student chats":v[0]} (${ths.filter(t=>t.kind===x).length})</button>`).join("")}</div>
 <p class="muted small" style="margin:10px 2px">${staff&&k==="dm"?"Private chats between students. You can read them and remove messages if needed.":FK[k][1]}</p>
 ${canNew?`<details class="card" ${list.length?"":"open"}><summary>${k==="public"?"Start a new topic":k==="staff"?(staff?"Message a student privately":"Ask a professor privately"):"Message a classmate"}</summary><form data-form="fnew" data-k="${k}" class="stack" style="margin-top:12px">
  ${k==="dm"||(k==="staff"&&staff)?`<label>${staff?"Student":"Classmate"}<select name="peer" required><option value="">Choose…</option>${mates.map(m=>`<option value="${m.id}">${esc(m.full_name)}</option>`).join("")}</select></label>`:""}
  ${k==="dm"?"":`<label>Title<input name="title" required maxlength="200"></label>`}<label>Message<textarea name="body" rows="3" required maxlength="4000"></textarea></label><button class="primary">Send</button></form></details>`:""}
 <div class="stack" style="margin-top:14px">${list.map(t=>`<button class="card thread-row" data-act="fopen" data-id="${t.id}"><div><b>${esc(t.kind==="dm"&&!staff?(t.created_by===user.id?t.peer_name:t.creator_name):t.title)}</b><div class="muted small">${other(t)}</div></div><span class="muted small">${fmtDT(t.last_at)}</span></button>`).join("")||'<div class="empty">No conversations here yet.</div>'}</div>`}
async function threadPage(id){
 const [t,ms]=await Promise.all([ok(db.from("forum_threads").select("*").eq("id",id).maybeSingle()),ok(db.from("forum_messages").select("*").eq("thread_id",id).order("created_at"))]);
 if(!t)return '<div class="card">This conversation is no longer available.</div>';const staff=isStaff();
 stopTimers();let last=ms.length;every(8000,async()=>{if(S.r?.thread!==id||document.activeElement?.name==="body"&&document.activeElement.value)return;const c=await db.from("forum_messages").select("id").eq("thread_id",id);if(c.data&&c.data.length!==last)render()});
 S.after=()=>{const b=$("msgs");if(b)b.scrollTop=b.scrollHeight};
 return `<div class="head"><div class="eyebrow">${FK[t.kind][0].toUpperCase()}</div><h1>${esc(t.kind==="dm"&&!staff?"Chat with "+(t.created_by===user.id?t.peer_name:t.creator_name):t.title)}</h1><p>${t.kind==="public"?"Everyone in the class can read this.":t.kind==="staff"?"Private: only this student and the professors can read this.":"Private chat. Professors can read it for safety."}</p></div>
 ${staff?`<div class="actions" style="margin:0 0 12px"><button class="outline danger" data-act="fdelthread" data-id="${id}">Delete whole conversation</button></div>`:""}
 <div class="card chat"><div id="msgs" class="msgs">${ms.map(m=>`<div class="msg ${m.author_id===user.id?"mine":""} ${m.author_role!=="student"?"staff":""}"><div class="who">${esc(m.author_name||"")}${m.author_role!=="student"?' <span class="chip c-Available">Professor</span>':""} <span class="muted">${fmtDT(m.created_at)}</span></div><div class="bubble">${m.removed?'<i class="muted">Message removed</i>':esc(m.body).replace(/\n/g,"<br>")}</div>${!m.removed&&(staff||m.author_id===user.id)?`<button class="linklike" data-act="fremove" data-id="${m.id}">Remove</button>`:""}</div>`).join("")}</div>
 <form data-form="fpost" data-id="${id}" class="chatbox"><textarea name="body" rows="2" required maxlength="4000" placeholder="Write a message…"></textarea><button class="primary">Send</button></form></div>`}
Object.assign(FORM,{
 async fnew(f,d){const k=f.dataset.k,peer=d.get("peer")||null,m=f.querySelector("[name=peer]");const title=k==="dm"?"Chat":d.get("title");
  const id=await rpc("forum_new",{p_kind:k,p_title:title,p_peer:peer,p_body:d.get("body")});setR({thread:id})},
 async fpost(f,d){await rpc("forum_post",{p_thread:f.dataset.id,p_body:d.get("body")});render()}});
Object.assign(ACT,{fk(el){setR({k:el.dataset.k})},fopen(el){setR({thread:el.dataset.id,k:R().k})},
 async fremove(el){if(!confirm("Remove this message?"))return;await rpc("forum_remove",{p_message:el.dataset.id});render()},
 async fdelthread(el){if(!confirm("Delete this whole conversation for everyone? This cannot be undone."))return;await ok(db.from("forum_threads").delete().eq("id",el.dataset.id));stopTimers();toast("Conversation deleted.");setR({})}});

/* start a live quiz; own pace needs schema_v14.sql, so fall back quietly if it has not been run yet */
async function hostLive(a){const r=await db.rpc("live_host",a);if(!r.error)return r.data;
 if("p_self_paced" in a&&/function|schema cache|PGRST202/i.test(`${r.error.message} ${r.error.code}`)){const {p_self_paced,...b}=a;toast("Own-pace mode needs the database update (schema_v14.sql). Starting in the usual mode.");return ok(db.rpc("live_host",b))}
 toast(r.error.message);throw r.error}
/* ---------- live quiz game ---------- */
let LG=null; /* {id, game, players, mine, picked, myq} */
/* the quiz a phone is playing is kept on the phone, so the back button, a refresh or a closed tab never loses it */
const LGKEY="llc_lg";
function lgSave(){if(!LG||LG.host||!LG.game)return;try{localStorage.setItem(LGKEY,JSON.stringify({id:LG.id,code:LG.game.code||"",title:LG.game.title||"",guest:!!LG.guest,player:LG.player||null,token:LG.token||null,name:LG.me?.name||"",uid:user?.id||null,at:Date.now()}))}catch{}}
function lgForget(){try{localStorage.removeItem(LGKEY);sessionStorage.removeItem("llc_guest")}catch{}}
function lgSaved(){try{const s=JSON.parse(localStorage.getItem(LGKEY)||sessionStorage.getItem("llc_guest")||"null");if(!s||!s.id)return null;if(s.at&&Date.now()-s.at>6*3600e3){lgForget();return null}if(!s.guest&&(!user||s.uid!==user.id))return null;return s}catch{return null}}
function lgPlaying(){return !!(LG&&!LG.host&&LG.game&&LG.game.phase!=="ended"&&(S.page==="play"||(S.page==="app"&&S.tab==="live"&&S.r?.view==="play")))}
const lgWho=()=>LG?.guest?{p_player:LG.player,p_token:LG.token}:{};
/* the question this player is on: the class's question, or their own one in own-pace mode */
function lgEff(){const g=LG?.game;if(!g)return null;if(!g.self_paced||LG.host||g.phase!=="question"||!LG.myq)return g;const m=LG.myq;return {...g,q_index:m.q_index,q_started_at:m.started_at,current:m.current}}
const lgLeft=g=>{if(!g.q_started_at)return g.seconds;const now=g.paused_at?new Date(g.paused_at).getTime():Date.now()+(LG?.skew||0);return Math.max(0,Math.min(g.seconds,g.seconds-(now-new Date(g.q_started_at).getTime())/1000))};
async function lgHostPlayers(){const r=await db.rpc("live_host_players",{p_game:LG.id});if(!r.error)return r.data||[];
 const t=await db.from("live_players").select("game_id,student_id,player_id,name,score,is_guest").eq("game_id",LG.id);return t.data||[]}
async function lgPull(){if(!LG)return false;let ch=false;
 if(LG.host){const [g,pl]=await Promise.all([db.from("live_games").select("*").eq("id",LG.id).maybeSingle(),lgHostPlayers()]);if(!g.data)return false;
  const sig=JSON.stringify(pl.map(p=>[p.player_id,p.score,p.q_index,p.q_started_at?1:0,p.marks||""]));
  ch=!LG.game||g.data.phase!==LG.game.phase||g.data.q_index!==LG.game.q_index||g.data.self_paced!==LG.game.self_paced||!!g.data.paused_at!==!!LG.game.paused_at||sig!==LG.sig||(g.data.phase==="lobby"&&pl.length!==(LG.players||[]).length);
  if(LG.qs===undefined&&g.data.phase!=="lobby"){const q=await db.rpc("live_host_questions",{p_game:LG.id});LG.qs=q.error?false:q.data;ch=true}
  LG.sig=sig;LG.game=g.data;LG.players=pl.sort((a,b)=>b.score-a.score);LG.count=LG.players.length;return ch}
 const r=await db.rpc("live_state",LG.guest?{p_game:LG.id,p_player:LG.player,p_token:LG.token}:{p_game:LG.id});if(r.error||!r.data)return false;const d=r.data;
 const myq=d.my_q||null,qk=d.game.self_paced&&myq?`${myq.q_index}|${myq.started_at?1:0}`:String(d.game.q_index);
 ch=!LG.game||d.game.phase!==LG.game.phase||qk!==LG.qk||d.count!==LG.count||!!d.game.paused_at!==!!LG.game.paused_at;
 if(d.game.phase==="question"&&qk!==LG.qk){LG.picked=null;LG.matchSel=null;LG.matchSent=false;LG.confSent=false;LG.want=null}
 LG.qk=qk;LG.skew=new Date(d.server_now).getTime()-Date.now();LG.game=d.game;LG.players=d.players;LG.me=d.me;LG.mine=d.mine;LG.count=d.count;LG.myq=myq;
 /* back after the back button or a refresh: show the option they had already pressed */
 const e=lgEff(),my=e&&e.phase==="question"&&(LG.mine||[]).find(a=>a.q_index===e.q_index);
 if(my&&my.answer!==undefined){if(e.current?.type==="match"){if(!LG.matchSel&&Array.isArray(my.answer)){LG.matchSel=[...my.answer];LG.matchSent=true}}else if(LG.picked==null&&typeof my.answer==="number")LG.picked=my.answer;if(my.has_conf)LG.confSent=true}
 else if(my&&LG.picked==null&&e.current?.type!=="match")LG.picked=-1; /* older database: the first answer stays */
 lgSave();return ch}
function lgLoop(){stopTimers();every(1500,async()=>{if(!LG)return stopTimers();try{if(await lgPull())render();else lgTick()}catch{}});every(250,lgTick)}
function lgTick(){const g=lgEff();if(!g||g.phase!=="question")return;if(g.self_paced&&(LG.host||!g.q_started_at))return;
 const l=lgLeft(g),b=$("lgBar"),t=$("lgSec");if(b)b.style.width=(100*l/g.seconds)+"%";if(t)t.textContent=Math.ceil(l);
 if(l>0||g.paused_at)return;
 if(LG.host){if(isStaff()&&!LG.auto){LG.auto=true;rpc("live_step",{p_game:LG.id,p_action:"reveal"}).then(()=>{LG.auto=false;lgPull().then(render)}).catch(()=>LG.auto=false)}return}
 document.querySelectorAll('.lg-stage [data-act="lgpick"],.lg-stage [data-chg="lgmatchpick"],.lg-stage [data-act="lgmatchsend"]').forEach(x=>{x.disabled=true;x.removeAttribute("data-act")});
 if(g.self_paced&&LG.autoNext!==g.q_index){LG.autoNext=g.q_index;setTimeout(()=>lgNext(),900)}}
/* send the newest press only, one at a time, so the last option pressed is always the one saved */
function lgSend(ans,conf){LG.want={ans,conf:conf??LG.want?.conf??null};if(LG.sending)return;LG.sending=true;
 (async()=>{const me=LG;try{while(me.want){const w=me.want;me.want=null;const a={p_game:me.id,p_answer:w.ans,...(me.guest?{p_player:me.player,p_token:me.token}:{})};if(w.conf!=null)a.p_confidence=w.conf;
  const r=await db.rpc(me.guest?"live_answer_guest":"live_answer",a);if(r.error&&!me.want)toast(/already answered/i.test(r.error.message)?"Your first answer was kept.":r.error.message)}}finally{me.sending=false}})()}
async function lgNext(){const m=LG?.myq;if(!m)return;await db.rpc("live_self_step",{p_game:LG.id,p_action:"next",p_from:m.q_index,...lgWho()});await lgPull();render()}
/* show every player who has joined, not just the top few, so none of their names or scores go missing on the host's screen */
const podium=(pl,n=Infinity)=>`<ol class="board">${pl.slice(0,n).map((p,i)=>`<li class="${p.me||(user&&p.student_id===user.id)?"me":""}"><span>${["🥇","🥈","🥉"][i]||i+1}</span><b>${esc(p.name||"Player")}${p.is_guest?' <small class="guesttag">guest</small>':""}</b><em>${p.score}</em></li>`).join("")||'<li class="muted">No players yet</li>'}</ol>`;
const confBlock=()=>`<div class="conf10">${Array.from({length:10},(_,i)=>`<button type="button" class="confbtn" data-act="lgconf" data-v="${i+1}">${i+1}</button>`).join("")}</div><p class="muted small">How confident are you in that answer? 1 = not at all, 10 = very confident</p>`;
function lgQuestion(g,opts={}){const q=g.current;if(!q)return "";const labels=q.type==="tf"?["True","False"]:q.type==="ar"?AR_OPTS:q.options||[];const rv=g.phase==="reveal"?g.reveal:null;const tot=rv?Object.values(rv.counts||{}).reduce((a,b)=>a+b,0):0;
 const stem=q.type==="ar"?`<div class="ar"><b>Assertion (A)</b> ${esc(q.assertion)}</div><div class="ar"><b>Reason (R)</b> ${esc(q.reason)}</div>`:esc(q.q||"");
 const open=opts.play&&!rv&&g.phase==="question"&&!g.paused_at&&lgLeft(g)>0;
 if(q.type==="match"){
  if(rv)return `<div class="lg-q">${stem}</div><div class="card"><div class="match">${q.left.map((l,i)=>`<div class="mrow"><span>${esc(l)}</span><b>${esc(q.right[rv.answer[i]])}</b></div>`).join("")}</div></div>${rv.explanation?`<div class="fb good"><b>Explanation.</b> ${esc(rv.explanation)}</div>`:""}`;
  if(opts.play){const sel=LG.matchSel||(LG.matchSel=Array(q.left.length).fill(null));const done=sel.every(x=>x!=null);
   return `<div class="lg-q">${stem}</div><div class="card"><div class="match">${q.left.map((l,i)=>`<div class="mrow"><span>${esc(l)}</span><select ${open?`data-chg="lgmatchpick"`:"disabled"} data-li="${i}"><option value="">Choose…</option>${q.right.map((r,ri)=>`<option value="${ri}" ${sel[i]===ri?"selected":""}>${esc(r)}</option>`).join("")}</select></div>`).join("")}</div></div><button type="button" class="primary big-btn" ${open?'data-act="lgmatchsend"':""} ${done&&open?"":"disabled"}>${LG.matchSent?"Update my matches":"Submit matches"}</button>${open&&LG.matchSent&&g.ask_confidence&&!LG.confSent?confBlock():""}`}
  return `<div class="lg-q">${stem}</div><div class="card"><div class="match">${q.left.map(l=>`<div class="mrow"><span>${esc(l)}</span><b>?</b></div>`).join("")}</div></div><p class="muted small">Students match each item on their own phones.</p>`}
 const pk=opts.play?LG.picked:null;
 return `<div class="lg-q">${stem}</div><div class="tiles big t${labels.length}${pk!=null?" settled":""}">${labels.map((o,i)=>{const c=rv?(rv.counts?.[String(i)]||0):0;const cls=rv?(rv.answer===i?" right":" dim"):(pk===i?" picked":pk!=null&&pk>=0?" other":"");
  return `<button type="button" class="tile c${i%4}${cls}" ${open&&pk!==-1?`data-act="lgpick" data-v="${i}"`:"disabled"}><span>${"ABCD"[i]}</span>${esc(o)}${pk===i&&!rv?'<em class="mine">Your answer</em>':""}${rv?`<em class="cnt">${c}${tot?` · ${Math.round(100*c/tot)}%`:""}</em>`:""}</button>`}).join("")}</div>${open&&pk!=null&&pk>=0&&g.ask_confidence&&!LG.confSent?confBlock():""}${rv?.explanation?`<div class="fb good"><b>Explanation.</b> ${esc(rv.explanation)}</div>`:""}`}
/* ---------- professor's view: marks, level and the question list ---------- */
/* marks: one letter per question  c right · x wrong · o answered, still open · - no answer · _ not reached */
const lgCount=(m,set)=>[...(m||"")].filter(ch=>set.includes(ch)).length;
function lgLevel(m){if(m==null)return null;const faced=lgCount(m,"cx-");if(!faced)return {k:"none",t:"—",pct:null};const pct=Math.round(100*lgCount(m,"c")/faced);
 return pct>=75?{k:"adv",t:"Advanced",pct}:pct>=50?{k:"mid",t:"Intermediate",pct}:{k:"beg",t:"Beginner",pct}}
const lgCell={c:'<td class="m-c" title="Right">✓</td>',x:'<td class="m-x" title="Wrong">✗</td>',o:'<td class="m-o" title="Answered, question still open">•</td>',"-":'<td class="m-n" title="No answer">–</td>',_:'<td class="m-w" title="Not reached yet"></td>'};
function lgStudents(g,pl){const hasM=pl.some(p=>p.marks!=null);
 const rows=pl.map(p=>{const lv=lgLevel(p.marks),m=p.marks||"";
  const prog=g.self_paced?`<td>${p.q_index>=g.n||g.phase==="ended"&&p.q_index>=g.n?"✓ Finished":p.q_started_at?`Q${Math.min(p.q_index+1,g.n)}/${g.n}`:g.phase==="ended"?"—":"Starting…"}<div class="bar"><i style="width:${Math.round(100*Math.min(p.q_index??0,g.n)/g.n)}%"></i></div></td>`:"";
  return `<tr><td>${esc(p.name||"")}${p.is_guest?' <small class="guesttag">guest</small>':""}</td>${prog}${hasM?`<td>${lgCount(m,"c")}/${lgCount(m,"cxo")}</td>`:""}<td>${p.score}</td>${hasM?`<td><span class="lv lv-${lv.k}">${lv.t}${lv.pct!=null?` · ${lv.pct}%`:""}</span></td>`:""}</tr>`}).join("");
 const cols=1+(g.self_paced?1:0)+(hasM?3:1);
 return `<div class="card lg-progcard"><table class="lg-prog"><thead><tr><th>Student</th>${g.self_paced?"<th>Progress</th>":""}${hasM?"<th title='Right answers / questions tried'>Right / tried</th>":""}<th>Points</th>${hasM?"<th>Level</th>":""}</tr></thead><tbody>${rows||`<tr><td colspan="${cols}" class="muted">Waiting for students…</td></tr>`}</tbody></table>
 ${hasM?'<p class="muted small lg-legend">Level = right answers out of all questions that have closed for that student, skipped ones included: Advanced 75% and above · Intermediate 50–74% · Beginner below 50%.</p>':'<p class="muted small">Run <b>schema_v15.sql</b> in Supabase to see attempts, correct answers and levels here.</p>'}</div>`}
function lgGrid(g,pl){if(!pl.length||!pl.some(p=>p.marks!=null))return "";const n=g.n,idx=[...Array(n).keys()];
 const foot=idx.map(i=>{let c=0,f=0;pl.forEach(p=>{const ch=(p.marks||"")[i];if(ch==="c")c++;if("cx-".includes(ch||"_"))f++});return `<td>${f?Math.round(100*c/f)+"%":""}</td>`}).join("");
 const cur=!g.self_paced&&g.phase!=="ended"?g.q_index:-1;
 return `<details class="card lg-gridcard" data-lgd="grid" ${LG.open_grid===false?"":"open"}><summary><b>Question by question</b> <span class="muted small">✓ right · ✗ wrong · • answered (still open) · – no answer</span></summary>
 <div class="lg-gridwrap"><table class="lg-grid"><thead><tr><th>Student</th>${idx.map(i=>`<th class="${i===cur?"cur":""}">Q${i+1}</th>`).join("")}</tr></thead><tbody>${pl.map(p=>`<tr><th>${esc(p.name||"")}</th>${idx.map(i=>lgCell[(p.marks||"")[i]||"_"]).join("")}</tr>`).join("")}</tbody><tfoot><tr><th>Class % right</th>${foot}</tr></tfoot></table></div></details>`}
function lgQList(g,pl){const d=LG.qs;if(!d||!Array.isArray(d.questions))return "";const keys=d.keys||[];
 const items=d.questions.map((q,i)=>{const k=keys[i]||{},a=k.answer;let c=0,f=0,t=0;pl.forEach(p=>{const ch=(p.marks||"")[i];if(ch==="c")c++;if("cx-".includes(ch||"_"))f++;if("cxo".includes(ch||"_"))t++});
  const labels=q.type==="tf"?["True","False"]:q.type==="ar"?AR_OPTS:q.options||[];
  const stem=q.type==="ar"?`<div><b>Assertion:</b> ${esc(q.assertion||"")}</div><div><b>Reason:</b> ${esc(q.reason||"")}</div>`:`<div>${esc(q.q||"")}</div>`;
  const body=q.type==="match"?`<ul class="lg-qopts">${(q.left||[]).map((l,li)=>`<li class="ok">${esc(l)} → ${esc((q.right||[])[Array.isArray(a)?a[li]:-1]??"?")}</li>`).join("")}</ul>`
   :`<ul class="lg-qopts">${labels.map((o,oi)=>`<li class="${oi===a?"ok":""}"><b>${"ABCD"[oi]}</b> ${esc(o)}${oi===a?" ✓":""}</li>`).join("")}</ul>`;
  const now=(!g.self_paced&&g.phase!=="ended"&&i===g.q_index)?' <span class="badge">On screen now</span>':"";
  return `<li><div class="lg-qhead"><b>Q${i+1}</b>${now}<span class="muted small">${t} attempted${f?` · ${Math.round(100*c/f)}% right`:""}</span></div>${stem}${body}${k.explanation?`<p class="muted small">${esc(k.explanation)}</p>`:""}</li>`}).join("");
 return `<details class="card lg-qlist" data-lgd="qlist" ${LG.open_qlist?"open":""}><summary><b>All ${d.questions.length} questions with answers</b> <span class="muted small">Keep this closed while the screen is projected</span></summary><ol>${items}</ol></details>`}
const lgPauseBtn=g=>g.paused_at?'<button class="primary big-btn" data-act="lgpause" data-v="0">▶ Resume quiz</button>':'<button class="outline" data-act="lgpause" data-v="1">⏸ Pause</button>';
const lgPausedBanner=g=>g.paused_at?'<div class="lg-paused" role="status">⏸ Quiz paused. Students cannot answer and every timer is stopped.</div>':"";
const lgCodeTiles=g=>`<div class="lg-code">${String(g.code||"").split("").join("<i></i>")}</div>`;
async function hostPage(){
 if(!LG||LG.id!==R().id){LG={id:R().id,host:true};await lgPull()}
 const g=LG.game;if(!g){LG=null;return '<div class="card">This live quiz has ended.</div>'}
 S.after=()=>{lgLoop();const w=document.querySelector(".lg-gridwrap");if(w&&LG?.gx)w.scrollLeft=LG.gx};const pl=LG.players;
 const mode=`<div class="lg-mode" role="radiogroup" aria-label="How the questions move"><button type="button" role="radio" aria-checked="${!!g.self_paced}" class="${g.self_paced?"on":""}" data-act="lgmode" data-v="1"><b>Own pace</b><span>Every student starts from question 1, even if they join late</span></button><button type="button" role="radio" aria-checked="${!g.self_paced}" class="${g.self_paced?"":"on"}" data-act="lgmode" data-v="0"><b>Together</b><span>You move the whole class to the next question</span></button></div>`;
 if(g.phase==="lobby")return `<div class="lg-stage"><div class="eyebrow">LIVE QUIZ · ${esc(g.title||"")}</div><p>Students open <b>Join Live</b> on the website and type this code</p>${lgCodeTiles(g)}${mode}
  <div class="lg-players"><b>${pl.length}</b> joined${pl.length?`<div class="namecloud">${pl.map(p=>`<span>${esc(p.name||"")}</span>`).join("")}</div>`:""}</div><div class="actions"><button class="primary big-btn" data-act="lgstep" data-a="next" ${pl.length?"":"disabled"}>Start quiz</button><button class="outline" data-act="lgstep" data-a="end">Cancel</button></div></div>`;
 if(g.phase==="ended")return `<div class="lg-stage"><div class="eyebrow">LIVE QUIZ FINISHED</div><h1>Final results</h1>${podium(pl,10)}<div class="actions lg-endact"><button class="primary" data-act="lgclose">Back to My library</button>${g.collect_profile?`<button class="soft" data-act="lgcsv" data-id="${g.id}">Download guest data (CSV)</button>${LG.report?"":`<button class="soft" data-act="lgreport" data-id="${g.id}">View guest data report</button>`}`:""}</div>${g.collect_profile&&LG.report?guestReportHTML(LG.report):""}${lgStudents(g,pl)}${lgGrid(g,pl)}${lgQList(g,pl)}</div><div class="confetti" aria-hidden="true">${Array.from({length:24},(_,i)=>`<i style="left:${(i*4.2)%100}%;animation-delay:${(i%8)*.15}s;background:${["#6558d3","#13a99b","#f2a33a","#e86a8a"][i%4]}"></i>`).join("")}</div>`;
 if(g.self_paced){const fin=pl.filter(p=>p.q_index>=g.n).length;
  return `<div class="lg-stage"><div class="eyebrow">LIVE QUIZ · OWN PACE · ${esc(g.title||"")}</div><p>Late? Students can still join with this code. They start from question 1.</p>${lgCodeTiles(g)}
  <div class="lg-players"><b>${pl.length}</b> joined · <b>${fin}</b> finished</div>${lgPausedBanner(g)}
  <div class="actions">${lgPauseBtn(g)}<button class="primary big-btn" data-act="lgstep" data-a="end">End quiz and show results</button></div>
  <p class="muted small">Own pace: each student moves to the next question on their own. To move the whole class yourself, choose <b>Together</b> when you start the next quiz.</p>
  ${lgStudents(g,pl)}${lgGrid(g,pl)}${lgQList(g,pl)}</div>`}
 return `<div class="lg-stage"><div class="row"><span class="badge">Question ${g.q_index+1} of ${g.n}</span><span class="badge lg-codebadge">Code ${esc(g.code)}</span>${g.phase==="question"?`<span class="lg-timer"><b id="lgSec">${Math.ceil(lgLeft(g))}</b>s</span>`:'<span class="badge">Answer</span>'}<span class="muted small">${pl.length} players</span></div>
  ${g.phase==="question"?`<div class="bar lgbar"><i id="lgBar" style="width:${100*lgLeft(g)/g.seconds}%"></i></div>`:""}${lgPausedBanner(g)}${lgQuestion(g)}
  ${g.phase==="question"&&pl.some(p=>p.marks!=null)?`<p class="lg-answered"><b>${pl.filter(p=>(p.marks||"")[g.q_index]==="o").length}</b> of ${pl.length} students have answered</p>`:""}
  ${g.phase==="reveal"?`<h3>Leaderboard</h3>${podium(pl)}`:""}
  <div class="actions">${g.phase==="question"?`${lgPauseBtn(g)}<button class="soft" data-act="lgstep" data-a="reveal">Show answer</button>`:""}<button class="primary big-btn" data-act="lgstep" data-a="next">${g.q_index+1<g.n?"Next question →":"Finish and show results"}</button><button class="outline danger" data-act="lgstep" data-a="end">End quiz</button></div>
  ${lgStudents(g,pl)}${lgGrid(g,pl)}${lgQList(g,pl)}</div>`}
document.addEventListener("scroll",e=>{if(LG&&e.target.classList&&e.target.classList.contains("lg-gridwrap"))LG.gx=e.target.scrollLeft},true);
document.addEventListener("toggle",e=>{if(LG&&e.target.matches&&e.target.matches("details[data-lgd]"))LG["open_"+e.target.dataset.lgd]=e.target.open},true);
/* the quiz code stays on the student's screen the whole time */
const lgCodeBar=g=>`<div class="lg-codebar"><span>Quiz code</span><b>${esc(g.code||"")}</b>${g.title?`<em>${esc(g.title)}</em>`:""}</div>`;
function playPage(){
 if(!LG){const sv=lgSaved();if(sv){if(sv.guest&&S.page==="play")LG={id:sv.id,guest:true,player:sv.player,token:sv.token};else if(!sv.guest&&S.page==="app")LG={id:sv.id}}}
 const g=LG?.game;
 if(!g){if(LG&&!LG.tried){LG.tried=true;S.after=()=>lgPull().then(()=>render());return '<div class="card">Joining…</div>'}lgForget();return `<div class="card">This live quiz has ended. <button class="soft" data-act="lgleave">Back</button></div>`}
 S.after=lgLoop;const pl=LG.players||[],meRow=LG.me,rank=meRow?.rank,top=lgCodeBar(g);
 const who=meRow?`<p class="muted small">Playing as <b>${esc(meRow.name)}</b>${LG.guest?" (guest)":""}</p>`:"";
 const leave='<button type="button" class="linklike lg-leave" data-act="lgquit">Leave quiz</button>';
 if(g.phase==="lobby")return top+`<div class="lg-stage"><div class="eyebrow">LIVE QUIZ</div><h1>You're in!</h1><p class="muted">${esc(g.title||"")}</p>${who}<div class="lg-wait"><span></span><span></span><span></span></div><p>Waiting for the quiz to start. ${LG.count||0} joined so far.</p>${leave}</div>`;
 if(g.phase==="ended"){lgForget();return `<div class="lg-stage"><div class="eyebrow">LIVE QUIZ FINISHED</div><h1>${rank===1?"You won! 🏆":rank?`You finished #${rank}`:"Finished"}</h1><p class="muted">${meRow?.score||0} points</p>${podium(pl)}<div class="actions"><button class="primary" data-act="lgleave">Done</button></div></div>${rank&&rank<=3?`<div class="confetti" aria-hidden="true">${Array.from({length:24},(_,i)=>`<i style="left:${(i*4.2)%100}%;animation-delay:${(i%8)*.15}s;background:${["#6558d3","#13a99b","#f2a33a","#e86a8a"][i%4]}"></i>`).join("")}</div>`:""}`}
 const e=lgEff();
 if(g.self_paced&&g.phase==="question"){
  if(!LG.myq)return top+'<div class="lg-stage"><h1>Loading…</h1></div>';
  if(!e.q_started_at){if(!LG.starting){LG.starting=true;db.rpc("live_self_step",{p_game:LG.id,p_action:"start",...lgWho()}).then(()=>lgPull()).then(()=>{if(LG)LG.starting=false;render()})}return top+`<div class="lg-stage"><div class="eyebrow">LIVE QUIZ</div><h1>Get ready…</h1><p>You start from question 1.</p>${who}</div>`}
  if(LG.myq.q_index>=g.n)return top+`<div class="lg-stage"><div class="eyebrow">ALL DONE</div><h1>You finished all ${g.n} questions! 🎉</h1><p>${meRow?.score||0} points${rank?` · #${rank} so far`:""}</p>${who}<p class="muted">Stay on this page. Your professor will show the final results soon.</p></div>`}
 const my=(LG.mine||[]).find(a=>a.q_index===e.q_index),isMatch=e.current?.type==="match";
 const answered=isMatch?LG.matchSent:LG.picked!=null,left=lgLeft(e);
 const status=e.phase==="reveal"?`<div class="fb ${my?.correct?"good":"bad"} lg-result"><b>${my?(my.correct?`✓ Correct! +${my.points} points`:"✗ Not this time"):"⏱ No answer"}</b><span>Your score: ${meRow?.score||0}${rank?` · position #${rank}`:""}</span></div>`
  :answered&&LG.picked!==-1?`<div class="fb lg-result"><b>Answer saved${!isMatch?`: ${"ABCD"[LG.picked]||""}`:""}</b><span>Not sure? ${isMatch?"Change a match and press Update":"Press another option"} until the time runs out. Your last choice is the one that counts.</span></div>`
  :answered?'<div class="fb lg-result"><b>Answer locked in</b><span>Wait for the result…</span></div>':"";
 const paused=g.paused_at&&e.phase==="question"?'<div class="lg-paused" role="status">⏸ Your professor has paused the quiz. Your timer is stopped. Wait here.</div>':"";
 const next=g.self_paced&&answered&&!g.paused_at?`<div class="actions"><button type="button" class="primary big-btn" data-act="lgnext">${e.q_index+1<g.n?"Next question →":"Finish ✓"}</button></div>`:"";
 return top+`<div class="lg-stage"><div class="row"><span class="badge">Question ${e.q_index+1} of ${g.n}</span>${e.phase==="question"?`<span class="lg-timer"><b id="lgSec">${Math.ceil(left)}</b>s</span>`:""}<span class="muted small">${meRow?.score||0} pts</span></div>
 ${e.phase==="question"?`<div class="bar lgbar"><i id="lgBar" style="width:${100*left/e.seconds}%"></i></div>`:""}${paused}${lgQuestion(e,{play:true})}${status}${next}${leave}</div>`}
const joinQuizCard=()=>`<form data-form="lgjoin" class="card stack lg-join"><div class="eyebrow">LIVE QUIZ</div><h3>Join a live quiz</h3><p class="muted small">Type the six-digit code your professor shows on the screen.</p><div class="row"><input name="code" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required placeholder="000000" class="codein"><button class="primary">Join</button></div></form>`;
Object.assign(FORM,{async lgjoin(f,d){const id=await rpc("live_join",{p_code:d.get("code")});LG={id};await lgPull();setR({view:"play",id})}});
/* Join live page: live quiz codes work for everyone; guests give a name */
async function joinLiveQuiz(code){ /* true when the code belonged to a live quiz */
 if(!/^\d{6}$/.test(code))return false;
 const sv=lgSaved();
 if(sv&&sv.guest&&sv.code===code&&!(user&&role()==="student")){const st=await db.rpc("live_state",{p_game:sv.id,p_player:sv.player,p_token:sv.token});
  if(!st.error&&st.data?.me&&st.data.game.phase!=="ended"){LG={id:sv.id,guest:true,player:sv.player,token:sv.token};await lgPull();S={page:"play"};render();toast("Welcome back. You are continuing where you left off.");return true}}
 const look=await db.rpc("live_lookup",{p_code:code});if(look.error||!look.data)return false;
 if(user&&role()==="student"){const r=await db.rpc("live_join",{p_code:code});if(r.error){toast(r.error.message);return true}LG={id:r.data};await lgPull();S.page="app";S.tab="live";S.r={view:"play",id:r.data};render();return true}
 const name=($("displayName")?.value||"").trim();
 if(name.length<2){toast(`Found "${look.data.title||"Live quiz"}". Type your name, then press Join again.`);$("displayName")?.focus();return true}
 const doJoin=async det=>{const args={p_code:code,p_name:name};if(det)Object.assign(args,{p_subject:det.subject,p_study_level:det.study_level,p_year:det.year,p_locality:det.locality,p_gender:det.gender,p_native:det.native,p_consent:det.consent});
  const r=await db.rpc("live_join_guest",args);if(r.error){toast(r.error.message);return}
  LG={id:r.data.game,guest:true,player:r.data.player,token:r.data.token};
  await lgPull();S={page:"play"};render()};
 if(look.data.collect_profile){demoForm(name,doJoin);return true}
 await doJoin(null);return true}
/* confidence (1-10) bucketed into three bands for the overall report. */
const confBand=v=>v==null?null:v<=3?"Low confidence":v<=7?"Neutral":"High confidence";
/* shared "Guest Live Quiz data" report table + overall summary, used on the live-quiz
   ended screen and from the My library > Guest Live Quiz data tab. rows come from the
   live_guest_csv RPC (host-only; exact marks, not the gamified score). */
function guestReportHTML(rows,total){
 const withConf=rows.filter(r=>r.avg_confidence!=null);
 const bandCounts={"Low confidence":0,"Neutral":0,"High confidence":0};
 withConf.forEach(r=>bandCounts[confBand(r.avg_confidence)]++);
 const avgMarks=rows.length?mean(rows.map(r=>r.marks||0)):0;
 const avgConf=withConf.length?mean(withConf.map(r=>r.avg_confidence)):null;
 const tot=total??rows.find(r=>r.total!=null)?.total;
 return `<div class="card stack" style="margin-top:18px;text-align:left">
  <h3>Overall report</h3>
  <div class="form-grid">
   <div class="statbox"><b>${fx(avgMarks,1)}${tot?` / ${tot}`:""}</b><span>Average marks</span></div>
   <div class="statbox"><b>${avgConf==null?"-":fx(avgConf,1)}</b><span>Overall confidence (1-10)</span></div>
   <div class="statbox"><b>${bandCounts["Low confidence"]}</b><span>Low confidence (1-3)</span></div>
   <div class="statbox"><b>${bandCounts["Neutral"]}</b><span>Neutral (4-7)</span></div>
   <div class="statbox"><b>${bandCounts["High confidence"]}</b><span>High confidence (8-10)</span></div>
  </div>
  <h3>Participants (${rows.length})</h3>
  <div style="overflow:auto"><table><thead><tr><th>Name</th><th>Guest</th><th>Marks</th><th>Subject</th><th>Study level</th><th>Year</th><th>Rural/Urban</th><th>Gender</th><th>Native</th><th>Consent</th><th>Confidence (1-10)</th><th>Band</th></tr></thead><tbody>
  ${rows.map(p=>`<tr><td>${esc(p.name||"")}</td><td>${p.is_guest?"Yes":"No"}</td><td>${p.marks??"-"}${p.total?` / ${p.total}`:""}</td><td>${esc(p.g_subject||"-")}</td><td>${esc(p.g_study_level||"-")}</td><td>${p.g_year??"-"}</td><td>${esc(p.g_locality||"-")}</td><td>${esc(p.g_gender||"-")}</td><td>${esc(p.g_native||"-")}</td><td>${p.g_consent?"Yes":"No"}</td><td>${p.avg_confidence??"-"}</td><td>${confBand(p.avg_confidence)||"-"}</td></tr>`).join("")||'<tr><td colspan="12" class="muted">No participants yet.</td></tr>'}
  </tbody></table></div></div>`}
Object.assign(ACT,{
 async libhost(el){const g=await hostLive({p_activity:el.dataset.id,p_seconds:20,p_self_paced:false});LG={id:g.id,host:true};await lgPull();setR({view:"host",id:g.id})},
 async lgstep(el){if(el.dataset.a==="end"&&!confirm("End this live quiz now?"))return;await rpc("live_step",{p_game:LG.id,p_action:el.dataset.a});await lgPull();if(el.dataset.a==="end"&&LG.game?.q_index<0){stopTimers();LG=null;return setR({})}render()},
 async lgpause(el){const v=el.dataset.v==="1";const r=await db.rpc("live_pause",{p_game:LG.id,p_pause:v});
  if(r.error){toast(/function|schema cache|PGRST202/i.test(`${r.error.message} ${r.error.code}`)?"Pause needs the database update: run schema_v15.sql in Supabase.":r.error.message);return}
  await lgPull();render();toast(v?"Quiz paused.":"Quiz resumed.")},
 async lgreport(el){const rows=await rpc("live_guest_csv",{p_game:el.dataset.id});LG.report=rows;render()},
 async lgcsv(el){const gid=el.dataset.id;const rows=await rpc("live_guest_csv",{p_game:gid});
  download(`live_quiz_guests_${gid.slice(0,8)}.csv`,[csvLine(["Name","Guest","Marks","Total","Subject","Study level","Year","Rural/Urban","Gender","Native","Consent","Avg confidence (1-10)","Confidence band"]),
   ...rows.map(p=>csvLine([p.name||"",p.is_guest?"Yes":"No",p.marks,p.total,p.g_subject||"",p.g_study_level||"",p.g_year||"",p.g_locality||"",p.g_gender||"",p.g_native||"",p.g_consent?"Yes":"No",p.avg_confidence??"",confBand(p.avg_confidence)||""]))].join("\n"))},
 lgclose(){stopTimers();LG=null;setR({})},lgleave(){stopTimers();const g=LG?.guest;LG=null;lgForget();if(g||S.page==="play"){S={page:"join"};render()}else setR({})},
 async lgpick(el){if(!LG)return;const v=+el.dataset.v;if(LG.picked===v)return;LG.picked=v;lgSend(v);try{playFeedbackSound(true)}catch{};render()},
 lgmatchsend(){const sel=LG?.matchSel;if(!sel||sel.some(x=>x==null))return toast("Match every item first.");LG.matchSent=true;lgSend([...sel]);try{playFeedbackSound(true)}catch{};render()},
 lgconf(el){const v=+el.dataset.v;const q=lgEff()?.current;const ans=q?.type==="match"?(LG.matchSel?[...LG.matchSel]:null):LG.picked;if(ans==null||ans===-1)return;LG.confSent=true;lgSend(ans,v);render()},
 lgnext(el){el.disabled=true;lgNext()},
 lgquit(){if(!confirm("Leave this quiz? You can come back with the same code and continue where you left off."))return;stopTimers();const g=LG?.guest;LG=null;if(g||S.page==="play"){S={page:"join"};render()}else setR({})},
 async lgmode(el){const v=el.dataset.v==="1";if(!LG?.game||!!LG.game.self_paced===v)return;try{await rpc("live_set_mode",{p_game:LG.id,p_self_paced:v})}catch{return}await lgPull();render();toast(v?"Own pace: every student starts from question 1, even late joiners.":"Together: you move the class from question to question.")},
 async lgresume(){const sv=lgSaved();if(!sv)return toast("That quiz has ended.");stopTimers();
  if(sv.guest){LG={id:sv.id,guest:true,player:sv.player,token:sv.token};await lgPull();S={page:"play"};render()}
  else{LG={id:sv.id};await lgPull();S.page="app";S.tab="live";S.r={view:"play",id:sv.id};render()}}});
CHG.lgmatchpick=el=>{const li=+el.dataset.li;const sel=LG.matchSel||(LG.matchSel=[]);sel[li]=el.value===""?null:+el.value;render()};

/* =====================================================================
   v6 MODULE: statistics, SPSS export, Google Sheet sync, tab wiring
   ===================================================================== */
const ST={
 lg(x){const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,.001208650973866179,-.000005395239384953];let y=x,t=x+5.5;t-=(x+.5)*Math.log(t);let s=1.000000000190015;for(let j=0;j<6;j++)s+=c[j]/++y;return -t+Math.log(2.5066282746310005*s/x)},
 bcf(a,b,x){const E=3e-12,F=1e-300;let qab=a+b,qap=a+1,qam=a-1,c=1,d=1-qab*x/qap;if(Math.abs(d)<F)d=F;d=1/d;let h=d;
  for(let m=1;m<=300;m++){const m2=2*m;let aa=m*(b-m)*x/((qam+m2)*(a+m2));d=1+aa*d;if(Math.abs(d)<F)d=F;c=1+aa/c;if(Math.abs(c)<F)c=F;d=1/d;h*=d*c;aa=-(a+m)*(qab+m)*x/((a+m2)*(qap+m2));d=1+aa*d;if(Math.abs(d)<F)d=F;c=1+aa/c;if(Math.abs(c)<F)c=F;d=1/d;const del=d*c;h*=del;if(Math.abs(del-1)<E)break}return h},
 ib(a,b,x){if(x<=0)return 0;if(x>=1)return 1;const bt=Math.exp(ST.lg(a+b)-ST.lg(a)-ST.lg(b)+a*Math.log(x)+b*Math.log(1-x));return x<(a+1)/(a+b+2)?bt*ST.bcf(a,b,x)/a:1-bt*ST.bcf(b,a,1-x)/b},
 pT(t,df){return ST.ib(df/2,.5,df/(df+t*t))},
 pF(F,d1,d2){return F<=0?1:ST.ib(d2/2,d1/2,d2/(d2+d1*F))},
 tCrit(df){let lo=0,hi=200;for(let i=0;i<80;i++){const m=(lo+hi)/2;ST.pT(m,df)>.05?lo=m:hi=m}return (lo+hi)/2},
 paired(pairs){const n=pairs.length;if(n<3)return null;const d=pairs.map(p=>p[1]-p[0]),md=mean(d),s=sd(d),m1=mean(pairs.map(p=>p[0])),m2=mean(pairs.map(p=>p[1]));
  if(!s)return {n,m1,m2,md,sd:0,t:null,df:n-1,p:null,lo:md,hi:md,dz:null,sd1:sd(pairs.map(p=>p[0])),sd2:sd(pairs.map(p=>p[1]))};
  const se=s/Math.sqrt(n),t=md/se,df=n-1,tc=ST.tCrit(df);return {n,m1,m2,sd1:sd(pairs.map(p=>p[0])),sd2:sd(pairs.map(p=>p[1])),md,sd:s,t,df,p:ST.pT(t,df),lo:md-tc*se,hi:md+tc*se,dz:md/s}},
 wilcoxon(pairs){const d=pairs.map(p=>p[1]-p[0]).filter(x=>x!==0),n=d.length;if(n<5)return null;const o=d.map((x,i)=>({a:Math.abs(x),s:Math.sign(x)})).sort((x,y)=>x.a-y.a);let tie=0;
  for(let i=0;i<n;){let j=i;while(j<n-1&&o[j+1].a===o[i].a)j++;const r=(i+j)/2+1,t=j-i+1;for(let k=i;k<=j;k++)o[k].r=r;if(t>1)tie+=t*t*t-t;i=j+1}
  const wp=o.filter(x=>x.s>0).reduce((a,x)=>a+x.r,0),wm=n*(n+1)/2-wp,mu=n*(n+1)/4,sg=Math.sqrt(n*(n+1)*(2*n+1)/24-tie/48),z=(wp-mu)/sg;return {n,wp,wm,z,p:2*(1-Phi(Math.abs(z)))}},
 rm(M){const n=M.length,k=M[0]?.length||0;if(n<3||k<2)return null;const g=mean(M.flat()),cm=Array.from({length:k},(_,j)=>mean(M.map(r=>r[j]))),rmn=M.map(r=>mean(r));
  const sst=n*cm.reduce((a,m)=>a+(m-g)**2,0),sss=k*rmn.reduce((a,m)=>a+(m-g)**2,0),tot=M.flat().reduce((a,x)=>a+(x-g)**2,0),sse=tot-sst-sss,d1=k-1,d2=(k-1)*(n-1);
  if(sse<=1e-12)return {n,k,F:null,d1,d2,p:null,eta:null,cm};const F=(sst/d1)/(sse/d2);return {n,k,F,d1,d2,p:ST.pF(F,d1,d2),eta:sst/(sst+sse),cm}},
 alpha(M){const n=M.length,k=M[0]?.length||0;if(n<3||k<2)return null;const v=a=>{const s=sd(a);return s*s},iv=Array.from({length:k},(_,j)=>v(M.map(r=>r[j]))).reduce((a,b)=>a+b,0),tv=v(M.map(r=>r.reduce((a,b)=>a+b,0)));return tv?k/(k-1)*(1-iv/tv):null},
 pearson(x,y){const n=x.length;if(n<4)return null;const mx=mean(x),my=mean(y);let sxy=0,sxx=0,syy=0;for(let i=0;i<n;i++){sxy+=(x[i]-mx)*(y[i]-my);sxx+=(x[i]-mx)**2;syy+=(y[i]-my)**2}if(!sxx||!syy)return null;const r=sxy/Math.sqrt(sxx*syy);return {n,r,p:Math.abs(r)>=1?0:ST.pT(r*Math.sqrt((n-2)/(1-r*r)),n-2)}}};
async function statsData(){
 const [acts,atts,st,ss,at,vq]=await Promise.all([ok(db.from("activities").select("*").order("sort").order("created_at")),fetchAll("activity_attempts","*",q=>q.eq("status","done")),roster(),ok(db.from("class_sessions").select("id")),fetchAll("attendance"),fetchAll("video_quiz_attempts","student_id,video_id,score,total,created_at")]);
 const A={};acts.forEach(a=>A[a.id]=a);const anx=acts.find(a=>a.purpose==="anxiety"&&a.status==="published")||acts.find(a=>a.purpose==="anxiety");
 const ivs=acts.filter(a=>a.purpose==="intervention"&&a.status==="published"),tps=["pre",...ivs.map(a=>"int:"+a.id),"post"],tpl=["Pre",...ivs.map((_,i)=>"I"+(i+1)),"Post"];
 const first=atts.filter(t=>t.attempt_no===1);
 const rows=st.map((s,idx)=>{const mine=first.filter(t=>t.student_id===s.id),of=p=>mine.filter(t=>A[t.activity_id]?.purpose===p&&A[t.activity_id].kind!=="questionnaire");
  const r={id:s.sp.research_id||"P"+String(idx+1).padStart(3,"0"),anx:{},items:null,pre:{},post:{}};
  if(anx)mine.filter(t=>t.activity_id===anx.id).forEach(t=>{r.anx[t.context]=+t.detail?.mean;if(t.context==="pre"&&Array.isArray(t.answers))r.items=t.answers.map((v,i)=>anx.questions[i]?.reverse?6-v:v)});
  SK.forEach(k=>{const v=of("pretest").filter(t=>A[t.activity_id].skill===k).map(t=>+t.pct);if(v.length)r.pre[k]=mean(v)});
  const pv=of("pretest").map(t=>+t.pct);r.preTotal=pv.length?mean(pv):null;const po=of("posttest");r.postTotal=po.length?mean(po.map(t=>+t.pct)):null;
  SK.forEach(k=>{let c=0,n=0;po.forEach(t=>{const b=t.detail?.by_skill?.[k];if(b){c+=b.c;n+=b.n}});if(n)r.post[k]=100*c/n});
  const cf=(l,f)=>{const v=l.map(t=>t[f]).filter(x=>x!=null);return v.length?mean(v):null};
  r.cPreB=cf(of("pretest"),"conf_before");r.cPreA=cf(of("pretest"),"conf_after");r.cIvB=cf(of("intervention"),"conf_before");r.cIvA=cf(of("intervention"),"conf_after");r.cPostB=cf(po,"conf_before");r.cPostA=cf(po,"conf_after");
  r.att=ss.length?100*at.filter(a=>a.student_id===s.id&&a.status!=="absent").length/ss.length:null;
  const best={};vq.filter(v=>v.student_id===s.id).forEach(v=>best[v.video_id]=Math.max(best[v.video_id]||0,100*v.score/v.total));const bv=Object.values(best);r.vq=bv.length?mean(bv):null;
  return r});
 return {rows,tps,tpl,anx,nItems:anx?.questions.length||0}}
function tRow(label,r,unit=""){if(!r)return `<tr><td>${label}</td><td colspan="8" class="muted">Not enough paired data yet (at least 3 students are needed).</td></tr>`;
 return `<tr><td>${label}</td><td>${r.n}</td><td>${fx(r.m1,2)} (${fx(r.sd1,2)})</td><td>${fx(r.m2,2)} (${fx(r.sd2,2)})</td><td>${fx(r.md,2)}${unit}</td><td>${r.t==null?"-":fx(r.t,3)}</td><td>${r.df}</td><td>${fp(r.p)}</td><td>${fx(r.lo,2)} to ${fx(r.hi,2)}</td><td>${r.dz==null?"-":fx(r.dz,2)}</td></tr>`}
const tHead=`<thead><tr><th>Comparison</th><th>N</th><th>First M (SD)</th><th>Second M (SD)</th><th>Mean change</th><th>t</th><th>df</th><th>p</th><th>95% CI of change</th><th>Cohen's d<sub>z</sub></th></tr></thead>`;
async function statsTab(){
 const D=await statsData(),R_=D.rows,pairs=(f,g)=>R_.filter(r=>f(r)!=null&&g(r)!=null&&!isNaN(f(r))&&!isNaN(g(r))).map(r=>[f(r),g(r)]);
 const desc=D.tps.map((tp,i)=>{const v=R_.map(r=>r.anx[tp]).filter(x=>x!=null&&!isNaN(x));return {l:D.tpl[i],n:v.length,m:mean(v),s:sd(v),lo:v.length?Math.min(...v):null,hi:v.length?Math.max(...v):null}});
 const ap=pairs(r=>r.anx.pre,r=>r.anx.post),tA=ST.paired(ap),wA=ST.wilcoxon(ap);
 const comp=R_.filter(r=>D.tps.every(tp=>r.anx[tp]!=null&&!isNaN(r.anx[tp]))).map(r=>D.tps.map(tp=>r.anx[tp])),an=ST.rm(comp);
 const items=R_.filter(r=>r.items&&r.items.length===D.nItems).map(r=>r.items),al=ST.alpha(items);
 const sp_=pairs(r=>r.preTotal,r=>r.postTotal),cr=R_.filter(r=>r.anx.pre!=null&&r.anx.post!=null&&r.preTotal!=null&&r.postTotal!=null),pc=ST.pearson(cr.map(r=>r.anx.post-r.anx.pre),cr.map(r=>r.postTotal-r.preTotal));
 const wS=ST.wilcoxon(sp_);
 return `<div class="head"><div class="eyebrow">STATISTICS</div><h1>Anxiety and achievement statistics</h1><p>Calculated from students' first attempts. The same tests can be run in SPSS with the two downloads below.</p></div>
 <div class="card stack"><div class="row"><h3>SPSS files</h3><div class="actions"><button class="primary" data-act="spsscsv">Download SPSS data (.csv)</button><button class="soft" data-act="spsssps">Download SPSS syntax (.sps)</button></div></div><p class="muted small">Open the syntax file in SPSS, correct the file path on the first line, and run it. It imports the data, labels the variables and runs the reliability, paired t-test, Wilcoxon, repeated-measures ANOVA and correlation analyses. Students appear by research ID only.</p></div>
 <div class="card" style="margin-top:16px;overflow:auto"><h3>1. Anxiety at each time point</h3><p class="muted small">Mean item score from 1 (low anxiety) to 5 (high anxiety), after reverse-scoring positively worded statements.${D.anx?"":" No anxiety questionnaire has been created yet."}</p>
  ${lineChart(desc.map(d=>d.l),[{name:"Mean anxiety",color:"#6558d3",vals:desc.map(d=>d.m)}],{max:5})}
  <table><thead><tr><th>Time point</th><th>N</th><th>Mean</th><th>SD</th><th>Min</th><th>Max</th></tr></thead><tbody>${desc.map(d=>`<tr><td>${d.l}</td><td>${d.n}</td><td>${fx(d.m,2)}</td><td>${fx(d.s,2)}</td><td>${fx(d.lo,2)}</td><td>${fx(d.hi,2)}</td></tr>`).join("")}</tbody></table>
  <p><b>Reliability (Cronbach's α, pre-test questionnaire):</b> ${al==null?'<span class="muted">not enough data yet</span>':`α = ${fx(al,3)} (${D.nItems} items, N = ${items.length})`}</p></div>
 <div class="card" style="margin-top:16px;overflow:auto"><h3>2. Anxiety before and after (pre vs post)</h3><table>${tHead}<tbody>${tRow("Anxiety: pre → post",tA)}</tbody></table>
  <p><b>Wilcoxon signed-rank test:</b> ${wA?`Z = ${fx(wA.z,3)}, p = ${fp(wA.p)} (N = ${wA.n} non-zero differences, sum of positive ranks = ${fx(wA.wp,1)}, negative = ${fx(wA.wm,1)})`:'<span class="muted">at least 5 changed scores are needed</span>'}</p>
  <p><b>Repeated-measures ANOVA across all ${D.tps.length} time points:</b> ${an?(an.F==null?"no variation in the data":`F(${an.d1}, ${an.d2}) = ${fx(an.F,3)}, p = ${fp(an.p)}, partial η² = ${fx(an.eta,3)} (N = ${an.n} students with every time point; sphericity assumed)`):'<span class="muted">needs at least 3 students who completed every time point</span>'}</p></div>
 <div class="card" style="margin-top:16px;overflow:auto"><h3>3. Achievement: pre-test vs post-test (%)</h3><table>${tHead}<tbody>${tRow("All skills",ST.paired(sp_))}${SK.map(k=>tRow(k,ST.paired(pairs(r=>r.pre[k],r=>r.post[k])))).join("")}</tbody></table>
  <p><b>Wilcoxon signed-rank test (all skills):</b> ${wS?`Z = ${fx(wS.z,3)}, p = ${fp(wS.p)}`:'<span class="muted">not enough data yet</span>'}</p><p class="muted small">Per-skill post-test scores use the skill set on each post-test question.</p></div>
 <div class="card" style="margin-top:16px;overflow:auto"><h3>4. Confidence meter: before vs after each test (1–10)</h3><table>${tHead}<tbody>${tRow("Pre-test",ST.paired(pairs(r=>r.cPreB,r=>r.cPreA)))}${tRow("Interventions",ST.paired(pairs(r=>r.cIvB,r=>r.cIvA)))}${tRow("Post-test",ST.paired(pairs(r=>r.cPostB,r=>r.cPostA)))}${tRow("Before pre-test → before post-test",ST.paired(pairs(r=>r.cPreB,r=>r.cPostB)))}</tbody></table></div>
 <div class="card" style="margin-top:16px"><h3>5. Does lower anxiety go with higher gains?</h3><p><b>Pearson correlation</b> between change in anxiety (post − pre) and gain in score (post − pre): ${pc?`r = ${fx(pc.r,3)}, p = ${fp(pc.p)}, N = ${pc.n}`:'<span class="muted">at least 4 students with all four scores are needed</span>'}</p></div>
 <div class="notice" style="margin-top:16px">p-values are two-tailed. Statistical significance does not by itself show that the teaching caused the change; report these results together with your research design, and confirm the final figures in SPSS.</div>`}
function spssCols(D){const iv=D.tps.slice(1,-1).map((_,i)=>"anx_i"+(i+1));const c=[["id","Research ID",r=>r.id],["anx_pre","Anxiety before pre-test (mean 1-5)",r=>r.anx.pre],...iv.map((n,i)=>[n,`Anxiety before intervention ${i+1} (mean 1-5)`,r=>r.anx[D.tps[i+1]]]),["anx_post","Anxiety before post-test (mean 1-5)",r=>r.anx.post],
  ...Array.from({length:D.nItems},(_,i)=>["anxpre_q"+(i+1),`Anxiety pre item ${i+1} (reverse-scored where needed)`,r=>r.items?.[i]]),
  ...SK.map(k=>["pre_"+k.toLowerCase(),`Pre-test ${k} (%)`,r=>r.pre[k]]),["pre_total","Pre-test mean of skills (%)",r=>r.preTotal],["post_total","Post-test (%)",r=>r.postTotal],...SK.map(k=>["post_"+k.toLowerCase(),`Post-test ${k} (%)`,r=>r.post[k]]),
  ["conf_pre_before","Confidence before pre-test (1-10)",r=>r.cPreB],["conf_pre_after","Confidence after pre-test (1-10)",r=>r.cPreA],["conf_int_before","Confidence before interventions (1-10)",r=>r.cIvB],["conf_int_after","Confidence after interventions (1-10)",r=>r.cIvA],["conf_post_before","Confidence before post-test (1-10)",r=>r.cPostB],["conf_post_after","Confidence after post-test (1-10)",r=>r.cPostA],
  ["attendance_pct","Attendance (%)",r=>r.att],["videoquiz_mean","Video quiz best scores, mean (%)",r=>r.vq]];return {c,iv}}
Object.assign(ACT,{
 async spsscsv(){const D=await statsData(),{c}=spssCols(D);const num=v=>v==null||(typeof v==="number"&&isNaN(v))?"":typeof v==="number"?String(Math.round(v*1000)/1000):v;
  download("llc_spss_data.csv",[c.map(x=>x[0]).join(","),...D.rows.map(r=>c.map(x=>{const v=num(x[2](r));return /[",]/.test(v)?'"'+String(v).replaceAll('"','""')+'"':v}).join(","))].join("\r\n"));toast("Data file downloaded.")},
 async spsssps(){const D=await statsData(),{c,iv}=spssCols(D);const anxAll=["anx_pre",...iv,"anx_post"];const sk=SK.map(k=>k.toLowerCase());
  const L=[`* Live Language Coach - SPSS syntax. Change the path below to where you saved llc_spss_data.csv.`,`GET DATA /TYPE=TXT /FILE='C:\\Users\\YourName\\Downloads\\llc_spss_data.csv' /DELIMITERS="," /QUALIFIER='"' /ARRANGEMENT=DELIMITED /FIRSTCASE=2`,`  /VARIABLES=`,...c.map(x=>`    ${x[0]} ${x[0]==="id"?"A20":"F8.3"}`),`  .`,`EXECUTE.`,``,`VARIABLE LABELS`,...c.map((x,i)=>`  ${x[0]} '${x[1].replaceAll("'","''")}'${i===c.length-1?".":""}`),``,
   `* 1. Descriptive statistics.`,`DESCRIPTIVES VARIABLES=${anxAll.join(" ")} pre_total post_total attendance_pct /STATISTICS=MEAN STDDEV MIN MAX.`,``,
   ...(D.nItems>1?[`* 2. Reliability of the anxiety questionnaire (Cronbach's alpha).`,`RELIABILITY /VARIABLES=anxpre_q1 TO anxpre_q${D.nItems} /SCALE('Anxiety (pre)') ALL /MODEL=ALPHA /SUMMARY=TOTAL.`,``]:[]),
   `* 3. Anxiety before and after: paired-samples t-test and Wilcoxon signed-rank test.`,`T-TEST PAIRS=anx_pre WITH anx_post (PAIRED) /CRITERIA=CI(.95) /MISSING=ANALYSIS.`,`NPAR TESTS /WILCOXON=anx_pre WITH anx_post (PAIRED).`,``,
   ...(anxAll.length>2?[`* 4. Anxiety across all time points: repeated-measures ANOVA.`,`GLM ${anxAll.join(" ")}`,`  /WSFACTOR=time ${anxAll.length} Polynomial /METHOD=SSTYPE(3)`,`  /EMMEANS=TABLES(time) COMPARE ADJ(BONFERRONI) /PRINT=DESCRIPTIVE ETASQ /WSDESIGN=time.`,``]:[]),
   `* 5. Achievement: pre-test vs post-test.`,`T-TEST PAIRS=pre_total ${sk.map(k=>"pre_"+k).join(" ")} WITH post_total ${sk.map(k=>"post_"+k).join(" ")} (PAIRED) /CRITERIA=CI(.95) /MISSING=ANALYSIS.`,`NPAR TESTS /WILCOXON=pre_total WITH post_total (PAIRED).`,``,
   `* 6. Confidence meter before and after each test.`,`T-TEST PAIRS=conf_pre_before conf_int_before conf_post_before conf_pre_before WITH conf_pre_after conf_int_after conf_post_after conf_post_before (PAIRED) /CRITERIA=CI(.95) /MISSING=ANALYSIS.`,``,
   `* 7. Change in anxiety and gain in achievement.`,`COMPUTE anx_change=anx_post-anx_pre.`,`COMPUTE score_gain=post_total-pre_total.`,`EXECUTE.`,`CORRELATIONS /VARIABLES=anx_change score_gain attendance_pct videoquiz_mean /PRINT=TWOTAIL NOSIG /MISSING=PAIRWISE.`,``];
  download("llc_spss_syntax.sps",L.join("\r\n"));toast("Syntax file downloaded.")},
 async sheetscript(){const sec=await rpc("get_sheet_secret");const code=`/** Live Language Coach -> Google Sheet sync.
 *  1. Open a new Google Sheet, then Extensions > Apps Script. Delete what is there and paste this whole file.
 *  2. Choose the function "setup" in the toolbar and press Run. Allow the permissions it asks for.
 *  The sheet then refreshes every 5 minutes. Use the "Live Language Coach" menu > "Sync now" to refresh at once.
 *  Keep this script private: it contains the key that lets it read your study records. */
const LLC_URL='${CONFIG.url}';
const LLC_KEY='${CONFIG.key}';
const LLC_SECRET='${sec}';
function setup(){ScriptApp.getProjectTriggers().forEach(function(t){ScriptApp.deleteTrigger(t)});ScriptApp.newTrigger('syncNow').timeBased().everyMinutes(5).create();syncNow();}
function onOpen(){SpreadsheetApp.getUi().createMenu('Live Language Coach').addItem('Sync now','syncNow').addToUi();}
function syncNow(){
  var res=UrlFetchApp.fetch(LLC_URL+'/rest/v1/rpc/sheet_export',{method:'post',contentType:'application/json',headers:{apikey:LLC_KEY,Authorization:'Bearer '+LLC_KEY},payload:JSON.stringify({p_secret:LLC_SECRET}),muteHttpExceptions:true});
  if(res.getResponseCode()!==200)throw new Error('Sync failed: '+res.getContentText());
  var data=JSON.parse(res.getContentText()),ss=SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(data).forEach(function(name){
    var rows=data[name]||[],sh=ss.getSheetByName(name)||ss.insertSheet(name);sh.clearContents();
    if(!rows.length){sh.getRange(1,1).setValue('No records yet');return;}
    var head=Object.keys(rows[0]),out=[head].concat(rows.map(function(r){return head.map(function(h){var v=r[h];return v===null||v===undefined?'':(typeof v==='object'?JSON.stringify(v):v);});}));
    sh.getRange(1,1,out.length,head.length).setValues(out);sh.getRange(1,1,1,head.length).setFontWeight('bold');sh.setFrozenRows(1);
  });
  var first=ss.getSheetByName('Sheet1');if(first&&first.getLastRow()===0&&ss.getSheets().length>1)ss.deleteSheet(first);
  ss.getSheets()[0].getRange(1,1).setNote('Last synced: '+new Date());
}
`;download("google_sheet_sync.gs",code);toast("Script downloaded. Follow the steps on this page.")}});
function sheetCard(){return `<div class="card stack" style="margin-top:16px"><div class="eyebrow">GOOGLE SHEET</div><h3>Automatic records in Google Sheets</h3><p class="muted">Attendance, test scores with confidence ratings, questionnaires and video-lecture quizzes are copied to a Google Sheet every five minutes, each on its own tab.</p>
 <ol class="steps"><li>Press <b>Download sync script</b>. The file already contains your project's private key.</li><li>Sign in to Google as the account that should own the sheet and create a new Google Sheet.</li><li>In the sheet choose <b>Extensions → Apps Script</b>, delete the sample code, paste the whole downloaded file and save.</li><li>Select the function <b>setup</b> and press <b>Run</b>. Approve the permissions once.</li></ol>
 <div class="actions"><button class="primary" data-act="sheetscript">Download sync script</button></div><p class="muted small">The sheet contains students' names and scores. Share it only with people on the research team.</p></div>`}

/* ---------- wire the new tabs in ---------- */
TABS.student=[["dash","Research"],["videos","Video lectures"],["practice","Practice"],["materials","Materials"],["attend","Attendance"],["forum","Discussion"],["live","Live class"],["feedback","Feedback"],["profile","Profile"]];
TABS.teacher=[["overview","Students"],["library","My library"],["control","Research control"],["attend","Attendance"],["forum","Discussion"],["videos","Video lectures"],["materials","Materials"],["live","Live class"]];
TABS.researcher=[["research","Analysis"],["library","My library"],["control","Research control"],["attend","Attendance"],["forum","Discussion"],["stats","Statistics"],["videos","Video lectures"],["materials","Materials"],["live","Live class"],["overview","Students"],["cohort","Cohort"],["setup","Setup"],["data","Data"]];
ROLE_NAME.teacher="Professor";
const _live0=TAB.live,_setup0=TAB.setup;
Object.assign(TAB,{dash:researchHome,practice:practiceTab,library:libraryTab,control:controlTab,attend:attendTab,forum:forumTab,stats:statsTab,
 live:async()=>{if(role()==="student"){if(R().view==="play")return playPage();return (await liveCard())+joinQuizCard()+joinPage(true)}return _live0()},
 setup:async()=>(await _setup0())+(role()==="researcher"?sheetCard():"")});
const _nav0=ACT.nav;ACT.nav=async(el,e)=>{if((RUN.busy()||(ED&&ED.dirty&&S.r?.view==="edit"))&&!confirm(RUN.busy()?"Leave this test? Your answers so far are kept on this device.":"Leave without saving your changes?")){e.preventDefault();return}stopTimers();S.r=null;RUN.st=null;LG=null;return _nav0(el,e)};
/* Analysis tab: include the research journey (pre-tests, interventions, post-test, anxiety questionnaire) */
const _realData0=realData;
realData=async function(){
 const base=await _realData0();
 const [acts,atts,sps]=await Promise.all([ok(db.from("activities").select("id,purpose,kind,skill,sort,created_at,status")),fetchAll("activity_attempts","student_id,activity_id,context,attempt_no,status,pct,score,detail",q=>q.eq("status","done")),ok(db.from("student_profiles").select("user_id,research_id,verified,year"))]);
 const A={};acts.forEach(a=>A[a.id]=a);const ivs=acts.filter(a=>a.purpose==="intervention").sort((a,b)=>(a.sort-b.sort)||(a.created_at<b.created_at?-1:1)).map(a=>a.id);
 const anx=acts.find(a=>a.purpose==="anxiety"&&a.status==="published")||acts.find(a=>a.purpose==="anxiety");
 const byRid={};base.rows.forEach(r=>byRid[r.rid]=r);
 sps.filter(s=>s.research_id&&s.verified).forEach(s=>{
  const mine=atts.filter(t=>t.student_id===s.user_id&&t.attempt_no===1);if(!mine.length)return;
  const r=byRid[s.research_id]||(byRid[s.research_id]={rid:s.research_id,year:s.year,pre:{},post:{},wk:{},weekly:[],anxPre:null,anxPost:null});
  mine.forEach(t=>{const a=A[t.activity_id];if(!a)return;
   if(a.purpose==="pretest"&&a.kind!=="questionnaire"&&a.skill)r.pre[a.skill]=+t.pct;
   if(a.purpose==="posttest"){const bs=t.detail?.by_skill||{};Object.entries(bs).forEach(([k,v])=>{if(v.n)r.post[k]=100*v.c/v.n});if(!Object.keys(bs).length&&a.skill)r.post[a.skill]=+t.pct}
   if(a.purpose==="intervention"){const i=ivs.indexOf(a.id);if(i>=0){r.weekly=r.weekly||[];r.weekly[i]=+t.pct}}
   if(anx&&a.id===anx.id){if(t.context==="pre")r.anxPre=+t.score;if(t.context==="post")r.anxPost=+t.score}});
  const n=Math.max(6,ivs.length,r.weekly.length);r.weekly=Array.from({length:n},(_,i)=>r.weekly[i]??null)});
 return {rows:Object.values(byRid),rub:base.rub}};

/* =====================================================================
   v7 MODULE: notification bell, staff password reset
   ===================================================================== */
const NB={items:[],unread:0,open:false,ch:null,t:null,uid:null,seen:null};
const NB_ICON={message:"✉",feedback:"✎",stage:"➜",activity:"✦",live:"●",video:"▶",material:"❏",student:"☺"};
function ago(t){const s=(Date.now()-new Date(t).getTime())/1000;if(s<60)return "just now";if(s<3600)return Math.floor(s/60)+" min ago";if(s<86400)return Math.floor(s/3600)+" h ago";return new Date(t).toLocaleDateString()}
function nbMount(){if($("bellBtn"))return;const acc=document.querySelector("header .account");if(!acc)return;
 const w=document.createElement("div");w.className="bellwrap";w.innerHTML=`<button id="bellBtn" type="button" class="bell" aria-label="Notifications" aria-expanded="false" aria-haspopup="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg><span id="bellCount" class="bellcount" hidden></span></button><div id="bellPanel" class="bellpanel" hidden role="dialog" aria-label="Notifications"></div>`;
 acc.insertBefore(w,acc.firstChild);
 $("bellBtn").onclick=e=>{e.stopPropagation();NB.open?nbClose():nbOpen()};
 document.addEventListener("click",e=>{if(NB.open&&!e.target.closest(".bellwrap"))nbClose()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&NB.open)nbClose()})}
function nbPaint(){const c=$("bellCount"),b=$("bellBtn");if(!c)return;c.hidden=!NB.unread;c.textContent=NB.unread>99?"99+":NB.unread;b.classList.toggle("has",NB.unread>0);
 b.setAttribute("aria-label",NB.unread?`Notifications, ${NB.unread} unread`:"Notifications");document.title=(NB.unread?`(${NB.unread}) `:"")+"Live Language Coach";
 if(NB.open)nbRenderPanel()}
function nbRenderPanel(){const p=$("bellPanel");if(!p)return;
 const perm=("Notification" in window)?Notification.permission:"unsupported";
 p.innerHTML=`<div class="bp-head"><b>Notifications</b>${NB.unread?'<button type="button" class="linklike" data-nb="readall">Mark all as read</button>':""}</div>
 <div class="bp-list">${NB.items.map(n=>`<button type="button" class="bp-item ${n.read_at?"":"unread"}" data-nb="open" data-id="${n.id}"><span class="bp-ic k-${esc(n.kind)}">${NB_ICON[n.kind]||"•"}</span><span class="bp-txt"><b>${esc(n.title)}</b>${n.body?`<span>${esc(n.body)}</span>`:""}<em>${ago(n.created_at)}</em></span></button>`).join("")||'<div class="bp-empty">You have no notifications yet.</div>'}</div>
 <div class="bp-foot">${perm==="default"?'<button type="button" class="soft" data-nb="perm">Also alert me on this device</button>':perm==="granted"?'<span class="muted small">Device alerts are on.</span>':""}${NB.items.some(n=>n.read_at)?'<button type="button" class="linklike" data-nb="clear">Clear read</button>':""}</div>`}
function nbOpen(){NB.open=true;$("bellPanel").hidden=false;$("bellBtn").setAttribute("aria-expanded","true");nbRenderPanel();nbPull()}
function nbClose(){NB.open=false;const p=$("bellPanel");if(p)p.hidden=true;$("bellBtn")?.setAttribute("aria-expanded","false")}
async function nbPull(){if(!user)return;try{const r=await db.rpc("inbox_summary");if(r.error)return;const d=r.data||{items:[],unread:0};
  const fresh=(d.items||[]).filter(n=>!n.read_at&&NB.seen&&!NB.seen.has(n.id));
  NB.items=d.items||[];NB.unread=d.unread||0;
  if(NB.seen&&fresh.length){$("bellBtn")?.classList.add("ring");setTimeout(()=>$("bellBtn")?.classList.remove("ring"),1200);
   if(document.hidden&&("Notification" in window)&&Notification.permission==="granted")fresh.slice(0,3).forEach(n=>{try{new Notification(n.title,{body:n.body||"",tag:n.id})}catch{}});
   else if(!NB.open)toast("🔔 "+fresh[0].title)}
  NB.seen=new Set(NB.items.map(n=>n.id));nbPaint()}catch(e){}}
function nbStart(){nbMount();if(NB.uid===user.id)return;nbStop();NB.uid=user.id;NB.seen=null;$("bellBtn").parentElement.hidden=false;nbPull();
 NB.t=setInterval(()=>{if(!document.hidden)nbPull()},45000);
 try{NB.ch=db.channel("inbox-"+user.id).on("postgres_changes",{event:"INSERT",schema:"public",table:"inbox",filter:"user_id=eq."+user.id},()=>nbPull()).subscribe()}catch{}}
function nbStop(){clearInterval(NB.t);NB.t=null;if(NB.ch){try{db.removeChannel(NB.ch)}catch{}NB.ch=null}NB.uid=null;NB.items=[];NB.unread=0;NB.seen=null;nbClose();const w=$("bellBtn")?.parentElement;if(w)w.hidden=true;document.title="Live Language Coach"}
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&user)nbPull()});
document.addEventListener("click",async e=>{const el=e.target.closest("[data-nb]");if(!el)return;e.preventDefault();const k=el.dataset.nb;
 if(k==="readall"){await db.rpc("inbox_read",{p_id:null});return nbPull()}
 if(k==="clear"){await db.rpc("inbox_clear");return nbPull()}
 if(k==="perm"){try{await Notification.requestPermission()}catch{}return nbRenderPanel()}
 if(k==="open"){const n=NB.items.find(x=>x.id===el.dataset.id);if(!n)return;if(!n.read_at){db.rpc("inbox_read",{p_id:n.id}).then(nbPull);n.read_at=new Date().toISOString();NB.unread=Math.max(0,NB.unread-1);nbPaint()}
  nbClose();const l=n.link||{};const tabs=(TABS[role()]||[]).map(t=>t[0]);if(l.tab&&tabs.includes(l.tab)){stopTimers();RUN.st=null;LG=null;S.page="app";S.tab=l.tab;S.r=l.r?{...l.r}:null;S.video=null;render();window.scrollTo(0,0)}}});
/* start or stop the bell whenever the page is drawn */
const _render1=render;render=async function(){if(user)nbStart();else if(NB.uid)nbStop();return _render1()};

/* staff: reset a student's password without email */
ACT.resetpw=async el=>{const def=el.dataset.pw||"";const pw=prompt(`New password for ${el.dataset.name}.\nThe default is last name + year of birth. You can type a different one (at least 6 characters).`,def);
 if(pw==null)return;if(pw.trim().length<6)return toast("The password must have at least 6 characters.");
 await rpc("staff_reset_password",{p_student:el.dataset.id,p_password:pw.trim()});toast(`Password reset. Tell ${el.dataset.name} to log in with: ${pw.trim()}`)};
TABS.teacher.push(["profile","Account"]);TABS.researcher.push(["profile","Account"]);

/* ---------- header: tabs that do not fit go into a "More" menu ---------- */
function fitNav(){const nav=$("nav");if(!nav)return;
 const old=nav.querySelector(".navmore");if(old){[...old.querySelectorAll(".more-menu button")].forEach(b=>nav.insertBefore(b,old));old.remove()}
 if(innerWidth<=800)return;
 if(nav.scrollWidth<=nav.clientWidth+1)return;
 const w=document.createElement("div");w.className="navmore";w.innerHTML='<button type="button" class="more-btn" aria-haspopup="true" aria-expanded="false">More ▾</button><div class="more-menu" role="menu"></div>';nav.appendChild(w);
 const menu=w.querySelector(".more-menu");let guard=0;
 while(nav.scrollWidth>nav.clientWidth+1&&guard++<40){const items=[...nav.children].filter(x=>x!==w);if(items.length<=1)break;menu.prepend(items[items.length-1])}
 if(menu.querySelector(".active"))w.querySelector(".more-btn").classList.add("active");
 w.querySelector(".more-btn").onclick=e=>{e.stopPropagation();const o=!w.classList.contains("open");w.classList.toggle("open",o);e.currentTarget.setAttribute("aria-expanded",String(o))}}
document.addEventListener("click",e=>{if(!e.target.closest(".navmore"))document.querySelectorAll(".navmore.open").forEach(x=>x.classList.remove("open"))});
const _buildNav0=buildNav;buildNav=function(){_buildNav0();fitNav()};
let _fitT;addEventListener("resize",()=>{clearTimeout(_fitT);_fitT=setTimeout(fitNav,120)});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitNav);

/* =====================================================================
   v9 MODULE: live activities (no login for participants), quiz from
   pasted text or uploaded files, timers, motion
   ===================================================================== */
PURPOSE.live="Live quiz";
const TIMES=[10,15,20,30,45,60,90,120,180,300];
const fmtSec=s=>s>=60?(s%60?`${Math.floor(s/60)} min ${s%60} s`:`${s/60} min`):`${s} s`;

/* ---------- reading uploaded files: CSV / TXT / Excel (.xlsx) / Word (.docx) ---------- */
let _jszipP=null;
function loadJSZip(){if(window.JSZip)return Promise.resolve(window.JSZip);
 return _jszipP||(_jszipP=new Promise((res,rej)=>{const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js";s.onload=()=>res(window.JSZip);s.onerror=()=>{_jszipP=null;rej(new Error("The file reader could not load. Check your internet connection, or copy and paste the text instead."))};document.head.appendChild(s)}))}
const xmlText=s=>String(s).replace(/<[^>]+>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCharCode(parseInt(n,16))).replace(/&amp;/g,"&");
async function docxText(buf){
 const z=await (await loadJSZip()).loadAsync(buf);let doc=await z.file("word/document.xml")?.async("string");if(!doc)throw new Error("This Word file could not be read.");
 const num=await z.file("word/numbering.xml")?.async("string")||"";
 const absFmt={},numAbs={};
 num.replace(/<w:abstractNum\b[^>]*w:abstractNumId="(\d+)"[^>]*>([\s\S]*?)<\/w:abstractNum>/g,(_,id,body)=>{absFmt[id]={};body.replace(/<w:lvl\b[^>]*w:ilvl="(\d+)"[^>]*>([\s\S]*?)<\/w:lvl>/g,(__,lv,lb)=>{absFmt[id][lv]=(lb.match(/<w:numFmt\b[^>]*w:val="([^"]+)"/)||[])[1]||"decimal"})});
 num.replace(/<w:num\b[^>]*w:numId="(\d+)"[^>]*>([\s\S]*?)<\/w:num>/g,(_,id,body)=>{const m=body.match(/<w:abstractNumId\b[^>]*w:val="(\d+)"/);if(m)numAbs[id]=m[1]});
 const sty=await z.file("word/styles.xml")?.async("string")||"",styNum={};
 sty.replace(/<w:style\b[^>]*w:styleId="([^"]+)"[^>]*>([\s\S]*?)<\/w:style>/g,(_,id,body)=>{const np=body.match(/<w:numPr>[\s\S]*?<\/w:numPr>/);if(np)styNum[id]=np[0]});
 const tables=[];doc=doc.replace(/<w:tbl>[\s\S]*?<\/w:tbl>/g,t=>{tables.push(t.split(/<\/w:tr>/).map(tr=>tr.split(/<\/w:tc>/).map(tc=>xmlText(tc.replace(/<\/w:p>/g," ")).trim()).filter((c,i,a)=>i<a.length-1||c)).filter(r=>r.some(Boolean)).map(r=>r.join("\t")).join("\n"));return `<w:p><w:t>@@TBL${tables.length-1}@@</w:t></w:p>`});
 const out=[];let qn=0,letter=0;
 for(const p of doc.split(/<\/w:p>/)){
  const t=xmlText(p.replace(/<w:tab\/>/g," ").replace(/<w:br\/>/g,"\n")).trim();
  const tm=t.match(/^@@TBL(\d+)@@$/);if(tm){out.push(tables[+tm[1]]);continue}
  let np=p.match(/<w:numPr>[\s\S]*?<\/w:numPr>/);if(!np){const ps=(p.match(/<w:pStyle\b[^>]*w:val="([^"]+)"/)||[])[1];if(ps&&styNum[ps])np=[styNum[ps]];else if(ps&&/^ListBullet/i.test(ps))np=['<w:numPr><w:ilvl w:val="0"/><w:numId w:val="__bullet"/></w:numPr>'];else if(ps&&/^ListNumber/i.test(ps))np=['<w:numPr><w:ilvl w:val="0"/><w:numId w:val="__decimal"/></w:numPr>']}
  if(np&&t){const il=(np[0].match(/w:ilvl\b[^>]*w:val="(\d+)"/)||[])[1]||"0",nid=(np[0].match(/w:numId\b[^>]*w:val="(\d+)"/)||[])[1];const fmt=nid==="__bullet"?"bullet":nid==="__decimal"?"decimal":(absFmt[numAbs[nid]]||{})[il]||"decimal";
   if(/letter|roman/i.test(fmt)||(fmt==="bullet"&&out.length&&letter<8)){out.push(`${"ABCDEFGH"[letter]||"D"}) ${t}`);letter++}
   else{qn++;letter=0;out.push(`${qn}. ${t}`)}}
  else if(t){out.push(t);if(!/^\(?[A-Da-d][).:]/.test(t))letter=0}}
 return out.join("\n")}
async function xlsxText(buf){
 const z=await (await loadJSZip()).loadAsync(buf);const ss=[];
 const sx=await z.file("xl/sharedStrings.xml")?.async("string");if(sx)sx.replace(/<si>([\s\S]*?)<\/si>/g,(_,b)=>{ss.push(xmlText(b.replace(/<rPh[\s\S]*?<\/rPh>/g,"")))});
 let path="xl/worksheets/sheet1.xml";
 try{const wb=await z.file("xl/workbook.xml").async("string"),rid=(wb.match(/<sheet\b[^>]*r:id="([^"]+)"/)||[])[1],rels=await z.file("xl/_rels/workbook.xml.rels").async("string");
  const rel=[...rels.matchAll(/<Relationship\b[^>]*>/g)].map(m=>m[0]).find(r=>r.includes(`Id="${rid}"`));const tg=rel&&(rel.match(/Target="([^"]+)"/)||[])[1];if(tg)path=tg.startsWith("/")?tg.slice(1):"xl/"+tg}catch{}
 const sh=await z.file(path)?.async("string");if(!sh)throw new Error("This Excel file has no readable sheet.");
 const rows=[];
 sh.replace(/<row\b[^>]*>([\s\S]*?)<\/row>/g,(_,rb)=>{const r=[];
  rb.replace(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g,(__,at,inner)=>{const ref=(at.match(/r="([A-Z]+)\d+"/)||[])[1];const col=ref?[...ref].reduce((a,ch)=>a*26+ch.charCodeAt(0)-64,0)-1:r.length;const t=(at.match(/\bt="([^"]+)"/)||[])[1];let v="";
   if(inner){if(t==="s"){const m=inner.match(/<v>([\s\S]*?)<\/v>/);v=m?ss[+m[1]]||"":""}else if(t==="inlineStr")v=xmlText((inner.match(/<is>([\s\S]*?)<\/is>/)||[])[1]||"");else{const m=inner.match(/<v>([\s\S]*?)<\/v>/);v=m?xmlText(m[1]):""}}
   r[col]=v});
  rows.push(Array.from(r,x=>(x??"").replace(/[\t\r\n]+/g," ").trim()))});
 return rows.filter(r=>r.some(Boolean)).map(r=>r.join("\t")).join("\n")}
async function readQuizFile(file){
 if(!file)return "";if(file.size>8e6)throw new Error("That file is larger than 8 MB.");
 const n=file.name.toLowerCase();
 if(n.endsWith(".docx"))return docxText(await file.arrayBuffer());
 if(n.endsWith(".xlsx"))return xlsxText(await file.arrayBuffer());
 if(/\.(doc|xls|ppt|pptx)$/.test(n))throw new Error("Please save the file as .docx (Word), .xlsx (Excel) or .csv and upload it again.");
 if(n.endsWith(".pdf"))throw new Error("PDF files cannot be read here. Open the PDF, copy the questions and paste them into the box.");
 return (await file.text()).replace(/^﻿/,"")}
/* the editor in My library accepts the same files */
CHG.edfile=async el=>{try{const t=await readQuizFile(el.files[0]);$("edImportTxt").value=t;toast("File loaded. Check the text, then press Import.")}catch(e){toast(e.message)}el.value=""};

/* ---------- staff: Live activities page ---------- */
const LTYPES=[["quiz","Live quiz","◉","Many questions, a timer and a leaderboard"],["poll","Live poll","▤","One question, choices shown as growing bars"],["word","Word cloud","✺","Words grow as more people send them"],["open","Open response","✎","Short written answers appear as they arrive"]];
function timerSel(name,val,none){return `<select name="${name}" ${name==="seconds"?"":""}>${none?`<option value="">No timer</option>`:""}${TIMES.map(t=>`<option value="${t}" ${+val===t?"selected":""}>${fmtSec(t)}</option>`).join("")}</select>`}
async function liveTabStaff(){
 const r=R();if(S.present)return presentPage(S.present);if(r.view==="host")return hostPage();
 const t=r.lt||"quiz";
 const [ss,lq]=await Promise.all([ok(db.from("sessions").select("id,title,code,activity_type,is_open,created_at").order("created_at",{ascending:false}).limit(20)),ok(db.from("activities").select("id,title,questions,created_at,purpose,kind").eq("purpose","live").order("created_at",{ascending:false}))]);
 const card=LTYPES.map(([k,n,i,d])=>`<button type="button" class="ltype ${t===k?"on":""}" data-act="ltype" data-k="${k}"><i>${i}</i><b>${n}</b><span>${d}</span></button>`).join("");
 let form;
 if(t==="quiz")form=`<form data-form="lqcreate" class="card stack lbuild"><div class="form-grid"><label>Quiz title<input name="title" required value="${esc(r.lqTitle||"")}" placeholder="e.g. Coastal words, Week 2"></label><label>Time for each question${timerSel("seconds",r.lqSec||20)}</label></div>
  <label>Paste your questions, or upload a file<textarea name="txt" id="lqText" rows="10" placeholder="1. What is a tide?&#10;A) Rise and fall of the sea&#10;B) A fish&#10;C) A boat&#10;D) A net&#10;Answer: A&#10;Explanation: Tides are the rise and fall of the sea.">${esc(r.lqText||"")}</textarea></label>
  <div class="upl"><label class="filebtn"><input type="file" accept=".csv,.txt,.tsv,.xlsx,.docx" data-chg="lqfile">⬆ Upload a file</label><span class="muted small">Word (.docx), Excel (.xlsx), CSV or text. Numbered questions with A) B) C) D) options and "Answer: B", or the template columns.</span><button type="button" class="linklike" data-act="lqtemplate">Download the template</button></div>
  ${r.lqErrs?.length?`<div class="notice"><b>${r.lqErrs.length} part(s) could not be read:</b><ul class="small">${r.lqErrs.slice(0,10).map(e=>`<li>${esc(e)}</li>`).join("")}</ul></div>`:""}
  <label class="check"><input type="checkbox" name="collect_profile"> Collect each participant's details (subject, year, gender, native place, rural/urban) and consent before they can join — not needed for every live quiz</label>
  <label class="check"><input type="checkbox" name="ask_confidence"> Ask participants to rate how confident they are (1–10) after each answer</label>
  <fieldset class="lg-modepick"><legend>How should the questions move?</legend><label class="check"><input type="radio" name="pace" value="self"> <span><b>Own pace</b> — every student starts from question 1, even if they join late</span></label><label class="check"><input type="radio" name="pace" value="together" checked> <span><b>Together</b> — you move the whole class to the next question</span></label></fieldset>
  <div class="actions" style="margin:0"><button type="button" class="soft" data-act="lqcheck">Check questions</button><button class="primary big-btn">Create and start ▶</button></div><div id="lqPreview">${r.lqPrev||""}</div></form>`;
 else form=`<form data-form="session" data-type="${t}" class="card stack lbuild"><div class="form-grid"><label>Title<input name="title" required placeholder="e.g. Warm-up"></label><label>Timer${timerSel("timer","",true)}</label></div>
  <label>${t==="word"?"Prompt (e.g. One word that describes the sea)":t==="open"?"Question":"Question"}<textarea name="prompt" rows="2" required></textarea></label>
  ${t==="poll"?`<label>Choices, one per line. Paste as many as you need, or upload a file<textarea name="options" id="pollOpts" rows="6" required placeholder="Listening&#10;Speaking&#10;Reading&#10;Writing" data-inp="pollcount"></textarea></label>
  <div class="upl"><label class="filebtn"><input type="file" accept=".csv,.txt,.tsv,.xlsx,.docx" data-chg="pollfile">⬆ Upload choices</label><span class="muted small" id="pollCount">Word (.docx), Excel (.xlsx), CSV or text: one choice per line or per cell. A first line ending in "?" (or starting with "Question:") becomes the question.</span><button type="button" class="linklike" data-act="polltemplate">Download the template</button></div>
  <label class="check"><input type="checkbox" name="show_results" checked> Show the live percentages on participants' phones after they vote</label>`:""}
  <label class="check"><input type="checkbox" name="collect_profile"> Collect each participant's details (subject, year, gender, native place, rural/urban) and consent before they can join — not needed for every live activity</label>
  <label class="check"><input type="checkbox" name="ask_confidence"> Ask participants to rate how confident they are (1–10) after they answer</label>
  <button class="primary big-btn">Create and start ▶</button></form>`;
 const lqList=lq.map(a=>`<div class="activity"><div class="badge">Quiz</div><div class="info"><b>${esc(a.title)}</b><small>${a.questions.length} questions · ${new Date(a.created_at).toLocaleDateString()}</small></div><button class="soft" data-act="lqhost" data-id="${a.id}">Start again</button><button class="soft" data-act="libedit2" data-id="${a.id}">Edit</button><button class="outline danger" data-act="lqdel" data-id="${a.id}">Delete</button></div>`).join("");
 const sList=ss.map(x=>`<div class="activity"><div class="badge">${({poll:"Poll",word:"Word cloud",quiz:"Question",open:"Open"})[x.activity_type]}</div><div class="info"><b>${esc(x.title)}</b><small>Code ${x.code} · ${x.is_open?"open":"closed"}</small></div><button class="soft" data-act="present" data-id="${x.id}">Open</button><button class="outline danger" data-act="sessdel" data-id="${x.id}">Delete</button></div>`).join("");
 return `${await liveCard()}<div class="head"><div class="eyebrow">LIVE CLASSROOM</div><h1>Live activities</h1><p>Participants go to <b>${esc(location.host)}</b>, open <b>Join live</b>, and type the six-digit code and their name. No login is needed.</p></div>
 <div class="ltypes">${card}</div>${form}
 <div class="card" style="margin-top:16px"><h3>Your live quizzes</h3>${lqList||'<p class="muted small">None yet.</p>'}</div>
 <div class="card" style="margin-top:16px"><h3>Polls, word clouds and open responses</h3>${sList||'<p class="muted small">None yet.</p>'}</div>`}
function lqParse(){const t=$("lqText")?.value||"";const r=parseImport(t,"quiz");return {t,...r}}
function lqPreview(out){return out.length?`<div class="lqprev"><b>${out.length} question${out.length>1?"s":""} ready</b><ol>${out.slice(0,50).map(x=>`<li>${esc(qLabel(x.q))} <span class="muted small">· ${typeName[x.q.type]}</span></li>`).join("")}</ol></div>`:""}
Object.assign(ACT,{
 ltype(el){setR({lt:el.dataset.k})},
 lqtemplate(){download("live_quiz_template.csv",templateCSV("quiz"))},
 lqcheck(){const f=document.querySelector("form[data-form=lqcreate]");const p=lqParse();Object.assign(R(),{lqText:p.t,lqErrs:p.errs,lqPrev:lqPreview(p.out),lqTitle:f.title.value,lqSec:f.seconds.value});render();toast(p.out.length?`${p.out.length} question(s) ready${p.errs.length?`, ${p.errs.length} part(s) skipped`:""}.`:"No questions found yet. Check the format or download the template.")},
 async lqhost(el){const sec=+(document.querySelector("form[data-form=lqcreate] [name=seconds]")?.value||20);const g=await hostLive({p_activity:el.dataset.id,p_seconds:sec,p_self_paced:false});LG={id:g.id,host:true};await lgPull();setR({view:"host",id:g.id})},
 async lqdel(el){if(!confirm("Delete this live quiz and its saved results?"))return;await ok(db.from("activities").delete().eq("id",el.dataset.id));toast("Deleted.");render()},
 async libedit2(el){await loadED(el.dataset.id);S.tab="library";S.r={view:"edit",id:el.dataset.id};render()},
 async sessdel(el){if(!confirm("Delete this activity and its responses?"))return;await ok(db.from("sessions").delete().eq("id",el.dataset.id));toast("Deleted.");render()},
 presentback(){S.present=null;stopTimers();if(channel){db.removeChannel(channel);channel=null}render()},
 async pause(el){await ok(db.from("sessions").update({is_open:el.dataset.open==="1"}).eq("id",el.dataset.id));render()},
 async sessend(el){await ok(db.from("sessions").update({is_open:false,ends_at:new Date().toISOString()}).eq("id",el.dataset.id));toast("Activity closed.");render()},
 async sessrestart(el){const sec=+($("sessTimer")?.value||0);await ok(db.from("sessions").update({is_open:true,timer_seconds:sec||null,ends_at:sec?new Date(Date.now()+sec*1000).toISOString():null}).eq("id",el.dataset.id));toast(sec?`Timer started: ${fmtSec(sec)}.`:"Open with no timer.");render()}});
CHG.lqfile=async el=>{try{const t=await readQuizFile(el.files[0]);const f=document.querySelector("form[data-form=lqcreate]");const p=parseImport(t,"quiz");
  Object.assign(R(),{lqText:t,lqErrs:p.errs,lqPrev:lqPreview(p.out),lqTitle:f.title.value||el.files[0].name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," "),lqSec:f.seconds.value});render();
  toast(p.out.length?`${p.out.length} question(s) found in the file${p.errs.length?`, ${p.errs.length} part(s) skipped`:""}. Press Create and start.`:"No questions were found in that file. Check the format or download the template.")}catch(e){toast(e.message)}el.value=""};
CHG.lgtimer=async el=>{await rpc("live_set_timer",{p_game:LG.id,p_seconds:+el.value});await lgPull();toast(`Time per question: ${fmtSec(+el.value)}.`)};
Object.assign(FORM,{
 async lqcreate(f,d){const p=parseImport(d.get("txt"),"quiz");if(!p.out.length)return toast(p.errs[0]?`No questions found. ${p.errs[0]}`:"Paste questions or upload a file first.");
  if(p.errs.length&&!confirm(`${p.out.length} question(s) are ready and ${p.errs.length} part(s) could not be read. Start with the ${p.out.length} question(s)?`))return;
  const id=await rpc("save_activity",{p_id:null,p_data:{kind:"quiz",purpose:"live",title:String(d.get("title")).trim(),questions:p.out.map(x=>x.q),status:"published"},p_keys:p.out.map(x=>x.k)});
  const g=await hostLive({p_activity:id,p_seconds:+d.get("seconds")||20,p_collect_profile:d.get("collect_profile")==="on",p_ask_confidence:d.get("ask_confidence")==="on",p_self_paced:d.get("pace")==="self"});LG={id:g.id,host:true};await lgPull();S.r={view:"host",id:g.id};render();window.scrollTo(0,0)},
 async session(f,d){const type=f.dataset.type||d.get("type"),opts=type==="poll"?pollChoices(String(d.get("options")||"")).opts:String(d.get("options")||"").split("\n").map(x=>x.trim()).filter(Boolean);
  if((type==="poll"||type==="quiz")&&opts.length<2)return toast("Add at least two choices.");if(new Set(opts).size!==opts.length)return toast("Each choice must be different.");
  const sec=+d.get("timer")||0;let code,n=0;do{code=String(Math.floor(100000+Math.random()*900000));n++}while(n<6&&((await db.from("sessions").select("id").eq("code",code)).data||[]).length);
  const r=await ok(db.from("sessions").insert({owner_id:user.id,code,title:d.get("title"),prompt:d.get("prompt"),activity_type:type,options:(type==="poll"||type==="quiz")?opts:[],correct_answer:type==="quiz"?opts[0]:null,anonymous_allowed:true,show_results:type==="poll"?d.get("show_results")==="on":true,is_open:true,timer_seconds:sec||null,ends_at:sec?new Date(Date.now()+sec*1000).toISOString():null,collect_profile:d.get("collect_profile")==="on",ask_confidence:d.get("ask_confidence")==="on"}).select("id").single());
  S.present=r.id;render();window.scrollTo(0,0)}});

/* ---------- presenter screen with motion ---------- */
let PR=null; /* {s, words:{}, open:0, total} */
async function presentPage(id){
 const s=await ok(db.from("sessions").select("*").eq("id",id).single());sessionNow=s;PR={s,words:{},shown:0,total:-1,ended:false};
 stopTimers();S.after=()=>{refreshResults();every(2500,refreshResults);every(250,prTick);if(channel)db.removeChannel(channel);try{channel=db.channel("r-"+id).on("postgres_changes",{event:"INSERT",schema:"public",table:"responses",filter:`session_id=eq.${id}`},refreshResults).subscribe()}catch{}};
 const kind=({poll:"LIVE POLL",word:"WORD CLOUD",quiz:"QUESTION",open:"OPEN RESPONSE"})[s.activity_type];
 return `<div class="pres"><div class="pres-head"><div><div class="eyebrow">${kind}</div><h1>${esc(s.title)}</h1><p class="pres-q">${esc(s.prompt)}</p></div>
 <div class="joinbox"><span>Join at <b>${esc(location.host)}</b> → Join live</span><div class="code">${s.code.split("").map((c,i)=>`<i style="--i:${i}">${c}</i>`).join("")}</div></div></div>
 <div class="pres-bar"><div class="ptimer ${s.ends_at?"":"hidden"}"><b id="prSec">–</b><div class="tbar"><i id="prBar"></i></div></div><span class="pcount"><span class="livedot" aria-hidden="true"></span><b id="total">0</b> responses</span>${s.activity_type==="poll"?`<button class="chip ${s.show_results?"c-Completed":"c-Locked"}" data-act="showres" data-id="${s.id}" data-on="${s.show_results?1:0}" title="Show the live percentages on participants' phones">Phones: results ${s.show_results?"on":"off"}</button>`:""}
  <span class="chip ${s.is_open?"c-Completed":"c-Locked"}" id="prState">${s.is_open?"Open":"Closed"}</span>
  <div class="actions" style="margin:0"><select id="sessTimer" aria-label="Timer"><option value="">No timer</option>${TIMES.map(t=>`<option value="${t}" ${s.timer_seconds===t?"selected":""}>${fmtSec(t)}</option>`).join("")}</select><button class="soft" data-act="sessrestart" data-id="${s.id}">${s.is_open?"Restart timer":"Reopen"}</button>${s.is_open?`<button class="soft" data-act="pause" data-id="${s.id}" data-open="0">Pause</button><button class="outline danger" data-act="sessend" data-id="${s.id}">End</button>`:""}<button class="soft" data-act="csv" data-id="${s.id}">CSV</button><button class="outline" data-act="presentback">Back</button></div></div>
 <div class="card pres-stage"><div id="results" class="res-${s.activity_type}"><div class="waiting"><span></span><span></span><span></span><p>Waiting for responses…</p></div></div></div></div>`}
function prTick(){if(!PR||!PR.s.ends_at)return;const left=Math.max(0,(new Date(PR.s.ends_at).getTime()-Date.now())/1000),tot=PR.s.timer_seconds||60;const b=$("prBar"),t=$("prSec");if(!b)return;
 b.style.width=Math.min(100,100*left/tot)+"%";b.parentElement.classList.toggle("warn",left<=5);t.textContent=left>0?Math.ceil(left)+"s":"Time's up";
 if(left<=0&&PR.s.is_open&&!PR.ended){PR.ended=true;db.from("sessions").update({is_open:false}).eq("id",PR.s.id).then(()=>{PR.s.is_open=false;const st=$("prState");if(st){st.textContent="Closed";st.className="chip c-Locked"}})}}
const WCOL=["#5a4fcf","#0f9d90","#d9822b","#cf4f7a","#3d7be0","#7b5bd6","#139a6b"];
async function refreshResults(){
 const s=sessionNow;const box=$("results");if(!s||!box||!PR)return;
 const rows=(await db.from("responses").select("participant_name,answer,created_at").eq("session_id",s.id).order("created_at")).data||[];
 const tot=$("total");if(tot&&rows.length!==PR.total){tot.textContent=rows.length;tot.classList.remove("bump");void tot.offsetWidth;tot.classList.add("bump");PR.total=rows.length}
 if(!rows.length)return;box.querySelector(".waiting")?.remove();
 if(s.activity_type==="poll"||s.activity_type==="quiz"){
  const c={};rows.forEach(r=>c[r.answer]=(c[r.answer]||0)+1);const max=Math.max(...s.options.map(o=>c[o]||0));
  if(!box.querySelector(".pollbars"))box.innerHTML=`<div class="pollbars">${s.options.map((o,i)=>`<div class="pb" style="--i:${i}" data-o="${esc(o)}"><div class="pb-top"><b>${esc(o)}${s.correct_answer===o?" ✓":""}</b><span class="pb-n">0</span></div><div class="pb-track"><i class="c${i%4}"><em class="pb-pct">0%</em></i></div></div>`).join("")}</div>`;
  [...box.querySelectorAll(".pb")].forEach((el,i)=>{const o=s.options[i],n=c[o]||0,p=Math.round(100*n/rows.length);el.querySelector("i").style.width=Math.max(p,n?3:0)+"%";countTo(el,n,p);el.classList.toggle("lead",n===max&&n>0)})}
 else if(s.activity_type==="word"){
  const w={};rows.forEach(r=>r.answer.toLowerCase().split(/[\s,.;!?]+/).filter(x=>x.length>1).forEach(x=>w[x]=(w[x]||0)+1));
  let cl=box.querySelector(".cloud2");if(!cl){box.innerHTML='<div class="cloud2"></div>';cl=box.querySelector(".cloud2")}
  const max=Math.max(...Object.values(w));
  Object.entries(w).sort((a,b)=>b[1]-a[1]).slice(0,80).forEach(([k,n],i)=>{let el=PR.words[k];
   if(!el){el=document.createElement("b");el.textContent=k;el.style.color=WCOL[Object.keys(PR.words).length%WCOL.length];el.style.setProperty("--r",((k.length*37)%11-5)+"deg");el.className="wpop";PR.words[k]=el;cl.appendChild(el)}
   const size=16+Math.round(44*Math.sqrt(n/max));if(el.dataset.n!==String(n)){el.style.fontSize=size+"px";el.dataset.n=n;if(n>1){el.classList.remove("wgrow");void el.offsetWidth;el.classList.add("wgrow")}}el.title=`${n} ${n>1?"people":"person"}`})}
 else{let ls=box.querySelector(".resp");if(!ls){box.innerHTML='<div class="resp"></div>';ls=box.querySelector(".resp");PR.shown=0}
  rows.slice(PR.shown).forEach(r=>{const d=document.createElement("div");d.className="rcard";d.innerHTML=`<p>${esc(r.answer)}</p><small>${esc(r.participant_name||"Anonymous")}</small>`;ls.prepend(d)});PR.shown=rows.length}}

/* ---------- optional guest-details form: subject, year, gender, native place, rural/urban, consent ---------- */
let DEMO=null; /* {go} */
function demoForm(name,go){DEMO={go};const box=$("participant");if(!box)return;
 box.innerHTML=`<div class="pcard-in"><div class="eyebrow">A FEW DETAILS</div><p class="muted small">The presenter has asked for a few details before you can join${name?", "+esc(name.split(" ")[0]):""}. This is for the research record only.</p>
 <form data-form="demo" class="stack">
  <label>Subject / stream<input name="subject" required placeholder="e.g. Tamil, English"></label>
  <label>Study level<select name="study_level" required><option value="">Select</option><option value="UG">UG</option><option value="PG">PG</option></select></label>
  <label>Year<select name="year" required><option value="">Select</option><option value="1">I Year</option><option value="2">II Year</option><option value="3">III Year</option></select></label>
  <label>Gender<select name="gender" required><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></label>
  <label>Native place<input name="native" required></label>
  <label>Rural / Urban<select name="locality" required><option value="">Select</option><option value="Rural">Rural</option><option value="Urban">Urban</option></select></label>
  <label class="check"><input type="checkbox" name="consent" required> I agree to take part and to share these details for this activity.</label>
  <button class="primary">Continue</button>
 </form></div>`;
 setTimeout(()=>box.scrollIntoView({behavior:"smooth",block:"start"}),60)}
Object.assign(FORM,{demo(f,d){const det={subject:String(d.get("subject")||"").trim(),study_level:d.get("study_level")||null,year:+d.get("year")||null,gender:String(d.get("gender")||"").trim(),native:String(d.get("native")||"").trim(),locality:d.get("locality")||null,consent:d.get("consent")==="on"};
 if(!det.subject||!det.study_level||!det.year||!det.gender||!det.native||!det.locality||!det.consent)return toast("Please fill in every field and tick the consent box.");
 DEMO?.go(det)}});
/* ---------- a simple 1-10 confidence tap before the answer is actually sent ---------- */
function confPicker(onPick){const box=$("participant");if(!box)return;
 box.innerHTML=`<div class="pcard-in"><div class="eyebrow">ONE MORE THING</div><div class="question">How confident are you in your answer?</div>
 <div class="conf10">${Array.from({length:10},(_,i)=>`<button type="button" class="confbtn" data-act="confpick" data-v="${i+1}">${i+1}</button>`).join("")}</div>
 <p class="muted small">1 = not at all confident · 10 = very confident</p></div>`;
 CONFPICK=onPick;setTimeout(()=>box.scrollIntoView({behavior:"smooth",block:"start"}),60)}
let CONFPICK=null;
ACT.confpick=el=>{const v=+el.dataset.v;const cb=CONFPICK;CONFPICK=null;cb?.(v)};
/* ---------- participants (no login needed) ---------- */
let PART=null;
function remember(n){try{sessionStorage.setItem("llc_name",n)}catch{}}
ACT.lookup=async()=>{
 const code=($("joinCode")?.value||"").trim();if(!/^\d{6}$/.test(code))return toast("Type the six-digit code.");
 const name=($("displayName")?.value||"").trim();if(name)remember(name);
 if(await joinLiveQuiz(code))return;
 const r=await db.rpc("get_public_session",{join_code:code});if(r.error||!r.data?.length)return toast("No live activity found with that code. Check the code with your teacher.");
 const x=r.data[0];if(!x.session_open)return toast("This activity is closed.");
 if(!user&&name.length<2){$("displayName")?.focus();return toast("Type your name, then press Join.")}
 const begin=det=>{PART={code,x,name:user?(name||profile?.full_name||""):name,skew:new Date(x.server_now).getTime()-Date.now(),sent:0,det};sessionNow={code,activity_type:x.activity_type};partRender()};
 if(x.collect_profile)return demoForm(name,begin);
 begin(null)};
function partRender(){const P=PART,x=P.x,box=$("participant");if(!box)return;const opt=["poll","quiz"].includes(x.activity_type);
 box.innerHTML=`<div class="pcard-in"><div class="row"><div class="eyebrow">${esc(x.session_title)}</div>${x.ends_at?`<span class="ptimer small"><b id="paSec"></b></span>`:""}</div>${x.ends_at?'<div class="tbar"><i id="paBar"></i></div>':""}
 <div class="question">${esc(x.session_prompt)}</div>
 <div id="answers">${opt?x.activity_options.map((o,i)=>`<button type="button" class="answer" style="--i:${i}" data-act="pickans" data-a="${esc(o)}">${esc(o)}</button>`).join(""):`<textarea id="free" maxlength="${x.activity_type==="word"?"60":"600"}" placeholder="${x.activity_type==="word"?"Type a word or two":"Type your answer"}"></textarea>`}</div>
 <button class="primary sendbtn" data-act="send">Send</button><p class="muted small">Answering as <b>${esc(P.name||"Guest")}</b></p></div>`;
 setTimeout(()=>box.scrollIntoView({behavior:"smooth",block:"start"}),60);
 stopTimers();if(x.ends_at){const tot=Math.max(5,(new Date(x.ends_at).getTime()-(Date.now()+P.skew))/1000);every(250,()=>{const l=Math.max(0,(new Date(x.ends_at).getTime()-(Date.now()+P.skew))/1000),b=$("paBar"),t=$("paSec");if(!b){stopTimers();return}b.style.width=Math.min(100,100*l/tot)+"%";b.parentElement.classList.toggle("warn",l<=5);t.textContent=l>0?Math.ceil(l)+" s left":"Time's up";if(l<=0){document.querySelectorAll("#participant .answer,#participant .sendbtn,#free").forEach(e=>e.disabled=true)}})}}
ACT.pickans=el=>{document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));el.classList.add("selected");$("answers").dataset.a=el.dataset.a};
async function sendAnswer(ans,conf){const P=PART;
 const args={join_code:P.code,answer_text:ans,display_name:P.name||null};
 if(P.det)Object.assign(args,{p_subject:P.det.subject,p_study_level:P.det.study_level,p_year:P.det.year,p_locality:P.det.locality,p_gender:P.det.gender,p_native:P.det.native,p_consent:P.det.consent});
 if(conf!=null)args.p_confidence=conf;
 const r=await db.rpc("submit_session_response",args);if(r.error)return toast(r.error.message);P.sent++;
 const again=P.x.activity_type!=="poll"&&P.x.activity_type!=="quiz";stopTimers();
 if(P.x.activity_type==="poll"){const live=await pollLive(P,ans);if(live)return}
 $("participant").innerHTML=`<div class="sent"><svg viewBox="0 0 52 52" class="tick" aria-hidden="true"><circle cx="26" cy="26" r="24"/><path d="M15 27l7 7 15-16"/></svg><h3>Sent! Thank you${P.name?", "+esc(P.name.split(" ")[0]):""}.</h3><p class="muted">Your answer is on the presenter's screen.</p>${again?'<button class="soft" data-act="sendmore">Send another answer</button>':""}<button class="outline" data-act="joinother">Join another code</button></div>`}
ACT.send=async()=>{const P=PART;if(!P)return;const a=$("answers"),ans=a?.dataset.a||$("free")?.value.trim();if(!ans)return toast("Choose or type an answer.");
 if(P.x.ask_confidence)return confPicker(v=>sendAnswer(ans,v));
 await sendAnswer(ans,null)};
ACT.sendmore=()=>partRender();
ACT.joinother=()=>{PART=null;stopTimers();const p=$("participant");if(p)p.innerHTML="";const c=$("joinCode");if(c){c.value="";c.focus()}};
/* fill the name the participant used before */
const _joinPage0=joinPage;joinPage=function(inApp){let h=_joinPage0(inApp);let n="";try{n=sessionStorage.getItem("llc_name")||""}catch{};if(n&&!profile)h=h.replace('id="displayName" value=""',`id="displayName" value="${esc(n)}"`);
 const sv=lgSaved();if(sv)h=`<div class="card lg-resume"><div><div class="eyebrow">YOUR QUIZ IS STILL ON</div><h3>${esc(sv.title||"Live quiz")}</h3><p class="muted small">Code <b>${esc(sv.code||"")}</b>${sv.name?` · playing as <b>${esc(sv.name)}</b>`:""}</p></div><button type="button" class="primary big-btn" data-act="lgresume">Resume quiz →</button></div>`+h;
 return h};

/* ---------- live quiz host: timer control + motion ---------- */
const _hostPage0=hostPage;hostPage=async function(){let h=await _hostPage0();const g=LG?.game;
 if(g&&(g.phase==="lobby"||g.phase==="reveal"||(g.phase==="question"&&g.self_paced)))h=h.replace('<div class="actions">',`<label class="lgtimer">Time per question <select data-chg="lgtimer">${TIMES.map(t=>`<option value="${t}" ${g.seconds===t?"selected":""}>${fmtSec(t)}</option>`).join("")}</select></label><div class="actions">`);
 return h};

/* ---------- tab wiring ---------- */
TAB.live=async()=>{if(role()==="student"){if(R().view==="play")return playPage();return (await liveCard())+joinPage(true)}return liveTabStaff()};
const _nav2=ACT.nav;ACT.nav=async(el,e)=>{S.present=null;PR=null;return _nav2(el,e)};

/* ---------- v10: live percentages ---------- */
/* numbers count up smoothly to the new value */
function countTo(el,n,p){const lab=el.querySelector(".pb-n"),pc=el.querySelector(".pb-pct");const from=+(el.dataset.p||0);el.dataset.p=p;
 const fin=()=>{lab.textContent=`${n} · ${p}%`;if(pc)pc.textContent=p+"%"};
 if(from===p||matchMedia("(prefers-reduced-motion: reduce)").matches)return fin();
 const t0=performance.now(),dur=700;const step=t=>{const k=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-k,3),v=Math.round(from+(p-from)*e);lab.textContent=`${n} · ${v}%`;if(pc)pc.textContent=v+"%";if(k<1)requestAnimationFrame(step);else fin()};requestAnimationFrame(step)}
ACT.showres=async el=>{const on=el.dataset.on!=="1";await ok(db.from("sessions").update({show_results:on}).eq("id",el.dataset.id));sessionNow.show_results=on;PR.s.show_results=on;
 el.dataset.on=on?1:0;el.textContent=`Phones: results ${on?"on":"off"}`;el.className=`chip ${on?"c-Completed":"c-Locked"}`;toast(on?"Participants now see the live percentages after voting.":"Participants no longer see the results.")};
/* participant view after voting: the same bars, updating every 2 seconds */
async function pollLive(P,mine){const r=await db.rpc("get_poll_results",{join_code:P.code});if(r.error||!r.data)return false;
 const box=$("participant");const opts=r.data.options||P.x.activity_options;
 box.innerHTML=`<div class="sent pollsent"><svg viewBox="0 0 52 52" class="tick small" aria-hidden="true"><circle cx="26" cy="26" r="24"/><path d="M15 27l7 7 15-16"/></svg><h3>Vote sent${P.name?", "+esc(P.name.split(" ")[0]):""}!</h3>
 <div class="row livehead"><span class="livedot" aria-hidden="true"></span><b>Live results</b><span class="muted small" id="plTotal"></span></div>
 <div class="pollbars mini">${opts.map((o,i)=>`<div class="pb ${o===mine?"mine":""}" style="--i:${i}"><div class="pb-top"><b>${esc(o)}${o===mine?' <span class="yours">your vote</span>':""}</b><span class="pb-n">0 · 0%</span></div><div class="pb-track"><i class="c${i%4}"><em class="pb-pct">0%</em></i></div></div>`).join("")}</div>
 <p class="muted small" id="plState"></p><button class="outline" data-act="joinother">Join another code</button></div>`;
 const paint=d=>{if(!d){stopTimers();const st=$("plState");if(st)st.textContent="The presenter has hidden the results.";return}
  const tot=d.total||0,c=d.counts||{},max=Math.max(0,...opts.map(o=>c[o]||0));const t=$("plTotal");if(!t){stopTimers();return}t.textContent=`· ${tot} vote${tot===1?"":"s"}`;
  [...box.querySelectorAll(".pb")].forEach((el,i)=>{const n=c[opts[i]]||0,p=tot?Math.round(100*n/tot):0;el.querySelector("i").style.width=Math.max(p,n?3:0)+"%";countTo(el,n,p);el.classList.toggle("lead",n===max&&n>0)});
  const st=$("plState");if(st)st.textContent=d.open?"Updating live as people vote.":"Voting has closed. These are the final results."};
 paint(r.data);stopTimers();every(2000,async()=>{const q=await db.rpc("get_poll_results",{join_code:P.code});if(!q.error)paint(q.data)});return true}

/* ---------- v10: poll choices from a paste or a file (any number) ---------- */
function pollChoices(text,isCsv){
 const rows=isCsv?csvRows(String(text).replace(/\r/g,""),","):String(text).replace(/\r/g,"").split("\n").map(l=>l.split("\t"));
 let prompt="";const opts=[],seen=new Set();
 const clean=x=>String(x||"").replace(/^\s*(?:[-•*·▪●◦]\s*|\(?[A-Za-z]\)\s*|[A-Za-z][.)]\s+|\(?\d{1,3}[.)]\s+)/,"").replace(/\s+/g," ").trim();
 rows.forEach((cells,ri)=>cells.forEach((raw,ci)=>{let v=String(raw||"").trim();if(!v)return;
  const qm=v.match(/^(?:q(?:uestion)?|prompt|poll)\s*[:.-]\s*(.+)$/i);
  if(qm){prompt=qm[1].trim();return}
  if(!prompt&&!opts.length&&ci===0&&/\?\s*$/.test(v)){prompt=v.replace(/^\s*\d{1,3}[.)]\s*/,"");return}
  if(/^(choices?|options?|opinions?|answers?)\s*:?$/i.test(v))return;
  v=clean(v).slice(0,200);const k=v.toLowerCase();if(!v||seen.has(k))return;seen.add(k);opts.push(v)}));
 return {prompt,opts}}
ACT.polltemplate=()=>download("live_poll_template.csv","Question: Which skill do you find hardest?\nListening\nSpeaking\nReading\nWriting\nGrammar\nVocabulary\n");
function pollCount(el){const n=pollChoices(el.value).opts.length,c=$("pollCount");if(c)c.innerHTML=`<b>${n} choice${n===1?"":"s"} ready.</b> Repeated lines are counted once.`};
CHG.pollfile=async el=>{const file=el.files[0];try{const t=await readQuizFile(file);const r=pollChoices(t,/\.csv$/i.test(file.name));const f=el.closest("form");
  if(!r.opts.length)throw new Error("No choices were found in that file. Put one choice per line, or download the template.");
  f.options.value=r.opts.join("\n");if(r.prompt)f.prompt.value=r.prompt;if(!f.title.value)f.title.value=file.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ");
  pollCount(f.options);toast(`${r.opts.length} choice(s) loaded${r.prompt?" and the question":""}. Check them, then press Create and start.`)}catch(e){toast(e.message)}el.value=""};
document.addEventListener("input",e=>{const el=e.target.closest("[data-inp=pollcount]");if(el)pollCount(el)});

/* =====================================================================
   v10 MODULE: sky mood (time of day + live weather), movable / hideable
   Ask Coach button
   ===================================================================== */
const MOOD={key:"llc_mood",home:{lat:10.7905,lon:78.7047,label:"Tiruchirappalli"},w:null,t:null,
 get(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch{return{}}},
 set(o){const v={...this.get(),...o};try{localStorage.setItem(this.key,JSON.stringify(v))}catch{}return v}};
const WX_NAME={clear:"Clear",cloud:"Cloudy",fog:"Misty",rain:"Rain",storm:"Thunderstorm"};
const TOD_NAME={dawn:"Sunrise",day:"Day",dusk:"Sunset",night:"Night"};
function wxKind(code){if(code==null)return "clear";if(code>=95)return "storm";if((code>=51&&code<=67)||(code>=80&&code<=82)||(code>=71&&code<=77)||code===85||code===86)return "rain";if(code===45||code===48)return "fog";if(code>=2)return "cloud";return "clear"}
function todOf(w){const now=Date.now()/1000;
 if(w&&w.sunrise&&w.sunset){const r=w.sunrise,s=w.sunset;if(now>=r-2400&&now<r+3600)return "dawn";if(now>=r+3600&&now<s-3600)return "day";if(now>=s-3600&&now<s+2400)return "dusk";return "night"}
 const h=new Date().getHours()+new Date().getMinutes()/60;return h>=5.3&&h<7?"dawn":h>=7&&h<17.3?"day":h>=17.3&&h<19?"dusk":"night"}
async function wxFetch(force){const st=MOOD.get(),loc=st.loc||MOOD.home;
 try{const c=JSON.parse(localStorage.getItem("llc_wx")||"null");if(!force&&c&&c.lat===loc.lat&&c.lon===loc.lon&&Date.now()-c.at<15*60e3)return MOOD.w=c}catch{}
 try{const u=`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=weather_code,is_day&daily=sunrise,sunset&forecast_days=1&timeformat=unixtime&timezone=auto`;
  const j=await (await fetch(u)).json();const w={lat:loc.lat,lon:loc.lon,at:Date.now(),code:j.current?.weather_code,sunrise:j.daily?.sunrise?.[0],sunset:j.daily?.sunset?.[0]};
  try{localStorage.setItem("llc_wx",JSON.stringify(w))}catch{}return MOOD.w=w}catch{return MOOD.w=MOOD.w||null}}
/* a preview link such as ?mood=night-storm shows any mood */
function moodPreview(){const m=(new URLSearchParams(location.search).get("mood")||"").toLowerCase().split("-");return TOD_NAME[m[0]]?{tod:m[0],wx:WX_NAME[m[1]]?m[1]:"clear"}:null}
function moodApply(){const st=MOOD.get(),on=st.on!==false,b=document.body;
 [...b.classList].filter(c=>/^(m-|w-)/.test(c)).forEach(c=>b.classList.remove(c));b.classList.toggle("mood-on",on);
 const pv=moodPreview(),tod=pv?pv.tod:todOf(MOOD.w),wx=pv?pv.wx:wxKind(MOOD.w?.code);
 if(on){b.classList.add("m-"+tod,"w-"+wx)}MOOD.now={tod,wx};moodSky();moodBtnPaint()}
function moodSky(){const a=document.querySelector(".ambient-bg");if(!a||a.querySelector(".sky"))return;
 a.insertAdjacentHTML("afterbegin",`<div class="sky"></div><div class="sky-tint"></div><div class="stars"></div><div class="orb"></div><div class="cloudband c1"></div><div class="cloudband c2"></div><div class="fogband"></div><div class="rainwrap"><div class="rain r1"></div><div class="rain r2"></div></div><div class="flash"></div>`)}
const MOOD_IC={dawn:"🌅",day:"☀️",dusk:"🌇",night:"🌙",cloud:"⛅",fog:"🌫️",rain:"🌧️",storm:"⛈️"};
function moodIcon(){const n=MOOD.now||{tod:todOf(null),wx:"clear"};if(MOOD.get().on===false)return "◐";return n.wx!=="clear"?(n.wx==="cloud"&&n.tod==="night"?"☁️":MOOD_IC[n.wx]):MOOD_IC[n.tod]}
function moodBtnPaint(){const b=$("moodBtn");if(!b)return;b.textContent=moodIcon();const n=MOOD.now||{};b.setAttribute("aria-label",`Sky mood: ${MOOD.get().on===false?"off":`${TOD_NAME[n.tod]||""}, ${WX_NAME[n.wx]||""}`}. Open settings`);if(MOOD.open)moodPanel()}
function moodMount(){if($("moodBtn"))return;const acc=document.querySelector("header .account");if(!acc)return;
 const w=document.createElement("div");w.className="moodwrap";w.innerHTML=`<button id="moodBtn" type="button" class="moodbtn" aria-haspopup="true" aria-expanded="false"></button><div id="moodPanel" class="moodpanel" role="dialog" aria-label="Look and feel" hidden></div>`;
 acc.insertBefore(w,acc.firstChild);
 $("moodBtn").onclick=e=>{e.stopPropagation();MOOD.open=!MOOD.open;$("moodBtn").setAttribute("aria-expanded",MOOD.open);$("moodPanel").hidden=!MOOD.open;if(MOOD.open)moodPanel()};
 document.addEventListener("click",e=>{if(MOOD.open&&!e.target.closest(".moodwrap")){MOOD.open=false;$("moodPanel").hidden=true;$("moodBtn").setAttribute("aria-expanded","false")}});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&MOOD.open){MOOD.open=false;$("moodPanel").hidden=true}});
 $("moodPanel").addEventListener("click",moodAct);moodBtnPaint()}
function moodPanel(){const p=$("moodPanel");if(!p)return;const st=MOOD.get(),on=st.on!==false,n=MOOD.now||{},loc=st.loc||MOOD.home,cb=CB.get();
 p.innerHTML=`<b class="mp-title">Look and feel</b>
 <div class="mp-row"><div><b>Sky mood</b><span>The colours follow the time of day and the live weather.</span></div><button type="button" class="mswitch ${on?"on":""}" data-m="toggle" role="switch" aria-checked="${on}" aria-label="Sky mood"><i></i></button></div>
 ${on?`<div class="mp-now">${moodIcon()} <b>${TOD_NAME[n.tod]||""}</b> · ${WX_NAME[n.wx]||"Clear"} <span>in ${esc(loc.label)}</span></div>
 <button type="button" class="linklike" data-m="loc">${st.loc?"Update my location":"Use my location for the weather"}</button>${st.loc?' · <button type="button" class="linklike" data-m="home">Use Tiruchirappalli</button>':""}`:`<p class="muted small" style="margin:6px 0 0">Sky mood is off. The site uses its plain colours.</p>`}
 <div class="mp-row"><div><b>Ask Coach button</b><span>${cb.hidden?"Hidden.":"Drag it anywhere on the screen."}</span></div><button type="button" class="mswitch ${cb.hidden?"":"on"}" data-m="coach" role="switch" aria-checked="${!cb.hidden}" aria-label="Show the Ask Coach button"><i></i></button></div>
 ${!cb.hidden&&(cb.side||cb.y!=null)?'<button type="button" class="linklike" data-m="coachreset">Put it back in the corner</button>':""}
 <p class="mp-src">Weather from Open-Meteo, updated every 15 minutes.</p>`}
async function moodAct(e){const b=e.target.closest("[data-m]");if(!b)return;e.stopPropagation();const k=b.dataset.m;
 if(k==="toggle"){MOOD.set({on:MOOD.get().on===false});moodApply();toast(MOOD.get().on===false?"Sky mood off.":"Sky mood on.")}
 if(k==="loc"){if(!navigator.geolocation)return toast("This browser cannot share a location.");toast("Allow location to get your local weather…");
  navigator.geolocation.getCurrentPosition(async p=>{MOOD.set({loc:{lat:+p.coords.latitude.toFixed(2),lon:+p.coords.longitude.toFixed(2),label:"your area"}});await wxFetch(true);moodApply();toast("Weather now follows your area.")},()=>toast("Location was not shared. Using Tiruchirappalli."),{timeout:10000,maximumAge:3600e3})}
 if(k==="home"){MOOD.set({loc:null});await wxFetch(true);moodApply()}
 if(k==="coach"){const h=!CB.get().hidden;CB.set({hidden:h});cbApply();if(h)toast(`Ask Coach hidden. Bring it back from the ${moodIcon()} button at the top.`)}
 if(k==="coachreset"){CB.set({side:null,y:null});cbApply()}
 moodPanel()}
async function moodStart(){moodSky();moodApply();moodMount();await wxFetch();moodApply();
 setInterval(moodApply,60e3);setInterval(async()=>{if(!document.hidden){await wxFetch();moodApply()}},15*60e3);
 document.addEventListener("visibilitychange",async()=>{if(!document.hidden){await wxFetch();moodApply()}})}

/* ---------- Ask Coach: drag it anywhere, snap to the nearest side, or hide it ---------- */
const CB={key:"llc_coach",get(){try{return JSON.parse(localStorage.getItem(this.key)||"{}")}catch{return{}}},set(o){const v={...this.get(),...o};try{localStorage.setItem(this.key,JSON.stringify(v))}catch{}return v}};
function cbApply(){const w=$("chatbotWidget");if(!w)return;const c=CB.get();w.classList.toggle("cb-hidden",!!c.hidden);
 if(c.hidden){const p=$("chatbotPanel");if(p?.classList.contains("is-open"))$("chatbotClose")?.click()}
 if(c.side&&c.y!=null){const h=w.querySelector(".chatbot-toggle-wrap")?.offsetHeight||52,m=innerWidth<=600?12:22,top=Math.min(innerHeight-h-m,Math.max(70,c.y*innerHeight));
  w.style.top=top+"px";w.style.bottom="auto";w.style.left=c.side==="l"?m+"px":"auto";w.style.right=c.side==="r"?m+"px":"auto";w.classList.toggle("at-left",c.side==="l");w.classList.toggle("at-top",top<innerHeight/2)}
 else{w.style.top=w.style.left=w.style.right=w.style.bottom="";w.classList.remove("at-left","at-top")}}
function cbStart(){const w=$("chatbotWidget"),wrap=w?.querySelector(".chatbot-toggle-wrap"),btn=$("chatbotToggle");if(!w||!wrap||!btn||wrap.dataset.drag)return;wrap.dataset.drag=1;
 const x=document.createElement("button");x.type="button";x.className="cb-hide";x.setAttribute("aria-label","Hide the Ask Coach button");x.textContent="×";wrap.appendChild(x);
 x.addEventListener("click",e=>{e.stopPropagation();CB.set({hidden:true});cbApply();toast(`Ask Coach hidden. Bring it back from the ${moodIcon()} button at the top.`)});
 let d=null,moved=false;
 btn.addEventListener("pointerdown",e=>{if(e.button!==0)return;const r=w.getBoundingClientRect();d={x:e.clientX,y:e.clientY,l:r.left,t:r.top,id:e.pointerId};moved=false});
 addEventListener("pointermove",e=>{if(!d||e.pointerId!==d.id)return;const dx=e.clientX-d.x,dy=e.clientY-d.y;
  if(!moved&&Math.hypot(dx,dy)<8)return;if(!moved){moved=true;try{btn.setPointerCapture(d.id)}catch{}w.classList.add("cb-drag");if($("chatbotPanel").classList.contains("is-open"))$("chatbotClose").click()}
  const r=w.getBoundingClientRect();w.style.left=Math.min(innerWidth-r.width-4,Math.max(4,d.l+dx))+"px";w.style.top=Math.min(innerHeight-r.height-4,Math.max(4,d.t+dy))+"px";w.style.right=w.style.bottom="auto"});
 const end=e=>{if(!d)return;if(moved){const r=w.getBoundingClientRect();CB.set({side:r.left+r.width/2<innerWidth/2?"l":"r",y:r.top/innerHeight});w.classList.remove("cb-drag");w._dragEnd=Date.now();cbApply();setTimeout(()=>{moved=false},400)}d=null};
 addEventListener("pointerup",end);addEventListener("pointercancel",end);
 btn.addEventListener("click",e=>{if(moved||Date.now()-(w._dragEnd||0)<350){e.stopImmediatePropagation();e.preventDefault();moved=false}},true);
 /* on phones the open chat fills the screen, so the round button steps aside */
 new MutationObserver(()=>w.classList.toggle("cb-open",$("chatbotPanel").classList.contains("is-open"))).observe($("chatbotPanel"),{attributes:true,attributeFilter:["class"]});
 addEventListener("resize",cbApply);cbApply()}
(function(){const go=()=>{try{moodStart()}catch(e){console.warn(e)}try{cbStart()}catch(e){console.warn(e)}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",go):go()})();
/* phones: when signed in, "Sign out" lives in the menu so the site name fits */
(function(){const go=()=>{const h=document.querySelector("header"),a=$("authBtn"),n=$("nav");if(!h||!a||!n)return;
 const mq=matchMedia("(max-width:600px)");const sync=()=>{const inn=/out/i.test(a.textContent);h.classList.toggle("signed-in",inn);let s=n.querySelector(".nav-signout");
  if(inn&&!mq.matches){s?.remove();return}
  if(inn&&!s){s=document.createElement("button");s.type="button";s.className="nav-signout";s.textContent="Sign out";s.onclick=()=>a.click();n.appendChild(s)}else if(!inn&&s)s.remove()};
 new MutationObserver(sync).observe(a,{childList:true,characterData:true,subtree:true});new MutationObserver(()=>{if(!n.querySelector(".nav-signout"))sync()}).observe(n,{childList:true});mq.addEventListener?.("change",sync);sync()};
 document.readyState==="loading"?document.addEventListener("DOMContentLoaded",go):go()})();

(async function init(){
 if(!db){$("app").innerHTML='<div class="notice">Could not load the Supabase library. Check your internet connection.</div>';return}
 try{await loadUser()}catch(e){console.error(e)}
 db.auth.onAuthStateChange(async(ev)=>{if(ev==="SIGNED_OUT"){user=null;profile=null;sp=null;buildNav()}});
 if(user){S={page:"app",tab:homeTab()};const sv=lgSaved();if(sv&&!sv.guest&&role()==="student")S={page:"app",tab:"live",r:{view:"play",id:sv.id}}}
 else{if(lgSaved()?.guest)S={page:"play"}}
 if(RECOVERY)S={page:"newpass"};
 else if(AUTH_ERR){history.replaceState(null,"",location.pathname);setTimeout(()=>toast(/expired|invalid/i.test(AUTH_ERR)?"That link has expired. Please ask for a new password reset link.":AUTH_ERR),300)}
 BOOTED=true;render();
})();

/* Social links (footer + contact page) */
function socialLinks(){
 const li=`<a class="social li" href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>LinkedIn</a>`;
 const wa=CONTACT.whatsapp?`<a class="social wa" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7 1.8 2.8 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.2-1.2-.2-.2-.5-.3z"/></svg>WhatsApp</a>`:"";
 return li+wa}
