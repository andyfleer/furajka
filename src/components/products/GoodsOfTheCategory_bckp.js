import React from 'react';
import ThumbnailShort from './ThumbnailShort';
import CarouselSlider from "react-carousel-slider";


class GoodsOfTheCategory extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="row mt-5">
                <div className="col">
                    <h3 className="h4 mb-4">Другие товары соответствующие условиям поиска</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="goods-row">

                    {
                      Object.keys(this.props.goods).map((item, i) => {
                                    const deptChoose = 
                                            this.props.selectedDept === this.props.goods[item].departaments || 
                                            this.props.selectedDept === 'dep0';
                                    let uniformType = true; 
                                            if( this.props.selectedCategory === 'cat2') {
                                                if(this.props.selectedUniformType === this.props.goods[item].uniformType) {
                                                    uniformType = true;
                                                } else if( this.props.selectedUniformType === 'type0' ) {
                                                    uniformType = true;
                                                } else {
                                                    uniformType = false;
                                                }
                                            } 

                              if(this.props.selectedCategory === this.props.goods[item].category && deptChoose && uniformType) {
                                return (
                                  <React.Fragment key={ i } >
                                    <ThumbnailShort 
                                        key={ i } 
                                        title={ this.props.goods[item].title }
                                        img={ this.props.goods[item].images[0] }
                                        productId={ item }
                                        chooseProduct={ this.props.chooseProduct }
                                        />
                                  </React.Fragment>
                              )
                            } else {
                              return "";
                            }
                          })
                        }
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default GoodsOfTheCategory;