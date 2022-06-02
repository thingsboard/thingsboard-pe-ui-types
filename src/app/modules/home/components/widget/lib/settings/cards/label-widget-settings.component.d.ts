import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class LabelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    labelWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareLabelsFormArray;
    labelsFormArray(): FormArray;
    trackByLabelControl(index: number, labelControl: AbstractControl): any;
    removeLabel(index: number): void;
    addLabel(): void;
    labelDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelWidgetSettingsComponent, "tb-label-widget-settings", never, {}, {}, never, never>;
}
