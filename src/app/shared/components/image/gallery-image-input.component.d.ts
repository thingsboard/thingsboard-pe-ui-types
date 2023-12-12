import { ChangeDetectorRef, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { ImageResourceInfo } from '@shared/models/resource.models';
import { ImageService } from '@core/http/image.service';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
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
    private cd;
    private renderer;
    private viewContainerRef;
    private popoverService;
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
    constructor(store: Store<AppState>, imageService: ImageService, cd: ChangeDetectorRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, popoverService: TbPopoverService);
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
    toggleGallery($event: Event, browseGalleryButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GalleryImageInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GalleryImageInputComponent, "tb-gallery-image-input", never, { "label": "label"; "required": "required"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
