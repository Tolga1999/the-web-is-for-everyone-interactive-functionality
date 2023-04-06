> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Plantswap overzichtspagina + detailpagina's
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Een overzichtspagina en meerdere detailpagina's voor de beschikbare planten binnen Plantswap, verder is het mogelijk om plantjes toe te voegen als een admin. 

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Voor Plantswap heb ik een informatiepagina en detailpagina's gemaakt voor planten, zo kan een gebruiker meer lezen over planten en overwegen een plantje te ruilen. Binnen de pagina heb je een overzicht van alle plantjes, wanneer je klikt op een plantje wordt je doorverwezen naar de detailpagina waar je uitgebreid informatie over het gekozen plantje kan vinden. De klant kan na het kiezen van een plantje de keuze nemen om het plantje te ruilen. Tot slot is het mogelijk voor een admin om meer plantjes toe te voegen.

<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://user-images.githubusercontent.com/112855878/230270257-a1cee7d3-8a7c-4196-8926-30c0474c6ea3.png)
![image](https://user-images.githubusercontent.com/112855878/230270189-b32f7556-f512-4317-9e2c-52e0db4776ed.png)


<!-- Voeg een link toe naar Github Pages 🌐-->
website link: https://weak-cyan-rooster-cuff.cyclic.app/

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De volgende stappen kan je nemen om gebruik te maken van de Plantswap pagina:

1. Een plantje kiezen uit de overzichtspagina.
2. Klikken op een plantje en meer informatie lezen over het gekozen plantje.
3. De keuze nemen om het plantje te ruilen, een ruilknop staat onder de detailpagina voor deze optie.

admin:
1. Ga naar de admin page
2. Vul de gegevens van het nieuwe stekje in
3. Klik op "voeg stekje toe", de nieuwe stekje zal in de overzichtspagina tevoorschijn komen (dit kan enkele seconden duren).

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
In dit project zijn de volgende technieken gebruikt:
- HTML
- CSS
- JS
- Node
- Express
- EJS

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Voordat je de applicatie kan runnen moet je node runnen op je lokale computer, Node kan je downloaden op de volgende website: https://nodejs.org/en/.
Download de stabiele versie 18.14.0 LTS, open je terminal binnen de code editior (zoals VS code) en run de volgende command lines:

- NPM install, dit om express, ejs en alle andere afhankelijkheden te downloaden.
- NPM start om je applicatie te runnen, je lokale server wordt meestal gerunned op port 8000.
- Optioneel: je kan de applicatie ook runnen met een script, zo kan je npm run dev gebruiken ipv npm start (er wordt dan gebruik gemaakt van nodemon). Dit zorgt ervoor dat de applicatie automatisch aan en uit wordt gezet na een verandering binnen de server side (met deze optie is het handmatig aan en uitzetten van de applicatie niet meer nodig).

## Bronnen
- Node download: https://nodejs.org/en/
- Express/node introductie: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- FDND API: https://whois.fdnd.nl/
- EJS: https://ejs.co/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
