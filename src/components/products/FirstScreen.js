import React from 'react';
import Categories from './Categories';

class FirstScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                        <div className="row">
                            <div className="col-8">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eveniet aliquid dolorum tenetur illo, officia sapiente alias. Odio pariatur nam assumenda error quae sit, non aspernatur quibusdam amet dolorem facere obcaecati quos iusto illo asperiores nemo fugit saepe, placeat dicta.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eveniet aliquid dolorum tenetur illo, officia sapiente alias. Odio pariatur nam assumenda error quae sit, non aspernatur quibusdam amet dolorem facere obcaecati quos iusto illo asperiores nemo fugit saepe, placeat dicta.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae eveniet aliquid dolorum tenetur illo, officia sapiente alias. Odio pariatur nam assumenda error quae sit, non aspernatur quibusdam amet dolorem facere obcaecati quos iusto illo asperiores nemo fugit saepe, placeat dicta.
                                </p>
                            </div>
                            <div className="col-4">                        
                                <Categories 
                                    items={ this.props.categories } 
                                    chooseCategoryHandler={ this.props.chooseCategoryHandler }/>
                            </div>           
                        </div>
            </React.Fragment>
        );
    }
}

export default FirstScreen;