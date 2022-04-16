import Triangle from "../components/Triangle";
import IndProject from "../components/IndProject";
import "./Projects.css";

const Projects = (props) => {
    const projectData = [];
    projectData.push({
        name: "Music Portfolio",
        description: "I created this portfolio to showcase my piano progression over the years.  I used Vue and the Youtube iFrame API to build it.",
        src: "piano.svg",
        link: "https://www.wyattcowley.com/music/",
    });
    projectData.push({
        name: "Template Manager",
        description: "Create, Edit, Monitor, and Share code templates - all at the touch of a button!  Created for MVHacks 4.5 and won 3rd best overall hack.",
        src: "folder.webp",
        link: "https://www.wyattcowley.com/template-manager/#/dashboard",
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
        src: "sudoku.webp",
        link: "https://github.com/wycowley/SudokuSolver",
    });

    projectData.push({
        name: "Resume",
        description: "My potentially outdated Resume, where you can find some more of my accomplishments.",
        src: "resume.webp",
        link: "resume.pdf",
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
            <p style={{ textAlign: "center" }}>More to come soon!</p>
        </div>
    );
};

export default Projects;
