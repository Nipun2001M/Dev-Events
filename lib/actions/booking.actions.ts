"use server";
import { Booking } from "@/database";

export const createBooking = async ({
  eventId,
  slug,
  email,
}: {
  eventId: string;
  slug: string;
  email: string;
}) => {
  try {
    const booking = (
      await Booking.create({
        eventId,
        slug,
        email,
      })
    ).lean();

    return { success: true, booking };
  } catch (e) {
    console.log("create booking failed", e);
    return { success: false };
  }
};
