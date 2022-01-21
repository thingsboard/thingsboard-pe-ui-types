import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import * as i0 from "@angular/core";
export declare class IbmWatsonIotIntegrationFormComponent extends IntegrationFormComponent implements OnInit {
    topicFilters: FormGroup;
    downlinkTopicPattern: FormControl;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IbmWatsonIotIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IbmWatsonIotIntegrationFormComponent, "tb-ibm-watson-iot-integration-form", never, { "topicFilters": "topicFilters"; "downlinkTopicPattern": "downlinkTopicPattern"; }, {}, never, never>;
}
