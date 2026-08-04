# Chambre d'hôtes Saint Jacob — site web

Refonte du site de la chambre d'hôtes Saint Jacob (Les Fougerêts, près de La Gacilly, Bretagne).
Site statique, HTML5 sémantique, CSS Grid/Flexbox, sans dépendance de build.

## Structure

```
index.html                 Accueil (FR)
contact.html                Contact
propriete/
  exterieurs.html
  chambres.html
  veranda.html
tarifs-acces/
  tarifs.html
  acces.html
visites/
  actualites.html
  coups-de-coeur.html
  carrieres.html
  4-saisons.html
mentions-legales.html
cgv.html
en/index.html               Accueil (EN) — page unique, traduction Claude
es/index.html                Accueil (ES) — page unique, traduction Claude
assets/
  css/style.css              Feuille de style partagée
  js/main.js                 Menu mobile
  img/                       Toutes les photos, auto-hébergées (plus de hotlink externe)
```

## À faire / en cours

- [ ] Sous-pages EN/ES multi-page (pour l'instant seule la homepage est traduite dans ces langues)
- [ ] Nouvelles photos poules/chèvres (le client doit les refaire)
- [ ] Décider : simplifier ou retirer `tarifs-acces/acces.html` (itinéraires détaillés vs juste GPS + lien carte)
- [ ] Confirmer l'adresse e-mail définitive (actuellement `didihasle@gmail.com`, à vérifier avec le client)
- [ ] Brancher le bouton "Nous écrire par e-mail" (`contact.html`) — actuellement un simple lien `mailto:`

## Historique

Le contenu réel (tarifs, mentions légales, CGV, adresse e-mail, sous-pages) a été récupéré depuis
une sauvegarde HTTrack de l'ancien site fournie par le client, puis reformaté dans le nouveau design.
