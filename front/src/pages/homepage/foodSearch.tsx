import React, { useState } from 'react';

// Минимальный интерфейс для БЖУ
interface Product {
    _id: string;
    product_name_ru?: string;
    brands?: string;
    nutriments: {
        "energy-kcal_100g"?: number;
        proteins_100g?: number;
        fat_100g?: number;
        carbohydrates_100g?: number;
    };
}

export const FoodSearch = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const searchFood = async () => {
        if (!query) return;
        setLoading(true);

        try {
            // Добавляем фильтр по категории "en:carrots"
            const baseUrl = `https://ru.openfoodfacts.org/cgi/search.pl`;
            const params = new URLSearchParams({
                search_terms: query,           // Твой ввод (морковь)
                tagtype_0: 'categories',       // Фильтр по категориям
                tag_contains_0: 'contains',
                tag_0: 'en:carrots',           // Ищем именно в категории "Морковь"
                action: 'process',
                json: '1',
                page_size: '5'
            });

            const res = await fetch(`${baseUrl}?${params.toString()}`, {
                headers: { 'User-Agent': 'MyMentorApp/1.0' }
            });

            const data = await res.json();
            setProducts(data.products || []);
        } catch (err) {
            console.error("Ошибка:", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введите название (напр. морковь)"
                style={{ padding: '8px', width: '250px' }}
            />
            <button onClick={searchFood} style={{ padding: '8px 16px', marginLeft: '8px' }}>
                {loading ? 'Ищу...' : 'Найти'}
            </button>

            <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
                {products.map(p => (
                    <li key={p._id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
                        <strong>{p.product_name_ru || 'Без названия'}</strong> ({p.brands || 'Бренд не указан'})
                        <div style={{ fontSize: '0.9em', color: '#555' }}>
                            Ккал: {p.nutriments["energy-kcal_100g"] || 0} |
                            Б: {p.nutriments.proteins_100g || 0} |
                            Ж: {p.nutriments.fat_100g || 0} |
                            У: {p.nutriments.carbohydrates_100g || 0}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};