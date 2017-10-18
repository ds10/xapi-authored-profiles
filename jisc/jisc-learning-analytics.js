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
	"versions": [{
		"id": "",
		"generatedAtTime": "2017-10-20T12:30:00-07:00"
	}],
	"author": {
		"type": "Organization",
		"name": "Jisc"
	},
	"concepts": [{
			"@id": "http://adlnet.gov/expapi/verbs/attended",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Indicates the Actor was present at a virtual or physical event or activity."
			},
			"prefLabel": {
				"en": "Attended"
			}
		},
		{
			"@id": "http://adlnet.gov/expapi/verbs/completed",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Completing an Activity - finishing it in its entirety."
			},
			"prefLabel": {
				"en": "Completed"
			}
		},
		{
			"@id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Logged in to some service ."
			},
			"prefLabel": {
				"en": "Logged in"
			}
		},
		{
			"@id": "http://adlnet.gov/expapi/verbs/scored",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Indicates a numerical value related to an Actor's performance on an Activity."
			},
			"prefLabel": {
				"en": "Scored"
			}
		},
		{
			"@id": "https://w3id.org/xapi/adl/verbs/abandoned",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Indicates that the Activity provider has determined that the session was abnormally terminated, either by an Actor or due to a system failure. "
			},
			"prefLabel": {
				"en": "Session timed out"
			}
		},
		{
			"@id": "http://id.tincanapi.com/verb/viewed",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Indicates that the Actor has viewed the Object."
			},
			"prefLabel": {
				"en": "Viewed"
			}
		},
		{
			"@id": "https://brindlewaye.com/xAPITerms/verbs/loggedout",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "Verb",
			"definition": {
				"en": "Logged out of some service."
			},
			"prefLabel": {
				"en": "Logged out"
			}
		},

		{
			"id": "http://xapi.jisc.ac.uk/attendance_late",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ResultExtension",
			"prefLabel": {
				"en": "Attendance Late"
			},
			"definition": {
				"en": "Indicates if Agent had late attendance"
			},
			"inlineSchema": "{ \"type\": \"Integer\", \"maximum\": 1, \"minimum\": 0 }"
		},

		{
			"id": "http://xapi.jisc.ac.uk/attendance_late",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ResultExtension",
			"prefLabel": {
				"en": "Attendance Category"
			},
			"definition": {
				"en": "Enables the classification of the type of non-attendance"
			},
			"inlineSchema": "{ \"type\": \"String\"}"
		},

		{
			"id": "http://xapi.jisc.ac.uk/grade",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ResultExtension",
			"prefLabel": {
				"en": "Assignment Graded"
			},
			"definition": {
				"en": "A non-numerical assessment result."
			},
			"inlineSchema": "{ \"type\": \"String\"}"
		},




		{
			"@id": "http://activitystrea.ms/schema/1.0/application",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Represents any kind of software application"
			},
			"prefLabel": {
				"en": "Application"
			}
		},
		{
			"@id": "http://adlnet.gov/expapi/activities/assessment",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "An assessment is an Activity Type that determines a learner’s mastery of a particular subject area. An assessment typically has one or more questions."
			},
			"prefLabel": {
				"en": "Assessment"
			}
		},
		{
			"@id": "http://xapi.jisc.ac.uk/chat",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A real time chat event, such as a chatroom"
			},
			"prefLabel": {
				"en": "Chat"
			}
		},


		{
			"@id": "http://adlnet.gov/expapi/activities/course",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A course represents an entire “content package” worth of material; the largest level of granularity. Unless flat, a course consists of multiple modules."
			},
			"prefLabel": {
				"en": "Course"
			}
		},

		{
			"@id": "http://activitystrea.ms/schema/1.0/event",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Any Event"
			},
			"prefLabel": {
				"en": "Event"
			}
		},

		{
			"@id": "http://xapi.jisc.ac.uk/externalContent",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "External URL"
			},
			"prefLabel": {
				"en": "External Content"
			}
		},

		{
			"@id": "http://xapi.jisc.ac.uk/lecture",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A learning activity that consists mainly of an expert giving a talk to a number of learners."
			},
			"prefLabel": {
				"en": "Lecture"
			}
		},



		{
			"@id": "http://adlnet.gov/expapi/activities/module",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content. "
			},
			"prefLabel": {
				"en": "Module"
			}
		},






		{
			"@id": "http://xapi.jisc.ac.uk/other",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A category for Activity Types that may be generated by VLE specific plugins, but are not explicitly defined in the Jisc Profile."
			},
			"prefLabel": {
				"en": "Other"
			}
		},

		{
			"@id": "http://xapi.jisc.ac.uk/studygoal/stats",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Statistics for the Study Goal application "
			},
			"prefLabel": {
				"en": "Study Goal Statistics"
			}
		},

		{
			"@id": "http://id.tincanapi.com/activitytype/tutor-session",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "This represents a tutoring session."
			},
			"prefLabel": {
				"en": "Tutor session"
			}
		},

		{
			"@id": "http://id.tincanapi.com/activitytype/tutor-session",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "This represents a tutoring session."
			},
			"prefLabel": {
				"en": "Tutor session"
			}
		},

		{
			"@id": "http://id.tincanapi.com/activitytype/tutor-session",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "This represents a tutoring session."
			},
			"prefLabel": {
				"en": "Tutor session"
			}
		},

		{
			"@id": "http://id.tincanapi.com/activitytype/lms ",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Learning Management System. At its core, a platform used to launch and track learning experiences."
			},
			"prefLabel": {
				"en": "VLE"
			}
		},

		{
			"@id": "http://xapi.jisc.ac.uk/vle/content",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Any generic resource in a VLE"
			},
			"prefLabel": {
				"en": "VLE content"
			}
		},


		{
			"@id": "http://xapi.jisc.ac.uk/vle/content",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Any generic resource in a VLE"
			},
			"prefLabel": {
				"en": "VLE content"
			}
		},



		{
			"@id": "http://xapi.jisc.ac.uk/vle/forum",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "A VLE forum/discussion board"
			},
			"prefLabel": {
				"en": "VLE forum"
			}
		},


		{
			"@id": "http://xapi.jisc.ac.uk/vle/page",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Any page within a VLE that is not designed to be learning content, for example navigation or administration pages "
			},
			"prefLabel": {
				"en": "VLE page"
			}
		},


		{
			"@id": "http://xapi.jisc.ac.uk/vle/quiz",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"@type": "ActivityType",
			"definition": {
				"en": "Quiz within a VLE"
			},
			"prefLabel": {
				"en": "VLE quiz"
			}
		},




		{
			"id": "http://xapi.jisc.ac.uk/courseArea",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Course area"
			},
			"definition": {
				"en": "Course/parent area by its home page URI"
			},
			"inlineSchema": "{ \"type\": \"Object\" }"
		},



		{
			"id": "http://id.tincanapi.com/extension/datetime",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "DateTime"
			},
			"definition": {
				"en": "Value representing a calendar date and time, such as 2013-08-27T09:26:45.001. Value should be a string formatted as an ISO8601 date and time to match the rest of the specification values."
			},
			"inlineSchema": "{ \"type\": \"ISO 8601 date time\" }"
		},

		{
			"id": "http://id.tincanapi.com/extension/geojson",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "GeoJSON"
			},
			"definition": {
				"en": "Value should be a GeoJSON Object as defined by the GeoJSON specification. GeoJSON can be used to represent GPS coordinates, as well as other geometric entities. See http://www.geojson.org/ for more information."
			},
			"inlineSchema": "{ \"type\": \"Object\" }"
		},


		{
			"id": "http://xapi.jisc.ac.uk/dueDate",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Due Date"
			},
			"definition": {
				"en": "Date student's work is due to be submitted. Format is ISO8601 date time."
			},
			"inlineSchema": "{ \"type\": \"ISO 8601 date time\" }"
		},



		{
			"id": "http://id.tincanapi.com/extension/duration",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Duration"
			},
			"definition": {
				"en": "Value representing a length of time, for example the length of a video. Value should be formatted as an ISO8601 duration to match the result.duration property. Note that ISO8601 duration allows representations to extend beyond their carry over points; for example one and a half hours can be represented as either PT1H30M0S or PT90M. This extension will generally be used within an Activity Definition to indicate a length of an Activity as compared to the result.duration which captures the length of time for a specific event. For example a video may be 5 minutes long (this extension), but an Actor may have only watched 30 seconds of it (the result.duration). "
			},
			"inlineSchema": "{ \"type\": \"ISO 8601 date time\" }"
		},


		{
			"id": "http://xapi.jisc.ac.uk/event_mandatory",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Event Mandatory"
			},
			"definition": {
				"en": "Indicates whether or not the session is optional."
			},
			"inlineSchema": "{ \"type\": \"Boolean\" }"
		},

		{
			"id": "http://xapi.jisc.ac.uk/event_type_id",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Event max count"
			},
			"definition": {
				"en": "Value representing the total number of people who could have gone to the session"
			},
			"inlineSchema": "{ \"type\": \"Integer\" }"
		},

		{
			"id": "http://xapi.jisc.ac.uk/activity_type_id",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Activity Type Description"
			},
			"definition": {
				"en": "Value representing an Activity Type (for example 1 for lecture, 2 for seminar)"
			},
			"inlineSchema": "{ \"type\": \"Integer\" }"
		},

		{
			"id": "http://id.tincanapi.com/extension/ip-address",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "ip address"
			},
			"definition": {
				"en": "Client's address location on internet"
			},
			"inlineSchema": "{ \"type\": \"String\"}"

		},


		{
			"id": "http://xapi.jisc.ac.uk/extension/planned-end-time",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Planned end time"
			},
			"definition": {
				"en": "An ISO8601 timestamp representing the planned end time of a scheduled or planned event."
			},
			"inlineSchema": "{ \"type\": \"ISO 8601 date time\" }"
		},

		{
			"id": "http://id.tincanapi.com/extension/planned-start-time",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Planned start time"
			},
			"definition": {
				"en": "Provide a description here."
			},
			"inlineSchema": "{ \"type\": \"ISO 8601 date time\" }"
		},



		{
			"id": "http://xapi.jisc.ac.uk/subType",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Sub Type"
			},
			"definition": {
				"en": "Identifies the sub genre of any Activity Type."
			},
			"inlineSchema": "{ \"type\": \"String\" }"
		},



		{
			"id": "http://xapi.jisc.ac.uk/event_timetabled",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Timetabled Event"
			},
			"definition": {
				"en": "Indicates whether or not a learning activity was scheduled."
			},
			"inlineSchema": "{ \"type\": \"Boolean\" }"
		},

		{
			"id": "http://xapi.jisc.ac.uk/version",
			"inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
			"type": "ContextExtension",
			"prefLabel": {
				"en": "Jisc Profile Version"
			},
			"definition": {
				"en": "Version number of the xAPI Jisc Profile being used; found on homepage of the current Github repository. "
			},
			"inlineSchema": "{ \"type\": \"String\"}"
		}

	],
	"templates": [{
            "id": "https://w3id.org/xapi/newprofilename#vle_logged_in",
            "type": "StatementTemplate",
            "prefLabel": {
                "en": "Logged in"
            },
            "inScheme": "https://w3id.org/xapi/jisc-learning-analytics-service",
            "verb": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
			 "definition": {
			"en": "This activity records a user logging in to a VLE."
			},
		
			
            "rules": [

			
			
                {
                    "location": "$.context.extensions['http://xapi.jisc.ac.uk/version']",
                    "presence": "recommended"
                },
                {
                    "location": "$.context.extensions['http://xapi.jisc.ac.uk/sessionId']",
                    "presence": "recommended"
                },
				{
                    "location": "$.context.extensions['http://id.tincanapi.com/extensions/ip-address']",
                    "presence": "recommended"
                },
				{
                    "location": "$.context.extensions['http://xapi.jisc.ac.uk/courseArea']",
                    "presence": "recommended"
                },
				
				                {
                    "location": "$.context.platform",
                    "presence": "included"
                }
				
            ]
        }

	
	
	]
}