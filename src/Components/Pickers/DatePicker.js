import React from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";

const DatePickers = ({ selectedDate, setSelectedDate, ref }) => {
  // The first commit of Material-UI

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="center-div">
        <DatePicker
          disableToolbar
          variant="inline"
          format="Do - MMMM"
          margin="normal"
          autoOk={true}
          disablePast={true}
          id="fromDate"
          label="From Date"
          value={selectedDate}
          onChange={handleDateChange}
          ref={ref}
        />
        <TimePicker
          margin="normal"
          id="fromTime"
          label="From Time"
          value={selectedDate}
          onChange={handleDateChange}
          minutesStep={15}
          disablePast={true}
          ref={ref}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default DatePickers;
