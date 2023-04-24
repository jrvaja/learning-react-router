import classes from "./EventItem.module.css";
import { FC } from "react";
import { IEvent } from "../models/event.model";
import { Link, useSubmit } from "react-router-dom";

const EventItem: FC<{ event: IEvent }> = ({ event }) => {
  const submit = useSubmit();

  function startDeleteHandler() {
    const confirmed = window.confirm("Are you sure");
    if (confirmed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
};

export default EventItem;
