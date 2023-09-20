import { AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WidgetContext } from '@home/models/widget-component.models';
import { ContentType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class GatewayServiceRPCComponent implements AfterViewInit {
    private fb;
    private dialog;
    ctx: WidgetContext;
    contentTypes: typeof ContentType;
    dialogRef: MatDialogRef<any>;
    commandForm: FormGroup;
    isConnector: boolean;
    RPCCommands: Array<string>;
    private connectorType;
    constructor(fb: FormBuilder, dialog: MatDialog);
    ngAfterViewInit(): void;
    sendCommand(): void;
    openEditJSONDialog($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayServiceRPCComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayServiceRPCComponent, "tb-gateway-service-rpc", never, { "ctx": "ctx"; "dialogRef": "dialogRef"; }, {}, never, never, false, never>;
}
