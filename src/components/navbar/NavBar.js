import { Component } from "react";
import "./navbarStyles.css";
import { MenuItems } from "./MenuItem";

class NavBar extends Component{
    state = {clicked: false}
    handleClick = ()=>{
        this.state({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    {/* create toggle */}
                    <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className="nav-menu">
                    {
                        MenuItems.map((item,index)=>{
                           return(
                                <li key={index}>
                                    <a className={item.cName} href="/"><i className={item.icon}></i>{item.title}</a>
                                </li>
                           )
                        })
                    }
                <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default NavBar 