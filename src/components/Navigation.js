import React from 'react';
import { Link } from 'react-scroll'


class Navigation extends React.Component {
    state = {
        isOpened: false
    }

    toggleMenu = () => {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render () {
        return (
            <React.Fragment>
                <a className="menu-toggle rounded" onClick={ this.toggleMenu } href="#smth">
                    <i className={ this.state.isOpened ? 'fas fa-times' : 'fas fa-bars'}></i>
                </a>

                <nav id="sidebar-wrapper" className={ this.state.isOpened ? 'active' : ''}>
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                    <a className="js-scroll-trigger" href="#smth">Start Bootstrap</a>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link 
                        activeClass="active" 
                        className="nav-link" 
                        onClick={ this.toggleMenu }
                        to="home" 
                        spy={true} smooth={true} duration={500} >
                            Главная</Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link 
                        activeClass="active" 
                        className="nav-link" 
                        onClick={ this.toggleMenu }
                        to="products-section" 
                        spy={true} smooth={true} duration={500} >
                            Каталог Продукции</Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link 
                        activeClass="active" 
                        className="nav-link"
                        onClick={ this.toggleMenu }
                        to="section-pagoni" 
                        spy={true} smooth={true} duration={500} >
                            Эксклюзивные Погоны</Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link 
                        activeClass="active" 
                        className="nav-link" 
                        onClick={ this.toggleMenu }
                        to="golden-sewing" 
                        spy={true} smooth={true} duration={500} >
                            Золотое Шитьё</Link>
                    </li>
                </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;