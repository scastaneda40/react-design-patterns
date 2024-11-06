import { useEffect, useState } from "react"

export const ControlledForm = () => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        if(name.length < 1) {
            setError('name can not be empty!')
        } else {
            setError('')
        }
    }, [name])

    return(
        <form>
            {error && <p>{error}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input name="age" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            <input type="submit" value="Submit" />
            <button>Submit</button>
        </form>
    )
}

