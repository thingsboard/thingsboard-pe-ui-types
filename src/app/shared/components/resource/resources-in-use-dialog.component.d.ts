import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ResourceReferences, ResourceInfoWithReferences, ResourceInfo } from '@shared/models/resource.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import { Datasource } from "@shared/models/widget.models";
import * as i0 from "@angular/core";
interface ResourcesInUseDialogDataConfiguration {
    title: string;
    message: string;
    columns: string[];
    deleteText: string;
    selectedText: string;
    datasource?: Datasource;
}
export interface ResourcesInUseDialogData {
    multiple: boolean;
    resources: ResourceInfoWithReferences[];
    configuration: ResourcesInUseDialogDataConfiguration;
}
export declare class ResourcesInUseDialogComponent extends DialogComponent<ResourcesInUseDialogComponent, ResourceInfo[]> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ResourcesInUseDialogData;
    dialogRef: MatDialogRef<ResourcesInUseDialogComponent, ResourceInfo[]>;
    translate: TranslateService;
    private renderer;
    private viewContainerRef;
    private popoverService;
    displayPreview: boolean;
    configuration: ResourcesInUseDialogDataConfiguration;
    references: ResourceReferences;
    dataSource: Datasource;
    constructor(store: Store<AppState>, router: Router, data: ResourcesInUseDialogData, dialogRef: MatDialogRef<ResourcesInUseDialogComponent, ResourceInfo[]>, translate: TranslateService, renderer: Renderer2, viewContainerRef: ViewContainerRef, popoverService: TbPopoverService);
    ngOnInit(): void;
    cancel(): void;
    delete(): void;
    toggleShowReferences($event: Event, resource: ResourceInfoWithReferences, referencesButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesInUseDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourcesInUseDialogComponent, "tb-resources-in-use-dialog", never, {}, {}, never, never, false, never>;
}
export {};
