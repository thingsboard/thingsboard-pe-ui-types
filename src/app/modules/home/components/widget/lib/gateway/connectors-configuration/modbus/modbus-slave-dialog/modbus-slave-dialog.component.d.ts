import { FormBuilder } from '@angular/forms';
import { ModbusSlaveInfo, SlaveConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ModbusSlaveDialogAbstract } from '@home/components/widget/lib/gateway/connectors-configuration/modbus/modbus-slave-dialog/modbus-slave-dialog.abstract';
import * as i0 from "@angular/core";
export declare class ModbusSlaveDialogComponent extends ModbusSlaveDialogAbstract<ModbusSlaveDialogComponent, SlaveConfig> {
    protected fb: FormBuilder;
    protected store: Store<AppState>;
    protected router: Router;
    data: ModbusSlaveInfo;
    dialogRef: MatDialogRef<ModbusSlaveDialogComponent, SlaveConfig>;
    constructor(fb: FormBuilder, store: Store<AppState>, router: Router, data: ModbusSlaveInfo, dialogRef: MatDialogRef<ModbusSlaveDialogComponent, SlaveConfig>);
    protected getSlaveResultData(): SlaveConfig;
    protected addFieldsToFormGroup(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusSlaveDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusSlaveDialogComponent, "tb-modbus-slave-dialog", never, {}, {}, never, never, true, never>;
}
