import React from 'react'

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    name: <input 
                    value={props.name} 
                    onChange={props.actionName}/>
                    
                </div>
                <div>
                    number: <input
                    value={props.number}
                    onChange={props.actionNumber}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm