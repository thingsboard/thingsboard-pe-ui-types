export interface TbContextMenuEvent extends Event {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    ctrlKey: boolean;
    metaKey: boolean;
}
export declare const initCustomJQueryEvents: () => void;
