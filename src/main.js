import './styles.css';

const projects = [
  {
    num:'01', kind:'AI / DATA', title:'Crop Yield Prediction & Price Analysis',
    desc:'ML pipeline built on 242K+ crop records and 17 features to understand regional, seasonal and crop-level productivity patterns.',
    metrics:[['242K+','records'],['17','features'],['R² 0.679','RF yield model'],['0.893','AUC']],
    tech:['Python','Pandas','NumPy','Scikit-learn','EDA','Regression','Classification'],
    href:'https://github.com/Devpratapsingh204', color:'green', visual:'crop'
  },
  {
    num:'02', kind:'AI / REAL-TIME', title:'AI Interview Simulator',
    desc:'AI-powered mock interview experience combining LLaMA 3.3 70B, speech-to-text and webcam facial analysis with persistent session reports.',
    metrics:[['LLaMA 3.3','70B'],['2','real-time modalities'],['SQLite','history'],['Flask','backend']],
    tech:['Python','Flask','LLaMA 3.3 70B','OpenRouter','MediaPipe','Web Speech API','SQLite'],
    href:'https://github.com/Devpratapsingh204/AI_interview_simulator', color:'cyan', visual:'ai'
  },
  {
    num:'03', kind:'BUSINESS INTELLIGENCE', title:'SaaS Analytics Dashboard',
    desc:'Interactive Power BI reporting layer for revenue, profit, margin, orders and average deal size, backed by cleaned Excel data.',
    metrics:[['$2.30M','revenue'],['$286.40K','profit'],['5K','orders'],['12%','profit margin']],
    tech:['Power BI','Excel','DAX','Power Query','Data Visualization'],
    href:'https://github.com/Devpratapsingh204', color:'amber', visual:'bi'
  }
];

const skills = {
  'Languages':['Python','C++','C','Java','JavaScript','SQL'],
  'AI / ML & GenAI':['Pandas','NumPy','Scikit-learn','Matplotlib','Machine Learning','Computer Vision','LLaMA','OpenRouter API','Groq API','MediaPipe','Web Speech API'],
  'Web Development':['Flask','REST APIs','HTML5','CSS3','JavaScript'],
  'Data & Tools':['DBMS','Power BI','Excel','Git','GitHub'],
  'Strengths':['Problem-Solving','Team Collaboration','Project Management','Adaptability']
};

const certs = [
 ['cert-yuvaintern-datascience.png','Virtual Data Science Explorer Intern','YuvaIntern / NSDC','Aug 20, 2026'],
 ['cert-oracle-ai-db.png','Oracle AI Database Certified Foundations Associate','Oracle University','Aug 14, 2026'],
 ['cert-cipherschools-dsa.png','Data Structures Algorithms Training','CipherSchools','Aug 2026'],
 ['cert-cipherschools-genai.png','Generative AI Essentials','CipherSchools','Aug 2026'],
 ['cert-iamneo-oop.png','Object Oriented Programming','neoColab / LPU','Jun 16, 2026'],
 ['cert-iamneo-dsa.png','Data Structure and Algorithm','neoColab / LPU','Jun 16, 2026'],
 ['cert-iamneo-java.png','Programming in JAVA','neoColab / LPU','May 21, 2026'],
 ['cert-infosys-dbms.png','Database Management System Part - 1','Infosys Springboard','Jul 23, 2026'],
 ['cert-infosys-cpp.png','Programming Using C++','Infosys Springboard','Aug 18, 2025'],
 ['cert-tata-forage.png','Data Visualisation: Empowering Business with Effective Insights','TATA / Forage','Sep 18, 2025'],
 ['cert-udemy-ai-agents.png','A Practical Intro to AI Agents and Agentic AI','Udemy','Jul 25, 2026'],
 ['cert-wns-cybersmart.png','CyberSmart Awareness Internship','WNS Cares Foundation','Jul–Aug 2025']
];

