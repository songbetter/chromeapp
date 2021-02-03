const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos =[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filter toDo.id가 li.id와 같지 않을 때
    const cleanToDos = toDos.filter(function(toDo){
    // parseInt string을 number로 바꿔준다.
    return toDo.id !== parseInt(li.id);
});
toDos = cleanToDos;
saveToDos();
}

// toDos를 가져와서 localStorage에 저장한다.
function saveToDos(){
    // JSON.stringify javascript object를 string으로 바꿔준다.
    // JSON: JavaScript Object Notation
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// li, delBtn, span, newID를 만든다.
function paintToDo(text){
    // createElement HTML에 element를 생성한다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.lentgh +1;
    delBtn.innerText = "❌ ";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    // appendChild HTML에 하위 element를 생성한다.
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();    
}

// form에 입력받은 후 ToDo list를 만든다.
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

// localStorge에 ToDos가 없을 때 paintToDo 함수를 실행한다.
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // JSON.parse string을 object로 바꿔준다.
        const parsedToDos = JSON.parse(loadedToDos);
        // forEach 모든 item에 함수를 실행한다.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
