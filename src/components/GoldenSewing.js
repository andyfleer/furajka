import React from 'react';

class GoldenSewing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="golden-sewing">
                    <div className="container">
                    <div className="row my-5" id="about-company">
                        <div className="col-lg-6">
                        <h2>Золотое шитьё</h2>
                        <p>Ручная вышивка золотой, серебряной и латунной канителью</p>
                        <ul>
                            <li>
                            <strong>Bootstrap v4</strong>
                            </li>
                            <li>jQuery</li>
                            <li>Font Awesome</li>
                            <li>Working contact form with validation</li>
                            <li>Unstyled page elements for easy customization</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                        </div>
                        <div className="col-lg-6">
                        <img className="img-fluid rounded" src="img/golden-sewing.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default GoldenSewing;