function projectVisual(type){
  if(type==='crop') return `<div class="visual crop-visual"><div class="chart-lines"><i></i><i></i><i></i><i></i></div><div class="crop-chart"><span style="height:35%"></span><span style="height:52%"></span><span style="height:43%"></span><span style="height:70%"></span><span style="height:58%"></span><span style="height:82%"></span><span style="height:67%"></span><span style="height:94%"></span></div><div class="visual-label">YIELD / REGION</div><div class="visual-badge">242K+</div></div>`;
  if(type==='ai') return `<div class="visual ai-visual"><div class="face-orb"><div class="eye e1"></div><div class="eye e2"></div><div class="mouth"></div></div><div class="wave"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div><div class="score"><small>CONFIDENCE</small><strong>86</strong><span>/ 100</span></div><div class="visual-label">LIVE INTERVIEW SIGNALS</div></div>`;
  return `<div class="visual bi-visual"><div class="kpi-row"><span>$2.30M<small>Revenue</small></span><span>$286K<small>Profit</small></span><span>5K<small>Orders</small></span></div><div class="bars"><i style="height:38%"></i><i style="height:60%"></i><i style="height:49%"></i><i style="height:76%"></i><i style="height:68%"></i><i style="height:91%"></i></div><div class="visual-label">SAAS PERFORMANCE</div></div>`;
}

function renderProjects(){
  document.querySelector('#projectStack').innerHTML = projects.map(p=>`<article class="project-card ${p.color} reveal"><div class="project-top"><span>${p.num} / ${p.kind}</span><a href="${p.href}" target="_blank" rel="noreferrer">GitHub ↗</a></div><div class="project-body"><div class="project-copy"><h3>${p.title}</h3><p>${p.desc}</p><div class="metrics">${p.metrics.map(m=>`<div><b>${m[0]}</b><small>${m[1]}</small></div>`).join('')}</div><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div></div>${projectVisual(p.visual)}</div></article>`).join('');
}
function renderSkills(){document.querySelector('#skillWall').innerHTML=Object.entries(skills).map(([k,v])=>`<div class="skill-group reveal"><h3>${k}</h3><div>${v.map(s=>`<span>${s}</span>`).join('')}</div></div>`).join('');}
function renderCerts(){document.querySelector('#certGrid').innerHTML=certs.map((c,i)=>`<button class="cert-card reveal" data-img="/src/assets/${c[0]}" data-title="${c[1]}"><div class="cert-image"><img src="/src/assets/${c[0]}" alt="${c[1]} certificate" loading="lazy"></div><div class="cert-info"><span>${String(i+1).padStart(2,'0')} / ${c[3]}</span><h3>${c[1]}</h3><p>${c[2]}</p><b>View certificate ↗</b></div></button>`).join('');}

function initModal(){const modal=document.querySelector('#certModal'),img=document.querySelector('#modalImage');document.querySelector('#certGrid').addEventListener('click',e=>{const card=e.target.closest('.cert-card');if(!card)return;img.src=card.dataset.img;img.alt=card.dataset.title;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('locked');});const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('locked');img.src='';};document.querySelector('#modalClose').onclick=close;modal.addEventListener('click',e=>{if(e.target===modal)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
function initNav(){const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#nav');toggle.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));}
function initReveal(){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));}
function initCanvas(){const c=document.querySelector('#heroCanvas'),ctx=c.getContext('2d');let pts=[];function resize(){c.width=innerWidth*devicePixelRatio;c.height=innerHeight*devicePixelRatio;ctx.scale(devicePixelRatio,devicePixelRatio);pts=Array.from({length:55},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.8+.5}));}resize();addEventListener('resize',resize);function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(93,211,255,.55)';ctx.fill();for(const q of pts){const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(93,211,255,${.09*(1-d/120)})`;ctx.stroke();}}}requestAnimationFrame(draw);}draw();}
renderProjects();renderSkills();renderCerts();initModal();initNav();initReveal();initCanvas();
