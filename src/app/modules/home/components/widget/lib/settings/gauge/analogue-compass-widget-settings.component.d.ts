import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatChipInputEvent } from '@angular/material/chips';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class AnalogueCompassWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    readonly separatorKeysCodes: number[];
    analogueCompassWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    majorTicksNamesList(): string[];
    removeMajorTickName(tickName: string): void;
    addMajorTickName(event: MatChipInputEvent): void;
    majorTickNameDrop(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalogueCompassWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalogueCompassWidgetSettingsComponent, "tb-analogue-compass-widget-settings", never, {}, {}, never, never>;
}
