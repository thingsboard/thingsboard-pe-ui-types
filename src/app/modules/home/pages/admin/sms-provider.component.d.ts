import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminSettings, SmsProviderConfiguration } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class SmsProviderComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private adminService;
    private dialog;
    fb: FormBuilder;
    smsProvider: FormGroup;
    adminSettings: AdminSettings<SmsProviderConfiguration>;
    constructor(store: Store<AppState>, router: Router, adminService: AdminService, dialog: MatDialog, fb: FormBuilder);
    ngOnInit(): void;
    buildSmsProviderForm(): void;
    sendTestSms(): void;
    save(): void;
    confirmForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SmsProviderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SmsProviderComponent, "tb-sms-provider", never, {}, {}, never, never>;
}
