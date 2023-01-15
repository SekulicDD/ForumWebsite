export interface Sortable{
    order_by?:unknown;
    direction?:Direction;
}

export enum Direction{
    Ascending = 'asc',
    Descending = 'desc',
}