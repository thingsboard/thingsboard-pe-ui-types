import { ChangeDetectorRef, EventEmitter, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomMobilePage, DefaultMobilePage, MobilePageType } from '@shared/models/mobile-app.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MobilePageItemRowComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private translate;
    disabled: boolean;
    maxIconNameBlockWidth: number;
    hideItems: Observable<void>;
    pageRemoved: EventEmitter<any>;
    iconNameBlockWidth: string;
    itemInfo: string;
    isDefaultMenuItem: boolean;
    isCustomMenuItem: boolean;
    isCleanupEnabled: boolean;
    mobilePageRowForm: import("@angular/forms").FormGroup<{
        visible: import("@angular/forms").FormControl<boolean>;
        icon: import("@angular/forms").FormControl<string>;
        label: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<MobilePageType>;
    }>;
    private propagateChange;
    private destroyRef;
    private defaultMobilePages;
    private defaultItemName;
    private modelValue;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, translate: TranslateService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: DefaultMobilePage | CustomMobilePage): void;
    cleanup(): void;
    delete(): void;
    edit($event: Event, matButton: MatButton): void;
    get itemName(): string;
    get itemNamePlaceholder(): string;
    private updateIconNameBlockWidth;
    private updateModel;
    private updateCleanupState;
    private updateItemInfo;
    private afterPageEdit;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobilePageItemRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobilePageItemRowComponent, "tb-mobile-menu-item-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "maxIconNameBlockWidth": { "alias": "maxIconNameBlockWidth"; "required": false; }; "hideItems": { "alias": "hideItems"; "required": false; }; }, { "pageRemoved": "pageRemoved"; }, never, [".tb-custom-menu-item-row-prefix"], false, never>;
    static ngAcceptInputType_disabled: unknown;
    static ngAcceptInputType_maxIconNameBlockWidth: unknown;
}
