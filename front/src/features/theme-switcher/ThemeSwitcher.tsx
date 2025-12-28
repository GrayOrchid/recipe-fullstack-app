import { useThemeStore } from "@/shared";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};