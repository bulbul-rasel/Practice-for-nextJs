import { useRouter } from "next/router";
import React, { Fragment } from "react";
import ErrorAlert from "../../components/error-alert/error-alert";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";

import {
  getEventById,
  getFeaturedEvents,
  getAllEvents,
} from "../../helpers/api-util";
// import { getEventById } from "../../dummy-data";

const EventDetailPage = (props) => {
  // const router = useRouter();
  // const eventId = router.query.eventId;

  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>;
      </div>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        data={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
      revalidate: 30,
    },
  };
}
