"use strict";
/* LIVE LANGUAGE COACH  v2  - Supabase-backed. Replace item banks / portfolio text below with your own. */
const CONFIG={url:"https://avgvvalqhpykrrteioxa.supabase.co",key:"sb_publishable_ctSsHTh3o8KmtsNWxxJX-g_AFZUEpgI"};
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
const CONTACT={email:"mariakaisaraaron@gmail.com",linkedin:"https://www.linkedin.com/in/maria-kaisar-aaron-r-8b3539151",place:"Tiruchirappalli, Tamil Nadu, India"};
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
const ROLE_NAME={student:"Student",teacher:"Teacher",researcher:"Researcher",guide:"Research guide"};

const db=window.supabase?window.supabase.createClient(CONFIG.url,CONFIG.key):null;
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
  else if(S.page==="register")a.innerHTML=registerPage();
  else if(S.page==="join")a.innerHTML=joinPage();
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
 return `<div class="hero"><div><div class="eyebrow">ENGLISH LANGUAGE LEARNING &amp; RESEARCH PLATFORM</div><h1>Learn, practise and grow across six English skills.</h1><p>Interactive lessons, teacher-guided progression, weekly assessment and personal feedback, built for undergraduate learners.</p><div class="actions"><button class="primary" data-act="nav" data-k="register">Register as a student</button><button class="soft" data-act="nav" data-k="login">Student login</button><button class="soft" data-act="nav" data-k="framework">Explore 6 skills →</button></div></div><div class="orb"><svg viewBox="0 0 180 180" width="150" height="150" fill="none"><circle class="orbit-slow" cx="90" cy="90" r="72" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="8 6"/><circle class="orbit-reverse" cx="90" cy="90" r="50" stroke="rgba(94,234,212,0.55)" stroke-width="1.5"/><path class="wave-float" d="M46 94 Q68 74 90 94 T134 94" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg></div></div>

 <div class="live-telemetry" aria-label="Live date, time, weather and location">
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
 if(sec==="contact")return back+`<div class="head"><div class="eyebrow">CONTACT</div><h2>Maria Kaisar Aaron R</h2></div><div class="card stack"><p><b>Name:</b> Maria Kaisar Aaron R</p><p><b>Gmail:</b> <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p><p><b>LinkedIn:</b> <a href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer">${CONTACT.linkedin}</a></p><p><b>Institution:</b> St. Joseph's College (Autonomous), ${esc(CONTACT.place)}</p></div>`;
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
 <form data-form="staff" data-role="${r}" class="stack"><label>Email<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="primary">Log in as ${P.label.toLowerCase()}</button></form>
 <details><summary class="muted">First time here? Activate your invited account</summary><form data-form="staffnew" data-role="${r}" class="stack" style="margin-top:12px"><label>Full name<input name="full_name" required></label><label>Invited email address<input name="email" type="email" required></label><label>Create a password (min 8 characters)<input name="password" type="password" minlength="8" required autocomplete="new-password"></label><button class="soft">Activate account</button><p class="muted small">Only works for the email address the researcher invited for this role.</p></form></details>
 <p class="muted small">Student? <a href="#" data-act="nav" data-k="login">Use the student portal</a> · <a href="#" data-act="nav" data-k="home">Back to home</a></p></div>`;
}
const loginPage=()=>`<div class="card auth-card view-enter stack" style="max-width:440px;margin:40px auto"><div class="auth-head"><div><div class="eyebrow">STUDENT PORTAL</div><h2 style="margin:4px 0">Student login</h2></div><svg viewBox="0 0 56 56" width="46" height="46" fill="none"><circle class="orbit-slow" cx="28" cy="28" r="22" stroke="#5C59E8" stroke-width="1.5" stroke-dasharray="5 4"/><path class="wave-float" d="M16 30 Q22 22 28 30 T40 30" stroke="#14B8A6" stroke-width="2.2" stroke-linecap="round"/></svg></div><form data-form="login" class="stack"><label>Email<input name="email" type="email" required autocomplete="username"></label><label>Password<input name="password" type="password" required autocomplete="current-password"></label><button class="primary">Log in</button></form><p class="muted small">New student? <a href="#" data-act="nav" data-k="register">Register</a>. Professors, the researcher and the guide have their own portals: <a href="#" data-act="nav" data-k="staff-teacher">Professor</a> · <a href="#" data-act="nav" data-k="staff-researcher">Researcher</a>.</p></div>`;
function registerPage(){
 const f=(n,l,t="text",x="")=>`<label>${l}<input name="${n}" type="${t}" ${x}></label>`;
 return `<div class="card stack" style="max-width:720px;margin:30px auto"><h2>Student registration</h2><form data-form="register" class="stack">
 <div class="form-grid">${f("full_name","Full name","text","required")}${f("student_no","Student ID number","text","required")}${f("mobile","Mobile number (10 digits)","tel",'required pattern="[6-9][0-9]{9}"')}${f("email","Email address","email","required")}${f("age","Age","number",'required min="16" max="40"')}${f("place","Place / district","text","required")}
 <label>Gender<select name="gender" required><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></label>
 <label>UG classification<select name="year" required><option value="">Select</option><option value="1">Year I</option><option value="2">Year II</option><option value="3">Year III</option></select></label>
 ${f("college","College / Department","text","required")}${f("password","Password (min 8 characters)","password",'required minlength="8" autocomplete="new-password"')}</div>
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
  const meta={};["full_name","student_no","mobile","age","place","gender","year","college"].forEach(k=>meta[k]=String(d.get(k)||"").trim());
  meta.consent_research=!!d.get("consent_research");meta.consent_email=!!d.get("consent_email");meta.consent_whatsapp=!!d.get("consent_whatsapp");
  if(!/^[6-9]\d{9}$/.test(meta.mobile))return toast("Enter a valid 10-digit mobile number.");
  const r=await db.auth.signUp({email:String(d.get("email")).trim(),password:d.get("password"),options:{data:meta}});
  if(r.error)return toast(r.error.message);
  if(!r.data.session){$("app").innerHTML='<div class="card" style="max-width:520px;margin:40px auto"><h2>Check your email</h2><p>We sent a confirmation link. After confirming, log in. The researcher will verify your details and give you a research ID.</p></div>';return}
  await loadUser();go("app","dash");toast("Welcome!")},
};

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
   if(!unlockedFor(k))btn='<span class="muted small">Waiting for your teacher to unlock</span>';
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
  rec={};toast(row.status==="pending"?"Submitted. Your teacher will score it.":"Submitted. Feedback is ready.");if(row.status==="scored"){const good=row.pct>=60;playFeedbackSound(good);showQuoteModal(good?"good":"low",`${Math.round(row.pct)}% in ${skill}`);}S.test=null;go("app",row.status==="pending"?"dash":"feedback")},
 async anx(f,d){
  const items=ANX.map((_,i)=>+d.get("a"+i));
  const total=items.reduce((s,v,i)=>s+(ANX_REVERSE.includes(i)?6-v:v),0);
  const r=await db.from("questionnaire_responses").insert({student_id:user.id,phase:settings.phase,items,total});
  if(r.error)return toast(r.error.code==="23505"?"Already submitted.":r.error.message);
  toast("Questionnaire submitted.");go("app","dash")},
});
const anxPage=()=>`<div class="head"><div class="eyebrow">QUESTIONNAIRE · ${settings.phase==="post"?"POST":"PRE"}</div><h1>English language anxiety</h1><p>Choose the option that fits you best (1 = strongly disagree, 5 = strongly agree).</p></div><div class="notice">Item wording here is a placeholder. Replace it with your validated instrument and its official scoring before collecting data.</div><form data-form="anx" class="card stack" style="margin-top:12px">${ANX.map((t,i)=>`<div class="qbox"><b>${i+1}. ${esc(t)}</b><div class="likert">${[1,2,3,4,5].map(v=>`<label><input type="radio" name="a${i}" value="${v}" required>${v}</label>`).join("")}</div></div>`).join("")}<button class="primary">Submit</button></form>`;

