import { useState } from 'react';
import './App.scss'
import Features from './logic/Features'
import Light from './ui/Light'
import Room from './ui/Room';

function App() {

  let [lightState, setLighState] = useState(false);

  const toggleTheAction = (action) => {
    if(action === 'Toogle Lights') {
      setLighState( (prevState) => {
        return !prevState
      })
    }
  }

  return (
    <div>
      <div className='ui-features'>
        <Light lightsOn={lightState}/>
        <Room status={0.7}/>
      </div>
      <Features toggleAction={toggleTheAction}/>
    </div>
  )
}

export default App
