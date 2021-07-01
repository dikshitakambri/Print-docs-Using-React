const initialstate = {
    name: '',
    contact: '',
    address: '',
    email: '',
    date: '',
    model: '',
    accessories : '',
    cost : ''
}

function addReducer(state = initialstate, action){
    switch (action.type) {
        case 'SUBMIT':
            return{
                name : action.payload.name,
                contact : action.payload.contact,
                address : action.payload.address,
                email : action.payload.email,
                date : action.payload.date,
                model : action.payload.model,
                accessories : action.payload.accessories,
                cost : action.payload.cost
            }
    
        default:
            return state;
    }
} 

export default addReducer;