async function materialsTab(){
 const m=await ok(db.from("materials").select("*").order("created_at",{ascending:false}));
 const staff=["teacher","researcher"].includes(role());
 if(role()==="student"){await loadMine()}
 const vis=m.filter(x=>role()!=="student"||settings.phase!=="intervention"||unlockedFor(x.skill));
 const filter=S.skill;
 const list=vis.filter(x=>!filter||x.skill===filter);
 return `<div class="head"><div class="eyebrow">LIBRARY</div><h1>Learning materials</h1>${filter?`<p>Showing ${filter}. <a href="#" data-act="mat" data-k="">Show all</a></p>`:""}</div>
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
 return `<div class="head"><div class="eyebrow">FEEDBACK</div><h1>Your feedback</h1></div>${mine.fb.map(x=>`<div class="card" style="margin-bottom:12px"><div class="row"><h3>${x.skill}</h3><span class="badge">${esc(x.band||"")}</span></div><p>${esc(x.body)}</p>${x.recommendation?`<p><b>Next step:</b> ${esc(x.recommendation)}</p>`:""}${x.teacher_remark?`<p><b>Teacher remark:</b> ${esc(x.teacher_remark)}</p>`:""}<small class="muted">${new Date(x.created_at).toLocaleDateString()}</small></div>`).join("")||'<div class="empty">No feedback yet. Complete a test to see it here.</div>'}`;
}
async function profileTab(){
 if(!sp)return '<div class="empty">No student profile.</div>';
 return `<div class="head"><h1>My profile</h1></div><div class="card stack"><div class="form-grid"><div><b>Name</b><br>${esc(profile.full_name)}</div><div><b>Email</b><br>${esc(profile.email)}</div><div><b>Mobile</b><br>${esc(profile.mobile)}</div><div><b>Year</b><br>${sp.year||"-"}</div><div><b>College</b><br>${esc(sp.college)}</div><div><b>Research ID</b><br>${esc(sp.research_id||"pending verification")}</div></div>
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
 <div class="card" style="margin-top:14px;overflow:auto"><table><thead><tr><th>Name</th><th>Year</th>${SK.map(k=>`<th>${k.slice(0,4)}</th>`).join("")}<th></th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.s.full_name)}</td><td>${r.s.sp.year||"-"}</td>${r.v.map(x=>`<td class="${x!=null&&x<50?"low":""}">${pct1(x)}</td>`).join("")}<td>${r.low?'<span class="badge warn">needs practice</span>':""}${r.pending?'<span class="badge">to assess</span>':""}</td></tr>`).join("")||'<tr><td colspan="9" class="muted">No students yet.</td></tr>'}</tbody></table></div>`;
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
 return `${inApp?'<div class="head"><div class="eyebrow">LIVE CLASSROOM</div><h1>Join a live activity</h1></div>':'<div class="head"><div class="eyebrow">AUDIENCE</div><h1>Join the conversation</h1><p>Enter the six-digit code from your presenter.</p></div>'}<div class="card stack" style="max-width:560px"><label>Session code<input id="joinCode" inputmode="numeric" maxlength="6" placeholder="482913" style="font:800 28px Manrope;letter-spacing:7px;text-align:center"></label><label>Your name<input id="displayName" value="${esc(profile?.full_name||"")}" placeholder="Optional for guests"></label><button class="primary" data-act="lookup">Find session</button><div id="participant"></div></div>`;
}
Object.assign(FORM,{});

