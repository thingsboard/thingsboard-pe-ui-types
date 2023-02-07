import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { MatChipList } from '@angular/material/chips';
import * as i0 from "@angular/core";
export interface MatChipDropEvent {
    from: number;
    to: number;
}
export declare class MatChipDraggableDirective implements AfterViewInit {
    private chipsList;
    private elementRef;
    chipDrop: EventEmitter<MatChipDropEvent>;
    private draggableChips;
    constructor(chipsList: MatChipList, elementRef: ElementRef<HTMLElement>);
    onDocumentMouseUp(): void;
    ngAfterViewInit(): void;
    private configureDraggableChipList;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatChipDraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatChipDraggableDirective, "mat-chip-list[tb-chip-draggable]", never, {}, { "chipDrop": "chipDrop"; }, never, never, false>;
}
