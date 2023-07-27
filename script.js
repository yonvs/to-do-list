var addtodolist = document.getElementById("addtodolist");
var inputfield = document.getElementById("inputfield");
var todocontainer = document.getElementById("todocontainer");

addtodolist.onclick = function(){
    if(inputfield.value != ""){
        var paragraphe = document.createElement("p");
        var undotodo = document.createElement("button");
        var todocard = document.createElement("div");
        undotodo.innerText = "-";
        paragraphe.innerText = inputfield.value;
        paragraphe.classList.add('paragraphe_style');
        undotodo.classList.add('undotodo');
        todocard.classList.add('todocard');
        todocontainer.appendChild(todocard);
        todocard.appendChild(paragraphe);
        todocard.appendChild(undotodo);
        inputfield.value = "";
    }
    else{
        alert("Veuillez saisir une tâche s'il vous plaît")
    }
    undotodo.addEventListener('click',function(){
        todocard.remove(paragraphe,undotodo);
    })
}
