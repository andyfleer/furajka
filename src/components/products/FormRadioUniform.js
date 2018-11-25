import React from 'react';

class FormRadio extends React.Component {
    render() {
        return (
            <div className="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="uniformType" 
                id={`uniform${ this.props.uniId }`}
                value={ this.props.uniId }
                checked={ this.props.checked }  
                onChange={ () => this.props.checkHandler(this.props.uniId) }
                />
            <label className="form-check-label" htmlFor={`uniform${ this.props.uniId }`}>
                   { this.props.uniName }
            </label>
        </div>
        );
    }
}

export default FormRadio;