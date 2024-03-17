"use client";
import { useEffect } from "react";
import getAllData from "@/app/services/getAll";

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData();
        if (response?.status === 200) {
          console.log("Data fetched successfully:", response.data);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <h1>Hello, Next.js!</h1>;
}
