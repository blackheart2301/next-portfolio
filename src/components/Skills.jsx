import Image from 'next/image'

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                <i className="fa-brands fa-react react-icon"></i>
                <p>ReactJs</p>
            </div>
                 
                <div className="skill-card node">
                    <i className="fa-brands fa-node-js node-icon"></i>
                    <p>NodeJs</p>
                </div>
                <div className="skill-card express">
                    <Image src="/images/express-icon.png" width={20} height={20} alt="ExpressJs"/>
                    <p>Express</p>
                </div>
                <div className="skill-card next">
                    <Image src="/images/nextjs-icon.png" width={25} height={25} alt="NextJs"/>
                    <p>NextJs</p>
                </div>
                <div className="skill-card mongodb">
                    <Image src="/images/mongodb-icon.png" width={20} height={20} alt="Mongodb"/>
                    <p>MongoDb</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;  