import Link from "next/link";
export default function MealsPage() {
    return (
        <div>
            <h1>MealsPage</h1>
            <p> <Link href="/">Home</Link> </p> 
            <Link href="/meals/share">Share</Link>
            <Link href="/meals/1">Meals1</Link>
            <Link href="/meals/2">Meals2</Link>
            <Link href="/meals/3">Meals3</Link>
            <Link href="/meals/4">Meals4</Link>
            <Link href="/community">Community</Link>
        </div>
    );
}