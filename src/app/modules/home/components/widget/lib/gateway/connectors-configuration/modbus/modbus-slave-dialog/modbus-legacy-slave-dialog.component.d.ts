import { FormBuilder } from '@angular/forms';
import { LegacySlaveConfig, ModbusSlaveInfo } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ModbusSlaveDialogAbstract } from '@home/components/widget/lib/gateway/connectors-configuration/modbus/modbus-slave-dialog/modbus-slave-dialog.abstract';
import * as i0 from "@angular/core";
export declare class ModbusLegacySlaveDialogComponent extends ModbusSlaveDialogAbstract<ModbusLegacySlaveDialogComponent, LegacySlaveConfig> {
    protected fb: FormBuilder;
    protected store: Store<AppState>;
    protected router: Router;
    data: ModbusSlaveInfo;
    dialogRef: MatDialogRef<ModbusLegacySlaveDialogComponent, LegacySlaveConfig>;
    constructor(fb: FormBuilder, store: Store<AppState>, router: Router, data: ModbusSlaveInfo, dialogRef: MatDialogRef<ModbusLegacySlaveDialogComponent, LegacySlaveConfig>);
    protected getSlaveResultData(): LegacySlaveConfig;
    protected addFieldsToFormGroup(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusLegacySlaveDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusLegacySlaveDialogComponent, "tb-modbus-legacy-slave-dialog", never, {}, {}, never, never, true, never>;
}
