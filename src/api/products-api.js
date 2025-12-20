import axios from "axios";

const fetchProducts = async (filters = {}) => {
    const params = new URLSearchParams();

    if (filters.categoryId) {
        params.append("categoryId", filters.categoryId);
    }
    if (filters.price_min) {
        params.append("price_min", filters.price_min);
    }
    if (filters.price_max) {
        params.append("price_max", filters.price_max);
    }
    if (filters.title) {
        params.append("title", filters.title);
    }

    const queryString = params.toString();
    const url = `https://api.escuelajs.co/api/v1/products${
        queryString ? `?${queryString}` : ""
    }`;

    const { data } = await axios.get(url);
    return data;
};

export const fetchCategories = async () => {
    const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
    );
    return data;
};

export default fetchProducts;
