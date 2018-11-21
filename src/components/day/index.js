import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {setDay, toggleEventList} from '../../actions/index.js';
import './day.css'

const selectDay = (event, day, dispatch) => {
	event.preventDefault(event);
	dispatch(setDay(day));
};

const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

const Day = ({day, dayClasses, events, dispatch}) => {
	const timeClasses ='time blank ' + dayClasses

	return (
		<time dateTime={day.format('YYYY-MM-DD')} className={timeClasses}>
  		<a href="#" onClick={(event) => selectDay(event, day, dispatch)}>
				<span className="caldate">{`${day.format('DD')} ${day.format('dddd')}`}</span>
				{events.map((event) => (<button className={`eventMarker Task`} onClick={(event) => openEventList(event, dispatch)}>{event.eventName || ''}</button>))}
			</a>
		</time>
	);
};

export default connect()(Day);