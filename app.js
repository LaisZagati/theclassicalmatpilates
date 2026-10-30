/* Classical Pilates Mat: learn the 34 exercises, one movement at a time.
   Plain JavaScript, no build step. Needs data.js loaded first. */
(function () {
  "use strict";

  var DATA = window.PILATES;
  var EXERCISES = DATA.EXERCISES;
  var LESSONS = DATA.LESSONS;
  var BY_N = {};
  EXERCISES.forEach(function (e) { BY_N[e.n] = e; });

  /* ---------------- saved state (this device) ---------------- */
  var KEY = "return-learn-v1";
  var state = (function () {
    var d = { lang: "en", scale: 1, favorites: [], learned: {}, notes: {}, breath: 4, speed: 1, voice: true, voiceLang: null, voiceGender: "woman" };
    try { var s = JSON.parse(localStorage.getItem(KEY) || "{}"); for (var k in s) d[k] = s[k]; } catch (e) { /* storage unavailable */ }
    if (!d.voiceLang) d.voiceLang = d.lang;
    return d;
  })();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } }

  /* ---------------- interface text ---------------- */
  var UI = {
    en: {
      brandSub: "Learn every Pilates exercise, one movement at a time", lessons: "Lessons", practice: "Guided practice", language: "Language",
      heroTitle: "Learn the 34 Classical Pilates Mat exercises", heroBody: "Each Pilates lesson shows the movement, then walks you through it step by step with the breath, in English and Spanish. Go in order: Joseph Pilates designed the sequence to build on itself.",
      learnedOf: "{n} of 34 learned", search: "Search exercises", all: "All", favorites: "Favorites", learned: "Learned", toLearn: "To learn",
      none: "No exercises match. Try another name or choose All.", noFav: "No favorites yet. Open a lesson and add it to favorites.",
      allLessons: "All lessons", whatItTrains: "What it trains", favAdd: "Add to favorites", favRemove: "In favorites", markLearned: "Mark as learned", isLearned: "Learned",
      demo: "Demonstration", inhale: "Inhale", exhale: "Exhale", getReady: "Get ready", breatheNaturally: "Breathe naturally", done: "Done",
      play: "Play", pause: "Pause", restart: "Restart", speed: "Speed", breath: "Breath", voiceOn: "Voice on", voiceOff: "Voice off", voiceTest: "Voice on.",
      repOf: "Rep {r} of {n}", loop: "Looping demonstration", startPos: "Starting position",
      clipNote: "An illustrated figure performs the movement in time with the breath. Slow the speed or lengthen the breath while you learn.",
      stepByStep: "Step by step", stepOf: "Step {i} of {n}", setUp: "Set up", stepWord: "Step {i}",
      prevStep: "Previous step", nextStep: "Next step", readStep: "Read aloud", stop: "Stop",
      breatheTitle: "Breathe", feelTitle: "Feel it", cues: "Helpful cues", checkTitle: "Check yourself",
      checkIntro: "After a few reps, tick each mistake you avoided. Leave the others to work on next time.", checkAll: "Clean round. Try a slightly longer breath next time.",
      easier: "Make it easier", safety: "Safety", history: "In the 1945 sequence",
      historyBody: "Exercise {n} of 34 in Return to Life Through Contrology (Joseph Pilates and William J. Miller, 1945), where it appears as “{t}”.",
      historyNote: "The steps, cues and modifications here are contemporary teaching guidance, not quotations from the book.",
      notes: "My notes", notesPh: "What you noticed, cues that helped, questions for your teacher.", notesSaved: "Saved on this device.",
      prev: "Previous", next: "Next", practiceFrom: "Practice from here",
      practiceIntro: "The demonstration plays each exercise for its reps with breath and voice. When it finishes, the exercise is marked as learned.",
      seq: "Sequence", seqAll: "All 34 in order", seqFav: "My favorites", seqTo: "Not learned yet", seqEmpty: "This sequence is empty. Choose All 34 in order.",
      startPractice: "Start", doneNext: "Next exercise", skip: "Skip", finish: "Finish", showSteps: "Show the steps",
      finished: "Practice complete", finishedBody: "{n} exercises practised in this session.", again: "Start again", of: "of",
      footNote: "Exercise order and titles follow Return to Life Through Contrology (1945). Instructions, cues and modifications are contemporary teaching guidance. The animations are illustrations, not video of a real person. Check with a qualified instructor or health professional if you have an injury or condition.",
      smaller: "Smaller text", larger: "Larger text", textSize: "Text size", lowerRest: "Lower and rest",
      brandWord: "Classical Pilates Mat", practiceShort: "Practice", installIos: "Install the app: tap the Share button, then Add to Home Screen.", installAndroid: "Install Pilates Mat on your phone for full-screen, offline practice.", installBtn: "Install", close: "Close", voiceLang: "Voice language", voiceWho: "Voice", woman: "Woman", man: "Man", both: "EN + ES",
      voiceHint: "Voices come from your device. With EN + ES, the movement waits for each cue to be read in both languages."
    },
    es: {
      brandSub: "Aprende cada ejercicio de Pilates, un movimiento cada vez", lessons: "Lecciones", practice: "Práctica guiada", language: "Idioma",
      heroTitle: "Aprende los 34 ejercicios de Pilates Clásico en Mat", heroBody: "Cada lección de Pilates muestra el movimiento y luego te guía paso a paso con la respiración, en español e inglés. Ve en orden: Joseph Pilates diseñó la secuencia para que se construya sobre sí misma.",
      learnedOf: "{n} de 34 aprendidos", search: "Buscar ejercicios", all: "Todos", favorites: "Favoritos", learned: "Aprendidos", toLearn: "Por aprender",
      none: "Ningún ejercicio coincide. Prueba otro nombre o elige Todos.", noFav: "Aún no hay favoritos. Abre una lección y añádela a favoritos.",
      allLessons: "Todas las lecciones", whatItTrains: "Qué trabaja", favAdd: "Añadir a favoritos", favRemove: "En favoritos", markLearned: "Marcar como aprendido", isLearned: "Aprendido",
      demo: "Demostración", inhale: "Inhala", exhale: "Exhala", getReady: "Prepárate", breatheNaturally: "Respira con naturalidad", done: "Hecho",
      play: "Reproducir", pause: "Pausar", restart: "Reiniciar", speed: "Velocidad", breath: "Respiración", voiceOn: "Voz activada", voiceOff: "Voz desactivada", voiceTest: "Voz activada.",
      repOf: "Repetición {r} de {n}", loop: "Demostración en bucle", startPos: "Posición inicial",
      clipNote: "Una figura ilustrada realiza el movimiento al ritmo de la respiración. Baja la velocidad o alarga la respiración mientras aprendes.",
      stepByStep: "Paso a paso", stepOf: "Paso {i} de {n}", setUp: "Colócate", stepWord: "Paso {i}",
      prevStep: "Paso anterior", nextStep: "Paso siguiente", readStep: "Leer en voz alta", stop: "Detener",
      breatheTitle: "Respira", feelTitle: "Siéntelo", cues: "Indicaciones útiles", checkTitle: "Revísate",
      checkIntro: "Tras unas repeticiones, marca cada error que evitaste. Deja los demás para la próxima vez.", checkAll: "Ronda limpia. Prueba una respiración un poco más larga la próxima vez.",
      easier: "Hazlo más fácil", safety: "Seguridad", history: "En la secuencia de 1945",
      historyBody: "Ejercicio {n} de 34 en Return to Life Through Contrology (Joseph Pilates y William J. Miller, 1945), donde aparece como “{t}”.",
      historyNote: "Los pasos, indicaciones y modificaciones son orientación docente contemporánea, no citas del libro.",
      notes: "Mis notas", notesPh: "Lo que notaste, indicaciones que te ayudaron, preguntas para tu profesora.", notesSaved: "Guardado en este dispositivo.",
      prev: "Anterior", next: "Siguiente", practiceFrom: "Practicar desde aquí",
      practiceIntro: "La demostración reproduce cada ejercicio con sus repeticiones, respiración y voz. Al terminar, el ejercicio se marca como aprendido.",
      seq: "Secuencia", seqAll: "Los 34 en orden", seqFav: "Mis favoritos", seqTo: "Aún por aprender", seqEmpty: "Esta secuencia está vacía. Elige Los 34 en orden.",
      startPractice: "Empezar", doneNext: "Siguiente ejercicio", skip: "Saltar", finish: "Terminar", showSteps: "Ver los pasos",
      finished: "Práctica terminada", finishedBody: "{n} ejercicios practicados en esta sesión.", again: "Empezar de nuevo", of: "de",
      footNote: "El orden y los títulos siguen Return to Life Through Contrology (1945). Las instrucciones, indicaciones y modificaciones son orientación docente contemporánea. Las animaciones son ilustraciones, no vídeo de una persona real. Consulta con una instructora cualificada o un profesional sanitario si tienes una lesión o condición.",
      smaller: "Texto más pequeño", larger: "Texto más grande", textSize: "Tamaño de texto", lowerRest: "Baja y descansa",
      brandWord: "Pilates Clásico en Mat", practiceShort: "Práctica", installIos: "Instala la app: toca el botón Compartir y luego Añadir a pantalla de inicio.", installAndroid: "Instala Pilates Mat en tu móvil para practicar a pantalla completa y sin conexión.", installBtn: "Instalar", close: "Cerrar", voiceLang: "Idioma de la voz", voiceWho: "Voz", woman: "Mujer", man: "Hombre", both: "EN + ES",
      voiceHint: "Las voces vienen de tu dispositivo. Con EN + ES, el movimiento espera a que cada indicación se lea en los dos idiomas."
    }
  };
  function uiLang() { return state.lang === "es" ? "es" : "en"; }
  function t(k, vars) { return tl(uiLang(), k, vars); }
  function tl(code, k, vars) {
    var s = UI[code][k] || UI.en[k] || k;
    if (vars) Object.keys(vars).forEach(function (v) { s = s.split("{" + v + "}").join(String(vars[v])); });
    return s;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pick(v) { return state.lang === "es" ? v.es : v.en; }
  /* bilingual HTML: in EN + ES mode the Spanish appears under the English */
  function bi(v) { return state.lang === "both" ? esc(v.en) + '<span class="es" lang="es">' + esc(v.es) + "</span>" : esc(pick(v)); }
  function biList(v, cls) {
    return '<ul class="' + (cls || "dash") + '">' + v.en.map(function (en, i) { return "<li>" + bi({ en: en, es: v.es[i] }) + "</li>"; }).join("") + "</ul>";
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------------- poses and motion ---------------- */
  function posesFor(n) {
    var l = LESSONS[n], ex = BY_N[n];
    if (l.aIsKey) return { a: ex.pose, b: l.b || ex.pose };
    return { a: l.a, b: l.b || ex.pose };
  }
  function lerp(a, b, k) { return a.map(function (v, i) { return v + (b[i] - v) * k; }); }
  function ease(k) { return k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; }
  /* small living motion so held positions do not look frozen */
  function wobble(pose, kind, time) {
    if (!kind) return pose;
    var p = pose.slice();
    if (kind === "pump") { var w = Math.sin(time * Math.PI * 2 * 1.4) * 3.2; p[17] += w; p[15] += w * 0.5; }
    else if (kind === "flutter") { var f = Math.sin(time * Math.PI * 2 * 2.6) * 3.2; p[17] += f; p[15] += f * 0.5; p[9] -= f; p[7] -= f * 0.4; p[13] += f; }
    else if (kind === "breathe") { var b = Math.sin(time * Math.PI * 2 / 4) * 0.7; p[1] += b; p[3] += b; }
    return p;
  }

  /* ---------------- the illustrated person ---------------- */
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  // crop empty space above low positions so the figure fills the frame
  function viewBoxFor(n) {
    var ps = posesFor(n), ys = [];
    [ps.a, ps.b].forEach(function (p) { for (var i = 1; i < p.length; i += 2) ys.push(p[i]); });
    var top = Math.max(0, Math.min.apply(null, ys) - 16);
    return "0 " + top + " 180 " + (118 - top);
  }
  function makePerson(host, label, n) {
    var svg = el("svg", { viewBox: n ? viewBoxFor(n) : "0 0 180 118", role: "img", "aria-label": label || "" });
    var g = el("g", { "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none" }, svg);
    el("rect", { x: 3, y: 108.5, width: 174, height: 5, rx: 2.5, fill: "var(--mat)" }, svg).parentNode.insertBefore(svg.lastChild, g);
    var shadow = el("ellipse", { rx: 34, ry: 2.2, fill: "#000", "fill-opacity": "0.08" }, g);
    var backLeg = el("polyline", { stroke: "var(--legs-back)", "stroke-width": 9.5 }, g);
    var backFoot = el("circle", { r: 3.3, fill: "var(--skin-shade)" }, g);
    var torsoTop = el("line", { stroke: "var(--top)", "stroke-width": 15 }, g);
    var torsoLow = el("line", { stroke: "var(--legs)", "stroke-width": 14 }, g);
    var neck = el("line", { stroke: "var(--skin)", "stroke-width": 5.5 }, g);
    var hair = el("circle", { r: 8.4, fill: "var(--hair)" }, g);
    var bun = el("circle", { r: 4.2, fill: "var(--hair)" }, g);
    var face = el("circle", { r: 7, fill: "var(--skin)" }, g);
    var frontLeg = el("polyline", { stroke: "var(--legs)", "stroke-width": 10.5 }, g);
    var frontFoot = el("circle", { r: 3.5, fill: "var(--skin)" }, g);
    var arm = el("polyline", { stroke: "var(--skin)", "stroke-width": 5.8 }, g);
    var hand = el("circle", { r: 3, fill: "var(--skin)" }, g);
    host.appendChild(svg);
    function set(p) {
      var hx = p[0], hy = p[1], sx = p[2], sy = p[3], px = p[4], py = p[5];
      var mx = sx + (px - sx) * 0.58, my = sy + (py - sy) * 0.58;
      // direction from shoulder to head: hair and bun sit behind the face
      var dx = hx - sx, dy = hy - sy, len = Math.hypot(dx, dy) || 1; dx /= len; dy /= len;
      var minX = Math.min(hx, sx, px, p[6], p[8], p[10], p[12], p[16]), maxX = Math.max(hx, sx, px, p[6], p[8], p[10], p[12], p[16]);
      shadow.setAttribute("cx", (minX + maxX) / 2); shadow.setAttribute("cy", 109); shadow.setAttribute("rx", Math.max(14, (maxX - minX) / 2));
      backLeg.setAttribute("points", px + "," + py + " " + p[10] + "," + p[11] + " " + p[12] + "," + p[13]);
      backFoot.setAttribute("cx", p[12]); backFoot.setAttribute("cy", p[13]);
      torsoTop.setAttribute("x1", sx); torsoTop.setAttribute("y1", sy); torsoTop.setAttribute("x2", mx); torsoTop.setAttribute("y2", my);
      torsoLow.setAttribute("x1", mx); torsoLow.setAttribute("y1", my); torsoLow.setAttribute("x2", px); torsoLow.setAttribute("y2", py);
      neck.setAttribute("x1", sx); neck.setAttribute("y1", sy); neck.setAttribute("x2", hx - dx * 3); neck.setAttribute("y2", hy - dy * 3);
      hair.setAttribute("cx", hx + dx * 1.2 - dy * 0.8); hair.setAttribute("cy", hy + dy * 1.2 + dx * 0.8);
      bun.setAttribute("cx", hx + dx * 7.5 - dy * 2); bun.setAttribute("cy", hy + dy * 7.5 + dx * 2);
      face.setAttribute("cx", hx - dx * 0.6 + dy * 1.4); face.setAttribute("cy", hy - dy * 0.6 - dx * 1.4);
      frontLeg.setAttribute("points", px + "," + py + " " + p[6] + "," + p[7] + " " + p[8] + "," + p[9]);
      frontFoot.setAttribute("cx", p[8]); frontFoot.setAttribute("cy", p[9]);
      arm.setAttribute("points", sx + "," + sy + " " + p[14] + "," + p[15] + " " + p[16] + "," + p[17]);
      hand.setAttribute("cx", p[16]); hand.setAttribute("cy", p[17]);
    }
    return { svg: svg, set: set };
  }

  /* ---------------- one animation loop for everything on screen ---------------- */
  var players = [];
  var last = 0;
  function loop(now) {
    var dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
    last = now;
    players.forEach(function (pl) { pl.tick(dt, now / 1000); });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  function clearPlayers() { players.forEach(function (p) { if (p.stop) p.stop(); }); players = []; stopSpeech(); if (typeof mediaAudio === "function") mediaAudio(false); }
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- voice: English, Spanish or both; woman or man ---------------- */
  var canSpeak = "speechSynthesis" in window;
  var voices = [];
  function loadVoices() { try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; } }
  if (canSpeak) { loadVoices(); try { window.speechSynthesis.addEventListener("voiceschanged", loadVoices); } catch (e) { window.speechSynthesis.onvoiceschanged = loadVoices; } }
  // Browsers do not label voices by gender, so known voice names are used, with pitch as a fallback.
  var FEMALE = /female|woman|samantha|karen|moira|tessa|fiona|victoria|zira|hazel|susan|serena|kate|allison|\bava\b|joanna|salli|kimberly|libby|sonia|jenny|aria|emma|amelie|monica|mónica|paulina|helena|laura|elvira|lucia|lucía|marisol|esperanza|sabina|conchita|penelope|lupe|dalia|ximena|paloma|elena|isabela|catalina|google español|google us english/i;
  var MALE = /male|\bman\b|daniel|\balex\b|fred|david|mark|george|james|oliver|arthur|ryan|guy|brian|matthew|joey|justin|thomas|aaron|rishi|jorge|diego|juan|pablo|alvaro|álvaro|carlos|enrique|miguel|raul|raúl|andres|andrés|jose|josé|gonzalo|antonio|alonso|rodrigo|eddy|reed|rocko|grandpa|google uk english male/i;
  function genderOf(v) { var n = v.name || ""; if (FEMALE.test(n) && !/\bmale\b/i.test(n.replace(/female/ig, ""))) return "woman"; if (MALE.test(n)) return "man"; return null; }
  function pickVoice(code, gender) {
    if (!voices.length) loadVoices();
    var list = voices.filter(function (v) { return (v.lang || "").toLowerCase().replace("_", "-").indexOf(code) === 0; });
    var pref = code === "es" ? /es-es/i : /en-(gb|us)/i;
    list.sort(function (a, b) { return (pref.test(b.lang) ? 1 : 0) - (pref.test(a.lang) ? 1 : 0); });
    var match = list.filter(function (v) { return genderOf(v) === gender; })[0];
    return { voice: match || list[0] || null, exact: !!match };
  }
  function utter(text, code) {
    var u = new SpeechSynthesisUtterance(text);
    u.lang = code === "es" ? "es-ES" : "en-GB";
    var pv = pickVoice(code, state.voiceGender);
    if (pv.voice) u.voice = pv.voice;
    u.rate = 0.95;
    // no voice of the chosen gender on this device: shift the pitch instead
    u.pitch = pv.exact ? 1 : state.voiceGender === "man" ? 0.75 : 1.2;
    return u;
  }
  /* obj is {en, es}; the voice language setting decides which is read, or both in turn */
  /* Mobile browsers only allow speech after a tap. The first tap anywhere (and every Play,
     Voice or Read aloud tap) speaks a silent word inside the tap, which unlocks the voice. */
  var unlocked = false, keep = [], speakTimer = 0;
  /* iPhone silent mode: ask Safari to treat this page's sound as media playback (like music or
     video), and keep a silent audio track running while the voice is on. Media playback is not
     muted by the silent switch, so the voice can be heard in silent mode. */
  var SILENT = "data:audio/wav;base64,UklGRsQPAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YaAPAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA";
  var keepAlive = null;
  function mediaAudio(on) {
    try { if (navigator.audioSession) navigator.audioSession.type = on ? "playback" : "auto"; } catch (e) { /* older browsers */ }
    try {
      if (on) {
        if (!keepAlive) { keepAlive = new Audio(SILENT); keepAlive.loop = true; keepAlive.setAttribute("playsinline", ""); keepAlive.preload = "auto"; }
        var pr = keepAlive.play(); if (pr && pr.catch) pr.catch(function () { /* needs a tap first */ });
      } else if (keepAlive) { keepAlive.pause(); }
    } catch (e) { /* ignore */ }
  }
  function unlockSpeech() {
    if (!canSpeak) return;
    if (state.voice) mediaAudio(true);
    try {
      var s = window.speechSynthesis;
      if (s.paused) s.resume();
      if (unlocked) return;
      var u = new SpeechSynthesisUtterance(" ");
      u.volume = 0; u.rate = 1;
      keep.push(u);
      s.speak(u);
      unlocked = true;
      loadVoices();
    } catch (e) { /* ignore */ }
  }
  if (canSpeak) {
    var firstTap = function () { unlockSpeech(); if (unlocked) { document.removeEventListener("touchend", firstTap, true); document.removeEventListener("click", firstTap, true); } };
    document.addEventListener("touchend", firstTap, true);
    document.addEventListener("click", firstTap, true);
  }
  function speak(obj) {
    if (!canSpeak) return;
    var s = window.speechSynthesis;
    clearTimeout(speakTimer);
    var order = state.voiceLang === "both" ? ["en", "es"] : [state.voiceLang === "es" ? "es" : "en"];
    function go() {
      try {
        if (s.paused) s.resume();
        keep = []; // hold references so mobile Chrome does not drop the utterances
        order.forEach(function (code) { if (obj[code]) { var u = utter(obj[code], code); keep.push(u); s.speak(u); } });
      } catch (e) { /* no speech */ }
    }
    // cancelling and speaking in the same moment makes iPhone and Android drop the new words
    if (s.speaking || s.pending) { try { s.cancel(); } catch (e) { /* ignore */ } speakTimer = setTimeout(go, 120); }
    else go();
  }
  function stopSpeech() { clearTimeout(speakTimer); if (canSpeak) try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ } }
  function voiceControls() {
    if (!canSpeak) return "";
    return '<span class="row"><span class="seg-label">' + esc(t("voiceLang")) + '</span><span class="seg js-vlang" role="radiogroup" aria-label="' + esc(t("voiceLang")) + '">' +
      [["en", "EN"], ["es", "ES"], ["both", "EN + ES"]].map(function (o) { return '<button type="button" role="radio" data-v="' + o[0] + '" aria-checked="' + (state.voiceLang === o[0]) + '">' + o[1] + "</button>"; }).join("") + "</span></span>" +
      '<span class="row"><span class="seg-label">' + esc(t("voiceWho")) + '</span><span class="seg js-vgender" role="radiogroup" aria-label="' + esc(t("voiceWho")) + '">' +
      ["woman", "man"].map(function (g) { return '<button type="button" role="radio" data-v="' + g + '" aria-checked="' + (state.voiceGender === g) + '">' + esc(t(g)) + "</button>"; }).join("") + "</span></span>";
  }
  function bindVoiceControls(root, onChange) {
    var vl = root.querySelector(".js-vlang"), vg = root.querySelector(".js-vgender");
    function sync() {
      root.querySelectorAll(".js-vlang button").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.v === state.voiceLang)); });
      root.querySelectorAll(".js-vgender button").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.v === state.voiceGender)); });
    }
    if (vl) vl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; state.voiceLang = b.dataset.v; save(); sync(); if (onChange) onChange(); });
    if (vg) vg.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; state.voiceGender = b.dataset.v; save(); sync(); if (onChange) onChange(); });
  }
  function breathWords(breath) {
    var k = breath === "in" ? "inhale" : breath === "out" ? "exhale" : "getReady";
    return { en: UI.en[k], es: UI.es[k] };
  }

  /* ---------------- demonstration phases ---------------- */
  // A rep goes from the start position to the key position and back, each half on one breath.
  function buildPhases(ex, reps, breath) {
    var l = LESSONS[ex.n], ps = posesFor(ex.n), a = ps.a, b = ps.b;
    var out = [{ kind: "setup", from: a, to: a, breath: null, text: ex.start, rep: 0, dur: Math.max(4, ex.start.en.split(" ").length / 2.6) }];
    if (l.hold) {
      out.push({ kind: "go", from: a, to: b, breath: "in", text: l.go, rep: 0, dur: breath });
      var c = reps || l.cycles || 4;
      for (var r = 1; r <= c; r++) {
        out.push({ kind: "hold", from: b, to: b, breath: "in", text: l.go, rep: r, dur: breath, wob: l.hold });
        out.push({ kind: "hold", from: b, to: b, breath: "out", text: l.back, rep: r, dur: breath, wob: l.hold });
      }
      out.push({ kind: "back", from: b, to: a, breath: "out", text: { en: UI.en.lowerRest, es: UI.es.lowerRest }, rep: c, dur: breath });
    } else {
      for (var i = 1; i <= reps; i++) {
        out.push({ kind: "go", from: a, to: b, breath: l.inOnGo ? "in" : "out", text: l.go, rep: i, dur: breath });
        out.push({ kind: "back", from: b, to: a, breath: l.inOnGo ? "out" : "in", text: l.back, rep: i, dur: breath });
      }
    }
    return out;
  }
  function repsFor(ex) { var l = LESSONS[ex.n]; return l.hold ? (l.cycles || 4) : Math.min(ex.count, 10); }

  /* The main demonstration: a looping (or finite) clip with breath, cue and rep count. */
  function mountDemo(root, ex, opts) {
    opts = opts || {};
    root.innerHTML =
      '<div class="clip-stage"><span class="clip-badge">' + esc(t("demo")) + '</span><div class="fig"></div></div>' +
      '<div class="clip-side">' +
        '<div class="breath" aria-hidden="true"><span class="breath-ring"></span><span class="breath-fill"></span><span class="breath-word"></span></div>' +
        '<p class="cue" aria-live="polite"></p><p class="rep"></p>' +
      "</div>" +
      '<div class="clip-controls">' +
        '<button type="button" class="btn btn-sun js-play"></button>' +
        '<button type="button" class="btn js-restart">' + esc(t("restart")) + "</button>" +
        '<span class="row"><span class="seg-label">' + esc(t("speed")) + '</span><span class="seg js-speed" role="radiogroup" aria-label="' + esc(t("speed")) + '">' +
          [0.75, 1, 1.25].map(function (s) { return '<button type="button" role="radio" data-v="' + s + '">' + s + "×</button>"; }).join("") + "</span></span>" +
        '<span class="row"><span class="seg-label">' + esc(t("breath")) + '</span><span class="seg js-breath" role="radiogroup" aria-label="' + esc(t("breath")) + '">' +
          [3, 4, 5, 6].map(function (s) { return '<button type="button" role="radio" data-v="' + s + '">' + s + "s</button>"; }).join("") + "</span></span>" +
        (canSpeak ? '<button type="button" class="btn js-voice"></button>' + voiceControls() : "") +
      "</div>" + (canSpeak ? '<p class="voice-hint">' + esc(t("voiceHint")) + "</p>" : "");
    var person = makePerson(root.querySelector(".fig"), pick(ex.title), ex.n);
    var fill = root.querySelector(".breath-fill"), word = root.querySelector(".breath-word");
    var cue = root.querySelector(".cue"), rep = root.querySelector(".rep");
    var playBtn = root.querySelector(".js-play");
    var phases, idx, acc, playing = false, finished = false, spokenIdx = -1;
    function rebuild() { phases = buildPhases(ex, opts.reps || repsFor(ex), state.breath); idx = 0; acc = 0; finished = false; spokenIdx = -1; }
    rebuild();
    function setPlaying(v) { playing = v; if (!v) { stopSpeech(); mediaAudio(false); } draw(0); }
    function syncControls() {
      playBtn.textContent = playing ? t("pause") : finished ? t("again") : idx > 0 || acc > 0 ? t("play") : t("play");
      root.querySelectorAll(".js-speed button").forEach(function (b) { b.setAttribute("aria-checked", String(+b.dataset.v === state.speed)); });
      root.querySelectorAll(".js-breath button").forEach(function (b) { b.setAttribute("aria-checked", String(+b.dataset.v === state.breath)); });
      var vb = root.querySelector(".js-voice");
      if (vb) { vb.textContent = state.voice ? t("voiceOn") : t("voiceOff"); vb.className = "btn js-voice" + (state.voice ? " btn-on" : ""); vb.setAttribute("aria-pressed", String(state.voice)); }
    }
    var clock = 0;
    function draw(time) {
      var ph = phases[idx], k = finished ? 1 : Math.min(1, acc / ph.dur);
      var pose = lerp(ph.from, ph.to, ease(k));
      pose = wobble(pose, playing ? (ph.wob || (ph.kind === "setup" ? "breathe" : null)) : null, time);
      person.set(pose);
      var scale = ph.breath === "in" ? 0.6 + 0.4 * ease(k) : ph.breath === "out" ? 1 - 0.4 * ease(k) : 0.72;
      fill.style.transform = "scale(" + scale.toFixed(3) + ")";
      fill.className = "breath-fill" + (ph.breath === "out" ? " out" : "");
      var secs = Math.max(0, Math.ceil((ph.dur - acc) / state.speed));
      word.innerHTML = esc(finished ? t("done") : ph.breath === "in" ? t("inhale") : ph.breath === "out" ? t("exhale") : t("getReady")) +
        (playing && !finished ? '<span class="breath-sec">' + secs + "s</span>" : "");
      var cueHtml = finished ? "" : ph.kind === "setup" ? bi(ex.start) : bi(ph.text);
      if (cue.dataset.k !== idx + "|" + finished + "|" + state.lang) { cue.innerHTML = cueHtml; cue.dataset.k = idx + "|" + finished + "|" + state.lang; }
      var total = LESSONS[ex.n].hold ? (opts.reps || LESSONS[ex.n].cycles || 4) : (opts.reps || repsFor(ex));
      rep.textContent = ph.rep > 0 && !finished ? t("repOf", { r: ph.rep, n: total }) : ph.kind === "setup" ? t("startPos") : "";
      syncControls();
    }
    var waitT = 0;
    var player = {
      tick: function (dt, time) {
        clock = time;
        if (playing) {
          acc += dt * state.speed;
          // let the voice finish the cue (both languages can take longer than one breath)
          if (state.voice && acc >= phases[idx].dur && canSpeak && window.speechSynthesis.speaking && waitT < 8) {
            waitT += dt; acc = phases[idx].dur - 1e-4;
          } else if (acc >= phases[idx].dur) { waitT = 0; }
          while (acc >= phases[idx].dur) {
            acc -= phases[idx].dur; idx++;
            if (idx >= phases.length) {
              if (opts.loop) { idx = 1; } // loop the movement, skip the set-up
              else { idx = phases.length - 1; acc = phases[idx].dur; finished = true; playing = false; setTimeout(function () { if (!playing) mediaAudio(false); }, 4000); if (state.voice) speak({ en: "Done.", es: "Hecho." }); if (opts.onDone) setTimeout(opts.onDone, 0); break; }
            }
          }
          if (playing && state.voice && spokenIdx !== idx) {
            spokenIdx = idx;
            var ph = phases[idx];
            var br = breathWords(ph.breath), txt = ph.kind === "setup" ? ex.start : ph.text;
            speak(ph.kind === "hold" && ph.rep > 1 ? br : { en: br.en + ". " + txt.en, es: br.es + ". " + txt.es });
          }
        }
        draw(time);
      },
      stop: function () { playing = false; }
    };
    players.push(player);
    playBtn.addEventListener("click", function () {
      if (state.voice) unlockSpeech();
      if (finished) { rebuild(); setPlaying(true); return; }
      setPlaying(!playing);
    });
    root.querySelector(".js-restart").addEventListener("click", function () { rebuild(); setPlaying(false); });
    root.querySelector(".js-speed").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; state.speed = +b.dataset.v; save(); syncControls(); });
    root.querySelector(".js-breath").addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; state.breath = +b.dataset.v; save(); var was = playing; rebuild(); setPlaying(was); });
    var vb = root.querySelector(".js-voice");
    if (vb) vb.addEventListener("click", function () { state.voice = !state.voice; save(); if (!state.voice) { stopSpeech(); mediaAudio(false); } else { unlockSpeech(); spokenIdx = -1; speak({ en: tl("en", "voiceTest"), es: tl("es", "voiceTest") }); } syncControls(); });
    bindVoiceControls(root, function () { spokenIdx = -1; });
    draw(0);
    if (opts.autoplay && !reduced) setPlaying(true);
    return { play: function () { setPlaying(true); } };
  }

  /* ---------------- step-by-step frames ---------------- */
  // Each movement step gets its own short loop: the slice of the movement that step describes.
  function stepSlice(n, i, k) {
    var l = LESSONS[n], ps = posesFor(n), a = ps.a, b = ps.b;
    if (l.hold) {
      var m = Math.max(1, k - 2);
      if (i < m) return { from: lerp(a, b, i / m), to: lerp(a, b, (i + 1) / m), breath: "in" };
      if (i === m && k > 2) return { from: b, to: b, wob: l.hold, breath: "both" };
      return { from: b, to: a, breath: "out" };
    }
    var c0 = i / k, c1 = (i + 1) / k;
    function at(c) { return c <= 0.5 ? lerp(a, b, ease(c * 2)) : lerp(b, a, ease((c - 0.5) * 2)); }
    var mid = (c0 + c1) / 2;
    var goBreath = l.inOnGo ? "in" : "out", backBreath = l.inOnGo ? "out" : "in";
    // a step that covers both halves loops through the whole rep
    if (c0 < 0.5 && c1 > 0.5) return { full: true, a: a, b: b, breath: "both" };
    return { from: at(c0), to: at(c1), breath: mid < 0.5 ? goBreath : backBreath };
  }
  function mountStepFrame(host, ex, slice) {
    var person = makePerson(host, pick(ex.title), ex.n);
    var tt = 0;
    players.push({
      tick: function (dt, time) {
        tt += dt;
        var pose;
        var d = state.breath / state.speed;
        if (reduced) { pose = slice.full ? slice.b : slice.to; }
        else if (slice.setup) { pose = wobble(slice.from, "breathe", time); }
        else if (slice.full) { var c = (tt % (2 * d + 1)) / (2 * d); c = Math.min(1, c); pose = c <= 0.5 ? lerp(slice.a, slice.b, ease(c * 2)) : lerp(slice.b, slice.a, ease((c - 0.5) * 2)); }
        else if (slice.wob) { pose = wobble(slice.from, slice.wob, time); }
        else { var cyc = d + 0.9; var k = Math.min(1, (tt % cyc) / d); pose = lerp(slice.from, slice.to, ease(k)); }
        person.set(pose);
      }
    });
  }

  /* ---------------- views ---------------- */
  var app = document.getElementById("app");
  var listFilter = "all", listQuery = "";

  function viewList() {
    var learnedCount = Object.keys(state.learned).length;
    app.innerHTML =
      '<section class="hero"><h1 class="display">' + esc(t("heroTitle")) + "</h1><p>" + esc(t("heroBody")) + "</p></section>" +
      '<div class="meter"><div class="meter-bar"><span style="width:' + (learnedCount / 34 * 100) + '%"></span></div><p>' + esc(t("learnedOf", { n: learnedCount })) + "</p></div>" +
      '<div class="filters"><input class="search" type="search" placeholder="' + esc(t("search")) + '" aria-label="' + esc(t("search")) + '" value="' + esc(listQuery) + '">' +
      '<span class="seg" role="radiogroup" aria-label="' + esc(t("search")) + '">' +
      ["all", "favorites", "learned", "toLearn"].map(function (f) { return '<button type="button" role="radio" data-f="' + f + '" aria-checked="' + (listFilter === f) + '">' + esc(t(f)) + "</button>"; }).join("") +
      "</span></div><div class='list'></div>";
    var listEl = app.querySelector(".list");
    function renderGrid() {
      clearPlayers();
      var q = listQuery.trim().toLowerCase();
      var items = EXERCISES.filter(function (e) {
        if (q && (e.n + " " + e.title.en + " " + e.title.es + " " + e.book).toLowerCase().indexOf(q) < 0) return false;
        if (listFilter === "favorites") return state.favorites.indexOf(e.n) >= 0;
        if (listFilter === "learned") return !!state.learned[e.n];
        if (listFilter === "toLearn") return !state.learned[e.n];
        return true;
      });
      if (!items.length) { listEl.innerHTML = '<p class="empty">' + esc(listFilter === "favorites" && !q ? t("noFav") : t("none")) + "</p>"; return; }
      listEl.innerHTML = '<ol class="grid">' + items.map(function (e) {
        var flags = (state.favorites.indexOf(e.n) >= 0 ? "♥ " : "") + (state.learned[e.n] ? "✓ " + esc(t("isLearned")) : "");
        return '<li><a class="card" href="#/lesson/' + e.n + '"><span class="card-top"><span class="card-num display">' + pad(e.n) + '</span><span class="card-flags">' + flags + "</span></span>" +
          '<span class="card-stage" data-n="' + e.n + '"></span><span class="card-title">' + bi(e.title) + '</span><span class="card-focus">' + esc(pick(LESSONS[e.n].focus)) + "</span></a></li>";
      }).join("") + "</ol>";
      // each card shows the key position; it plays the movement while hovered or focused
      listEl.querySelectorAll(".card-stage").forEach(function (host) {
        var n = +host.dataset.n, ex = BY_N[n], ps = posesFor(n);
        var person = makePerson(host, "");
        person.svg.setAttribute("aria-hidden", "true");
        person.set(ps.b);
        var active = false, tt = 0, card = host.closest(".card");
        var on = function () { active = true; tt = 0; }, off = function () { active = false; person.set(ps.b); };
        card.addEventListener("mouseenter", on); card.addEventListener("mouseleave", off);
        card.addEventListener("focus", on); card.addEventListener("blur", off);
        players.push({ tick: function (dt) {
          if (!active || reduced) return;
          tt += dt; var c = (tt % 3.2) / 3.2;
          person.set(c <= 0.5 ? lerp(ps.a, ps.b, ease(c * 2)) : lerp(ps.b, ps.a, ease((c - 0.5) * 2)));
        } });
      });
    }
    renderGrid();
    app.querySelector(".search").addEventListener("input", function (e) { listQuery = e.target.value; renderGrid(); });
    app.querySelector(".seg").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      listFilter = b.dataset.f;
      app.querySelectorAll(".filters .seg button").forEach(function (x) { x.setAttribute("aria-checked", String(x === b)); });
      renderGrid();
    });
  }

  function viewLesson(n, stepIndex) {
    var ex = BY_N[n]; if (!ex) { location.hash = "#/"; return; }
    var l = LESSONS[n];
    var steps = ex.steps.en.length;
    var total = steps + 1; // set-up + movement steps
    var cur = Math.max(0, Math.min(total - 1, stepIndex || 0));
    var fav = state.favorites.indexOf(n) >= 0, learned = !!state.learned[n];
    var prev = BY_N[n - 1], next = BY_N[n + 1];
    var seen = {};
    app.innerHTML =
      '<a class="back" href="#/">‹ ' + esc(t("allLessons")) + "</a>" +
      '<header class="lesson-head"><div><div class="lesson-num display">' + pad(n) + "<small>/ 34</small></div>" +
        '<h1 class="lesson-title display">' + bi(ex.title) + "</h1></div>" +
        '<div><p class="label">' + esc(t("whatItTrains")) + '</p><p class="focus">' + bi(l.focus) + '</p><p class="muted" style="margin:.4rem 0 0;font-size:.9rem">' + bi(ex.reps) + "</p>" +
        '<div class="row" style="margin-top:1rem"><button type="button" class="btn js-fav"></button><button type="button" class="btn js-learned"></button><a class="btn btn-ink" href="#/practice/' + n + '">' + esc(t("practiceFrom")) + "</a></div></div>" +
      "</header>" +
      '<section class="clip js-demo" aria-label="' + esc(t("demo")) + '"></section><p class="clip-note">' + esc(t("clipNote")) + "</p>" +
      '<section class="steps" aria-labelledby="sbs"><h2 class="h2 display" id="sbs">' + esc(t("stepByStep")) + "</h2>" +
        '<ol class="steptabs" aria-label="' + esc(t("stepByStep")) + '">' + Array.apply(null, Array(total)).map(function (_, i) {
          return '<li><button type="button" data-i="' + i + '" aria-label="' + esc(i === 0 ? t("setUp") : t("stepWord", { i: i })) + '">' + (i === 0 ? esc(t("setUp")) : i) + "</button></li>";
        }).join("") + "</ol>" +
        '<div class="stepcard"><div class="clip-stage js-stepfig"></div><div><p class="step-count"></p><h3 class="step-title display"></h3><p class="step-text serif"></p><span class="tag"></span>' +
        '<div class="step-nav"><button type="button" class="btn js-sprev">‹ ' + esc(t("prevStep")) + '</button><button type="button" class="btn btn-ink js-snext">' + esc(t("nextStep")) + " ›</button>" +
        (canSpeak ? '<button type="button" class="btn btn-ghost js-sread">' + esc(t("readStep")) + "</button>" : "") + '</div><div class="row step-voice">' + voiceControls() + "</div></div></div>" +
      "</section>" +
      '<div class="sections">' +
        '<section class="sec"><h3>' + esc(t("breatheTitle")) + '</h3><div class="serif"><p style="margin:0">' + bi(ex.breath) + "</p></div></section>" +
        '<section class="sec"><h3>' + esc(t("feelTitle")) + '</h3><div class="serif"><p style="margin:0 0 1rem">' + bi(l.feel) + '</p><p class="label">' + esc(t("cues")) + "</p>" + biList(ex.cues) + "</div></section>" +
        '<section class="sec"><h3>' + esc(t("checkTitle")) + '</h3><div><p class="muted" style="margin:0">' + esc(t("checkIntro")) + '</p><ul class="checks">' +
          ex.mistakes.en.map(function (m, i) { return '<li><label><input type="checkbox" class="js-check"><span>' + bi({ en: m, es: ex.mistakes.es[i] }) + "</span></label></li>"; }).join("") +
          '</ul><p class="label js-checkall" role="status" hidden>' + esc(t("checkAll")) + "</p></div></section>" +
        '<section class="sec"><h3>' + esc(t("easier")) + '</h3><div class="pair"><div class="box box-blush"><h4>' + esc(t("easier")) + '</h4><p class="serif" style="margin:0">' + bi(ex.mod) + '</p></div><div class="box"><h4>' + esc(t("safety")) + '</h4><p class="serif" style="margin:0">' + bi(ex.safety) + "</p></div></div></section>" +
        '<aside class="history"><h3>' + esc(t("history")) + "</h3><p>" + esc(t("historyBody", { n: n, t: ex.book })) + '</p><p class="small">' + esc(t("historyNote")) + "</p></aside>" +
        '<section><label class="label" for="notes">' + esc(t("notes")) + '</label><textarea id="notes" rows="4" placeholder="' + esc(t("notesPh")) + '"></textarea><p class="muted" style="font-size:.8rem;margin:.3rem 0 0">' + esc(t("notesSaved")) + "</p></section>" +
      "</div>" +
      '<nav class="pager" aria-label="' + esc(t("lessons")) + '">' +
        (prev ? '<a href="#/lesson/' + prev.n + '"><small>‹ ' + esc(t("prev")) + "</small>" + pad(prev.n) + " " + esc(pick(prev.title)) + "</a>" : "<span></span>") +
        (next ? '<a href="#/lesson/' + next.n + '" style="text-align:right"><small>' + esc(t("next")) + " ›</small>" + pad(next.n) + " " + esc(pick(next.title)) + "</a>" : "<span></span>") +
      "</nav>";

    mountDemo(app.querySelector(".js-demo"), ex, { loop: true });

    // favorites / learned
    var favBtn = app.querySelector(".js-fav"), lBtn = app.querySelector(".js-learned");
    function syncFlags() {
      favBtn.textContent = fav ? "♥ " + t("favRemove") : "♡ " + t("favAdd"); favBtn.className = "btn js-fav" + (fav ? " btn-on" : ""); favBtn.setAttribute("aria-pressed", String(fav));
      lBtn.textContent = learned ? "✓ " + t("isLearned") : t("markLearned"); lBtn.className = "btn js-learned" + (learned ? " btn-plum" : ""); lBtn.setAttribute("aria-pressed", String(learned));
    }
    syncFlags();
    favBtn.addEventListener("click", function () { fav = !fav; state.favorites = fav ? state.favorites.concat([n]) : state.favorites.filter(function (x) { return x !== n; }); save(); syncFlags(); });
    lBtn.addEventListener("click", function () { learned = !learned; if (learned) state.learned[n] = Date.now(); else delete state.learned[n]; save(); syncFlags(); });

    // step by step
    var stepPlayers = [];
    var figHost = app.querySelector(".js-stepfig");
    function stepText(i) { return i === 0 ? ex.start : { en: ex.steps.en[i - 1], es: ex.steps.es[i - 1] }; }
    function showStep(i) {
      cur = i; seen[i] = true;
      stopSpeech();
      players = players.filter(function (p) { return stepPlayers.indexOf(p) < 0; });
      figHost.innerHTML = "";
      var before = players.length;
      var slice = i === 0 ? { setup: true, from: posesFor(n).a } : stepSlice(n, i - 1, steps);
      mountStepFrame(figHost, ex, slice);
      stepPlayers = players.slice(before);
      app.querySelector(".step-count").textContent = i === 0 ? t("startPos") : t("stepOf", { i: i, n: steps });
      app.querySelector(".step-title").textContent = i === 0 ? t("setUp") : t("stepWord", { i: i });
      app.querySelector(".step-text").innerHTML = bi(stepText(i));
      var tag = app.querySelector(".tag");
      var br = i === 0 ? null : slice.breath;
      tag.className = "tag" + (br === "in" ? " in" : br === "out" ? " out" : "");
      tag.textContent = i === 0 ? t("breatheNaturally") : br === "in" ? t("inhale") : br === "out" ? t("exhale") : t("inhale") + " / " + t("exhale");
      app.querySelectorAll(".steptabs button").forEach(function (b) {
        var bi_ = +b.dataset.i;
        if (bi_ === i) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
        b.classList.toggle("seen", !!seen[bi_]);
      });
      app.querySelector(".js-sprev").disabled = i === 0;
      var nx = app.querySelector(".js-snext");
      nx.disabled = i === total - 1;
      history.replaceState(null, "", "#/lesson/" + n + (i ? "/" + i : ""));
    }
    app.querySelector(".steptabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) showStep(+b.dataset.i); });
    app.querySelector(".js-sprev").addEventListener("click", function () { if (cur > 0) showStep(cur - 1); });
    app.querySelector(".js-snext").addEventListener("click", function () { if (cur < total - 1) showStep(cur + 1); });
    var rd = app.querySelector(".js-sread");
    if (rd) rd.addEventListener("click", function () {
      unlockSpeech();
      var st = stepText(cur);
      speak({
        en: (cur === 0 ? tl("en", "setUp") : tl("en", "stepWord", { i: cur })) + ". " + st.en,
        es: (cur === 0 ? tl("es", "setUp") : tl("es", "stepWord", { i: cur })) + ". " + st.es
      });
    });
    bindVoiceControls(app.querySelector(".step-voice"));
    showStep(cur);

    // self-check
    var checks = app.querySelectorAll(".js-check"), allMsg = app.querySelector(".js-checkall");
    checks.forEach(function (c) { c.addEventListener("change", function () {
      var all = true; checks.forEach(function (x) { if (!x.checked) all = false; }); allMsg.hidden = !all;
    }); });

    // notes
    var ta = app.querySelector("#notes"), timer = 0;
    ta.addEventListener("focus", function () { setTimeout(function () { ta.scrollIntoView({ block: "center", behavior: reduced ? "auto" : "smooth" }); }, 300); });
    ta.value = state.notes[n] || "";
    ta.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { if (ta.value.trim()) state.notes[n] = ta.value; else delete state.notes[n]; save(); }, 400);
    });
  }

  var practiceSeq = "all", practiceDone = 0;
  function practiceItems() {
    if (practiceSeq === "fav") return EXERCISES.filter(function (e) { return state.favorites.indexOf(e.n) >= 0; }).map(function (e) { return e.n; });
    if (practiceSeq === "to") return EXERCISES.filter(function (e) { return !state.learned[e.n]; }).map(function (e) { return e.n; });
    return EXERCISES.map(function (e) { return e.n; });
  }
  function viewPractice(startN, auto) {
    var items = practiceItems();
    var head = '<div class="practice-head"><div><h1 class="display" style="font-size:clamp(2.4rem,6vw,4.2rem);font-weight:400;line-height:1;margin:0">' + esc(t("practice")) + '</h1><p class="muted" style="max-width:48ch">' + esc(t("practiceIntro")) + "</p></div>" +
      '<label class="row"><span class="seg-label">' + esc(t("seq")) + '</span><select class="pill-select js-seq"><option value="all">' + esc(t("seqAll")) + '</option><option value="fav">' + esc(t("seqFav")) + '</option><option value="to">' + esc(t("seqTo")) + "</option></select></label></div>";
    if (!items.length) {
      app.innerHTML = head + '<p class="empty">' + esc(t("seqEmpty")) + "</p>";
      bindSeq(); return;
    }
    var i = Math.max(0, items.indexOf(startN));
    var ex = BY_N[items[i]];
    app.innerHTML = head +
      '<div class="dots" aria-label="' + esc(t("seq")) + '">' + items.map(function (n, j) {
        return '<button type="button" data-j="' + j + '" class="' + (state.learned[n] ? "done" : "") + '"' + (j === i ? ' aria-current="step"' : "") + ' aria-label="' + pad(n) + " " + esc(pick(BY_N[n].title)) + '" title="' + pad(n) + " " + esc(pick(BY_N[n].title)) + '"></button>';
      }).join("") + "</div>" +
      '<div class="practice-title"><span class="muted">' + (i + 1) + " " + esc(t("of")) + " " + items.length + '</span><span class="num display">' + pad(ex.n) + '</span><h2 class="display">' + bi(ex.title) + "</h2></div>" +
      '<p class="muted" style="margin:.3rem 0 0">' + bi(LESSONS[ex.n].focus) + "</p>" +
      '<section class="clip js-demo" aria-label="' + esc(t("demo")) + '"></section>' +
      '<details class="more"><summary>' + esc(t("showSteps")) + '</summary><div class="serif"><p><strong>' + esc(t("startPos")) + ".</strong> " + bi(ex.start) + "</p><ol>" +
        ex.steps.en.map(function (s, k) { return "<li>" + bi({ en: s, es: ex.steps.es[k] }) + "</li>"; }).join("") + "</ol></div></details>" +
      '<div class="row" style="margin-top:1.25rem"><button type="button" class="btn js-prev"' + (i === 0 ? " disabled" : "") + ">‹ " + esc(t("prev")) + '</button><button type="button" class="btn btn-ink js-next">' + esc(i === items.length - 1 ? t("finish") : t("doneNext")) + '</button><button type="button" class="btn btn-ghost js-skip">' + esc(t("skip")) + '</button><a class="btn btn-ghost" href="#/lesson/' + ex.n + '">' + esc(t("lessons")) + " ›</a></div>";
    bindSeq();
    function go(j, autoNext) {
      if (j >= items.length) { viewFinished(); return; }
      location.hash = "#/practice/" + items[Math.max(0, j)] + (autoNext ? "/auto" : "");
    }
    function markLearned() { if (!state.learned[ex.n]) { state.learned[ex.n] = Date.now(); save(); } practiceDone++; }
    mountDemo(app.querySelector(".js-demo"), ex, { autoplay: !!auto, onDone: function () { markLearned(); var d = app.querySelector('.dots button[data-j="' + i + '"]'); if (d) d.classList.add("done"); } });
    app.querySelector(".dots").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) go(+b.dataset.j); });
    app.querySelector(".js-prev").addEventListener("click", function () { go(i - 1); });
    app.querySelector(".js-next").addEventListener("click", function () { markLearned(); go(i + 1, true); });
    app.querySelector(".js-skip").addEventListener("click", function () { go(i + 1); });
  }
  function bindSeq() {
    var s = app.querySelector(".js-seq");
    s.value = practiceSeq;
    s.addEventListener("change", function () { practiceSeq = s.value; practiceDone = 0; var it = practiceItems(); location.hash = "#/practice/" + (it[0] || 1); route(); });
  }
  function viewFinished() {
    clearPlayers();
    app.innerHTML = '<section style="padding:2rem 0;max-width:40rem"><h1 class="display" style="font-style:italic;font-weight:400;font-size:clamp(2.6rem,6vw,4rem);line-height:1;margin:0">' + esc(t("finished")) + '</h1><p style="font-size:1.15rem">' + esc(t("finishedBody", { n: practiceDone })) + '</p><button type="button" class="btn btn-ink js-again">' + esc(t("again")) + "</button></section>";
    app.querySelector(".js-again").addEventListener("click", function () { practiceDone = 0; location.hash = "#/practice/" + (practiceItems()[0] || 1); });
  }

  /* ---------------- routing and chrome ---------------- */
  function applyChrome() {
    document.documentElement.lang = uiLang();
    document.documentElement.style.fontSize = Math.round(state.scale * 100) + "%";
    document.querySelectorAll("[data-t]").forEach(function (n) { n.textContent = t(n.dataset.t); });
    document.title = t("brandWord") + ": " + (uiLang() === "es" ? "aprende los 34 ejercicios" : "learn the 34 exercises");
    document.getElementById("lang").value = state.lang;
    document.getElementById("smaller").setAttribute("aria-label", t("smaller"));
    document.getElementById("larger").setAttribute("aria-label", t("larger"));
    document.querySelector(".size").setAttribute("aria-label", t("textSize"));
  }
  var lastRoute = "";
  function route() {
    clearPlayers();
    var h = location.hash.replace(/^#\/?/, "").split("/");
    var page = h[0] || "";
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      var on = a.dataset.nav === "practice" ? page === "practice" : a.dataset.nav === "favorites" ? page === "favorites" : (page !== "practice" && page !== "favorites");
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var key = page + "/" + (h[1] || "");
    if (page === "lesson") viewLesson(+h[1], +(h[2] || 0));
    else if (page === "practice") viewPractice(+(h[1] || 0) || practiceItems()[0], h[2] === "auto");
    else if (page === "favorites") { listFilter = "favorites"; viewList(); }
    else { if (lastRoute.indexOf("favorites") === 0) listFilter = "all"; viewList(); }
    if (key !== lastRoute) {
      window.scrollTo(0, 0); lastRoute = key;
      if (!reduced) { app.classList.remove("enter"); void app.offsetWidth; app.classList.add("enter"); }
    }
  }
  window.addEventListener("hashchange", route);
  document.getElementById("lang").addEventListener("change", function (e) { state.lang = e.target.value; save(); applyChrome(); route(); });
  document.getElementById("smaller").addEventListener("click", function () { state.scale = Math.max(0.85, +(state.scale - 0.1).toFixed(2)); save(); applyChrome(); });
  document.getElementById("larger").addEventListener("click", function () { state.scale = Math.min(1.5, +(state.scale + 0.1).toFixed(2)); save(); applyChrome(); });
  if (canSpeak) try { window.speechSynthesis.getVoices(); } catch (e) { /* ignore */ }

  /* ---------------- installable app ---------------- */
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () { /* offline cache unavailable here */ }); });
  }
  var installEl = document.getElementById("install"), deferred = null;
  var standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  function showInstall(kind) {
    if (!installEl || standalone || state.installDismissed) return;
    document.getElementById("install-text").textContent = kind === "ios" ? t("installIos") : t("installAndroid");
    var go = document.getElementById("install-go");
    go.hidden = kind === "ios"; go.textContent = t("installBtn");
    document.getElementById("install-x").setAttribute("aria-label", t("close"));
    installEl.hidden = false;
  }
  if (installEl) {
    document.getElementById("install-x").addEventListener("click", function () { installEl.hidden = true; state.installDismissed = true; save(); });
    document.getElementById("install-go").addEventListener("click", function () {
      if (!deferred) return;
      deferred.prompt();
      deferred.userChoice.then(function () { deferred = null; installEl.hidden = true; });
    });
    window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; showInstall("android"); });
    window.addEventListener("appinstalled", function () { installEl.hidden = true; state.installDismissed = true; save(); });
    var ua = navigator.userAgent || "";
    var isIos = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    if (isIos && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua) && window.self === window.top) setTimeout(function () { showInstall("ios"); }, 2500);
  }

  applyChrome();
  try { route(); }
  catch (err) {
    app.innerHTML = '<div role="alert" style="padding:2rem"><h1 class="display">Something went wrong</h1><p>Your saved progress is safe. Reload the page to continue.</p><button class="btn btn-ink" onclick="location.reload()">Reload</button></div>';
    if (window.console) console.error(err);
  }
})();
