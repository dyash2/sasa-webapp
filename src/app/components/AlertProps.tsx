"use client";
import { useState } from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info";
}

export default function Alert({ message, type = "info" }: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-100 border-green-500 text-green-700"
      : type === "error"
      ? "bg-red-100 border-red-500 text-red-700"
      : "bg-blue-100 border-blue-500 text-blue-700";

  return (
    <div
      className={`border-l-4 p-4 mb-4 ${bgColor} rounded shadow-md flex justify-between items-center max-w-md`}
    >
      <p>{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="text-xl font-bold ml-4 hover:text-gray-900"
      >
        &times;
      </button>
    </div>
  );
}
