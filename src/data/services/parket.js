import React from "react";
import Paragraph from "@/components/Paragraph";

const parket = [
  {
    index: 1,
    title: "Massief parket",
    image:
      "https://www.wooddesign.be/wp-content/uploads/2016/06/16819188_1247654351938737_8040962893899610627_o.jpg",
    description: () => (
        <>
          <Paragraph mb={3}>
            Een massieve parketvloer is er in verschillende vormen en afmetingen zoals plankenvloer, visgraat, mozaïek, lamel op kant, hongaarse punt, engels verband,….<br />
          </Paragraph>
          <Paragraph mb={3}>
            Traditioneel wordt dit op een eiken mozaïek ondervloer gelijmd en genageld, maar kan afhankelijk vd dikte en breedte ook rechtstreeks op chape verlijmd worden.
          </Paragraph>
          <Paragraph mb={3}>
            Dit type vloer wordt meestal na de plaatsing geschuurd en afgewerkt met olie, vernis of wax. Afhankelijk van de gekozen kleur kan deze eerst nog ingekleurd worden met beits.
          </Paragraph>
        </>
    )

  },
  {
    index: 2,
    title: "Meerlaags Parket",
    image:
      "https://www.wooddesign.be/wp-content/uploads/2016/06/parketvloeren.jpg",
    description:
      "Ook wel meerlagenparket genoemd. Bestaat uit een massieve toplaag tussen 3 en 6mm, verlijmd op een berken multiplex of blokplaat. Deze parketvloeren worden meestal afgewerkt in de fabriek voor plaatsing, maar kunnen ook plaatselijk op kleur naar keuze afgewerkt worden. Vol verlijmd op chape. Vloer kan volgens dikte toplaag nog 2-5 keer opgeschuurd en afgewerkt worden.",
  },
  {
    index: 3,
    title: "Fineerparket",
    image:
      "https://www.wooddesign.be/wp-content/uploads/2016/06/banner_dummy.jpg",
    description:
      "Idem als meerlaags parket, maar met een toplaag van minder dan 2mm en een onderlaag in MDF of multiplex. Het verschil met laminaat is dat het geen imitatieprint is, maar echt hout.",
  },
];

export default parket;
