import { createAction, props } from "@ngrx/store";
import { Content } from "@models/content";
import { Calendar } from "@models/calendar";

export const setToday = createAction("[Today] Today Loaded Success", props<{ today: any }>());

export const retrieveLabels = createAction("[Content API] Content Loaded Success", props<{ content: Content }>());

export const retrieveCalendarSuccess = createAction("[Calendar API] Calendar Loaded Success", props<{ calendar: Calendar }>());
