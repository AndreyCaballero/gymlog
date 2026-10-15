/* GymLog · Técnica y cambio de ejercicio (módulo aparte). Requiere <script src="tecnica.js"></script> al final de index.html */
(function(){var st=document.createElement('style');st.textContent='#tec{position:fixed;inset:0;z-index:2600;background:#17181b;color:#f2f2f2;overflow:auto;display:none;-webkit-overflow-scrolling:touch}\n.tec-top{position:sticky;top:0;background:#1c1d20;display:flex;align-items:center;gap:10px;padding:12px 14px;z-index:2;border-bottom:1px solid #2c2d31;font-weight:700;font-size:13.5px;letter-spacing:.8px}\n.tec-top button{width:34px;height:34px;padding:0;margin:0;background:none;color:#fff;font-size:28px;line-height:1}\n.tec-in{max-width:520px;margin:auto;padding:16px}\n.tec-in h1{font-size:22px;margin:4px 0 2px;letter-spacing:.3px;color:#fff}.tec-g{color:#9a9ba0;margin:0 0 12px;font-size:14.5px}.tec-g b{color:#fff}\n.tec-in h2{font-size:13px;letter-spacing:.8px;margin:16px 0 6px;color:#fff}.tec-in ul{margin:0;padding-left:18px;line-height:1.55;font-size:15px}\n.tec-ld{color:#9a9ba0;font-size:14px}\n.tec-modes{display:flex;gap:6px;margin-bottom:10px}.tec-modes button,.tec-seg button{flex:1;margin:0;padding:9px;border-radius:10px;border:1px solid #3a3b40;background:#26272b;color:#ddd;font-weight:600;font-size:14px;width:auto}\n.tec-modes button.on{background:var(--ac);color:#111;border-color:var(--ac)}\n.tec-mus{background:#26272b;border-radius:12px;padding:10px}.tec-mus p{font-size:10.5px;letter-spacing:.8px;color:#9a9ba0;margin:8px 0 5px}.tec-mus p:first-child{margin-top:0}.tec-mus p.en{font-size:10.5px;letter-spacing:0;text-transform:capitalize}\n.tm{display:block;padding:6px 8px;border-radius:9px;font-size:13px;font-weight:700;margin-bottom:5px}.tm.p{background:#E8604C;color:#fff;box-shadow:0 0 12px rgba(232,96,76,.45)}.tm.s{background:#3a3226;color:#F5A623;border:1px dashed #8a6a2a}\n.tec-pics{display:grid;gap:8px}.tpic,.tec-cmp{position:relative;border-radius:12px;overflow:hidden;border:1.5px solid #E8604C;background:#fff;aspect-ratio:4/3}\n.tpic img,.tec-cmp img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.tg{position:absolute;left:8px;top:8px;background:rgba(120,40,30,.9);color:#fff;padding:3px 9px;border-radius:8px;font-size:11px;font-weight:700;letter-spacing:.5px;z-index:2}.tg.r{left:auto;right:8px}\n.tec-cmp{touch-action:pan-y}.tec-cmp .tp{clip-path:inset(0 50% 0 0)}.th{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#E8604C;z-index:1}.th:after{content:"↔";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#E8604C;color:#fff;display:grid;place-items:center;font-weight:700}\n.tec-cmp input{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;z-index:3}\n.tec-seg{display:flex;gap:6px;margin-top:10px}\n.tec-none{background:#26272b;border-radius:12px;padding:16px;color:#9a9ba0;font-size:14px;display:grid;place-items:center;text-align:center}\n.tec-foot{margin-top:18px;display:grid;gap:8px}.tec-foot button{margin:0;background:none;color:#9a9ba0;border:1px solid #3a3b40;padding:9px;font-size:13.5px}.tec-foot span{font-size:11px;color:#6d6e73;text-align:center}\n#tec-q{background:#26272b;color:#fff;border:1px solid #3a3b40;margin-top:10px}.tres{display:flex;align-items:center;gap:10px;background:#26272b;border-radius:10px;padding:6px;margin-top:6px;font-size:13.5px}.tres img{width:60px;height:46px;object-fit:cover;border-radius:6px;background:#fff}\n.tec-cta{position:fixed;left:0;right:0;bottom:0;padding:10px 16px calc(10px + env(safe-area-inset-bottom));background:linear-gradient(transparent,#17181b 35%)}.tec-cta button{width:100%;max-width:520px;display:block;margin:auto;padding:14px;background:var(--ac);color:#111;font-weight:800;font-size:16px;border-radius:12px}\n.tbtn{width:auto;margin:0;padding:6px 11px;font-size:13px;background:var(--bd);color:var(--ac);font-weight:700;border:1px solid var(--ac);border-radius:10px}\n\n.tec-mus2{display:grid;gap:8px;margin:4px 0 6px}.tec-mus2 h3{font-size:11px;letter-spacing:.9px;color:#9a9ba0;margin:6px 0 0}\n.tmb{display:flex;align-items:center;gap:12px;padding:14px;border-radius:14px;font-size:17px;font-weight:800}\n.tmb.p{background:linear-gradient(135deg,#E8604C,#b8402f);color:#fff;box-shadow:0 0 18px rgba(232,96,76,.35)}.tmb.s{background:#2d2a24;color:#F5A623;border:1px dashed #8a6a2a;font-size:15px;font-weight:700;padding:11px 14px}\n.tmb i{width:12px;height:12px;border-radius:50%;background:currentColor;flex:none}\n.tec-st{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px}.tec-st div{background:#26272b;border-radius:12px;padding:10px 4px;text-align:center}.tec-st b{display:block;font-size:15px}.tec-st small{color:#9a9ba0;font-size:11px}\n.tec-tip{display:flex;gap:10px;background:#26272b;border-radius:12px;padding:12px;margin-bottom:8px;font-size:15px;line-height:1.35}.tec-tip b{color:#E8604C;flex:none}\n.sw-top{display:flex;gap:8px;align-items:center}.sw-top input{flex:1;background:#26272b;color:#fff;border:1px solid #3a3b40;margin:0}\n.sw-ch{display:flex;gap:6px;overflow-x:auto;margin:10px 0;padding-bottom:4px}.sw-ch button{flex:none;width:auto;margin:0;padding:7px 12px;border-radius:20px;border:1px solid #3a3b40;background:#26272b;color:#ddd;font-size:13px}.sw-ch button.on{background:var(--ac);color:#111;border-color:var(--ac);font-weight:700}\n.sw-it{display:flex;justify-content:space-between;align-items:center;gap:8px;background:#26272b;border-radius:12px;padding:12px;margin-bottom:6px}.sw-it span{font-size:15px;font-weight:600}.sw-it small{display:block;color:#9a9ba0;font-weight:400;font-size:12px}.sw-it button{width:auto;margin:0;padding:7px 12px;font-size:13px;background:var(--ac);color:#111;font-weight:700;border-radius:9px}\n.sw-cur{color:#9a9ba0;font-size:13px;margin:2px 0 4px}\n.swbtn{width:auto;margin:0 4px;padding:4px 9px;font-size:15px;background:none;color:var(--ac);border:1px solid var(--ac);border-radius:8px}\n#swp{position:fixed;inset:0;z-index:2700;background:#17181b;color:#f2f2f2;overflow:auto;display:none}\n';document.head.appendChild(st);['tec','swp'].forEach(function(id){var d=document.createElement('div');d.id=id;document.body.appendChild(d)})})();
var TEC={
'Jalón al pecho':{t:['Pecho arriba y hombros abajo antes de tirar.','Lleva la barra a la clavícula, codos hacia el suelo.','Sube lento: no dejes que los hombros se eleven.']},
'Face pull':{t:['Polea a la altura de la cara, agarre con pulgares atrás.','Tira hacia la frente abriendo los codos.','Pausa 1 s atrás y vuelve controlado.']},
'Extensión de tríceps en polea':{t:['Codos pegados al torso, sin balanceo.','Extiende por completo y aprieta el tríceps.','Sube hasta 90° de codo, no más.']},
'Remo con barra':{t:['Espalda neutra, torso inclinado ~45°.','Tira la barra al ombligo, codos cerca.','Baja controlado sin redondear la espalda.']},
'Press Copa o Frances':{t:['Codos apuntando al frente, cerca de la cabeza.','Baja la mancuerna detrás de la nuca con control.','Extiende sin abrir los codos.']},
'Remo en polea baja':{t:['Pecho alto, espalda recta, no te balancees.','Lleva el agarre al abdomen juntando escápulas.','Estira los brazos despacio al volver.']},
'Fondos en máquina':{t:['Hombros abajo, lejos de las orejas.','Baja hasta unos 90° de codo.','Empuja sin bloquear los codos de golpe.']},
'Press inclinado mancuernas':{t:['Banco a 30–45°, escápulas retraídas.','Baja hasta que los codos queden a ~90°.','Empuja en arco juntando las mancuernas arriba.']},
'Rueda abdominal':{t:['Abdomen contraído, espalda sin arquearse.','Avanza solo hasta donde controles.','Regresa llevando el ombligo hacia la columna.']},
'Sentadilla Smith':{t:['Pies ligeramente adelante de la barra.','Baja hasta que los muslos queden paralelos.','Rodillas siguen la línea de los pies.']},
'Press militar':{t:['Core firme, glúteos apretados.','Sube la barra en línea recta frente a la cara.','Bloquea arriba sin arquear la espalda.']},
'Elevaciones laterales':{t:['Codo ligeramente flexionado.','Sube hasta la altura del hombro, no más.','Baja lento, sin impulso del cuerpo.']},
'Reverse Fly':{t:['Pecho apoyado, cuello neutro.','Abre los brazos hacia los lados, codos suaves.','Aprieta atrás 1 s y vuelve lento.']},
'Curl de bíceps con barra':{t:['Codos pegados al torso, sin balanceo.','Sube hasta contraer el bíceps.','Baja en 2–3 segundos.']},
'Curl martillo':{t:['Agarre neutro, pulgares arriba.','Codos fijos junto al cuerpo.','Sube sin mover los hombros.']},
'Press banca mancuernas o barra':{t:['Mantén la retracción escapular.','Baja la barra controlada a la altura del pezón.','Pies firmes en el suelo para estabilidad.']},
'Peck Fly':{t:['Espalda pegada al respaldo, pecho alto.','Junta los brazos al frente apretando el pecho.','Regresa lento hasta sentir estiramiento.']},
'Abs con Botella':{t:['Sostén la botella contra el pecho.','Sube solo el torso, lumbar apoyada.','Exhala al contraer, baja lento.']},
'Prensa':{t:['Espalda y glúteos pegados al respaldo.','Baja hasta ~90° de rodilla, sin despegar la cadera.','No bloquees las rodillas arriba.']},
'Extensión de cuádriceps':{t:['Ajusta el respaldo: rodilla alineada al eje.','Extiende y aprieta el cuádriceps 1 s.','Baja lento sin soltar el peso.']},
'Elevación de talones':{t:['Sube lo más alto posible, pausa 1 s.','Baja hasta estirar bien el talón.','Movimiento lento, sin rebote.']},
'Aductores':{t:['Espalda recta y pelvis estable.','Cierra las piernas con control.','Abre despacio, sin dejar caer el peso.']},
'Abs en Maquina':{t:['Curva el torso llevando costillas a la pelvis.','Exhala al contraer el abdomen.','No tires con los brazos ni la cadera.']},
'Sentadilla Golbet':{t:['Mancuerna pegada al pecho, codos abajo.','Baja entre las rodillas, pecho arriba.','Empuja con los talones para subir.']},
'Zancadas':{t:['Torso erguido, paso largo.','Rodilla delantera sobre el tobillo.','Empuja con el talón para volver.']},
'Curl femoral':{t:['Cadera pegada al banco.','Flexiona hasta contraer el isquio.','Baja lento, sin rebotar.']},
'Hip thrust':{t:['Espalda alta apoyada en el banco.','Sube la cadera apretando los glúteos.','Mentón al pecho, costillas abajo.']},
'Gluteo':{t:['Aprieta el glúteo al final del movimiento.','Core firme, lumbar neutra.','Controla el regreso, sin impulso.']},
'Press plano con mancuernas':{t:['Escápulas retraídas y pies firmes.','Baja hasta la altura del pecho.','Empuja sin chocar las mancuernas.']},
'Dominadas asistidas':{t:['Hombros abajo antes de subir.','Sube hasta pasar la barbilla de la barra.','Baja lento hasta extender los brazos.']},
'Press de hombro con mancuernas':{t:['Espalda apoyada, core firme.','Sube sin chocar las mancuernas.','Baja hasta la altura de las orejas.']},
'Remo con mancuerna':{t:['Apoya mano y rodilla, espalda plana.','Lleva el codo hacia la cadera.','Baja estirando el brazo completo.']},
'Curl de bíceps':{t:['Codos fijos junto al torso.','Sube girando la muñeca hacia arriba.','Baja controlado en 2–3 s.']},
'Extensión de tríceps':{t:['Codos quietos, solo se mueve el antebrazo.','Extiende completo y aprieta.','Regresa despacio.']}
};

