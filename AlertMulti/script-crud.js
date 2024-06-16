const tarefa = document.querySelector(".app__button--add-task");
const textInput = document.querySelector(".app__form-textarea");
const deleteBox = document.querySelector(".app__form-footer__button--delete");
const form = document.querySelector(".app__form-add-task");
const cancelarBox = document.querySelector(".app__form-footer__button--cancel");
const fa_trash = document.querySelector(".fa-trash");
const StorageTarefas = [];
const checking = document.querySelector("#btn-remover-concluidas");
const andamento = document.querySelector(".app__section-active-task-description");
const removerAll = document.querySelector("#btn-remover-todas");
let checkingBox = [];
let AllBox = [];
let ids = 0;
function CreateTarefa(description="Nenhuma description"){
    const getListTarefa = document.querySelector(".app__section-task-list");
    const createLi = document.createElement("li");
    createLi.className = "app__section-task-list-item";
    const createI = document.createElement("i")
    createI.setAttribute("class","fa-solid fa-circle-check");
    createLi.appendChild(createI);
    const createP = document.createElement("p");
    createP.className = "app__section-task-list-item-description";
    createP.innerText = description;
    createLi.appendChild(createP);
    const createButton = document.createElement("button");
    createButton.className = "app_button-edit";
    createLi.appendChild(createButton);
    const createX = document.createElement("i")
    createX.setAttribute("class","fa-solid fa-pen");
    createLi.appendChild(createX);
    AllBox.push(createLi);
    getListTarefa.appendChild(createLi);
    createX.addEventListener("click",()=>{
        const title = prompt("Qual nome da tarefa:");
        createP.innerText = title;
    })
    createI.addEventListener("click",()=>{
        createI.style = "color: #22ff00"
        andamento.innerText = description;
        checkingBox.push(createI.parentElement);
    });
}
function RemoveChecking(){
    if(checkingBox.length > 0){
        checkingBox.map((e)=>{
            e.remove();
            andamento.innerText = "";
        })
    }
}
checking.addEventListener("click",()=>{
    RemoveChecking();
})
removerAll.onclick = ()=>{
    if(AllBox.length > 0){
        AllBox.map((e)=>{
            e.remove();
            andamento.innerText = "";
        })
    }
}
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const tarefas = {
        id: ids,
        description: textInput.value,
    }
    StorageTarefas.push(tarefas);
    localStorage.setItem("tarefas",JSON.stringify(StorageTarefas));
    const getItem = localStorage.getItem("tarefas");
    const jsonItem = JSON.parse(getItem);
    CreateTarefa(jsonItem[jsonItem.length-1].description);
    textInput.value = "";
    ids++;

})
tarefa.addEventListener("click",()=>{
    if(form.className.search("hidden")>-1){
        form.classList.remove("hidden");
    }else{
        form.classList.add("hidden");
    }
});
textInput.addEventListener("keyup",(e)=>{
    textInput.setAttribute("value",e.target.value)
})
cancelarBox.addEventListener("click",()=>{
    if(form.className.search("hidden")>-1){
        form.classList.remove("hidden");
    }else{
        form.classList.add("hidden");
    }
});
deleteBox.addEventListener("click",()=>{
    if(form.className.search("hidden")>-1){
        form.classList.remove("hidden");
    }else{
        form.classList.add("hidden");
    }
})