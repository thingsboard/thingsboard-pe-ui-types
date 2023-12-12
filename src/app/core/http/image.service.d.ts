import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { ImageResourceInfo, ImageResourceType, ImageExportData } from '@shared/models/resource.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class ImageService {
    private http;
    private sanitizer;
    constructor(http: HttpClient, sanitizer: DomSanitizer);
    uploadImage(file: File, title: string, config?: RequestConfig): Observable<ImageResourceInfo>;
    updateImage(type: ImageResourceType, key: string, file: File, config?: RequestConfig): Observable<ImageResourceInfo>;
    updateImageInfo(imageInfo: ImageResourceInfo, config?: RequestConfig): Observable<ImageResourceInfo>;
    getImages(pageLink: PageLink, includeSystemImages?: boolean, config?: RequestConfig): Observable<PageData<ImageResourceInfo>>;
    getImageInfo(type: ImageResourceType, key: string, config?: RequestConfig): Observable<ImageResourceInfo>;
    getImageDataUrl(imageUrl: string, preview?: boolean, asString?: boolean, emptyUrl?: string): Observable<SafeUrl | string>;
    getLoginImageDataUrl(imageUrl: string, faviconElseLogo: boolean, asString?: boolean, emptyUrl?: string): Observable<SafeUrl | string>;
    private loadImageDataUrl;
    resolveImageUrl(imageUrl: string, preview?: boolean, asString?: boolean, emptyUrl?: string): Observable<SafeUrl | string>;
    resolveLoginImageUrl(imageUrl: string, faviconElseLogo: boolean, asString?: boolean, emptyUrl?: string): Observable<SafeUrl | string>;
    downloadImage(type: ImageResourceType, key: string): Observable<any>;
    deleteImage(type: ImageResourceType, key: string, force?: boolean, config?: RequestConfig): Observable<Object>;
    exportImage(type: ImageResourceType, key: string, config?: RequestConfig): Observable<ImageExportData>;
    importImage(imageData: ImageExportData, config?: RequestConfig): Observable<ImageResourceInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImageService>;
}