var TECSTATE={};
function tecClose(){document.getElementById('tec').style.display='none';document.body.style.overflow=''}
function openTec(n){
  var c=CAT[n]||{sec:[],eq:'',carga:'',rmin:0,rmax:0},t=(c.tips&&c.tips.length)?c.tips:((TEC[n]&&TEC[n].t)||[]),rg=rangeFor(n),o=document.getElementById('tec');
  var h='<div class="tec-top"><button onclick="tecClose()" aria-label="Volver">‹</button><span>DETALLES DEL EJERCICIO</span></div><div class="tec-in"><h1>'+esc(n).toUpperCase()+'</h1><p class="tec-g">Grupo muscular: <b>'+esc(muscleOf(n))+'</b></p>';
  var dets=c.det?String(c.det).replace(/ y /g,',').split(',').map(function(x){x=x.trim();return x.charAt(0).toUpperCase()+x.slice(1)}).filter(Boolean):c.sec;
  h+='<div class="tec-mus2"><h3>MÚSCULO PRINCIPAL</h3><div class="tmb p"><i></i>'+esc(c.pr||muscleOf(n))+'</div>'+(dets.length?'<h3>MÚSCULOS SECUNDARIOS</h3>'+dets.map(function(s){return'<div class="tmb s"><i></i>'+esc(s)+'</div>'}).join(''):'')+'</div>';
  h+='<div class="tec-st"><div><b>'+esc(c.eq||'—')+'</b><small>Equipo</small></div><div><b>'+esc(c.carga||'—')+'</b><small>Carga</small></div><div><b>'+rg[0]+'–'+rg[1]+'</b><small>Reps</small></div></div>';
  h+='<h2>TIPS CLAVE DE EJECUCIÓN</h2>'+(t.length?t.map(function(x,i){return'<div class="tec-tip"><b>'+(i+1)+'</b><span>'+esc(x)+'</span></div>'}).join(''):'<p class="tec-ld">Aún no hay consejos para este ejercicio.</p>');
  h+='<div style="height:70px"></div></div><div class="tec-cta"><button onclick="tecClose()">Volver a mi serie</button></div>';
  o.innerHTML=h;o.style.display='block';o.scrollTop=0;document.body.style.overflow='hidden';
}
/* ---------- cambiar ejercicio ---------- */
var SW={};
function swClose(){document.getElementById('swp').style.display='none';document.body.style.overflow=''}
function swOpen(ri,ei){
  var r=DATA.routines[ri];if(!r)return;var cur=r.ex[ei];
  SW={ri:ri,ei:ei,g:muscleOf(cur),q:''};
  var o=document.getElementById('swp');o.style.display='block';document.body.style.overflow='hidden';o.scrollTop=0;swDraw();
}
function swAdd(ri){
  var r=DATA.routines[ri];if(!r)return;var cnt={},best='Todos',mx=0;
  if(isCardio(r))best='Cardio';else{r.ex.forEach(function(n){var g=muscleOf(n);cnt[g]=(cnt[g]||0)+1;if(cnt[g]>mx){mx=cnt[g];best=g}})}
  SW={ri:ri,ei:-1,g:best,q:''};
  var o=document.getElementById('swp');o.style.display='block';document.body.style.overflow='hidden';o.scrollTop=0;swDraw();
}
function swNames(){var m={};Object.keys(CAT).forEach(function(k){m[k]=1});try{getAllEx().forEach(function(k){m[k]=1})}catch(e){}return Object.keys(m)}
function swDraw(){
  var r=DATA.routines[SW.ri],cur=r.ex[SW.ei]||'',o=document.getElementById('swp');
  var gs=['Todos'].concat(MUSCLES);
  var h='<div class="tec-top"><button onclick="swClose()" aria-label="Cerrar">‹</button><span>'+(SW.ei<0?'AÑADIR EJERCICIOS':'CAMBIAR EJERCICIO')+'</span></div><div class="tec-in"><p class="sw-cur">'+(SW.ei<0?'Añadir a: <b style="color:#fff">'+esc(r.name)+'</b> · '+r.ex.length+' ejercicios':'Reemplazar: <b style="color:#fff">'+esc(cur)+'</b> · en <b style="color:#fff">'+esc(r.name)+'</b>')+'</p>';
  h+='<div class="sw-top"><input id="sw-q" placeholder="Buscar ejercicio…" value="'+esc(SW.q)+'" oninput="SW.q=this.value;swList()"></div>';
  h+='<div class="sw-ch">'+gs.map(function(g){return'<button class="'+(SW.g===g?'on':'')+'" onclick="SW.g=\''+g+'\';swDraw()">'+g+'</button>'}).join('')+'</div><div id="sw-list"></div></div>';
  o.innerHTML=h;swList();
}
function swList(){
  var r=DATA.routines[SW.ri],q=SW.q.trim().toLowerCase(),box=document.getElementById('sw-list');
  var l=swNames().filter(function(n){return n!==r.ex[SW.ei]&&r.ex.indexOf(n)<0&&(q?n.toLowerCase().indexOf(q)>-1:(SW.g==='Todos'||muscleOf(n)===SW.g))}).sort();
  var h=l.map(function(n,i){var c=CAT[n];return'<div class="sw-it"><span>'+esc(n)+'<small>'+esc(muscleOf(n))+(c&&c.eq?' · '+esc(c.eq):'')+'</small></span><button data-n="'+esc(n)+'" onclick="swPick(this.dataset.n)">'+(SW.ei<0?'Añadir':'Elegir')+'</button></div>'}).join('');
  if(q&&swNames().map(function(x){return x.toLowerCase()}).indexOf(q)<0)h+='<div class="sw-it"><span>Usar «'+esc(SW.q.trim())+'»<small>Ejercicio nuevo, grupo: '+(SW.g==='Todos'?'se calcula solo':esc(SW.g))+'</small></span><button data-n="'+esc(SW.q.trim())+'" onclick="swPick(this.dataset.n,true)">'+(SW.ei<0?'Añadir':'Usar')+'</button></div>';
  box.innerHTML=h||'<p class="tec-ld">No hay ejercicios con ese filtro. Prueba con «Todos».</p>';
}
function swPick(n,isNew){
  var r=DATA.routines[SW.ri],old=r.ex[SW.ei];n=String(n).trim();if(!n)return;
  if(SW.ei<0){
    if(r.ex.indexOf(n)>-1)return;
    r.ex.push(n);
    if(!CAT[n]&&!DATA.muscles[n])DATA.muscles[n]=(isNew&&SW.g!=='Todos')?SW.g:guessMuscle(n);
    if(SW.ri===DATA.rid&&!DATA.inSession)initDraft();
    saveCloud();render();showToast('Añadido: '+n,2500);
    SW.q='';swDraw();return;
  }
  r.ex[SW.ei]=n;
  if(!CAT[n]&&!DATA.muscles[n])DATA.muscles[n]=(isNew&&SW.g!=='Todos')?SW.g:guessMuscle(n);
  if(SW.ri===DATA.rid&&DATA.inSession){
    var cardio=isCardio(r);DATA.draft[SW.ei]=[cardio?{minutes:'',done:false}:{w:'',r:'',done:false,restSec:0}];
    if(DATA.timer&&DATA.timer.exIdx===SW.ei)stopTimer(true);
    saveDraft();
  }else if(SW.ri===DATA.rid&&!DATA.inSession){initDraft()}
  saveCloud();swClose();render();showToast('Cambiado: '+old+' → '+n,3500);
}
/* ---------- botones en la app ---------- */
function tecBtn(){
  try{
    if(DATA.inSession&&!document.getElementById('tec-b')){
      var r=DATA.routines[DATA.rid],row=document.querySelector('#ex-active .row');
      if(r&&row){var n=r.ex[DATA.active],sel=row.querySelector('select'),ei=DATA.active;
        if(!isCardio(r)){var b=document.createElement('button');b.id='tec-b';b.className='tbtn';b.textContent='Técnica';b.onclick=function(){openTec(n)};row.insertBefore(b,sel)}
        var c=document.createElement('button');c.id='sw-b';c.className='swbtn';c.title='Cambiar ejercicio';c.innerHTML='⇄';c.onclick=function(){swOpen(DATA.rid,ei)};row.insertBefore(c,sel)}
    }
    document.querySelectorAll('[id^="exercises-list-"]').forEach(function(list){
      var ri=parseInt(list.id.replace('exercises-list-',''));
      if(!list.parentNode.querySelector('.swadd-'+ri)){var ab=document.createElement('button');ab.className='sm swadd-'+ri;ab.style.cssText='width:100%;margin-top:12px;padding:12px';ab.textContent='+ Elegir ejercicio de la lista';ab.onclick=function(){swAdd(ri)};list.parentNode.insertBefore(ab,list.nextSibling)}
      list.querySelectorAll('.ex-row').forEach(function(row,ei){
        if(row.querySelector('.swbtn'))return;
        var c=document.createElement('button');c.className='swbtn';c.innerHTML='⇄';c.title='Cambiar ejercicio';c.onclick=function(){swOpen(ri,ei)};
        row.insertBefore(c,row.querySelector('.x'));
      });
    });
  }catch(e){}
}
(function(){var r0=render;render=function(){var x=r0.apply(this,arguments);tecBtn();return x}})();
tecBtn();

