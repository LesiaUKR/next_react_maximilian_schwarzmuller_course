import Link from "next/link";
import NewsList from "@/components/news/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const links = getAvailableNewsYears();
  console.log(filter);
  return (
    <header id="archive-header">
      <h1>News Archive</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news} />;
}
