import React from 'react';
import Slider from 'react-animated-slider';
import content from '../slider-content';
import verticalCss from './css/vertical.css';
import { Link } from 'react-scroll';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <Slider 
                        classNames={verticalCss} 
                        direction="vertical"
                        duration={ 5000 } 
                        autoplay={ 1000 }>
                        {content.map((item, index) => (
                            <div
                                key={index}
                                style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover' }}
                            >
                                <div className="center">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    {/* <button>{item.button}</button> */}
                                    <Link 
                                        activeClass="active" 
                                        className="slider-button" 
                                        // onClick={ this.toggleMenu }
                                        to={ item.to } 
                                        spy={true} smooth={true} duration={500} >
                                    {item.button}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;