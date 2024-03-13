import FeaturesForm from "./FeaturesForm";
import Feature from "./Feature";

const Features = ({toggleAction}) => {

    const FEATURES = [
        {
            name: 'Toogle Lights',
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
            action: 'Turn the vacuuming on',
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

    const toggleTheAction = (value) => {
        toggleAction(value)
    }

    return (
        <div className="container">
            {FEATURES.map((feature) => {
                return (
                    <Feature
                        name={feature.name}
                        action={feature.action}
                        key={feature.id}
                        toggleAction={toggleTheAction} />
                )
            })}

            <FeaturesForm/>
        </div>
    )
}

export default Features;