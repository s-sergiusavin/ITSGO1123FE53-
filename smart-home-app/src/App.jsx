import { useState } from 'react';
import './App.scss'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Wellcome from './logic/Wellcome';
import SmartHome from './logic/SmartHome';
import FeaturesForm from './logic/FeaturesForm'
import NotFound from './logic/NotFound';
import HomeIcon from '@mui/icons-material/Home';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

function App() {

  const [feature, setFeature] = useState({
    name: '',
    action: '',
    state: false,
    id: 0
  })
  const updateFeatures = (newFeature) => {
    setFeature(newFeature)
  }

const testLocalStorage = 'Acest text va aparea in local storage'
const testSessionStorage = 'acest text va aparea in session storage'

  const setStorage = () => {
    localStorage.setItem('localStorageTest', testLocalStorage)
    localStorage.setItem('localStorageTest2', 'testLocalStorage')
    sessionStorage.setItem('setSessionStorage', testSessionStorage)
    sessionStorage.setItem('setSessionStorage2', 'testSessionStorage')
  }

  const removeStorage = () => {
    localStorage.clear(),
    sessionStorage.clear()

  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <HomeIcon/>
              <Link to={'/wellcome'}>Wellcome page</Link>
            </li>
            <li>
              <DevicesOtherIcon></DevicesOtherIcon>
              <NavLink to={'/smart-home'}>Use smart home app</NavLink>
            </li>
            <li>
              <AddToQueueIcon/>
              <NavLink to='/features-form'> Create new smart home features</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <button onClick={setStorage}>Set storage</button>
      <button onClick={removeStorage}>Remove storage</button>

      <div className='lights yellow'></div>

      <Routes>
        <Route path='/' element={<SmartHome newFeature={feature}/>}></Route>
        <Route path='/wellcome' element={<Wellcome />}></Route>
        <Route path='/smart-home' element={<SmartHome newFeature={feature} />}></Route>
        <Route path='/features-form' element={<FeaturesForm updateTheFeatures={updateFeatures} />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
