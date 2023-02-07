import { ElementRef, NgZone, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface NavTreeNodeState {
    disabled?: boolean;
    opened?: boolean;
    loaded?: boolean;
}
export interface NavTreeNode {
    id: string;
    icon?: boolean;
    text?: string;
    state?: NavTreeNodeState;
    children?: NavTreeNode[] | boolean;
    data?: any;
}
export interface NavTreeEditCallbacks {
    selectNode?: (id: string) => void;
    deselectAll?: () => void;
    getNode?: (id: string) => NavTreeNode;
    getParentNodeId?: (id: string) => string;
    openNode?: (id: string, cb?: () => void) => void;
    nodeIsOpen?: (id: string) => boolean;
    nodeIsLoaded?: (id: string) => boolean;
    refreshNode?: (id: string) => void;
    updateNode?: (id: string, newName: string, updatedData?: any) => void;
    createNode?: (parentId: string, node: NavTreeNode, pos: number | string) => void;
    deleteNode?: (id: string) => void;
    disableNode?: (id: string) => void;
    enableNode?: (id: string) => void;
    setNodeHasChildren?: (id: string, hasChildren: boolean) => void;
    search?: (searchText: string) => void;
    clearSearch?: () => void;
}
export declare type NodesCallback = (nodes: NavTreeNode[]) => void;
export declare type LoadNodesCallback = (node: NavTreeNode, cb: NodesCallback) => void;
export declare type NodeSearchCallback = (searchText: string, node: NavTreeNode) => boolean;
export declare type NodeSelectedCallback = (node: NavTreeNode, event: Event) => void;
export declare type NodesInsertedCallback = (nodes: string[], parent: string) => void;
export declare class NavTreeComponent implements OnInit {
    private elementRef;
    private ngZone;
    private enableSearchValue;
    get enableSearch(): boolean;
    set enableSearch(value: boolean);
    loadNodes: LoadNodesCallback;
    searchCallback: NodeSearchCallback;
    onNodeSelected: NodeSelectedCallback;
    onNodesInserted: NodesInsertedCallback;
    editCallbacks: NavTreeEditCallbacks;
    private treeElement;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone);
    ngOnInit(): void;
    private initTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavTreeComponent, "tb-nav-tree", never, { "enableSearch": "enableSearch"; "loadNodes": "loadNodes"; "searchCallback": "searchCallback"; "onNodeSelected": "onNodeSelected"; "onNodesInserted": "onNodesInserted"; "editCallbacks": "editCallbacks"; }, {}, never, never, false>;
}
