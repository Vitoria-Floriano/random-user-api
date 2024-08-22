/* 
OBJETIVOS:

> Fazer a requisição da API que irá gerar um usuário aleatório, 
> e pegar as seguintes informações:

- Gênero;
- Primeiro e último nome;
- Endereço e número da casa;
- A cidade, estado e país do usuário;

*/
import { getUser } from "./services/api.js";

export async function getUserData() {
    const userResponse = await getUser();
    
    const { first, last } = userResponse.results[0].name
    const { gender } = userResponse.results[0]    
    const { name, number } = userResponse.results[0].location.street
    const { city, state, country } = userResponse.results[0].location

    const user = {
        name: first,
        lastName: last,
        gender: gender,
        address: name,
        number: number,
        city: city,
        state: state,
        country: country
    }
}