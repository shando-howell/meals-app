import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/Meals/MealsGrid';

const Meals = () => {
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
        <MealsGrid meals={[]}/>
      </main>
    </>
  )
}

export default Meals