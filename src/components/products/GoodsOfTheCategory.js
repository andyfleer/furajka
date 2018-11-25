import React from 'react';
import ThumbnailShort from './ThumbnailShort';
import CarouselSlider from "react-carousel-slider";


class GoodsOfTheCategory extends React.Component {
    
    render() {
    
        let slides = Object.keys(this.props.goods).map((item, i) => {
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
                    <ThumbnailShort 
                        key={ i } 
                        title={ this.props.goods[item].title }
                        img={ this.props.goods[item].images[0] }
                        productId={ item }
                        chooseProduct={ this.props.chooseProduct }
                        showImage={ this.props.showImage }
                        />

                )
            }

            return undefined;

        }).filter(y => y !== undefined);


        let btnWrapperStyle = {
            position: "relative",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            textAlign: "center"
        }

        let btnStyle = {
            display: "inline-block",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "36px"
        }


        let rBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >
                <i className="fas fa-angle-right"></i>
            </div>
        </div>);

        let lBtnCpnt = (<div style = {btnWrapperStyle} >
            <div style = {btnStyle} className = "material-icons" >
                <i className="fas fa-angle-left"></i>
            </div>
        </div>);  

        let iconItemsStyle = {
            padding: "0px",
            background: "transparent",
            margin:"0 5px",
            height: "80%"
        };

               

        return (
            <React.Fragment>
            <div className="row mt-5">
                <div className="col">
                    <h3 className="h4 mb-2">Другие товары соответствующие условиям поиска</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="goods-row">
                    {
                        <CarouselSlider 
                            sliderBoxStyle = {{height: "150px", width: "90%", background: "transparent", overflow: "hidden"}} 
                            accEle = {{dots: false}}
                            slideCpnts = {slides} 
                            itemsStyle = {iconItemsStyle}
                            buttonSetting = {{placeOn: 'middle-outside'}}
                            rBtnCpnt = {rBtnCpnt}
                            lBtnCpnt = {lBtnCpnt}    
                        />
                    }
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default GoodsOfTheCategory;