/* ---------- deslizar para cambiar de pestaña ---------- */
(function(){
  var ORDER=['t','r','p','h'],sx=0,sy=0,st=0,ok=false;
  function blocked(el){
    var ids=['modal-overlay','custom-confirm-overlay','onb','skip','tec','swp','splash'];
    for(var i=0;i<ids.length;i++){var e=document.getElementById(ids[i]);if(e&&getComputedStyle(e).display!=='none')return true}
    for(;el&&el!==document.body;el=el.parentElement){
      if(/^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName)||(el.classList&&(el.classList.contains('drag-handle')||el.classList.contains('sortable-chosen'))))return true;
      if(el.scrollWidth>el.clientWidth+4){var o=getComputedStyle(el).overflowX;if(o==='auto'||o==='scroll')return true}
    }
    return false;
  }
  document.addEventListener('touchstart',function(e){
    if(e.touches.length!==1){ok=false;return}
    var t=e.touches[0];sx=t.clientX;sy=t.clientY;st=Date.now();
    ok=sx>24&&sx<window.innerWidth-24&&!blocked(e.target);
  },{passive:true});
  document.addEventListener('touchend',function(e){
    if(!ok)return;ok=false;
    var t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;
    if(Date.now()-st>700||Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*1.8)return;
    try{
      var i=ORDER.indexOf(DATA.tab);if(i<0)return;
      var j=dx<0?i+1:i-1;if(j<0||j>=ORDER.length)return;
      setTab(ORDER[j]);window.scrollTo(0,0);
      if(navigator.vibrate)navigator.vibrate(8);
    }catch(x){}
  },{passive:true});
})();

