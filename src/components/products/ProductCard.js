import React from 'react';


class ProductCard extends React.Component {

    componentDidMount = () => {
        this.props.showImage(this.props.good.images[0]);
    }


    // renderImagesThumbs = () => {
    //     if(this.props.good.images.length > 1) {
    //         return (
    //             <div className="row" style={{ width: '300px' }}>
    //                 <div className="col">
    //                         <img 
    //                             className="card-small-img" 
    //                             src={`img/catalog/${this.props.good.images[0]}`} 
    //                             onClick={ (e) => this.props.showImage(this.props.good.images[0]) }
    //                             alt=""
    //                         />
    //                 </div>
    //                 <div className="col">
    //                         <img 
    //                             className="card-small-img" 
    //                             src={`img/catalog/${this.props.good.images[1]}`} 
    //                             onClick={ (e) => this.props.showImage(this.props.good.images[1]) }
    //                             alt=""
    //                         />
    //                 </div>
    //                 <div className="col"></div>
    //             </div>
    //         );
    //     }
    // }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h3 className="mb-4 h3">Карточка товара</h3>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid card-image" src={`img/catalog/${this.props.imageToShow}`} alt="" />
                    </div>
                    <div className="col-md-4">
                    <h3 className="mb-3">{ this.props.good.title }</h3>
                    <p>
                    { this.props.good.desc }
                    </p>

                            <p className="my-3"><b>Артикул:</b> { this.props.good.articul }</p>

                            <p className="my-3"><b>Цена розница:</b> { this.props.good.price }</p>

                            <p className="my-3"><b>Цена опт:</b> { this.props.good.priceOpt }</p>
                            {
                              this.props.good.images.length > 1 
                              && 
                              <div className="row" style={{ width: '300px' }}>
                                    <div className="col">
                                            <img 
                                                className="card-small-img" 
                                                src={`img/catalog/${this.props.good.images[0]}`} 
                                                onClick={ (e) => this.props.showImage(this.props.good.images[0]) }
                                                alt=""
                                            />
                                    </div>
                                    <div className="col">
                                            <img 
                                                className="card-small-img" 
                                                src={`img/catalog/${this.props.good.images[1]}`} 
                                                onClick={ (e) => this.props.showImage(this.props.good.images[1]) }
                                                alt=""
                                            />
                                    </div>
                                    <div className="col"></div>
                               </div>
                            }

                    </div>
                </div>

            </div>
        );
    }
}

export default ProductCard;