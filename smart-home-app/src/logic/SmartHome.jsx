import { useEffect, useRef, useState } from "react";
import AC from "../ui/AC";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";
import PropType from 'prop-types'
import useInterval from "../hooks/use-interval";

const SmartHome = ({ newFeature }) => {

    const [lightState, setLighState] = useState(false);
    const [acState, setAcState] = useState(false);
    const [roomActions, setRoomActions] = useInterval(4000, 0)


    const [childRoomActions, setChildRoomActions]= useInterval(2000, 0.3)
  

    let dirtInterval = useRef();
    let childDirtInterval = useRef();

    useEffect(() => {
        dirtInterval.current = setInterval(() => {
            setDirtProgress(prevState => {
                if (prevState.status > 1) {
                    clearInterval(dirtInterval.current);
                }
                return {
                    ...prevState,
                    status: prevState.status + 0.1
                }
            })
        }, 3000)
        return () => {
            clearInterval(dirtInterval.current)
        }
    }, [dirtProgress.cleaned])

    useEffect(() => {
        childDirtInterval.current = setInterval(() => {
            setDirtProgress(prevState => {
                if (prevState.status > 1) {
                    clearInterval(dirtInterval.current);
                }
                return {
                    ...prevState,
                    status: prevStat.status + 0.1
                }
            })   
        }, 1000)
        return () => {
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
        <>
            <div className='ui-features'>
                <Light lightsOn={lightState} />
                <Room status={roomActions.dirtProgress} />
                <Room status={childDirtActions.dirtProgress} />
                <AC acOn={acState} />
            </div>
            <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
        </>
    )
}

SmartHome.propType = {
    newFeature: PropType.object
}

export default SmartHome;