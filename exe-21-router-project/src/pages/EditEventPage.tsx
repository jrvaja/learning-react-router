import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
import { IEvent } from "../models/event.model";

const EditEventPage = () => {
  const data = useRouteLoaderData("eventDetails") as { event: IEvent };
  // @ts-ignore
  return <EventForm event={data.event} method="PATCH" />;
};

export default EditEventPage;
