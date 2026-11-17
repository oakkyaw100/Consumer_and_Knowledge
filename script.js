  const IC = {"ok": "<svg class=\"ic ok\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/></svg>", "no": "<svg class=\"ic no\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/></svg>", "trophy": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\"/></svg>", "thumb": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 10v12\"/><path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\"/></svg>", "book": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>", "play": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"6 3 20 12 6 21 6 3\" fill=\"currentColor\"/></svg>", "arrow": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>", "cart": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"21\" r=\"1\"/><circle cx=\"19\" cy=\"21\" r=\"1\"/><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"/></svg>", "utensils": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/></svg>", "mega": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m3 11 18-5v12L3 14v-3z\"/><path d=\"M11.6 16.8a3 3 0 1 1-5.8-1.6\"/></svg>", "award": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"6\"/><path d=\"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11\"/></svg>"};
  const DEFAULT_VIDEO = "local"; // embedded Consumer_Responsibilities.mp4
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const dotsWrap = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const menuLinks = [...document.querySelectorAll('.menu-links a')];
  const groups = [[0,0],[1,10],[11,11],[12,12],[13,13]];   // Home, သင်ခန်းစာ, လေ့ကျင့်ခန်း, ဗီဒီယို
  const dd = document.getElementById('dd');
  let current = 0;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'dot' + (i === 0 ? ' active' : '');
    b.addEventListener('click', () => go(i));
    dotsWrap.appendChild(b);
  });
  const dots = [...dotsWrap.children];

  // Lesson topics dropdown (grouped, 4 sections)
  const LG = [
    {name:'စားသုံးသူ အခြေခံ', from:1, to:4, icon:IC.cart},
    {name:'အစားအသောက်နှင့် ကျန်းမာရေး', from:5, to:6, icon:IC.utensils},
    {name:'ဝယ်ယူခြင်းနှင့် တိုင်ကြားခြင်း', from:7, to:9, icon:IC.mega},
    {name:'အနှစ်ချုပ်', from:10, to:10, icon:IC.award}
  ];
  const mm = n => String(n).replace(/\d/g, d => '၀၁၂၃၄၅၆၇၈၉'[d]);
  LG.forEach((g, gi) => {
    const cnt = g.to - g.from + 1;
    const b = document.createElement('button');
    b.innerHTML = '<i>' + g.icon + '</i><span>' + g.name + '<small>ခေါင်းစဉ် ' + mm(cnt) + ' ခု</small></span>';
    b.addEventListener('click', () => { go(g.from); closeDD(); });
    dd.appendChild(b);
    if (gi < 3) for (let i = g.from; i <= g.to; i++)
      slides[i].querySelector('.inner').insertAdjacentHTML('afterbegin', '<span class="crumb">ပိုင်း ' + mm(gi + 1) + ' · ' + g.name + ' · ' + mm(i - g.from + 1) + '/' + mm(cnt) + '</span>');
  });
  function openDD() {
    const r = document.getElementById('lessonLink').getBoundingClientRect();
    dd.style.top = (r.bottom + 8) + 'px';
    dd.style.left = Math.max(10, Math.min(innerWidth - 310, r.left + r.width / 2 - 150)) + 'px';
    dd.classList.add('open');
  }
  function closeDD() { dd.classList.remove('open'); }
  document.addEventListener('click', e => { if (!e.target.closest('#lessonLink') && !e.target.closest('#dd')) closeDD(); });

  function go(target) {
    if (target < 0 || target >= total || target === current) return;
    const dir = target > current ? 'right' : 'left';
    slides[current].classList.remove('active', 'in-right', 'in-left');
    slides[target].classList.remove('in-right', 'in-left');
    slides[target].classList.add('active', 'in-' + dir);
    const t = slides[target];
    setTimeout(() => t.classList.remove('in-right', 'in-left'), 700);
    current = target;
    updateUI();
  }

  function updateUI() {
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    menuLinks.forEach((l, i) => l.classList.toggle('active', current >= groups[i][0] && current <= groups[i][1]));
    [...dd.children].forEach((b, i) => b.classList.toggle('on', current >= LG[i].from && current <= LG[i].to));
  }

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));

  menuLinks.forEach(link => link.addEventListener('click', e => {
    e.preventDefault();
    if (link.id === 'lessonLink') {
      dd.classList.contains('open') ? closeDD() : openDD();
    } else { closeDD(); go(parseInt(link.dataset.target)); }
  }));
  document.querySelector('.logo').addEventListener('click', e => { e.preventDefault(); go(0); });
  document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => go(parseInt(b.dataset.go))));

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(current - 1); }
    else if (e.key === 'Escape') closeDD();
  });
  let touchX = 0;
  document.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (e.target.closest('.video-box,.qcard,.dd')) return;
    const diff = touchX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 55) { diff > 0 ? go(current + 1) : go(current - 1); }
  }, { passive: true });

  // ---- Video
  const vframe = document.getElementById('vframe');
  const LOCAL_VIDEO = "../videos/consumer-responsibilities.mp4";
  function addState(v) {
    const b = document.createElement('div'); b.className = 'vstate'; vframe.appendChild(b);
    let t;
    const show = (txt, cls, hide) => { b.textContent = txt; b.className = 'vstate show ' + cls; clearTimeout(t); if (hide) t = setTimeout(() => b.classList.remove('show'), 1600); };
    v.addEventListener('play', () => show('▶  Play', 'pl', true));
    v.addEventListener('pause', () => { if (!v.ended) show('❚❚  Pause', 'pa', false); });
    v.addEventListener('ended', () => show('❚❚  Pause', 'pa', false));
    show('❚❚  Pause', 'pa', false);
  }
  function loadVideo(u) {
    u = (u || '').trim();
    if (u === 'local') { vframe.innerHTML = ''; const v = document.createElement('video'); v.controls = true; v.preload = 'metadata'; v.src = LOCAL_VIDEO; vframe.appendChild(v); addState(v); return; }
    if (!u) { vframe.innerHTML = '<div class="vph"><div class="play">' + IC.play + '</div><b>ဗီဒီယို ထည့်ရန် နေရာ</b><p>YouTube link သို့မဟုတ် .mp4 link ထည့်ပါ။</p></div>'; return; }
    const m = u.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    if (m) vframe.innerHTML = '<iframe src="https://www.youtube.com/embed/' + m[1] + '" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    else if (/\.(mp4|webm|ogg)(\?|$)/i.test(u)) { vframe.innerHTML = ''; const v = document.createElement('video'); v.controls = true; v.src = u; vframe.appendChild(v); }
    else vframe.innerHTML = '<div class="vph"><p>Link မမှန်ပါ။ YouTube သို့မဟုတ် .mp4 link ထည့်ပါ။</p></div>';
  }
  loadVideo(DEFAULT_VIDEO);

  // ---- Quiz
  const Q = [
    ["စားသုံးသူ ဆိုတာ ဘယ်သူလဲ။", ["ကုန်ပစ္စည်း ရောင်းသူ", "မိမိအသုံးပြုရန် ကုန်ပစ္စည်း၊ ဝန်ဆောင်မှု ဝယ်ယူသူ", "ကုန်ပစ္စည်း ထုတ်လုပ်သူ", "ကုမ္ပဏီပိုင်ရှင်"], 1],
    ["ကုန်ပစ္စည်း မဝယ်ခင် ပထမဆုံး စစ်သင့်တာက ဘာလဲ။", ["ဈေးအမြင့်ဆုံး ဖြစ်မဖြစ်", "ထုပ်ပိုးအရောင်", "သက်တမ်းကုန်ဆုံးရက်", "ကြော်ငြာ များမများ"], 2],
    ["အွန်လိုင်းမှာ OTP ကို ဘယ်လိုလုပ်ရမလဲ။", ["သူငယ်ချင်းကို ပေးမယ်", "ဆိုင်ကို ပေးမယ်", "ဘယ်သူ့ကိုမှ မမျှဝေပါ", "Facebook မှာ တင်မယ်"], 2],
    ["Junk food ကို ဘယ်လို စားသုံးသင့်သလဲ။", ["နေ့တိုင်း အများကြီး", "လုံးဝ မစားရ", "ချင့်ချိန်ပြီး တစ်ပတ် ၁–၂ ကြိမ်", "ထမင်းအစား စားမယ်"], 2],
    ["နစ်နာမှု ရှိလျှင် ဘယ်မှာ တိုင်ကြားနိုင်သလဲ။", ["စားသုံးသူရေးရာ ဦးစီးဌာန", "ဘယ်မှာမှ မရ", "ဆိုင်ဘေးအိမ်", "တိုင်ကြားလို့ မရ"], 0],
    ["“သိ၊ စစ်၊ ရွေး” ထဲက ‘စစ်’ ဆိုတာ ဘာလဲ။", ["ကြော်ငြာကို ယုံခြင်း", "အညွှန်း၊ သက်တမ်း၊ အရည်အသွေး စစ်ဆေးခြင်း", "ဈေးပေါရင် ဝယ်ခြင်း", "အရောင်ကြည့်ခြင်း"], 1]
  ];
  const qcard = document.getElementById('qcard'); let qi = 0, sc = 0;
  function renderQ() {
    if (qi >= Q.length) {
      qcard.innerHTML = '<div class="qbar"><div style="width:100%"></div></div><div class="score"><div class="big">' + sc + ' / ' + Q.length + '</div><p>' +
        (sc >= 5 ? IC.trophy + 'အရမ်းကောင်းပါတယ်!' : sc >= 3 ? IC.thumb + 'ကောင်းပါတယ်၊ ထပ်လေ့ကျင့်ကြည့်ပါ' : IC.book + 'သင်ခန်းစာကို ပြန်ဖတ်ပြီး ထပ်ကြိုးစားပါ') +
        '</p><div class="btns" style="justify-content:center"><button class="btn d" id="again">ပြန်စမည်</button><button class="btn p" id="tolesson">သင်ခန်းစာသို့</button></div></div>';
      document.getElementById('again').onclick = () => { qi = 0; sc = 0; renderQ(); };
      document.getElementById('tolesson').onclick = () => go(1);
      return;
    }
    const [q, o, a] = Q[qi];
    qcard.innerHTML = '<div class="qbar"><div style="width:' + (qi / Q.length * 100) + '%"></div></div><div class="qn">QUESTION ' + (qi + 1) + ' / ' + Q.length + '</div><div class="qq">' + q + '</div>' +
      o.map((t, i) => '<button class="opt" data-i="' + i + '">' + t + '</button>').join('') +
      '<div class="fb" id="fb"></div><button class="btn d" id="nx" style="display:none"></button>';
    const opts = [...qcard.querySelectorAll('.opt')];
    opts.forEach(b => b.onclick = () => {
      const i = +b.dataset.i; opts.forEach(x => x.disabled = true); opts[a].classList.add('ok');
      const fb = document.getElementById('fb');
      if (i === a) { sc++; fb.innerHTML = IC.ok + 'မှန်ပါတယ်!'; } else { b.classList.add('no'); fb.innerHTML = IC.no + 'မှားပါတယ်၊ မှန်တဲ့အဖြေကို အစိမ်းရောင်ဖြင့် ပြထားပါတယ်။'; }
      const n = document.getElementById('nx'); n.style.display = 'inline-block';
      n.innerHTML = qi === Q.length - 1 ? 'ရလဒ် ကြည့်မည်' : 'ရှေ့ဆက်မည် ' + IC.arrow;
      n.onclick = () => { qi++; renderQ(); };
    });
  }
  renderQ();
  updateUI();
