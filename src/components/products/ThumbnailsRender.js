import React from 'react';
import Thumbnail from './Thumbnail'

class ThumbnailsRender extends React.Component {
  // selectedCategory
  // selectedDept
  // selectedUniformType
  // goods

//   product1: {
//     title: 'Погоны крутые',
//     artikul: '123123',
//     category: categories.cat2,
//     departaments: departaments.dep1,
//     uniformType: '',
//     images: ['1123.jpg', 'eq234.jpg'],
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, vero?',
//     price: 123,
//     priceOpt: 12312
// }
    render() {
        return (
                        <div className="row text-center text-lg-left">
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
                                        <Thumbnail 
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
        );
    }
}

export default ThumbnailsRender;