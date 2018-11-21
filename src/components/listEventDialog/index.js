import React from 'react';
import {connect} from 'react-redux';
import uuid from 'node-uuid';
import {toggleEventList} from '../../actions';


const openEventList = (event, dispatch) => {
	event.preventDefault(event);
	dispatch(toggleEventList());
};

let ListEvent = ({selectedDay, events, dispatch}) => {
	return (
		<div>
			<div className="centered eventList">
				<table className="eventListTable">
					<thead>
						<tr>
							<th className="eventTableTH">Name</th>
						</tr>
					</thead>
					<tbody>
						{events.map((item, index) => {
							return (
								<tr key={uuid.v4()}>
									<td className="eventTableTD">{item.eventName}</td>
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
