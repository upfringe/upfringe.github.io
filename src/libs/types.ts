export interface TagProps {
    link: string;
    name: string;
    className: string
  }

export interface CategoriesProps {
  categories:string[]
  currentSlug:string;
}

export interface CategoryProps extends TagProps {
  active:boolean;
}