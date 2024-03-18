export declare enum schedulerCalendarView {
    month = "month",
    week = "week",
    day = "day",
    listYear = "listYear",
    listMonth = "listMonth",
    listWeek = "listWeek",
    listDay = "listDay",
    agendaWeek = "agendaWeek",
    agendaDay = "agendaDay"
}
export declare const schedulerCalendarViewValueMap: Map<schedulerCalendarView, string>;
export declare const schedulerCalendarViewTranslationMap: Map<schedulerCalendarView, string>;
export declare const scheduleWeekDays: Array<SchedulerWeekDay>;
export interface CustomSchedulerEventType {
    name: string;
    value: string;
    originator: boolean;
    msgType: boolean;
    metadata: boolean;
    template: string;
}
export interface SchedulerEventsWidgetSettings {
    title: string;
    displayCreatedTime: boolean;
    displayType: boolean;
    displayCustomer: boolean;
    displayPagination: boolean;
    defaultPageSize: number;
    defaultSortOrder: string;
    noDataDisplayMessage: string;
    enabledViews: 'both' | 'list' | 'calendar';
    forceDefaultEventType: string;
    customEventTypes: CustomSchedulerEventType[];
}
export interface SchedulerWeekDay {
    label: string;
    tooltip: string;
}
