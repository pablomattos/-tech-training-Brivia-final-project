import React from 'react'
import HeaderContent from '../components/HeaderContent'
import DetailsUser from '../components/DetailsUser'
import FooterContent from '../components/FooterContent'

const DetailsUserPage = () => {
  return (
    <div>
        <HeaderContent rota='/' page='HOME'></HeaderContent>
        <DetailsUser rota='/userslist' page='USUÁRIOS'></DetailsUser>
        <FooterContent></FooterContent>
    </div>
  )
}

export default DetailsUserPage