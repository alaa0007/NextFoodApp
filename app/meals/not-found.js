import Link from "next/link";
import classes from './not-found.module.css'
const NotFound = () => {
  return (
    <main className={classes['not-found']}>
      <h1>Meal Not Found</h1>
      <p>The meal you are looking for could not be found.</p>
      <Link href="/meals">Go back to meals page</Link>
    </main>
  )
}

export default NotFound