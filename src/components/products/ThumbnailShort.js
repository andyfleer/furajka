import React from 'react';

class ThumbnailShort extends React.Component {
    clickHandler = () => {
        this.props.showImage(this.props.img);
        this.props.chooseProduct(this.props.productId)
    }
    render() {
        return (

                    <div className="thumbnail-short">
                        <div onClick={ this.clickHandler } className="d-block mb-4 h-100">
                            <img  src={`img/catalog/${this.props.img}`} alt={ this.props.title } />
                        </div>
                    </div>
         )
    }
}

export default ThumbnailShort;