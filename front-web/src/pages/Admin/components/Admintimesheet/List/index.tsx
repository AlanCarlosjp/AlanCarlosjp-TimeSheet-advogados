import { TimeSheetResponse } from 'core/objetos/objetos';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../Card';
import { toast } from 'react-toastify';


const List = () => {
    const history = useHistory();

    const [timesheetresp, setTimesheetResp] = useState<TimeSheetResponse[]>();

    useEffect(() => {
        makePrivateRequest({url:'/timesheet'})
        .then(response => setTimesheetResp(response.data));
    }, []);
    
    const handleCreate = () =>{
        history.push('/admin/timesheet/create');
    }

    const onRemove = (timesheetId: number | undefined) => {
        makePrivateRequest({url: `/timesheet/${timesheetId}`, method: 'DELETE'})
        .then(() => {
            toast.dark('Timesheet excluido com sucesso!');
            history.push('/admin/timesheet');
        }).catch(() => {
            toast.error('Erro ao excluir!')
        })
    }
    return(

        <div className="admin-timesheet-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
            ADICIONAR
            </button>
            <div className="admin-list-container">
              {timesheetresp?.map(t => (
                <Card destino="/admin/timesheet" 
                id={t.id} 
                titulo={t.caso.descricao} 
                subtitulo={t.advogado.nome}
                descricao={t.descricao}
                data={t.data}
                onRemove={onRemove}
                />
              ))}
                

            </div>
        </div>

    );
}

export default List;