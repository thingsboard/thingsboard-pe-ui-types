import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { WidgetActionDescriptor } from '@shared/models/widget.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class WidgetActionsPanelComponent implements ControlValueAccessor, OnInit {
    private fb;
    private dialog;
    private cd;
    private widgetConfigComponent;
    disabled: boolean;
    actionsFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, dialog: MatDialog, cd: ChangeDetectorRef, widgetConfigComponent: WidgetConfigComponent);
    ngOnInit(): void;
    writeValue(actions?: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    }): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    get widgetActionSourceIds(): Array<string>;
    widgetActionsByActionSourceId(actionSourceId: string): Array<WidgetActionDescriptor>;
    get hasWidgetActions(): boolean;
    manageWidgetActions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionsPanelComponent, "tb-widget-actions-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
