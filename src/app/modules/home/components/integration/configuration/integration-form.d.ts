import { OnDestroy, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class IntegrationForm implements OnDestroy {
    executeRemotelyTemplate: TemplateRef<any>;
    genericAdditionalInfoTemplate: TemplateRef<any>;
    disabled: boolean;
    private allowLocalNetworkValue;
    get allowLocalNetwork(): boolean;
    set allowLocalNetwork(value: boolean);
    protected destroy$: Subject<void>;
    protected updatedValidationPrivateNetwork(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationForm, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntegrationForm, never, never, { "executeRemotelyTemplate": { "alias": "executeRemotelyTemplate"; "required": false; }; "genericAdditionalInfoTemplate": { "alias": "genericAdditionalInfoTemplate"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "allowLocalNetwork": { "alias": "allowLocalNetwork"; "required": false; }; }, {}, never, never, false, never>;
}
