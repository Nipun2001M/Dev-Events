"use client";
import { createBooking } from "@/lib/actions/booking.actions";
import posthog from "posthog-js";
import React, { useState } from "react";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
  const [email, setEmail] = useState("");
  const [submmited, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    const { success } = await createBooking({ eventId, slug, email });
    if (success) {
      setSubmitted(true);
      posthog.capture('event-booked',{eventId,slug,email})
    } else {
      console.log("Booking Creation Failed");     
       posthog.captureException("event-booking error", { eventId, slug, email });

    }
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };
  return (
    <div id="book-event">
      {submmited ? (
        <p className="text-sm"> Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter Your Email Address"
            ></input>
          </div>
          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
