import { OnInit, DestroyRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrendzSettingsService } from '@core/http/trendz-settings.service';
import { TrendzSettings } from '@shared/models/trendz-settings.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";
import * as i0 from "@angular/core";
export declare class TrendzSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private fb;
    private trendzSettingsService;
    private destroyRef;
    private userPermissionsService;
    readonly: boolean;
    trendzSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder, trendzSettingsService: TrendzSettingsService, destroyRef: DestroyRef, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    toggleUrlRequired(enabled: boolean): void;
    setTrendzSettings(trendzSettings: TrendzSettings): void;
    confirmForm(): FormGroup;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendzSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TrendzSettingsComponent, "tb-trendz-settings", never, {}, {}, never, never, false, never>;
}
