var e,t,n,o,r,a=0,i=0,l=!1,d=document.querySelector(".tips-text");g(d),new window.SimpleKeyboard.default({//onChange: input => onChange(input),
onKeyPress:e=>(function(e){switch(e){case"{bksp}":e="Backspace";break;case"{enter}":e="Enter"}console.log(e);var t=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(t)})(e)});var c=document.getElementById("game"),u=["lightgrey","lightgoldenrodyellow","chartreuse"],s=document.getElementById("firework"),m=new Fireworks.default(s),h=document.createElement("div");//字母个数
h.setAttribute("class","letter"),h.setAttribute("data-anim","none");var f=document.createElement("div");f.setAttribute("class","PopFrame");var y=document.createElement("div");function v(e,t,n){document.querySelector(".explain-word").textContent=e,document.querySelector(".explain-translate").textContent=`Translate: ${n}`}function p(){let e=Math.floor(15*Math.random());for(let t=0;t<e;t++)m.launch(1,{traceSpeed:20*Math.random()})}function b(e,t){t.appendChild(e)}/*
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

*/function g(e){e.addEventListener("animationend",()=>{e.setAttribute("data-anim","none")})}y.setAttribute("class","PopWindow"),y.setAttribute("data-anim","none"),g(y),f.appendChild(y),fetch("./asset/pop.html").then(e=>e.text()).then(e=>{r=e}),fetch("./asset/export.json").then(e=>e.json()).then(l=>{(function(o){var r=Math.floor(Math.random()*o);for(t=(word_inf=e[r])[0];t.length>10;)t=(word_inf=e[r=Math.floor(Math.random()*o)])[0];n=word_inf[2]})(Object.keys(e=l).length),function(){for(var e=0;e<6;e++){var n=document.createElement("div"),o=document.createAttribute("class");o.value="row",n.setAttributeNode(o),n.setAttribute("id",`r-${e}`);for(var r=0;r<11;r++)h.setAttribute("id",`l-${e}-${r}`),h.setAttribute("data-anim","none"),r<t.length?(h.style.borderStyle="solid",h.style.borderWidth="1px"):h.style.borderWidth="0px",n.appendChild(h.cloneNode(!0));c.appendChild(n.cloneNode(!0))}}(),document.addEventListener("keydown",e=>{if(/^[A-Za-z]$/.test(e.key)&&i<=5){//console.log(`l-${row_index}-${letter_index}`)
if(a>10){var l,d,s;let e,t;l=`l-${i}-${a-1}`,d=document.getElementById(l),s=0,e=0,t=setInterval(()=>{e<1&&0==s?e+=.1:(s=1,e-=.1),e<=0&&(e=0,clearInterval(t)),d.style.fontSize=`${10*e+30}px`},10),a=11}else{var m=document.getElementById(`l-${i}-${a}`);//letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
g(m),m.setAttribute("data-anim","in"),m.textContent=e.key,a++}}else"Backspace"==e.key&&a-1>=0&&i<=5?(document.getElementById(`l-${i}-${a-1}`).textContent="",a--):"Enter"==e.key&&i<=5&&function(e,a){for(var i="",l=0;l<a;l++)i+=document.getElementById(`l-${e}-${l}`).textContent;return console.log(i),""!=i&&(function(e,a,i){for(var l=[],d=[],s=0;s<e.length;s++){var m,h=e[s],y=document.getElementById(`l-${i}-${s}`),k=a.search(h);l.push((m=s,-1!=k&&function(e,t,n){for(let o=0;o<n.length;o++)if(t[e]==n[o]&&e==o)return!0;return!1}(m,e,a)?2:-1!=k?1:0)),d.push(y)}let w=0,A=setInterval(()=>{var a,i;w<l.length?(a=d[w],i=u[l[w]],a.setAttribute("data-anim","fill_in"),a.addEventListener("animationend",()=>{a.style.backgroundColor=i,a.setAttribute("data-anim","fill_out"),g(a)}),w++):(clearInterval(A),l.every(e=>2==e)&&l.length==t.length?setTimeout(()=>{b(f,c);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=r,v(t,o,n),p()},1e3):"kkkklooooo"==e&&setTimeout(()=>{b(f,c);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=r,v("kkkklooooo","?????","!!!!!"),p()},1e3))},400)}(i,t,e),!0)}(i,a)&&(i++,a=0,console.log(i))})}),document.querySelector(".icon").addEventListener("click",()=>{!//var words_count = 3933;
function(){if(l){d.setAttribute("data-anim","out");var e=setTimeout(()=>{d.textContent="",l=!1,clearTimeout(e)},200)}else d.textContent=n,d.setAttribute("data-anim","in"),l=!0}()});