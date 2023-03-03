import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class LabelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    labelWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    private prepareLabelsFormArray;
    labelsFormArray(): UntypedFormArray;
    trackByLabelControl(index: number, labelControl: AbstractControl): any;
    removeLabel(index: number): void;
    addLabel(): void;
    labelDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelWidgetSettingsComponent, "tb-label-widget-settings", never, {}, {}, never, never, false, never>;
}
