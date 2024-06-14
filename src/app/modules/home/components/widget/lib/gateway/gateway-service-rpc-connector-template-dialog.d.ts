import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, UntypedFormControl } from '@angular/forms';
import { RPCTemplate, SaveRPCTemplateData } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class GatewayServiceRPCConnectorTemplateDialogComponent extends DialogComponent<GatewayServiceRPCConnectorTemplateDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: SaveRPCTemplateData;
    dialogRef: MatDialogRef<GatewayServiceRPCConnectorTemplateDialogComponent, boolean>;
    fb: FormBuilder;
    config: {
        [key: string]: any;
    };
    templates: Array<RPCTemplate>;
    templateNameCtrl: FormControl;
    constructor(store: Store<AppState>, router: Router, data: SaveRPCTemplateData, dialogRef: MatDialogRef<GatewayServiceRPCConnectorTemplateDialogComponent, boolean>, fb: FormBuilder);
    validateDuplicateName(c: UntypedFormControl): boolean;
    close(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayServiceRPCConnectorTemplateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayServiceRPCConnectorTemplateDialogComponent, "gateway-service-rpc-connector-template-dialog", never, {}, {}, never, never, false, never>;
}
