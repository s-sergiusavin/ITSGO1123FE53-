import { useEffect, useRef, useState } from "react";
import AC from "../ui/AC";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";
import PropType from 'prop-types'

const SmartHome = ({ newFeature }) => {

    const [lightState, setLighState] = useState(false);
    const [acState, setAcState] = useState(false);
    const [dirtProgress, setDirtProgress] = useState({
        status: 0,
        cleaned: 0
    })

    let dirtInterval = useRef();

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
        }, 2000)
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
                <Room status={dirtProgress.status} />
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