{
   "@context": "https://w3id.org/xapi/profiles/context",
    "id": "https://w3id.org/xapi/jisc-learning-analytics-service",
    "type": "Profile",
    "conformsTo": "https://w3id.org/xapi/profiles#1.0",
    "prefLabel": {
        "en": "Jisc Learning Analytics Service"
    },
    "definition": {
        "en": "This specification learning analytics for the jisc learning analytics service"
    },
    "seeAlso": "https://github.com/jiscdev/xapi/",
    "versions": [
        {
            "id": "",
            "generatedAtTime": "2017-10-20T12:30:00-07:00"
        }
    ],
    "author": {
        "type": "Organization",
        "name": ""
    },
    "concepts": [
      {
        "@id": "",
        "inScheme": "https://w3id.org/xapi/newprofilename",
        "@type": "Verb",
        "definition": {
          "en": "Title of Verb"
        },
        "prefLabel": {
          "en": "Provide a description here."
        }
      },
	{
		"@id": "",
        "inScheme": "https://w3id.org/xapi/newprofilename",
		"@type": "ActivityType",
		"definition": {
			"en": "Title of Activity Type"
		},
		"prefLabel": {
			"en": "Provide a description here."
		}
	},
  {
      "id": "",
      "inScheme": "https://w3id.org/xapi/newprofilename",
      "type": "ContextExtension",
      "prefLabel": {
          "en": "Title of Context Extension"
      },
      "definition": {
          "en": "Provide a description here."
      },
      "inlineSchema": ""
  },
  {
      "id": "",
      "inScheme": "https://w3id.org/xapi/newprofilename",
      "type": "ResultExtension",
      "prefLabel": {
          "en": "Title of Result Extension"
      },
      "definition": {
          "en": "Indicates the reason why an AU was 'waived' (marked complete by an alternative means)"
      },
      "inlineSchema": ""
  }
],
    "templates": [
        {
            "id": "https://w3id.org/xapi/newprofilename#templatename",
            "type": "StatementTemplate",
            "inScheme": "https://w3id.org/xapi/newprofilename",
            "prefLabel": {
                "en": "Restrictions for all of this profile's Statements"
            },
            "verb": "",
            "rules": [
                {
                    "location": "$.id",
                    "presence": "included"
                },
                {
                    "location": "$.timestamp",
                    "presence": "included",
                    "scopeNote": ""
                }
            ]
        }],
    "patterns": [
        {
            "id": "https://w3id.org/xapi/newprofilename5#patternname",
            "type": "Pattern",
            "primary": true,
            "prefLabel": {
                "en": "Title of Pattern"
            },
            "definition": {
                "en": "Provide a description here."
            },
            "inScheme": "https://w3id.org/xapi/newprofilename5",
            "sequence": ["", ""]
        }


    ]
}
