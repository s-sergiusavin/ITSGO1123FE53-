import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import MyProfile from './pages/profile/MyProfile'
import Layout from './components/Layout'
import FriendsPage from './pages/startingPage/leftside/FriendsPage'; // Asigură-te că este calea corectă către fișierele FriendsPage și SettingsPage
// import SettingsPage from './pages/startingPage/leftside/SettingsPage';
import SettingsPage from './pages/startingPage/leftside/SettingsPage'; // Asigură-te că este calea corectă către fișierele FriendsPage și SettingsPage






function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          {/* <Route path='/profile/:id' element={<ProfilePage></ProfilePage>} /> */}
          {/* <Route path='/my-profile' element={<ProfilePage></ProfilePage>} */}
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          {/* <Route path='/profile/:id' element={<ProfilePage />} /> */}
          <Route path='/friends' element={<FriendsPage />} /> {/* Adaugă ruta pentru FriendsPage */}
          <Route path='/settings' element={<SettingsPage />} /> {/* Adaugă ruta pentru SettingsPage */}
          <Route path='*' element={<NotFound />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
