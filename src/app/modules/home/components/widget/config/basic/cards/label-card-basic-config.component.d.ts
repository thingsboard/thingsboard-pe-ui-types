import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class LabelCardBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    labelCardWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelCardBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelCardBasicConfigComponent, "tb-label-card-basic-config", never, {}, {}, never, never, false, never>;
}
