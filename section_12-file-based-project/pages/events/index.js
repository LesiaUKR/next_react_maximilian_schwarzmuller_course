import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import EventList from './../../components/events/event-list';


export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
     <EventList events={events} />
    </Fragment>
  )
}