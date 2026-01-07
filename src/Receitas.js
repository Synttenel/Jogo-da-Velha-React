import React, { useState, useEffect } from "react";
import style from './Styles/style2.css';
import { isFocusable } from '@testing-library/user-event/dist/utils/index.js';
import Imagem from './Media/imagem.jpg';


function Receitas(){

// Variável de array de useState, usada para mostrar as categorias atuais.
const [category, setCategory] = useState(['sobremesas', 'frutos-marinhos', 'bovinos', 'veganos']);

// Variável de array de useState, usada para salvar as categorias e para serem mostradas no input select.
const [prevCategory, setPrevCategory] = useState(['sobremesas', 'frutos-marinhos', 'bovinos', 'veganos']);

// Variável de array de useState, usada para mostrar os títulos atuais.
   const [title, setTitle] = useState(['sorvete italiano', 'lagosta frita', 'carne argentina', 
                                       'legumes alpinos']);

// Variável de array de useState, usada para mostrar as descrições atuais.
   const [text, setText] = useState(['sorvete sofisticado italiano', 'gostoso', 'eletrizante',
                                     'saudável']);

// Variável de array de useState, usada para mostrar os links de redirecionamentos atuais.
   const [link, setLink] = useState(['https:www.google.com', 'https:www.youtube.com', 
                                     'https:www.twitter.com', 'https:www.twitch.tv']);

// Variável de string de useState, usada para esconder os botões "adicionar" e "cancelar" no topo do site, esta variável é uma useState para poder mudar a cada atualização React da página.
   const [isVisible, setIsVisible] = useState('none');

// Como a variável acima, esta é usada para esconder os botões "adicionar" e "cancelar" no topo do site, criando um efeito de desvanecer.
   const [isOpacity, setIsOpacity] = useState(0);

// Varíavel booleana de useState, usada para alternar entre os inputs "select" e "input-text" de categoria, sendo o "select" usado quando TRUE e "input-text" usado quando FALSE.
   const [isHidden, setIsHidden] = useState(true);

    useEffect(() =>{

       
        //console.log(category);
        //console.log(prevCategory);
    })

// Usado para alterar o título e logo da página.
    document.title = "RECEITAS";
    document.getElementsByTagName("link")[0].href = Imagem;

// Testes de funcionamento quando se interage com cada input.
    const handleCategoryChange = (e) => {
        const input = e.target.value;
       // console.log(input);
        return input;
    }
    const handleTitleChange = (e) => {
        const input = e.target.value;
       // console.log(input);
        return input;
    }
    const handleTextChange = (e) => {
        const input = e.target.value;
      //  console.log(input);
        return input;
    }
    const handleLinkChange = (e) => {
        const input = e.target.value;
       // console.log(e);
        return input;
    }

// Teste de funcionamento do input-text de categorias customizadas, usada para adicionar categorias fora das pré-definidas
    const handleAddCategory = (e) => {
        const input = e.target.value;
     //   console.log(e);
        return input;
    }
// Função do botão que quando acionado, altera a visibilidade dos inputs "select" e "input-text" de categoria,
//  se pressionado alterará a boolena de isHidden.
    const handleAddCategoryBtn = (e) => {
        const input = e.target.checked;
      //  console.log(input);
        const addCategoryBtn = document.getElementById("addCategoryBtn");
      //  console.log(addCategoryBtn.hidden);
        if(input == true){
            setIsHidden(false);
        }
        else if(input == false){
            setIsHidden(true);
        }
        return input;
    }
// Função que mostra o campo de inputs, onde estão; categoryCustom, addCategory, titleCustom, textCustom, LinkCustom e addCategoryBtn.
    const handleCreateInput = () => {
       const createButton  = document.getElementById("create-button");
       const categoryCustom  = document.getElementById("categoryCustom");
       createButton.style.display = 'none';
       createButton.style.opacity = '0';
       setIsVisible('flex') ;
       setTimeout(() => setIsOpacity('1'), 20);
       setTimeout(() => categoryCustom.focus(isFocusable), 200);
      

    }
// Função que ao contrário da função anterior, esconde o campo de inputs e apaga qualquer coisa que tinha sido digitada nos campos.
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
// Função que remove os cards de receita
    const handleRemoveCard = (index) => {
        
    // Estando em um map, com key="index", pegamos cada elemento dos cards pelo o seu id e armazenamos nas constantes abaixo.
        const getId = index.target.id;
        const getCategory = document.getElementById(`category${getId}`).textContent;
        const getTitle = document.getElementById(`title${getId}`).textContent;
        const getText = document.getElementById(`text${getId}`).textContent;
        const getLink = document.getElementById(`link${getId}`).textContent;
    
    // Criando uma variável para cada componente e armazenando todas informações em tais variáveis.
        let categoryArray = category;
        let titleArray = title;
        let textArray = text;
        let linkArray = link;
        
     //   console.log(categoryArray);
    
    // Usando o método splice dos arrays nas variáveis anteriores, retiramos uma string de cada componente, cujo coordenada seja seu id.
        categoryArray.splice(getId, 1);
        titleArray.splice(getId, 1);
        textArray.splice(getId, 1);
        linkArray.splice(getId, 1);

      //  console.log(categoryArray);

    // Agora usando o método filter dos arrays nos arrays useState de cada componente,
    //  filtraremos por cada string de modo que o método só retornará os valores diferentes do selecionado (get"COMPONENTE").
        setCategory(category.filter(() => categoryArray !== getCategory));
        setTitle(title.filter(() => titleArray !== getTitle));
        setText(text.filter(() => textArray !== getText));
        setLink(link.filter(() => linkArray !== getLink));

     //   console.log(category);

    // O método a seguir seria usado, porém quando testado, ele removia componentes com strings iguais, por exemplo:
     // se houve 2 cards de receita com categorias "sobremesa", o programa iria remover os dois, por terem o mesmo string.

        //setCategory(category.filter((string, index) => string !== getCategory ));
        //setTitle(title.filter((string, _) => string !== getTitle));
        //setText(text.filter((string, _) => string !== getText));
        //setLink(link.filter((string, _) => string !== getLink));
        
       // console.log(index.target.id, getText)

    }
// Função do botão de enviar as informações para adicionar aos cards de receitas.
    const handleSubmit = () => {
    
    // Tem relação com o campo de "select" das categorias.
        const categoryCustom  = document.getElementById("categoryCustom");

    // Tem relação com o campo de "input-text" das categorias.
        const addCategory = document.getElementById("addCategory");

        const titleCustom = document.getElementById("titleCustom");
        const textCustom = document.getElementById("textCustom");
        const linkCustom = document.getElementById("linkCustom");

    // Teste lógico para saber se o campo de inputs das categorias é o "select" ou "input-text".
     // O teste lógico interior analisa se os campos de input estão vazios, antes de enviarem as informações para os useState.
      // Caso estejam vazios, o programa retornará um alerta e sairá desta função.
        if(isHidden == true){
            if(categoryCustom.value == '' || titleCustom.value == '' || 
           textCustom.value == '' || linkCustom.value == ''){
            return alert("AVISO: Está faltando texto em uma das caixas de texto");
        }
        }
        else if(isHidden == false){
            if(addCategory.value == '' || titleCustom.value == '' || 
           textCustom.value == '' || linkCustom.value == ''){
            return alert("AVISO: Está faltando texto em uma das caixas de texto");
        }
        }

       // console.log("antes do loop");

    // Variável usada para iterar no loop a seguir.
        let i = 0;
    
    // Loop que itera em cada string do useState "prevCategory",
     //  este loop foi feito para não ter strings repetidas no input das categorias "Select".
        for(const element of prevCategory){
            i += 1;
          //  console.log(element);            
            //Vendo se é categoryCustom.
            if(isHidden == true){
                if(categoryCustom.value == element){
            // Quando este teste é TRUE, o programa não prosseguirá com esse loop.

                 //   console.log("categoria pre-determinada igual");
                    break;
                }
            }
            //Vendo se é addCategory.
            if(isHidden == false){
                if(addCategory.value == element){
            // Quando este teste é TRUE, o programa não prosseguirá com esse loop.

                 //   console.log("categoria customizada igual");
                    break;
                }
            }

          //  console.log("depois dos if's", i);
          //  console.log(addCategory.value);

        // Quando a iteração da variável "i" for igual ao tamanho do array useState "prevCategory",
         //  consequentemente, também não haverá strings iguais por causa dos testes lógicos anteriores
            if(i == prevCategory.length){
                if(isHidden == true){
                    setPrevCategory([...prevCategory, categoryCustom.value.toLowerCase()]);
                 //   console.log("escrevendo... pre-determinada");
                }
                if(isHidden == false){
                    setPrevCategory([...prevCategory, addCategory.value.toLowerCase()]);
                   // console.log("escrevendo... customizada");
                }
            }
        }
      // console.log("depois do loop");

    // Adicionando as informações para os arrays useState de cada componente.  

    // Teste lógico sobre os inputs de categorias "select" e "input-text".    
        if(isHidden == true){
            setCategory([...category, categoryCustom.value.toLowerCase()]);
        }
        else if(isHidden == false){
             setCategory([...category, addCategory.value.toLowerCase()]);
        }

         setTitle([...title, titleCustom.value.toLowerCase()]);
         setText([...text, textCustom.value.toLowerCase()]);
         setLink([...link, `https:www.${linkCustom.value.toLowerCase()}`]);

    // Quando tudo for adicionado, o programa irá apagar tudo o que foi digitado nos campos de input.
        categoryCustom.value = '';
        
      //  console.log(addCategory.value);
        titleCustom.value = '';
        textCustom.value = '';
        linkCustom.value = '';
        addCategory.value = '';
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
                    hidden={!isHidden}
                    size="3"
                    onChange={(e) => handleCategoryChange(e)}
                    >
                        {prevCategory.map((prevCategories, index) => 
                            <option key={index} 
                            id={`categoryCustomOption${index}`}>{prevCategory[index]}</option>
                        )}
                    </select>
                    <input
                    type="text"
                    id="addCategory"
                    className="input-title"
                    maxLength="20"
                    placeholder="Ex Sobremesa"
                    hidden={isHidden}
                    onChange={(e) => handleAddCategory(e)}
                    />
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
                    <input type="checkbox" id="addCategoryBtn" onChange={(e) => handleAddCategoryBtn(e)}></input>
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