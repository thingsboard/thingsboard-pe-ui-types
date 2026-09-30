import { AgentAppConfig, AgentAppEventActionType, AgentAppStep, AgentAppStepState, AgentAppTemplate } from '@shared/models/agent.models';
export declare function findComposeDownStep(template: AgentAppTemplate | null | undefined): AgentAppStep | null;
export declare function readInitialPullImages(step: AgentAppStep | null | undefined): boolean;
export declare function extractComposeVolumeKeys(source: {
    config?: AgentAppConfig;
} | null | undefined): string[];
export declare function buildBackupVolumeInput(step: AgentAppStep, selectedKeys: string[]): AgentAppStepState;
export declare function buildPullImagesInput(step: AgentAppStep, pullImages: boolean): AgentAppStepState;
export declare function buildComposeDownInput(step: AgentAppStep, removeVolumes: boolean): AgentAppStepState;
/**
 * Kinds of user-facing step inputs the FE knows how to render + collect.
 * The classifier maps an AgentAppStep → kind (or null if no user input).
 * Rendering and payload-building stay per-kind; what varies per template
 * is which steps of which kinds show up in which list — classification
 * is structural (step type + state shape), not positional.
 */
export type StepInputKind = 'backupVolume' | 'pullImages' | 'composeDown';
export interface ClassifiedStep {
    kind: StepInputKind;
    step: AgentAppStep;
}
export declare function classifyStep(step: AgentAppStep): StepInputKind | null;
/**
 * The template step-list the BE consults for a given action. UPDATE reuses
 * startSteps (mirroring the single-app wizard's update mode).
 */
export declare function stepsForAction(template: AgentAppTemplate | null | undefined, action: AgentAppEventActionType): AgentAppStep[];
/**
 * The action's steps in execution order, without template-only steps. Steps are
 * linked via `nextId`: the head is the one no other step points at, and the chain
 * is walked from there to match the BE order. Falls back to the declared order
 * when the chain is broken.
 */
export declare function orderedStepsForAction(template: AgentAppTemplate | null | undefined, action: AgentAppEventActionType): AgentAppStep[];
export declare function classifyStepsForAction(template: AgentAppTemplate | null | undefined, action: AgentAppEventActionType): ClassifiedStep[];
export declare function actionUsesTemplate(action: AgentAppEventActionType): boolean;
