import { NgZone, PipeTransform } from '@angular/core';
import { ImageService } from '@core/http/image.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface UrlHolder {
    url?: string;
}
export declare class ImagePipe implements PipeTransform {
    private imageService;
    private sanitizer;
    private zone;
    constructor(imageService: ImageService, sanitizer: DomSanitizer, zone: NgZone);
    transform(urlData: string | UrlHolder, args?: any): Observable<SafeUrl | string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ImagePipe, "image", false>;
}
