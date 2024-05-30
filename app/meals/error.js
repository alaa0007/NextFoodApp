'use client';

import classes from './error.module.css';

const Error = () => {
  return (
    <main className={classes.error}>
      <h1>An Error Occurred</h1>
      <p>Failed to fetch data. Please try again later.</p>
    </main>
  )
}

export default Error;