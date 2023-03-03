import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { AutoCommitSettingsComponent } from '@home/components/vc/auto-commit-settings.component';
import { RepositorySettingsComponent } from '@home/components/vc/repository-settings.component';
import * as i0 from "@angular/core";
export declare class AutoCommitAdminSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    repositorySettingsComponent: RepositorySettingsComponent;
    autoCommitSettingsComponent: AutoCommitSettingsComponent;
    hasRepository$: import("rxjs").Observable<boolean>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCommitAdminSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoCommitAdminSettingsComponent, "tb-auto-commit-admin-settings", never, {}, {}, never, never, false, never>;
}
