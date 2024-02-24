import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="App" id="contact">
      <InlineWidget url="https://calendly.com/joshua-rowe/15min" />
    </div>
  );
};

export default CalendlyWidget;
