
var list = document.querySelector("ul");
//check off spefic todos by clicking

var listItems = document.querySelectorAll("li");

listItems.forEach(function(listItem){
    listItem.addEventListener("click", function(){
        listItem.classList.toggle("completed");
    });
});

//click on X to remove todo
var killBTN = document.querySelectorAll("span");

killBTN.forEach(function(btn){
    btn.addEventListener("click", function(e){
        btn.parentElement.classList.add("fade");
        setTimeout(function(){
            btn.parentElement.remove()
        }, 600);
        e.stopPropagation();
    });
});

//add a listener to the text input that fires when we hit the enter key!
var todoInput = document.querySelector('input[type="text"]');

todoInput.addEventListener("keypress",function(e){
    var keycode = e.which;
    if(keycode === 13){
        var liNode = document.createElement("LI");
        var spanNode = document.createElement("SPAN");
        spanNode.innerHTML =  '<i class="far fa-trash-alt"></i> ';
        //We do not have to make text nodes to appended to another one. Just changed the inner html of the upbove node! it will save time
        //var spanText = document.createTextNode('x ');
        var todoText = document.createTextNode(todoInput.value);
        
        spanNode.addEventListener("click", function(e){
            spanNode.parentElement.classList.add("fade");
            setTimeout(function(){
                spanNode.parentElement.remove()
            }, 600);
            e.stopPropagation();
        });
        liNode.addEventListener("click", function(){
            liNode.classList.toggle("completed");
        });
        //spanNode.appendChild(spanText);
        liNode.appendChild(spanNode);
        liNode.appendChild(todoText);
        list.appendChild(liNode);
        
        todoInput.value = "";
    }
});

var addBTN = document.querySelector('.fa-plus');

addBTN.addEventListener("click", function(e){
    
    if(todoInput.style.display == "none"){
        todoInput.style.display = "block";
        todoInput.classList.remove("fade_input");
    }else{
    setTimeout(function(){
        todoInput.style.display = "none";
    }, 600);
    e.stopPropagation();
    todoInput.classList.add("fade_input");
    }
});