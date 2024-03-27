import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/profile/ProfilePage'
import Layout from './components/Layout'
import MyProfile from './pages/profile/MyProfile'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/profile/:id' element={<ProfilePage></ProfilePage>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
