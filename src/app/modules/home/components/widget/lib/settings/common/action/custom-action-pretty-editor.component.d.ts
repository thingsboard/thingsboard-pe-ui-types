import { AfterViewInit, ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomActionDescriptor } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class CustomActionPrettyEditorComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    disabled: boolean;
    action: CustomActionDescriptor;
    fullscreen: boolean;
    leftPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    rightPanelElmRef: QueryList<ElementRef<HTMLElement>>;
    customPrettyActionEditorCompleter: import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    private propagateChange;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initSplitLayout;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: CustomActionDescriptor): void;
    onActionUpdated(valid?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomActionPrettyEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomActionPrettyEditorComponent, "tb-custom-action-pretty-editor", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
