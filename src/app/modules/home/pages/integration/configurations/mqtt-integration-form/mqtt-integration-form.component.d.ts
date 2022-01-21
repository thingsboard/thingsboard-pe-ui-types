import { FormControl, FormGroup } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class MqttIntegrationFormComponent extends IntegrationFormComponent {
    topicFilters: FormGroup;
    downlinkTopicPattern: FormControl;
    mqttCredentialTypes: {
        anonymous: {
            value: string;
            name: string;
        };
        basic: {
            value: string;
            name: string;
        };
        'cert.PEM': {
            value: string;
            name: string;
        };
    };
    constructor();
    onIntegrationFormSet(): void;
    mqttCredentialsTypeChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttIntegrationFormComponent, "tb-mqtt-integration-form", never, { "topicFilters": "topicFilters"; "downlinkTopicPattern": "downlinkTopicPattern"; }, {}, never, never>;
}
