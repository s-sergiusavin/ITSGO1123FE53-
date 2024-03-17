import PropTypes from 'prop-types';


const LeftNavElement = ({ icon, name }) => {
    return (
        <div>
            <span>icon</span>
            <span>{name}</span>
        </div>

    )
}

LeftNavElement.propTypes = {
    // icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired
}

export default LeftNavElement;