

export default function Navbar() {

    return (
        <>
            <div className='container'>
                <nav className="navbar oswald-font text-uppercase">
                    <ul>
                        <li><a href="#header" className='text-base'>Home</a></li>
                        <li><a href="#about" className='text-base'>About</a></li>
                        <li><a href="#services" className='text-base'>Services</a></li>
                        <li><a href="#contact" className='text-base'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}