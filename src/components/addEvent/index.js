import React from 'react';
import {connect} from 'react-redux'
import {togglePanel} from '../../actions';

const toggleEventPanel = (selectedDay, dispatch) => {
	dispatch(togglePanel(selectedDay, false));
};

let EventButton = ({selectedDay, dispatch}) => {
	return (
		<div className="eventButton">
			<button className="button addEventButton" onClick={() => toggleEventPanel(selectedDay, dispatch)}>
				<span>+</span>
			</button>
		</div>
	);
};

export default connect()(EventButton);;
