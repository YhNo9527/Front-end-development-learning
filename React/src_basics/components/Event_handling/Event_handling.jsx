import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};

        // 为了在回调函数中使用this, 这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick= {this.handleClick}>
                {this.state.isToggleOn ? 'on' : 'off'}
            </button>
        );
    }
}

export default Toggle;