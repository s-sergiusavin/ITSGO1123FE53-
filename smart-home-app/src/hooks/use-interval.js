import { useEffect, useRef, useState } from "react";

const useInterval = (interval, initialDirtProgress) => {
    const [actions, setActions] = useState({
        dirtProgress: initialDirtProgress,
        cleaned: 0
    }) 

    const dirtInterval = useRef()
   
    useEffect(() => {
        dirtInterval.current  = setInterval{() => {
            setActions(prevState =>)
        }}
    }, actions.cleaned)

    const resetCleaningStatus = () => {
        setActions(prevState => {
            return {
                ...prevState,
                dirtProgress: initialDirtProgress,
                cleaned: prevState.cleaned + 1
            }
        })
    }

    return [actions, resetCleaningStatus]

}

export default useInterval;