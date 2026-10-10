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
  var c=CAT[n]||{sec:[],eq:'',carga:'',rmin:0,rmax:0},t=(TEC[n]&&TEC[n].t)||[],rg=rangeFor(n),o=document.getElementById('tec');
  var h='<div class="tec-top"><button onclick="tecClose()" aria-label="Volver">‹</button><span>DETALLES DEL EJERCICIO</span></div><div class="tec-in"><h1>'+esc(n).toUpperCase()+'</h1><p class="tec-g">Grupo muscular: <b>'+esc(muscleOf(n))+'</b></p>';
  h+='<div class="tec-mus2"><h3>MÚSCULO PRINCIPAL</h3><div class="tmb p"><i></i>'+esc(muscleOf(n))+'</div>'+(c.sec.length?'<h3>MÚSCULOS SECUNDARIOS</h3>'+c.sec.map(function(s){return'<div class="tmb s"><i></i>'+esc(s)+'</div>'}).join(''):'')+'</div>';
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
function swNames(){var m={};Object.keys(CAT).forEach(function(k){m[k]=1});try{getAllEx().forEach(function(k){m[k]=1})}catch(e){}return Object.keys(m)}
function swDraw(){
  var r=DATA.routines[SW.ri],cur=r.ex[SW.ei],o=document.getElementById('swp');
  var gs=['Todos'].concat(MUSCLES);
  var h='<div class="tec-top"><button onclick="swClose()" aria-label="Cerrar">‹</button><span>CAMBIAR EJERCICIO</span></div><div class="tec-in"><p class="sw-cur">Reemplazar: <b style="color:#fff">'+esc(cur)+'</b> · en <b style="color:#fff">'+esc(r.name)+'</b></p>';
  h+='<div class="sw-top"><input id="sw-q" placeholder="Buscar ejercicio…" value="'+esc(SW.q)+'" oninput="SW.q=this.value;swList()"></div>';
  h+='<div class="sw-ch">'+gs.map(function(g){return'<button class="'+(SW.g===g?'on':'')+'" onclick="SW.g=\''+g+'\';swDraw()">'+g+'</button>'}).join('')+'</div><div id="sw-list"></div></div>';
  o.innerHTML=h;swList();
}
function swList(){
  var r=DATA.routines[SW.ri],q=SW.q.trim().toLowerCase(),box=document.getElementById('sw-list');
  var l=swNames().filter(function(n){return n!==r.ex[SW.ei]&&r.ex.indexOf(n)<0&&(q?n.toLowerCase().indexOf(q)>-1:(SW.g==='Todos'||muscleOf(n)===SW.g))}).sort();
  var h=l.map(function(n,i){var c=CAT[n];return'<div class="sw-it"><span>'+esc(n)+'<small>'+esc(muscleOf(n))+(c&&c.eq?' · '+esc(c.eq):'')+'</small></span><button data-n="'+esc(n)+'" onclick="swPick(this.dataset.n)">Elegir</button></div>'}).join('');
  if(q&&swNames().map(function(x){return x.toLowerCase()}).indexOf(q)<0)h+='<div class="sw-it"><span>Usar «'+esc(SW.q.trim())+'»<small>Ejercicio nuevo, grupo: '+(SW.g==='Todos'?'se calcula solo':esc(SW.g))+'</small></span><button data-n="'+esc(SW.q.trim())+'" onclick="swPick(this.dataset.n,true)">Usar</button></div>';
  box.innerHTML=h||'<p class="tec-ld">No hay ejercicios con ese filtro. Prueba con «Todos».</p>';
}
function swPick(n,isNew){
  var r=DATA.routines[SW.ri],old=r.ex[SW.ei];n=String(n).trim();if(!n)return;
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