/* ---------- Historial: tarjetas contraídas, meses, filtros y "Ver más" ---------- */
var HS={open:{},n:20,rt:'',q:''};
(function(){
  var st=document.createElement('style');
  st.textContent='.hs-f{display:flex;gap:8px;margin:6px 0 10px}.hs-f select,.hs-f input{flex:1;min-width:0;margin:0}.hs-mo{display:flex;justify-content:space-between;align-items:baseline;margin:16px 2px 6px;color:var(--mut);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}.hs-mo i{font-style:normal;font-weight:500;letter-spacing:0;text-transform:none}.hs-h{display:flex;align-items:center;gap:8px;cursor:pointer}.hs-h .grow{flex:1;min-width:0}.hs-h h2{margin:0;font-size:17px}.hs-ch{color:var(--mut);font-size:18px;transition:transform .15s}.hs-ch.o{transform:rotate(90deg)}';
  document.head.appendChild(st);
  var MES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  function mLabel(d){var y=d.slice(0,4),m=+d.slice(5,7);return (MES[m-1]||d.slice(0,7))+' '+y}
  function vol(l){var v=0;l.entries.forEach(function(e){e.sets.forEach(function(s){v+=(+s.w||0)*(+s.r||0)})});return v}
  function filtered(){
    var q=HS.q.trim().toLowerCase(),out=[];
    for(var k=DATA.logs.length-1;k>=0;k--){
      var l=DATA.logs[k];
      if(HS.rt&&l.routine!==HS.rt)continue;
      if(q&&!l.entries.some(function(e){return String(e.name).toLowerCase().indexOf(q)>-1}))continue;
      out.push(k);
    }
    return out;
  }
  function card(k){
    var l=DATA.logs[k],v=vol(l),open=!!HS.open[k]||(DATA.edit&&DATA.edit.k===k);
    var h='<div class="card"><div class="hs-h" onclick="hsTog('+k+')"><div class="grow"><h2>'+esc(l.date.slice(5))+' · '+esc(l.routine)+'</h2><div class="hint">'+l.entries.length+' ejercicios'+(v?' · volumen '+Math.round(v)+' kg':'')+'</div></div><button class="x" onclick="event.stopPropagation();delLog('+k+')" aria-label="Borrar sesión">'+ic('trash',20)+'</button><span class="hs-ch'+(open?' o':'')+'">›</span></div>';
    if(open){
      l.entries.forEach(function(e,ei){
        h+='<div style="margin-top:8px"><b style="font-size:18px">'+esc(e.name)+'</b></div>';
        e.sets.forEach(function(s,si){
          var ed=DATA.edit&&DATA.edit.k===k&&DATA.edit.e===ei&&DATA.edit.s===si;
          h+='<div class="hrow" onclick="editSet('+k+','+ei+','+si+')"><span'+(ed?' style="color:var(--ac)"':'')+'>'+(si+1)+' · '+esc(sTxt(e.name,s))+'</span><span style="color:var(--mut)">'+ic('pen',16)+'</span></div>';
          if(ed)h+='<div style="background:var(--acs);border-radius:8px;padding:10px;margin-bottom:6px"><div class="row">'+(s.minutes?'<input id="ed-r" type="number" inputmode="decimal" value="'+esc(s.minutes)+'" placeholder="min">':'<input id="ed-w" type="number" inputmode="decimal" value="'+esc(s.w)+'" placeholder="kg"><input id="ed-r" type="number" inputmode="numeric" value="'+esc(s.r)+'" placeholder="reps">')+'</div><div class="row" style="margin-top:8px"><button style="margin:0" class="p" onclick="saveEdit()">Guardar</button><button style="margin:0" onclick="delEditedSet()">Eliminar serie</button></div></div>';
        });
      });
      h+='<button onclick="repeatLog('+k+')">↻ Repetir este entrenamiento</button>';
    }
    return h+'</div>';
  }
  function listHtml(){
    var f=filtered(),shown=f.slice(0,HS.n),h='';
    if(!f.length)return '<div class="card">'+(DATA.logs.length?'Ninguna sesión coincide con el filtro.':'Aún no hay sesiones.')+'</div>';
    var cnt={};f.forEach(function(k){var m=DATA.logs[k].date.slice(0,7);cnt[m]=(cnt[m]||0)+1});
    var cur='';
    shown.forEach(function(k){
      var m=DATA.logs[k].date.slice(0,7);
      if(m!==cur){cur=m;h+='<div class="hs-mo"><span>'+esc(mLabel(DATA.logs[k].date))+'</span><i>'+cnt[m]+' '+(cnt[m]===1?'sesión':'sesiones')+'</i></div>'}
      h+=card(k);
    });
    if(f.length>shown.length)h+='<button onclick="hsMore()">Ver más ('+(f.length-shown.length)+' restantes)</button>';
    return h;
  }
  window.hsRefresh=function(){var b=document.getElementById('hs-list');if(b)b.innerHTML=listHtml()};
  window.hsTog=function(k){HS.open[k]=!HS.open[k];if(DATA.edit&&DATA.edit.k===k&&!HS.open[k])DATA.edit=null;hsRefresh()};
  window.hsMore=function(){HS.n+=20;hsRefresh()};
  window.hsSet=function(key,val){HS[key]=val;HS.n=20;hsRefresh()};
  var d0=delLog;delLog=function(){HS.open={};return d0.apply(this,arguments)};
  viewHistory=function(){
    var h='<h1>Historial</h1>';
    if(!DATA.logs.length)return h+'<div class="card">Aún no hay sesiones.</div>';
    var rts=[];DATA.logs.forEach(function(l){if(rts.indexOf(l.routine)<0)rts.push(l.routine)});rts.sort();
    h+='<div class="hs-f"><select onchange="hsSet(\'rt\',this.value)"><option value="">Todas las rutinas</option>'+rts.map(function(r){return'<option value="'+esc(r)+'"'+(HS.rt===r?' selected':'')+'>'+esc(r)+'</option>'}).join('')+'</select><input type="search" placeholder="Buscar ejercicio…" value="'+esc(HS.q)+'" oninput="hsSet(\'q\',this.value)"></div>';
    if(!DATA.fullLoaded&&(HS.rt||HS.q))h+='<p class="hint">El filtro busca solo en las sesiones cargadas.</p>';
    h+='<div id="hs-list">'+listHtml()+'</div>';
    if(!DATA.fullLoaded)h+='<button onclick="loadAll()">📥 Cargar todo el historial</button>';
    else h+='<p class="hint" style="text-align:center">Historial completo cargado</p>';
    return h;
  };
})();

