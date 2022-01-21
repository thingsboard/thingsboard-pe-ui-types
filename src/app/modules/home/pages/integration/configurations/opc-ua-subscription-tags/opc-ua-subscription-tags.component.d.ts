import { OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class OpcUaSubscriptionTagsComponent implements OnInit {
    private fb;
    subscriptionTagsForm: FormArray;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    addSubscriptionTag(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaSubscriptionTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaSubscriptionTagsComponent, "tb-opc-ua-subscription-tags", never, { "subscriptionTagsForm": "subscriptionTagsForm"; }, {}, never, never>;
}
