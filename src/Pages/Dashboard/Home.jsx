import React from "react";
import {
  FaChartGantt,
  FaUserCheck,
  FaUserGroup,
  FaUsers,
} from "react-icons/fa6";
import SalesTrackingChart from "../../components/ui/Home/SalesTrackingChart";
import { GrUserNew } from "react-icons/gr";
import { TbListCheck } from "react-icons/tb";
import { LuPlaySquare } from "react-icons/lu";

const Home = () => {
  const summaryData = [
    {
      icon: <FaUsers color="#ff5f02" className="" size={24} />,
      title: "Total User",
      price: 12478,
    },
    {
      icon: <GrUserNew color="#ff5f02" className="" size={24} />,
      title: "New Sign Ups",
      price: 478,
    },
    {
      icon: <FaUserCheck color="#ff5f02" className="" size={24} />,
      title: "Active Vendors     ",
      price: 40,
    },
    {
      icon: <TbListCheck color="#ff5f02" className="" size={24} />,
      title: "Completed Orders",
      price: 478,
    },
    {
      icon: <LuPlaySquare color="#ff5f02" className="" size={24} />,
      title: "Shop Services",
      price: 340,
    },
  ];

  const vendors = [
    {
      profileImage:
        "https://img.freepik.com/free-photo/portrait-smiling-young-businesswoman-standing-with-her-arm-crossed-against-gray-wall_23-2147943827.jpg?t=st=1733154044~exp=1733157644~hmac=e7a041402652658717b34432e8b2fdd9fe4bd89d6e6fe8100f5d92066e4da0ff&w=360",
      name: "Denisa Ozel",
      percent: "45",
    },
    {
      profileImage:
        "https://img.freepik.com/free-photo/woman-with-crossed-arms_23-2147574179.jpg?t=st=1733154065~exp=1733157665~hmac=f47010fc0b212169e42038b55ddca92d5b799afe9af8ca8b1664a626dd87d950&w=360",
      name: "Jessica Roy",
      percent: "20",
    },
    {
      profileImage:
        "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?t=st=1733153917~exp=1733157517~hmac=0bb807f759f6dfe705cec53d9323a1d62defdc6fb1e77beb20715be2e78f6cbb&w=360",
      name: "John Doe",
      percent: "88",
    },
    {
      profileImage:
        "https://img.freepik.com/free-photo/front-view-elegant-businesswoman_23-2148788834.jpg?t=st=1733154113~exp=1733157713~hmac=9ae5b6fa0ef8dcd5993ec8d242b2a1ba7a84f32f9d2a57876a1dfad1c6497aa3&w=740",
      name: "Jenny Wilson",
      percent: 70,
    },
    {
      profileImage:
        "https://img.freepik.com/free-photo/side-view-businesswoman-working-with-smartphone-laptop_23-2148788869.jpg?t=st=1733154132~exp=1733157732~hmac=d423d762b7c9bdd66b8fed3c52806287cdd3a1786d9a2df0dc939715e57b8524&w=360",
      name: "Maria Morriss",
      percent: 20,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-5 gap-6 h-[100px]">
        {summaryData?.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl  py-0 px-6 flex items-center justify-start gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-[#fcf5f2] flex items-center justify-center">
              {value?.icon}
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-center text-2xl text-base ">
                {value?.title}
              </h2>
              <h3 className="text-center   text-[32px] font-semibold">
                {value?.price}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center gap-6 mt-6">
        <div className="w-5/12 bg-white border rounded-2xl py-3 flex flex-col justify-center">
          <p className="text-base font-semibold px-4 py-">User Activity</p>
          <SalesTrackingChart />
        </div>
        <div className="w-7/12">
          <div className="border bg-white rounded-2xl pb-3 h-full flex flex-col justify-center">
            <p className="text-base font-semibold px-10 py-4">Vendors</p>
            <div className="flex flex-col px-10 gap-5">
              {vendors?.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Vendor Profile Image */}
                  <img
                    className="w-10 h-10 rounded-full"
                    src={value?.profileImage}
                    alt={value?.name}
                  />

                  {/* Vendor Name */}
                  <h1 className="text-sm font-medium w-32 truncate">
                    {value?.name}
                  </h1>

                  {/* Progress Bar */}
                  <div className="flex items-center flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${value.percent}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Percentage */}
                  <p className="text-sm font-medium">{value?.percent}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;