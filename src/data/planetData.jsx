import React from "react";

export const planets = [
  {
    id: "merkur",
    name: "Merkur",
    image: "/images/merkur.png",
    description: (
      <div className="space-y-4">
        <p>
          Merkur er den nærmeste planeten til solen og den minste i solsystemet.
        </p>
        <p>Overflaten ligner på Månen med mange kratere og tynne atmosfære.</p>
      </div>
    ),
  },
  {
    id: "venus",
    name: "Venus",
    image: "/images/venus.png",
    description: (
      <div className="space-y-4">
        <p>
          Venus er lik Jorden i størrelse, men har en tykk atmosfære av CO₂ og
          ekstrem varme.
        </p>
        <p>
          Den roterer sakte og i motsatt retning av de fleste andre planeter.
        </p>
      </div>
    ),
  },
  {
    id: "jorden",
    name: "Jorden",
    image: "/images/jorden.png",
    description: (
      <div className="space-y-4">
        <p>
          Jorden er den tredje planeten fra solen og den eneste vi vet har liv.
        </p>
        <p>
          Over 70 % av overflaten er dekket av vann, og atmosfæren består
          hovedsakelig av nitrogen og oksygen.
        </p>
      </div>
    ),
  },
  {
    id: "mars",
    name: "Mars",
    image: "/images/mars.png",
    description: (
      <div className="space-y-4">
        <p>
          Mars kalles ofte den røde planeten på grunn av sitt jernoksid-rike
          støv.
        </p>
        <p>
          Den har de høyeste fjellene og dypeste dalene i solsystemet, og har to
          måner: Phobos og Deimos.
        </p>
      </div>
    ),
  },
  {
    id: "jupiter",
    name: "Jupiter",
    image: "/images/jupiter.png",
    description: (
      <div className="space-y-4">
        <p>
          Jupiter er den største planeten i solsystemet og er en gassgigant.
        </p>
        <p>
          Den er kjent for sin store røde flekk – en enorm storm – og har over
          90 måner.
        </p>
      </div>
    ),
  },
  {
    id: "saturn",
    name: "Saturn",
    image: "/images/saturn.png",
    description: (
      <div className="space-y-4">
        <p>
          Saturn er berømt for sitt imponerende ringsystem laget av is og
          steinpartikler.
        </p>
        <p>
          Den er også en gassgigant, og den nest største planeten i solsystemet.
        </p>
      </div>
    ),
  },
  {
    id: "uranus",
    name: "Uranus",
    image: "/images/uranus.png",
    description: (
      <div className="space-y-4">
        <p>
          Uranus er en isgigant med en blek blågrønn farge på grunn av metan i
          atmosfæren.
        </p>
        <p>
          Den roterer på siden, noe som gjør dens akse nesten parallell med
          baneplanet.
        </p>
      </div>
    ),
  },
  {
    id: "neptun",
    name: "Neptun",
    image: "/images/neptun.png",
    description: (
      <div className="space-y-4">
        <p>
          Neptun er den ytterste planeten i solsystemet og også en isgigant.
        </p>
        <p>Den har sterke vinder og mørke stormsystemer i atmosfæren.</p>
      </div>
    ),
  },
];
