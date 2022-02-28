import axios from "axios";
import { MOSTRAR } from "../types";

export const mostrarAction = (number) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`https://rickandmortyapi.com/api/character/${number}`);
            dispatch(consultarDatos(result.data))
            console.log(number)
        } catch {
            console.error('error al hacer la acción')
        }
    }

}

const consultarDatos = (data) => ({
    type: MOSTRAR,
    payload: data
})