import EventCard from "@/components/EventCard";
import Explorebtn from "@/components/Explorebtn";
import { events } from "@/lib/constants";
import React from "react";


const Page = () => {
  console.log("console");
  return (
    <section>
      <h1 className="text-center">
        {" "}
        The Hub for Every dev <br /> Event You Cant Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons ,Meetups , and Conferences ,All in One Place
      </p>
      <Explorebtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <EventCard
            key={event.location}
              {...event}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
