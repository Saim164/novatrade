import React, { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/`, {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setIsVerified(true);
        } else {
          window.location.href = `${process.env.REACT_APP_LANDING_URL}/login`;
        }
      })
      .catch(() => {
        window.location.href = `${process.env.REACT_APP_LANDING_URL}/login`;
      });
  }, []);

  if (!isVerified) return null;

  return children;
};

export default ProtectedRoute;
