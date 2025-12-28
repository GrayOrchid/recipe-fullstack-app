
export interface Nutrient {
    name: string;
    value: number;
    unit: string;
    color: string;
}

export interface RecipeImage {
    id: string;
    url: string;
}

export interface Tag {
    id: string;
    name: string;
}

export interface Step {
    stepNumber: number,
    description: string,
    state: boolean,
}
export interface Recipe {
    authorId: string
    id: string;
    title: string;
    images: RecipeImage[];
    videoUrl?: string;
    cookingTime: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    calories: number;
    nutrients: Nutrient[];
    tags: Tag[];
    steps: Step[]
}