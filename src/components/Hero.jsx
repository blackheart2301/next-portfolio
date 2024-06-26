import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile_nav.jpeg' className="profile-img" width={300} height={300} alt="Sawan's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Sawan Kumar 👋</h1>
                <p>
                    I'm a web developer based in Gurugram, India. I specialize in building and designing exceptional websites, web applications, and everything in between.
                </p>
                <div className="social-icons">
                    
                    <a
                        href="https://github.com/blackheart2301"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sawan-kumar2301/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;