import { OnDestroy, OnInit } from '@angular/core';
import { IntegrationFormComponent } from '@home/pages/integration/configurations/integration-form.component';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AzureEventHubIntegrationFormComponent extends IntegrationFormComponent implements OnInit, OnDestroy {
    downlinkConverterIdControl: AbstractControl;
    iotHubNameRequired: boolean;
    downlinkConverterChangeSubscription: Subscription;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected onIntegrationFormSet(): void;
    downlinkConverterIdChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AzureEventHubIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AzureEventHubIntegrationFormComponent, "tb-azure-event-hub-integration-form", never, { "downlinkConverterIdControl": "downlinkConverterIdControl"; }, {}, never, never>;
}