/* ---------- Grupos musculares: reglas más completas y corrección única de datos ---------- */
(function(){
  var oldGuess=guessMuscle;
  var R=[
    ['Pantorrillas',/talones|pantorrilla|gemelo|elevaci[oó]n de puntas/],
    ['Core',/abdom|rueda|\babs\b|plancha|\bcore\b|crunch|russian|pallof|le[nñ]ador|dead bug|bird dog|escalador|elevaci[oó]n de (piernas|rodillas)|bicicleta abdominal|rotaci[oó]n de torso/],
    ['Cardio',/caminadora|el[ií]ptica|baile|escalera|bici|cardio|trote|correr|nataci|f[uú]tbol|salto de cuerda|burpee|remo ergo|remo erg[oó]|ciclismo|caminata(?! lateral)|nadar|spinning|boxeo/],
    ['Glúteos',/gl[uú]teo|hip ?thrust|puente|abducci[oó]n|patada de gl|extensi[oó]n de cadera|caminata lateral/],
    ['Espalda',/peso muerto convencional/],
    ['Piernas',/prensa|sentadilla|zancada|femoral|cu[aá]dr|aductor|pierna|peso muerto|hack|b[uú]lgara|subida al caj|buenos d[ií]as|isquio/],
    ['Pecho',/fondos.*pecho|pecho.*fondos/],
    ['Tríceps',/tr[ií]ceps|copa|franc[eé]s|fondos|press cerrado|flexiones diamante/],
    ['Hombros',/hombro|militar|\blaterales?\b|reverse|face ?pull|arnold|cruce de poleas inverso|al ment[oó]n|p[aá]jaro|frontal|elevaci[oó]n en y|rotaci[oó]n externa|manguito/],
    ['Bíceps',/curl|b[ií]ceps|martillo|predicador|zottman/],
    ['Espalda',/jal[oó]n|remo|dominad|pull(?!over)|pullover|espalda|lumbar|hiperext|encogim|trapecio/],
    ['Pecho',/press|peck|pecho|apertura|cruce|banca|fly|flexion/]
  ];
  guessMuscle=function(n){
    var s=String(n).toLowerCase();
    for(var i=0;i<R.length;i++)if(R[i][1].test(s))return R[i][0];
    return 'Otro';
  };
  function fix(){
    var key='gymlog_musfix1_'+(typeof currentUser!=='undefined'?currentUser:'');
    try{if(localStorage.getItem(key))return}catch(e){}
    var n=0,M=DATA.muscles||{};
    Object.keys(M).forEach(function(k){
      var v=normG(M[k]);
      if(CAT[k]){if(v!==CAT[k].g){delete M[k];n++}}
      else if(v===normG(oldGuess(k))&&guessMuscle(k)!==v){M[k]=guessMuscle(k);n++}
    });
    try{localStorage.setItem(key,'1')}catch(e){}
    if(n){saveCloud();render();showToast('Corregí '+n+' grupo'+(n===1?'':'s')+' muscular'+(n===1?'':'es'),4000)}
  }
  var f0=finishLoad;finishLoad=function(){try{fix()}catch(e){}return f0.apply(this,arguments)};
  var s0=setCat;setCat=function(){var x=s0.apply(this,arguments);try{if(DATA._ld)fix()}catch(e){}return x};
})();

