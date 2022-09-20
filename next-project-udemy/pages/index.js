import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;

    router.push(fullPath);
  }
  return (
    <Fragment className={styles.container}>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
