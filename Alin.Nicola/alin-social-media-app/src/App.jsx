import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AuthPage from './pages/auth/AuthPage'
import NotFound from './pages/NotFound'
import MyProfile from './pages/profile/MyProfile'
import Layout from './components/Layout'

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/my-profile' element={<MyProfile></MyProfile>}/>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
