import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecuritySettings } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import * as i0 from "@angular/core";
export declare class SecuritySettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private adminService;
    fb: FormBuilder;
    securitySettingsFormGroup: FormGroup;
    securitySettings: SecuritySettings;
    constructor(store: Store<AppState>, router: Router, adminService: AdminService, fb: FormBuilder);
    ngOnInit(): void;
    buildSecuritySettingsForm(): void;
    save(): void;
    confirmForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecuritySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecuritySettingsComponent, "tb-security-settings", never, {}, {}, never, never>;
}
