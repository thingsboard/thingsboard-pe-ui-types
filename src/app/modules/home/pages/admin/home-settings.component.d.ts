import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { DashboardService } from '@core/http/dashboard.service';
import * as i0 from "@angular/core";
export declare class HomeSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private dashboardService;
    fb: FormBuilder;
    homeSettings: FormGroup;
    constructor(store: Store<AppState>, router: Router, dashboardService: DashboardService, fb: FormBuilder);
    ngOnInit(): void;
    save(): void;
    confirmForm(): FormGroup;
    private setHomeDashboardInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeSettingsComponent, "tb-home-settings", never, {}, {}, never, never>;
}
