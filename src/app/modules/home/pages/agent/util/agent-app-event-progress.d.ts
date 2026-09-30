import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AgentAppEvent, AgentApplication } from '@shared/models/agent.models';
/**
 * Opens the event-progress dialog for an action. All dispatches (install, update, upgrade,
 * restart, delete) route through here so the "monitor progress" UX is consistent. An
 * agent-scoped event, such as the agent upgrading itself, has no application and passes null.
 *
 * Returns the dialog's afterClosed observable so the caller can trigger a
 * list refresh (or navigate away) once the user dismisses the dialog.
 */
export declare function openAgentAppEventProgress(dialog: MatDialog, application: AgentApplication | null, event: AgentAppEvent): Observable<boolean>;
