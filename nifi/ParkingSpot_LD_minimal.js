{
    "id": "urn:ngsi-ld:ParkingSpot:santander:daoiz_velarde_1_5:3",
    "type": "ParkingSpot",
    "status": {
        "type": "Property",
        "value": "free",
        "observedAt": "2018-09-21T12:00:00Z"
    },
    "category": {
        "type": "Property",
        "value": ["onstreet"]
    },
    "refParkingSite": {
        "type": "Relationship",
        "object": "urn:ngsi-ld:ParkingSite:santander:daoiz_velarde_1_5"
    },
    "name": {
        "type": "Property",
        "value": "A-13"
    },
    "location": {
        "type": "GeoProperty",
        "value": {
            "type": "Point",
            "coordinates": [-3.80356167695194, 43.46296641666926]
        }
    },
    "@context": [
        "https://schema.lab.fiware.org/ld/context",
        "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
    ]
}
