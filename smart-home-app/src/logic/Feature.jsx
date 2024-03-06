import './Feature.scss';
import PropTypes from 'prop-types';
import buttonIcon from './assets/images/lights-icon.png'
import buttonIconOff from './assets/images/lights-icon-off.png'
import { useEffect, useState } from 'react';

const Feature = ({name, action, toggleAction, state}) => {

    const [icon, setIcon] = useState('')

    const featureButtonHandler = () => {
        toggleAction(name)
    }

    useEffect( () => {
       state ? setIcon(buttonIcon) : setIcon(buttonIconOff)
    }, [state])

    return (
        <div className="feature">
            <img src={icon} alt="" className='buttonImg'/>
            <h3>{name}</h3>
            <button onClick={featureButtonHandler}>{action}</button>
        </div>
    )
}

Feature.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    toggleAction: PropTypes.func.isRequired,
    state: PropTypes.bool
}

export default Feature;