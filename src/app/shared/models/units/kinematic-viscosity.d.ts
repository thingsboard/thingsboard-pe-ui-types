import { TbMeasure } from '@shared/models/unit.models';
export type KinematicViscosityMetricUnits = 'm²/s' | 'cm²/s' | 'St' | 'cSt';
export type KinematicViscosityImperialUnits = 'ft²/s' | 'in²/s';
export type KinematicViscosityUnits = KinematicViscosityMetricUnits | KinematicViscosityImperialUnits;
declare const measure: TbMeasure<KinematicViscosityUnits>;
export default measure;
