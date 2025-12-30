import React from "react";
import ReactDOM from "react-dom/client";
import style from './style3.css';

function Clicker(){
   const [counter, setCounter] = useState(0);
   const [clickValue, setClickValue] = useState(1);
   const [endgame, setEndgame] = useState(false);
   const [itemCount0, setItemCount0] = useState(0);
   const [itemCount1, setItemCount1] = useState(0);
   const [itemCount2, setItemCount2] = useState(0);
   
  

    useEffect(() =>{

        let element;

        if (counter >= 100){
            element = document.getElementById('0').style;
            element.border = "2px solid hsla(133, 100%, 50%, 0.60)";
            element.cursor = "pointer";
        }
        else if (counter < 100){
            element = document.getElementById('0').style;
            element.border = "2px solid hsla(2, 100%, 50%, 0.60)";
            element.cursor = "not-allowed";
        }
        if (counter >= 200){
            element = document.getElementById('1').style;
            element.border = "2px solid hsla(133, 100%, 50%, 0.60)";
            element.cursor = "pointer";
        }
        else if (counter < 200){
            element = document.getElementById('1').style;
            element.border = "2px solid hsla(2, 100%, 50%, 0.60)";
            element.cursor = "not-allowed";
        }
        if (counter >= 750){
            element = document.getElementById('2').style;
            element.border = "2px solid hsla(133, 100%, 50%, 0.60)";
            element.cursor = "pointer";
        }
        else if (counter < 750){
            element = document.getElementById('2').style;
            element.border = "2px solid hsla(2, 100%, 50%, 0.60)";
            element.cursor = "not-allowed";
        }

        if (endgame) {
            setCounter(0);
            setClickValue(1);
            setItemCount0(0);
            setItemCount1(0);
            setEndgame(false);
        }
       

        console.log(itemCount0)
    }, [counter, endgame])

   const handleCounter = (event) => {
        setCounter(counter + clickValue);
        const getXPosition = event.nativeEvent.x;
        const getYPosition = event.nativeEvent.y;
        const getElement = document.getElementById('click');

        
            getElement.style.opacity = "1";
            getElement.style.fontSize = `${Math.random() * (100 - 20) + 20}px`;
            getElement.style.left = `${getXPosition + Math.random() * (50 - 20) + 20}px`;
            getElement.style.top = `${getYPosition + Math.random() * (50 - 20) + 20}}px`;
            
            console.log([getXPosition, getYPosition, getElement.style.left, getElement.style.top])

        
        const myTimeout = setTimeout(() => {
        getElement.style.opacity = "0";
        
        }, 100)

   }
  
   const handleShop = (event) => {
        let getId;    
        
    
        if (event.target.id == "" ){
            getId = event.target.offsetParent.id;
            console.log(event.target.offsetParent.id);
        }
        else if (event.target.id != ""){

            getId = event.target.id;
        }
        // Item de +1 CLICKS
        if (getId == 0){
            if (counter >= 100) {
                setClickValue(clickValue + 1);
                setCounter(counter - 100);
                setItemCount0(itemCount0 + 1);
                //alert(`AVISO: O valor dos cliques agora é ${clickValue + 1}`);

            }
            else{
                const getElement = document.getElementById('alert');
                getElement.style.display = "flex";

            } 
        }
        // Item de Multiplicar Clicks
        if (getId == 1){
            if (counter >= 200) {
                setClickValue(clickValue * 2);
                setCounter(counter - 200);
                setItemCount0(itemCount0 + 1);
                //alert(`AVISO: O valor dos cliques agora é ${clickValue + 1}`);

            }
            else{
                const getElement = document.getElementById('alert');
                getElement.style.display = "flex";

            } 
        }
        // Item de Fim de jogo
        if (getId == 2){
            if (counter >= 600) {
                setEndgame(true);
                setCounter(counter - 600);
                setItemCount0(itemCount0 + 1);
                const getElement = document.getElementById('alert');
                const getText = document.getElementById('text');
                getElement.style.display = "flex";
                getText.textContent = "Você Finalizou  Jogo!!!";
                console.log(getText)
                
                

            }
            else{
                const getElement = document.getElementById('alert');
                getElement.style.display = "flex";

            } 
        }
        
    
        
        
        //console.log(event);
   }

    return(
        <><div className="main-container">
            <div className="button-container">
                <h1 className="monitor">{counter}</h1>
                <button className="click-button" onClick={(event) => handleCounter(event)}>Click me</button>
                <span className="click-particle" id="click">{`+${clickValue}`}</span>

            </div>
            
            <div className="shop-container">
                <div className="shop-item" id="0" onClick={(event) => handleShop(event)}>
                    <p className="quantity-item">{`+${itemCount0 + 1}`}</p>
                    <img className="image-item" src="https://picsum.photos/200"></img>
                    <p className="text-item">+1 Clicks</p>
                </div>
                <div className="shop-item" id="1" onClick={(event) => handleShop(event)}>
                    <p className="quantity-item">{`x${itemCount1}`}</p>
                    <img className="image-item" src="https://picsum.photos/200"></img>
                    <p className="text-item">Multiplicar Clicks</p>
                </div>
                <div className="shop-item" id="2" onClick={(event) => handleShop(event)}>
                    <img className="image-item" src="https://picsum.photos/200"></img>
                    <p className="text-item">Fim de Jogo</p>
                </div>
                
            </div>
            <span className="alert-container" id="alert">
                <p className="alert-text" id="text">Template!!!</p>
                <button className="alert-button" id="alert-button" 
                onClick={(event) => event.target.offsetParent.style.display = "none"}>Fechar aviso</button>

            </span>
        </div>
        </>
    )

}

export default Clicker;