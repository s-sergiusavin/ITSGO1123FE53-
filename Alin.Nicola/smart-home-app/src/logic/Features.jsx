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

            {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action}/>
            <Feature name={FEATURES[1].name} action={FEATURES[1].action}/>
            <Feature name={FEATURES[2].name} action={FEATURES[2].action}/>
            <Feature name={FEATURES[3].name} action={FEATURES[3].action}/> */}
        </div>
    )
}

export default Features;