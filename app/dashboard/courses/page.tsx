"use client";
import AllCourses from "@/components/Courses/AllCourses";
import Menu from "@/components/Courses/Menu";
import React, { useState } from "react";

const Courses = () => {
  const [showEnrolled, setShowEnrolled] = useState(false);
  return (
    <div className="p-6 h-full">
      <Menu showEnrolled={showEnrolled} setShowEnrolled={setShowEnrolled} />

      <AllCourses showEnrolled={showEnrolled} />
    </div>
  );
};

export default Courses;
