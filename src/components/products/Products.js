import React from 'react';
import { goods, categories, departaments, uniformTypes } from '../../sample-goods';

import FirstScreen from './FirstScreen';
import Catalog from './Catalog';

class Products extends React.Component {
    state = {
        goods: {},
        categories: {},
        departaments: {},
        uniformTypes: '',
        currentState: 'firstScreen',
        currentCat: '',
        currentDept: 'dep0',
        currentUniformType: 'type0',
        currentProduct: ''
    };




    componentDidMount = () => {
        this.setState({ goods, categories, departaments, uniformTypes  });
    }

    chooseCategoryHandler = (catId) => {
         this.setState({ currentState: 'catalog', currentCat: catId, currentProduct: '' });
    }

    chooseDeptHandler = (deptId) => {
        this.setState({ currentDept: deptId, currentProduct: '' });
    }

    chooseUniformHandler = (uniformId) => {
        this.setState({ currentUniformType: uniformId, currentProduct: '' });
    }

    chooseProduct = (productId) => {
        this.setState({ currentProduct: productId });
    }

    categoriesController = () => {
        switch(this.state.currentState) {
            case 'firstScreen':
                return <FirstScreen  categories={ this.state.categories } chooseCategoryHandler={ this.chooseCategoryHandler } />;
            case 'catalog':
                return (
                        <Catalog 
                            openCategory={ this.state.currentCat }
                            currentDept={ this.state.currentDept }
                            currentUniformType={ this.state.currentUniformType }
                            currentProduct={ this.state.currentProduct }
                            goods={ this.state.goods }
                            categories={ this.state.categories }
                            uniformTypes={ this.state.uniformTypes }
                            departaments={ this.state.departaments }
                            chooseCategoryHandler={ this.chooseCategoryHandler }
                            chooseDeptHandler={ this.chooseDeptHandler }
                            chooseUniformHandler={ this.chooseUniformHandler }
                            chooseProduct={ this.chooseProduct }
                            style={{ opacity: 0 }}
                            />
                );
            
            default:
                return '';//<FirstScreen  categories={ this.state.categories } chooseCategoryHandler={ this.chooseCategoryHandler } />;   
        }
    }

    render() {
        return (
            <React.Fragment>
                <section id="products-section" className="pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="my-5">Наша продукция</h2>
                            </div>
                        </div>
                        {
                            this.categoriesController()
                        }
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Products;