import { EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { SolutionsCreatorService } from '@core/http/solutions-creator.service';
import { SolutionCreatorInfo, SolutionInfo } from '@shared/models/solution-creator.models';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class SolutionSideBarComponent extends PageComponent implements OnInit {
    private solutionCreator;
    private dialog;
    private translate;
    private router;
    private route;
    protected store: Store<AppState>;
    isExpanded: import("@angular/core").WritableSignal<boolean>;
    solutions: import("@angular/core").WritableSignal<SolutionInfo[]>;
    enableTransition: boolean;
    updatedSolution: EventEmitter<SolutionCreatorInfo>;
    installedChanged: EventEmitter<{
        solutionId: string;
        installed: boolean;
    }>;
    constructor(solutionCreator: SolutionsCreatorService, dialog: DialogService, translate: TranslateService, router: Router, route: ActivatedRoute, store: Store<AppState>);
    ngOnInit(): void;
    toggleSidebar($event: Event): void;
    expandSidebar(): void;
    deleteSolution(solution: SolutionInfo): void;
    addNewSolutionTemplate(solution: SolutionInfo): void;
    renameSolution(solution: SolutionInfo): void;
    uninstallSolution(solution: SolutionInfo): void;
    updateSolutionField(solution: SolutionInfo | {
        id: string;
    }, fields: Partial<SolutionInfo>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionSideBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionSideBarComponent, "tb-solution-side-bar", never, {}, { "updatedSolution": "updatedSolution"; "installedChanged": "installedChanged"; }, never, never, false, never>;
}
