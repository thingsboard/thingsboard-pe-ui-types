import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class AnalogueGaugeWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    analogueGaugeWidgetSettingsForm: UntypedFormGroup;
    ctx: {
        settingsForm: any;
    };
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    private prepareHighlightsFormArray;
    highlightsFormArray(): UntypedFormArray;
    trackByHighlightControl(index: number, highlightControl: AbstractControl): any;
    removeHighlight(index: number): void;
    addHighlight(): void;
    highlightDrop(event: CdkDragDrop<string[]>): void;
}
