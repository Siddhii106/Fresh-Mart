const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export async function fetchProducts() {
    const response = await fetch (`${API_URL}/products/`);
    if(!response.ok) {
        throw new Error("Could not load products");
    }
    return response.json();
}