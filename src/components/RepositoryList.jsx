import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.css';



export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        // fetch('https://api.github.com/user/t/repos')

        fetch('https://api.github.com/users/GabrielBento299/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    console.log(repositories);
    return (
        <section className="reposityory-list">

            <div className="container">
                <button></button>
                <h1>Lista De repositórios</h1>

                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}


                </ul>
            </div>
        </section>
    )
}