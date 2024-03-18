import './DemoComponent.scss'

function DemoComponent({ name }) {
    console.log(props)
    return (
        <div className="demo-component">
            <h2>{name}</h2>
            <p>BirthDate: {birthDay.toLocalDateString()}</p>
        </div>
    )
}

export default DemoComponent