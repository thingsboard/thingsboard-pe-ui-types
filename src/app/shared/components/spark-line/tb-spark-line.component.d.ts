import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TbSparkLineComponent implements AfterViewInit {
    private elementRef;
    private viewInit;
    private libraryLoad;
    private scheduleUpdateLine;
    private chartDataValue;
    set chartData(value: number[]);
    get chartData(): number[];
    chartProperty: object;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    private updatedChartData;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbSparkLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbSparkLineComponent, "tb-spark-line", never, { "chartData": { "alias": "chartData"; "required": false; }; "chartProperty": { "alias": "chartProperty"; "required": false; }; }, {}, never, never, false, never>;
}
