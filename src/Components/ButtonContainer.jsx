import {connect} from "react-redux";
import Button from "./Button";
import {getStatus, setStatus, updateStatus} from "../Redux/Button-reducer";
import React from 'react';

const mapStateToProps = (state) => {
    return {
        isActive: state.button.isActive
    }
}

class ButtonContainer extends React.Component {
    onButtonClick = () => {
        this.props.updateStatus(!this.props.isActive);
        this.props.setStatus(
            this.props.getStatus()
        )
    }

    render() {
        return <Button {...this.props} onButtonClick={this.onButtonClick}/>;
    }
}

export default connect(mapStateToProps, {setStatus, updateStatus, getStatus})(ButtonContainer)

