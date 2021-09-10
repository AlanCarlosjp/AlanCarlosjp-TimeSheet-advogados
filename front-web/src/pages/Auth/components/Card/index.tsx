
import { saveSessionData } from 'core/utils/auth';
import { makeLogin } from 'core/utils/request';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import './styles.scss';

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from:string;
}


const AuthCard = () => {

    const { register, handleSubmit } = useForm<FormState>();

    const [hasError, setHasError] = useState(false);

    const history = useHistory();

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname:"/dashboard" } };

    const onSubmit = (data: FormState) => {
        makeLogin(data)
            .then(response => {
                saveSessionData(response.data);
                history.replace(from);

            })
            .catch(() => {
                setHasError(true);
            });
    };

    return (

        <div className="card-base">
            <h1 className="card-base-title">
                login
        </h1>
            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha invalidos.
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Usuario"
                    ref={register}
                    name="username"
                />

                <input
                    type="password"
                    className="form-control mb-5"
                    placeholder="Senha"
                    ref={register}
                    name="password"
                />
                <div className="button-form">
                    <button className="btn btn-primary mr-5">LOGIN</button>
                    <button className="btn btn-secondary">LIMPAR</button>
                </div>
            </form>

        </div>
    )
}
export default AuthCard;