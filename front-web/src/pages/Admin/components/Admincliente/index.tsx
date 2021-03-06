import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.scss';

const Admcliente = () => {
    return(
        <div>
            <Switch>
                <Route path="/admin/cliente" exact>
                    <List />
                </Route>
                <Route path="/admin/cliente/create">
                <Form />
                </Route>
                <Route path="/admin/cliente/:clienteId">
                    <h1>Alterar produto</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default Admcliente;