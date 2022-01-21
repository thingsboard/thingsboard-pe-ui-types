import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class TtnIntegrationFormComponent extends IntegrationFormComponent {
    private fb;
    topicFilters: FormGroup;
    downlinkTopicPattern: FormControl;
    integrationType: IntegrationType;
    private downlinkPattern;
    hostTypes: string[];
    hostRegion: FormControl;
    hostCustom: FormControl;
    apiVersion: FormControl;
    currentHostType: FormControl;
    hostRegionSuffix: string;
    V3_DOWNLINK_TOPIC_PATTERN: string;
    V2_DOWNLINK_TOPIC_PATTERN: string;
    V3_UPLINK_TOPIC: {
        filter: string;
        qos: number;
    };
    V2_UPLINK_TOPIC: {
        filter: string;
        qos: number;
    };
    constructor(fb: FormBuilder);
    onIntegrationFormSet(): void;
    updateFormState(disabled: boolean): void;
    updateTopicsState(apiVersion: boolean): void;
    updateDownlinkPattern(name: string): void;
    updateControlsState(): void;
    updateHostParams(hostType: string): void;
    buildHostName(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TtnIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TtnIntegrationFormComponent, "tb-ttn-integration-form", never, { "topicFilters": "topicFilters"; "downlinkTopicPattern": "downlinkTopicPattern"; "integrationType": "integrationType"; }, {}, never, never>;
}
