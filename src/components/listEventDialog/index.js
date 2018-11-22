import React from 'react';
import {connect} from 'react-redux';
import uuid from 'node-uuid';
import {removeEvent, toggleEventList} from '../../actions';


const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

const removeEventItem = (index, dispatch) => {
	dispatch(removeEvent(index));
	dispatch(toggleEventList());
	setTimeout(() => {
		dispatch(toggleEventList());
	},0)
};

let ListEvent = ({selectedDay, events, dispatch}) => {
	return (
		<div>
			<div className="centered eventList">
				<table className="eventListTable">
					<thead>
						<tr>
							<th className="eventTableTH">Events</th>
							<th className="eventTableTH"></th>
						</tr>
					</thead>
					<tbody>
						{events.map((item, index) => {
							return (
								<tr key={uuid.v4()}>
									<td className="eventTableTD">{item.eventName}</td>
									<td className="eventTableTD">
										<button onClick={() => removeEventItem(index, dispatch)}>
											<span>x</span>
										</button>
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
			<div className="eventCardFormDone eventCardTableDone">
				<a className="eventCardFormDoneButton button" onClick={(event) => openEventList(event, dispatch)}>
					Done
				</a>
			</div>
		</div>
		<div className="overlay"></div>
	</div>
	);
};

export default connect()(ListEvent);;
