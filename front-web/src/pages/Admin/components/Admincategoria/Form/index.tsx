import React from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {
    return (
        <form>
            <BaseForm>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-8">
                            <div className="form-outline">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Descrição"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-3">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Valor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;