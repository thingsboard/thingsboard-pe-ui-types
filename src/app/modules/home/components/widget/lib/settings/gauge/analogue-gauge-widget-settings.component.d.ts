import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class AnalogueGaugeWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    analogueGaugeWidgetSettingsForm: FormGroup;
    ctx: {
        settingsForm: any;
    };
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareHighlightsFormArray;
    highlightsFormArray(): FormArray;
    trackByHighlightControl(index: number, highlightControl: AbstractControl): any;
    removeHighlight(index: number): void;
    addHighlight(): void;
    highlightDrop(event: CdkDragDrop<string[]>): void;
}
