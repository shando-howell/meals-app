import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/Meals/MealsGrid';
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();

  return (
    <MealsGrid meals={meals}/>
  )
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose from a variety of recipes and prepare delicious meals.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favourite recipe.
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={
          <p className={classes.loading}>Fetching meals...</p>
        }>
          <Meals/>
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage;