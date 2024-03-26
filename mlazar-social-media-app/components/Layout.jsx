import { Navigation } from "@mui/icons-material";
import { PropTypes } from "./Navigation";

const Layout = ({children}) => {
    return (
        <>
        <Navigation/>
        <main>{children}</main>
        </>
        
    )
}

Layout.propTypes={
    children: PropTypes.node
}

export default Layout;