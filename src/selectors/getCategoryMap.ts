import { RootState } from '../store';
import { Category } from '../store/types/category';

export interface Categories {
    [key:string]: Category;
}

export default function getCategoryMap(state: RootState) : Categories {
    const rawCategories = state.category.categories;
    return rawCategories.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {});
}