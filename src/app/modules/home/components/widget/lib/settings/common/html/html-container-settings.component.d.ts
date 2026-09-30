import { AfterViewInit, DestroyRef, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { HtmlContainerWidgetSettings, HtmlContainerWidgetType } from '@home/components/widget/lib/html/html-container-widget.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export declare class HtmlContainerSettingsComponent implements OnInit, AfterViewInit, ControlValueAccessor, Validator {
    private fb;
    private widgetService;
    private destroyRef;
    HtmlContainerWidgetType: typeof HtmlContainerWidgetType;
    functionScopeVariables: string[];
    get containerFunctionEditorCompleter(): import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    hostClass: string;
    leftPanelElmRef: ElementRef;
    rightPanelElmRef: ElementRef;
    disabled: boolean;
    fullscreen: boolean;
    tabsAnimationDuration: string;
    htmlContainerSettingsForm: UntypedFormGroup;
    private modelValue;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    get resourcesFormArray(): UntypedFormArray;
    get resourcesControls(): UntypedFormGroup[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initSplitLayout;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: HtmlContainerWidgetSettings): void;
    validate(_c: UntypedFormControl): {
        htmlContainerSettings: {
            valid: boolean;
        };
    };
    addResource(): void;
    removeResource(index: number): void;
    toggleFullScreen(): void;
    private propagateChange;
    private updateModel;
    private updateResources;
    private buildResourceFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlContainerSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HtmlContainerSettingsComponent, "tb-html-container-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
