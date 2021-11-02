import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring, presets } from "react-motion";


export default class Info extends React.Component {
    constructor(props){
        super(props)
        this.state = {stage:0, change1:true, change2:false, change3:true, initial: 0, shiftAmount:50};
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.handleResize = this.handleResize.bind(this);

    }
    nextSlide(){
        console.log(this.state.stage)
        if((this.state.stage)%3==0){
            this.setState({
                stage: (this.state.stage+1),
                change1: false,
                change2: true,
                initial:1
            })
        }
        else if((this.state.stage+1)%3==0){
            this.setState({
                stage: (this.state.stage+1),
                change2: false,
                change3: true,
                initial:1

            })
        }
        else{
            this.setState({
                stage: (this.state.stage+1),
                change3: false,
                change1: true,
                initial:1
            })
        }
    }
    previousSlide(){
        console.log(this.state.stage)
        if((this.state.stage)%3==0){
            this.setState({
                stage: (this.state.stage),
                change3: false,
                change2: true,
                initial:1
            })
        }
        else if((this.state.stage+1)%3==0){
            this.setState({
                stage: (this.state.stage),
                change1: false,
                change3: true,
                initial:1

            })
        }
        else{
            this.setState({
                stage: (this.state.stage),
                change2: false,
                change1: true,
                initial:1
            })
        }
    }
    componentDidMount(){
        window.addEventListener('resize', this.handleResize)

        
    }
    handleResize(){
        console.log("width changed")
        if(window.innerWidth<600){
            this.setState({
                shiftAmount:100
            })
        }
    }
    render(){
        var type = this.props.type
        return(
        <div style={{backgroundColor: "rgb(246,246,246)", overflow: "auto"}}>

            <div className={"half-width half-height "+this.props.side} id={"welcomeTextDiv"}>
                <FancyText type={type} />
            </div>
            <Motion style={{
                    raiseValue1: spring(this.state.change1 ? 0:-this.state.shiftAmount, {stiffness:25, damping:7.5}),
                    raiseValue2: spring(this.state.change2 ? 0:-this.state.shiftAmount, {stiffness:25, damping:7.5}),
                    raiseValue3: spring(this.state.change3 ? 0:-this.state.shiftAmount, {stiffness:25, damping:7.5})
                }}>
                    {interpolatedStyles =>

            <div className={"half-width half-height "+this.props.side}>
                    <div>
                        <img src={"./images/"+type+"1.jpg"} className="full-container fancy-slideshow-img margin" style=
                        {{left: `${interpolatedStyles.raiseValue1}vw`, zIndex: `${(this.state.stage+1)%3}`}}/>
                        <img src={"./images/"+type+"2.jpg"} className="full-container fancy-slideshow-img margin" style=
                        {{left: `${interpolatedStyles.raiseValue2}vw`, zIndex: `${(this.state.stage+2)%3*this.state.initial}`, top: `-50vh`}}/>
                        <img src={"./images/"+type+"3.jpg"} rel="preload" className="full-container fancy-slideshow-img margin" style=
                        {{left: `${interpolatedStyles.raiseValue3}vw`, zIndex: `${(this.state.stage+3)%3*this.state.initial}`, top: `-100vh`}}/>
                    </div>
                <button onClick={this.nextSlide} className={"slideButton"} id={"button1"}><img src={"./images/chevron.png"} className={"full-container"}></img></button>
                <button onClick={this.nextSlide} className={"slideButton"} id={"button2"}><img src={"./images/chevron.png"} className={"full-container"}></img></button>

            </div>
            }
            </Motion>
        </div>)
    }
}
class FancyText extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.type == "welcome"){
            return(
                <p id="welcomeText">
                    My name is Wyatt Cowley.  I am a sophomore in high school.  In this website, you can find information about me, some of the projects I have done, and a way to contact me.<br/><br/>I have two siblings, <a href="https://www.cyruscowley.com" target="_blank">Cyrus</a> and <a href="https://www.tessacowley.com" target="_blank">Tessa</a>, my dog Kody, and my parents in my family.
                </p>

            )
        }else if(this.props.type == "hobby"){
            return(
                <p id={"welcomeText"}>
                    Some of my hobbies include wakeboarding, reading, and playing with my dog.<br/><br/>My favorite activities are always some sort of adventure - like rowing a Venetian rowboat or climbing Mount Shasta.
                </p>
            )
        }
        return(
            <p id={"welcomeText"}>
                At my school I play Water Polo and Swimming. This year I was the captain of the JV Water Polo team. <br /><br /> I work at Peery Piano Academy as one of their Lead Guides.  I have played piano for 9 years and have performed pieces such as Sonate Pathetique and Aufschwung. <br /><br /> I am an Eagle Scout and a member of the Church of Jesus Christ of Latter Day Saints.
            </p>
        )
    }
}
class FancyImg extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <img className = {" full-container fancy-slideshow-img margin"+this.props.num+" "+this.props.slideStage} src={this.props.src}></img>
        )
    }
}