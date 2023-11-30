var wms_layers = [];

var format_TUPLAHWAYAPU_0 = new ol.format.GeoJSON();
var features_TUPLAHWAYAPU_0 = format_TUPLAHWAYAPU_0.readFeatures(json_TUPLAHWAYAPU_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUPLAHWAYAPU_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUPLAHWAYAPU_0.addFeatures(features_TUPLAHWAYAPU_0);
var lyr_TUPLAHWAYAPU_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUPLAHWAYAPU_0, 
                style: style_TUPLAHWAYAPU_0,
                interactive: true,
    title: 'TUPLAH WAYAPU<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_0.png" /> Belukar<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_1.png" /> Belukar Rawa<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_4.png" /> Hutan Mangrove Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_5.png" /> Hutan Rawa Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_6.png" /> Pemukiman<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_7.png" /> Perkebunan<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_8.png" /> Pertambangan<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_9.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_10.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_11.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_12.png" /> Sawah<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_13.png" /> Tambak<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_14.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_15.png" /> Transmigrasi<br />\
    <img src="styles/legend/TUPLAHWAYAPU_0_16.png" /> <br />'
        });

lyr_TUPLAHWAYAPU_0.setVisible(true);
var layersList = [lyr_TUPLAHWAYAPU_0];
lyr_TUPLAHWAYAPU_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_TUPLAHWAYAPU_0.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_TUPLAHWAYAPU_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_TUPLAHWAYAPU_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});