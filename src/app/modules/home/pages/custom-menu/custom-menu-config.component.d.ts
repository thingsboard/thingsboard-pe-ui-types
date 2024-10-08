import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomMenuConfig, CustomMenuInfo } from '@shared/models/custom-menu.models';
import { AbstractControl, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CustomMenuService } from '@core/http/custom-menu.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { HasDirtyFlag } from '@core/guards/confirm-on-exit.guard';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export declare class CustomMenuConfigComponent extends PageComponent implements OnInit, OnDestroy, HasDirtyFlag {
    protected store: Store<AppState>;
    private fb;
    private router;
    private route;
    private customMenuService;
    private userPermissionsService;
    private dialog;
    private breakpointObserver;
    menuItemsContainer: ElementRef<HTMLElement>;
    private forcePristine;
    private observeBreakpointSubscription;
    private hideItemsSubject;
    get isDirty(): boolean;
    set isDirty(value: boolean);
    hideItems$: import("rxjs").Observable<void>;
    maxIconNameBlockWidth: number;
    customMenu: CustomMenuInfo;
    customMenuConfig: CustomMenuConfig;
    readonly: boolean;
    showHiddenItems: FormControl;
    customMenuFormGroup: UntypedFormGroup;
    get dragEnabled(): boolean;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, router: Router, route: ActivatedRoute, customMenuService: CustomMenuService, userPermissionsService: UserPermissionsService, dialog: MatDialog, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    goBack(): void;
    cancel(): void;
    resetToDefault(): void;
    hideAll(): void;
    save(): void;
    menuItemDrop(event: CdkDragDrop<string[]>): void;
    visibleMenuItemsControls(): Array<AbstractControl>;
    trackByMenuItem(_index: number, menuItemControl: AbstractControl): any;
    removeCustomMenuItem(index: number): void;
    isCustom(menuItemControl: AbstractControl): boolean;
    addCustomMenuItem(index?: number): void;
    private menuItemsFormArray;
    private actualItemIndex;
    private prepareMenuItemsFormArray;
    private computeMaxIconNameBlockWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuConfigComponent, "tb-custom-menu-config", never, {}, {}, never, never, false, never>;
}
