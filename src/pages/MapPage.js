// src/pages/map/MapPage.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set default icon paths for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = () => {
    const mapRef = useRef(null); // Reference to the map instance
    const markerRef = useRef(null); // Reference to the marker instance

    useEffect(() => {
        // Initialize the map only if it's not already initialized
        if (!mapRef.current) {
            // Create the map instance
            mapRef.current = L.map('mapContainer').setView([51.505, -0.09], 15);

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        // Function to get current location
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;

                        // Set the map view to the user's location
                        mapRef.current.setView([latitude, longitude], 15);

                        // Add a marker for the user's location
                        if (!markerRef.current) {
                            markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current);
                        } else {
                            markerRef.current.setLatLng([latitude, longitude]); // Update marker position
                        }
                    },
                    (error) => {
                        console.error('Error obtaining location', error);
                    }
                );
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        };

        // Call getLocation function to obtain user's location
        getLocation();

        // Handle arrow key movement
        const handleKeyDown = (e) => {
            if (markerRef.current) {
                const latLng = markerRef.current.getLatLng(); // Get current position

                switch (e.key) {
                    case 'ArrowUp':
                        markerRef.current.setLatLng([latLng.lat + 0.0001, latLng.lng]); // Move up
                        break;
                    case 'ArrowDown':
                        markerRef.current.setLatLng([latLng.lat - 0.0001, latLng.lng]); // Move down
                        break;
                    case 'ArrowLeft':
                        markerRef.current.setLatLng([latLng.lat, latLng.lng - 0.0001]); // Move left
                        break;
                    case 'ArrowRight':
                        markerRef.current.setLatLng([latLng.lat, latLng.lng + 0.0001]); // Move right
                        break;
                    default:
                        break;
                }

                // Update map view to center the marker
                mapRef.current.setView(markerRef.current.getLatLng(), 15);
            }
        };

        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove the map
        return () => {
            if (mapRef.current) {
                mapRef.current.remove(); // Remove the map instance
                mapRef.current = null; // Reset reference
                if (markerRef.current) {
                    markerRef.current.remove(); // Remove the marker instance
                    markerRef.current = null; // Reset marker reference
                }
            }
            // Remove event listener
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Only runs on mount

    return (
        <div>
            <h2>Your Current Location</h2>
            <div id="mapContainer" style={{ height: '700px', width: '100%' }} />
        </div>
    );
};

export default MapPage;
