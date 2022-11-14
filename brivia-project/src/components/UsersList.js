import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../api'
import '../styles/userslist/userlist.css'

class UsersList extends Component{

state = {
  usuarios: [],
}

async componentDidMount(){
  const response =  await api.get('');
  this.setState({ usuarios:response.data });
}

  render(){

    const { usuarios } = this.state;
    return(

      <div className="main-users-list-content">
        <div className='user-list-content'>
            <div className="user-list-title">Lista de usuários</div>
	          { console.log(usuarios) }
            { usuarios.map ( usuario => (
                <div key= { usuario.id } className='main-user-list'>
                  <div className='main-edit'>
                    <div className="edit-content">
                        <div className="edit-title">BRET</div>
                        <div className='user-edit'><Link to={ '/detailsuser/'+usuario.id }
                         target= "_blank">Editar</Link></div>
                      </div>
                  </div>
                  <div className="main-users-data">
                      <div className="users-data-content"><div className='user-data'>Nome</div>
                        <div className='value-data'>{ usuario.name }</div>
                      </div>
                      <div className="users-data-content"><div className='user-data'>E-mail</div>
                        <div className='value-data'>{ usuario.email }</div></div>
                  </div>
                </div>                
            ))}
        </div>
      </div>
    )
  }
}

export default UsersList;
