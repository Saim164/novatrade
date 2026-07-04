import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>Get the Nova Trade App</h3>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Download our app for a seamless experience.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          <img
            src="/media/images/googlePlayBadge.svg"
            alt="Get it on Google Play"
            style={{ height: "40px" }}
          />
        </Link>
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          <img
            src="/media/images/appstoreBadge.svg"
            alt="Download on the App Store"
            style={{ height: "40px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Apps;
