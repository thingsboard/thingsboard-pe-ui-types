import { TbMeasure } from '@shared/models/unit.models';
export type TorqueUnits = TorqueMetricUnits | TorqueImperialUnits;
export type TorqueMetricUnits = 'Nm';
export type TorqueImperialUnits = 'lbf-ft' | 'in·lbf';
declare const measure: TbMeasure<TorqueUnits>;
export default measure;
