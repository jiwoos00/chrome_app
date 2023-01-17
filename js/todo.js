const toDoForm=document.getElementById("todo-form");
const toDoInput=document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");
const script=document.getElementById("script");

let toDos=[];
let scripts="";
const TODOS_KEY="todos";
const SCRIPT="script";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos에 obj를 저장하게됨
    //localStorage.setItem(TODOS_KEY, toDos);
    
}  
function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id!==parseInt(li.id)); //toDo는 number, li는 string
    saveToDos();
}

function insertToDo(event){
    const li=event.target.parentElement;
    const sentence=li.children[0].textContent;
    script.innerText=sentence;

    localStorage.setItem(SCRIPT, sentence);
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text+" ";
    li.appendChild(span);

    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);

    const ck=document.createElement("button");
    ck.innerText="V";
    ck.addEventListener('click',insertToDo);
    li.appendChild(ck);

    toDoList.appendChild(li);

    const savedScript=localStorage.getItem(SCRIPT);
    script.innerText=savedScript;
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now() //구분자
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}