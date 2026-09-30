/**
 * The shared entity-details-page wraps an agent detail component in a `.settings-card` capped at
 * 60–80% width, which is too narrow for compose editing. The card is marked so a component-scoped
 * override can widen it, and unmarked on destroy.
 *
 * The lookup walks this component's own ancestors only: a page can hold more than one
 * `.settings-card`, so falling back to a document-wide search risks widening an unrelated card and
 * leaving the class stuck on it.
 */
export declare function markSettingsCardFullscreen(host: HTMLElement, cssClass: string): HTMLElement | null;
export declare function clearSettingsCardFullscreen(card: HTMLElement | null, cssClass: string): void;
