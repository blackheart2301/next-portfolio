import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                           
                            <div className="small-icons">Source
                                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3><br/>
                        <p>{project.description}</p>
                        <button className='cta-btn'>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer"></a> Go Live
                            </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;