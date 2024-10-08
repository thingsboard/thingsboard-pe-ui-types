import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AttributeService } from '@core/http/attribute.service';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
declare enum JsonInputWidgetMode {
    ATTRIBUTE = "ATTRIBUTE",
    TIME_SERIES = "TIME_SERIES"
}
interface JsonInputWidgetSettings {
    widgetTitle: string;
    widgetMode: JsonInputWidgetMode;
    attributeScope?: AttributeScope;
    showLabel: boolean;
    labelValue?: string;
    attributeRequired: boolean;
    showResultMessage: boolean;
}
export declare class JsonInputWidgetComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private utils;
    private fb;
    private attributeService;
    private translate;
    ctx: WidgetContext;
    settings: JsonInputWidgetSettings;
    private widgetConfig;
    private subscription;
    private datasource;
    labelValue: string;
    datasourceDetected: boolean;
    errorMessage: string;
    isFocused: boolean;
    originalValue: any;
    attributeUpdateFormGroup: UntypedFormGroup;
    toastTargetId: string;
    constructor(store: Store<AppState>, utils: UtilsService, fb: UntypedFormBuilder, attributeService: AttributeService, translate: TranslateService);
    ngOnInit(): void;
    private initializeConfig;
    private validateDatasources;
    private buildForm;
    private updateWidgetData;
    onDataUpdated(): void;
    save(): void;
    discard(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonInputWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonInputWidgetComponent, "tb-json-input-widget ", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
