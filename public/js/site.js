/* Shared behavior for both sites. Adapted from the tylerwallace.ai inline script
   (index.html L774–899): mobile nav, scroll reveal, count-up figures, timeline
   fill, and the hero "signal field" canvas. Everything degrades to static content
   without JS, and motion is off under prefers-reduced-motion. */
(function(){
  var d=document, root=d.documentElement;
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* mobile nav */
  var b=d.getElementById('menuBtn'), n=d.getElementById('nav');
  if(b&&n){
    b.addEventListener('click',function(){
      var open=n.getAttribute('data-open')==='true';
      n.setAttribute('data-open',String(!open));
      b.setAttribute('aria-expanded',String(!open));
      b.setAttribute('aria-label',(!open?'Close':'Open')+' navigation menu');
    });
    n.addEventListener('click',function(e){
      if(e.target.tagName==='A'&&window.matchMedia('(max-width:1040px)').matches){
        n.setAttribute('data-open','false'); b.setAttribute('aria-expanded','false');
      }
    });
    d.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&n.getAttribute('data-open')==='true'){n.setAttribute('data-open','false');b.setAttribute('aria-expanded','false');b.focus();}
    });
  }
  var yr=d.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  /* press kit: copy-to-clipboard buttons (hidden until JS runs) */
  [].forEach.call(d.querySelectorAll('[data-copy]'),function(btn){
    btn.hidden=false;
    btn.addEventListener('click',function(){
      var src=d.getElementById(btn.getAttribute('data-copy')), text=src.innerText.trim(), label=btn.textContent;
      function done(){btn.setAttribute('data-done','');btn.textContent='Copied';setTimeout(function(){btn.removeAttribute('data-done');btn.textContent=label;},1800);}
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done,function(){});}
      else{var r=d.createRange();r.selectNodeContents(src);var s=getSelection();s.removeAllRanges();s.addRange(r);try{d.execCommand('copy');done();}catch(e){}s.removeAllRanges();}
    });
  });

  /* problem tabs (ARIA tabs, arrow keys; all panels visible without JS) */
  var tabs=[].slice.call(d.querySelectorAll('.fit-tab')), list=d.querySelector('.fit-list');
  function sel(i,focus){
    tabs.forEach(function(t,j){
      var on=j===i, p=d.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-selected',String(on)); t.tabIndex=on?0:-1; p.hidden=!on;
      if(on){p.classList.remove('in');void p.offsetWidth;p.classList.add('in');}
    });
    if(focus) tabs[i].focus({preventScroll:true});
    if(list&&list.scrollWidth>list.clientWidth){ var t=tabs[i]; list.scrollTo({left:t.offsetLeft-list.offsetLeft-16,behavior:still?'auto':'smooth'}); }
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(i)});
    t.addEventListener('keydown',function(e){
      var k=e.key, j=null;
      if(k==='ArrowDown'||k==='ArrowRight') j=(i+1)%tabs.length;
      else if(k==='ArrowUp'||k==='ArrowLeft') j=(i-1+tabs.length)%tabs.length;
      else if(k==='Home') j=0; else if(k==='End') j=tabs.length-1;
      if(j!==null){e.preventDefault();sel(j,true);}
    });
  });
  if(tabs.length) sel(0);

  /* scroll reveal + count-up */
  function fmt(v,el){return (el.dataset.pre||'')+Math.round(v).toLocaleString('en-US')+(el.dataset.suf||'')}
  function count(el){
    var to=+el.dataset.to; if(still){el.textContent=fmt(to,el);return}
    var t0=null, dur=1400;
    function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1); el.textContent=fmt(to*(1-Math.pow(1-p,3)),el); if(p<1)requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var rv=[].slice.call(d.querySelectorAll('.rv'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(!e.isIntersecting)return; e.target.classList.add('seen');
        var c=e.target.querySelector('[data-to]'); if(c)count(c); io.unobserve(e.target); });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    rv.forEach(function(el){io.observe(el)});
  } else { rv.forEach(function(el){el.classList.add('seen')}); }

  /* timeline progress */
  var path=d.getElementById('pathList');
  if(path){
    var stops=[].slice.call(path.querySelectorAll('.stop'));
    var prog=function(){
      var r=path.getBoundingClientRect(), line=window.innerHeight*.62;
      var p=Math.max(0,Math.min(1,(line-r.top)/r.height));
      path.style.setProperty('--fill',(p*(r.height-12))+'px');
      stops.forEach(function(s){ var dr=s.querySelector('.dot').getBoundingClientRect(); s.classList.toggle('on',dr.top<line); });
    };
    window.addEventListener('scroll',prog,{passive:true}); window.addEventListener('resize',prog); prog();
  }

  /* hero signal field: a dot grid where signals appear and ripple outward */
  var c=d.getElementById('field'); if(!c||!c.getContext)return;
  var ctx=c.getContext('2d'), dpr=Math.min(window.devicePixelRatio||1,2), W=0,H=0, pts=[], gap=26, pulses=[], last=0, next=600, running=false, raf=0, col={};
  function readCol(){var s=getComputedStyle(root);col.dot=s.getPropertyValue('--muted').trim();col.hot=s.getPropertyValue('--brand').trim();}
  function size(){
    W=c.offsetWidth;H=c.offsetHeight;c.width=W*dpr;c.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);pts=[];
    for(var y=gap/2;y<H;y+=gap)for(var x=gap/2;x<W;x+=gap)pts.push({x:x,y:y,h:0});
    draw();
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.globalAlpha=.28; ctx.fillStyle=col.dot;
    for(var i=0;i<pts.length;i++){var p=pts[i]; if(p.h<.05) ctx.fillRect(p.x-1,p.y-1,2,2);}
    ctx.fillStyle=col.hot;
    for(i=0;i<pts.length;i++){p=pts[i]; if(p.h>=.05){ctx.globalAlpha=.25+.7*p.h;ctx.beginPath();ctx.arc(p.x,p.y,1.2+2.2*p.h,0,6.283);ctx.fill();}}
    ctx.strokeStyle=col.hot; ctx.lineWidth=1.2;
    pulses.forEach(function(q){ctx.globalAlpha=Math.max(0,.35*(1-q.r/q.max));ctx.beginPath();ctx.arc(q.x,q.y,q.r,0,6.283);ctx.stroke();});
    ctx.globalAlpha=1;
  }
  function tick(ts){
    var dt=Math.min(ts-(last||ts),50); last=ts; next-=dt;
    if(next<=0){ next=1100+Math.random()*1400;
      pulses.push({x:W*(.35+Math.random()*.65), y:H*(.1+Math.random()*.8), r:0, max:160+Math.random()*120});
    }
    for(var i=0;i<pts.length;i++) pts[i].h*=.955;
    pulses.forEach(function(q){
      q.r+=dt*.11;
      for(var i=0;i<pts.length;i++){var p=pts[i],dx=p.x-q.x,dy=p.y-q.y,dd=Math.sqrt(dx*dx+dy*dy);
        if(Math.abs(dd-q.r)<9){var v=1-q.r/q.max; if(v>p.h)p.h=v;}}
    });
    pulses=pulses.filter(function(q){return q.r<q.max});
    draw(); if(running) raf=requestAnimationFrame(tick);
  }
  function start(){ if(running||still)return; running=true; last=0; raf=requestAnimationFrame(tick); }
  function stop(){ running=false; cancelAnimationFrame(raf); }
  readCol(); size();
  window.addEventListener('resize',function(){clearTimeout(c._t);c._t=setTimeout(size,150)});
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){readCol();draw();});
  if('IntersectionObserver' in window){ new IntersectionObserver(function(es){es[0].isIntersecting?start():stop()}).observe(c); } else start();
  d.addEventListener('visibilitychange',function(){d.hidden?stop():start()});
})();
