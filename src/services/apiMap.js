export default require([ 
    "esri/Map", "esri/views/SceneView",
    "esri/layers/TileLayer",
    "esri/Basemap"
    ], function(Map, SceneView, TileLayer, Basemap) {

        const basemap = new Basemap({
            baseLayers: [
                new TileLayer({
                    url:"https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/terrain_with_heavy_bathymetry/MapServer"
                })
            ]
        });

        const map = new Map({
            basemap: "dark-gray-vector",
            ground: "world-elevation"
        });

        const view = new SceneView({
            container: "viewDiv",
            map: map,
            alphaCompositingEnabled: true,
            qualityProfile: "high",
            camera: {
            position: [-55.03975781, 14.94826384, 19921223.30821],
            heading: 2.03,
            tilt: 0.13
            },
            environment: {
            background: {
                type: "color",
                color: [255, 252, 244, 0]
            },
            starsEnabled: false,
            atmosphereEnabled: false,
            lighting: {
                directShadowsEnabled: false,
                date: "Sun Jun 23 2019 19:19:18 GMT+0200 (Central European Summer Time)"
            }
            },
            constraints: {
                altitude: {
                    min: 10000000,
                    max: 25000000
                    }
                }
        });
    view.ui.empty("top-left");
});