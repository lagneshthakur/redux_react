import React, {PropTypes} from 'react';
import uuid from 'node-uuid';
import {connect} from 'react-redux'
import {togglePanel, updateEventName} from '../../actions';

const updateEvName = (event, eventIndex, dispatch) => {
	const value = event.target.value;
	dispatch(updateEventName(value, eventIndex));
};

const toggleEventDialog = (event, selectedDay, eventIndex, dispatch) => {
	event.preventDefault();
	dispatch(togglePanel(selectedDay, true, eventIndex));
};

let EventDialog = ({calendarData, dispatch}) => {
    const {events, selectedDay} = calendarData;
    debugger
    let eventIndex = 0;
    if(events[selectedDay.format('DD-MM-YYYY')] != undefined){
        eventIndex  = events[selectedDay.format('DD-MM-YYYY')].length - 1;
    }
	const event = events[selectedDay.format('DD-MM-YYYY')];
	const evName = event[eventIndex].eventName || '';
	return (
		<form>
			<div className="eventCard centered">
			  <div className="eventCardPanel">
              Enter Event
			  </div>
			  <div className="eventCardForm">
					<div>
						<label className="eventCardFormLabel">Name:</label>
						<input className="eventCardFormInput" name="name" type="text" value={evName} onChange={(event) => updateEvName(event, eventIndex, dispatch)}/>
					</div>
					<div className="eventCardFormDone">
						<a className="eventCardFormDoneButton button" onClick={(event) => toggleEventDialog(event, selectedDay, eventIndex, dispatch)}>
							Done
						</a>
					</div>
				</div>
			</div>
			<div className="overlay"></div>
		</form>
	);
};

export default connect()(EventDialog);
