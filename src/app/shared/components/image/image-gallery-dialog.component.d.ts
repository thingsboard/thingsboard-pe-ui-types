import { OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ImageService } from '@core/http/image.service';
import { ImageResourceInfo } from '@shared/models/resource.models';
import * as i0 from "@angular/core";
export declare class ImageGalleryDialogComponent extends DialogComponent<ImageGalleryDialogComponent, ImageResourceInfo> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private imageService;
    private dialog;
    dialogRef: MatDialogRef<ImageGalleryDialogComponent, ImageResourceInfo>;
    constructor(store: Store<AppState>, router: Router, imageService: ImageService, dialog: MatDialog, dialogRef: MatDialogRef<ImageGalleryDialogComponent, ImageResourceInfo>);
    ngOnInit(): void;
    cancel(): void;
    imageSelected(image: ImageResourceInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageGalleryDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageGalleryDialogComponent, "tb-image-gallery-dialog", never, {}, {}, never, never, false, never>;
}
