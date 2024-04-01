import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
            <Image src='/images/logo-nav.png' className="logo-img" width={40} height={40} alt="Sawan's personal logo" />
                <Link href="/">
                    Sawan Kumar &nbsp; | &nbsp; Full Stack (MERN) Developer
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/10ZosQ38Z3804KYPcb_aZp9bceoXK-q3GrkHjYshqIRE/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;