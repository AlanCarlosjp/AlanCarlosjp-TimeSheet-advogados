import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../Card';

const List = () => {
    const history = useHistory();
    const handleCreate = () =>{
        history.push('/admin/advogado/create');
    }
    return(

        <div className="admin-timesheet-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
            ADICIONAR
            </button>
            <div className="admin-list-container">
                

            </div>
        </div>

    );
}

export default List;