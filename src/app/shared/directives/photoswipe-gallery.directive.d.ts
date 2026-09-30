import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PhotoSwipeGalleryDirective implements OnInit, OnDestroy {
    private elementRef;
    galleryChildrenSelector: string;
    imageCaptionSelector: string;
    private lightbox;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initPhotoSwipeGalleryStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoSwipeGalleryDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PhotoSwipeGalleryDirective, "[tbPhotoSwipeGallery]", never, { "galleryChildrenSelector": { "alias": "galleryChildrenSelector"; "required": false; }; "imageCaptionSelector": { "alias": "imageCaptionSelector"; "required": false; }; }, {}, never, never, false, never>;
}
