package com.summative.mealsonwheels.utils;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class HaversineDistanceCalculator {


    public double calculateDistance(double lat1, double lon1, double lat2, double lon2) {

        // Mengkonversi koordinat menjadi radian
        double latRad1 = Math.toRadians(lat1);
        double lonRad1 = Math.toRadians(lon1);
        double latRad2 = Math.toRadians(lat2);
        double lonRad2 = Math.toRadians(lon2);

        // Selisih sudut latitude dan longitude
        double latDiff = latRad2 - latRad1;
        double lonDiff = lonRad2 - lonRad1;

        // Rumus Haversine
        double a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2)
                + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Menghitung jarak
        // Radius bumi dalam kilometer
        double EARTH_RADIUS = 6371;
        double distance = EARTH_RADIUS * c;

        return distance;
    }


}
