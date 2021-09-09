import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.scss';

const Admcategoria= () => {
    return(
        <div>
            <Switch>
                <Route path="/admin/categoria" exact>
                    <List />
                </Route>
                <Route path="/admin/categoria/create">
                <Form />
                </Route>
                <Route path="/admin/categoria/:clienteId">
                    <h1>Alterar produto</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default Admcategoria;