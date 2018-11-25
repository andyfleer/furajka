import React from 'react';
import FormRadioCats from './FormRadioCats';
import FormRadioUniform from './FormRadioUniform';

class CatalogForm extends React.Component {
    selectHandleChange = (event) => {
        this.props.chooseDeptHandler(event.target.value);
    }

    renderFormType = () => {
        if(this.props.selectedCategory === 'cat2') { //means pogoni
            return (
                <React.Fragment>
                                <fieldset className="mt-3">
                                <legend>Форма</legend>
                                {
                                    Object.keys(this.props.uniformTypes).map((item, i) => {
                                        return (
                                            <FormRadioUniform 
                                                key={i}
                                                uniName={ this.props.uniformTypes[item] }
                                                uniId={ item }
                                                checked={ this.props.selectedUniformType === item }
                                                checkHandler={ this.props.chooseUniformHandler } 
                                            />
                                        )
                                    })
                                }
                                </fieldset>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                       <form>
                          <fieldset>
                            <legend>Тип продукции</legend>
                            {
                                Object.keys(this.props.categories).map((item, i) => {
                                    return (
                                        <FormRadioCats 
                                            key={ i }
                                            catName={ this.props.categories[item].title }
                                            catId={ item }
                                            checked={ this.props.selectedCategory === item }
                                            checkHandler={ this.props.chooseCategoryHandler } 
                                        />
                                    )
                                })
                            }
                            </fieldset>
                             

                            <fieldset className="mt-3">
                              <legend>Ведомство</legend>
                              <div className="form-group">
                                  <select className="form-control" value={ this.props.selectedDept }
                                   onChange={ this.selectHandleChange }
                                   id="exampleFormControlSelect2">
                                  {
                                      Object.keys(this.props.departaments).map((item, i) => <option
                                         key={i}
                                         value={item}
                                         >{ this.props.departaments[item].title }</option>)
                                  }
                                  </select>
                                </div>
                            </fieldset>
                            
                            {
                                this.renderFormType()
                            }
                            
                        </form>
            </React.Fragment>
        );
    }
}

export default CatalogForm;