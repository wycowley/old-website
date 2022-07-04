import Triangle from "../components/Triangle";
import IndProject from "../components/IndProject";
import "./Projects.css";
import { useEffect, useState } from "react";

import { MdOutlinePiano } from "react-icons/md";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { BsGrid3X3 } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
const Projects = (props) => {
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        let tempData = [];
        tempData.push({
            name: "Music Portfolio",
            description: "I created this portfolio to showcase my piano progression over the years.  I used Vue and the Youtube iFrame API to build it.",
            img: <MdOutlinePiano />,
            link: "https://www.wyattcowley.com/music/",
            expanded: false,
        });
        tempData.push({
            name: "Template Manager",
            description: "Create, Edit, Monitor, and Share code templates - all at the touch of a button!  Created for MVHacks 4.5 and won 3rd best overall hack.",
            img: <MdOutlineDriveFolderUpload />,
            link: "https://www.wyattcowley.com/template-manager/#/dashboard",
            expanded: false,
        });

        tempData.push({
            name: "Phrase Repository",
            description: "Created for the Supabase Hackathon with a friend.  Designed to be a place to share pickup lines, roasts, or compliments.  Not currently functional.",
            img: <FaFireAlt />,
            link: "https://github.com/PhraseRepository/WordRepository",
            expanded: false,
        });

        tempData.push({
            name: "Sudoku Solver",
            description: "Created in 10th grade with Java.  Solves sudokus and allows for easy input of new puzzles.",
            img: <BsGrid3X3 />,
            link: "https://github.com/wycowley/SudokuSolver",
            expanded: false,
        });

        tempData.push({
            name: "Resume",
            description: "My potentially outdated Resume, where you can find some more of my accomplishments.",
            img: <IoNewspaperOutline />,
            link: "resume.pdf",
            expanded: false,
        });
        setProjectData(tempData);
    }, []);
    const collapseOthers = (name) => {
        let tempData = projectData;
        console.log("Being called");
        tempData.forEach((project) => {
            if (project.name !== name) {
                console.log("Collapsing " + project.name);
                project.expanded = false;
            } else {
                project.expanded = true;
            }
        });
        setProjectData([...tempData]);
    };
    return (
        <div className='complete-project-container'>
            <Triangle className='triangle-to-projects'></Triangle>
            <div className='project-title-container'>
                <h1>PROJECTS</h1>
            </div>
            <div className='project-containers'>
                {projectData.map((data) => {
                    return <IndProject name={data.name} description={data.description} img={data.img} link={data.link} key={data.name} setExpanded={collapseOthers} expanded={data.expanded}></IndProject>;
                })}
            </div>
            <p style={{ textAlign: "center" }}>More to come soon!</p>
        </div>
    );
};

export default Projects;
