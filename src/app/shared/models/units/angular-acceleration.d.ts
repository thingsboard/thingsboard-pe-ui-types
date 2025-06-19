import { TbMeasure } from '@shared/models/unit.models';
export type AngularAccelerationMetricUnits = 'rad/s²';
export type AngularAccelerationImperialUnits = 'rpm/s';
export type AngularAccelerationUnits = AngularAccelerationMetricUnits | AngularAccelerationImperialUnits;
declare const measure: TbMeasure<AngularAccelerationUnits>;
export default measure;
