const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Sawan's Portfolio</p>
        <div className="social_icons">
          <a href="mailto: krsawan23@gmail.com">
            <i className="fa-brands fa-gmail"></i>
          </a>
          <a
            href="https://github.com/blackheart2301"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sawankumar2301/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
