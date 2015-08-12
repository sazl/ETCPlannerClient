
let StaffAvailable = [
    {
        "index": 1,
        "firstName": "Michael",
        "lastName": "Dirksen",
        "birthDate": null,
        "title": "Emergency Coord.",
        "thurayaNumber": "0",
        "mobileNumber": "0",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 2,
                "profileType": "Electrical Specialist"
            },
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            },
            {
                "id": 5,
                "profileType": "IT Specialist"
            },
            {
                "id": 14,
                "profileType": "TC Officer"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 160,
                "isoCode": "NL",
                "fullName": "Netherlands",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 2,
        "firstName": "William",
        "lastName": "Twyford",
        "birthDate": null,
        "title": "Elec. Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 2,
                "profileType": "Electrical Specialist"
            },
            {
                "id": 15,
                "profileType": "TC Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 14,
                "isoCode": "AU",
                "fullName": "Australia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 3,
        "firstName": "Karen",
        "lastName": "Barsamian",
        "birthDate": null,
        "title": "Head of Operation",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 7,
            "staffType": "OSTF Dubai"
        },
        "profileTypes": [
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            },
            {
                "id": 15,
                "profileType": "TC Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            },
            {
                "id": 7,
                "language": "Russian"
            }
        ],
        "nationalities": [
            {
                "id": 7,
                "isoCode": "AM",
                "fullName": "Armenia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 4,
        "firstName": "Eric",
        "lastName": "Kiruhura",
        "birthDate": null,
        "title": "",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 4,
            "staffType": "OSTF Rome"
        },
        "profileTypes": [
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            }
        ],
        "languages": [],
        "nationalities": [
            {
                "id": 110,
                "isoCode": "KE",
                "fullName": "Kenya",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 5,
        "firstName": "Pastor",
        "lastName": "Lovo",
        "birthDate": null,
        "title": "Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 5,
                "profileType": "IT Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            },
            {
                "id": 8,
                "language": "Spanish"
            }
        ],
        "nationalities": [
            {
                "id": 159,
                "isoCode": "NI",
                "fullName": "Nicaragua",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 7,
        "firstName": "Neil",
        "lastName": "Murphy-Dewar",
        "birthDate": null,
        "title": "ICT Officer",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 225,
                "isoCode": "UK",
                "fullName": "United Kingdom",
                "region": "N/A"
            }
        ]
    }
];

let StaffNotAvailable = [
    {
        "index": 8,
        "firstName": "Khawar",
        "lastName": "Ilyas",
        "birthDate": null,
        "title": "ICT Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 5,
                "profileType": "IT Specialist"
            },
            {
                "id": 15,
                "profileType": "TC Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 172,
                "isoCode": "PK",
                "fullName": "Pakistan",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 9,
        "firstName": "Ozdzan",
        "lastName": "Hadziemin",
        "birthDate": null,
        "title": "Emergency Coord.",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            },
            {
                "id": 15,
                "profileType": "TC Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 138,
                "isoCode": "MK",
                "fullName": "Macedonia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 10,
        "firstName": "Ryan",
        "lastName": "Twittey",
        "birthDate": null,
        "title": "Snr. Elec. Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 2,
                "profileType": "Electrical Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 14,
                "isoCode": "AU",
                "fullName": "Australia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 11,
        "firstName": "Rob",
        "lastName": "Buurveld",
        "birthDate": null,
        "title": "Snr. Speclaist/Team leader",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 5,
                "profileType": "IT Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            }
        ],
        "nationalities": [
            {
                "id": 160,
                "isoCode": "NL",
                "fullName": "Netherlands",
                "region": "N/A"
            }
        ]
    }
];


let StaffBreakInService = [
    {
        "index": 13,
        "firstName": "Ivan",
        "lastName": "Thomas",
        "birthDate": null,
        "title": "ICT Officer",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 3,
                "profileType": "ETC Coordinator"
            },
            {
                "id": 5,
                "profileType": "IT Specialist"
            }
        ],
        "languages": [],
        "nationalities": [
            {
                "id": 243,
                "isoCode": "ZM",
                "fullName": "Zambia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 14,
        "firstName": "Ivan",
        "lastName": "Klicko",
        "birthDate": null,
        "title": "Elec. Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 2,
                "profileType": "Electrical Specialist"
            }
        ],
        "languages": [],
        "nationalities": [
            {
                "id": 95,
                "isoCode": "HR",
                "fullName": "Croatia",
                "region": "N/A"
            }
        ]
    },
    {
        "index": 16,
        "firstName": "Christopher",
        "lastName": "Alagna",
        "birthDate": null,
        "title": "Junior Specialist",
        "thurayaNumber": "",
        "mobileNumber": "",
        "colorCode": "000000",
        "staffType": {
            "id": 1,
            "staffType": "FITTEST CST"
        },
        "profileTypes": [
            {
                "id": 15,
                "profileType": "TC Specialist"
            }
        ],
        "languages": [
            {
                "id": 4,
                "language": "English"
            },
            {
                "id": 5,
                "language": "French"
            }
        ],
        "nationalities": [
            {
                "id": 14,
                "isoCode": "AU",
                "fullName": "Australia",
                "region": "N/A"
            }
        ]
    }
];
