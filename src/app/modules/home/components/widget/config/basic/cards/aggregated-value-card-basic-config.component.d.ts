import { ChangeDetectorRef, Injector } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { Datasource } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class AggregatedValueCardBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private cd;
    private $injector;
    private fb;
    get datasource(): Datasource;
    get keyName(): string;
    aggregatedValueCardWidgetConfigForm: UntypedFormGroup;
    datePreviewFn: any;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, cd: ChangeDetectorRef, $injector: Injector, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getValues;
    private setValues;
    private getCardButtons;
    private setCardButtons;
    private _datePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatedValueCardBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregatedValueCardBasicConfigComponent, "tb-aggregated-value-card-basic-config", never, {}, {}, never, never, false, never>;
}
