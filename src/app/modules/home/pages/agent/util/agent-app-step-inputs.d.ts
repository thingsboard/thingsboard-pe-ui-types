import { AgentApplication, AgentAppStep } from '@shared/models/agent.models';
import { ClassifiedStep, StepInputKind } from '@home/pages/agent/util/agent-app-steps';
export interface VolumeChoice {
    key: string;
    selected: boolean;
}
export interface StepBinding {
    kind: StepInputKind;
    step: AgentAppStep;
    backupVolumes?: VolumeChoice[];
    pullImages?: boolean;
    removeVolumes?: boolean;
}
export declare function seedBackupVolumes(backupSource: AgentApplication | null): VolumeChoice[];
export declare function createStepBinding({ kind, step }: ClassifiedStep, backupSource: AgentApplication | null): StepBinding;
export declare function buildStepPayload(b: StepBinding): any;
export declare function buildStepInputs(bindings: StepBinding[]): {
    [stepId: string]: any;
};
