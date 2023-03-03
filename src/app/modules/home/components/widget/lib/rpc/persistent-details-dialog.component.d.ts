import { ElementRef, OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DeviceService } from '@core/http/device.service';
import { PersistentRpc, RpcStatus } from '@shared/models/rpc.models';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export interface PersistentDetailsDialogData {
    persistentRequest: PersistentRpc;
    allowDelete: boolean;
}
export declare class PersistentDetailsDialogComponent extends DialogComponent<PersistentDetailsDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private datePipe;
    private translate;
    data: PersistentDetailsDialogData;
    dialogRef: MatDialogRef<PersistentDetailsDialogComponent, boolean>;
    private dialogService;
    private deviceService;
    private fb;
    responseDataEditorElmRef: ElementRef;
    persistentFormGroup: UntypedFormGroup;
    rpcStatusColorsMap: Map<RpcStatus, string>;
    rpcStatus: typeof RpcStatus;
    allowDelete: boolean;
    private persistentUpdated;
    private responseData;
    constructor(store: Store<AppState>, router: Router, datePipe: DatePipe, translate: TranslateService, data: PersistentDetailsDialogData, dialogRef: MatDialogRef<PersistentDetailsDialogComponent, boolean>, dialogService: DialogService, deviceService: DeviceService, fb: UntypedFormBuilder);
    loadPersistentFields(request: PersistentRpc): void;
    ngOnInit(): void;
    close(): void;
    deleteRpcRequest(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersistentDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PersistentDetailsDialogComponent, "tb-persistent-details-dialog", never, {}, {}, never, never, false, never>;
}
