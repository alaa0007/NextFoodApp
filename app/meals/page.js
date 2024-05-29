import Link from "next/link";
import classes from "./page.module.css";
import MealList from "../components/meals/meal-list";

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {' '}
                    <span className={classes.highlight}> by a food-loving community.</span>
                </h1>
                <p> 
                    Join our community and share your favorite recipes!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favorites recipes
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealList meals={[]}/>
            </main>
        </>
    );
}