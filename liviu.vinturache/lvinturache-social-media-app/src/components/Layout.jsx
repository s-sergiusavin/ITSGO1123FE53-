import PropTypes from 'prop-types';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;