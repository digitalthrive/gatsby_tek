# gatsby_tek

WD Jam Theme - Full Site - Tek Roofing

# CMS / Content Editing Instructions

CMS is loacated at tekroofingsystems.com/admin. You will need to login with your github credentials the first time accessing.
These categories can be edited through the CMS:

- Testimonial Quotes
- Dealer Tools clickable items
  - When adding a dealer tool, only add either a URL or a file. Adding both will create an error.

Gallery Images can be added by going to https://github.com/cthiebaud0718/tek_roofing_site/tree/master/site/data/images/gallery and choosing gallery1 or gallery2 folder.Use the upload files widget - Gallery 1 folder is Metal Shake, Gallery 2 folder is Metal Shake Pro


# Development requirements

## Required Tools

nvm 12.6.0
requires yarn for workspace use
Built using Gatsby / React

Local install process:

git clone https://github.com/digitalthrive/gatsby_tek.git</br>
yarn install</br>
yarn workspace site develop (to develop)</br>
yarn workspace site build (to generate static folder)</br>
Primary content for site stored in /site/data foler
