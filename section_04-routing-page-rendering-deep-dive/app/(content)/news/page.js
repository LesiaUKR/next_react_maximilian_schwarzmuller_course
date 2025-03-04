import { DUMMY_NEWS } from "@/dummy-news";

import NewsList from "@/components/news/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>NEWS PAGE</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
