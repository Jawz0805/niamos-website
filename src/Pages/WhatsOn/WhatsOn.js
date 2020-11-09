import React, { useEffect, useState } from "react";
import getData from "../../Utilities/getData";
import ReactMarkdown from "react-markdown";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import HeadingLetters from "../../Components/Animation/HeadingLetters";
import EventRow from "./EventRow";
import "./WhatsOn.scss";
import EventCategories from "./EventCategories";

const WhatsOn = () => {
  const [pageData, setPageData] = useState("");
  const [events, setEvents] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getData("whats-on-page").then((res, err) => {
      setPageData(res);
    });
    getData("events").then((res, err) => {
      setEvents(res);
    });
    getData("event-categories").then((res, err) => {
      setCategories(res);
    });
  }, []);
  const today = new Date().toISOString().slice(0, 10);
  console.log(events[0]);
  return (
    <PageWrapper>
      {pageData && (
        <div className="page-title">
          <HeadingLetters heading={pageData.Title} />
          <ReactMarkdown source={pageData.Description} />
        </div>
      )}
      <div>
        {categories &&
          categories.map((category, index) => {
            return (
              <EventCategories
                item={category}
                key={category.id}
                setFilter={setFilter}
              />
            );
          })}
      </div>
      <div className="events-container">
        {events &&
          events.map((event, index) => {
            if (event.date >= today && filter === "all") {
              return <EventRow event={event} key={event.id} />;
            } else {
              return;
            }
          })}
      </div>
    </PageWrapper>
  );
};

export default WhatsOn;
