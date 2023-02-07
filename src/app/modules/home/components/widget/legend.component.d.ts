import { EventEmitter, OnInit } from '@angular/core';
import { LegendConfig, LegendData, LegendKey } from '@shared/models/widget.models';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class LegendComponent implements OnInit {
    private utils;
    legendConfig: LegendConfig;
    legendData: LegendData;
    legendKeyHiddenChange: EventEmitter<number>;
    displayHeader: boolean;
    isHorizontal: boolean;
    isRowDirection: boolean;
    constructor(utils: UtilsService);
    ngOnInit(): void;
    toggleHideData(index: number): void;
    legendKeys(): LegendKey[];
    getDataKeyLabel(label: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegendComponent, "tb-legend", never, { "legendConfig": "legendConfig"; "legendData": "legendData"; }, { "legendKeyHiddenChange": "legendKeyHiddenChange"; }, never, never, false>;
}
