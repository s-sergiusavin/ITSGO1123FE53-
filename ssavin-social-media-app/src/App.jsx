import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/profile/ProfilePage'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/profile/:id' element={<ProfilePage></ProfilePage>}/>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
