import Link from "next/link";
export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/recipe-1">Recipe 1</Link>
      </p>
      <p>
        <Link href="/meals/recipe-2">Recipe 2</Link>
      </p>
    </>
  );
}
