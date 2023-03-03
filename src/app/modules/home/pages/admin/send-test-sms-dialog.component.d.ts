import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { SmsProviderConfiguration } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface SendTestSmsDialogData {
    smsProviderConfiguration: SmsProviderConfiguration;
}
export declare class SendTestSmsDialogComponent extends DialogComponent<SendTestSmsDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: SendTestSmsDialogData;
    private adminService;
    private translate;
    dialogRef: MatDialogRef<SendTestSmsDialogComponent>;
    fb: UntypedFormBuilder;
    phoneNumberPattern: RegExp;
    sendTestSmsFormGroup: UntypedFormGroup;
    smsProviderConfiguration: SmsProviderConfiguration;
    constructor(store: Store<AppState>, router: Router, data: SendTestSmsDialogData, adminService: AdminService, translate: TranslateService, dialogRef: MatDialogRef<SendTestSmsDialogComponent>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    close(): void;
    sendTestSms(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SendTestSmsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SendTestSmsDialogComponent, "tb-send-test-sms-dialog", never, {}, {}, never, never, false, never>;
}
