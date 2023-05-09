import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>TODO LIST</title>
				<meta name='description' content='공부하면서 만드는 todo list' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}></main>
		</>
	);
}
