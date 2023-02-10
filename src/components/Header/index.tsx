import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo board" />
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/board">Meu board</Link>
                </nav>
                <button>Entrar com github</button>
            </div>
        </header>
    )
}