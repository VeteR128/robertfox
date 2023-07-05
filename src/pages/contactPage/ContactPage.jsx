import React from "react";
import { Contact } from "../app/main/contact/Contact";
import { Location } from "./location/Location";

export const ContactPage = () => {
  return (
    <main>
      <Contact color={"#f7f7f7"} text={"black"} />
      <Location />
    </main>
  );
};
