import React, { useState } from "react";
import { connect } from 'react-redux'
import { addEvent } from '../redux/actions'


// function AddEvent({addEvent}) {
function AddEvent(props) {
    const [eventInput, setEventInput] = useState('')
    return (
        <>
            <input onChange={updateEventInput}
                value={eventInput}
            />
            <button onClick={addEventInput}>Add Event</button>
        </>
    )
    function updateEventInput(e) {
        setEventInput(e.target.value)
    }
    
    function addEventInput() {
        // addEvent(eventInput)
        props.addEvent(eventInput)
       setEventInput('')
    }
}

const mapStateToProps = state => state.partOfState
export default connect(mapStateToProps,
    { addEvent }
)(AddEvent)
