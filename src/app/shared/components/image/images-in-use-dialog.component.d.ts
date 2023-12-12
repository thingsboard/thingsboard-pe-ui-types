import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ImageReferences, ImageResourceInfo, ImageResourceInfoWithReferences } from '@shared/models/resource.models';
import { ImagesDatasource } from '@shared/components/image/images-datasource';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface ImagesInUseDialogData {
    multiple: boolean;
    images: ImageResourceInfoWithReferences[];
}
export declare class ImagesInUseDialogComponent extends DialogComponent<ImagesInUseDialogComponent, ImageResourceInfo[]> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ImagesInUseDialogData;
    dialogRef: MatDialogRef<ImagesInUseDialogComponent, ImageResourceInfo[]>;
    translate: TranslateService;
    private renderer;
    private viewContainerRef;
    private popoverService;
    title: string;
    message: string;
    references: ImageReferences;
    dataSource: ImagesDatasource;
    constructor(store: Store<AppState>, router: Router, data: ImagesInUseDialogData, dialogRef: MatDialogRef<ImagesInUseDialogComponent, ImageResourceInfo[]>, translate: TranslateService, renderer: Renderer2, viewContainerRef: ViewContainerRef, popoverService: TbPopoverService);
    ngOnInit(): void;
    cancel(): void;
    delete(): void;
    toggleShowReferences($event: Event, image: ImageResourceInfoWithReferences, referencesButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImagesInUseDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImagesInUseDialogComponent, "tb-images-in-use-dialog", never, {}, {}, never, never, false, never>;
}
