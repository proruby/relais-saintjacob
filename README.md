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
visites/
  actualites.html
  coups-de-coeur.html
  carrieres.html
  4-saisons.html
mentions-legales.html       FR uniquement
cgv.html                    FR uniquement
en/                          Site complet (EN), même arborescence que FR
es/                          Site complet (ES), même arborescence que FR
assets/
  css/style.css              Feuille de style partagée
  js/main.js                 Menu mobile
  img/                       Toutes les photos, auto-hébergées (plus de hotlink externe)
```

## À faire / en cours

- [ ] Nouvelles photos poules/chèvres/four intégrées (`chevres.jpg`, `poules.jpg`, `four-traditionnel.jpg`, `relais-recent.jpg`, `relais-recent-entrée.jpg`) — vérifier avec le client si d'autres photos sont à venir

## Historique

Le contenu réel (tarifs, mentions légales, CGV, adresse e-mail, sous-pages) a été récupéré depuis
une sauvegarde HTTrack de l'ancien site fournie par le client, puis reformaté dans le nouveau design.

La sous-page `tarifs-acces/acces.html` (itinéraires détaillés) a été retirée à la demande du client ;
les coordonnées GPS ont été conservées sur `contact.html`. L'adresse e-mail `didihasle@gmail.com`
est confirmée sur tout le site, et le bouton "Nous écrire par e-mail" de `contact.html` est un
lien `mailto:` avec sujet pré-rempli.

Les sous-pages EN/ES (extérieurs, chambres, véranda, tarifs, visites, contact) ont été créées avec
la même arborescence que le site FR ; `mentions-legales.html` et `cgv.html` restent FR uniquement.
