import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map(({ id, slug, title, image }) => (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <img src={`/images/news/${image}`} alt={title} />
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
