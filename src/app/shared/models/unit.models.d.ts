import { AbsorbedDoseRateUnits } from '@shared/models/units/absorbed-dose-rate';
import { AccelerationUnits } from '@shared/models/units/acceleration';
import { AcidityUnits } from '@shared/models/units/acidity';
import { AirQualityIndexUnits } from '@shared/models/units/air-quality-index';
import { AmountOfSubstanceUnits } from '@shared/models/units/amount-of-substance';
import { AngleUnits } from '@shared/models/units/angle';
import { AngularAccelerationUnits } from '@shared/models/units/angular-acceleration';
import { AreaUnits } from '@shared/models/units/area';
import { AreaDensityUnits } from '@shared/models/units/area-density';
import { CapacitanceUnits } from '@shared/models/units/capacitance';
import { CatalyticActivityUnits } from '@shared/models/units/catalytic-activity';
import { CatalyticConcentrationUnits } from '@shared/models/units/catalytic-concentration';
import { ChargeUnits } from '@shared/models/units/charge';
import { CurrentDensityUnits } from '@shared/models/units/current-density';
import { DataTransferRateUnits } from '@shared/models/units/data-transfer-rate';
import { DensityUnits } from '@shared/models/units/density';
import { DigitalUnits } from '@shared/models/units/digital';
import { DimensionRatioUnits } from '@shared/models/units/dimension-ratio';
import { DynamicViscosityUnits } from '@shared/models/units/dynamic-viscosity';
import { EarthquakeMagnitudeUnits } from '@shared/models/units/earthquake-magnitude';
import { ElectricChargeDensityUnits } from '@shared/models/units/electric-charge-density';
import { ElectricCurrentUnits } from '@shared/models/units/electric-current';
import { ElectricDipoleMomentUnits } from '@shared/models/units/electric-dipole-moment';
import { ElectricFieldStrengthUnits } from '@shared/models/units/electric-field-strength';
import { ElectricFluxUnits } from '@shared/models/units/electric-flux';
import { ElectricPermittivityUnits } from '@shared/models/units/electric-permittivity';
import { ElectricPolarizabilityUnits } from '@shared/models/units/electric-polarizability';
import { ElectricalConductanceUnits } from '@shared/models/units/electrical-conductance';
import { ElectricalConductivityUnits } from '@shared/models/units/electrical-conductivity';
import { EnergyUnits } from '@shared/models/units/energy';
import { EnergyDensityUnits } from '@shared/models/units/energy-density';
import { ForceUnits } from '@shared/models/units/force';
import { FuelEfficiencyUnits } from '@shared/models/units/fuel-efficiency';
import { FrequencyUnits } from '@shared/models/units/frequency';
import { HeatCapacityUnits } from '@shared/models/units/heat-capacity';
import { IlluminanceUnits } from '@shared/models/units/illuminance';
import { InductanceUnits } from '@shared/models/units/inductance';
import { KinematicViscosityUnits } from '@shared/models/units/kinematic-viscosity';
import { LengthUnits } from '@shared/models/units/length';
import { LightExposureUnits } from '@shared/models/units/light-exposure';
import { LinerChargeDensityUnits } from '@shared/models/units/liner-charge-density';
import { LogarithmicRatioUnits } from '@shared/models/units/logarithmic-ratio';
import { LuminousEfficacyUnits } from '@shared/models/units/luminous-efficacy';
import { LuminousFluxUnits } from '@shared/models/units/luminous-flux';
import { LuminousIntensityUnits } from '@shared/models/units/luminous-intensity';
import { MagneticFieldGradientUnits } from '@shared/models/units/magnetic-field-gradient';
import { MagneticFluxUnits } from '@shared/models/units/magnetic-flux';
import { MagneticFluxDensityUnits } from '@shared/models/units/magnetic-flux-density';
import { MagneticMomentUnits } from '@shared/models/units/magnetic-moment';
import { MagneticPermeabilityUnits } from '@shared/models/units/magnetic-permeability';
import { MassUnits } from '@shared/models/units/mass';
import { MassFractionUnits } from '@shared/models/units/mass-fraction';
import { MolarConcentrationUnits } from '@shared/models/units/molar-concentration';
import { MolarEnergyUnits } from '@shared/models/units/molar-energy';
import { MolarHeatCapacityUnits } from '@shared/models/units/molar-heat-capacity';
import { MolarMassUnits } from '@shared/models/units/molar-mass';
import { NumberConcentrationUnits } from '@shared/models/units/number-concentration';
import { PartsPerMillionUnits } from '@shared/models/units/parts-per-million';
import { PowerUnits } from '@shared/models/units/power';
import { PowerDensityUnits } from '@shared/models/units/power-density';
import { PressureUnits } from '@shared/models/units/pressure';
import { RadianceUnits } from '@shared/models/units/radiance';
import { RadiantIntensityUnits } from '@shared/models/units/radiant-intensity';
import { RadiationDoseUnits } from '@shared/models/units/radiation-dose';
import { RadioactiveDecayUnits } from '@shared/models/units/radioactive-decay';
import { RadioactivityUnits } from '@shared/models/units/radioactivity';
import { RadioactivityConcentrationUnits } from '@shared/models/units/radioactivity-concentration';
import { ReciprocalLengthUnits } from '@shared/models/units/reciprocal-length';
import { ResistanceUnits } from '@shared/models/units/resistance';
import { ReynoldsNumberUnits } from '@shared/models/units/reynolds-number';
import { SignalLevelUnits } from '@shared/models/units/signal-level';
import { SolidAngleUnits } from '@shared/models/units/solid-angle';
import { SpecificEnergyUnits } from '@shared/models/units/specific-energy';
import { SpecificHeatCapacityUnits } from '@shared/models/units/specific-heat-capacity';
import { SpecificHumidityUnits } from '@shared/models/units/specific-humidity';
import { SpecificVolumeUnits } from '@shared/models/units/specific-volume';
import { SpeedUnits } from '@shared/models/units/speed';
import { SurfaceChargeDensityUnits } from '@shared/models/units/surface-charge-density';
import { SurfaceTensionUnits } from '@shared/models/units/surface-tension';
import { TemperatureUnits } from '@shared/models/units/temperature';
import { ThermalConductivityUnits } from '@shared/models/units/thermal-conductivity';
import { TimeUnits } from '@shared/models/units/time';
import { TorqueUnits } from '@shared/models/units/torque';
import { TurbidityUnits } from '@shared/models/units/turbidity';
import { VoltageUnits } from '@shared/models/units/voltage';
import { VolumeUnits } from '@shared/models/units/volume';
import { VolumeFlowUnits } from '@shared/models/units/volume-flow';
import { TranslateService } from '@ngx-translate/core';
export type AllMeasuresUnits = AbsorbedDoseRateUnits | AccelerationUnits | AcidityUnits | AirQualityIndexUnits | AmountOfSubstanceUnits | AngleUnits | AngularAccelerationUnits | AreaUnits | AreaDensityUnits | CapacitanceUnits | CatalyticActivityUnits | CatalyticConcentrationUnits | ChargeUnits | CurrentDensityUnits | DataTransferRateUnits | DensityUnits | DigitalUnits | DimensionRatioUnits | DynamicViscosityUnits | EarthquakeMagnitudeUnits | ElectricChargeDensityUnits | ElectricCurrentUnits | ElectricDipoleMomentUnits | ElectricFieldStrengthUnits | ElectricFluxUnits | ElectricPermittivityUnits | ElectricPolarizabilityUnits | ElectricalConductanceUnits | ElectricalConductivityUnits | EnergyUnits | EnergyDensityUnits | ForceUnits | FrequencyUnits | FuelEfficiencyUnits | HeatCapacityUnits | IlluminanceUnits | InductanceUnits | KinematicViscosityUnits | LengthUnits | LightExposureUnits | LinerChargeDensityUnits | LogarithmicRatioUnits | LuminousEfficacyUnits | LuminousFluxUnits | LuminousIntensityUnits | MagneticFieldGradientUnits | MagneticFluxUnits | MagneticFluxDensityUnits | MagneticMomentUnits | MagneticPermeabilityUnits | MassUnits | MassFractionUnits | MolarConcentrationUnits | MolarEnergyUnits | MolarHeatCapacityUnits | MolarMassUnits | NumberConcentrationUnits | PartsPerMillionUnits | PowerUnits | PowerDensityUnits | PressureUnits | RadianceUnits | RadiantIntensityUnits | RadiationDoseUnits | RadioactiveDecayUnits | RadioactivityUnits | RadioactivityConcentrationUnits | ReciprocalLengthUnits | ResistanceUnits | ReynoldsNumberUnits | SignalLevelUnits | SolidAngleUnits | SpecificEnergyUnits | SpecificHeatCapacityUnits | SpecificHumidityUnits | SpecificVolumeUnits | SpeedUnits | SurfaceChargeDensityUnits | SurfaceTensionUnits | TemperatureUnits | ThermalConductivityUnits | TimeUnits | TorqueUnits | TurbidityUnits | VoltageUnits | VolumeUnits | VolumeFlowUnits;
export type AllMeasures = 'absorbed-dose-rate' | 'acceleration' | 'acidity' | 'air-quality-index' | 'amount-of-substance' | 'angle' | 'angular-acceleration' | 'area' | 'area-density' | 'capacitance' | 'catalytic-activity' | 'catalytic-concentration' | 'charge' | 'current-density' | 'data-transfer-rate' | 'density' | 'digital' | 'dimension-ratio' | 'dynamic-viscosity' | 'earthquake-magnitude' | 'electric-charge-density' | 'electric-current' | 'electric-dipole-moment' | 'electric-field-strength' | 'electric-flux' | 'electric-permittivity' | 'electric-polarizability' | 'electrical-conductance' | 'electrical-conductivity' | 'energy' | 'energy-density' | 'force' | 'frequency' | 'fuel-efficiency' | 'heat-capacity' | 'illuminance' | 'inductance' | 'kinematic-viscosity' | 'length' | 'light-exposure' | 'linear-charge-density' | 'logarithmic-ratio' | 'luminous-efficacy' | 'luminous-flux' | 'luminous-intensity' | 'magnetic-field-gradient' | 'magnetic-flux' | 'magnetic-flux-density' | 'magnetic-moment' | 'magnetic-permeability' | 'mass' | 'mass-fraction' | 'molar-concentration' | 'molar-energy' | 'molar-heat-capacity' | 'molar-mass' | 'number-concentration' | 'parts-per-million' | 'power' | 'power-density' | 'pressure' | 'radiance' | 'radiant-intensity' | 'radiation-dose' | 'radioactive-decay' | 'radioactivity' | 'radioactivity-concentration' | 'reciprocal-length' | 'resistance' | 'reynolds-number' | 'signal-level' | 'solid-angle' | 'specific-energy' | 'specific-heat-capacity' | 'specific-humidity' | 'specific-volume' | 'surface-charge-density' | 'surface-tension' | 'speed' | 'temperature' | 'thermal-conductivity' | 'time' | 'torque' | 'turbidity' | 'voltage' | 'volume' | 'volume-flow';
export type TbUnitConverter = (value: number) => number;
export type UnitInfoGroupByMeasure<TMeasure extends string> = Partial<Record<TMeasure, UnitInfo[]>>;
export interface UnitInfo {
    abbr: string;
    measure: AllMeasures;
    system: UnitSystem;
    name: string;
    tags: string[];
}
export declare enum UnitSystem {
    METRIC = "METRIC",
    IMPERIAL = "IMPERIAL",
    HYBRID = "HYBRID"
}
export declare const UnitSystems: UnitSystem[];
export interface Unit {
    name: string;
    tags?: string[];
    to_anchor: number;
    anchor_shift?: number;
    transform?: (value: number) => number;
}
export type TbUnit = string | TbUnitMapping;
export interface TbUnitMapping {
    from: string;
    METRIC: string;
    IMPERIAL: string;
    HYBRID: string;
}
export type TbMeasure<TUnits extends string> = Partial<Record<UnitSystem, TbMeasureUnits<TUnits>>>;
export interface TbMeasureUnits<TUnits extends string> {
    ratio?: number;
    transform?: (value: number) => number;
    units?: Partial<Record<TUnits, Unit>>;
}
export interface UnitCacheInfo {
    system: UnitSystem;
    measure: AllMeasures;
    unit: Unit;
    abbr: AllMeasuresUnits;
}
export type UnitCache = Map<AllMeasuresUnits | string, UnitCacheInfo>;
export declare class Converter {
    private readonly measureData;
    private unitCache;
    constructor(measures: Record<AllMeasures, TbMeasure<AllMeasuresUnits>>, unitCache: UnitCache);
    getUnitConverter(from: AllMeasuresUnits | string, to: AllMeasuresUnits | string): TbUnitConverter;
    convert(value: number, from: AllMeasuresUnits | string, to: AllMeasuresUnits | string): number;
    getDefaultUnit(measureName: AllMeasures | (string & {}), unitSystem: UnitSystem): AllMeasuresUnits;
    getUnit(abbr: AllMeasuresUnits | string): UnitCacheInfo | null;
    describe(abbr: AllMeasuresUnits | string): UnitInfo;
    listUnits(measureName?: AllMeasures, unitSystem?: UnitSystem): UnitInfo[];
    unitsGroupByMeasure(measureName?: AllMeasures, unitSystem?: UnitSystem, tagFilter?: string): UnitInfoGroupByMeasure<AllMeasures>;
    private describeUnit;
    private isMeasure;
    private getUnitsForMeasure;
}
export declare function getUnitConverter(translate: TranslateService): Converter;
export declare const getSourceTbUnitSymbol: (value: TbUnit | UnitInfo | null) => string;
export declare const isNotEmptyTbUnits: (unit: any) => boolean;
export declare const isTbUnitMapping: (unit: any) => boolean;
export declare const searchUnit: (units: Array<[AllMeasures, Array<UnitInfo>]>, searchText?: string) => Array<[AllMeasures, Array<UnitInfo>]>;
export declare const getTbUnitFromSearch: (value: TbUnit | UnitInfo | null) => TbUnit;
