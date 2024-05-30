import Link from "next/link";
import classes from './not-found.module.css'
const NotFound = () => {
  return (
    <main className={classes['not-found']}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link href="/">Go back to the homepage</Link>
    </main>
  )
}

export default NotFound