import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring, presets } from "react-motion";


export default class Projects extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div>
                <div className="project-column">
                <Card text={"Connected Coaching"} first={true} src={"./images/connectedcoaching.png"} href="https://devpost.com/software/connected-coaching"></Card>
                <Card text="Friendly Reminders" first={false} src={"./images/friendlyreminders.png"} href="https://devpost.com/software/friendly-reminder-i12fd7"></Card>
                <Card text="Sudoku Solver" first={false} src={"./images/sudoku.png"} href="./projects/Sudoku.zip"></Card>
                </div>
                
                <div className="project-column">
                <Card text="Sonate Pathetique" first={true} src={"./images/pathetique.png"} href="https://youtu.be/zltBrEg72Ng"></Card>
                <Card text="Song Without Words" first={false} src={"./images/songswithoutwords.png"} href="https://www.youtube.com/watch?v=3WeVTxZj_ss"></Card>
                <Card text="Resume" first={false} src={"./images/resume.png"} href="./projects/resume.pdf"></Card>

                </div>
            </div>

        )
    }
}
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {hovered:false}
    }
    render(){
        return(
            <Motion style={{
                width: spring(this.state.hovered ? 27.5 : 25, presets.gentle),
                margin: spring(this.state.hovered ? 0 : 1.25, presets.gentle),
                opacity: spring(this.state.hovered ? 1 : 0, presets.gentle),
                blur: spring(this.state.hovered ? .8 : 1, presets.gentle),


            }}>
                {interpolatedStyles => 
                <a className="cardContainer" id={this.props.first ? 'firstInRow' : 'notFirstInRow'} href={this.props.href} target="_blank" onMouseEnter={()=>this.setState({hovered:true})} onMouseLeave={()=>this.setState({hovered:false})} style={{
                    margin: `${interpolatedStyles.margin}vw`,
                    marginLeft: this.props.first ? `${interpolatedStyles.margin+8.75}vw` : `${interpolatedStyles.margin}vw`,
                    width: `${interpolatedStyles.width}vw`,
                    height: `${interpolatedStyles.width}vw`
                }}>
                    <div className="projectImagesDiv" style={{opacity: `interpolatedStyles.opacity`}}>
                        <img src={this.props.src} className="projectImages" style={{
                            opacity: `${interpolatedStyles.blur}`
                        }}/>
                    </div>
                    <div id="projectTextDiv">
                        <h1 className="projectText" style={{
                        opacity: `${interpolatedStyles.opacity}`,
                        width: `${interpolatedStyles.width}vw`,

                    }}>{this.props.text}</h1>
                    </div>
                </a>
                }
                
            </Motion>
        )
    }
    
}