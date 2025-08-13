import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { ImageReportComponentConfig } from '@shared/models/report-component.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import * as i0 from "@angular/core";
export declare class ImagePreviewComponent extends AbstractReportComponentPreview<ImageReportComponentConfig> implements AfterViewInit, OnDestroy {
    imageEl: import("@angular/core").Signal<ElementRef<any>>;
    private imageResize$;
    imageUrl: string;
    imageWidth: string;
    imageAlign: string;
    onComponentUpdated(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagePreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImagePreviewComponent, "tb-image-preview", never, {}, {}, never, never, false, never>;
}
