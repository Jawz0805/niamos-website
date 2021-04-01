import React, { useEffect, useState } from "react";
import getData from "../../Utilities/getData";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import EventRow from "./EventRow";
import "./_WhatsOn.scss";
import EventCategories from "./EventCategories";
import Button from "../../Components/Button";
import PageHeading from "../../Containers/PageHeading/PageHeading";

const WhatsOn = () => {
  const [pageData, setPageData] = useState("");
  const [events, setEvents] = useState("");
  const [categories, setCategories] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getData("whats-on-page").then((res, err) => {
      setPageData(res);
    });
    getData("events").then((res, err) => {
      setEvents(
        res.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
      );

      setCategories(
        res
          .map((event, i) => {
            return event.category;
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
      );
    });
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <PageWrapper>
      {pageData && (
        <div>
          <PageHeading text={pageData} />

          <div className="filter-container">
            <Button
              onClick={() => {
                setFilter("all");
              }}
              text="All"
            />
            <Button
              onClick={() => {
                setFilter("Free");
              }}
              text="Free"
            />

            {categories &&
              categories.map((category, index) => {
                return (
                  <EventCategories
                    item={category}
                    key={(category, index)}
                    setFilter={setFilter}
                  />
                );
              })}
          </div>
          <div className="events-container">
            <ul
              className="events-grid-row fredoka titles"
              style={{ paddingTop: "50px" }}
            >
              <li className="event-row-item ">Event</li>

              <li className="event-row-item">Venue</li>
              <li className="event-row-item">Date</li>
              <li className="event-row-item">Time</li>

              <li className="event-row-item">Price</li>
              <li className={`event-row-item `}>Tickets</li>
            </ul>
            {events &&
              events.map((event, index) => {
                if (event.date >= today) {
                  if (filter === "all") {
                    return <EventRow event={event} key={event.id} />;
                  } else if (filter === event.category) {
                    return <EventRow event={event} key={event.id} />;
                  } else if (filter === "Free" && event.price === 0) {
                    return <EventRow event={event} key={event.id} />;
                  } else return null;
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default WhatsOn;
