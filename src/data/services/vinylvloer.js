import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

import Paragraph from "@/components/Paragraph";

const vinylvloer = [
    {
        title: "Vinylvloer",
        image:
            "images/vinylvloer/vinylvloer.jpg",
        description: () => (
            <>
                <Paragraph mb={3}>
                    De nieuwste generatie vinylvloeren is in niets meer te vergelijken met de ouderwetse, plasticachtige vloeren op rol van vroeger.
                    We combineren een <span style={{fontWeight: "bold"}}>onbuigzame drager</span> op basis van <span style={{fontWeight: "bold"}}>kalksteen</span> met een <span style={{fontWeight: "bold"}}>innovatieve toplaag</span> die perfect de imperfecties van hout of steen weergeeft, geleverd in plankvorm of tegels en zwevend op elke ondergrond geplaatst kunnen worden.
                </Paragraph>
                <Paragraph mb={3}>
                    Door de uitgekiende structuur vallen deze vloeren nauwelijks te onderscheiden van écht parket of een keramische tegel.
                    Budgetvriendelijke vloeren beschikbaar in planken, visgraat en tegels in verschillende afmetingen en types.
                <Paragraph mb={3}>
                    Dankzij hun eigenschappen zoals comfort, duurzaamheid en waterdichtheid, zijn deze vinylvloeren geschikt voor gebruik in de badkamer, keuken, woonkamer, kantoor, wasruimte, slaapkamer, kinderkamer enz….</Paragraph>
                </Paragraph>

                <Paragraph mb={3}>
                    <Link href='https://coretecfloors.com/nl-nl' isExternal color={"#000000"}>
                        Coretec Floors <ExternalLinkIcon mx='2px' />
                    </Link><br />
                    <Link href='https://parquetvinyl.be/nl/vinylvloeren' isExternal color={"#000000"}>
                        Parquetvinyl <ExternalLinkIcon mx='2px' />
                    </Link>
                </Paragraph>
            </>
        )

    },
];

export default vinylvloer;