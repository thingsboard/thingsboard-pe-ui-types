export interface TbContextMenuEvent extends Event {
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    metaKey: boolean;
}
export declare const initCustomJQueryEvents: () => void;
