import React, { Fragment } from 'react';
import Text from "@/components/Text";

const parket = [
    {
        index: 1,
        title: "Binnenwand of plafond",
        image: "https://www.wooddesign.be/wp-content/uploads/2016/05/IMG_0704.jpg",
        description: <Fragment>
            Hout voelt altijd aangenaam warm aan. Toch doen houten wanden meer voor uw
            wooncomfort dan het gezellig maken. Hout heeft een lage geleidbaarheid waardoor
            het trager opwarmt en afkoelt. Zo blijft het temperatuurverschil tussen het
            houtoppervlak en zijn omgeving beperkt.
            <br />
            <br />
            <Text fontWeight="bold">Natuurlijke buffer</Text><br />
            Grote houtoppervlakken vormen een buffer voor het binnenklimaat. Ze houden de
            luchtvochtigheid stabiel, wat de ruimtes gezonder maakt – ook als die vochtig zijn.
            De aanwezigheid van hout vermindert ook het risico op infecties en allergieën.
            Bovendien is hout niet vatbaar voor statische elektriciteit en trekt het daarom
            geen stof en vuil aan. Ten slotte bieden houten wanden ook een goede akoestische
            isolatie.
            <br />
            <br />
            <Text fontWeight="bold">Houtsoorten</Text><br />
            Eigenlijk komen vrijwel alle houtsoorten in aanmerking voor binnenwanden en
            plafonds, al dan niet afgewerkt met beits, olie, vernis. De esthetiek geeft meestal
            de doorslag: tekening, nerfstructuur, aanwezigheid van kwasten …
        </Fragment>,
    },
    {
        index: 2,
        title: "Buitenwand",
        image: "https://www.wooddesign.be/wp-content/uploads/2017/10/IMG_3275.jpg",
        description: "Is meestal een vrijstaande scheidingswand, zoals het bekleden van tuinmuren of tuinconstructies. Een gemeenschappelijke tuinmuur wordt opgefrist met een onafhankelijke voorzetwand, zodat er later geen discussie ontstaat met de buren.",
    }
]

export default parket;
