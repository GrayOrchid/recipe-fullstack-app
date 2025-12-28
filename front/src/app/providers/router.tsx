import { CreateRecipePage, Homepage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: 'create-recipe',
        element: <CreateRecipePage />
    },
    //   {
    //     path: '/auth',
    //     element: <AuthPage />,
    //   },
    //   {
    //     path: '/profile', // или /user
    //     element: <UserPage />,
    //   },
    //   {
    //     path: '/recipe/:id', // Динамический роут для конкретного рецепта
    //     element: <RecipePage />,
    //   },
    {
        path: '*',
        element: <div>404 - Page Not Found</div>, // Можно вынести в entities или shared
    },
]);