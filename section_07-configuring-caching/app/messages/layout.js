export default async function MessagesLayout({ children }) {
  const response = await fetch(
    "http://localhost:8080/messages"
    // cache settings could be 'default', 'no-store', 'reload', 'no-cache', 'force-cache', or 'only-if-cached'
    // { cache: "no-store" }
    // next setting is equivalent to { cache: "no-store" } but not cashing forever
    // {
    //   next: {
    //     revalidate: 5,
    //   },
    // }
  );
  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