/* ---------- Recomendación diaria según fatiga, carga y pendientes de la semana ---------- */
(function(){
  var BASE={'Piernas':3,'Glúteos':2.5,'Espalda':2.5,'Pecho':2,'Hombros':2,'Bíceps':1.5,'Tríceps':1.5,'Pantorrillas':1.5,'Core':1};
  var SMALL={'Bíceps':.75,'Tríceps':.75,'Pantorrillas':.75,'Core':.75,'Hombros':.9};
  var OBJT={'Ganar músculo':12,'Fuerza':10,'Recomposición':10,'Perder grasa':9,'Salud y bienestar':8};
  var COL={g:'#2ecc71',a:'#f5a623',r:'#e63757'};
  function dn(s){var p=s.split('-');return Math.round(Date.UTC(+p[0],+p[1]-1,+p[2])/86400000)}
  function ds(n){var d=new Date(n*86400000);return d.getUTCFullYear()+'-'+('0'+(d.getUTCMonth()+1)).slice(-2)+'-'+('0'+d.getUTCDate()).slice(-2)}
  function dow(n){return (new Date(n*86400000).getUTCDay()+6)%7} /* 0 = lunes */
  function target(m){var T=OBJT[(DATA.profile&&DATA.profile.obj)||'']||10;return T*(SMALL[m]||1)}
  function sessM(l){
    var o={};
    l.entries.forEach(function(e){
      var m=muscleOf(e.name);if(MAIN.indexOf(m)<0)return;
      var n=e.sets.length,v=0;e.sets.forEach(function(s){v+=(+s.w||0)*(+s.r||0)});
      var x=o[m]=o[m]||{s:0,v:0};x.s+=n;x.v+=v;
      var c=CAT[e.name];if(c)c.sec.forEach(function(g){if(g!==m&&MAIN.indexOf(g)>-1){var y=o[g]=o[g]||{s:0,v:0};y.s+=n*.5}});
    });
    return o;
  }
  function isCardioName(n){return String(n||'').toLowerCase()==='cardio'}
  function e1(s){var w=+s.w||0,r=+s.r||0;return w>0&&r>0?w*(1+r/30):0}
  function perfDrop(sorted){
    var last=sorted[sorted.length-1];if(!last)return false;var cmp=0,drop=0;
    last.entries.forEach(function(e){
      var cur=0;e.sets.forEach(function(s){cur=Math.max(cur,e1(s))});if(!cur)return;
      for(var i=sorted.length-2;i>=0;i--){
        var p=sorted[i].entries.filter(function(x){return x.name===e.name})[0];
        if(p){var pv=0;p.sets.forEach(function(s){pv=Math.max(pv,e1(s))});if(pv){cmp++;if(cur<pv*.95)drop++}break}
      }
    });
    return cmp>=3&&drop/cmp>=.5;
  }
  var LOW={'Piernas':1,'Glúteos':1,'Pantorrillas':1};
  function recMult(){var m=1,a=+(DATA.profile&&DATA.profile.age)||0,o=(DATA.profile&&DATA.profile.obj)||'';if(a>=50)m*=1.2;else if(a>=40)m*=1.1;if(o==='Perder grasa')m*=1.1;return m}
  function region(m){var l=0,u=0;Object.keys(m).forEach(function(k){if(LOW[k])l+=m[k].s||m[k];else if(k!=='Core')u+=m[k].s||m[k]});return l>u*1.2?'L':u>l*1.2?'U':'M'}
  function plan(tStr){
    var T=dn(tStr),logs=DATA.logs.filter(function(l){return dn(l.date)<T}).sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:0});
    var per=logs.map(function(l){return{d:dn(l.date),m:sessM(l),r:l.routine,l:l}});
    var fat={};
    MAIN.forEach(function(m){
      var f=0;
      per.forEach(function(p,i){
        var x=p.m[m];if(!x||!x.s)return;
        var age=T-p.d;if(age>5)return;
        var dose=x.s<=4?.8:x.s<=8?1:x.s<=12?1.2:1.4,lf=1;
        if(x.v>0){var vs=[];for(var j=0;j<i;j++){var y=per[j].m[m];if(y&&y.v>0&&p.d-per[j].d<=28)vs.push(y.v)}
          if(vs.length>=2){var avg=vs.reduce(function(a,b){return a+b},0)/vs.length,ra=x.v/avg;lf=ra>1.4?1.3:ra>1.2?1.15:1}}
        var R=BASE[m]*dose*lf*recMult();f+=Math.min(1.2,dose)*Math.max(0,1-age/R);
      });
      fat[m]=Math.min(1.5,f);
    });
    logs.forEach(function(l){
      if(T-dn(l.date)>1)return;var mins=0;
      if(isCardioName(l.routine))l.entries.forEach(function(e){e.sets.forEach(function(x){mins+=+x.minutes||0})});
      if(mins>=45){['Piernas','Glúteos','Pantorrillas'].forEach(function(m){fat[m]=Math.min(1.5,fat[m]+.2)})}
    });
    var drop=perfDrop(logs.map(function(l){return l}));
    if(drop)MAIN.forEach(function(m){fat[m]=Math.min(1.5,fat[m]*1.2)});
    /* pendientes de la semana del día objetivo */
    var ws=T-dow(T),pw=ws-7,sets={},prev={},days={},mdays={};
    per.forEach(function(p){
      if(p.d>=ws){days[p.d]=1;MAIN.forEach(function(m){if(p.m[m]&&p.m[m].s>=1){sets[m]=(sets[m]||0)+p.m[m].s;(mdays[m]=mdays[m]||{})[p.d]=1}})}
      else if(p.d>=pw){MAIN.forEach(function(m){if(p.m[m])prev[m]=(prev[m]||0)+p.m[m].s})}
    });
    var gap={};
    MAIN.forEach(function(m){gap[m]=Math.max(0,target(m)-(sets[m]||0));if(dow(T)===0)gap[m]+=.5*Math.max(0,target(m)-(prev[m]||0))});
    var goalDays=+DATA.settings.goal||4,doneDays=Object.keys(days).length;
    var consec=0;for(var k=T-1;;k--){var has=per.some(function(p){return p.d===k});if(has)consec++;else break;if(consec>14)break}
    var trainedRecent=0;for(var q=T-4;q<T;q++)if(per.some(function(p){return p.d===q}))trainedRecent++;
    var wk=0;
    for(var w=1;w<=12;w++){var a0=ws-7*w,a1=a0+7,dset={};per.forEach(function(p){if(p.d>=a0&&p.d<a1)dset[p.d]=1});if(Object.keys(dset).length>=3)wk++;else break}
    var lastReg=per.length?region(per[per.length-1].m):'M',rts=[];
    DATA.routines.forEach(function(r,i){
      if(isCardio(r)||!r.ex.length)return;
      var tm={},tot=0;
      r.ex.forEach(function(n){
        var m=muscleOf(n);if(MAIN.indexOf(m)<0)return;
        tm[m]=(tm[m]||0)+3;tot+=3;
        var c=CAT[n];if(c)c.sec.forEach(function(g){if(g!==m&&MAIN.indexOf(g)>-1)tm[g]=(tm[g]||0)+1.5});
      });
      var sc=0,focus=[],reds=[];
      Object.keys(tm).forEach(function(m){
        var f=fat[m],w=f<.15?1:f<.5?.5:0,nd=mdays[m]?Object.keys(mdays[m]).length:0,u=Math.min(tm[m],gap[m])*w*(nd===0?1.2:nd===1?1.1:1);
        sc+=u;if(f>=.5){sc-=.5*tm[m];reds.push(m)}else if(u>0&&f<.15)focus.push([m,u]);
      });
      var big=Object.keys(tm).filter(function(m){return tm[m]>=3}).length;
      if(goalDays>=4&&big>=7)sc*=.75;
      var rg=region(tm);if(lastReg!=='M'&&rg!=='M'&&rg!==lastReg)sc*=1.1;
      focus.sort(function(a,b){return b[1]-a[1]});
      rts.push({i:i,r:r,sc:sc,tot:tot,focus:focus.map(function(x){return x[0]}),reds:reds,ms:Object.keys(tm)});
    });
    rts.sort(function(a,b){return b.sc-a.sc});
    var best=rts[0]||null,rest='';
    if(best&&best.reds.length){var alt0=rts.filter(function(x){return !x.reds.length&&x.sc>=.6*best.sc})[0];if(alt0){rts.splice(rts.indexOf(alt0),1);rts.unshift(alt0);best=alt0}}
    if(consec>=3)rest='Llevas '+consec+' días seguidos entrenando.';
    else if(drop&&trainedRecent>=3)rest='Bajaste cargas en varios ejercicios de la última sesión: señal de fatiga acumulada.';
    else if(best&&best.sc<.35*best.tot){var rl=MAIN.filter(function(m){return fat[m]>=.5});rest='Tus músculos aún se están recuperando'+(rl.length?' ('+rl.join(', ')+')':'')+'.'}
    return {deload:wk>=5,wk:wk,T:T,fat:fat,gap:gap,best:best,alt:rts[1]||null,rest:rest,drop:drop,goalMet:doneDays>=goalDays,doneDays:doneDays,goalDays:goalDays,last:per[per.length-1]||null};
  }
  function when(last,T){
    if(!last)return '';var d=T-last.d;
    var ms=Object.keys(last.m).filter(function(m){return last.m[m].s>=2}).sort(function(a,b){return last.m[b].s-last.m[a].s}).slice(0,3);
    var cw=d<=0?'Hoy':d===1?'Ayer':'Hace '+d+' días';if(isCardioName(last.r))return cw+' hiciste cardio';
    return cw+' trabajaste '+(ms.join(', ')||'varios músculos');
  }
  function reason(p){
    var b=p.best,t=[];
    if(p.last)t.push(when(p.last,p.T)+'.');
    if(p.rest){t.push(p.rest+' Hoy toca descanso o cardio suave.');if(p.deload)t.push('Además llevas '+p.wk+' semanas seguidas con 3 o más días: una semana de descarga ayudaría.');return t.join(' ')}
    if(!b)return '';
    if(p.drop)t.push('Hubo señales de fatiga: mantén cargas moderadas.');
    t.push('Te recomiendo '+b.r.name+(b.focus.length?': trabaja '+b.focus.slice(0,3).join(', ')+', que están recuperados y con series pendientes esta semana.':'.'));
    var rs=MAIN.filter(function(m){return p.fat[m]>=.5});
    if(rs.length)t.push('Siguen descansando: '+rs.join(', ')+'.');
    if(p.goalMet)t.push('Ya cumpliste tu meta de días; esto sería un extra.');
    if(p.deload)t.push('Llevas '+p.wk+' semanas seguidas entrenando 3 o más días: considera una semana de descarga (alrededor de la mitad de las series, con los mismos pesos).');
    return t.join(' ');
  }
  /* "Progreso": rutina para empezar la próxima semana */
  var rec0=recommend;
  recommend=function(w,need){
    try{
      var t=ds(dn(fmtD(w.end))+1),p=plan(t);
      if(p.best)return {r:p.best.r,sc:p.best.sc,ms:p.best.focus};
    }catch(e){}
    return rec0.apply(this,arguments);
  };
  /* Tarjeta en Entrenar */
  function card(){
    var old=document.getElementById('rc-card');if(old)old.remove();
    if(DATA.tab!=='t'||DATA.inSession||!DATA.logs.length)return;
    var hs=document.querySelectorAll('#app h2,h2'),anchor=null;
    for(var i=0;i<hs.length;i++)if(/Qu[eé] vamos a entrenar/.test(hs[i].textContent)){anchor=hs[i].parentNode;break}
    if(!anchor)return;
    var td=today(),T0=dn(td),did=DATA.logs.some(function(l){return l.date===td})||(DATA.skips&&DATA.skips[td]);
    var tgt=did?T0+1:T0,p=plan(ds(tgt)),title=did?(dow(tgt)===0?'Para empezar la semana':'Mañana te recomiendo'):'Hoy te recomiendo';
    var main=p.rest?'Descanso o cardio suave':(p.best?p.best.r.name:'—');
    var h='<div class="hint" style="margin:0 0 2px;font-weight:700;letter-spacing:.05em">'+title.toUpperCase()+'</div><h2 style="margin:0 0 6px">'+esc(main)+'</h2><p style="font-size:14px;line-height:1.4;margin:0 0 10px">'+esc(reason(p))+'</p>';
    h+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">'+MAIN.map(function(m){var f=p.fat[m],c=f>=.5?COL.r:f>=.15?COL.a:COL.g;return'<span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;padding:3px 8px;border-radius:12px;background:var(--acs)"><i style="width:8px;height:8px;border-radius:50%;background:'+c+'"></i>'+esc(m)+'</span>'}).join('')+'</div>';
    h+='<div class="hint" style="margin:0 0 10px">Verde: listo · Ámbar: casi · Rojo: descansando</div>';
    if(p.best&&!p.rest&&!did)h+='<button class="p" style="margin:0" onclick="DATA.rid='+p.best.i+';initDraft();render()">Usar '+esc(p.best.r.name)+'</button>';
    else if(p.best&&p.rest&&!did)h+='<button style="margin:0" onclick="DATA.rid='+p.best.i+';initDraft();render()">Entrenar igual con '+esc(p.best.r.name)+'</button>';
    if(T0>=0&&dow(T0)===6&&!did){var pm=plan(ds(T0+1));if(pm.best)h+='<p class="hint" style="margin:10px 0 0">Para empezar la semana: <b>'+esc(pm.best.r.name)+'</b></p>'}
    var el=document.createElement('div');el.className='card';el.id='rc-card';el.innerHTML=h;anchor.parentNode.insertBefore(el,anchor);
  }
  window.rcPlan=plan;
  var r1=render;render=function(){var x=r1.apply(this,arguments);try{card()}catch(e){}return x};
  try{card()}catch(e){}
})();
