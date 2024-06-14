import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomTranslationService } from '@core/http/custom-translation.service';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { TranslationInfo } from '@shared/models/custom-translation.model';
import { MatSort } from '@angular/material/sort';
import { DialogService } from '@core/services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class TranslationTableComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private customTranslationService;
    private translate;
    private dialogService;
    private dialog;
    private router;
    private route;
    private userPermissionsService;
    searchInputField: ElementRef;
    sort: MatSort;
    textSearch: import("@angular/forms").FormControl<string>;
    textSearchMode: boolean;
    readonly: boolean;
    dataSource: TranslationInfoDatasource;
    pageLink: PageLink;
    displayedColumns: string[];
    private destroy$;
    constructor(store: Store<AppState>, fb: FormBuilder, customTranslationService: CustomTranslationService, translate: TranslateService, dialogService: DialogService, dialog: MatDialog, router: Router, route: ActivatedRoute, userPermissionsService: UserPermissionsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackByLocale(index: number, translate: TranslationInfo): string;
    updateData(reload?: boolean): void;
    enterSearchMode(): void;
    exitSearchMode(): void;
    flagIconClass(localeCode: string): string;
    downloadLocale($event: Event, localeCode: string): void;
    deleteLocale($event: Event, translate: TranslationInfo): void;
    addNewLanguage($event: Event): void;
    editLanguage($event: Event, translate: TranslationInfo): void;
    actionColumStyle(): {
        width: string;
        minWidth: string;
        maxWidth: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationTableComponent, "tb-translation-table", never, {}, {}, never, never, false, never>;
}
export declare class TranslationInfoDatasource implements DataSource<TranslationInfo> {
    private customTranslationService;
    private translationInfo;
    dataLoading: boolean;
    private allTranslation;
    constructor(customTranslationService: CustomTranslationService);
    connect(): Observable<TranslationInfo[] | ReadonlyArray<TranslationInfo>>;
    disconnect(): void;
    loadTranslateInfo(pageLink: PageLink, reload?: boolean): Observable<PageData<TranslationInfo>>;
    currentTranslation(): Array<TranslationInfo>;
    private fetchTranslation;
    private getAllTranslations;
    isEmpty(): Observable<boolean>;
}