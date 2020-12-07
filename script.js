const newnote = document.querySelector('.note_button')
const cancel = document.querySelector('.cancel_button')
const darkmode = document.querySelector('.dark_button')
const save = document.querySelector('.save_button')
const head = document.querySelector('header')
const section = document.querySelector('section')
const aside = document.querySelector('aside')
const body = document.querySelector('body')
const textarea= document.querySelector('textarea')
var notelist = [ {title: "note one", body:"some text 1"}, {title:"note two", body:"some text 2"}];
const li = document.querySelectorAll('li');


function theme(){
    if(darkmode.style.backgroundColor != "blue"){
        newnote.style.backgroundColor = "purple";
        darkmode.style.backgroundColor = "blue";
        cancel.style.backgroundColor = "brown";
        save.style.backgroundColor = "black";
        head.style.backgroundColor = "black";
        head.style.color = "white"
        section.style.backgroundColor = "grey";
        aside.style.backgroundColor = "black";
        aside.style.color = "white";
        document.querySelector('footer').style.backgroundColor = 'grey'
        document.body.style.backgroundColor = 'brown'
        }
    else {
        darkmode.style.backgroundColor = "grey";
        newnote.style.backgroundColor = "green";
        cancel.style.backgroundColor = "red";
        save.style.backgroundColor = "green"
        head.style.backgroundColor = "brown";
        head.style.color = "black"
        section.style.backgroundColor = "beige";
        aside.style.backgroundColor = "grey";
        aside.style.color = "black";
        document.querySelector('footer').style.backgroundColor = "pink";
        document.body.style.backgroundColor = 'white'
    }
}

function hidden(){
    save.style.display = "none";
    cancel.style.display = "none";
    textarea.style.display = "none";
}

function newNote(){
    save.style.display = "inline";
    cancel.style.display = "inline";
    textarea.style.display = "inline";
}

function savenote(){
    const text = document.getElementById('myTextArea').value
    var lines = text.split('.');
    var string = ""
    for (i = 1; i < lines.length ; i++){
        string += String(lines[i]) +"."
    }
    var firstline = lines.shift()
    notelist.push({title: firstline, body: string});
    var button = document.createElement("Button")
    button.value = text
    button.style.display ="block"
    button.appendChild(document.createTextNode(firstline));
    button.addEventListener("click",function() {go(button.value)});
    document.querySelector('ul').appendChild(button);

}


function go(button_value){
    document.getElementById("myTextArea").value = button_value;
}

darkmode.addEventListener("click", theme);
cancel.addEventListener("click",hidden);
newnote.addEventListener("click",newNote);
save.addEventListener("click",savenote)
