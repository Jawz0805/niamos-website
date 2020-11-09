import React from "react";
import Moment from "react-moment";

const EventRow = ({ event }) => {
  const soldOut = event.soldOut === true ? "soldOut" : "";
  return (
    <ul className="events-grid-row roboto">
      <li className="event-row-item">{event.title}</li>
      <li className="event-row-item">{event.venue}</li>
      <li className="event-row-item">
        <Moment format="DD - MMMM">{event.date}</Moment>
      </li>
      <li className="event-row-item">{event.time.substring(0, 5)}</li>
      <li className="event-row-item">{event.event}</li>
      <li className="event-row-item">£{event.price}</li>

      <li className={`event-row-item ${soldOut} ticket`}>
        {!event.soldOut ? (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noreferrer"
            className="ticket-link"
          >
            Tickets
          </a>
        ) : (
          <span className={`${soldOut}`}>Sold Out</span>
        )}
      </li>
    </ul>
  );
};

export default EventRow;
