import Link from "next/link";

export default function MealPage({params}) {
    return (
        <div>
            <h1>MealPage {params.slug}</h1>
            <Link href="/meals">meals</Link>
        </div>
    );
}