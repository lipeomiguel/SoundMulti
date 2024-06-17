export default class Audio{
    constructor(){
        this.baseNumber = [1000];
        this.Micro = ()=>{
            const number = parseInt(Math.random() * 1000);
            console.log(number);
            const microBox = document.querySelector(".result-number");
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const micro = new SpeechRecognition();
            micro.lang = "pt-BR";
            micro.start();
            micro.addEventListener("result",(e)=>{
                const result = e.results[0][0].transcript;
                if(result==number){
                    microBox.style = "font-size: 2.4rem; font-weight: bold"
                    microBox.innerHTML = `🎉 Parabens voce ganhou:  ${result}`;
                }else if(result>number){
                    microBox.style = "font-size: 1.8rem; font-weight: bold"
                    microBox.innerHTML = `<i class="fa-solid fa-arrow-up"></i>   O numero que voce disse é maior do numero secreto:  ${result}`;
                }else if(result<number){
                    microBox.style = "font-size: 1.8rem; font-weight: bold"
                    microBox.innerHTML = `<i class="fa-solid fa-arrow-down"></i>   O numero que voce disse é menor do numero secreto:  ${result}`;
                }
            })
        }
    }
    firstBox(){
        const firstBox = document.querySelector(".firstBox");
        const secondBox = document.querySelector(".secund");
        firstBox.addEventListener("click",()=>{
            const first = document.querySelector(".first");
            first.style.display = "none";
            secondBox.style = "display:flex";
        })
    }
    secondBox(){
        const secondBox = document.querySelector(".secund");
        const baseNumber = [...document.querySelectorAll(".base")];
        const treeBox = document.querySelector(".tree");
        baseNumber.map((number)=>{
            let randomNumber = parseInt(Math.random() * 200);
            number.innerHTML = randomNumber;
            number.addEventListener("click",(e)=>{
                this.baseNumber[0] = parseInt(number.textContent);
                secondBox.style =  "display:none";
                treeBox.style = "display:flex";
            });
        });
    }
    TreeBox(){
        const boxTree = document.querySelector(".tree");
        const last = [...document.querySelectorAll(".last")];
        const treeBox = document.querySelector(".four");
        last.map((index)=>{
            let numbers = this.baseNumber;
            let randomNumber = parseInt(Math.random() * numbers );
            index.innerHTML = randomNumber;
            index.addEventListener("click",()=>{
                boxTree.style = "display: none";
                treeBox.style = "display: flex";
            })
        })
    }
    FourBox(){
        console.log("FourBox");
        const activeMicro = document.querySelector(".active");
        activeMicro.addEventListener("mousedown",()=>{
            console.log("Active Micro");
            const micro = this.Micro();
        })
    }
}