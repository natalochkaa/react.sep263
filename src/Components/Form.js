import React, {useState} from 'react';

const Form = ({filterForm}) => {

    let [formState, setFormState] = useState({name: ``, username: ``, email: ``})

    let onFormChange = (e) => {
        let event = {...formState, [e.target.name]: e.target.value}
        setFormState({...formState, ...event})
        filterForm(event)
        e.preventDefault()
    }
    return (
        <div>
            <form>
                <label>NAME ➤<input type="text" name={`name`} value={formState.name} onChange={onFormChange}/></label>
                <label>USERNAME ➤<input type="text" name={`username`} value={formState.username} onChange={onFormChange}/></label>
                <label>EMAIL ➤<input type="text" name={`email`} value={formState.email} onChange={onFormChange}/></label>
            </form>
        </div>
    );
};

export default Form;