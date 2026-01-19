import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SchedulerEventsWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    schedulerEventsWidgetSettingsForm: UntypedFormGroup;
    pageStepSizeValues: any[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected prepareOutputSettings(settings: WidgetSettings): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    private prepareCustomEventTypesFormArray;
    customEventTypesFormArray(): UntypedFormArray;
    trackByCustomEventType(_index: number, customEventTypeControl: AbstractControl): any;
    removeCustomEventType(index: number): void;
    addCustomEventType(): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger: string): void;
    private getDisplayColumns;
    private setDisplayColumns;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventsWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventsWidgetSettingsComponent, "tb-scheduler-events-widget-settings", never, {}, {}, never, never, false, never>;
}
