import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RequestData } from '@shared/models/rpc.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class PersistentAddDialogComponent extends DialogComponent<PersistentAddDialogComponent, RequestData> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<PersistentAddDialogComponent, RequestData>;
    private fb;
    private translate;
    persistentFormGroup: UntypedFormGroup;
    rpcMessageTypeText: string;
    private requestData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<PersistentAddDialogComponent, RequestData>, fb: UntypedFormBuilder, translate: TranslateService);
    save(): void;
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersistentAddDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PersistentAddDialogComponent, "tb-persistent-add-dialog", never, {}, {}, never, never, false, never>;
}
