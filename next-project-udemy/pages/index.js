import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";
import { getAllEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-util";

import EventList from "./../components/events/event-list";
// import { getFeaturedEvents } from "./../dummy-data";

export default function Home(props) {
  // const events = getAllEvents();
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJs Event</title>
        <meta
          name="description"
          content="find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
