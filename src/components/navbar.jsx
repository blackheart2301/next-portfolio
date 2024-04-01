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
            <a href="" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;