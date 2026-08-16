import { useRouter } from 'next/router';

export default function Work() {
    const router = useRouter();

    const { work } = router.query;

    return (
        <main>
            <h1>Legacy Shop Item: {work}</h1>
        </main>
    );
}