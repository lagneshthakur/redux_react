import moment from 'moment';

const month = moment().month();
const year = moment().year();
const date = moment();
const selectedDay = moment();

const initialState = {
	date,
	month,
    year,
	selectedDay,
	eventDialogIsOpen: false,
	events: {}
};

const reducers = (state = initialState, action) => {
	let eventKey = null;
	let newState = null;
	switch(action.type) {

		case 'NEXT_MONTH':
			let nextMonth = action.month + 1;
			let nextYear = state.year;
			if (action.month === 11) {
				nextMonth = 0;
				nextYear += 1;
			}
			return { ...state, month: nextMonth, year: nextYear};

		case 'PREVIOUS_MONTH':
			let previousMonth = action.month - 1;
			let previousYear = state.year;
			if (action.month === 0) {
				previousMonth = 11;
				previousYear -= 1;
			}
			return { ...state, month: previousMonth, year: previousYear};

        case 'SET_DAY':
			return { ...state, selectedDay: action.selectedDay}

		case 'TOGGLE_PANEL':
			eventKey = action.selectedDay.format('DD-MM-YYYY');
			const isOpen = !state.eventDialogIsOpen;
			newState = { ...state, eventDialogIsOpen: isOpen};
			if(!newState.events[eventKey]) newState.events[eventKey] = [];
			if (action.close) {
				newState.events[eventKey] = newState.events[eventKey].filter((value, i) => Object.keys(value).length > 0);
				newState = { ...state, events: newState.events, eventDialogIsOpen: isOpen};
			}
			if (isOpen) {
				newState.events[eventKey].push({});
				newState = { ...state, events: newState.events, eventDialogIsOpen: isOpen};
			}
			return newState;
		case 'UPDATE_EVENT_NAME':
			eventKey = state.selectedDay.format('DD-MM-YYYY');
			const eventIndex = action.eventIndex;
			newState = { ...state};
			if(!newState.events[eventKey][eventIndex]) newState.events[eventKey][eventIndex] = {};
			newState.events[eventKey][eventIndex].eventName = action.name;
			return { ...state, events: newState.events};
		case 'TOGGLE_EVENT_LIST':
			return { ...state, eventListIsOpen: !state.eventListIsOpen};
		default:
			return state;
	}
};

export default reducers;