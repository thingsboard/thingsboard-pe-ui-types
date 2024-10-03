import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ImageResourceInfo, ResourceSubType } from '@shared/models/resource.models';
import * as i0 from "@angular/core";
export interface ImageGalleryDialogData {
    imageSubType: ResourceSubType;
}
export declare class ImageGalleryDialogComponent extends DialogComponent<ImageGalleryDialogComponent, ImageResourceInfo> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ImageGalleryDialogData;
    dialogRef: MatDialogRef<ImageGalleryDialogComponent, ImageResourceInfo>;
    constructor(store: Store<AppState>, router: Router, data: ImageGalleryDialogData, dialogRef: MatDialogRef<ImageGalleryDialogComponent, ImageResourceInfo>);
    ngOnInit(): void;
    cancel(): void;
    imageSelected(image: ImageResourceInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageGalleryDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageGalleryDialogComponent, "tb-image-gallery-dialog", never, {}, {}, never, never, false, never>;
}
