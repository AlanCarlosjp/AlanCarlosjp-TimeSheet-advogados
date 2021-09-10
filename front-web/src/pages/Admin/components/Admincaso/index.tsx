import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

import './styles.scss';

const Admcaso= () => {
    return(
        <div>
            <Switch>
                <Route path="/admin/caso" exact>
                    <List />
                </Route>
                <Route path="/admin/caso/create">
                <Form />
                </Route>
                <Route path="/admin/caso/:clienteId">
                    <h1>Alterar produto</h1>
                </Route>
            </Switch>
        </div>
    );
}
export default Admcaso;