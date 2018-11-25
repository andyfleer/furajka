import React from 'react';

class Pluses extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="content-section bg-primary text-white text-center" id="services">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <span className="service-icon rounded-circle mx-auto mb-3">
                            <i class="fas fa-award"></i>
                            </span>
                            <h4 className="text-capitalize">
                            Изготовитель <br/> один за Уралом
                            </h4>
                            <p className="text-faded mb-0">
                            Единственный нефабричный изготовитель элементов форменной одежды за уралом.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <span className="service-icon rounded-circle mx-auto mb-3">
                            <i class="fas fa-layer-group"></i>
                            </span>
                            <h4 className="text-capitalize">
                            Опт крупный <br/> и мелкий
                            </h4>
                            <p className="text-faded mb-0">Мы предлагаем продукцию как крупным так и мелком оптом (100 штук)</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                            <span className="service-icon rounded-circle mx-auto mb-3">
                            <i class="fas fa-bolt"></i>
                            </span>
                            <h4 className="text-capitalize">
                            Быстрое изготовление
                            </h4>
                            <p className="text-faded mb-0">Мелкооптовых заказов в течение месяца
                            Оперативное выполнение заказов</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <span className="service-icon rounded-circle mx-auto mb-3">
                            <i class="fas fa-shield-alt"></i>
                            </span>
                            <h4 className="text-capitalize">
                            Уставные <br/> материалы
                            </h4>
                            <p className="text-faded mb-0">Использование уставных материалов согласно приказам и нормативам.</p>
                        </div>
                        </div>
                    </div>
                    </section>
            </React.Fragment>
        )
    }
}

export default Pluses;