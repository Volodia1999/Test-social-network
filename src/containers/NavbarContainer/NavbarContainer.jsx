import {NavbarProfile} from "../../components/NavbarProfile/NavbarProfile";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        sidebar: state.sidebar,
    }
);

/*const mapDispatchToProps = () => {
    return {};
};*/

const NavbarProfileContainer = connect(mapStateToProps, {})(NavbarProfile);

export default NavbarProfileContainer;
