import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export default function SignInButton() {

    const session: boolean = true

    return session ? 
    (
        <button
        className={styles.signInButton}
        type="button"
        onClick={() => { }}
        >
            <img src="https://meups.com.br/wp-content/uploads/2022/09/Homem-de-Ferro-900x503.jpg" alt="foto do usuário" />
            Olá, Matheus
            <FiX color="#737380" className='closeIcon'/>
        </button>
    ) :
    (
        <button
        className={styles.signInButton}
        type="button"
        onClick={() => { }}
        >
            <FaGithub color="#FFB800" />
            Entrar com github
        </button>
    )
}