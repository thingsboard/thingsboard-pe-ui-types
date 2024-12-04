import { OnInit } from '@angular/core';
import { AggregationType } from '@shared/models/time/time.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class AggregationOptionsConfigPanelComponent implements OnInit {
    private fb;
    allowedAggregationTypes: Array<AggregationType>;
    onClose: (result: Array<AggregationType> | null) => void;
    popoverComponent: TbPopoverComponent;
    aggregationOptionsConfigForm: FormGroup;
    aggregationTypes: typeof AggregationType;
    allAggregationTypes: Array<AggregationType>;
    aggregationTypesTranslations: Map<AggregationType, string>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    update(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregationOptionsConfigPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregationOptionsConfigPanelComponent, "tb-aggregation-options-config-panel", never, { "allowedAggregationTypes": { "alias": "allowedAggregationTypes"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
