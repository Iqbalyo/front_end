import { actionTypes } from "../actionTypes/index";

const initState = {
    isLoading: false,
    login: null,
    absen: [],
    ipk: [],
};

const data = (state = initState, action) => {
    console.log("action ? ", action)
    console.log("action ? ", state)
    switch (action.type) {
        case actionTypes.SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                login: action.payload,
            };
        case actionTypes.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                message: action.message,
            };

        //absen
        case actionTypes.GET_INFORMASIABSENSI_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_INFORMASIABSENSI_SUCCESS:
            return {
                ...state,
                isLoading: false,
                absen: action.payload,
            };
        case actionTypes.GET_INFORMASIABSENSI_FAILED:
            return {
                ...state,
                isLoading: false,
                message: action.message,
            };
        //IPK DARI TABEL AKTIVITASKULIAHS
        case actionTypes.GET_IPK_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_IPK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ipk: action.payload,
            };
        case actionTypes.GET_IPK_FAILED:
            return {
                ...state,
                isLoading: false,
                message: action.message,
            };


            //

            case actionTypes.GET_IPS_REQUEST:
    return {
        ...state,
        isLoading: true,
    };
case actionTypes.GET_IPS_SUCCESS:
    return {
        ...state,
        isLoading: false,
        ipsData: action.payload, // Tambahkan data IPS ke state
    };
case actionTypes.GET_IPS_FAILED:
    return {
        ...state,
        isLoading: false,
        message: action.message,
    };


        default:
            return state;
    }
};

export default data;
