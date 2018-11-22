export const setDay = (selectedDay) => {
    return {
        type: 'SET_DAY',
        selectedDay
    }
};

export const nextMonth = (month) => {
    return {
        type: 'NEXT_MONTH',
        month
    }
};

export const previousMonth = (month) => {
    return {
        type: 'PREVIOUS_MONTH',
        month
    }
};

export const togglePanel = (selectedDay, close, eventIndex) => {
    return {
        type: 'TOGGLE_PANEL',
        selectedDay,
        close,
        eventIndex
    }
};

export const updateEventName = (name, eventIndex) => {
    return {
        type: 'UPDATE_EVENT_NAME',
        name,
        eventIndex
}
};

export const toggleEventList = (selectedDay) => {
    return {
      type: 'TOGGLE_EVENT_LIST',
      selectedDay
    }
  };

export const removeEvent = (eventIndex) => {
    return {
      type: 'REMOVE_EVENT',
      eventIndex
    }
};