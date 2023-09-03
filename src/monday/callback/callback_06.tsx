import React, {MouseEvent} from 'react'

const callback = (): number => {
    alert('hey')
    return 12
}

window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('user have been deleted')
    }
    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}