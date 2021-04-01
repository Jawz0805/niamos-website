import React, { useState, useEffect } from "react";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import getData from "../../Utilities/getData";
import PageHeading from "../../Containers/PageHeading/PageHeading";

const HirePage = () => {
  const [pageData, setPageData] = useState();
  // const [rooms, setRooms] = useState();

  useEffect(() => {
    getData("hire-page").then((res, err) => {
      setPageData(res);
    });
    getData("rooms").then((res, err) => {
      // setRooms(res);
    });
  }, []);

  return (
    <PageWrapper>
      {pageData && (
        <div>
          <PageHeading text={pageData} />
          {/* {rooms &&
            rooms.map((room, index) => {
              return (
                <div key={room.id}>
                  <h1>{room.room}</h1>
                  <ReactMarkdown source={room.description} />
                  <p>£{room.price} - Per Hour</p>
                </div>
              );
            })} */}

          <header className="App-header">
            <iframe
              title="Niamos Calendar Test"
              className="airtable-embed"
              src="https://airtable.com/embed/shrft35fsnZgezEim?backgroundColor=red&viewControls=on"
              frameBorder="0"
              onmousewheel=""
              width="100%"
              height="533"
              style={{
                background: "#ccc",
              }}
            ></iframe>

            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
            <iframe
              title="niamos air-table form"
              className="airtable-embed airtable-dynamic-height"
              src="https://airtable.com/embed/shrIuwedIDcGea85v?backgroundColor=red"
              frameBorder="0"
              onmousewheel=""
              width="100%"
              height="1456"
              style={{
                background: "#ccc",
              }}
            ></iframe>
          </header>
        </div>
      )}
    </PageWrapper>
  );
};

export default HirePage;
