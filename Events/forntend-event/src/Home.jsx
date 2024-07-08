import axios from "axios";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  // useEffect(()=>{
  //     axios.get('http://localhost:3000/')
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // },[])
  return (
    <>
      <div className="py-10 mx-6 ">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2  text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Event
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </a>
        <br />
        <br />
        <hr />
      </div>
      <div className="flex justify-center">
        <div className="max-w-sm mx-5 bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-700">
                Event Name
              </h5>
              <p className="mb-3 font-bold text-2xl text-green-700 ">
                14 jun 2024
                <span className="p-14 mr-7 text-blue-700 text-xl">1 hours</span>
              </p>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <hr />
            <div className="mx-auto flex justify-between items-center mt-10">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                </span>
                Update Date
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete Event
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
