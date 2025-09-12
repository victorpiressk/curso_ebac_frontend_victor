import { useEffect, useState } from "react"

import styles from './Repos.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const endpointRepos = `https://api.github.com/users/${nomeUsuario}/repos`

        fetch(endpointRepos)
        .then(resposta => resposta.json())
        .then(resJson => {
            setRepos(resJson)
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({id, name, language, html_url}) => ( 
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b>
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b>
                            {language}
                        </div>
                        <a className={styles.itemLink} href={html_url} target="_blank">Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList