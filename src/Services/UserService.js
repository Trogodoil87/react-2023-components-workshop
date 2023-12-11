const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}

export const getById = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result.user;
}

export const deleteById = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: "DELETE",
        headers: {
            "Contetn-type": "application/json"
        }
    });
    const result = await response.json();
}

export const create = async (userData) => {
    console.log(userData);

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    const result = await response.json();
    return result.user;
}