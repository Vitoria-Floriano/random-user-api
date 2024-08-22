const apiUrl = 'https://randomuser.me/api/'

export async function getUser() {
    const response = await fetch(apiUrl)
    return await response.json();
}