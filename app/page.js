import Link from "next/link";

import ImageSlideshow from "@/components/Images/ImageSlideshow";
import classes from "./page.module.css"

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Mealitant</h1>
            <p>Taste and Share food from around the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>What is Mealitant?</h2>
          <p>
            Mealitant is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
