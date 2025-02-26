import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <p>
          <Link href="/meals">MealsPage</Link>
          <Link href="/meals/share">MealsPage</Link>
          <Link href="/community">CommunityPage</Link>
        </p>
      </h1>
    </main>
  );
}
