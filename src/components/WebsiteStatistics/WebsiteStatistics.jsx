import React, { useState } from "react";
import Chart from "react-apexcharts";
import { CardTitleDot } from "../../components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./websitestatistics.scss";

const WebsiteStatistics = () => {
  const [option, setOption] = useState({
    series: [
      {
        name: "Net Profit",
        data: [37, 57, 45, 75, 57, 40, 65],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      colors: [
        "#9155FD",
        "#9155FD",
        "#9155FD",
        "#9155FD",
        "#9155FD",
        "#9155FD",
        "#9155FD",
      ],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "20%",
          barHeight: "20%",
        },
      },
      xaxis: {
        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  });

  return (
    <div className="web-stat">
      <div className="web-stat__container">
        <CardTitleDot title="Website Statistics" />
        <div className="web-stat__container-total">
          <div className="web-stat__container-total_number">
            <h1>4,590</h1>
            <p>Total Traffic</p>
          </div>
          <div className="web-stat__container-total_graph">
            <Chart
              options={option.options}
              series={option.series}
              type="bar"
              height={120}
              width={200}
            />
          </div>
        </div>
        <div className="web-stat__container-items">
          <div className="web-stat__container-items-circles">
            <div className="direct"></div>
            <p>Direct</p>
          </div>
          <div className="web-stat__container-items-price">
            <span>86,471</span>
          </div>
          <div className="web-stat__container-items-percent">
            <span>15%</span>
            <KeyboardArrowDownIcon className="arrDown" />
          </div>
        </div>
        <div className="web-stat__container-items">
          <div className="web-stat__container-items-circles">
            <div className="organic"></div>
            <p>Organic</p>
          </div>
          <div className="web-stat__container-items-price">
            <span>59,484</span>
          </div>
          <div className="web-stat__container-items-percent">
            <span>15%</span>
            <KeyboardArrowUpIcon className="arrUp" />
          </div>
        </div>
        <div className="web-stat__container-items">
          <div className="web-stat__container-items-circles">
            <div className="referral"></div>
            <p>Referral</p>
          </div>
          <div className="web-stat__container-items-price">
            <span>2,534</span>
          </div>
          <div className="web-stat__container-items-percent">
            <span>15%</span>
            <KeyboardArrowUpIcon className="arrUp" />
          </div>
        </div>
        <div className="web-stat__container-items">
          <div className="web-stat__container-items-circles">
            <div className="social"></div>
            <p>Social</p>
          </div>
          <div className="web-stat__container-items-price">
            <span>86</span>
          </div>
          <div className="web-stat__container-items-percent">
            <span>15%</span>
            <KeyboardArrowDownIcon className="arrDown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteStatistics;
