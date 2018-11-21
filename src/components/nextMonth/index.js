import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {nextMonth} from '../../actions/index.js';

const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

let NextMonthButton = ({month, dispatch}) => {
	return (
		<button className="next" onClick={() => gotoNextMonth(dispatch, month)}>&gt;</button>
	);
};
export default connect()(NextMonthButton);
