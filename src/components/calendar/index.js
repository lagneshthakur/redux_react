import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import moment from 'moment';
import 'moment-range';
import uuid from 'node-uuid';
import Day from '../day';
import NextMonthButton from '../nextMonth';
import PreviousMonthButton from '../previousMonth';
import EventButton from '../addEvent';
import EventDialog from '../addEventDialog';
import ListEvent from '../listEventDialog';
import './calendar.css';

const getCalendarRanges = (year, month) => {
    const startDate = moment([year, month]);
    const firstDay = moment(startDate).startOf('month');
    const endDay = moment(startDate).endOf('month');
    const monthRange = moment.range(firstDay, endDay);
    const calendar = [];
    const weeks = [];

    // Generate weeks
    monthRange.by('days', (moment) => {
        let iWeek = moment.week();
        if (weeks.indexOf(iWeek) < 0) return weeks.push(moment.week());
    });

    weeks.forEach((week, i) => {
        let firstWeekDay = moment([year, month]).week(week).day(1);
        let lastWeekDay = moment([year, month]).week(week).day(7);
        if (i > 0 && week < weeks[i - 1]) {
            firstWeekDay = moment([year, month]).add(1, "year").week(week).day(1);
            lastWeekDay = moment([year, month]).add(1, "year").week(week).day(7);
        }
        const weekRange = moment.range(firstWeekDay, lastWeekDay);
        calendar.push(weekRange);
    });

    return calendar;
}

const renderEventDialog = (calendarData) => {
	const {eventDialogIsOpen} = calendarData;
	const panel = eventDialogIsOpen ? <EventDialog calendarData={calendarData} /> : null;
	return panel;
};

const renderEventList= (selectedDay, eventListIsOpen, events) => {
	const panel = eventListIsOpen ? <ListEvent selectedDay={selectedDay} events={events} /> : null;
	return panel;
};

const renderCalendarWeeks = (calendarRanges, selectedDay, month, events) => calendarRanges.map((week) => {
	const dayList = [];
    week.by('days', (day) => dayList.push(day));
    let dayCount = 0;
	return dayList.map((day) => {
		const eventsByDay = events[day.format('DD-MM-YYYY')] || [];
		const dayMuted = day.month() !== month ? 'day_muted' : '';
		const daySelected = day.format('DD-MM-YYYY') === selectedDay.format('DD-MM-YYYY')? 'day_selected' : '';
		const dayToday = day.format('DD-MM-YYYY') === moment().format('DD-MM-YYYY') ? 'day_today' : '';
		const dayClasses = dayMuted+daySelected+dayToday;
		return (
			<Day
				dayClasses={dayClasses}
				day={day}
				key={uuid()}
				events={eventsByDay} />
		);
        dayCount++;
	});
});

const Calendar = ({calendarData, dispatch}) => {
	const {month, year} = calendarData;
	const {events, selectedDay, eventListIsOpen} = calendarData;
	const calendarRanges = getCalendarRanges(year, month);
	const headerText = `${moment().month(month).format("MMMM")} ${year}`;
	const eventsArray = events[selectedDay.format('DD-MM-YYYY')];
	return (
		<div className="calendar">
				<header className="header">
					<PreviousMonthButton month={month} />
					<span className="headerSpan">
						{headerText}
					</span>
					<NextMonthButton month={month} />
				</header>
				<main>
					<section className="section">
						{renderCalendarWeeks(calendarRanges, selectedDay, month, events, calendarData)}
					</section>
				</main>
				<EventButton selectedDay={selectedDay} />
				{renderEventDialog(calendarData)}
				{renderEventList(selectedDay, eventListIsOpen, eventsArray)}
		</div>
	);
};

export default connect()(Calendar);