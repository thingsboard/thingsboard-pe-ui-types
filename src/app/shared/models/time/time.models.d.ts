import { TimeService } from '@core/services/time.service';
import * as moment_ from 'moment';
export declare const SECOND = 1000;
export declare const MINUTE: number;
export declare const HOUR: number;
export declare const DAY: number;
export declare const WEEK: number;
export declare const YEAR: number;
export type ComparisonDuration = moment_.unitOfTime.DurationConstructor | 'previousInterval' | 'customInterval';
export declare enum TimewindowType {
    REALTIME = 0,
    HISTORY = 1
}
export declare enum RealtimeWindowType {
    LAST_INTERVAL = 0,
    INTERVAL = 1
}
export declare enum HistoryWindowType {
    LAST_INTERVAL = 0,
    FIXED = 1,
    INTERVAL = 2,
    FOR_ALL_TIME = 3
}
export interface IntervalWindow {
    interval?: number;
    timewindowMs?: number;
    quickInterval?: QuickTimeInterval;
}
export interface RealtimeWindow extends IntervalWindow {
    realtimeType?: RealtimeWindowType;
}
export interface FixedWindow {
    startTimeMs: number;
    endTimeMs: number;
}
export interface HistoryWindow extends IntervalWindow {
    historyType?: HistoryWindowType;
    fixedTimewindow?: FixedWindow;
}
export declare enum AggregationType {
    MIN = "MIN",
    MAX = "MAX",
    AVG = "AVG",
    SUM = "SUM",
    COUNT = "COUNT",
    NONE = "NONE"
}
export declare const aggregationTranslations: Map<AggregationType, string>;
export interface Aggregation {
    interval?: number;
    type: AggregationType;
    limit: number;
}
export interface Timewindow {
    displayValue?: string;
    displayTimezoneAbbr?: string;
    hideInterval?: boolean;
    hideQuickInterval?: boolean;
    hideLastInterval?: boolean;
    hideAggregation?: boolean;
    hideAggInterval?: boolean;
    hideTimezone?: boolean;
    selectedTab?: TimewindowType;
    realtime?: RealtimeWindow;
    history?: HistoryWindow;
    aggregation?: Aggregation;
    timezone?: string;
}
export interface SubscriptionAggregation extends Aggregation {
    interval?: number;
    timeWindow?: number;
    stateData?: boolean;
}
export interface SubscriptionTimewindow {
    startTs?: number;
    quickInterval?: QuickTimeInterval;
    timezone?: string;
    tsOffset?: number;
    realtimeWindowMs?: number;
    fixedWindow?: FixedWindow;
    aggregation?: SubscriptionAggregation;
    timeForComparison?: ComparisonDuration;
}
export interface WidgetTimewindow {
    minTime?: number;
    maxTime?: number;
    interval?: number;
    timezone?: string;
    stDiff?: number;
}
export declare enum QuickTimeInterval {
    YESTERDAY = "YESTERDAY",
    DAY_BEFORE_YESTERDAY = "DAY_BEFORE_YESTERDAY",
    THIS_DAY_LAST_WEEK = "THIS_DAY_LAST_WEEK",
    PREVIOUS_WEEK = "PREVIOUS_WEEK",
    PREVIOUS_WEEK_ISO = "PREVIOUS_WEEK_ISO",
    PREVIOUS_MONTH = "PREVIOUS_MONTH",
    PREVIOUS_QUARTER = "PREVIOUS_QUARTER",
    PREVIOUS_HALF_YEAR = "PREVIOUS_HALF_YEAR",
    PREVIOUS_YEAR = "PREVIOUS_YEAR",
    CURRENT_HOUR = "CURRENT_HOUR",
    CURRENT_DAY = "CURRENT_DAY",
    CURRENT_DAY_SO_FAR = "CURRENT_DAY_SO_FAR",
    CURRENT_WEEK = "CURRENT_WEEK",
    CURRENT_WEEK_ISO = "CURRENT_WEEK_ISO",
    CURRENT_WEEK_SO_FAR = "CURRENT_WEEK_SO_FAR",
    CURRENT_WEEK_ISO_SO_FAR = "CURRENT_WEEK_ISO_SO_FAR",
    CURRENT_MONTH = "CURRENT_MONTH",
    CURRENT_MONTH_SO_FAR = "CURRENT_MONTH_SO_FAR",
    CURRENT_QUARTER = "CURRENT_QUARTER",
    CURRENT_QUARTER_SO_FAR = "CURRENT_QUARTER_SO_FAR",
    CURRENT_HALF_YEAR = "CURRENT_HALF_YEAR",
    CURRENT_HALF_YEAR_SO_FAR = "CURRENT_HALF_YEAR_SO_FAR",
    CURRENT_YEAR = "CURRENT_YEAR",
    CURRENT_YEAR_SO_FAR = "CURRENT_YEAR_SO_FAR"
}
export declare const QuickTimeIntervalTranslationMap: Map<QuickTimeInterval, string>;
export declare const forAllTimeInterval: () => Timewindow;
export declare const historyInterval: (timewindowMs: number) => Timewindow;
export declare const defaultTimewindow: (timeService: TimeService) => Timewindow;
export declare const initModelFromDefaultTimewindow: (value: Timewindow, quickIntervalOnly: boolean, historyOnly: boolean, timeService: TimeService) => Timewindow;
export declare const toHistoryTimewindow: (timewindow: Timewindow, startTimeMs: number, endTimeMs: number, interval: number, timeService: TimeService) => Timewindow;
export declare const timewindowTypeChanged: (newTimewindow: Timewindow, oldTimewindow: Timewindow) => boolean;
export declare const getTimezone: (tz: string) => moment_.Moment;
export declare const calculateTsOffset: (timezone?: string) => number;
export declare const isHistoryTypeTimewindow: (timewindow: Timewindow) => boolean;
export declare const getCurrentTime: (tz?: string) => moment_.Moment;
export declare const calculateIntervalStartTime: (interval: QuickTimeInterval, currentDate: moment_.Moment) => moment_.Moment;
export declare const calculateIntervalEndTime: (interval: QuickTimeInterval, startDate: moment_.Moment, tz?: string) => number;
export declare const calculateIntervalStartEndTime: (interval: QuickTimeInterval, tz?: string) => [number, number];
export declare const createSubscriptionTimewindow: (timewindow: Timewindow, stDiff: number, stateData: boolean, timeService: TimeService) => SubscriptionTimewindow;
export declare const quickTimeIntervalPeriod: (interval: QuickTimeInterval) => number;
export declare const calculateIntervalComparisonStartTime: (interval: QuickTimeInterval, startDate: moment_.Moment) => moment_.Moment;
export declare const calculateIntervalComparisonEndTime: (interval: QuickTimeInterval, comparisonStartDate: moment_.Moment, endDate: moment_.Moment) => number;
export declare const createTimewindowForComparison: (subscriptionTimewindow: SubscriptionTimewindow, timeUnit: ComparisonDuration, customIntervalValue: number) => SubscriptionTimewindow;
export declare const cloneSelectedTimewindow: (timewindow: Timewindow) => Timewindow;
export interface TimeInterval {
    name: string;
    translateParams: {
        [key: string]: any;
    };
    value: number;
}
export declare const defaultTimeIntervals: TimeInterval[];
export declare enum TimeUnit {
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS"
}
export declare enum TimeUnitMilli {
    MILLISECONDS = "MILLISECONDS"
}
export type FullTimeUnit = TimeUnit | TimeUnitMilli;
export declare const timeUnitTranslationMap: Map<FullTimeUnit, string>;
export interface TimezoneInfo {
    id: string;
    name: string;
    offset: string;
    nOffset: number;
    abbr: string;
}
export declare const getTimezones: () => TimezoneInfo[];
export declare const getDefaultTimezone: () => string;
export declare const getTimezoneInfo: (timezoneId: string, defaultTimezoneId?: string, userTimezoneByDefault?: boolean) => TimezoneInfo;
export declare const getDefaultTimezoneInfo: () => TimezoneInfo;
export declare const getUserZone: () => moment_.MomentZone;
export declare const getTime: (ts: number, tz?: string) => moment_.Moment;
export declare const getCurrentTimeForComparison: (timeForComparison: moment_.unitOfTime.DurationConstructor, tz?: string) => moment_.Moment;
