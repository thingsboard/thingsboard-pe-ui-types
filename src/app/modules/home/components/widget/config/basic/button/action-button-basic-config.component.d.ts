import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { TargetDevice } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class ActionButtonBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get targetDevice(): TargetDevice;
    valueType: typeof ValueType;
    actionButtonWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    private getOnClickAction;
    private setOnClickAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonBasicConfigComponent, "tb-action-button-basic-config", never, {}, {}, never, never, false, never>;
}
