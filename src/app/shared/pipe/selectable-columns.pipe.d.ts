import { PipeTransform } from '@angular/core';
import { DisplayColumn } from '@home/components/widget/lib/table-widget.models';
import * as i0 from "@angular/core";
export declare class SelectableColumnsPipe implements PipeTransform {
    transform(allColumns: DisplayColumn[]): DisplayColumn[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectableColumnsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SelectableColumnsPipe, "selectableColumns", false>;
}
