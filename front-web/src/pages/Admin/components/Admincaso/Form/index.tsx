import React from 'react';
import Select from 'react-select';
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
                        <div className="col-4">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Valor"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-6">


                                <Select isClearable={true} isSearchable={true} />

                        </div>

                        <div className="col-6">

                            <Select isClearable={true} isSearchable={true} />

                        </div>

                    </div>

                </div>
            </BaseForm>
        </form>
    )
}

export default Form;