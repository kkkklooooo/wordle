var e,t,n,r,o=0,a=0;h(document.querySelector(".tips-text")),new window.SimpleKeyboard.default({//onChange: input => onChange(input),
onKeyPress:e=>(function(e){switch(e){case"{bksp}":e="Backspace";break;case"{enter}":e="Enter"}console.log(e);var t=new KeyboardEvent("keydown",{key:e});document.dispatchEvent(t)})(e)});var l=document.getElementById("game"),d=["lightgrey","lightgoldenrodyellow","chartreuse"],i=document.getElementById("firework"),s=new Fireworks.default(i),c=document.createElement("div");//字母个数
c.setAttribute("class","letter"),c.setAttribute("data-anim","none");var u=document.createElement("div");u.setAttribute("class","PopFrame");var m=document.createElement("div");/*
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

*/function h(e){e.addEventListener("animationend",()=>{e.setAttribute("data-anim","none")})}m.setAttribute("class","PopWindow"),m.setAttribute("data-anim","none"),h(m),u.appendChild(m),fetch("./asset/pop.html").then(e=>e.text()).then(e=>{r=e}),fetch("./asset/export.json").then(e=>e.json()).then(i=>{(function(r){var o=Math.floor(Math.random()*r);for(t=(word_inf=e[o])[0];t.length>10;)t=(word_inf=e[o=Math.floor(Math.random()*r)])[0];n=word_inf[2]})(Object.keys(e=i).length),function(){for(var e=0;e<6;e++){var n=document.createElement("div"),r=document.createAttribute("class");r.value="row",n.setAttributeNode(r),n.setAttribute("id",`r-${e}`);for(var o=0;o<11;o++)c.setAttribute("id",`l-${e}-${o}`),c.setAttribute("data-anim","none"),o<t.length?(c.style.borderStyle="solid",c.style.borderWidth="1px"):c.style.borderWidth="0px",n.appendChild(c.cloneNode(!0));l.appendChild(n.cloneNode(!0))}}(),document.addEventListener("keydown",e=>{if(/^[A-Za-z]$/.test(e.key)&&a<=5){//console.log(`l-${row_index}-${letter_index}`)
if(o>10){var i,c,m;let e,t;i=`l-${a}-${o-1}`,c=document.getElementById(i),m=0,e=0,t=setInterval(()=>{e<1&&0==m?e+=.1:(m=1,e-=.1),e<=0&&(e=0,clearInterval(t)),c.style.fontSize=`${10*e+30}px`},10),o=11}else{var f=document.getElementById(`l-${a}-${o}`);//letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
h(f),f.setAttribute("data-anim","in"),f.textContent=e.key,o++}}else"Backspace"==e.key&&o-1>=0&&a<=5?(document.getElementById(`l-${a}-${o-1}`).textContent="",o--):"Enter"==e.key&&a<=5&&function(e,o){for(var a="",i=0;i<o;i++)a+=document.getElementById(`l-${e}-${i}`).textContent;return console.log(a),""!=a&&(function(e,o,a){for(var i=[],c=[],m=0;m<e.length;m++){var f,v=e[m],y=document.getElementById(`l-${a}-${m}`),p=o.search(v);i.push((f=m,-1!=p&&function(e,t,n){for(let r=0;r<n.length;r++)if(t[e]==n[r]&&e==r)return!0;return!1}(f,e,o)?2:-1!=p?1:0)),c.push(y)}let b=0,g=setInterval(()=>{var e,o;b<i.length?(e=c[b],o=d[i[b]],e.setAttribute("data-anim","fill_in"),e.addEventListener("animationend",()=>{e.style.backgroundColor=o,e.setAttribute("data-anim","fill_out"),h(e)}),b++):(clearInterval(g),i.every(e=>2==e)&&i.length==t.length&&setTimeout(()=>{var e,o;!function(e,t){t.appendChild(e)}(u,l);let a=document.querySelector(".PopWindow");a.setAttribute("data-anim","in"),a.innerHTML=r,e=t,o=n,document.querySelector(".explain-word").textContent=e,document.querySelector(".explain-translate").textContent=`Translate: ${o}`,function(){let e=Math.floor(15*Math.random());for(let t=0;t<e;t++)s.launch(1,{traceSpeed:20*Math.random()})}()},1e3))},400)}(a,t,e),!0)}(a,o)&&(a++,o=0,console.log(a))})});