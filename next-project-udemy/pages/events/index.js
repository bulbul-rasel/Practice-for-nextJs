import React from "react";
import EventsSearch from "./../../components/events/events-search";
import EventList from "./../../components/events/event-list";
import { Fragment } from "react";
import { getFeaturedEvents } from "./../../dummy-data";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const AllEventPage = () => {
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
};

export default AllEventPage;
