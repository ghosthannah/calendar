import { Content } from "@models/content";
import { Calendar } from "@models/calendar";

export interface State {
  today: any,
  content: Content;
  calendar: Calendar;
}
