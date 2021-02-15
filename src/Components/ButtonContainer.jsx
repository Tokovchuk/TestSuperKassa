import {connect} from "react-redux";
import Button from "./Button";
import {toggleButton} from "../Redux/Button-reducer";

const mapStateToProps = (state) => {
    return {
        isActive: state.button.isActive
    }
}

const ButtonContainer = connect(mapStateToProps, {toggleButton})(Button)

export default ButtonContainer