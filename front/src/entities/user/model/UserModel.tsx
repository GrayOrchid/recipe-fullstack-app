import { Recipe } from "@/entities/recipe/model/RecipeModel";

export interface UserBase {
    id: string;
    name: string;
    avatarUrl: string;
    role: 'user' | 'admin' | 'chef';
}

export interface UserFull extends UserBase {
    email: string;
    bio?: string;
    myRecipes: Recipe[];
    favoriteRecipes: Recipe[];
    createdAt: string;
}