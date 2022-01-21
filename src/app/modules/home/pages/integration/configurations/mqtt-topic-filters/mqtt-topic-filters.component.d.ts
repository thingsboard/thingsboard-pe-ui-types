import { FormArray, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MqttTopicFiltersComponent {
    private fb;
    topicFilters: FormArray;
    mqttQoSTypes: {
        value: number;
        name: string;
    }[];
    constructor(fb: FormBuilder);
    addTopicFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttTopicFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttTopicFiltersComponent, "tb-mqtt-topic-filters", never, { "topicFilters": "topicFilters"; }, {}, never, never>;
}
