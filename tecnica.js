/* GymLog · Técnica (módulo aparte). Requiere index.html con <script src="tecnica.js"></script> al final */
(function(){var st=document.createElement('style');st.textContent='#tec{position:fixed;inset:0;z-index:2600;background:#17181b;color:#f2f2f2;overflow:auto;display:none;-webkit-overflow-scrolling:touch}\n.tec-top{position:sticky;top:0;background:#1c1d20;display:flex;align-items:center;gap:10px;padding:12px 14px;z-index:2;border-bottom:1px solid #2c2d31;font-weight:700;font-size:13.5px;letter-spacing:.8px}\n.tec-top button{width:34px;height:34px;padding:0;margin:0;background:none;color:#fff;font-size:28px;line-height:1}\n.tec-in{max-width:520px;margin:auto;padding:16px}\n.tec-in h1{font-size:22px;margin:4px 0 2px;letter-spacing:.3px;color:#fff}.tec-g{color:#9a9ba0;margin:0 0 12px;font-size:14.5px}.tec-g b{color:#fff}\n.tec-in h2{font-size:13px;letter-spacing:.8px;margin:16px 0 6px;color:#fff}.tec-in ul{margin:0;padding-left:18px;line-height:1.55;font-size:15px}\n.tec-ld{color:#9a9ba0;font-size:14px}\n.tec-modes{display:flex;gap:6px;margin-bottom:10px}.tec-modes button,.tec-seg button{flex:1;margin:0;padding:9px;border-radius:10px;border:1px solid #3a3b40;background:#26272b;color:#ddd;font-weight:600;font-size:14px;width:auto}\n.tec-modes button.on{background:var(--ac);color:#111;border-color:var(--ac)}\n.tec-row{display:grid;grid-template-columns:34% 1fr;gap:8px}.tec-row2{margin-top:10px}\n.tec-mus{background:#26272b;border-radius:12px;padding:10px}.tec-mus p{font-size:10.5px;letter-spacing:.8px;color:#9a9ba0;margin:8px 0 5px}.tec-mus p:first-child{margin-top:0}.tec-mus p.en{font-size:10.5px;letter-spacing:0;text-transform:capitalize}\n.tm{display:block;padding:6px 8px;border-radius:9px;font-size:13px;font-weight:700;margin-bottom:5px}.tm.p{background:#E8604C;color:#fff;box-shadow:0 0 12px rgba(232,96,76,.45)}.tm.s{background:#3a3226;color:#F5A623;border:1px dashed #8a6a2a}\n.tec-pics{display:grid;gap:8px}.tpic,.tec-cmp{position:relative;border-radius:12px;overflow:hidden;border:1.5px solid #E8604C;background:#fff;aspect-ratio:4/3}\n.tpic img,.tec-cmp img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.tg{position:absolute;left:8px;top:8px;background:rgba(120,40,30,.9);color:#fff;padding:3px 9px;border-radius:8px;font-size:11px;font-weight:700;letter-spacing:.5px;z-index:2}.tg.r{left:auto;right:8px}\n.tec-cmp{touch-action:pan-y}.tec-cmp .tp{clip-path:inset(0 50% 0 0)}.th{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#E8604C;z-index:1}.th:after{content:"↔";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#E8604C;color:#fff;display:grid;place-items:center;font-weight:700}\n.tec-cmp input{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;z-index:3}\n.tec-seg{display:flex;gap:6px;margin-top:10px}\n.tec-none{background:#26272b;border-radius:12px;padding:16px;color:#9a9ba0;font-size:14px;display:grid;place-items:center;text-align:center}\n.tec-foot{margin-top:18px;display:grid;gap:8px}.tec-foot button{margin:0;background:none;color:#9a9ba0;border:1px solid #3a3b40;padding:9px;font-size:13.5px}.tec-foot span{font-size:11px;color:#6d6e73;text-align:center}\n#tec-q{background:#26272b;color:#fff;border:1px solid #3a3b40;margin-top:10px}.tres{display:flex;align-items:center;gap:10px;background:#26272b;border-radius:10px;padding:6px;margin-top:6px;font-size:13.5px}.tres img{width:60px;height:46px;object-fit:cover;border-radius:6px;background:#fff}\n.tec-cta{position:fixed;left:0;right:0;bottom:0;padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:linear-gradient(transparent,#17181b 35%)}.tec-cta button{width:100%;max-width:520px;display:block;margin:auto;padding:14px;background:var(--ac);color:#111;font-weight:800;font-size:16px;border-radius:12px}\n.tbtn{width:auto;margin:0;padding:6px 11px;font-size:13px;background:var(--bd);color:var(--ac);font-weight:700;border:1px solid var(--ac);border-radius:10px}\n';document.head.appendChild(st);var d=document.createElement('div');d.id='tec';document.body.appendChild(d)})();
/* ---------- Técnica (fotos: free-exercise-db, dominio público) ---------- */
var FDB_J=['https://cdn.jsdelivr.net/gh/yuhonas/free-exercise-db@main/','https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/'];
var TEC={
'Jalón al pecho':{q:['wide grip lat pulldown','lat pulldown'],t:['Pecho arriba y hombros abajo antes de tirar.','Lleva la barra a la clavícula, codos hacia el suelo.','Sube lento: no dejes que los hombros se eleven.']},
'Face pull':{q:['face pull'],t:['Polea a la altura de la cara, agarre con pulgares atrás.','Tira hacia la frente abriendo los codos.','Pausa 1 s atrás y vuelve controlado.']},
'Extensión de tríceps en polea':{q:['triceps pushdown','triceps pushdown rope attachment'],t:['Codos pegados al torso, sin balanceo.','Extiende por completo y aprieta el tríceps.','Sube hasta 90° de codo, no más.']},
'Remo con barra':{q:['bent over barbell row'],t:['Espalda neutra, torso inclinado ~45°.','Tira la barra al ombligo, codos cerca.','Baja controlado sin redondear la espalda.']},
'Press Copa o Frances':{q:['seated triceps press','dumbbell one arm triceps extension','overhead triceps extension'],t:['Codos apuntando al frente, cerca de la cabeza.','Baja la mancuerna detrás de la nuca con control.','Extiende sin abrir los codos.']},
'Remo en polea baja':{q:['seated cable rows','cable seated row'],t:['Pecho alto, espalda recta, no te balancees.','Lleva el agarre al abdomen juntando escápulas.','Estira los brazos despacio al volver.']},
'Fondos en máquina':{q:['dip machine','machine dip','bench dips'],t:['Hombros abajo, lejos de las orejas.','Baja hasta unos 90° de codo.','Empuja sin bloquear los codos de golpe.']},
'Press inclinado mancuernas':{q:['incline dumbbell press'],t:['Banco a 30–45°, escápulas retraídas.','Baja hasta que los codos queden a ~90°.','Empuja en arco juntando las mancuernas arriba.']},
'Rueda abdominal':{q:['ab roller','ab roller exercise'],t:['Abdomen contraído, espalda sin arquearse.','Avanza solo hasta donde controles.','Regresa llevando el ombligo hacia la columna.']},
'Sentadilla Smith':{q:['smith machine squat'],t:['Pies ligeramente adelante de la barra.','Baja hasta que los muslos queden paralelos.','Rodillas siguen la línea de los pies.']},
'Press militar':{q:['barbell shoulder press','standing military press'],t:['Core firme, glúteos apretados.','Sube la barra en línea recta frente a la cara.','Bloquea arriba sin arquear la espalda.']},
'Elevaciones laterales':{q:['side lateral raise'],t:['Codo ligeramente flexionado.','Sube hasta la altura del hombro, no más.','Baja lento, sin impulso del cuerpo.']},
'Reverse Fly':{q:['reverse machine flyes','bent over dumbbell rear delt raise with head on bench'],t:['Pecho apoyado, cuello neutro.','Abre los brazos hacia los lados, codos suaves.','Aprieta atrás 1 s y vuelve lento.']},
'Curl de bíceps con barra':{q:['barbell curl'],t:['Codos pegados al torso, sin balanceo.','Sube hasta contraer el bíceps.','Baja en 2–3 segundos.']},
'Curl martillo':{q:['hammer curls','dumbbell hammer curl'],t:['Agarre neutro, pulgares arriba.','Codos fijos junto al cuerpo.','Sube sin mover los hombros.']},
'Press banca mancuernas o barra':{q:['barbell bench press medium grip','dumbbell bench press'],t:['Mantén la retracción escapular.','Baja la barra controlada a la altura del pezón.','Pies firmes en el suelo para estabilidad.']},
'Peck Fly':{q:['butterfly','pec deck fly','machine flyes'],t:['Espalda pegada al respaldo, pecho alto.','Junta los brazos al frente apretando el pecho.','Regresa lento hasta sentir estiramiento.']},
'Abs con Botella':{q:['weighted crunch','crunches','cable crunch'],t:['Sostén la botella contra el pecho.','Sube solo el torso, lumbar apoyada.','Exhala al contraer, baja lento.']},
'Prensa':{q:['leg press'],t:['Espalda y glúteos pegados al respaldo.','Baja hasta ~90° de rodilla, sin despegar la cadera.','No bloquees las rodillas arriba.']},
'Extensión de cuádriceps':{q:['leg extensions'],t:['Ajusta el respaldo: rodilla alineada al eje.','Extiende y aprieta el cuádriceps 1 s.','Baja lento sin soltar el peso.']},
'Elevación de talones':{q:['standing calf raises','calf press','seated calf raise'],t:['Sube lo más alto posible, pausa 1 s.','Baja hasta estirar bien el talón.','Movimiento lento, sin rebote.']},
'Aductores':{q:['thigh adductor','adductor'],t:['Espalda recta y pelvis estable.','Cierra las piernas con control.','Abre despacio, sin dejar caer el peso.']},
'Abs en Maquina':{q:['ab crunch machine'],t:['Curva el torso llevando costillas a la pelvis.','Exhala al contraer el abdomen.','No tires con los brazos ni la cadera.']},
'Sentadilla Golbet':{q:['goblet squat'],t:['Mancuerna pegada al pecho, codos abajo.','Baja entre las rodillas, pecho arriba.','Empuja con los talones para subir.']},
'Zancadas':{q:['dumbbell lunges','dumbbell rear lunge'],t:['Torso erguido, paso largo.','Rodilla delantera sobre el tobillo.','Empuja con el talón para volver.']},
'Curl femoral':{q:['lying leg curls','seated leg curl'],t:['Cadera pegada al banco.','Flexiona hasta contraer el isquio.','Baja lento, sin rebotar.']},
'Hip thrust':{q:['barbell hip thrust','barbell glute bridge'],t:['Espalda alta apoyada en el banco.','Sube la cadera apretando los glúteos.','Mentón al pecho, costillas abajo.']},
'Gluteo':{q:['glute kickback','butt lift bridge','cable hip adduction'],t:['Aprieta el glúteo al final del movimiento.','Core firme, lumbar neutra.','Controla el regreso, sin impulso.']},
'Press plano con mancuernas':{q:['dumbbell bench press'],t:['Escápulas retraídas y pies firmes.','Baja hasta la altura del pecho.','Empuja sin chocar las mancuernas.']},
'Dominadas asistidas':{q:['machine assisted pull up','band assisted pull-up','pullups'],t:['Hombros abajo antes de subir.','Sube hasta pasar la barbilla de la barra.','Baja lento hasta extender los brazos.']},
'Press de hombro con mancuernas':{q:['dumbbell shoulder press','seated dumbbell press'],t:['Espalda apoyada, core firme.','Sube sin chocar las mancuernas.','Baja hasta la altura de las orejas.']},
'Remo con mancuerna':{q:['one-arm dumbbell row'],t:['Apoya mano y rodilla, espalda plana.','Lleva el codo hacia la cadera.','Baja estirando el brazo completo.']},
'Curl de bíceps':{q:['dumbbell bicep curl','barbell curl'],t:['Codos fijos junto al torso.','Sube girando la muñeca hacia arriba.','Baja controlado en 2–3 s.']},
'Extensión de tríceps':{q:['triceps pushdown','dumbbell one arm triceps extension','lying triceps press'],t:['Codos quietos, solo se mueve el antebrazo.','Extiende completo y aprieta.','Regresa despacio.']}
};
var FDB=null,TECSTATE={};
function tecPick(){try{return JSON.parse(localStorage.getItem('gymlog_tecpick'))||{}}catch(e){return{}}}
function tecSavePick(n,id){var p=tecPick();p[n]=id;try{localStorage.setItem('gymlog_tecpick',JSON.stringify(p))}catch(e){}}
function tecTok(s){return String(s).toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(function(t){return t&&t!=='the'&&t!=='with'}).map(function(t){return t.length>3&&t.charAt(t.length-1)==='s'?t.slice(0,-1):t})}
function tecScore(q,name){var a=tecTok(q),b=tecTok(name),i=0;a.forEach(function(t){if(b.indexOf(t)>-1)i++});return i/(a.length+b.length-i)}
function tecMatch(n){
  var pk=tecPick()[n];if(pk){var f=FDB.filter(function(x){return x.id===pk})[0];if(f)return f}
  var qs=(TEC[n]&&TEC[n].q)||[n],best=null,bs=0;
  FDB.forEach(function(x){qs.forEach(function(q,k){var s=tecScore(q,x.name)-k*0.01;if(s>bs){bs=s;best=x}})});
  return bs>=0.34?best:null;
}
function tecLoad(cb){
  if(FDB)return cb(true);
  try{var c=JSON.parse(localStorage.getItem('gymlog_fdb'));if(c&&c.length){FDB=c;return cb(true)}}catch(e){}
  var k=0;(function go(){
    if(k>=FDB_J.length)return cb(false);
    var u=FDB_J[k++]+(k===1?'dist/exercises.json':'dist/exercises.json');
    var ac=typeof AbortController!=='undefined'?new AbortController():null;if(ac)setTimeout(function(){ac.abort()},10000);fetch(u,ac?{signal:ac.signal}:undefined).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){
      FDB=j.map(function(x){return{id:x.id,name:x.name,img:x.images||[],pm:x.primaryMuscles||[]}});
      try{localStorage.setItem('gymlog_fdb',JSON.stringify(FDB))}catch(e){}cb(true)
    }).catch(go);
  })();
}
function tecImg(path,el){var k=0;el.onerror=function(){k++;if(k<FDB_J.length)el.src=FDB_J[k]+'exercises/'+path;else{el.onerror=null;el.style.opacity='.25'}};el.src=FDB_J[0]+'exercises/'+path}
function tecClose(){document.getElementById('tec').style.display='none';document.body.style.overflow=''}
function openTec(n){
  var o=document.getElementById('tec');o.style.display='block';document.body.style.overflow='hidden';o.scrollTop=0;
  TECSTATE={n:n,mode:'v'};tecDraw('<p class="tec-ld">Cargando fotos…</p>',n);
  tecLoad(function(ok){
    if(!ok){TECSTATE.m=null;TECSTATE.err=1;return tecRender()}
    TECSTATE.m=tecMatch(n);tecRender();
  });
}
function tecDraw(body,n){
  var o=document.getElementById('tec');
  o.innerHTML='<div class="tec-top"><button onclick="tecClose()" aria-label="Volver">'+'‹'+'</button><span>DETALLES DEL EJERCICIO</span></div><div class="tec-in"><h1>'+esc(n).toUpperCase()+'</h1><p class="tec-g">Grupo muscular: <b>'+esc(muscleOf(n))+'</b></p>'+body+'</div>';
}
function tecRender(){
  var n=TECSTATE.n,m=TECSTATE.m,c=CAT[n]||{sec:[]},t=(TEC[n]&&TEC[n].t)||[];
  var mus='<div class="tec-mus"><p>PRINCIPAL</p><span class="tm p">'+esc(muscleOf(n))+'</span>'+(c.sec.length?'<p>SECUNDARIO</p>'+c.sec.map(function(s){return'<span class="tm s">'+esc(s)+'</span>'}).join(''):'')+(m&&m.pm.length?'<p class="en">'+esc(m.pm.join(', '))+'</p>':'')+'</div>';
  var media='';
  if(m&&m.img.length>=2){
    if(TECSTATE.mode==='c')media='<div class="tec-cmp" id="tcmp"><img id="tcf" alt=""><img class="tp" id="tci" alt=""><span class="tg">INICIAL</span><span class="tg r">FINAL</span><div class="th" id="tch"></div><input type="range" min="0" max="100" value="50" oninput="tecSl(this.value)"></div><div class="tec-seg"><button onclick="tecSl(100)">INICIAL</button><button onclick="tecSl(50)">COMPARAR</button><button onclick="tecSl(0)">FINAL</button></div>';
    else media='<div class="tec-pics"><div class="tpic"><img id="tci" alt=""><span class="tg">INICIAL</span></div><div class="tpic"><img id="tcf" alt=""><span class="tg">FINAL</span></div></div>';
    media='<div class="tec-modes"><button class="'+(TECSTATE.mode==='v'?'on':'')+'" onclick="TECSTATE.mode=\'v\';tecRender()">Vista</button><button class="'+(TECSTATE.mode==='c'?'on':'')+'" onclick="TECSTATE.mode=\'c\';tecRender()">Comparar</button></div>'+(TECSTATE.mode==='c'?media:'<div class="tec-row">'+mus+media+'</div>');
    if(TECSTATE.mode==='c')media+='<div class="tec-row2">'+mus+'</div>';
  }else{
    media='<div class="tec-row">'+mus+'<div class="tec-none">'+(TECSTATE.err?'Sin conexión: no pude cargar las fotos. Se guardan en el teléfono después de verlas una vez.':'No encontré fotos para este ejercicio.')+'</div></div>';
  }
  var tips=t.length?'<h2>TIPS CLAVE DE EJECUCIÓN</h2><ul>'+t.map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ul>':'';
  var chg='<div class="tec-foot"><button onclick="tecChange()">¿No es este ejercicio? Cambiar foto</button><span>Fotos: free-exercise-db · dominio público</span></div><div id="tec-sr"></div>';
  tecDraw(media+tips+chg+'<div style="height:70px"></div><div class="tec-cta"><button onclick="tecClose()">Volver a mi serie</button></div>',n);
  if(m&&m.img.length>=2){var a=document.getElementById('tci'),b=document.getElementById('tcf');tecImg(m.img[0],a);tecImg(m.img[1],b);if(TECSTATE.mode==='c')tecSl(50)}
}
function tecSl(v){var p=document.getElementById('tci'),h=document.getElementById('tch'),r=document.querySelector('.tec-cmp input');if(!p)return;r.value=v;p.style.clipPath='inset(0 '+(100-v)+'% 0 0)';h.style.left=v+'%'}
function tecChange(){
  var s=document.getElementById('tec-sr');
  s.innerHTML='<input id="tec-q" placeholder="Buscar en inglés (ej: bench press)" oninput="tecFind(this.value)"><div id="tec-res"></div>';document.getElementById('tec-q').focus();
}
function tecFind(q){
  var r=document.getElementById('tec-res');q=q.trim();if(q.length<3){r.innerHTML='';return}
  var l=FDB.map(function(x){return[tecScore(q,x.name),x]}).filter(function(a){return a[0]>0}).sort(function(a,b){return b[0]-a[0]}).slice(0,6);
  r.innerHTML=l.map(function(a,i){return'<div class="tres" onclick="tecUse(\''+a[1].id.replace(/'/g,"\\'")+'\')"><img id="tr'+i+'" alt=""><span>'+esc(a[1].name)+'</span></div>'}).join('')||'<p class="tec-ld">Sin resultados</p>';
  l.forEach(function(a,i){if(a[1].img[0])tecImg(a[1].img[0],document.getElementById('tr'+i))});
}
function tecUse(id){tecSavePick(TECSTATE.n,id);TECSTATE.m=FDB.filter(function(x){return x.id===id})[0];tecRender();showToast('Foto guardada para este ejercicio')}

function tecBtn(){
  try{
    if(!DATA.inSession||document.getElementById('tec-b'))return;
    var r=DATA.routines[DATA.rid];if(!r||isCardio(r))return;
    var n=r.ex[DATA.active],row=document.querySelector('#ex-active .row');if(!n||!row)return;
    var b=document.createElement('button');b.id='tec-b';b.className='tbtn';b.textContent='Técnica';b.onclick=function(){openTec(n)};
    row.insertBefore(b,row.querySelector('select'));
  }catch(e){}
}
(function(){var r0=render;render=function(){var x=r0.apply(this,arguments);tecBtn();return x}})();
tecBtn();

