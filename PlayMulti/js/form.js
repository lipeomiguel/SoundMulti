import {GetForm,searchForm} from "./connect.js";
GetForm();
const inputs = [...document.querySelectorAll(".campo__escrita")];
inputs.map((e)=>{
    e.addEventListener("keyup",(f)=>{
        e.setAttribute("value",f.target.value);
    })
})