import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import * as i0 from "@angular/core";
export type GetImageSrcCallback = (image: HTMLImageElement) => string;
export type SetImageSrcCallback = (image: HTMLImageElement, origUrl: string, newUrl: string) => void;
export declare class HtmlWithImagePipe implements PipeTransform {
    private imagePipe;
    private sanitizer;
    private domParser;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer);
    transform(html: string | HTMLElement, args?: any): Observable<SafeHtml | string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlWithImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HtmlWithImagePipe, "htmlWithImage", false>;
}
