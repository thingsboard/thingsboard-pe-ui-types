import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgentApplicationInfo } from '@shared/models/agent.models';
import { AgentAppVersionWarningDialogData, AgentAppVersionWarningResult } from '@home/pages/agent/dialog/agent-app-version-warning-dialog.component';
export declare function confirmAppVersionWarning(dialog: MatDialog, data: AgentAppVersionWarningDialogData): Observable<AgentAppVersionWarningResult>;
export declare function confirmUpdateDrift(dialog: MatDialog, app: AgentApplicationInfo): Observable<boolean>;
