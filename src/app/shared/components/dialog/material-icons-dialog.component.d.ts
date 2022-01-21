import { AfterViewInit, OnInit, QueryList } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface MaterialIconsDialogData {
    icon: string;
}
export declare class MaterialIconsDialogComponent extends DialogComponent<MaterialIconsDialogComponent, string> implements OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: MaterialIconsDialogData;
    private utils;
    dialogRef: MatDialogRef<MaterialIconsDialogComponent, string>;
    iconButtons: QueryList<HTMLElement>;
    selectedIcon: string;
    icons$: Observable<Array<string>>;
    loadingIcons$: Observable<boolean>;
    showAllControl: FormControl;
    constructor(store: Store<AppState>, router: Router, data: MaterialIconsDialogData, utils: UtilsService, dialogRef: MatDialogRef<MaterialIconsDialogComponent, string>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectIcon(icon: string): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaterialIconsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MaterialIconsDialogComponent, "tb-material-icons-dialog", never, {}, {}, never, never>;
}