/* ------------------------------------------------------------- researcher / guide */
async function cohortTab(){
 const [st,tch,asg]=await Promise.all([roster(),ok(db.from("profiles").select("id,full_name,email,role").in("role",["teacher"])),ok(db.from("teacher_assignments").select("*"))]);
 const can=role()==="researcher";
 return `<div class="head"><div class="eyebrow">COHORT · IDENTITY RECORDS</div><h1>${st.length} student(s)</h1><p>Verify a student to assign a research ID. Identity details stay on this screen; exports use research IDs only.</p></div>
 <div class="card" style="overflow:auto"><table><thead><tr><th>Name</th><th>Mobile</th><th>Email</th><th>Year</th><th>College</th><th>Student no.</th><th>Research ID</th><th>Consent</th><th>Teacher</th></tr></thead><tbody>${st.map(s=>{const a=asg.find(x=>x.student_id===s.id);return `<tr><td>${esc(s.full_name)}</td><td>${esc(s.mobile)}</td><td>${esc(s.email)}</td><td>${s.sp.year||"-"}</td><td>${esc(s.sp.college)}</td><td>${esc(s.sp.student_no)}</td><td>${s.sp.research_id?esc(s.sp.research_id):(can?`<button class="soft" data-act="verify" data-id="${s.id}">Verify</button>`:"-")}</td><td>${s.sp.consent_research?"✓":"✗"}</td><td>${can?`<select data-chg="assign" data-id="${s.id}"><option value="">-</option>${tch.map(t=>`<option value="${t.id}" ${a?.teacher_id===t.id?"selected":""}>${esc(t.full_name||t.email)}</option>`).join("")}</select>`:(tch.find(t=>t.id===a?.teacher_id)?.full_name||"-")}</td></tr>`}).join("")||'<tr><td colspan="9" class="muted">No registrations yet.</td></tr>'}</tbody></table></div>
 ${can?`<form data-form="role" class="card stack" style="margin-top:14px"><b>Grant a role to a registered account</b><div class="form-grid"><label>Account email<input name="email" type="email" required></label><label>Role<select name="role"><option value="teacher">Teacher</option><option value="guide">Research guide</option><option value="student">Student</option></select></label></div><button class="primary">Set role</button></form>`:""}`;
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
 <div class="chartgrid">${card("1 · Pre-test vs post-test (overall)",barChart(["Overall"],[{name:"Pre",vals:[mean(pairsOverall.map(p=>p[0]))],color:PRE},{name:"Post",vals:[mean(pairsOverall.map(p=>p[1]))],color:POST}]))}
 ${card("2 · Six-skill comparison",barChart(SK,[{name:"Pre",vals:skillStats.map(s=>s.a),color:PRE},{name:"Post",vals:skillStats.map(s=>s.b),color:POST}]))}
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
 try{await loadYT()}catch{holder.outerHTML='<div class="notice">The video could not be loaded. Check your internet connection or ask your teacher.</div>';return}
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
  return `<div class="card livecard"><div class="eyebrow">LIVE CLASS</div><h3>No class is live right now</h3><p class="muted small">This page updates by itself. When your teacher starts the class, a Join button appears here and on your dashboard.</p></div>`}
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
  const code=$("joinCode").value.trim();const r=await db.rpc("get_public_session",{join_code:code});if(r.error||!r.data?.length)return toast("Session not found.");
  const x=r.data[0];if(!x.session_open)return toast("This session is paused.");
  if(!user&&!x.anonymous_allowed){toast("Please log in to join this session.");return go("login")}
  sessionNow={code,activity_type:x.activity_type};const opt=["poll","quiz"].includes(x.activity_type);
  $("participant").innerHTML=`<div class="eyebrow">${esc(x.session_title)}</div><div class="question">${esc(x.session_prompt)}</div><div id="answers">${opt?x.activity_options.map(o=>`<button class="answer" data-act="pickans" data-a="${esc(o)}">${esc(o)}</button>`).join(""):`<textarea id="free" placeholder="Your response"></textarea>`}</div><button class="primary" data-act="send" style="width:100%">Submit</button>`},
 pickans(el){document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));el.classList.add("selected");$("answers").dataset.a=el.dataset.a},
 async send(){const a=$("answers"),ans=a.dataset.a||$("free")?.value.trim();if(!ans)return toast("Choose or type a response.");const r=await db.rpc("submit_session_response",{join_code:sessionNow.code,answer_text:ans,display_name:$("displayName").value.trim()||null});if(r.error)return toast(r.error.message);$("participant").innerHTML='<div class="notice">✓ Response submitted. Thank you!</div>'},
 present(el){S.present=el.dataset.id;render()},
 back(){S.present=null;if(channel){db.removeChannel(channel);channel=null}render()},
 async pause(el){await ok(db.from("sessions").update({is_open:el.dataset.open==="1"}).eq("id",el.dataset.id));render()},
 async csv(el){const s=await ok(db.from("sessions").select("title,code").eq("id",el.dataset.id).single());const d=await ok(db.from("responses").select("participant_name,answer,is_anonymous,created_at").eq("session_id",el.dataset.id));download(`${s.title}_${s.code}.csv`,[csvLine(["Participant","Answer","Anonymous","Submitted"]),...d.map(r=>csvLine([r.participant_name||"Anonymous",r.answer,r.is_anonymous?"Yes":"No",r.created_at]))].join("\n"))},
};
const CHG={unlockStu(el){S.unlockStu=el.value;render()},async assign(el){await ok(db.rpc("assign_teacher",{p_student:el.dataset.id,p_teacher:el.value||null}));toast("Teacher assigned.")}};

