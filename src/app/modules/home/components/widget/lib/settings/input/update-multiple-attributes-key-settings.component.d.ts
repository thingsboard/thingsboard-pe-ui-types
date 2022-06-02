import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class UpdateMultipleAttributesKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    updateMultipleAttributesKeySettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected doUpdateSettings(settingsForm: FormGroup, settings: WidgetSettings): void;
    private prepareSelectOptionsFormArray;
    selectOptionsFormArray(): FormArray;
    trackBySelectOption(index: number, selectOptionControl: AbstractControl): any;
    removeSelectOption(index: number): void;
    addSelectOption(): void;
    selectOptionDrop(event: CdkDragDrop<any[]>): void;
    displayErrorMessagesSection(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateMultipleAttributesKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateMultipleAttributesKeySettingsComponent, "tb-update-multiple-attributes-key-settings", never, {}, {}, never, never>;
}
