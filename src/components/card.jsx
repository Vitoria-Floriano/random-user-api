import { useState, useEffect } from "react"
import { getUser } from "../scripts/services/api"

export const Card = () => {
    const [user, setUser] = useState({});

    async function getUserData() {
        const userData = await getUser()

        const { first, last } = userData.results[0].name
        const { gender } = userData.results[0]
        const { name, number } = userData.results[0].location.street
        const { city, state, country } = userData.results[0].location

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

        setUser(user);
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <div>
            <h1>Generating random user</h1>
            <p><strong>Nome:</strong> {user.name} {user.lastName}</p>
            <p><strong>Sexo:</strong> {user.gender}</p>
            <p><strong>Endereço:</strong> {user.address} <strong>Nº:</strong> {user.number} <strong>Cidade:</strong> {user.city} </p>
            <p><strong>Estado:</strong> {user.state} <strong>País:</strong> {user.country} </p>
            <button onClick={() => getUserData()}>Generate user</button>
        </div>
    )
}