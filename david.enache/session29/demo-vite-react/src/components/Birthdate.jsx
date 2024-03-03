import PropTypes from 'prop-types'

function Birthdate({ birthdate, loggerHandler }) {
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    console.log(age)

    const doSomethingInParrent = () => {
        loggerHandler()
    }
    return (
        <div className='birthday-box'>
            <p>Birthday: {birthdate.toLocaleDateString()}</p>
            <p>Age: {age}</p>
            <button onClick={doSomethingInParrent}>Do something</button>
        </div>
    )
}

Birthdate.propTypes = {
    birthdate: PropTypes.instanceOf(Date),
    loggerHandler: PropTypes.func
}

export default Birthdate