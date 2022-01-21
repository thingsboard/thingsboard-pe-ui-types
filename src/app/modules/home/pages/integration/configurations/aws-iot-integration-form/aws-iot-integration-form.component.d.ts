import { FormArray, FormControl } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class AwsIotIntegrationFormComponent extends IntegrationFormComponent {
    topicFilters: FormArray;
    downlinkTopicPattern: FormControl;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AwsIotIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AwsIotIntegrationFormComponent, "tb-aws-iot-integration-form", never, { "topicFilters": "topicFilters"; "downlinkTopicPattern": "downlinkTopicPattern"; }, {}, never, never>;
}
