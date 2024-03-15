import { NavLink, Route, Routes } from 'react-router-dom';
import './App.module.scss';
import Login from './logic/Login';
import MyProfile from './logic/MyProfile';
import Home from './logic/Home';
import NotFound from './logic/NotFound';
import PropTypes from 'prop-types';

function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={'/login'}>Login page</NavLink>
            </li>
            <li>
              <NavLink to={'./home'}>Home page</NavLink>
            </li>
            <li>
              <NavLink to={'./my-profile'}>My profile</NavLink>
            </li>
          </ul>
        </nav>
      </header>

        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/my-profile' element={<MyProfile/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </>
  )
}

export default App
