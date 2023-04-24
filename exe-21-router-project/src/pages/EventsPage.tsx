import { Await, defer, json, useLoaderData } from "react-router-dom";
import { IEvents } from "../models/event.model";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventsPage = () => {
  const { events } = useLoaderData() as { events: IEvents };
  return (
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Loading element ...</p>}
    >
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

export const loadEvents: () => Promise<IEvents> = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const result = await response.json();
    return result.events;
  }
};
export const loader = () => {
  return defer({
    events: loadEvents(), // must be promise
  });
};
