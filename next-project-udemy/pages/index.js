import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";
import { Fragment } from "react";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Fragment className={styles.container}>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </Fragment>
  );
}
