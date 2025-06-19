import { TbMeasure } from '@shared/models/unit.models';
export type TemperatureMetricUnits = '°C' | 'K';
export type TemperatureImperialUnits = '°F' | '°R';
export type TemperatureUnits = TemperatureMetricUnits | TemperatureImperialUnits;
declare const measure: TbMeasure<TemperatureUnits>;
export default measure;
