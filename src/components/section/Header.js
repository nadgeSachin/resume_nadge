import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import "../../styles/no-touch.min.css"
import 'font-awesome/css/font-awesome.min.css'; 
import { Link } from 'react-scroll';
import DigitalWatch from './DigitalWatch';
const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div className="Header">
            <DigitalWatch/>
                <h1>{  `${header.name}` }</h1>
            <p className="line-1 anim-typewriter">Programmer|Web Developer..</p>
            <a className="down" href="#about" data-scroll>
            <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                spy={true}
                activeClass="active"
            >
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
            </Link>
            </a>
            </div>
            
        </div>
    )
    
}

export default Header;