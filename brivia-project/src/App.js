import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailsUserPage from './pages/DetailsUserPage';
import Home from './pages/Home'
import UsersListPage from './pages/UsersListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= { <Home/>}  />
        <Route path='/userslist' element= { <UsersListPage/> } />
        <Route path='/detailsuser/:id' element= { <DetailsUserPage/> } />
      </Routes>        
    </Router>
  );
}

export default App;


