import { ElementRef } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DashboardStateWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    dashboardStateInput: ElementRef;
    dashboardStateWidgetSettingsForm: UntypedFormGroup;
    filteredDashboardStates: Observable<Array<string>>;
    dashboardStateSearchText: string;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    clearDashboardState(value?: string): void;
    private fetchDashboardStates;
    private createFilterForDashboardState;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardStateWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardStateWidgetSettingsComponent, "tb-dashboard-state-widget-settings", never, {}, {}, never, never, false, never>;
}
