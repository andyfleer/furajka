import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Thumbnail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TransitionGroup component={null} className="someClass">
                    <CSSTransition
                        in={ true }
                        appear={ true }
                        exit={true}
                        timeout={{enter:3000, exit: 3000}}
                        key={this.props.productId}
                        classNames="fade"
                        onExit={() => {
                            console.log('exit')
                          }
                        }
                     >
                <div className="col-lg-3 col-md-4 col-xs-6 mb-3">
                    <div onClick={ () => this.props.chooseProduct(this.props.productId) } className="d-block mb-0 h-100 thumbnail">
                        <img className="img-fluid img-thumbnail" src={`img/catalog/${this.props.img}`} alt="" />
                        <h6 className="h6 text-center text-dark">{ this.props.title }</h6> 
                    </div>
                </div>
                    </CSSTransition>
                </TransitionGroup>
            </React.Fragment>
        )
    }
}

export default Thumbnail;