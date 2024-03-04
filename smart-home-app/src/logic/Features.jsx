import FeaturesForm from "./FeaturesForm";
import Feature from "./Feature";
import { useState } from "react";
import PropTypes from 'prop-types';

const Features = ({ toggleAction }) => {

    const FEATURES = [
        {
            name: 'Toggle Lights',
            action: 'Turn the lights on',
            state: false,
            id: 0
        },
        {
            name: 'Toggle AC',
            action: 'Turn the AC on',
            state: false,
            id: 1
        },
        {
            name: 'Clean',
            action: 'Start Cleaning',
            state: false,
            id: 2
        },
        {
            name: 'Coffee Time',
            action: 'Make a coffee',
            state: false,
            id: 3
        }
    ]

    const [features, setFeatures] = useState(FEATURES)

    const toggleTheAction = (value) => {
        toggleAction(value)
    }

    const updateFeatures = (newFeature) => {
        setFeatures(prevState => {
            return [
                ...prevState,
                newFeature
            ]
        })
    }

    return (
        <div className="container">
            <div className="features">
                {features.map((feature) => {
                    return (
                        <Feature
                            name={feature.name}
                            action={feature.action}
                            key={feature.id}
                            toggleAction={toggleTheAction} />
                    )
                })}
            </div>
            <FeaturesForm updateTheFeatures={updateFeatures} currentItems={features.length}/>
        </div>
    )
}

Features.propTypes = {
    toggleAction: PropTypes.func.isRequired
}

export default Features;