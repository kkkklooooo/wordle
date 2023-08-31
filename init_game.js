var words_jsonurl = "https://raw.githubusercontent.com/kkkklooooo/wordle/main/asset/export.json";
var words_json;
var main_word;
var word_translate;
var word_explain;
var words_count
var letter_index = 0, row_index = 0;
var tips = false;
var tips_text = document.querySelector(".tips-text");
AddAnimListener(tips_text);





//var words_count = 3933;

function tips_func() {
    if (!tips) {
        tips_text.textContent = word_translate;
        tips_text.setAttribute("data-anim", "in");
        tips = true;
    } else {
        tips_text.setAttribute("data-anim", "out");
        var timer = setTimeout(() => {
            tips_text.textContent = "";
            tips = false;
            clearTimeout(timer);
        }, 200)
    }
}

function GetWordInf(words_count) {
    var index = Math.floor(Math.random() * words_count);
    word_inf = words_json[index];
    main_word = word_inf[0];
    while (main_word.length > letters_num - 1) {
        index = Math.floor(Math.random() * words_count);
        word_inf = words_json[index];
        main_word = word_inf[0];
    }
    word_translate = word_inf[2]
}





var try_times = 6; //尝试次数
var letters_num = 11;//字母个数

var game_div = document.getElementById("game");//game大框架
var index2color = ["lightgrey", "lightgoldenrodyellow", "chartreuse"];//index to color

var container = document.getElementById("firework");
var firework = new Fireworks.default(container);

var max_firework = 15;


var PopPathurl = "https://raw.githubusercontent.com/kkkklooooo/wordle/main/asset/pop.html";



var letter = document.createElement("div");
letter.setAttribute("class", "letter");
letter.setAttribute("data-anim", "none");




var PopFrame = document.createElement("div");
PopFrame.setAttribute("class", "PopFrame");
var PopWindow = document.createElement("div");
PopWindow.setAttribute("class", "PopWindow");
PopWindow.setAttribute("data-anim", "none");
AddAnimListener(PopWindow);
PopFrame.appendChild(PopWindow);
var PopContent;
fetch(PopPathurl).then((response) => {
    return response.text();
}).then((body) => {
    PopContent = body;
})





function build_init() {
    for (var i = 0; i < try_times; i++) {
        var rows = document.createElement("div");
        var _class = document.createAttribute("class");
        _class.value = "row";
        rows.setAttributeNode(_class);
        rows.setAttribute("id", `r-${i}`)
        for (var j = 0; j < letters_num; j++) {
            letter.setAttribute("id", `l-${i}-${j}`)
            letter.setAttribute("data-anim", "none");
            if (j < main_word.length) {
                letter.style.borderStyle = "solid";
                letter.style.borderWidth = '1px';
            } else {
                letter.style.borderWidth = '0px';
            }
            rows.appendChild(letter.cloneNode(true));

        }
        game_div.appendChild(rows.cloneNode(true));
    }
}



function reset() {
    GetWordInf(words_count);

    document.querySelector(".PopWindow").setAttribute("data-anim", "out");
    var timer = setTimeout(() => {
        document.querySelector('.PopFrame').remove();
        while (game_div.firstChild) {
            game_div.removeChild(game_div.firstChild)
        }
        build_init();
        row_index = 0;
        letter_index = 0;
        //key_event();
        clearTimeout(timer);
    }, 500);


}

function appendExplain(main_word, word_explain, word_translate) {
    document.querySelector(".explain-word").textContent = main_word;
    document.querySelector(".explain-translate").textContent = `Translate: ${word_translate}`;
}

function LaunchFireworks() {
    let count = Math.floor(Math.random() * max_firework);
    for (let o = 0; o < count; o++) {
        firework.launch(1, {
            traceSpeed: Math.random() * 20
        })
    }
}

function addPop(ele, parent) {
    parent.appendChild(ele);
}



function CreatePopComp() {
    var frame = document.createElement("div");
    var frameNoBlur = document.createElement
    frame.setAttribute("class", "PopFrame");
}


