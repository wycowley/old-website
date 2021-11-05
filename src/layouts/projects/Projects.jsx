import Triangle from "../components/Triangle";
import IndProject from "../components/IndProject";
import "./Projects.css";

const Projects = (props) => {
    const projectData = [];
    projectData.push({
        name: "Template Manager",
        description: "Create, Edit, Monitor, and Share code templates - all at the touch of a button!  Created for MVHacks 4.5 and won 3rd best overall hack.",
        src: "folder.png",
        link: "https://www.wyattcowley.com/template-manager/#/dashboard",
    });
    projectData.push({
        name: "Chess Clock",
        description: "Created to learn vue.js, this chess clock was designed to be functional cross platform and aesthetically pleasing.",
        src: "clock.png",
        link: "https://www.wyattcowley.com/chess-clock-vue/",
    });
    projectData.push({
        name: "Phrase Repository",
        description: "Created for the Supabase Hackathon with a friend.  Designed to be a place to share pickup lines, roasts, or compliments.  Not currently functional.",
        src: "flame.svg",
        link: "https://github.com/PhraseRepository/WordRepository",
    });

    projectData.push({
        name: "Sudoku Solver",
        description: "Created in 10th grade with Java.  Solves sudokus and allows for easy input of new puzzles.",
        src: "sudoku.png",
        link: "https://github.com/wycowley/SudokuSolver",
    });
    projectData.push({
        name: "Songs without Words",
        description: "Songs without Words Op.67 No.2, composed by Mendelssohn.  Performed and recorded for a virtual recital.",
        src: "piano.svg",
        link: "https://youtu.be/3WeVTxZj_ss",
    });
    projectData.push({
        name: "Sonate Pathetique",
        description: "Sonate Pathetique Mvmt. 1.  Written by Beethovan, this is one of the most recognizable Beethovan Sonatas.  Performed live at a recital.",
        src: "piano.svg",
        link: "https://youtu.be/zltBrEg72Ng",
    });
    projectData.push({
        name: "Resume",
        description: "My Resume, where you can find some more of my accomplishments.",
        src: "resume.png",
        link: "./projects/resume.pdf",
    });

    return (
        <div className='complete-project-container'>
            <Triangle className='triangle-to-projects'></Triangle>
            <div className='project-title-container'>
                <h1>PROJECTS</h1>
            </div>
            <div className='project-containers'>
                {projectData.map((data) => {
                    return <IndProject name={data.name} description={data.description} src={data.src} link={data.link}></IndProject>;
                })}
            </div>
        </div>
    );
};

export default Projects;
