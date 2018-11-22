import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {previousMonth} from '../../actions/index.js';

const gotoPreviousMonth = (dispatch, month) => dispatch(previousMonth(month));

let PreviousMonthButton = ({month, dispatch}) => {
	return (
		<span className="previous" onClick={() => gotoPreviousMonth(dispatch, month)}>&lt;</span>
	);
};
export default connect()(PreviousMonthButton);
