import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props) 
        this.showMenu = this.showMenu.bind(this);
        this.state = {stage:"hideSelector"};

    }
    render() {
        return(
            <div id="titleBar">
                <button id="menuIcon" onClick={this.showMenu}>
                    <div>
                        <img src="./images/menu.png" className="standard-img"></img>
                    </div>
                </button>
                <div id="titleLogo">
                    <img src="./images/main_logo.gif" className="standard-img"></img>
                </div>
                <div>
                    <a href="#home"><h2 className={"bars "+this.state.stage} id="bar1">Wyatt Cowley</h2></a>
                    <a href="#aboutMe"><h2 className={"bars "+this.state.stage} id="bar2">About</h2></a>
                    <a href="#Projects"><h2 className={"bars "+this.state.stage} id="bar3">Projects</h2></a>
                    <a href="#contact"><h2 className={"bars "+this.state.stage} id="bar4">Contact</h2></a>
        
                </div>
            </div>
        )
    }
    showMenu(){
        console.log()
        if(this.state.stage=="hideSelector"){
            this.setState({
                stage: "showSelector"
            })
        }else{
            this.setState({
                stage: "hideSelector"
            })
        }


    }
}