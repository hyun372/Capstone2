import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function NavBar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            title
        </Link>
        <ul>
            <CustomLink to="/chunithm">Chunithm</CustomLink>
            <CustomLink to="/maimaidx">MaimaiDX</CustomLink>
            <CustomLink to="/soundvol">SoundVol</CustomLink>
            <CustomLink to="/soundvolval">SoundVolVal</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}