import React from 'react';

class FormRadioCats extends React.Component {
    render() {
        return (
            <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="productType" 
                id={`red${ this.props.catId }`}
                value={ this.props.catId }
                checked={ this.props.checked } 
                onChange={ () => this.props.checkHandler(this.props.catId) }
                />
            <label className="form-check-label" htmlFor={`red${ this.props.catId }`}>
                   { this.props.catName }
            </label>
        </div>
        );
    }
}

export default FormRadioCats;