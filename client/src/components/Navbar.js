import logo from '../public/images/logo.png';


export default function Navbar(){
    return <nav className="nav">
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        {/* add logo in the middle */}
        <img src={logo} className="App-logo" alt="logo" />

        <a href="/contact">Contact</a>
        <a href="/Menu">Menu</a>
    </nav>
}