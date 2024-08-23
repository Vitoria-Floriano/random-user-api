export async function getUser() {
    const apiUrl = 'https://randomuser.me/api/'
    const response = await fetch(apiUrl)
    return await response.json();
}