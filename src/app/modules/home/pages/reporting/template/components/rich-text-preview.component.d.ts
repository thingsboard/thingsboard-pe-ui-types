import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { RichTextReportComponentConfig } from '@shared/models/report-component.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import * as i0 from "@angular/core";
export declare class RichTextPreviewComponent extends AbstractReportComponentPreview<RichTextReportComponentConfig> implements AfterViewInit, OnDestroy {
    richTextEl: import("@angular/core").Signal<ElementRef<any>>;
    private richTextResize$;
    html: string;
    htmlWithImageOptions: {
        customImageUrlCallback: (url: string) => import("rxjs").Observable<string>;
    };
    onComponentUpdated(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RichTextPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RichTextPreviewComponent, "tb-rich-text-preview", never, {}, {}, never, never, false, never>;
}
