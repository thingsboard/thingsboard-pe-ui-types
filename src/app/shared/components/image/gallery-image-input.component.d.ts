import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { ImageResourceInfo } from '@shared/models/resource.models';
import { ImageService } from '@core/http/image.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare enum ImageLinkType {
    none = "none",
    base64 = "base64",
    external = "external",
    resource = "resource"
}
export declare class GalleryImageInputComponent extends PageComponent implements OnInit, OnDestroy, ControlValueAccessor {
    protected store: Store<AppState>;
    private imageService;
    private dialog;
    private cd;
    label: string;
    required: boolean;
    disabled: boolean;
    imageUrl: string;
    imageResource: ImageResourceInfo;
    loadingImageResource: boolean;
    ImageLinkType: typeof ImageLinkType;
    linkType: ImageLinkType;
    externalLinkControl: FormControl<any>;
    private propagateChange;
    constructor(store: Store<AppState>, imageService: ImageService, dialog: MatDialog, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: string): void;
    private detectLinkType;
    private updateModel;
    private reset;
    clearImage(): void;
    setLink($event: Event): void;
    openGallery($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleryImageInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleryImageInputComponent, "tb-gallery-image-input", never, { "label": { "alias": "label"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
