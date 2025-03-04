import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>NEWS PAGE</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map(({ id, slug, title, image }) => (
          <li key={id}>
            <Link href={`/news/${slug}`}>
              <img src={`/images/news/${image}`} alt={title} />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
