import { MOSTRAR } from "../types";

const InicialState = {
    info: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = InicialState, action) =>{
    switch(action.type){
        case MOSTRAR:
            return {...state, info: action.payload }
        default:
            return state
    }
}