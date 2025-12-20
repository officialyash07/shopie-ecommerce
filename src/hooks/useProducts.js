import { useQuery } from "@tanstack/react-query";

import fetchProducts, { fetchCategories } from "../api/products-api";

export const useProducts = (filters = {}) => {
    const query = useQuery({
        queryKey: ["products", filters],
        queryFn: () => fetchProducts(filters),
        staleTime: 5 * 60 * 1000,
    });

    return query;
};

export const useCategories = () => {
    const query = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 10 * 60 * 1000,
    });

    return query;
};
