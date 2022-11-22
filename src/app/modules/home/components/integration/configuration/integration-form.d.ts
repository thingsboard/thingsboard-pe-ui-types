import { OnDestroy, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class IntegrationForm implements OnDestroy {
    executeRemotelyTemplate: TemplateRef<any>;
    genericAdditionalInfoTemplate: TemplateRef<any>;
    disabled: boolean;
    protected destroy$: Subject<unknown>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationForm, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntegrationForm, never, never, { "executeRemotelyTemplate": "executeRemotelyTemplate"; "genericAdditionalInfoTemplate": "genericAdditionalInfoTemplate"; "disabled": "disabled"; }, {}, never>;
}
