import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/AuthPage'
import HomePage from './pages/home/HomePage'
import NotFound from './pages/NotFound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}</Route>
        <Route path='home' element={<AuthPage />}</Route>
      <Route path='error' element={<NotFound />}</Route >
        </Routes >
      </Layout >

    </>
  )
}

export default App
