import {signIn, signOut, useSession} from 'next-auth/react'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export default function SignInButton() {

    const {data: session} = useSession()

    return session ? 
    (
        <button
        className={styles.signInButton}
        type="button"
        onClick={() => signOut()}
        >
            <img src={session.user?.image!} alt="foto do usuário" />
            Olá, {session.user?.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) :
    (
        <button
        className={styles.signInButton}
        type="button"
        onClick={() => signIn('github')}
        >
            <FaGithub color="#FFB800" />
            Entrar com github
        </button>
    )
}