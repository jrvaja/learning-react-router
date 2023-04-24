import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import { IEvent, IEvents } from "../models/event.model";
import { loadEvents } from "./EventsPage";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("eventDetails") as {
    event: IEvent;
    events: IEvents;
  };
  // const params = useParams();

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events ...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};
export default EventDetailPage;

const loadEvent = async (id: string) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "could not fetch event details" }, { status: 500 });
  } else {
    const result = await response.json();
    return result.event;
  }
};
// @ts-ignore
export const loader = async ({ request, params }) => {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id), // having await here would make sure to prepare data before navigate
    events: loadEvents(), // start fetching but won't await to finish
  });
};

// @ts-ignore
export const action = async ({ params, request }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json({ message: "unable to delete the event" }, { status: 500 });
  }

  return redirect("/events");
};
