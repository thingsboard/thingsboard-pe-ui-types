import { OnInit, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { TenantSolutionTemplateInfo } from '@shared/models/solution-template.models';
import { Router } from '@angular/router';
import { SolutionsService } from '@core/http/solutions.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class SolutionTemplateCardComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private solutionsService;
    private dialog;
    private dialogService;
    private translate;
    private router;
    solutionTemplate: TenantSolutionTemplateInfo;
    solutionTemplateChanged: EventEmitter<any>;
    constructor(store: Store<AppState>, solutionsService: SolutionsService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, router: Router);
    ngOnInit(): void;
    openSolutionTemplateDetails(): void;
    installSolutionTemplate(): void;
    openInstructions(): void;
    deleteSolutionTemplate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplateCardComponent, "tb-solution-template-card", never, { "solutionTemplate": "solutionTemplate"; }, { "solutionTemplateChanged": "solutionTemplateChanged"; }, never, never, false, never>;
}
