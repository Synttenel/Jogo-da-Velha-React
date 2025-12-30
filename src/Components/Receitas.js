import React, { useState, useEffect } from "react";
import style from './style2.css';



function Receitas(){
const [category, setCategory] = useState(['Sobremesas', 'Frutos-marinhos', 'Bovinos', 'Veganos']);
   const [title, setTitle] = useState(['Sorvete italiano', 'Lagosta frita', 'Carne argentina', 
                                       'Legumes alpinos']);
   const [text, setText] = useState(['Sorvete sofisticado italiano', 'Gostoso', 'Eletrizante',
                                     'saudável']);
   const [link, setLink] = useState(['https:www.google.com', 'https:www.youtube.com', 
                                     'https:www.twitter.com', 'https:www.twitch.tv']);
   const [isVisible, setIsVisible] = useState('none');
   const [isOpacity, setIsOpacity] = useState(0);

    useEffect(() =>{
        
        console.log(category);
    })

    const handleCategoryChange = (e) => {
        const input = e.target.value;
        console.log(input);
        return input;
    }
    const handleTitleChange = (e) => {
        const input = e.target.value;
        console.log(input);
        return input;
    }
    const handleTextChange = (e) => {
        const input = e.target.value;
        console.log(input);
        return input;
    }
    const handleLinkChange = (e) => {
        const input = e.target.value;
        console.log(e);
        return input;
    }

    const handleCreateInput = () => {
       const createButton  = document.getElementById("create-button");
       const categoryCustom  = document.getElementById("categoryCustom");
       createButton.style.display = 'none';
       createButton.style.opacity = '0';
       setIsVisible('flex') ;
       setTimeout(() => setIsOpacity('1'), 20);
       setTimeout(() => categoryCustom.focus(isFocusable), 200);
      

    }
    const handleDeleteInput = () => {
       const createButton  = document.getElementById("create-button");
       const categoryCustom  = document.getElementById("categoryCustom");
        const titleCustom = document.getElementById("titleCustom");
        const textCustom = document.getElementById("textCustom");
        const linkCustom = document.getElementById("linkCustom");
       
       setIsOpacity('0');
       setTimeout(() => {
        setIsVisible('none')
        createButton.style.display = 'block';
        createButton.style.opacity = '1';

        categoryCustom.value = '';
        titleCustom.value = '';
        textCustom.value = '';
        linkCustom.value = '';

       }, 500);
    }

    const handleRemoveCard = (index) => {
        const getId = index.target.id;
        const getCategory = document.getElementById(`category${getId}`).textContent;
        const getTitle = document.getElementById(`title${getId}`).textContent;
        const getText = document.getElementById(`text${getId}`).textContent;
        const getLink = document.getElementById(`link${getId}`).textContent;

        setCategory(category.filter((string, _) => string !== getCategory));
        setTitle(title.filter((string, _) => string !== getTitle));
        setText(text.filter((string, _) => string !== getText));
        setLink(link.filter((string, _) => string !== getLink));
        console.log(index.target.id, getText)

    }

    const handleSubmit = () => {
        
        const categoryCustom  = document.getElementById("categoryCustom");
        const titleCustom = document.getElementById("titleCustom");
        const textCustom = document.getElementById("textCustom");
        const linkCustom = document.getElementById("linkCustom");
        if(categoryCustom.value == '' || titleCustom.value == '' || 
           textCustom.value == '' || linkCustom.value == ''){
            return alert("AVISO: Está faltando texto em uma das caixas de texto");
        }
       

        
        console.log(categoryCustom);
         setCategory([...category, categoryCustom.value.toLowerCase()]);
         setTitle([...title, titleCustom.value.toLowerCase()]);
         setText([...text, textCustom.value.toLowerCase()]);
         setLink([...link, `https:www.${linkCustom.value.toLowerCase()}`]);

        categoryCustom.value = '';
        titleCustom.value = '';
        textCustom.value = '';
        linkCustom.value = '';

        categoryCustom.focus(isFocusable);
    }
    
    return(
        <>  
                <div className="create-button-container">
                <button className="delete-button" onClick={handleDeleteInput} id="delete-button"
                 style={{opacity: `${isOpacity}`,display: `${isVisible}` }}>Cancelar</button>
                <button className="create-button" onClick={handleCreateInput} id="create-button"
                >Adicionar</button>
                </div>
            <div className="create-container" style={{opacity: `${isOpacity}`,display: `${isVisible}` }}>
                
                <div className="input-container">
                    <label className="input-label">Categoria <br></br>
                    <select
                    type="text" 
                    id="categoryCustom"
                    className="input-category"
                    maxLength="20"
                    placeholder="Ex: Sobremesa"
                    onChange={(e) => handleCategoryChange(e)}
                    >
                        {category.map((categories, index) => 
                            <option key={index} 
                            id={`categoryCustomOption${index}`}>{category[index]}</option>
                        )}
                    </select>
                    </label>
                    <label className="input-label">Título <br></br>
                    <input 
                    type="text" 
                    id="titleCustom"
                    className="input-title"
                    maxLength="20"
                    placeholder="Título da receita..."
                    onChange={(e) => handleTitleChange(e)}
                    ></input>
                    </label>
                    <label className="input-label">Texto <br></br>
                    <textarea
                    type="text" 
                    id="textCustom"
                    className="input-text"
                    placeholder="Escreva uma descrição..."
                    onChange={(e) => handleTextChange(e)}
                    ></textarea>
                    </label>
                    <label className="input-label">Redirecionamento <br></br>
                    <input 
                    type="text" 
                    id="linkCustom"
                    className="input-link"
                    placeholder="Ex: receitavovo.com"
                    onChange={(e) => handleLinkChange(e)}
                    ></input>
                    </label>
                    <label className="input-label">Categoria Customizada? <br></br>
                    <input type="checkbox"></input>
                    </label>
                    <button type="submit" className="input-submit" onClick={handleSubmit}>
                        Criar receita</button>
                </div>
            </div>
            <div className="main-container">
                {category.map((categories, index) => 
                
                    <div className="card-container" key={index} >

                        <button className="destroy-button" 
                        id={index} onClick={(index) => handleRemoveCard(index)}
                        >(...)</button>
                        <h1 className="card-category" id={`category${index}`}>{category[index]}</h1>
                        <h1 className="card-title" id={`title${index}`}>{title[index]}</h1>
                        <p className="card-text" id={`text${index}`}>{text[index]}</p>
                        <a className="card-link" href={link[index]} target='_blank' 
                        id={`link${index}`}>Saiba mais!</a>
                        
                        
                        </div>
                       
                )}
                    
            </div>
            
        </>
    )

}

export default Receitas;