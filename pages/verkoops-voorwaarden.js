import React from "react";
import Head from "next/head";
import meta from "src/data/meta";
import Navigation from "src/components/Navigation";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Paragraph from "@/components/Paragraph";
import Footer from "src/components/Footer";
import ContentWrapper from "src/components/ContentWrapper";
import Box from "@/components/Box";
import CookieBanner from "@/components/Card";
import UnorderedList from "@/components/List/UnorderedList";
import ListItem from "@/components/List/ListItem";

const cookieStatement = () => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content={meta.viewport} />
      </Head>
      <Navigation />
      <ContentWrapper>
        <CookieBanner />

        <Box mb={11}>
          <Grid container>
            <Grid row>
              <Grid
                item
                xs={12}
                sm={6}
                md={{ width: 12 }}
                flex
                justifyContent="center"
                flexDirection="column"
              >
                <Heading
                  level={2}
                  textTransform="uppercase"
                  show={{ xs: false, sm: true }}
                >
                  VErkoopsvoorwaarden
                </Heading>
                <Paragraph mb={8}>
                  PRIVACYBELEID
                  <br />
                  Geüpdatet op 6 Maart 2021
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  1. Partijen en voorwerp
                </Heading>
                <Paragraph mb={2}>
                  Wooddesign bvba (hierna "Wooddesign bvba" of de
                  "Verwerkingsverantwoordelijke")
                  <br />
                  Prins Boudewijnlaan 21T, 2550 Kontich
                </Paragraph>
                <Paragraph mb={2}>
                  KBO/BTW: BE0878408541
                  <br />
                  E-Mail: info@wooddesign.be
                  <br />
                  Telefoon:+32 56 51 79 60
                </Paragraph>
                <Paragraph mb={2}>
                  Wooddesign bvba stelt dit Privacybeleid vast, dat tot doel
                  heeft de Gebruikers op transparante wijze te informeren over
                  de website die gehost wordt op het volgende adres:
                  www.wooddesign.be, (hierna de "Site"), en over de wijze waarop
                  persoonsgegevens worden verzameld en verwerkt door Wooddesign
                  bvba.
                </Paragraph>
                <Paragraph mb={2}>
                  De term "Gebruiker" verwijst naar elke gebruiker, of het nu
                  een natuurlijke of een rechtspersoon is, die de Site bezoekt
                  of op enigerlei wijze met de Site communiceert.
                </Paragraph>
                <Paragraph mb={2}>
                  In diens hoedanigheid als verwerkingsverantwoordelijke,
                  bepaalt Wooddesign bvba alle technische, juridische en
                  organisatorische middelen en de doeleinden voor de verwerking
                  van de persoonsgegevens van de Gebruikers. Wooddesign bvba
                  verbindt zich ertoe alle nodige maatregelen te nemen om ervoor
                  te zorgen dat de verwerking van persoonsgegevens plaatsvindt
                  in overeenstemming met de Wet van 30 juli 2018 betreffende de
                  bescherming van natuurlijke personen met betrekking tot de
                  verwerking van persoonsgegevens (hierna de "Wet") en de
                  Verordening (EU) 2016/679 van het Europees Parlement en de
                  Raad van 27 april 2016 betreffende de bescherming van
                  natuurlijke personen in verband met de verwerking van
                  persoonsgegevens en betreffende het vrije verkeer van die
                  gegevens en tot intrekking van Richtlijn 95/46/EG (d.i. de
                  algemene verordening gegevensbescherming (AVG) of 'GDPR';
                  hierna de "Verordening").
                </Paragraph>
                <Paragraph mb={2}>
                  Wooddesign bvba is vrij om een natuurlijke of rechtspersoon te
                  kiezen die de persoonsgegevens van de gebruikers op zijn
                  verzoek en in zijn naam verwerkt (hierna de "Verwerker" of
                  "Onderaannemer"). In voorkomend geval verbindt Wooddesign bvba
                  zich ertoe een Verwerker te selecteren die voldoende garanties
                  biedt met betrekking tot de technische en organisatorische
                  maatregelen voor de verwerking van persoonsgegevens, in
                  overeenstemming met de Wet en de Verordening.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  2.Verwerking van persoonsgegevens
                </Heading>
                <Paragraph mb={2}>
                  Het gebruik van de Site door de Gebruikers kan leiden tot de
                  verzameling van personlijke gegevens. De verwerking van deze
                  gegevens door Wooddesign bvba, in zjn hoedanigheid van
                  Verwerkingsverantwoordelijke of door dienstverleners die in
                  naa en voor rekening van Wooddesign bvba opreden, gebeurt in
                  overeenstemming met de Wet en de Verordening.
                </Paragraph>
                <Paragraph mb={2}>
                  Persoonsgegevens worden verwerkt door Wooddesign bvba, in
                  overeenstemming met de hieronder vermelde doeleinden, via de
                  volgende methodes:
                </Paragraph>
                <Paragraph mb={2}>
                  Gegevens worden opgeslagen in het CRM en via mail aan de
                  bedrijfsleider bezorgd.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  3. Doel van de verwerking van persoonsgegevens
                </Heading>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 13 van de Verordening worden de
                  doeleinden van de verwerking van persoonsgegevens aan de
                  Gebruiker meegedeeld. Die doeleinden zijn de volgende:
                </Paragraph>
                <Paragraph mb={2}>
                  Beantwoorden van opmerkingen en vragen die gesteld werden via
                  het contactformulier.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  4. Persoonsgegevens die kunnen worden verwerkt
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker stemt ermee in dat, tijdens het bezoek en gebruik
                  van de Site, Wooddesign bvba de volgende persoonsgegevens
                  verzamelt en verwerkt:
                </Paragraph>
                <Paragraph mb={2}>
                  De informatie ingevuld in het contactformulier: naam,
                  telefoon, email en adres.
                </Paragraph>
                <Paragraph mb={2}>
                  Wooddesign bvba verzamelt en verwerkt deze persoonsgegevens in
                  overeenstemming met de voorwaarden en principes beschreven in
                  dit Privacybeleid.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  5. Toestemming
                </Heading>
                <Paragraph mb={2}>
                  Door de toegang tot en het gebruik van de Site verklaart de
                  Gebruiker dat hij/zij zijn/haar vrije, specifieke,
                  geïnformeerde en ondubbelzinnige toestemming voor de
                  verwerking van zijn/haar persoonsgegevens heeft gelezen en
                  gegeven. Deze overeenkomst heeft betrekking op de inhoud van
                  dit Privacybeleid.
                </Paragraph>
                <Paragraph mb={2}>
                  Toestemming wordt gegeven door de positieve en actieve
                  handeling waarmee de Gebruiker het vakje voor het
                  privacybeleid in 'hypertext link' heeft aangevinkt. Deze
                  toestemming is een essentiële voorwaarde voor het uitvoeren
                  van bepaalde handelingen op de Site of om de Gebruiker in
                  staat te stellen een contractuele relatie aan te gaan met
                  Wooddesign bvba. Elke overeenkomst die Wooddesign bvba en een
                  Gebruiker verbinden met betrekking tot de diensten en goederen
                  die worden aangeboden op de Site is onderworpen aan de
                  aanvaarding van het Privacybeleid door de Gebruiker.
                </Paragraph>
                <Paragraph mb={2}>
                  De Gebruiker stemt ermee in dat de
                  Verwerkingsverantwoordelijke, in overeenstemming met de in dit
                  Privacybeleid opgenomen voorwaarden en principes, zijn/haar
                  persoonlijke gegevens verzamelt en verwerkt die hij/zij op de
                  Site of in verband met de diensten die worden aangeboden door
                  Wooddesign bvba, verstrekt voor de hierboven vermelde
                  doeleinden.
                </Paragraph>
                <Paragraph mb={2}>
                  De Gebruiker heeft te allen tijde het recht om deze
                  toestemming in te trekken. De intrekking van de toestemming
                  laat de rechtmatigheid van de verwerking op basis van de
                  voorafgaande toestemming onverlet.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  6. Bewaartermijn van de persoonsgegevens van de Gebruikers
                </Heading>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 13, lid 2 van de Verordening bewaart de
                  Verwerkingsverantwoordelijke de persoonsgegevens slechts
                  zolang als redelijkerwijs noodzakelijk is voor het bereiken
                  van de doeleinden waarvoor zij worden verwerkt.
                </Paragraph>
                <Paragraph mb={2}>
                  Deze duur is in alle gevallen niet langer dan 1 jaar.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  7. Ontvangers van gegevens en openbaarmaking aan derden
                </Heading>
                <Paragraph mb={2}>
                  Persoonsgegevens kunnen worden doorgegeven aan werknemers,
                  medewerkers, onderaannemers, verwerkers of leveranciers van
                  Wooddesign bvba voor zover adequate garanties worden geboden
                  voor de beveiliging van de gegevens en voor zover zij
                  samenwerken met Wooddesign bvba voor het op de markt brengen
                  van de producten of het verlenen van diensten. Zij handelen
                  onder het rechtstreekse gezag van Wooddesign bvba, en zijn met
                  name verantwoordelijk voor het verzamelen, verwerken of
                  uitbesteden van deze gegevens.
                </Paragraph>
                <Paragraph mb={2}>
                  In alle gevallen leven de ontvangers van de gegevens en
                  degenen aan wie de gegevens worden verstrekt de inhoud van dit
                  Privacybeleid na. Wooddesign bvba zorgt ervoor dat zij deze
                  gegevens alleen voor de beoogde doeleinden en op een discrete
                  en veilige manier verwerken.
                </Paragraph>
                <Paragraph mb={2}>
                  In het geval dat de gegevens aan derden zouden worden
                  verstrekt voor doeleinden van direct marketing of van
                  prospectie, zal de Gebruiker vooraf geïnformeerd worden opdat
                  hij of zij de voorafgaande en uitdrukkelijke toestemming aan
                  dit gebruik van persoonsgegevens kan geven.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  8. Rechten van de Gebruikers
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker kan zijn rechten te allen tijde uitoefenen door
                  een bericht per e-mail te sturen naar het volgende adres:
                  info@wooddesign.be, of een brief per post, vergezeld van een
                  kopie van zijn of haar identiteitskaart aan het volgende
                  adres: Prins Boudewijnlaan 21T, 2550 Kontich.
                </Paragraph>
                <Heading level={5} mt={3}>
                  a. Recht van toegang
                </Heading>
                <Paragraph mb={2}>
                  In overeenstemming met artikel 15 van de Verordening,
                  garandeert Wooddesign bvba het recht van de Gebruiker op
                  toegang tot zijn persoonsgegevens. De Gebruiker heeft het
                  recht op toegang tot deze persoonsgegevens en de volgende
                  informatie:
                </Paragraph>
                <UnorderedList listStyleType="disc">
                  <ListItem>
                    de betrokken categorieën persoonsgegevens;
                  </ListItem>
                  <ListItem>
                    de ontvangers of categorieën ontvangers aan wie de
                    persoonsgegevens zijn of zullen worden verstrekt;
                  </ListItem>
                  <ListItem>
                    in geval de ontvangers gevestigd zijn in derde landen of
                    internationale organisaties zijn, de passende of geschikte
                    waarborgen;
                  </ListItem>
                  <ListItem>
                    indien mogelijk, de voorgestelde opslagperiode voor
                    persoonsgegevens of, indien dit niet mogelijk is, de
                    criteria aan de hand waarvan deze periode wordt vastgesteld;
                  </ListItem>
                  <ListItem>
                    het bestaan van geautomatiseerde besluitvorming, met
                    inbegrip van profilering, als bedoeld in artikel 22, leden 1
                    en 4, van de Verordening, en, ten minste in dergelijke
                    gevallen, relevante informatie over de onderliggende logica,
                    alsmede het belang en de verwachte gevolgen van een
                    dergelijke verwerking voor de betrokkene.
                  </ListItem>
                </UnorderedList>
                <Paragraph mb={2}>
                  De Verwerkingsverantwoordelijke kan een redelijke vergoeding
                  eisen op basis van de administratieve kosten voor extra
                  kopieën die door de Gebruiker worden opgevraagd.
                </Paragraph>
                <Paragraph mb={2}>
                  Wanneer de Gebruiker dit verzoek langs elektronische weg (bv.
                  via het e-mailadres) indient, worden de gegevens in
                  elektronische vorm en voor algemeen gebruik verstrekt, tenzij
                  de Gebruiker anders verzoekt.
                </Paragraph>
                <Paragraph mb={2}>
                  De kopie van de gegevens zal uiterlijk binnen een maand na
                  ontvangst van de aanvraag aan de Gebruiker worden meegedeeld.
                </Paragraph>
                <Heading level={5} mt={3}>
                  b. Recht op rectificatie
                </Heading>
                <Paragraph mb={2}>
                  Wooddesign bvba garandeert het recht op rectificatie en
                  verwijdering van persoonsgegevens aan de Gebruiker.
                </Paragraph>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 16 van de Verordening kunnen onjuiste,
                  onnauwkeurige of irrelevante gegevens te allen tijde worden
                  gecorrigeerd of verwijderd. De Gebruiker brengt eerst zelf de
                  nodige wijzigingen aan vanuit zijn gebruikersaccount, tenzij
                  deze niet zelfstandig kunnen worden aangebracht, in welk geval
                  de aanvraag kan worden gericht aan Wooddesign bvba.
                </Paragraph>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 19 van de Verordening stelt de
                  verwerkingsverantwoordelijke elke ontvanger aan wie de
                  persoonsgegevens zijn verstrekt in kennis van elke
                  rectificatie van de persoonsgegevens, tenzij een dergelijke
                  rectificatie onmogelijk blijkt of onevenredige inspanningen
                  vergt. De verwerkingsverantwoordelijke verstrekt de betrokkene
                  informatie over deze ontvangers indien de betrokkene daarom
                  verzoekt.
                </Paragraph>

                <Heading level={5} mt={3}>
                  c. Recht op uitwissing
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker heeft het recht om in de in artikel 17 van de
                  Verordening genoemde gevallen zo spoedig mogelijk de
                  verwijdering van zijn persoonsgegevens te verkrijgen.
                </Paragraph>
                <Paragraph mb={2}>
                  Wanneer de Verwerkingsverantwoordelijke de persoonsgegevens
                  openbaar heeft gemaakt en op grond van het vorige lid
                  verplicht is deze te wissen, neemt de
                  Verwerkingsverantwoordelijke, rekening houdend met de
                  beschikbare technologieën en de uitvoeringskosten, redelijke
                  maatregelen, waaronder technische maatregelen, om andere voor
                  de verwerking verantwoordelijken die dergelijke
                  persoonsgegevens verwerken, ervan in kennis te stellen dat de
                  betrokkene door deze voor de verwerking verantwoordelijken
                  heeft verzocht om het verband met dergelijke persoonsgegevens
                  of een kopie of reproductie daarvan te wissen.
                </Paragraph>
                <Paragraph mb={2}>
                  De twee voorgaande leden zijn niet van toepassing voor zover
                  een dergelijke verwerking noodzakelijk is:
                </Paragraph>
                <UnorderedList listStyleType="disc">
                  <ListItem>
                    de uitoefening van het recht op vrijheid van meningsuiting
                    en informatie;
                  </ListItem>
                  <ListItem>
                    te voldoen aan een wettelijke verplichting tot verwerking
                    krachtens het recht van de Unie of het recht van de lidstaat
                    waaronder de verwerkingsverantwoordelijke ressorteert, of
                    een taak van algemeen belang of in het kader van de
                    uitoefening van het openbaar gezag die aan de
                    verwerkingsverantwoordelijke is opgedragen, uit te voeren;
                  </ListItem>
                  <ListItem>
                    de vaststelling, de uitoefening of de verdediging van
                    rechtsvorderingen.
                  </ListItem>
                </UnorderedList>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 19 van de Verordening stelt de
                  verwerkingsverantwoordelijke voor de verwerking elke ontvanger
                  aan wie de persoonsgegevens zijn verstrekt, in kennis van elke
                  verwijdering van persoonsgegevens of elke beperking van de
                  verwerking ervan, tenzij deze openbaarmaking onmogelijk blijkt
                  of onevenredig veel moeite kost. De
                  verwerkingsverantwoordelijke verstrekt de betrokkene
                  informatie over deze ontvangers indien de betrokkene daarom
                  verzoekt.
                </Paragraph>

                <Heading level={5} mt={3}>
                  d. Recht om de verwerking te beperken
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker heeft recht op een beperking van de verwerking
                  van zijn persoonsgegevens in de in artikel 18 van de
                  Verordening genoemde gevallen.
                </Paragraph>
                <Paragraph mb={2}>
                  Overeenkomstig artikel 19 van de Verordening stelt de
                  verwerkingsverantwoordelijke elke ontvanger aan wie de
                  persoonsgegevens zijn verstrekt, in kennis van elke beperking
                  van de uitgevoerde verwerking, tenzij deze openbaarmaking
                  onmogelijk blijkt of onevenredig veel moeite kost. De
                  verwerkingsverantwoordelijke verstrekt de betrokkene
                  informatie over deze ontvangers indien de betrokkene daarom
                  verzoekt.
                </Paragraph>

                <Heading level={5} mt={3}>
                  e. Recht op gegevensportabiliteit
                </Heading>
                <Paragraph mb={2}>
                  In overeenstemming met artikel 20 van de Verordening hebben
                  Gebruikers recht om van Wooddesign bvba hun persoonsgegevens
                  te ontvangen in een gestructureerd, algemeen gebruikt en
                  machineleesbaar formaat. Gebruikers hebben het recht om deze
                  gegevens door te geven aan een andere
                  verwerkingsverantwoordelijke zonder dat Wooddesign bvba dit
                  verhindert, in de gevallen die voorzien zijn in de
                  Verordening.
                </Paragraph>
                <Paragraph mb={2}>
                  Wanneer de Gebruiker gebruik maakt van zijn recht op
                  gegevensportabiliteit op grond van het vorige lid, heeft hij
                  het recht om persoonsgegevens rechtstreeks van de ene naar de
                  andere verwerkingsverantwoordelijke te te laten overdragen,
                  voor zover dit technisch mogelijk is.
                </Paragraph>
                <Paragraph mb={2}>
                  De uitoefening van het recht op gegevensportabiliteit doet
                  geen afbreuk aan het recht om gegevens te wissen. Dit recht is
                  niet van toepassing op de verwerking die nodig is voor de
                  vervulling van een taak van algemeen belang of voor de
                  uitoefening van het openbaar gezag dat aan de
                  verwerkingsverantwoordelijke is opgedragen.
                </Paragraph>
                <Paragraph mb={2}>
                  Het recht op gegevensportabiliteit heeft geen invloed op de
                  rechten en vrijheden van derden.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  f. Recht van verzet en geautomatiseerde individuele
                  besluitvorming
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker heeft te allen tijde het recht om bezwaar te
                  maken tegen de verwerking van zijn/haar persoonsgegevens
                  vanwege zijn/haar specifieke situatie, met inbegrip van de
                  automatisering van gegevens door Wooddesign bvba. In
                  overeenstemming met artikel 21 van de Verordening, zal
                  Wooddesign bvba geen persoonsgegevens meer verwerken, tenzij
                  er legitieme en dwingende redenen zijn voor de verwerking die
                  prevaleren boven de belangen en rechten en vrijheden van de
                  Gebruiker, of voor de vaststelling, uitoefening of verdediging
                  van wettelijke rechten.
                </Paragraph>
                <Paragraph mb={2}>
                  Bij de verwerking van persoonsgegevens voor
                  prospectiedoeleinden heeft de Gebruiker te allen tijde het
                  recht om bezwaar te maken tegen de verwerking van de hem
                  betreffende persoonsgegevens voor dergelijke
                  prospectiedoeleinden, met inbegrip van profilering voor zover
                  deze betrekking heeft op dergelijke prospectie.
                </Paragraph>
                <Paragraph mb={2}>
                  Wanneer de betrokkene bezwaar maakt tegen de verwerking met
                  het oog op prospectie, worden de persoonsgegevens niet langer
                  voor dat doel verwerkt.
                </Paragraph>
                <Heading level={5} mt={3}>
                  g. Klachtrecht
                </Heading>
                <Paragraph mb={2}>
                  De Gebruiker heeft het recht een klacht in te dienen met
                  betrekking tot de verwerking van zijn persoonsgegevens door
                  Wooddesign bvba, aan de Gegevensbeschermingsautoriteit die
                  bevoegd is voor het Belgische grondgebied. Meer informatie is
                  te vinden op de website:
                  https://www.gegevensbeschermingsautoriteit.be/.
                </Paragraph>
                <Paragraph mb={2}>
                  Klachten kunnen worden ingediend op de volgende adressen:
                </Paragraph>
                <Paragraph mb={2}>
                  Gegevensbeschermingsautoriteit
                  <br />
                  Drukpersstraat 35, 1000 Brussel
                  <br />
                  Tel. + 32 2 274 48 00
                  <br />
                  Fax. + 32 2 274 48 35
                  <br />
                  E-mail: contact@apd-gba.be
                </Paragraph>
                <Paragraph mb={2}>
                  De Gebruiker kan ook een vordering tot staking indienen bij de
                  voorzitter van de rechtbank van eerste aanleg van zijn
                  woonplaats.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  9. Cookies
                </Heading>
                <Paragraph mb={2}>
                  De Site maakt gebruik van cookies om Gebruikers van de Site te
                  onderscheiden. Dit maakt het mogelijk om de gebruikers een
                  betere surfervaring en een verbetering van de Site en de
                  inhoud ervan te bieden. De doelstellingen en methodes van
                  cookies zijn opgenomen in dit artikel.
                </Paragraph>

                <Heading level={5} mt={3}>
                  a. Algemene principes
                </Heading>
                <Paragraph mb={2}>
                  Een "Cookie" is een bestand dat tijdelijk of permanent op het
                  apparaat van de Gebruiker wordt geplaatst bij het bekijken van
                  de Site met het oog op een volgende verbinding. Dankzij
                  cookies herkent de server het apparaat van de Gebruiker.
                </Paragraph>
                <Paragraph mb={2}>
                  Cookies kunnen ook worden geïnstalleerd door derden met wie
                  Wooddesign bvba samenwerkt.
                </Paragraph>
                <Paragraph mb={2}>
                  Sommige van de cookies die gebruikt worden door Wooddesign
                  bvba zijn noodzakelijk voor de goede werking van de Site,
                  andere zijn nodig om de ervaring van de Gebruiker te
                  verbeteren.
                </Paragraph>
                <Paragraph mb={2}>
                  De Gebruiker kan cookies aanpassen of uitschakelen.
                </Paragraph>
                <Paragraph mb={2}>
                  Door gebruik te maken van de Website stemt de Gebruiker
                  uitdrukkelijk in met het beheer van cookies zoals beschreven
                  in dit artikel.
                </Paragraph>

                <Heading level={5} mt={3}>
                  b. Soorten cookies en nagestreefde doeleinden
                </Heading>
                <Paragraph mb={2}>
                  Verschillende soorten cookies worden gebruikt door Wooddesign
                  bvba op de Site:
                </Paragraph>
                <UnorderedList listStyleType="disc">
                  <ListItem>
                    Technische cookies: deze zijn noodzakelijk voor de werking
                    van de Site, maken de communicatie van de ingevoerde
                    gegevens mogelijk en zijn bedoeld om de navigatie van de
                    Gebruiker te vergemakkelijken;
                  </ListItem>
                  <ListItem>
                    Analytische en publiekscookies: deze cookies maken de
                    herkenning van de Gebruiker mogelijk en worden gebruikt om
                    het aantal Gebruikers van de Website over een bepaalde
                    periode te tellen. Omdat ze ook het surfgedrag aangeven,
                    zijn ze een effectieve manier om de surfervaring van de
                    Gebruiker te verbeteren door voorstellen en aanbiedingen
                    weer te geven die interessant kunnen zijn voor de Gebruiker.
                    Ze maken het{" "}
                    <span id="span_id_enterprise_name_common">
                      Wooddesign bvba
                    </span>{" "}
                    ook mogelijk om eventuele bugs op de Site te identificeren
                    en te corrigeren;
                  </ListItem>
                  <ListItem>
                    Functionele cookies: deze cookies vergemakkelijken het
                    gebruik van de Site door bepaalde ingevoerde keuzes te
                    behouden (bijvoorbeeld de gebruikersnaam of taal).
                  </ListItem>
                </UnorderedList>

                <Heading level={5} mt={3}>
                  c. Bewaartermijn voor cookies
                </Heading>
                <Paragraph mb={2}>
                  Cookies worden bewaard voor de tijd die nodig is om het
                  beoogde doel te bereiken. De cookies die op de harde schijf
                  van de Gebruiker kunnen worden opgeslagen en de opslagperiode
                  zijn als volgt:
                </Paragraph>
                <Paragraph mb={2}>
                  - 'ga': 1jaar (analytische cookies)
                  <br />- '_gid': alleen tijdens de sessie (functionele cookies)
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  d. Beheer van cookies
                </Heading>
                <Paragraph mb={2}>
                  Als de Gebruiker niet wil dat de Website cookies op zijn harde
                  schijf plaatst, kan hij deze eenvoudig beheren of verwijderen
                  door zijn browserinstellingen aan te passen. Door de
                  programmering van de browser kan de Gebruiker ook een
                  kennisgeving ontvangen zodra een website cookies gebruikt en
                  zo beslissen of hij deze accepteert of weigert.
                </Paragraph>
                <Paragraph mb={2}>
                  Indien de Gebruiker bepaalde cookies uitschakelt, aanvaardt
                  hij dat de Site mogelijk niet optimaal functioneert. Sommige
                  delen van de Site zijn mogelijk niet of gedeeltelijk
                  bruikbaar.
                </Paragraph>
                <Paragraph mb={2}>
                  Indien de Gebruiker bepaalde cookies op deze manier wil
                  beheren en/of verwijderen, kan hij/zij dit doen via de
                  volgende link(s):
                </Paragraph>
                <Paragraph mb={2}>Voor Gebruikers met een browser:</Paragraph>
                <UnorderedList listStyleType="disc">
                  <ListItem>
                    Internet Explorer:
                    <br />
                    http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies
                  </ListItem>
                  <ListItem>
                    Microsoft Edge: <br />
                    http://windows.microsoft.com/en-gb/windows-10/edge-privacy-faq
                  </ListItem>
                  <ListItem>
                    Chrome: <br />
                    https://support.google.com/accounts/answer/61416?hl=fr
                  </ListItem>
                  <ListItem>
                    Firefox: <br />
                    https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences
                  </ListItem>
                  <ListItem>
                    Safari: <br />
                    https://support.apple.com/kb/ph21411?locale=fr_CA
                  </ListItem>
                </UnorderedList>

                <Heading level={4} mt={6} mb={2}>
                  12. Wijziging van het Privacybeleid
                </Heading>
                <Paragraph mb={2}>
                  Wooddesign bvba behoudt zich het recht voor om dit
                  Privacybeleid te wijzigen om te voldoen aan de wettelijke
                  verplichtingen in dit verband. De Gebruiker wordt daarom
                  verzocht regelmatig het Privacybeleid te raadplegen om op de
                  hoogte te blijven van eventuele wijzigingen en aanpassingen.
                  Dergelijke wijzigingen zullen op de Site worden geplaatst of
                  per e-mail wrden verstuurd om de tegenwerpelijkheid te
                  waarborgen
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  13. Toepasselijk recht en bevoegde rechtbank
                </Heading>
                <Paragraph mb={2}>
                  Dit Privacybeleid wordt uitsluitend beheerst door het
                  Belgische recht. Elk geschil zal worden voorgelegd aan de
                  rechtbanken van het gerechtelijk arrondissement van de
                  maatschappelijke zetel van Wooddesign bvba.
                </Paragraph>

                <Heading level={4} mt={6} mb={2}>
                  14. Contact
                </Heading>
                <Paragraph mb={2}>
                  Voor elke vraag of klacht met betrekking tot dit privacybeleid
                  kan de Gebruiker contact opnemen met de
                  Verwerkingsverantwoordelijke op het volgende adres:
                  info@wooddesign.be.
                </Paragraph>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default cookieStatement;
