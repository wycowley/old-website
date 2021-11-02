import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring, presets } from "react-motion";


export default class Slideshow extends React.Component {
    constructor(props){
        super(props)
        this.state = {stage:0, change1:false, change2:false, change3:false, initial:0}
    }
    render(){
        var array = ["./images/wyattPic.jpg","./images/familyHonduras.jpg","./images/wildflowers.jpg"]

        return(
            <Motion style={{
                raiseValue1: spring(this.state.change1 ? 0:100, {stiffness:15, damping:7.5}),
                raiseValue2: spring(this.state.change2 ? 0:100, {stiffness:15, damping:7.5}),
                raiseValue3: spring(this.state.change3 ? 0:100, {stiffness:15, damping:7.5})

            }}>
                {interpolatedStyles =>
                <div id="full-height full-width">
                    <img  src={array[(2)%3]} rel="preload" style=
                    {{height: `${interpolatedStyles.raiseValue1}%`, zIndex: `${(this.state.stage+3)%3*this.state.initial}`}}
                    className = {" full-width full-height openerSlide "}
                    />
                    <img  src={array[(3)%3]} rel="preload" style=
                        {{height: `${interpolatedStyles.raiseValue2}%`, zIndex: `${(this.state.stage+1)%3}`}}
                        className = {" full-width full-height openerSlide "}
                    />
                    <img  src={array[(1)%3]} rel="preload" style=
                        {{height: `${interpolatedStyles.raiseValue3}%`, zIndex: `${(this.state.stage+2)%3*this.state.initial}`}}
                        className = {" full-width full-height openerSlide "}
                    />
                    <div id = {"titleContainer"}>
                        <h1 id = {"nameTitle"}>Wyatt Cowley <a id={"lowerArrow"} href={"#aboutMe"}><img src="./images/chevron.png" className = {"arrowThing"}></img></a></h1>
                    </div>
                </div>
                }
                
            </Motion>

        )
    }
    switch(){
        if((this.state.stage)%3==0){
            this.setState({
                stage: (this.state.stage+1),
                change3: false,
                change2: true,
                initial:1
            })
        }
        else if((this.state.stage+1)%3==0){
            this.setState({
                stage: (this.state.stage+1),
                change1: false,
                change3: true,
                initial:1

            })
        }
        else{
            this.setState({
                stage: (this.state.stage+1),
                change2: false,
                change1: true,
                initial:1
            })
        }
        console.log("initial "+this.state.initial)

        
        // this.setState({
        //     change: !this.state.change
        // })
    }
    componentDidMount() {
        console.log("initial "+this.state.initial)
        setTimeout(()=>{
            console.log("initial "+this.state.initial)

            this.intervalClearer = setInterval(() => this.switch(),6000)

        }, 4000)
    }
    // called when destroyed
    componentWillUnmount() {
        clearInterval(this.intervalClearer)
    }
}
class FancyImg extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <img className = {" full-width full-height openerSlide "} src={this.props.src}></img>
        )
    }
}