import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8 mt-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold text-center">Our Locations</h2>
        <div className="grid md:grid-cols-3 gap-6 my-6">
          <div>
            <h3 className="font-semibold">Gangtok Office</h3>
            <p>MG Marg, Gangtok, Sikkim, India</p>
            <p>+91 98765 43210</p>
            <a href="https://maps.google.com" className="text-yellow-400">
              GET DIRECTIONS »
            </a>
          </div>
          <div>
            <h3 className="font-semibold">Other Office</h3>
            <p>Some Address, Another City</p>
            <p>+91 12345 67890</p>
            <a href="https://maps.google.com" className="text-yellow-400">
              GET DIRECTIONS »
            </a>
          </div>
          <div className="h-40">
            <MapContainer center={[27.3389, 88.6065]} zoom={13} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[27.3389, 88.6065]}>
                <Popup>Gangtok Office</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="text-center border-t border-gray-500 pt-4">
          <h3 className="text-lg font-semibold">Join the BFM Social Community</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
            <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


