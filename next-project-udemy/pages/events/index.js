import React from "react";
import EventsSearch from "./../../components/events/events-search";
import EventList from "./../../components/events/event-list";
import { Fragment } from "react";
import { getAllEvents, getFeaturedEvents } from "./../../helpers/api-util.js";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const AllEventPage = (props) => {
  const router = useRouter();
  // const featuredEvents = getFeaturedEvents();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}/abc`;

    router.push(fullPath);
  }
  return (
    <Fragment className={styles.container}>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
