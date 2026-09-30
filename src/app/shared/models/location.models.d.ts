import { EntityId } from '@shared/models/id/entity-id';
import { TbFunction } from '@shared/models/js-function.models';
import { ProcessLaunchResultDescriptor } from '@shared/models/widget.models';
export interface LiveTrackingSaveInfo {
    targetName: string | null;
}
export interface MobileLocationResult {
    latitude: number;
    longitude: number;
    accuracy?: number;
}
export declare enum LocationTargetSource {
    CURRENT_ENTITY = "CURRENT_ENTITY",
    CURRENT_USER = "CURRENT_USER",
    ENTITY_ALIAS = "ENTITY_ALIAS"
}
export declare enum LocationTargetIndirection {
    FROM_ATTRIBUTE = "FROM_ATTRIBUTE"
}
export type LocationTargetEntityType = LocationTargetSource | LocationTargetIndirection;
export declare const locationTargetSourceTranslationMap: Map<LocationTargetSource, string>;
export interface LocationTargetEntityConfig {
    type: LocationTargetEntityType;
    aliasName?: string;
    attributeSource?: LocationTargetSource;
    attributeKey?: string;
}
export declare enum LocationTargetEntityMode {
    ENTITY = "ENTITY",
    FROM_ATTRIBUTE = "FROM_ATTRIBUTE"
}
export declare enum LocationKey {
    LATITUDE = "LATITUDE",
    LONGITUDE = "LONGITUDE",
    ACCURACY = "ACCURACY",
    ALTITUDE = "ALTITUDE",
    SPEED = "SPEED",
    HEADING = "HEADING",
    GPS_ACTIVE = "GPS_ACTIVE",
    GPS_TRACKED_BY = "GPS_TRACKED_BY"
}
export declare const locationKeyTranslationMap: Map<LocationKey, string>;
export declare enum LocationKeyValueType {
    ATTRIBUTE = "ATTRIBUTE",
    TIMESERIES = "TIMESERIES"
}
export declare const locationKeyValueTypeTranslationMap: Map<LocationKeyValueType, string>;
export interface LocationKeyMapping {
    argument: LocationKey;
    keyName?: string;
    valueType: LocationKeyValueType;
}
export declare const locationKeyDefaultNameMap: Map<LocationKey, string>;
export declare const locationKeyDefaultValueTypeMap: Map<LocationKey, LocationKeyValueType>;
export declare const mandatoryLocationKeys: LocationKey[];
export declare const getLocationKeys: LocationKey[];
export declare const liveLocationKeys: LocationKey[];
export declare const locationKeyName: (mapping: LocationKeyMapping) => string;
export declare const locationKeyMapping: (argument: LocationKey) => LocationKeyMapping;
export declare const defaultLocationKeyMappings: () => LocationKeyMapping[];
export interface LocationTargetDescriptor {
    targetEntity?: LocationTargetEntityConfig;
    keys?: LocationKeyMapping[];
}
export interface SaveLocationDescriptor extends LocationTargetDescriptor {
    saveToEntity?: boolean;
}
export interface GetLocationDescriptor extends SaveLocationDescriptor {
    processLocationFunction: TbFunction;
}
export declare enum MobileActionLocationAccuracy {
    HIGH = "HIGH",
    BALANCED = "BALANCED",
    LOW = "LOW"
}
export declare const mobileActionLocationAccuracyTranslationMap: Map<MobileActionLocationAccuracy, string>;
export declare const mobileActionLocationAccuracyHintMap: Map<MobileActionLocationAccuracy, string>;
export interface StartLiveLocationDescriptor extends ProcessLaunchResultDescriptor, LocationTargetDescriptor {
    accuracy?: MobileActionLocationAccuracy;
    distanceFilterMeters?: number;
    intervalSeconds?: number;
    maxDurationSeconds?: number;
}
export interface LiveTrackingKey {
    key: LocationKey;
    label: string;
    valueType: LocationKeyValueType;
}
export interface LiveTrackingConfig {
    target: EntityId;
    targetName: string | null;
    dashboard: {
        id: string | null;
        title: string | null;
    };
    keys: LiveTrackingKey[];
    accuracy: MobileActionLocationAccuracy;
    distanceFilterMeters: number | null;
    intervalSeconds: number | null;
    maxDurationSeconds: number | null;
    trackedBy: string | null;
}
export declare enum BrowserGeolocationErrorType {
    unsupported = "unsupported",
    insecureContext = "insecureContext",
    permissionDenied = "permissionDenied",
    positionUnavailable = "positionUnavailable",
    timeout = "timeout"
}
export declare const browserGeolocationErrorTranslationMap: Map<BrowserGeolocationErrorType, string>;
export type SaveBrowserLocationDescriptor = LocationTargetDescriptor;
export declare const defaultSaveBrowserLocationDescriptor: () => SaveBrowserLocationDescriptor;
