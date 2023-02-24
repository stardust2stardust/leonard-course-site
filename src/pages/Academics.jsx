import React from "react";
import Courses from "../components/Courses";
import Education from "../components/Education";

export default function Academics() {
  return (
    <div className="page-content">
      <h1 className="page-title">Academics</h1>
      <Education />
      <Courses />
    </div>
  );
}
