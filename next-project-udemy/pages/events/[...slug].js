import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numYear < 2021 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, Please adjust your Values..!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.lngth === 0) {
    return <p> No Events found for the chosen filter</p>;
  }

  return (
    <div>
      <h1>Filtered Event</h1>
    </div>
  );
};

export default FilteredEventsPage;