function search_letter(i, data, standard) {
    for (let iter = 0; iter < standard.length; iter++) {
        if (data[i] == standard[iter] && i == iter) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

function check(check_value, i, data, standard) {
    if (check_value != -1 && search_letter(i, data, standard)) {
        return 2;
    } else if (check_value != -1) {
        return 1
    }
    else {
        return 0;
    }
}

function check_word(data, standard, row_index) {
    var ColoList = [];
    var ElementList = [];
    for (var k = 0; k < data.length; k++) {
        var letterToCheck = data[k];
        var letter_element = document.getElementById(`l-${row_index}-${k}`);
        var check_value = standard.search(letterToCheck);
        ColoList.push(check(check_value, k, data, standard));
        ElementList.push(letter_element);
    }
    let index = 0;
    let timer_flip = setInterval(() => {
        if (index < ColoList.length) {
            FlipCard(ElementList[index], index2color[ColoList[index]]);
            index++;
        } else {
            clearInterval(timer_flip);
            if (ColoList.every(item => item == 2) && ColoList.length == main_word.length) {
                var timeout = setTimeout(() => {
                    addPop(PopFrame, game_div);
                    let wind = document.querySelector(".PopWindow");
                    wind.setAttribute("data-anim", "in");
                    wind.innerHTML = PopContent;
                    appendExplain(main_word, word_explain, word_translate);
                    LaunchFireworks();
                }, 1000);
            }

        }


    }, 400);
}


function submit_func(row_index, letter_index) {
    var data = "";
    for (var i = 0; i < letter_index; i++) {
        data += document.getElementById(`l-${row_index}-${i}`).textContent
    }
    console.log(data);
    if (data == "") {
        return false;
    } else {
        check_word(data, main_word, row_index);
        return true;
    }
}

function end_stress(id, time) {
    var stress_element = document.getElementById(id);
    let count = time * 1000 / 10;
    var flip = 0;
    let value = 0;
    let timer = setInterval(() => {
        if (value < 1 && flip == 0) {
            value += 1 / count;

        } else {
            flip = 1;
            value -= 1 / count;
        }
        if (value <= 0) {
            value = 0;
            clearInterval(timer);
        }
        stress_element.style.fontSize = `${value * 10 + 30}px`
    }, 10)

}

/*
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

*/


function AddAnimListener(element) {
    element.addEventListener("animationend", () => {
        element.setAttribute("data-anim", "none");
    })
}

function FlipCard(ele, backgroundColor) {
    ele.setAttribute("data-anim", "fill_in");
    ele.addEventListener("animationend", () => {
        ele.style.backgroundColor = backgroundColor;
        ele.setAttribute("data-anim", "fill_out")
        AddAnimListener(ele);
    })
}


fetch(words_jsonurl).then((response) => {
    return response.json();
}).then((data) => {
    words_json = data;
    words_count = Object.keys(words_json).length
    GetWordInf(words_count);
    build_init();
    key_event();
})








function key_event() {
    document.addEventListener("keydown", (e) => {
        if (/^[A-Za-z]$/.test(e.key) && row_index <= try_times - 1) {
            //console.log(`l-${row_index}-${letter_index}`)

            if (letter_index > letters_num - 1) {
                //alert("stop");
                end_stress(`l-${row_index}-${letter_index - 1}`, 0.1)
                letter_index = letters_num;
            } else {
                var current_letter = document.getElementById(`l-${row_index}-${letter_index}`);
                //letter_in_anim(`l-${row_index}-${letter_index}`, 0.125);
                AddAnimListener(current_letter);
                current_letter.setAttribute("data-anim", "in");
                current_letter.textContent = e.key;
                letter_index++;
            }

            //var current_letter=document.getElementById(`l-${row_index}-${letter_index}`);
            //current_letter.textContent=e.key;
        } else if (e.key == "Backspace" && letter_index - 1 >= 0 && row_index <= try_times - 1) {
            var todelete_letter = document.getElementById(`l-${row_index}-${letter_index - 1}`);
            todelete_letter.textContent = "";
            letter_index--;
        } else if (e.key == "Enter" && row_index <= try_times - 1) {
            if (submit_func(row_index, letter_index)) {
                row_index++;
                letter_index = 0;
                console.log(row_index);
            }

        }
    })
}




