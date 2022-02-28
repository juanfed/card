import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarAction } from '../redux/actions/mostrarAction';

const Card = ({number}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(mostrarAction(number))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[number])
    const {info} = useSelector(state => state.info);

    return (
        <div className='card'>
            <h3>Name: {info.name}</h3>
            <img src={info.image} alt={info.name} />
            <h3>Especie: {info.species}</h3>
            <h4>Status: {info.status}</h4>
            <h4>locacion: {info.location?.name}</h4>
        </div>
    )
}


export default Card