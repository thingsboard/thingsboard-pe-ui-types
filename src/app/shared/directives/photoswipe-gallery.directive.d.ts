import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PhotoSwipeGalleryDirective implements OnInit, OnDestroy {
    private elementRef;
    private ngZone;
    galleryChildrenSelector: string;
    imageCaptionSelector: string;
    readonly lightboxOpened: EventEmitter<void>;
    readonly lightboxClosed: EventEmitter<void>;
    /** The slide the lightbox moved to, emitted while it is still open. */
    readonly slideChanged: EventEmitter<number>;
    private lightbox;
    private closeOnOpened;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Escape closes the image only, not a mat-dialog behind it. Runs in the capture phase, ahead of
     * the CDK overlay, and closes PhotoSwipe itself: stopping propagation also keeps the key from
     * PhotoSwipe's own bubble-phase handler on document.
     */
    private readonly onKeydownCapture;
    private readonly onScrollEvent;
    /**
     * Escape interception plus the page scroll lock. PhotoSwipe does not lock page scroll, and the
     * scroller may be the page or a dialog pane, so the wheel and touch events are blocked instead.
     * Outside the zone, since touchmove fires at ~60 Hz during a pinch or pan.
     */
    private attachDocumentListeners;
    private detachDocumentListeners;
    private initPhotoSwipeGalleryStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoSwipeGalleryDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PhotoSwipeGalleryDirective, "[tbPhotoSwipeGallery]", never, { "galleryChildrenSelector": { "alias": "galleryChildrenSelector"; "required": false; }; "imageCaptionSelector": { "alias": "imageCaptionSelector"; "required": false; }; }, { "lightboxOpened": "lightboxOpened"; "lightboxClosed": "lightboxClosed"; "slideChanged": "slideChanged"; }, never, never, false, never>;
}
