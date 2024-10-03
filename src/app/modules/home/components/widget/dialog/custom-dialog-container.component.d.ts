import { MatDialogRef } from '@angular/material/dialog';
import { OnDestroy, Type, ViewContainerRef } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { CustomDialogComponent } from '@home/components/widget/dialog/custom-dialog.component';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface CustomDialogContainerData {
    controller: (instance: CustomDialogComponent) => void;
    data?: any;
    customComponentType: Type<CustomDialogComponent>;
}
export declare class CustomDialogContainerComponent extends DialogComponent<CustomDialogContainerComponent> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    viewContainerRef: ViewContainerRef;
    dialogRef: MatDialogRef<CustomDialogContainerComponent>;
    private dialogService;
    private translate;
    data: CustomDialogContainerData;
    height: string;
    private readonly customComponentRef;
    constructor(store: Store<AppState>, router: Router, viewContainerRef: ViewContainerRef, dialogRef: MatDialogRef<CustomDialogContainerComponent>, dialogService: DialogService, translate: TranslateService, data: CustomDialogContainerData);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDialogContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomDialogContainerComponent, "tb-custom-dialog-container-component", never, {}, {}, never, never, false, never>;
}
