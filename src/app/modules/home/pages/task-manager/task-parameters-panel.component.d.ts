import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Job, JobStatus } from '@app/shared/models/job.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class TaskParametersPanelComponent implements OnInit, OnDestroy {
    private popover;
    private renderer;
    taskContainerElmRef: ElementRef;
    taskPanelElmRef: ElementRef;
    JobStatus: typeof JobStatus;
    job: Job;
    private aceEditor;
    constructor(popover: TbPopoverComponent<TaskParametersPanelComponent>, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancel(): void;
    private createEditor;
    private updateEditorSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskParametersPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskParametersPanelComponent, "tb-task-parameters-panel", never, { "job": { "alias": "job"; "required": false; }; }, {}, never, never, false, never>;
}
