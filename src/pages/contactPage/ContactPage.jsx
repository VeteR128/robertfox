import React from "react";
import { Contact } from "../app/main/contact/Contact";
import { Location } from "./location/Location";

export const ContactPage = (props) => {
  return (
    <main>
      <Contact
        anim={props.anim}
        number={"01"}
        color={"#f7f7f7"}
        text={"black"}
      />
      <Location anim={props.anim} />
    </main>
  );
};
