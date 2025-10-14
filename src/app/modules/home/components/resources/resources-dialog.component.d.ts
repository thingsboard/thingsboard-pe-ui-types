import { AfterViewInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroupDirective, NgForm, UntypedFormControl } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { ResourcesLibraryComponent } from "@home/components/resources/resources-library.component";
import { ErrorStateMatcher } from "@angular/material/core";
import { Resource, ResourceType } from "@shared/models/resource.models";
import { ResourceService } from "@core/http/resource.service";
import * as i0 from "@angular/core";
export interface ResourcesDialogData {
    resources?: Resource;
    isAdd?: boolean;
}
export declare class ResourcesDialogComponent extends DialogComponent<ResourcesDialogComponent, Resource> implements ErrorStateMatcher, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<ResourcesDialogComponent, Resource>;
    data: ResourcesDialogData;
    private errorStateMatcher;
    private resourceService;
    readonly entityType: typeof EntityType;
    ResourceType: typeof ResourceType;
    isAdd: boolean;
    submitted: boolean;
    resources: Resource;
    resourcesComponent: ResourcesLibraryComponent;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ResourcesDialogComponent, Resource>, data: ResourcesDialogData, errorStateMatcher: ErrorStateMatcher, resourceService: ResourceService);
    ngAfterViewInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesDialogComponent, [null, null, null, null, { skipSelf: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourcesDialogComponent, "tb-resources-dialog", never, {}, {}, never, never, false, never>;
}
