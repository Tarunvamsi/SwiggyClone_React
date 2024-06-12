import React, { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "../../utils/constants";

const Location = ({ onLocationSearch }) => {
  const [location, setLocation] = useState("");
  const [geocoder, setGeocoder] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        setScriptLoaded(true);
      };
    };

    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=apiKey&libraries=places"
    );
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      initializeAutocomplete();
      setGeocoder(new window.google.maps.Geocoder());
    }
  }, [scriptLoaded]);

  const initializeAutocomplete = () => {
    const input = document.getElementById("my-address");
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.setTypes(["geocode"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const address = place.formatted_address;
        setLocation(address);
      }
    });
  };

  const handleSearch = () => {
    if (geocoder) {
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          console.log("Latitude:", lat);
          console.log("Longitude:", lng);
          onLocationSearch(lat, lng);
        } else {
          console.error(
            "Geocode was not successful for the following reason:",
            status
          );
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  };

  return (
    <div className="p-4 m-4 border-red-500">
      <input
        type="text"
        id="my-address"
        className="px-6 py-3 border border-solid border-black"
        value={location}
        placeholder="Search your location..."
        onChange={(e) => {
          setLocation(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        className="px-6 py-3 bg-green-100 m-4 rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Location;
