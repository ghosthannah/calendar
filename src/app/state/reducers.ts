import { createReducer, on } from "@ngrx/store";
import { Content } from "@models/content";
import { Calendar } from "@models/calendar";

import { retrieveCalendarSuccess, retrieveLabels, setToday } from "./actions";

export const initialContent: Content = {
  labels: {}
};

export const initialCalendar: Calendar = {
  "2021": {},
  "2022": {},
  "2023": {}
};

export const initialDay: any = {};

export const contentReducer = createReducer(
  initialContent,
  on(retrieveLabels, (state, { content }) => content)
);

export const calendarReducer = createReducer(
  initialCalendar,
  on(retrieveCalendarSuccess, (state, { calendar }) => calendar)
);

export const todayReducer = createReducer(
  initialDay,
  on(setToday, (state, { today }) => today)
);
