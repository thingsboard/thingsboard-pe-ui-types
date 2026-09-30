import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '@core/services/menu.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
interface GotoMenuLink {
    name: string;
    icon: string;
    breadcrumb: string;
    path: string;
    queryParams?: {
        [k: string]: any;
    };
}
interface GotoMenuResult {
    hasMatches: boolean;
    nameMatches: GotoMenuLink[];
    crumbMatches: GotoMenuLink[];
    crumbMore: number;
}
export declare class GotoMenuComponent implements OnInit, OnDestroy {
    private menuService;
    private translate;
    private customTranslate;
    private router;
    wl: WhiteLabelingService;
    searchLinkInput: ElementRef;
    collapsed: boolean;
    searchBtnClicked: EventEmitter<void>;
    linkClicked: EventEmitter<void>;
    gotoMenuResult: GotoMenuResult;
    private allLinksObservable$;
    private searchSubject;
    private searchSubscription;
    searchText: string;
    constructor(menuService: MenuService, translate: TranslateService, customTranslate: CustomTranslatePipe, router: Router, wl: WhiteLabelingService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSearchInput(): void;
    clear(): void;
    searchBtnClick(): void;
    searchDisplayFn: (value: any) => string;
    gotoLink(link: GotoMenuLink): void;
    private fetchLinks;
    private allLinks;
    private filterLinks;
    private toGotoMenus;
    static ɵfac: i0.ɵɵFactoryDeclaration<GotoMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GotoMenuComponent, "tb-goto-menu", never, { "collapsed": { "alias": "collapsed"; "required": false; }; }, { "searchBtnClicked": "searchBtnClicked"; "linkClicked": "linkClicked"; }, never, never, false, never>;
}
export {};
