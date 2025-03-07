// import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
// set how many seconds to wait before revalidating the data
// export const revalidate = 5;
// dynamic could be different "force-dynamic", "force-static" etc.
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // helpful to set no-store to avoid caching for some specific component
  // unstable_noStore();
  const response = await fetch(
    "http://localhost:8080/messages"
    //   {
    //   next: {
    //     tags: ["msg"],
    //   },
    // }
  );

  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
