import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface Lwm2mObjectAddInstancesData {
    instancesId: Set<number>;
    objectName?: string;
    objectId?: number;
}
export declare class Lwm2mObjectAddInstancesDialogComponent extends DialogComponent<Lwm2mObjectAddInstancesDialogComponent, object> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: Lwm2mObjectAddInstancesData;
    dialogRef: MatDialogRef<Lwm2mObjectAddInstancesDialogComponent, object>;
    fb: UntypedFormBuilder;
    instancesFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: Lwm2mObjectAddInstancesData, dialogRef: MatDialogRef<Lwm2mObjectAddInstancesDialogComponent, object>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObjectAddInstancesDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObjectAddInstancesDialogComponent, "tb-lwm2m-object-add-instances", never, {}, {}, never, never, false, never>;
}
