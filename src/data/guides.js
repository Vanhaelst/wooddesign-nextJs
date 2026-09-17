// Informational "top of funnel" guides. These deliberately avoid quoting
// specific prices we can't verify - they explain what drives the price or
// choice, then funnel the reader to a free quote request.

const guides = [
  {
    slug: "prijs-houten-terras",
    metaTitle: "Wat bepaalt de prijs van een houten terras? | Wooddesign",
    metaDescription:
      "Benieuwd wat een houten terras kost? Ontdek welke factoren de prijs bepalen: houtsoort, oppervlakte, ondergrond en afwerking. Vraag een offerte op maat aan.",
    title: "Wat bepaalt de prijs van een houten terras?",
    intro:
      "De prijs van een houten terras hangt af van verschillende factoren. Een exacte richtprijs geven zonder uw project te kennen is niet eerlijk – daarom zetten we hieronder op een rij waar de kostprijs van afhangt, zodat u goed voorbereid een offerte kunt aanvragen.",
    sections: [
      {
        heading: "Houtsoort",
        body: "Hardhoutsoorten zoals ipé, padoek, bangkirai en afzelia verschillen in prijs, hardheid en uitstraling. Duurzame alternatieven zoals composiet vragen dan weer minder onderhoud, maar hebben een ander uitzicht en prijskaartje. De keuze van houtsoort is meestal de grootste kostenpost.",
      },
      {
        heading: "Oppervlakte en vorm",
        body: "Hoe groter het terras, hoe hoger de materiaalkost. Een terras met veel hoeken, rondingen of hoogteverschillen vraagt bovendien meer werkuren dan een eenvoudige rechthoekige oppervlakte.",
      },
      {
        heading: "Voorbereiding van de ondergrond",
        body: "Een bestaande, stabiele en waterpasse ondergrond is goedkoper om op te bouwen dan een terrein dat eerst uitgegraven, genivelleerd of gedraineerd moet worden.",
      },
      {
        heading: "Onderconstructie",
        body: "Een terras op maaiveld heeft een andere (en meestal goedkopere) onderconstructie nodig dan een verhoogd terras, een dakterras of een terras rond een zwembad.",
      },
      {
        heading: "Afwerking",
        body: "Onbehandeld hardhout vergrijst vanzelf en vraagt weinig onderhoud. Wilt u de originele kleur behouden, dan komt daar een oliebehandeling bij, wat de prijs licht verhoogt maar het onderhoud op lange termijn vraagt.",
      },
    ],
    relatedService: { title: "Terras", href: "/terras" },
  },
  {
    slug: "prijs-gevelbekleding",
    metaTitle: "Wat bepaalt de prijs van gevelbekleding? | Wooddesign",
    metaDescription:
      "Wat kost gevelbekleding? Ontdek welke factoren de prijs bepalen: materiaal, oppervlakte, isolatie en afwerking. Vraag een vrijblijvende offerte aan bij Wooddesign.",
    title: "Wat bepaalt de prijs van gevelbekleding?",
    intro:
      "Gevelbekleding is maatwerk, en de prijs verschilt sterk van project tot project. Onderstaande factoren geven een goed beeld van waar de kostprijs van afhangt.",
    sections: [
      {
        heading: "Materiaalkeuze",
        body: "Hout, aluminium, vezelcement en composiet verschillen sterk in prijs, uitstraling en onderhoud. Hout oogt warm en natuurlijk maar vraagt meer onderhoud dan bijvoorbeeld vezelcement of aluminium, die dan weer een ander budget vragen.",
      },
      {
        heading: "Oppervlakte en complexiteit van de gevel",
        body: "Een rechte gevel zonder veel ramen, hoeken of uitsprongen is eenvoudiger (en dus goedkoper) te bekleden dan een gevel met veel details of een complexe architectuur.",
      },
      {
        heading: "Isolatie",
        body: "Wordt er achter de bekleding ook geïsoleerd, dan telt dat mee in de totaalprijs – maar het levert op lange termijn een besparing op uw energieverbruik op.",
      },
      {
        heading: "Bevestigingssysteem",
        body: "Een open lattenstructuur, een gesloten planchetgevel of een blind bevestigd systeem vragen elk een andere onderconstructie en montagetijd.",
      },
      {
        heading: "Afwerking en onderhoud",
        body: "Onbehandelde houten gevelbekleding vergrijst op natuurlijke wijze. Wilt u de oorspronkelijke kleur behouden, dan is een periodieke behandeling nodig, wat op lange termijn meetelt in de totale kost.",
      },
    ],
    relatedService: { title: "Gevel", href: "/gevel" },
  },
  {
    slug: "onderhoud-en-renovatie-parketvloer",
    metaTitle: "Onderhoud en renovatie van uw parketvloer | Wooddesign",
    metaDescription:
      "Hoe onderhoudt u een parketvloer en wanneer is renovatie nodig? Tips over schuren, oliën en vernissen, en hoe u signalen van slijtage herkent.",
    title: "Onderhoud en renovatie van uw parketvloer",
    intro:
      "Een goed onderhouden parketvloer kan decennialang mee. Hieronder leggen we uit waar u op moet letten, en wanneer schuren of herbehandelen aan de orde is.",
    sections: [
      {
        heading: "Dagelijks onderhoud",
        body: "Stof en zand werken als schuurpapier op een houten vloer. Regelmatig stofzuigen of droog dweilen, viltjes onder meubels en vloermatten aan de ingang beschermen uw parketvloer al een heel eind.",
      },
      {
        heading: "Olie of vernis?",
        body: "Geolied parket is eenvoudiger plaatselijk bij te werken bij kleine beschadigingen, maar vraagt periodiek een nieuwe onderhoudslaag. Gevernist parket is minder onderhoudsgevoelig in het dagelijks gebruik, maar bij schade moet doorgaans een groter oppervlak opnieuw behandeld worden.",
      },
      {
        heading: "Signalen dat uw vloer aan renovatie toe is",
        body: "Diepe krassen, een dof of vlekkerig uitzicht, of plekken waar de toplaag zichtbaar versleten is, zijn signalen dat schuren en herbehandelen de vloer weer als nieuw kan maken.",
      },
      {
        heading: "Kan elke parketvloer geschuurd worden?",
        body: "Massief parket kan doorgaans meermaals geschuurd worden. Meerlaags parket heeft een dunnere toplaag en kan meestal een beperkter aantal keer geschuurd worden – wij bekijken dit graag ter plaatse voor we een renovatie voorstellen.",
      },
    ],
    relatedService: { title: "Parket", href: "/parket" },
  },
  {
    slug: "massief-vs-meerlaags-parket",
    metaTitle: "Massief vs. meerlaags parket: het verschil | Wooddesign",
    metaDescription:
      "Massief of meerlaags parket: wat is het verschil en wat past bij uw woning? Ontdek de voor- en nadelen op vlak van stabiliteit, levensduur en vloerverwarming.",
    title: "Massief vs. meerlaags parket: wat is het verschil?",
    intro:
      "Bij de keuze voor een nieuwe parketvloer komt al snel de vraag: massief of meerlaags? Beide hebben hun eigen voordelen, afhankelijk van uw ondervloer en wensen.",
    sections: [
      {
        heading: "Opbouw",
        body: "Massief parket bestaat volledig uit één houtsoort. Meerlaags parket heeft een houten toplaag (de zichtbare laag) op een stabiele onderconstructie van meerdere lagen hout.",
      },
      {
        heading: "Stabiliteit bij vocht en temperatuur",
        body: "Meerlaags parket is doorgaans stabieler bij schommelingen in temperatuur en vochtigheid, wat het een veilige keuze maakt in combinatie met vloerverwarming of in ruimtes met wisselende omstandigheden.",
      },
      {
        heading: "Levensduur en herschuurbaarheid",
        body: "Massief parket kan meermaals geschuurd worden dankzij de volledig houten opbouw. Meerlaags parket kan doorgaans een beperkter aantal keer geschuurd worden, afhankelijk van de dikte van de toplaag.",
      },
      {
        heading: "Welke past bij uw project?",
        body: "Voor een nieuwbouwwoning met vloerverwarming is meerlaags parket vaak de veiligere keuze. Voor een klassieke renovatie waar authenticiteit en herschuurbaarheid op lange termijn belangrijk zijn, kan massief parket net de betere optie zijn. We adviseren u graag op basis van uw specifieke situatie.",
      },
    ],
    relatedService: { title: "Parket", href: "/parket" },
  },
];

export default guides;
