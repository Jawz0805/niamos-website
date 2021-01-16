import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Moment from "react-moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactMarkdown from "react-markdown";
const localizer = momentLocalizer(moment);

const SelectedEvent = (props) => {
  console.log(props);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{props.props.title}</h1>
      <span>Start time:</span>
      <Moment format="MMM Do: HH:mm">{props.props.start}</Moment>
      <span>End time:</span>
      <Moment format="MMM Do: HH:mm ">{props.props.end}</Moment>
      <ReactMarkdown source={props.props.description} />
    </div>
  );
};

const eventStyleGetter = (event, start, end, isSelected) => {
  var backgroundColor = event.backgroundColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "5px",
    opacity: 0.8,
    color: event.textColor,
    border: "2px",
    display: "block",
  };
  return {
    style: style,
  };
};
const BookingsCalendar = ({ props, bookings }) => {
  let roomBookings = [];
  const [event, setEvent] = useState();
  const [showEvent, setShowEvent] = useState(false);
  bookings.forEach((booking, index) => {
    if (
      booking.room === "BellRoom" &&
      booking.confirmed === true &&
      (booking.maintenance === false || !booking.maintenance)
    ) {
      roomBookings.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `${booking.event}  in ${booking.room}`,
        description: booking.description,
        backgroundColor: "blue",
        textColor: "white",
      });
    }
    if (
      booking.room === "Theater" &&
      booking.confirmed === true &&
      (booking.maintenance === false || !booking.maintenance)
    ) {
      roomBookings.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `${booking.event}  in ${booking.room}`,
        backgroundColor: "red",
        textColor: "yellow",
        description: booking.description,
      });
    }
    if (
      booking.room === "Lobby" &&
      booking.confirmed === true &&
      (booking.maintenance === false || !booking.maintenance)
    ) {
      roomBookings.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `${booking.event}  in ${booking.room}`,
        description: booking.description,
        backgroundColor: "green",
        textColor: "white",
      });
    }
    if (
      booking.room === "LivingRoom" &&
      booking.confirmed === true &&
      (booking.maintenance === false || !booking.maintenance)
    ) {
      roomBookings.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `${booking.event}  in ${booking.room}`,
        description: booking.description,
        backgroundColor: "yellow",
        textColor: "black",
      });
    }
    if (booking.maintenance === true && booking.confirmed === true) {
      roomBookings.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `${booking.event}  in ${booking.room}`,
        description: booking.description,
        backgroundColor: "gray",
        textColor: "black",
      });
    }
  });
  const onSelectEvent = (props) => {
    setEvent(props);
    setShowEvent(true);
  };

  return (
    <div style={{ height: "80%" }}>
      <Calendar
        startAccessor="start"
        endAccessor="end"
        events={roomBookings}
        localizer={localizer}
        step={60}
        style={{ height: "70vh", fontFamily: "Roboto" }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={(props) => onSelectEvent(props)}
      />
      {showEvent && <SelectedEvent props={event} />}
    </div>
  );
};

export default BookingsCalendar;
