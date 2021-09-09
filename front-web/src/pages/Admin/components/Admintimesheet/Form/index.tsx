import React, { useEffect, useState } from 'react';
import { AdvogadoTs, CasoTs, ClienteTs, TimeSheet } from 'core/objetos/objetos';
import { isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import BaseForm from '../../BaseForm';
import './styles.scss';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


type ParamTypes = {
    timesheetId: string;
}
const Form = () => {
    const { register, handleSubmit, control, setValue } = useForm<TimeSheet>();
    const [cliente, setCliente] = useState<ClienteTs[]>([]);
    const [advogado, setAdvogado] = useState<AdvogadoTs[]>([]);
    const [cliSelect, setCliSelect] = useState<CasoTs>();
    const [cobranca, setCobranca] = useState<Number>(-1);
    const { timesheetId } = useParams<ParamTypes>();
    const history = useHistory();
    const isEditing = timesheetId !== 'create';

    useEffect(() => {
        makePrivateRequest({url:'/cliente/tsc'})
        .then(response => setCliente(response.data));

    }, []);

    useEffect(() => {
        makePrivateRequest({url:'/advogado/tsa'})
        .then(response => setAdvogado(response.data));

    }, []);

    useEffect(() => {
       if(isEditing){
        makePrivateRequest({ url:`/timesheet/${timesheetId}`})
        .then(response => {
            setCobranca(response.data.cobranca);
            console.log(cobranca);
            setValue('caso', response.data.caso);
            setValue('advogado', response.data.advogado);
            setValue('data', response.data.data);
            setValue('tempo', response.data.tempo);
            setValue('descricao', response.data.descricao);
            //setValue('cobranca', response.data.cobranca);
        });
       }
    }, [timesheetId, isEditing, setValue, setCobranca]);

    const handleChange = (valor:any) => {
        if(valor != null){
            setCliSelect(valor.casos);
        }
        
    }

     const handleValueChange = (e:any) => {
      
     }

    const onSubmit = (data : TimeSheet) => {
        //console.log(data)
        makePrivateRequest({ 
            method: isEditing ? 'PUT':'POST', 
            url: isEditing ? `/timesheet/${timesheetId}` : '/timesheet', 
            data}).then(() => {
                toast.dark('Timesheet cadastrado com sucesso!');
                history.push('/admin/timesheet');
            }).catch(() => {
                toast.error('Erro ao cadastrar!')
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm>

                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            
                        <Select
                            name="cliente"
                            onChange={handleChange}
                            options={cliente} 
                            getOptionLabel={(option: ClienteTs) => option.razao}
                            getOptionValue={(option: ClienteTs) => String(option.id)}
                            isClearable={true} 
                            isSearchable={true}
                            placeholder="Cliente"
                            
                        />
                        </div>
                        <div className="col">
                        <Controller
                        as={Select} 
                        name="caso"
                        control={control}
                        options={cliSelect}
                        getOptionLabel={(option: CasoTs) => option.descricao}
                        getOptionValue={(option: CasoTs) => String(option.id)}
                        isClearable={true} 
                        isSearchable={true}
                        placeholder="Caso"
                        />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-6">
                            <Controller
                                as={Select}
                                name="advogado"
                                control={control}
                                options={advogado}
                                getOptionLabel={(option: AdvogadoTs) => option.nome}
                                getOptionValue={(option: AdvogadoTs) => String(option.id)}
                                isClearable={true} 
                                isSearchable={true}
                                placeholder="Advogado"
                                />

                        </div>
                        <div className="col-sm">
                            <div className="form-outline">
                                <input type="date"
                                    className="form-control"
                                    placeholder="Data"
                                    ref={register}
                                    name="data"
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tempo"
                                    ref={register}
                                    name="tempo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline">
                        <textarea

                            ref={register}
                            name="descricao"
                            cols={95}
                            rows={10}
                            placeholder="Descricao"
                        />
                    </div>

                { isAllowedByRole(["ROLE_ADMIN"]) &&(
                        <div className="row mr-2 mt-4">
                        <label className="ml-2 mr-2">Cobrança:</label>
                        <div className="form-check mr-2">
                            <input
                                type="radio"
                                className="form-check-input"
                                value={1}
                                ref={register}
                                name="cobranca"
                                defaultChecked={cobranca === 1}
                                //onChange={handleValueChange}
                            />
                            <label className="form-check-label">Sim</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                value={0}
                                                    
                                ref={register}
                                
                                name="cobranca"
                                defaultChecked={cobranca === 0}
                                //onChange={handleValueChange}
                            />
                            <label className="form-check-label">Nao</label>
                        </div>
                    </div>
                )}
                </div>

            </BaseForm>
        </form>

    )
}

export default Form;