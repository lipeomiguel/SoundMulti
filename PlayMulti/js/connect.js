// Vou criar uma função assíncronas.
async function listaVideos(){
    const api = await fetch("http://localhost:3000/videos");
    const videos = await api.json();
    return videos;
}
const ApiJson = listaVideos();
async function searchForm(){
    const data_search = document.querySelector("[data-search]");
    const btn_search = document.querySelector(".pesquisar__botao");
    data_search.addEventListener("keyup",(e)=>{
        data_search.setAttribute("value",e.target.value);
    });
    btn_search.addEventListener("click",async ()=>{
        const videos = [...document.querySelectorAll(".videos__item")];
        videos.map((f)=>f.remove());
        const getFetch = await fetch(`http://localhost:3000/videos?q=${data_search.value}`);
        const getVideos = await getFetch.json();
        getVideos.filter((el)=>{
            let titleVideo = el.titulo;
            if(titleVideo.search(data_search.value)>=0){
                const list = document.querySelector("[data-list]");
                let title = el.titulo;
                let descricao = el.descricao;
                let imagem = el.imagem;
                let url = el.url;
                const li = document.createElement("li");
                li.setAttribute("class","videos__item");
                li.innerHTML =`<iframe width="100%" height="72%" src="https://www.youtube.com/embed/jpuJ1qrluoU" title="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${descricao}</p>
            </div>`
                list.appendChild(li);


            }else{
                console.log("No title video found")
            }
        })
    })
}
async function GetApi(){
    const list = document.querySelector("[data-list]");
    const videos = await ApiJson;
    videos.map((e)=>{
        const li = document.createElement("li");
        let title = e.titulo;
        let descricao = e.descricao;
        let imagem = e.imagem;
        let url = e.url;
        li.setAttribute("class","videos__item");
        li.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${title}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${title}</h3>
                <p>${descricao}</p>
            </div>`;
        list.appendChild(li);
    })
};
async function GetForm(){
    const form = document.querySelector(".container__formulario");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const url = e.target.url.value;
        const titulo = e.target.titulo.value;
        const imagem = e.target.imagem.value;
        const id = parseInt(Math.random().toFixed(2) * 100);
        const objLiteral = {
            id: id,
            url: url,
            titulo: titulo,
            imagem: imagem,
            descricao: "10 mil visualizações",
        };
        const sendForm = fetch("http://localhost:3000/videos",{
            method: "POST",
            body: JSON.stringify(objLiteral),
            headers: {
                "Content-Type": "application/json"
            }
        })
        window.location.href = "http://127.0.0.1:5500/Projects/SoundMulti/PlayMulti/pages/envio-concluido.html";
    })
}
export {ApiJson,GetForm,searchForm,GetApi};