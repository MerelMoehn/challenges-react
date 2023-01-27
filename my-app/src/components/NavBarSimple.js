import React from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Guest",
            buttonText: "Log-in",
        }
    }

    handleClick(){
        this.setState({
            message: this.state.message === "Hello Guest" ? "Welcome back, user!" : "Hello Guest",
            buttonText: this.state.buttonText === "Log-in" ? "Log-out" : "Log-in"
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
            <div>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
            </div>
        )
    }

}

export default NavBarSimple