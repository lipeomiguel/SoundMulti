export default class Sounds{
    constructor(){
        this.Sound =(musicBox)=>{
            const audio_src = document.querySelector("audio");
            switch (musicBox) {
                case "01":
                    audio_src.setAttribute("src","./assets/sound/01.mp3");
                    break;
                case "02":
                    audio_src.setAttribute("src","./assets/sound/02.mp3");
                    break;
                case "03":
                    audio_src.setAttribute("src","./assets/sound/03.mp3");
                    break;
                case "04":
                    audio_src.setAttribute("src","./assets/sound/04.mp3");
                    break;
                case "05":
                    audio_src.setAttribute("src","./assets/sound/05.mp3");
                    break;
                case "06":
                    audio_src.setAttribute("src","./assets/sound/06.mp3");
                    break;
                case "07":
                    audio_src.setAttribute("src","./assets/sound/07.mp3");
                    break;
                case "08":
                    audio_src.setAttribute("src","./assets/sound/08.mp3");
                    break;
                default:
                    audio_src.setAttribute("src","./assets/sound/black.mp3");
                    break;
            }
            audio_src.play()
        }
    }
    Piano(){
        const pianoBox = document.querySelector(".container");
        pianoBox.addEventListener("click",(e)=>{
            this.Sound(e.target.className);
        });
    }
}