document.addEventListener("click",async e=>{const el=e.target.closest("[data-act]");if(!el)return;try{await ACT[el.dataset.act]?.(el,e)}catch(err){console.error(err)}});
document.addEventListener("submit",async e=>{const f=e.target.closest("[data-form]");if(!f)return;e.preventDefault();const b=f.querySelector("button:not([type=button])");if(b)b.disabled=true;try{await FORM[f.dataset.form](f,new FormData(f))}catch(err){console.error(err)}finally{if(b)b.disabled=false}});
document.addEventListener("change",async e=>{const el=e.target.closest("[data-chg]");if(!el)return;try{await CHG[el.dataset.chg](el)}catch(err){console.error(err)}});
$("authBtn").onclick=async()=>{if(user){stopPlayer();unwatchLive();await db.auth.signOut();user=null;profile=null;sp=null;mine=null;S={page:"home"};render()}else go("portals")};
$("homeLink").onclick=e=>{e.preventDefault();user?go("app",homeTab()):go("home")};

(async function init(){
 if(!db){$("app").innerHTML='<div class="notice">Could not load the Supabase library. Check your internet connection.</div>';return}
 try{await loadUser()}catch(e){console.error(e)}
 db.auth.onAuthStateChange(async(ev)=>{if(ev==="SIGNED_OUT"){user=null;profile=null;sp=null;buildNav()}});
 if(user)S={page:"app",tab:homeTab()};
 render();
})();
