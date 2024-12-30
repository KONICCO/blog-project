import { Blog } from "../types/Blog";

const BASE_URL = "http://localhost:3000";
const checkResponse = async (response: Response) => {
    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to fetch Resource')
    }
    return response.json()
}
// buat api
export const fetchBlogs = async (): Promise<Blog[]> => {
    try {
        const response = await fetch(`${BASE_URL}/blogs`);
        const data = await checkResponse(response)
        return data
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message || "Failed to fetch blogs");
        } else {
            console.error("Unexpected error", error);
            throw new Error("Failed to fetch blogs due to an unknown error");
        }
    }
};
//buat blog baru
export const createBlog = async (blog: Blog): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/blogs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        await checkResponse(response)

    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            throw new Error(error.message || "Failed to create blog");
        } else {
            console.error("Unexpected error", error);
            throw new Error("Failed to create blog due to an unknown error");
        }
    }
}
//buat blog edit