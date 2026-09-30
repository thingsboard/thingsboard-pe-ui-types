import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlHolder } from '@shared/pipe/image.pipe';
import * as i0 from "@angular/core";
export declare class SafeSvgPipe implements PipeTransform {
    private http;
    private sanitizer;
    constructor(http: HttpClient, sanitizer: DomSanitizer);
    transform(urlData: string | UrlHolder | SafeUrl): Observable<SafeHtml>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeSvgPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeSvgPipe, "safeSvg", false>;
}
