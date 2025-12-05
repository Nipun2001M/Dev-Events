import EventCard from "@/components/EventCard";
import Explorebtn from "@/components/Explorebtn";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import React from "react";
import { events } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async() => {
  'use cache'
  cacheLife('hours')
  // const resposne =await fetch(`${BASE_URL}/api/events`)
  // const  {events}=await resposne.json()
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
          {events &&
            events.length > 0 &&
            events.map((event) => (
              <EventCard key={event._id} {...(event as unknown as IEvent)} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
