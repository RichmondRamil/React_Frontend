import React from "react";
import { CardTitleDot } from "../../components";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import {
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Person6,
} from "../../assets";
import "./meetingschedule.scss";
const MeetingSchedule = () => {
  const dataItems = [
    {
      meetingId: 1,
      img: Person1,
      meetingWith: "Call with woods",
      schedule: "21 July | 08:20-10:30",
      meetingFor: "Business",
    },
    {
      meetingId: 2,
      img: Person2,
      meetingWith: "Call with hilda",
      schedule: "24 Jul | 11:30-12:00",
      meetingFor: "Meditation",
    },
    {
      meetingId: 3,
      img: Person3,
      meetingWith: "Conference call",
      schedule: "28 Jul | 05:00-6:45",
      meetingFor: "Dinner",
    },
    {
      meetingId: 4,
      img: Person4,
      meetingWith: "Meeting with Mark",
      schedule: "03 Aug | 07:00-8:30",
      meetingFor: "Meetup",
    },
    {
      meetingId: 5,
      img: Person5,
      meetingWith: "Meeting in Oakland",
      schedule: "14 Aug | 04:15-05:30",
      meetingFor: "Business",
    },
    {
      meetingId: 6,
      img: Person6,
      meetingWith: "Meeting with Carl",
      schedule: "05 Oct | 10:00-12:45",
      meetingFor: "Party",
    },
  ];

  return (
    <div className="meeting">
      <div className="meeting-container">
        <CardTitleDot title="Meeting Schedule" />
        {dataItems.map((item) => (
          <div key={item.meetingId} className="meeting-container__items">
            <div className="meeting-container__items-profile">
              <img src={item.img} alt="" />
              <div className="meeting-container__items-profile_desc">
                <p>{item.meetingWith}</p>
                <div className="meeting-container__items-profile_desc-icon">
                  <CalendarTodayOutlinedIcon className="icon" />
                  <span>{item.schedule}</span>
                </div>
              </div>
            </div>
            <div className="meeting-container__items-status">
              <p className={item.meetingFor}>{item.meetingFor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingSchedule;
