import { AfterContentInit, ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, ViewContainerRef } from "@angular/core";
import { SolutionDescriptor, SolutionDescriptorAlarm, SolutionDescriptorEntityBaseRelation, SolutionDescriptorIam, SolutionDescriptorMetric, SolutionEntity } from '@shared/models/solution-creator.models';
import { FormBuilder } from '@angular/forms';
import { TbTableDatasource } from '@shared/components/table/table-datasource.abstract';
import { TbPopoverService } from '@shared/components/popover.service';
import { MatIconButton } from '@angular/material/button';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { ClusterNode, Edge, GraphComponent, Node } from '@swimlane/ngx-graph';
import * as i0 from "@angular/core";
export declare class SolutionCreatorOverviewEntitiesComponent implements OnChanges, AfterContentInit, OnDestroy {
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private dialog;
    private translate;
    description: SolutionDescriptor;
    solutionName: string;
    updatedDescription: EventEmitter<SolutionDescriptor>;
    initComponent: boolean;
    readonly solutionEntities: ({
        value: string;
        title: string;
        fullTitle?: undefined;
    } | {
        value: string;
        title: string;
        fullTitle: string;
    })[];
    protected readonly Object: ObjectConstructor;
    solutionEntity: import("@angular/forms").FormControl<string[]>;
    solutionEntityTitle: string;
    solutionDescriptor: import("@angular/forms").FormControl<SolutionDescriptor>;
    solutionMode: import("@angular/forms").FormControl<string>;
    profileMode: import("@angular/forms").FormControl<string>;
    nodes: Node[];
    links: Edge[];
    clusters: ClusterNode[];
    graphContainer: ElementRef<HTMLElement>;
    graphComponent: GraphComponent;
    private graphResizeObserver;
    displayedColumns: string[];
    dataSource: EntityOverviewDatasource;
    constructor(fb: FormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, dialog: DialogService, translate: TranslateService);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    observeGraphResize(): void;
    getAlarmSeverityColor(severity: string): string;
    getEntityRelations(entityName: string): SolutionDescriptorEntityBaseRelation[];
    openAlarmInfo(event: Event, matButton: MatIconButton, alarm: SolutionDescriptorAlarm): void;
    openEntityInfo(event: Event, ref: MatIconButton | HTMLElement, entity: SolutionEntity, fixedPosition?: boolean): void;
    openMetricInfo(event: Event, matButton: MatIconButton, metric: SolutionDescriptorMetric): void;
    openIamInfo(event: Event, matButton: MatIconButton, iam: SolutionDescriptorIam): void;
    deleteAlarm($event: Event, alarm: SolutionDescriptorAlarm): void;
    updatedSolutionDescriptor($event: MouseEvent): void;
    private openInfoPopover;
    private prepareEntityToDatasource;
    private prepareEntityProfiles;
    private prepareSchemaData;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionCreatorOverviewEntitiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionCreatorOverviewEntitiesComponent, "tb-solution-creator-overview-entities", never, { "description": { "alias": "description"; "required": true; }; "solutionName": { "alias": "solutionName"; "required": true; }; }, { "updatedDescription": "updatedDescription"; }, never, never, false, never>;
}
declare class EntityOverviewDatasource extends TbTableDatasource<any> {
}
export {};
