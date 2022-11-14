import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import phoneValidation from "../validations/phoneValidation";
import emailValidation from "../validations/emailValidation";
import webSiteValidation from "../validations/webSiteValidation";

import '../styles/detailsuser/detailsuser.css'



var urlDividida = window.location.href.split('/');
var idUser = urlDividida[urlDividida.length - 1];

function DetailsUser(props){
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebSite] = useState('');
    const [sucess, setSucess] = useState('');
    const [error, setError] = useState('');
    const [allData, setAllData] = useState('');

    function formularioSubmit(event) {
      console.log(name)
      console.log(email)
      console.log(phone)
      console.log(website)
      console.log(sucess) 
      console.log(error) 
      console.log(allData)  
      event.preventDefault();


      fetch('https://jsonplaceholder.typicode.com/posts/'+idUser, {
        method: 'PUT',
        body: JSON.stringify({
          
          name: name,
          email: email,
          phone: phone,
          website: website
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => { 

        if(name == '' || email == '' || phone == '' || website == ''){
          setSucess("")
          setAllData("* Todos os dados são obrigatórios!")
        }else if(name != '' || email != '' || phone != '' || website != ''){
          if(name.length < 3){
            setSucess("")
            setName("Nome inferior a 3 letras!")
            setError("Erro ao salvar")
  
          }else if(emailValidation(email) == false){
            setSucess("")
            setEmail("Digite um e-mail válido!")
            setError("Erro ao salvar")
  
          }else if( phoneValidation(phone) == false){
            setSucess("")
            setPhone("Digite um numero de celular válido!") 
            setError("Erro ao salvar")  
  
          }else if( webSiteValidation(website) == false){
            setSucess("")
            setWebSite("Digite um site válido!") 
            setError("Erro ao salvar!") 
  
          }else{
            setSucess("Usuário salvo com sucesso")
            setAllData("")
            setError("")
            console.log(json)         
          }
        }
                  
      });  
    }

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/?id='+idUser)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const { id, name, email, phone, website } = data[0];

        setId(id)
        setName(name)
        setEmail(email)
        setPhone(phone)
        setWebSite(website)
     
      })
    }, [id])

   
    return(
      <div className="main-details-user-content">
        <div className='details-user-content'>
          <div className="details-user-title">Editar usuário</div>
          <div className="main-details-user">
            <div className='main-cancel'>
              <div className="cancel-content">
                <div className="user-id">ID: { id }</div>
                <div className='user-cancel'><Link to={props.rota} target='_blank'
          rel='noreferrer'>CANCELAR</Link></div>
              </div>
            </div>
            <form onSubmit={(e) => {
                formularioSubmit(e);
              }}>
              <div className="user-data-content">                
                <label className="user-title" >Nome:
                <input type="text" value={ name }  
               onChange={e => setName(e.target.value)} placeholder= "Digite o nome"/>
               </label> 
              </div>
              <div className="user-data-content">                
                <label className="user-title">E-mail:</label>
                <input type="text" value={ email } 
                onChange={e => setEmail(e.target.value)} placeholder= "Digite um e-mail válido" /> 
              </div>
              <div className="user-data-content">                
                <label className="user-title">Celular:</label>
                <input type="text" value={  phone } 
                onChange={e => setPhone(e.target.value)} placeholder= "Digite um celular Ex.:99-99999-9999"/> 
              </div>
              <div className="user-data-content">                
                <label className="user-title" >Site:</label>
                <input type="text"  value={ website }
                onChange={e => setWebSite(e.target.value)} placeholder= "Digite um site válido com http ou https"  /> 
              </div>
              <div className="mandatory-data"><input type="text"  value={ allData }
                onChange={e => setAllData(e.target.value)}/></div>
              <div className="button-content">
                <button type="submit" value= "Submit">Salvar</button>         
              </div>
              <div className="input-sucess"><input type="text"  value={ sucess }
                onChange={e => setSucess(e.target.value)}/></div>
              <div className="input-error"><input type="text"  value={ error }
                onChange={e => setError(e.target.value)}/></div>              
            </form> 
          </div>          
        </div>
      </div>
      
    )

}
 export default DetailsUser
