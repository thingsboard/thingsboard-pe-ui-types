import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class DigitalGaugeWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    digitalGaugeWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareLevelColorFormArray;
    private prepareFixedLevelColorFormArray;
    private prepareTicksValueFormArray;
    levelColorsFormArray(): FormArray;
    trackByLevelColor(index: number, levelColorControl: AbstractControl): any;
    removeLevelColor(index: number): void;
    addLevelColor(): void;
    levelColorDrop(event: CdkDragDrop<string[]>): void;
    fixedLevelColorFormArray(): FormArray;
    trackByFixedLevelColor(index: number, fixedLevelColorControl: AbstractControl): any;
    removeFixedLevelColor(index: number): void;
    addFixedLevelColor(): void;
    fixedLevelColorDrop(event: CdkDragDrop<string[]>): void;
    tickValuesFormArray(): FormArray;
    trackByTickValue(index: number, tickValueControl: AbstractControl): any;
    removeTickValue(index: number): void;
    addTickValue(): void;
    tickValueDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DigitalGaugeWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DigitalGaugeWidgetSettingsComponent, "tb-digital-gauge-widget-settings", never, {}, {}, never, never>;
}
