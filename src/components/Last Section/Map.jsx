import React from "react";

export default function Map() {
  return (
    <div className="section" id="map">
      <div className="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58749.56894244736!2d72.59750399999999!3d23.029350400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718473681679!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}
