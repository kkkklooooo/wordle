var t,i;t=this,i=function(t){function i(t){return Math.abs(Math.floor(t))}function s(t,i){return Math.random()*(i-t)+t}function e(t,i){return Math.floor(s(t,i+1))}function n(t,i,s,e){let n=Math.pow;return Math.sqrt(n(t-s,2)+n(i-e,2))}function h(t,i,s=1){if(t>360||t<0)throw Error(`Expected hue 0-360 range, got \`${t}\``);if(i>100||i<0)throw Error(`Expected lightness 0-100 range, got \`${i}\``);if(s>1||s<0)throw Error(`Expected alpha 0-1 range, got \`${s}\``);return`hsla(${t}, 100%, ${i}%, ${s})`}let o=t=>{if("object"==typeof t&&null!==t){if("function"==typeof Object.getPrototypeOf){let i=Object.getPrototypeOf(t);return i===Object.prototype||null===i}return"[object Object]"===Object.prototype.toString.call(t)}return!1},a=["__proto__","constructor","prototype"],r=(...t)=>t.reduce((t,i)=>(Object.keys(i).forEach(s=>{a.includes(s)||(Array.isArray(t[s])&&Array.isArray(i[s])?t[s]=i[s]:o(t[s])&&o(i[s])?t[s]=r(t[s],i[s]):t[s]=i[s])}),t),{});class c{x;y;ctx;hue;friction;gravity;flickering;lineWidth;explosionLength;angle;speed;brightness;coordinates=[];decay;alpha=1;constructor({x:t,y:i,ctx:n,hue:h,decay:o,gravity:a,friction:r,brightness:c,flickering:u,lineWidth:l,explosionLength:p}){for(this.x=t,this.y=i,this.ctx=n,this.hue=h,this.gravity=a,this.friction=r,this.flickering=u,this.lineWidth=l,this.explosionLength=p,this.angle=s(0,2*Math.PI),this.speed=e(1,10),this.brightness=e(c.min,c.max),this.decay=s(o.min,o.max);this.explosionLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){let t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=h(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=h(this.hue,this.flickering?s(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class u{constructor(t,i){this.options=t,this.canvas=i,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}active=!1;x;y;get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,i){let{click:s,move:e}=this.mouseOptions;(s||e)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=i)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class l{hue;rocketsPoint;opacity;acceleration;friction;gravity;particles;explosion;mouse;boundaries;sound;delay;brightness;decay;flickering;intensity;traceLength;traceSpeed;lineWidth;lineStyle;autoresize;constructor(){this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,r(this,t))}}class p{constructor(t,i){this.options=t,this.render=i}tick=0;rafId=0;fps=60;tolerance=.1;now;mount(){this.now=performance.now();let t=1e3/this.fps,i=s=>{this.rafId=requestAnimationFrame(i);let e=s-this.now;e>=t-this.tolerance&&(this.render(),this.now=s-e%t,this.tick+=e*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(i)}unmount(){cancelAnimationFrame(this.rafId)}}class d{constructor(t,i,s){this.options=t,this.updateSize=i,this.container=s}resizer;mount(){if(!this.resizer){var t;let i;let s=(t=()=>this.updateSize(),(...s)=>{i&&clearTimeout(i),i=setTimeout(()=>t(...s),100)});this.resizer=new ResizeObserver(s)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class x{constructor(t){this.options=t,this.init()}buffers=[];audioContext;onInit=!1;get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(let t of this.soundOptions.files){let i=await (await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(i).then(t=>{this.buffers.push(t)}).catch(t=>{throw t})}}play(){if(this.isEnabled&&this.buffers.length){let t=this.audioContext.createBufferSource(),i=this.buffers[e(0,this.buffers.length-1)],n=this.audioContext.createGain();t.buffer=i,n.gain.value=s(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),n.connect(this.audioContext.destination),t.connect(n),t.start(0)}else this.init()}}class g{x;y;sx;sy;dx;dy;ctx;hue;speed;acceleration;traceLength;totalDistance;angle;brightness;coordinates=[];currentDistance=0;constructor({x:t,y:i,dx:s,dy:h,ctx:o,hue:a,speed:r,traceLength:c,acceleration:u}){for(this.x=t,this.y=i,this.sx=t,this.sy=i,this.dx=s,this.dy=h,this.ctx=o,this.hue=a,this.speed=r,this.traceLength=c,this.acceleration=u,this.totalDistance=n(t,i,s,h),this.angle=Math.atan2(h-i,s-t),this.brightness=e(50,70);this.traceLength--;)this.coordinates.push([t,i])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;let i=Math.cos(this.angle)*this.speed,s=Math.sin(this.angle)*this.speed;this.currentDistance=n(this.sx,this.sy,this.x+i,this.y+s),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=i,this.y+=s)}draw(){let t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=h(this.hue,this.brightness),this.ctx.stroke()}}class f{target;container;canvas;ctx;width;height;traces=[];explosions=[];waitStopRaf;running=!1;opts;sound;resize;mouse;raf;constructor(t,i={}){this.target=t,this.container=t,this.opts=new l,this.createCanvas(this.target),this.updateOptions(i),this.sound=new x(this.opts),this.resize=new d(this.opts,this.updateSize.bind(this),this.container),this.mouse=new u(this.opts,this.canvas),this.raf=new p(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.7"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(i=>{this.waitStopRaf=()=>{this.waitStopRaf&&(requestAnimationFrame(this.waitStopRaf),this.traces.length||this.explosions.length||(this.waitStopRaf=null,this.stop(t),i()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){this.ctx&&(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let i=0;i<t;i++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:i=this.container.clientHeight}={}){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i,this.updateBoundaries({...this.opts.boundaries,width:t,height:i})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;let{opacity:t,lineStyle:i,lineWidth:e}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=i,this.ctx.lineJoin="round",this.ctx.lineWidth=s(e.trace.min,e.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){let{hue:t,rocketsPoint:s,boundaries:n,traceLength:h,traceSpeed:o,acceleration:a,mouse:r}=this.opts;this.traces.push(new g({x:this.width*e(s.min,s.max)/100,y:this.height,dx:this.mouse.x&&r.move||this.mouse.active?this.mouse.x:e(n.x,n.width-2*n.x),dy:this.mouse.y&&r.move||this.mouse.active?this.mouse.y:e(n.y,.5*n.height),ctx:this.ctx,hue:e(t.min,t.max),speed:o,acceleration:a,traceLength:i(h)}))}initTrace(){if(this.waitStopRaf)return;let{delay:t,mouse:i}=this.opts;(this.raf.tick>e(t.min,t.max)||this.mouse.active&&i.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((i,s,e)=>{this.initExplosion(i,s,e),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,n,h){let{particles:o,flickering:a,lineWidth:r,explosion:u,brightness:l,friction:p,gravity:d,decay:x}=this.opts,g=i(o);for(;g--;)this.explosions.push(new c({x:t,y:n,ctx:this.ctx,hue:h,friction:p,gravity:d,flickering:e(0,100)<=a,lineWidth:s(r.explosion.min,r.explosion.max),explosionLength:i(u),brightness:l,decay:x}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}t.Fireworks=f,t.default=f,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})},"object"==typeof exports&&"u">typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t="u">typeof globalThis?globalThis:t||self).Fireworks={});