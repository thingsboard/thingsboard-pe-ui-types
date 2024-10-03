import { AfterViewInit, OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { OAuth2Client } from '@shared/models/oauth2.models';
import { OAuth2Service } from '@core/http/oauth2.service';
import { ClientComponent } from '@home/pages/admin/oauth2/clients/client.component';
import { ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class ClientDialogComponent extends DialogComponent<ClientDialogComponent, OAuth2Client> implements OnDestroy, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<ClientDialogComponent, OAuth2Client>;
    private oauth2Service;
    private errorStateMatcher;
    submitted: boolean;
    clientComponent: ClientComponent;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ClientDialogComponent, OAuth2Client>, oauth2Service: OAuth2Service, errorStateMatcher: ErrorStateMatcher);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    helpLinkId(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientDialogComponent, [null, null, null, null, { skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClientDialogComponent, "tb-client-dialog", never, {}, {}, never, never, false, never>;
}
