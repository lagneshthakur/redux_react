import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {previousMonth} from '../../actions/index.js';

const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

let PreviousMonthButton = ({month, dispatch}) => {
	return (
		<button className="next" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</button>
	);
};
export default connect()(PreviousMonthButton);
