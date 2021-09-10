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
                                    placeholder="Nome do cliente"
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CNPJ/CPF"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <div className="form-outline">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Endereço"
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Complemento"
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Bairro"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <div className="form-outline">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Cidade"
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="UF"
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CEP"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-3">
                            <div className="form-outline">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Telefone"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Contato"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline">
                        <textarea

                            name="observacao"
                            cols={95}
                            rows={10}
                            placeholder="Observação"
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;