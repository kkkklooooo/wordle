var e,t,n,o,r,a,i=0,d=0,l=!1,c=document.querySelector(".tips-text");//var words_count = 3933;
function u(){if(l){c.setAttribute("data-anim","out");var e=setTimeout(()=>{c.textContent="",l=!1,clearTimeout(e)},200)}else c.textContent=n,c.setAttribute("data-anim","in"),l=!0}function s(o){var r=Math.floor(Math.random()*o);for(t=(word_inf=e[r])[0];t.length>m-1;)t=(word_inf=e[r=Math.floor(Math.random()*o)])[0];n=word_inf[2]}$(c),new window.SimpleKeyboard.default({//onChange: input => onChange(input),
onKeyPress:e=>(function(e){switch(e){case"{bksp}":e="Backspace";break;case"{enter}":e="Enter"}console.log(e);var t=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(t)})(e)});var m=11,f=document.getElementById("game"),h=["lightgrey","lightgoldenrodyellow","chartreuse"],v=document.getElementById("firework"),y=new Fireworks.default(v),p=document.createElement("div");//字母个数
p.setAttribute("class","letter"),p.setAttribute("data-anim","none");var b=document.createElement("div");b.setAttribute("class","PopFrame");var k=document.createElement("div");function g(){for(var e=0;e<6;e++){var n=document.createElement("div"),o=document.createAttribute("class");o.value="row",n.setAttributeNode(o),n.setAttribute("id",`r-${e}`);for(var r=0;r<m;r++)p.setAttribute("id",`l-${e}-${r}`),p.setAttribute("data-anim","none"),r<t.length?(p.style.borderStyle="solid",p.style.borderWidth="1px"):p.style.borderWidth="0px",n.appendChild(p.cloneNode(!0));f.appendChild(n.cloneNode(!0))}}function E(){s(r),document.querySelector(".PopWindow").setAttribute("data-anim","out");var e=setTimeout(()=>{for(document.querySelector(".PopFrame").remove();f.firstChild;)f.removeChild(f.firstChild);g(),d=0,i=0,l&&u(),//key_event();
clearTimeout(e)},500)}function w(e,t,n){document.querySelector(".explain-word").textContent=e,document.querySelector(".explain-translate").textContent=`Translate: ${n}`}function A(){let e=Math.floor(15*Math.random());for(let t=0;t<e;t++)y.launch(1,{traceSpeed:20*Math.random()})}function S(e,t){t.appendChild(e)}/*
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

*/function $(e){e.addEventListener("animationend",()=>{e.setAttribute("data-anim","none")})}k.setAttribute("class","PopWindow"),k.setAttribute("data-anim","none"),$(k),b.appendChild(k),fetch("./asset/pop.html").then(e=>e.text()).then(e=>{a=e}),fetch("./asset/export.json").then(e=>e.json()).then(l=>{s(r=Object.keys(e=l).length),g(),document.addEventListener("keydown",e=>{if(/^[A-Za-z]$/.test(e.key)&&d<=5){//console.log(`l-${row_index}-${letter_index}`)
if(i>m-1){var r,l,c;let e,t;r=`l-${d}-${i-1}`,l=document.getElementById(r),c=0,e=0,t=setInterval(()=>{e<1&&0==c?e+=.1:(c=1,e-=.1),e<=0&&(e=0,clearInterval(t)),l.style.fontSize=`${10*e+30}px`},10),i=m}else{var u=document.getElementById(`l-${d}-${i}`);//letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
$(u),u.setAttribute("data-anim","in"),u.textContent=e.key,i++}}else"Backspace"==e.key&&i-1>=0&&d<=5?(document.getElementById(`l-${d}-${i-1}`).textContent="",i--):"Enter"==e.key&&d<=5&&function(e,r){for(var i="",d=0;d<r;d++)i+=document.getElementById(`l-${e}-${d}`).textContent;return console.log(i),""!=i&&(function(e,r,i){for(var d=[],l=[],c=0;c<e.length;c++){var u,s=e[c],m=document.getElementById(`l-${i}-${c}`),v=r.search(s);d.push((u=c,-1!=v&&function(e,t,n){for(let o=0;o<n.length;o++)if(t[e]==n[o]&&e==o)return!0;return!1}(u,e,r)?2:-1!=v?1:0)),l.push(m)}let y=0,p=setInterval(()=>{var r,i;y<d.length?(r=l[y],i=h[d[y]],r.setAttribute("data-anim","fill_in"),r.addEventListener("animationend",()=>{r.style.backgroundColor=i,r.setAttribute("data-anim","fill_out"),$(r)}),y++):(clearInterval(p),d.every(e=>2==e)&&d.length==t.length?setTimeout(()=>{S(b,f);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=a,w(t,o,n),A(),document.querySelector("#LFWS").addEventListener("click",()=>{A()}),document.querySelector("#RST").addEventListener("click",()=>{E()})},1e3):"kkkklooooo"==e&&setTimeout(()=>{S(b,f);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=a,w("kkkklooooo","?????","!!!!!"),A(),document.querySelector("#LFWS").addEventListener("click",()=>{A()}),document.querySelector("#RST").addEventListener("click",()=>{E()})},1e3))},400)}(i,t,e),!0)}(d,i)&&(d++,i=0,console.log(d))})}),document.querySelector(".icon").addEventListener("click",()=>{u()});