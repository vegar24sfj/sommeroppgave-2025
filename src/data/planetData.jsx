import React from "react";

export const planetDescriptions = {
  merkur: (
    <div className="space-y-4">
      <p>Merkur er den nærmeste planeten til solen og den minste i solsystemet.</p>
      <p>Overflaten ligner på Månen med mange kratere og tynne atmosfære.</p>
    </div>
  ),

  venus: (
    <div className="space-y-4">
      <p>Venus er lik Jorden i størrelse, men har en tykk atmosfære av CO₂ og ekstrem varme.</p>
      <p>Den roterer sakte og i motsatt retning av de fleste andre planeter.</p>
    </div>
  ),

  jorden: (
    <div className="space-y-4">
      <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life.</p>
      <p>This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water.</p>
      <p>Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.</p>
      <p>The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere.</p>
      <p>Most of Earth's land is at least somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers, and atmospheric water combined.</p>
      <p>Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes.</p>
      <p>Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.</p>

      <h3 className="font-semibold mt-4">Earth data:</h3>
      <ul className="list-disc list-inside">
        <li>Discovered: "unknown date" by "unknown"</li>
        <li>Gravity: 9.80 m/s²</li>
        <li>Mass: 5.97×10²⁴ kg</li>
        <li>Volume: 1.08 × 10¹² km³</li>
        <li>Escape height: 1.12e+4 km</li>
        <li>Avg. Temperature: 15 °C</li>
        <li>Radius: 6371.0084 km</li>
        <li>Polar radius: 6.36e+3 km</li>
        <li>Perihelion: 1.47e+8 km</li>
        <li>Aphelion: 1.52e+8 km</li>
        <li>Moons: 1</li>
      </ul>
    </div>
  ),

  mars: (
    <div className="space-y-4">
      <p>Mars is the fourth planet from the Sun. It is also known as the "Red Planet", because of its orange-red appearance.</p>
      <p>Mars is a desert-like rocky planet with a tenuous carbon dioxide atmosphere.</p>
      <p>At the average surface level the atmospheric pressure is a few thousandths of Earth's, atmospheric temperature ranges from −153 to 20 °C and cosmic radiation is high.</p>
      <p>Mars retains some water, in the ground as well as thinly in the atmosphere, forming cirrus clouds, frost, larger polar regions of permafrost and ice caps, but no liquid surface water.</p>
      <p>Its surface gravity is roughly a third of Earth's or double that of the Moon.</p>
      <p>It is half as wide as Earth or twice the Moon, with a diameter of 6,779 km (4,212 mi), and has a surface area the size of all the dry land of Earth.</p>

      <h3 className="font-semibold mt-4">Mars data:</h3>
      <ul className="list-disc list-inside">
        <li>Discovered: "unknown date" by "unknown"</li>
        <li>Gravity: 3.71 m/s²</li>
        <li>Mass: 6.42×10²³ kg</li>
        <li>Volume: 1.63 × 10¹¹ km³</li>
        <li>Escape height: 5.03e+3 km</li>
        <li>Avg. Temperature: -63 °C</li>
        <li>Radius: 3389.5 km</li>
        <li>Polar radius: 3.38e+3 km</li>
        <li>Perihelion: 2.07e+8 km</li>
        <li>Aphelion: 2.49e+8 km</li>
        <li>Moons: 2</li>
      </ul>
    </div>
  ),

  jupiter: (
    <div className="space-y-4">
      <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</p>
      <p>It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun.</p>
      <p>Its diameter is 11 times that of Earth and a tenth that of the Sun.</p>
      <p>Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years.</p>
      <p>It is the third-brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times.</p>
      <p>Its name derives from that of Jupiter, the chief deity of ancient Roman religion.</p>

      <h3 className="font-semibold mt-4">Jupiter data:</h3>
      <ul className="list-disc list-inside">
        <li>Discovered: "unknown date" by "unknown"</li>
        <li>Gravity: 24.79 m/s²</li>
        <li>Mass: 1.90×10²⁷ kg</li>
        <li>Volume: 1.43 × 10¹⁵ km³</li>
        <li>Escape height: 6.02e+4 km</li>
        <li>Avg. Temperature: -108 °C</li>
        <li>Radius: 69911 km</li>
        <li>Polar radius: 6.69e+4 km</li>
        <li>Perihelion: 7.40e+8 km</li>
        <li>Aphelion: 8.17e+8 km</li>
        <li>Moons: 95</li>
      </ul>
    </div>
  ),

  // Legg gjerne til flere planeter på samme måte ...
};
