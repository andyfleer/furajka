import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CatalogForm from './CatalogForm';
import ThumbnailsRender from './ThumbnailsRender';
import ProductCard from './ProductCard';
import GoodsOfTheCategory from './GoodsOfTheCategory';

class Catalog extends React.Component {    
    state = {
        imageToShow: ''
    }

    showImageInCard = (imageToShow) => {
        this.setState({ imageToShow })
    }

    renderController = () => {
        if(this.props.currentProduct === '') {
           return (
                    <ThumbnailsRender
                        selectedCategory={ this.props.openCategory }
                        selectedDept={ this.props.currentDept }
                        selectedUniformType={ this.props.currentUniformType }
                        categories={ this.props.categories }
                        departaments={ this.props.departaments }
                        uniformTypes={ this.props.uniformTypes }
                        goods={ this.props.goods }
                        chooseProduct={ this.props.chooseProduct }
                    />
           );
        } else {
            return (
                    <React.Fragment>
                         <TransitionGroup component={null} className="someClass">
                            <CSSTransition  
                            in= { true }
                            appear = { true }
                            timeout={ 3000 }
                            key={ this.props.index }
                            classNames="fade"
                            >
                            <ProductCard 
                                good={ this.props.goods[this.props.currentProduct] }
                                imageToShow={ this.state.imageToShow }
                                showImage={ this.showImageInCard }
                                index={ this.props.currentProduct }
                            />
                        </CSSTransition>
                        </TransitionGroup>
                        <GoodsOfTheCategory 
                            selectedCategory={ this.props.openCategory }
                            selectedDept={ this.props.currentDept }
                            selectedUniformType={ this.props.currentUniformType }
                            goods={ this.props.goods }
                            chooseProduct={ this.props.chooseProduct }
                            showImage={ this.showImageInCard }
                        />
                    </React.Fragment>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                      <div className="col-lg-3 col-md-4 col-xs-6">
                            <CatalogForm 
                                selectedCategory={ this.props.openCategory }
                                selectedDept={ this.props.currentDept }
                                selectedUniformType={ this.props.currentUniformType }
                                categories={ this.props.categories }
                                departaments={ this.props.departaments }
                                uniformTypes={ this.props.uniformTypes }
                                chooseCategoryHandler={ this.props.chooseCategoryHandler }
                                chooseDeptHandler={ this.props.chooseDeptHandler }
                                chooseUniformHandler={ this.props.chooseUniformHandler }
                                />
                      </div>
                      <div className="col-lg-9 col-md-8 col-xs-6">
                      {
                          this.renderController()
                      }
         
                      </div>
                  </div>
                
            </React.Fragment>
        );
    }
}

export default Catalog;