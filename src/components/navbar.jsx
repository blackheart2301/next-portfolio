import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
            <Image src='/images/logo-nav.png' className="logo-img" width={40} height={40} alt="Sawan's personal logo" />
                <Link href="/">
                    Sawan Kumar &nbsp; <span >| &nbsp; Full Stack MERN Developer</span>
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/e/2PACX-1vSulHQB5zOt3xdedT86n9ffByf9tjogcm2rfZxNKp6kiBCI8KjjHZa94kip6-bJp6FMJGJ104g_Gl4-/pub" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;