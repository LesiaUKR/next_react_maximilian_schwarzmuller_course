import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const newsItemsSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemsSlug
  );
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop">
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              className=""
            />
          </div>
        </dialog>{" "}
      </div>
    </>
  );
}
