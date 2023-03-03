import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { widgetType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class SelectWidgetTypeDialogComponent extends DialogComponent<SelectWidgetTypeDialogComponent, widgetType> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SelectWidgetTypeDialogComponent, widgetType>;
    widgetTypes: typeof widgetType;
    allWidgetTypes: string[];
    widgetTypesDataMap: Map<widgetType, import("@shared/models/widget.models").WidgetTypeData>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SelectWidgetTypeDialogComponent, widgetType>);
    cancel(): void;
    typeSelected(type: widgetType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectWidgetTypeDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectWidgetTypeDialogComponent, "tb-select-widget-type-dialog", never, {}, {}, never, never, false, never>;
}
