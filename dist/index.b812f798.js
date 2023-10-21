var e,t,n,r,o=0,a=0,l=!1,d=document.querySelector(".tips-text");v(d),new window.SimpleKeyboard.default({//onChange: input => onChange(input),
onKeyPress:e=>(function(e){switch(e){case"{bksp}":e="Backspace";break;case"{enter}":e="Enter"}console.log(e);var t=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(t)})(e)});var i=document.getElementById("game"),c=["lightgrey","lightgoldenrodyellow","chartreuse"],s=document.getElementById("firework"),u=new Fireworks.default(s),m=document.createElement("div");//字母个数
m.setAttribute("class","letter"),m.setAttribute("data-anim","none");var h=document.createElement("div");h.setAttribute("class","PopFrame");var f=document.createElement("div");/*
function letter_in_anim(id, time) {
    var letter_in = document.getElementById(id);
    let count = time * 1000 / 10;
    let value = 0;
    let timer = setInterval(() => {
        if (value >= 1) {
            value = 1;
            clearInterval(timer);
        } else {
            value += 1 / count;
        }
        letter_in.style.fontSize = `${value * 30}px`

    }, time)
}

*/function v(e){e.addEventListener("animationend",()=>{e.setAttribute("data-anim","none")})}f.setAttribute("class","PopWindow"),f.setAttribute("data-anim","none"),v(f),h.appendChild(f),fetch("./asset/pop.html").then(e=>e.text()).then(e=>{r=e}),fetch("./asset/export.json").then(e=>e.json()).then(l=>{(function(r){var o=Math.floor(Math.random()*r);for(t=(word_inf=e[o])[0];t.length>10;)t=(word_inf=e[o=Math.floor(Math.random()*r)])[0];n=word_inf[2]})(Object.keys(e=l).length),function(){for(var e=0;e<6;e++){var n=document.createElement("div"),r=document.createAttribute("class");r.value="row",n.setAttributeNode(r),n.setAttribute("id",`r-${e}`);for(var o=0;o<11;o++)m.setAttribute("id",`l-${e}-${o}`),m.setAttribute("data-anim","none"),o<t.length?(m.style.borderStyle="solid",m.style.borderWidth="1px"):m.style.borderWidth="0px",n.appendChild(m.cloneNode(!0));i.appendChild(n.cloneNode(!0))}}(),document.addEventListener("keydown",e=>{if(/^[A-Za-z]$/.test(e.key)&&a<=5){//console.log(`l-${row_index}-${letter_index}`)
if(o>10){var l,d,s;let e,t;l=`l-${a}-${o-1}`,d=document.getElementById(l),s=0,e=0,t=setInterval(()=>{e<1&&0==s?e+=.1:(s=1,e-=.1),e<=0&&(e=0,clearInterval(t)),d.style.fontSize=`${10*e+30}px`},10),o=11}else{var m=document.getElementById(`l-${a}-${o}`);//letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
v(m),m.setAttribute("data-anim","in"),m.textContent=e.key,o++}}else"Backspace"==e.key&&o-1>=0&&a<=5?(document.getElementById(`l-${a}-${o-1}`).textContent="",o--):"Enter"==e.key&&a<=5&&function(e,o){for(var a="",l=0;l<o;l++)a+=document.getElementById(`l-${e}-${l}`).textContent;return console.log(a),""!=a&&(function(e,o,a){for(var l=[],d=[],s=0;s<e.length;s++){var m,f=e[s],y=document.getElementById(`l-${a}-${s}`),p=o.search(f);l.push((m=s,-1!=p&&function(e,t,n){for(let r=0;r<n.length;r++)if(t[e]==n[r]&&e==r)return!0;return!1}(m,e,o)?2:-1!=p?1:0)),d.push(y)}let b=0,g=setInterval(()=>{var e,o;b<l.length?(e=d[b],o=c[l[b]],e.setAttribute("data-anim","fill_in"),e.addEventListener("animationend",()=>{e.style.backgroundColor=o,e.setAttribute("data-anim","fill_out"),v(e)}),b++):(clearInterval(g),l.every(e=>2==e)&&l.length==t.length&&setTimeout(()=>{var e,o;!function(e,t){t.appendChild(e)}(h,i);let a=document.querySelector(".PopWindow");a.setAttribute("data-anim","in"),a.innerHTML=r,e=t,o=n,document.querySelector(".explain-word").textContent=e,document.querySelector(".explain-translate").textContent=`Translate: ${o}`,function(){let e=Math.floor(15*Math.random());for(let t=0;t<e;t++)u.launch(1,{traceSpeed:20*Math.random()})}()},1e3))},400)}(a,t,e),!0)}(a,o)&&(a++,o=0,console.log(a))})}),document.querySelector(".icon").addEventListener("click",()=>{!//var words_count = 3933;
function(){if(l){d.setAttribute("data-anim","out");var e=setTimeout(()=>{d.textContent="",l=!1,clearTimeout(e)},200)}else d.textContent=n,d.setAttribute("data-anim","in"),l=!0}()});