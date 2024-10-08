import _moment from 'moment';
export type DateRangeInterval = 'hour' | 'day' | 'week' | 'twoWeeks' | 'month' | 'threeMonths' | 'sixMonths';
export interface DateRangeNavigatorSettings {
    hidePicker: boolean;
    onePanel: boolean;
    autoConfirm: boolean;
    showTemplate: boolean;
    firstDayOfWeek: number;
    hideInterval: boolean;
    initialInterval: DateRangeInterval;
    hideStepSize: boolean;
    stepSize: DateRangeInterval;
    hideLabels: boolean;
    useSessionStorage: boolean;
}
export interface DateIntervalEntry {
    ts: number;
    label: string;
}
export interface DateRangeNavigatorModel {
    chosenLabel?: string;
    startDate?: _moment.Moment;
    endDate?: _moment.Moment;
}
export declare function cloneDateRangeNavigatorModel(model: DateRangeNavigatorModel): DateRangeNavigatorModel;
export declare function getFormattedDate(model: DateRangeNavigatorModel): string;
export declare const dateIntervalsMap: {
    [key: string]: DateIntervalEntry;
};
