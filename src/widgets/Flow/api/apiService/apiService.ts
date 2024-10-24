import { BASE_URL } from "../../../../shared/config/api";

export const sendPostRequest = async (data: any) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Response err');
        }

        return await response.json();
    } catch (error) {
        console.error('Error', error);
    }
};
