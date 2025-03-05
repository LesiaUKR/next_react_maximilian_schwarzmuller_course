import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsItemsSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsItemsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            className=""
          />
        </div>
      </dialog>
    </>
  );
}
