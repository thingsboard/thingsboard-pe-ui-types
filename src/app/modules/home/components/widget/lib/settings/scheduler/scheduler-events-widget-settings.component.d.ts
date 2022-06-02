import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SchedulerEventsWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    schedulerEventsWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareCustomEventTypesFormArray;
    customEventTypesFormArray(): FormArray;
    trackByCustomEventType(index: number, customEventTypeControl: AbstractControl): any;
    removeCustomEventType(index: number): void;
    addCustomEventType(): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventsWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventsWidgetSettingsComponent, "tb-scheduler-events-widget-settings", never, {}, {}, never, never>;
}
