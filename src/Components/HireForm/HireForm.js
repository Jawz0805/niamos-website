import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postData from "../../Utilities/postData";
import "./Form.scss";

const HireForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    postData("room-bookings", data, "booking sent");
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="roboto">
        <label>First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          ref={register}
        ></input>
        <label>Second Name</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          placeholder="Second Name"
          ref={register}
        ></input>
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          ref={register}
        ></input>
        <label>Event</label>
        <input
          type="text"
          id="event"
          name="event"
          placeholder="Event"
          ref={register}
        ></input>
        <label>Select A Room</label>
        <select
          name="room"
          id="room"
          placeholder="Select A Room"
          ref={register}
        >
          <option value="BellRoom">Bell Room</option>
          <option value="Theater">Theater</option>
          <option value="Lobby">Lobby</option>
          <option value="LivingRoom">Living Room</option>
        </select>
        <label>Start Date</label>
        <input
          type="datetime-local"
          id="start"
          name="startTime"
          onChange={(event) => setStartDate(event.target.value)}
          ref={register}
          step="600"
          placeholder={startDate}
        ></input>
        <label>End Date</label>
        <input
          type="datetime-local"
          id="end"
          name="endTime"
          onChange={(event) => setEndDate(event.target.value)}
          ref={register}
          step="600"
          placeholder={endDate}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HireForm;
