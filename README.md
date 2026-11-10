# HARD DECK

Terrain height, cross-checked. Version 3.0.0.

Type or tap a coordinate and HARD DECK tells you the ground height there, how the WGS84 ellipsoid, EGM96 and EGM2008 differ at that spot, and how far the public terrain models (and your own DTED, GeoTIFF or SRTM files) agree with each other.

## Put it on GitHub Pages

1. Create a public repository.
2. Upload every file in this folder to the top level of the repository (drag them all onto the "Add file, Upload files" page). Keep the file names as they are.
3. In the repository open Settings, then Pages. Under "Build and deployment" choose "Deploy from a branch", pick the `main` branch and the `/ (root)` folder, and save.
4. After a minute the site is live at `https://<your-user-name>.github.io/<repository-name>/`.

To update, upload the new files over the old ones. Visitors get the new version the next time they open the page online.

## Files

| File | What it is |
|---|---|
| `index.html` | The app: page, styles and code |
| `leaflet.js` | Map library, loaded when a map is first shown |
| `geotiff.js` | GeoTIFF reader, loaded only when a terrain tile is first read |
| `geoid-sa.bin` | EGM96 (15′) and EGM2008 (2.5′) for South Asia, 4° to 40°N, 58° to 100°E |
| `geoid-world.bin` | EGM96 and EGM2008 for the rest of the world (15′), fetched only when needed |
| `sw.js`, `manifest.webmanifest`, icons | Let the app be installed on a phone and opened offline |

## What leaves the device

With online sources on, the coordinates you look up are sent, as map and elevation requests, to OpenTopography, Microsoft Planetary Computer, Open-Meteo, Esri and OpenStreetMap servers. Files you load are read in the browser and never uploaded. The EMCON switch stops all elevation lookups, map pictures and location requests, so no coordinate leaves the device.

## Not a certified source

HARD DECK compares models with each other. It is not a certified source of aeronautical data.

## Credits

- Copernicus DEM © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the European Union and ESA; all rights reserved.
- ALOS World 3D-30m © JAXA. NASADEM and SRTM courtesy of NASA JPL and USGS.
- Terrain tiles are read from OpenTopography and Microsoft Planetary Computer. 90 m lookups by Open-Meteo.
- EGM96 and EGM2008 by the US National Geospatial-Intelligence Agency, gridded by the PROJ project.
- Imagery © Esri, Maxar, Earthstar Geographics. Street map © OpenStreetMap contributors. Contours © OpenTopoMap (CC-BY-SA). Sentinel-2 cloudless by EOX.
- Leaflet (BSD 2-Clause licence) and geotiff.js (MIT licence) are included unmodified.
