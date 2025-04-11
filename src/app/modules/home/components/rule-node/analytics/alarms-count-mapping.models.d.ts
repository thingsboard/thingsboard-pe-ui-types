import { AlarmSeverity, AlarmStatus } from '@shared/public-api';
export interface AlarmsCountMapping {
    target: string;
    typesList?: string[];
    severityList?: AlarmSeverity[];
    statusList?: AlarmStatus[];
    latestInterval: number;
}
