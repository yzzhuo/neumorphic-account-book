export interface Category {
    id: string;
    type: string;
    name: string;
}

export interface CategoryState {
    categories: Category[];
}