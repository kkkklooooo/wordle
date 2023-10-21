var e,t,n,o,r,a,i=0,l=0,d=!1,c=document.querySelector(".tips-text");//var words_count = 3933;
function u(){if(d){c.setAttribute("data-anim","out");var e=setTimeout(()=>{c.textContent="",d=!1,clearTimeout(e)},200)}else c.textContent=n,c.setAttribute("data-anim","in"),d=!0}function s(o){var r=Math.floor(Math.random()*o);for(t=(word_inf=e[r])[0];t.length>m-1;)t=(word_inf=e[r=Math.floor(Math.random()*o)])[0];n=word_inf[2]}S(c),new window.SimpleKeyboard.default({//onChange: input => onChange(input),
onKeyPress:e=>(function(e){switch(e){case"{bksp}":e="Backspace";break;case"{enter}":e="Enter"}console.log(e);var t=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(t)})(e)});var m=11,h=document.getElementById("game"),f=["lightgrey","lightgoldenrodyellow","chartreuse"],v=document.getElementById("firework"),y=new Fireworks.default(v),p=document.createElement("div");//字母个数
p.setAttribute("class","letter"),p.setAttribute("data-anim","none");var b=document.createElement("div");b.setAttribute("class","PopFrame");var k=document.createElement("div");function g(){for(var e=0;e<6;e++){var n=document.createElement("div"),o=document.createAttribute("class");o.value="row",n.setAttributeNode(o),n.setAttribute("id",`r-${e}`);for(var r=0;r<m;r++)p.setAttribute("id",`l-${e}-${r}`),p.setAttribute("data-anim","none"),r<t.length?(p.style.borderStyle="solid",p.style.borderWidth="1px"):p.style.borderWidth="0px",n.appendChild(p.cloneNode(!0));h.appendChild(n.cloneNode(!0))}}function E(e,t,n){document.querySelector(".explain-word").textContent=e,document.querySelector(".explain-translate").textContent=`Translate: ${n}`}function w(){let e=Math.floor(15*Math.random());for(let t=0;t<e;t++)y.launch(1,{traceSpeed:20*Math.random()})}function A(e,t){document.querySelector("#LFWS").addEventListener("click",()=>{w()}),document.querySelector("#RST").addEventListener("click",()=>{var e;s(r),document.querySelector(".PopWindow").setAttribute("data-anim","out"),e=setTimeout(()=>{for(document.querySelector(".PopFrame").remove();h.firstChild;)h.removeChild(h.firstChild);g(),l=0,i=0,d&&u(),//key_event();
clearTimeout(e)},500)}),t.appendChild(e)}/*
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

*/function S(e){e.addEventListener("animationend",()=>{e.setAttribute("data-anim","none")})}k.setAttribute("class","PopWindow"),k.setAttribute("data-anim","none"),S(k),b.appendChild(k),fetch("./asset/pop.html").then(e=>e.text()).then(e=>{a=e}),fetch("./asset/export.json").then(e=>e.json()).then(d=>{s(r=Object.keys(e=d).length),g(),document.addEventListener("keydown",e=>{if(/^[A-Za-z]$/.test(e.key)&&l<=5){//console.log(`l-${row_index}-${letter_index}`)
if(i>m-1){var r,d,c;let e,t;r=`l-${l}-${i-1}`,d=document.getElementById(r),c=0,e=0,t=setInterval(()=>{e<1&&0==c?e+=.1:(c=1,e-=.1),e<=0&&(e=0,clearInterval(t)),d.style.fontSize=`${10*e+30}px`},10),i=m}else{var u=document.getElementById(`l-${l}-${i}`);//letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
S(u),u.setAttribute("data-anim","in"),u.textContent=e.key,i++}}else"Backspace"==e.key&&i-1>=0&&l<=5?(document.getElementById(`l-${l}-${i-1}`).textContent="",i--):"Enter"==e.key&&l<=5&&function(e,r){for(var i="",l=0;l<r;l++)i+=document.getElementById(`l-${e}-${l}`).textContent;return console.log(i),""!=i&&(function(e,r,i){for(var l=[],d=[],c=0;c<e.length;c++){var u,s=e[c],m=document.getElementById(`l-${i}-${c}`),v=r.search(s);l.push((u=c,-1!=v&&function(e,t,n){for(let o=0;o<n.length;o++)if(t[e]==n[o]&&e==o)return!0;return!1}(u,e,r)?2:-1!=v?1:0)),d.push(m)}let y=0,p=setInterval(()=>{var r,i;y<l.length?(r=d[y],i=f[l[y]],r.setAttribute("data-anim","fill_in"),r.addEventListener("animationend",()=>{r.style.backgroundColor=i,r.setAttribute("data-anim","fill_out"),S(r)}),y++):(clearInterval(p),l.every(e=>2==e)&&l.length==t.length?setTimeout(()=>{A(b,h);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=a,E(t,o,n),w()},1e3):"kkkklooooo"==e&&setTimeout(()=>{A(b,h);let e=document.querySelector(".PopWindow");e.setAttribute("data-anim","in"),e.innerHTML=a,E("kkkklooooo","?????","!!!!!"),w()},1e3))},400)}(i,t,e),!0)}(l,i)&&(l++,i=0,console.log(l))})}),document.querySelector(".icon").addEventListener("click",()=>{u()});