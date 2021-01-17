import React from "react";
import Moment from "react-moment";

const EventRow = ({ event, backgroundColour }) => {
  const soldOut = event.soldOut === true ? "soldOut" : "";
  return (
    <ul
      className="events-grid-row roboto "
      style={{ backgroundColor: backgroundColour }}
    >
      <li className="event-row-item row-item">{event.event}</li>
      <li className="event-row-item row-item">{event.venue}</li>
      <li className="event-row-item row-item">
        <Moment format="DD - MMMM" className="row-item">
          {event.date}
        </Moment>
      </li>
      <li className="event-row-item row-item">{event.time.substring(0, 5)}</li>

      <li className="event-row-item row-item">£{event.price}</li>

      <li className={"event-row-item row-item"}>
        {!event.soldOut ? (
          <a
            href={event.ticketLink}
            target="_blank"
            rel="noreferrer"
            className="ticket-link ticket"
          >
            Get Tickets
          </a>
        ) : (
          <span className={` ticket-link ticket ${soldOut}`}>Sold Out</span>
        )}
      </li>
    </ul>
  );
};

export default EventRow;
