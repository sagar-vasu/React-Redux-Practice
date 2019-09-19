import { firebaseApp } from "../Config/Firebase/Firebase"
let database = firebaseApp.database().ref('/')

const getData = () => {
    return async dispatch => {
        dispatch({type: "empty"})
        database.child('todos').on('child_added', res => {
            let data = res.val()
            data.id = res.key
            dispatch({ type: 'getData', payLoad: data })
        })
    }
}

const addList = (name) => {
    if (!name) {
        alert('add Value')
        return {
            type: 'err'
        }
    }
    else {
        let key = database.child('todos').push().key
        let todoObj = {
            value: name,
            id: key,
            edit: true
        }
        return async dispatch => {
            await database.child(`todos/${todoObj.id}`).set(todoObj)
            dispatch({
                type: 'value',
            })
        }

    }
}


const editValue = (ind, val) => {
    return async dispatch => {
        await database.child(`todos/${val.id}`).update({ edit: false }).then(
            dispatch({
                type: 'edit',
                payLoad: ind
            })
        )

    }
}


const deleteValue = (ind, val) => {
    return async dispatch => {
        await database.child(`todos/${val.id}`).remove().then(
            dispatch({
                type: 'deleted',
                payLoad: ind
            })
        )
    }
}



const cancelValue = (ind, val) => {
    return async dispatch => {
        await database.child(`todos/${val.id}`).update({ edit: true }).then(
            dispatch({
                type: 'cancel',
                payLoad: ind
            })
        )

    }


}


const updateValue = (ind, updateval, val) => {
    return async dispatch => {
        val.value = updateval
        val.edit = true
        await database.child(`todos/${val.id}`).set(val).then(
            dispatch({
                type: 'update', payLoad: {
                    ind,
                    val
                }
            })
        )
    }

}



export {
    addList,
    editValue,
    deleteValue,
    cancelValue,
    updateValue,
    getData
}