import React from 'react'
import '../styles/app/app.css'
import HeaderContent from '../components/HeaderContent'
import UsersList from '../components/UsersList'
import FooterContent from '../components/FooterContent'

const UsersListPage = () => {
  return (
        <div>
            <HeaderContent rota='/' page='HOME'></HeaderContent>
            <UsersList ></UsersList>
            <FooterContent></FooterContent>
        </div>  
  )
}

export default UsersListPage