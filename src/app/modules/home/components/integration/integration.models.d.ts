import { FormControl } from '@angular/forms';
import { IntegrationType, MqttTopicFilter } from '@shared/models/integration.models';
export declare enum ThingsStartHostType {
    Region = 0,
    Custom = 1
}
export declare const ThingsStartHostTypeTranslation: Map<ThingsStartHostType, string>;
export declare const mqttClientIdPatternValidator: import("@angular/forms").ValidatorFn;
export declare const mqttClientIdMaxLengthValidator: import("@angular/forms").ValidatorFn;
export declare enum ttnVersion {
    v2 = 0,
    v3 = 1
}
export interface TtnVersionParameter {
    downlinkPattern: string;
    uplinkTopic: MqttTopicFilter[];
}
export declare const ttnVersionMap: Map<ttnVersion, TtnVersionParameter>;
export declare function integrationEndPointUrl(type: IntegrationType, baseUrl: string, key?: string): string;
export declare function privateNetworkAddressValidator(control: FormControl): {
    [key: string]: any;
} | null;
