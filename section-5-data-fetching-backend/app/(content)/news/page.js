import NewsList from "@/components/news/news-list";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch the news.");
  }

  const news = await response.json();

  return (
    <>
      <h1>NEWS PAGE</h1>
      <NewsList news={news} />;
    </>
  );
}
