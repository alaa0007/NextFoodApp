import Link from "next/link";
import classes from "./page.module.css";
import MealList from "../components/meals/meal-list";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";


export const metadata = {
    title: 'All Meals',
    description: 'All your favorite recipes, created by a food-loving community.',
};

const  Meals = async () => {
    const meal = await getMeals();
    return <MealList meals={meal}/>
}


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
                <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}