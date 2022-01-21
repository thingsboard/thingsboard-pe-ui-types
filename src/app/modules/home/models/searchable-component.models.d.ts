export interface ISearchableComponent {
    onSearchTextUpdated(searchText: string): any;
}
export declare function instanceOfSearchableComponent(object: any): object is ISearchableComponent;
