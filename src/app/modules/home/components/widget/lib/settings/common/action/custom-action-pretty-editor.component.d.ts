import { AfterViewInit, ElementRef, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CustomActionDescriptor, WidgetActionType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class CustomActionPrettyEditorComponent implements AfterViewInit, ControlValueAccessor {
    disabled: boolean;
    action: CustomActionDescriptor;
    fullscreen: boolean;
    helpId: string;
    set widgetActionType(type: WidgetActionType);
    leftPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    rightPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    customPrettyActionEditorCompleter: import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    private propagateChange;
    constructor();
    ngAfterViewInit(): void;
    private initSplitLayout;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: CustomActionDescriptor): void;
    onActionUpdated(valid?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionPrettyEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionPrettyEditorComponent, "tb-custom-action-pretty-editor", never, { "disabled": { "alias": "disabled"; "required": false; }; "widgetActionType": { "alias": "widgetActionType"; "required": false; }; }, {}, never, never, false, never>;
}
