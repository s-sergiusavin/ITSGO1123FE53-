import { useEffect, useRef, useState } from 'react';
import './App.scss'
import Features from './logic/Features'
import Light from './ui/Light'
import Room from './ui/Room';
import AC from './ui/AC';

function App() {

  /** Good example: State separat in functie de functionalitate */
  const [lightState, setLighState] = useState(false);
  const [acState, setAcState] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0
  })

  /** Bad example: Nu folositi un obiect de state pt variabile care nu au legatura */
  // const [actions, setActions] = useState( {
  //   lightsState: false,
  //   acState: false,
  //   dirtStatus: 0,
  //   cleaned: 0
  // })

  /** Use effect model */
  // useEffect(() => {
  //   console.log('Effect triggered')

  //   return () => {
  //     console.log('Component Unmount')
  //   }
  // }, [lightState])
  let dirtInterval = useRef();

  useEffect( () => {
    dirtInterval.current = setInterval( () => {
      setDirtProgress(prevState => {
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current);
        }
        return {
          ...prevState,
          status: prevState.status + 0.1
        }
      })
    }, 2000)
    return () => {
      console.log('Before effect')
      clearInterval(dirtInterval.current)
    }
  }, [dirtProgress.cleaned])

  const toggleLights = () => {
    setLighState((prevState) => {
      return !prevState
    })
  }

  const toggleAc = () => {
    setAcState(prevState => {
      return !prevState;
    })
  }

  const startCleaning = () => {
    setDirtProgress(prevState => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1
      }
    })
  }

  const toggleActionHandler = (name) => {
    switch (name) {
      case "Toggle Lights":
        toggleLights()
        break;
      case "Toggle AC":
        toggleAc();
        break
      case "Clean":
        startCleaning();
        break
    }

  }

  return (
    <div>
      <div className='ui-features'>
        <Light lightsOn={lightState} />
        <Room status={dirtProgress.status} />
        <AC acOn={acState} />
      </div>
      <Features toggleAction={toggleActionHandler} />
    </div>
  )
}

export default App
