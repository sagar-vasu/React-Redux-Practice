

const initalState = {
    list: [],
}





const Reducer = (state = initalState, action) => {
    switch (action.type) {
        case "err": return state;
        case "empty": 
            return{
                ...state,
                list: []
            }
        case "getData":
                state.list.push(action.payLoad)
            return { ...state, list: state.list.concat() }

        case "value":
            return  state
        case 'deleted':
            state.list.splice(action.payLoad, 1)
            return { ...state, list: state.list.concat() }

        case 'cancel':
            state.list[action.payLoad].edit = true
            return { ...state, list: state.list.concat() }

        case 'edit':
            state.list[action.payLoad].edit = false
            return { ...state, list: state.list.concat() }

        case 'update':
            state.list.splice(action.payLoad.ind, 1, action.payLoad.val)
            return { ...state, list: state.list.concat() }


        default: return state
    }

}



export default Reducer