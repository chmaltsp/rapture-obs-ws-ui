# Rapture WS UI 

This is a fork of obs-tablet-remote.

OBS Remote UI optimised for tablets, but really it works with any browser

## Deployment

Currently the UI is deployed to here [rapture-obs.surge.sh](http://rapture-obs.surge.sh)

To deploy a new version:

`npm run deploy:surge`

## Usage

In hostname put clubrapture.ddns.net and for `PORT` use 8020.

## Building instructions

* Clone the repository
* Install dependencies `npm install`
* Build it! `npm run build -- --homepage /`

Note: By default the build script assumes deployment to the main URL. `--homepage <url>` lets you specifiy the base URL the assets will follow.

## Developing

* Clone
* Install dependencies
* `npm run dev`
