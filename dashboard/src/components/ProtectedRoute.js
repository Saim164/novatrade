import React, { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3002/", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setIsVerified(true);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:5173/login";
      });
  }, []);

  if (!isVerified) return null;

  return children;
};

export default ProtectedRoute;
