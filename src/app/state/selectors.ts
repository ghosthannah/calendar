import { createFeatureSelector } from "@ngrx/store";
import { Content } from "@models/content";
import { Calendar } from "@models/calendar";

export const selectContent = createFeatureSelector<Content>("content");

export const selectCalendar = createFeatureSelector<Calendar>("calendar");

export const selectToday = createFeatureSelector<any>("today");

