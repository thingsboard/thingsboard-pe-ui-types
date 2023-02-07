import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantSolutionTemplateDetails } from '@shared/models/solution-template.models';
import { SolutionsService } from '@core/http/solutions.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class SolutionTemplateDetailsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private solutionsService;
    private dialog;
    private dialogService;
    private translate;
    private solutionService;
    private route;
    private router;
    imageCarouselIndex: number;
    solutionTemplateDetails: TenantSolutionTemplateDetails;
    images: {
        url: string;
    }[];
    constructor(store: Store<AppState>, solutionsService: SolutionsService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, solutionService: SolutionsService, route: ActivatedRoute, router: Router);
    ngOnInit(): void;
    installSolutionTemplate(): void;
    deleteSolutionTemplate(): void;
    openInstructions(): void;
    private reload;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplateDetailsComponent, "tb-solution-template-details", never, {}, {}, never, never, false>;
}
