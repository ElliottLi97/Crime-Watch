const searchWrap = document.querySelector('.searchBarBtn')
const searchInputEl = document.querySelector("#search");
const searchBtnEl = document.querySelector("#searchBtn");
const suggestionBox = document.querySelector('#searchHistory')
const mapEl = document.querySelector("#map");

var crimeDetails = {
  "total_incidents": 550249,
  "total_pages": 5503,
  "incidents": [
      {
          "city_key": "HOU",
          "incident_code": "057475322",
          "incident_date": "2022-05-01T09:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 44XX 4499 W AIRPORT BLVD, 77045",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6431,
          "incident_longitude": -95.4431,
          "incident_address": "44XX 4499 W AIRPORT BLVD, 77045"
      },
      {
          "city_key": "HOU",
          "incident_code": "057475922",
          "incident_date": "2022-05-01T09:00:00Z",
          "incident_offense": "Trespass of Real Property",
          "incident_offense_code": "90J",
          "incident_offense_description": "Trespass of Real Property",
          "incident_offense_detail_description": "Trespass of Real Property at 40XX 4099 SOUTHWEST FWY, 77027",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Trespass of real property",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7293,
          "incident_longitude": -95.4411,
          "incident_address": "40XX 4099 SOUTHWEST FWY, 77027"
      },
      {
          "city_key": "HOU",
          "incident_code": "057448222",
          "incident_date": "2022-05-01T07:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 116XX 11699 MARTINDALE RD, 77048",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6369,
          "incident_longitude": -95.3247001,
          "incident_address": "116XX 11699 MARTINDALE RD, 77048"
      },
      {
          "city_key": "HOU",
          "incident_code": "057453922",
          "incident_date": "2022-05-01T07:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23F",
          "incident_offense_description": "Theft From Motor Vehicle",
          "incident_offense_detail_description": "Theft From Motor Vehicle at 15XX 1599 TEXAS ST, 77002",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft from motor vehicle",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7572,
          "incident_longitude": -95.3582,
          "incident_address": "15XX 1599 TEXAS ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057451222",
          "incident_date": "2022-05-01T07:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 37XX 3799 LEE ST, 77026",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7819,
          "incident_longitude": -95.3334,
          "incident_address": "37XX 3799 LEE ST, 77026"
      },
      {
          "city_key": "HOU",
          "incident_code": "057452422",
          "incident_date": "2022-05-01T07:00:00Z",
          "incident_offense": "Burglary/Breaking & Entering",
          "incident_offense_code": "220",
          "incident_offense_description": "Burglary/Breaking & Entering",
          "incident_offense_detail_description": "Burglary/Breaking & Entering at 27XX 2799 REED RD, 77051",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Burglary, Breaking and Entering",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6576,
          "incident_longitude": -95.3865,
          "incident_address": "27XX 2799 REED RD, 77051"
      },
      {
          "city_key": "HOU",
          "incident_code": "057445522",
          "incident_date": "2022-05-01T06:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 34XX 3499 DELHI ST, 77022",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8175,
          "incident_longitude": -95.3871,
          "incident_address": "34XX 3499 DELHI ST, 77022"
      },
      {
          "city_key": "HOU",
          "incident_code": "057450822",
          "incident_date": "2022-05-01T06:00:00Z",
          "incident_offense": "Burglary/Breaking & Entering",
          "incident_offense_code": "220",
          "incident_offense_description": "Burglary/Breaking & Entering",
          "incident_offense_detail_description": "Burglary/Breaking & Entering at 18XX 1899 W POLK ST, 77571",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Burglary, Breaking and Entering",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6664,
          "incident_longitude": -95.0374,
          "incident_address": "18XX 1899 W POLK ST, 77571"
      },
      {
          "city_key": "HOU",
          "incident_code": "057446922",
          "incident_date": "2022-05-01T06:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 86XX 8699 PITNER RD, 77080",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8294,
          "incident_longitude": -95.5031,
          "incident_address": "86XX 8699 PITNER RD, 77080"
      },
      {
          "city_key": "HOU",
          "incident_code": "057443722",
          "incident_date": "2022-05-01T06:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 101XX 10199 HAMMERLY BLVD, 77080",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8134,
          "incident_longitude": -95.5415,
          "incident_address": "101XX 10199 HAMMERLY BLVD, 77080"
      },
      {
          "city_key": "HOU",
          "incident_code": "057454822",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 66XX 6699 DUNLAP ST, 77074",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7078,
          "incident_longitude": -95.4957,
          "incident_address": "66XX 6699 DUNLAP ST, 77074"
      },
      {
          "city_key": "HOU",
          "incident_code": "057436122",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 86XX 8699 PITNER RD, 77080",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8294,
          "incident_longitude": -95.5031,
          "incident_address": "86XX 8699 PITNER RD, 77080"
      },
      {
          "city_key": "HOU",
          "incident_code": "057437222",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 31XX 3199 GRAY ST, 77004",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7385,
          "incident_longitude": -95.3546,
          "incident_address": "31XX 3199 GRAY ST, 77004"
      },
      {
          "city_key": "HOU",
          "incident_code": "057432722",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 27XX 2799 CROCKER ST, 77006",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7453,
          "incident_longitude": -95.3897,
          "incident_address": "27XX 2799 CROCKER ST, 77006"
      },
      {
          "city_key": "HOU",
          "incident_code": "057436022",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Weapon Law Violations",
          "incident_offense_code": "520",
          "incident_offense_description": "Weapon Law Violations",
          "incident_offense_detail_description": "Weapon Law Violations at 28XX 2899 N TERMINAL RD, 77032",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Weapon law violations",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.9866,
          "incident_longitude": -95.3349,
          "incident_address": "28XX 2899 N TERMINAL RD, 77032"
      },
      {
          "city_key": "HOU",
          "incident_code": "057450022",
          "incident_date": "2022-05-01T05:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23H",
          "incident_offense_description": "All Other Larceny",
          "incident_offense_detail_description": "All Other Larceny at 65XX 6599 FANNIN ST, 77030",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other larceny",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7116,
          "incident_longitude": -95.3996001,
          "incident_address": "65XX 6599 FANNIN ST, 77030"
      },
      {
          "city_key": "HOU",
          "incident_code": "057431122",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 72XX 7299 TOBRUK LN, 77033",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6808,
          "incident_longitude": -95.3414,
          "incident_address": "72XX 7299 TOBRUK LN, 77033"
      },
      {
          "city_key": "HOU",
          "incident_code": "057425222",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 24XX 2499 S WAYSIDE DR, 77023",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7148,
          "incident_longitude": -95.3155,
          "incident_address": "24XX 2499 S WAYSIDE DR, 77023"
      },
      {
          "city_key": "HOU",
          "incident_code": "057424722",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 56XX 5699, HARRIET, 77023",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7191,
          "incident_longitude": -95.3208,
          "incident_address": "56XX 5699, HARRIET, 77023"
      },
      {
          "city_key": "HOU",
          "incident_code": "057427922",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 26XX 2699 GESSNER RD, 77043",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8196,
          "incident_longitude": -95.5446,
          "incident_address": "26XX 2699 GESSNER RD, 77043"
      },
      {
          "city_key": "HOU",
          "incident_code": "057421622",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23H",
          "incident_offense_description": "All Other Larceny",
          "incident_offense_detail_description": "All Other Larceny at 21XX 2199 TANNEHILL DR, 77008",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other larceny",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7985,
          "incident_longitude": -95.4362,
          "incident_address": "21XX 2199 TANNEHILL DR, 77008"
      },
      {
          "city_key": "HOU",
          "incident_code": "057429222",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Trespass of Real Property",
          "incident_offense_code": "90J",
          "incident_offense_description": "Trespass of Real Property",
          "incident_offense_detail_description": "Trespass of Real Property at 106XX 10699 FONDREN RD, 77096",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Trespass of real property",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6665,
          "incident_longitude": -95.5091,
          "incident_address": "106XX 10699 FONDREN RD, 77096"
      },
      {
          "city_key": "HOU",
          "incident_code": "057420722",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 101XX 10199 S GESSNER RD, 77031",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.669,
          "incident_longitude": -95.529,
          "incident_address": "101XX 10199 S GESSNER RD, 77031"
      },
      {
          "city_key": "HOU",
          "incident_code": "057433222",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 48XX 4899 CHENEVERT ST, 77004",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7275,
          "incident_longitude": -95.3782001,
          "incident_address": "48XX 4899 CHENEVERT ST, 77004"
      },
      {
          "city_key": "HOU",
          "incident_code": "057471122",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23G",
          "incident_offense_description": "Theft of Motor Vehicle Parts or Accessories",
          "incident_offense_detail_description": "Theft of Motor Vehicle Parts or Accessories at 61XX 6199 WILLERS WAY, 77057",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft of motor vehicle parts or accessory",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7481,
          "incident_longitude": -95.4899,
          "incident_address": "61XX 6199 WILLERS WAY, 77057"
      },
      {
          "city_key": "HOU",
          "incident_code": "057425922",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Fraud Offenses",
          "incident_offense_code": "26A",
          "incident_offense_description": "False Pretenses/Swindle/Confidence Game",
          "incident_offense_detail_description": "False Pretenses/Swindle/Confidence Game at 98XX 9899 GULF FWY, 77034",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "False pretenses, swindle",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6515,
          "incident_longitude": -95.2522,
          "incident_address": "98XX 9899 GULF FWY, 77034"
      },
      {
          "city_key": "HOU",
          "incident_code": "057429122",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 59XX 5999 BISSONNET ST, 77081",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6998,
          "incident_longitude": -95.4858,
          "incident_address": "59XX 5999 BISSONNET ST, 77081"
      },
      {
          "city_key": "HOU",
          "incident_code": "057430922",
          "incident_date": "2022-05-01T04:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 6XX 699 MAXEY RD, 77013",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7845,
          "incident_longitude": -95.2192,
          "incident_address": "6XX 699 MAXEY RD, 77013"
      },
      {
          "city_key": "HOU",
          "incident_code": "057449922",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Motor Vehicle Theft",
          "incident_offense_code": "240",
          "incident_offense_description": "Motor Vehicle Theft",
          "incident_offense_detail_description": "Motor Vehicle Theft at 75XX 7599 CURRY RD, 77093",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Motor vehicle theft",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8272,
          "incident_longitude": -95.3377,
          "incident_address": "75XX 7599 CURRY RD, 77093"
      },
      {
          "city_key": "HOU",
          "incident_code": "057410522",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23F",
          "incident_offense_description": "Theft From Motor Vehicle",
          "incident_offense_detail_description": "Theft From Motor Vehicle at 16XX 1699 MAIN ST, 77587",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft from motor vehicle",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6582,
          "incident_longitude": -95.2387,
          "incident_address": "16XX 1699 MAIN ST, 77587"
      },
      {
          "city_key": "HOU",
          "incident_code": "057416422",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 10XX 1099 WAYSIDE DR, 77011",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.743,
          "incident_longitude": -95.3037001,
          "incident_address": "10XX 1099 WAYSIDE DR, 77011"
      },
      {
          "city_key": "HOU",
          "incident_code": "057410022",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 12XX 1299 JEFFERSON ST, 77002",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7495,
          "incident_longitude": -95.3679,
          "incident_address": "12XX 1299 JEFFERSON ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057407122",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 102XX 10299 W BELLFORT AVE, 77031",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6531,
          "incident_longitude": -95.5589,
          "incident_address": "102XX 10299 W BELLFORT AVE, 77031"
      },
      {
          "city_key": "HOU",
          "incident_code": "057419722",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 131XX 13199 S POST OAK RD, 77085",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6351,
          "incident_longitude": -95.4641,
          "incident_address": "131XX 13199 S POST OAK RD, 77085"
      },
      {
          "city_key": "HOU",
          "incident_code": "057420322",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Trespass of Real Property",
          "incident_offense_code": "90J",
          "incident_offense_description": "Trespass of Real Property",
          "incident_offense_detail_description": "Trespass of Real Property at 40XX 4099 GULF FWY, 77003",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Trespass of real property",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7322,
          "incident_longitude": -95.342,
          "incident_address": "40XX 4099 GULF FWY, 77003"
      },
      {
          "city_key": "HOU",
          "incident_code": "057416322",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 99XX 9999 BASSOON DR, 77025",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6753,
          "incident_longitude": -95.4463,
          "incident_address": "99XX 9999 BASSOON DR, 77025"
      },
      {
          "city_key": "HOU",
          "incident_code": "057464222",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Motor Vehicle Theft",
          "incident_offense_code": "240",
          "incident_offense_description": "Motor Vehicle Theft",
          "incident_offense_detail_description": "Motor Vehicle Theft at 37XX 3799 SOUTHMORE BLVD, 77004",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Motor vehicle theft",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7126,
          "incident_longitude": -95.3577,
          "incident_address": "37XX 3799 SOUTHMORE BLVD, 77004"
      },
      {
          "city_key": "HOU",
          "incident_code": "057413722",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 60XX 6099 GULFTON ST, 77081",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7165,
          "incident_longitude": -95.487,
          "incident_address": "60XX 6099 GULFTON ST, 77081"
      },
      {
          "city_key": "HOU",
          "incident_code": "057418522",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 8XX 899 N DURHAM DR, 77008",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.786,
          "incident_longitude": -95.4112,
          "incident_address": "8XX 899 N DURHAM DR, 77008"
      },
      {
          "city_key": "HOU",
          "incident_code": "057411222",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 95XX 9599 SOUTHWEST FWY, 77036",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6775,
          "incident_longitude": -95.5408,
          "incident_address": "95XX 9599 SOUTHWEST FWY, 77036"
      },
      {
          "city_key": "HOU",
          "incident_code": "057419322",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 31XX 3199 FANNIN ST, 77004",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7415,
          "incident_longitude": -95.3762,
          "incident_address": "31XX 3199 FANNIN ST, 77004"
      },
      {
          "city_key": "HOU",
          "incident_code": "057409222",
          "incident_date": "2022-05-01T03:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 106XX 10699 WESTPARK DR, 77042",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7217,
          "incident_longitude": -95.5631,
          "incident_address": "106XX 10699 WESTPARK DR, 77042"
      },
      {
          "city_key": "HOU",
          "incident_code": "057397622",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 68XX 6899 HILLCROFT AVE, 77081",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7053,
          "incident_longitude": -95.4932,
          "incident_address": "68XX 6899 HILLCROFT AVE, 77081"
      },
      {
          "city_key": "HOU",
          "incident_code": "057391822",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 10XX 1099 PRAIRIE ST, 77002",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7605,
          "incident_longitude": -95.3619,
          "incident_address": "10XX 1099 PRAIRIE ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057395722",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Burglary/Breaking & Entering",
          "incident_offense_code": "220",
          "incident_offense_description": "Burglary/Breaking & Entering",
          "incident_offense_detail_description": "Burglary/Breaking & Entering at 12XX 1299 EL CAMINO VILLAGE DR, 77058",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Burglary, Breaking and Entering",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.548,
          "incident_longitude": -95.107,
          "incident_address": "12XX 1299 EL CAMINO VILLAGE DR, 77058"
      },
      {
          "city_key": "HOU",
          "incident_code": "057410222",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23H",
          "incident_offense_description": "All Other Larceny",
          "incident_offense_detail_description": "All Other Larceny at 117XX 11799 JELICOE DR, 77047",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other larceny",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6246,
          "incident_longitude": -95.3968,
          "incident_address": "117XX 11799 JELICOE DR, 77047"
      },
      {
          "city_key": "HOU",
          "incident_code": "057460222",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 69XX 6999 BISSONNET ST, 77074",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6897,
          "incident_longitude": -95.5053,
          "incident_address": "69XX 6999 BISSONNET ST, 77074"
      },
      {
          "city_key": "HOU",
          "incident_code": "057398722",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 82XX 8299 BELLAIRE BLVD, 77036",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7052,
          "incident_longitude": -95.5292,
          "incident_address": "82XX 8299 BELLAIRE BLVD, 77036"
      },
      {
          "city_key": "HOU",
          "incident_code": "057401822",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 11XX 1199 W TRI OAKS LN, 77043",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7861,
          "incident_longitude": -95.5847,
          "incident_address": "11XX 1199 W TRI OAKS LN, 77043"
      },
      {
          "city_key": "HOU",
          "incident_code": "057389922",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Drug/Narcotic Offenses",
          "incident_offense_code": "35A",
          "incident_offense_description": "Drug/Narcotic Violations",
          "incident_offense_detail_description": "Drug/Narcotic Violations at 14XX 1499 DUNLAVY ST, 77019",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Drug, narcotic violations",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7545,
          "incident_longitude": -95.4025,
          "incident_address": "14XX 1499 DUNLAVY ST, 77019"
      },
      {
          "city_key": "HOU",
          "incident_code": "057397422",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 32XX 3299 BROOKSTON ST, 77045",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6373,
          "incident_longitude": -95.4248,
          "incident_address": "32XX 3299 BROOKSTON ST, 77045"
      },
      {
          "city_key": "HOU",
          "incident_code": "057392222",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 23XX 2399 CHANTILLY LN, 77018",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8285,
          "incident_longitude": -95.4529,
          "incident_address": "23XX 2399 CHANTILLY LN, 77018"
      },
      {
          "city_key": "HOU",
          "incident_code": "057401322",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Motor Vehicle Theft",
          "incident_offense_code": "240",
          "incident_offense_description": "Motor Vehicle Theft",
          "incident_offense_detail_description": "Motor Vehicle Theft at 95XX 9599 SOUTHWEST FWY, 77074",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Motor vehicle theft",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6775,
          "incident_longitude": -95.5408,
          "incident_address": "95XX 9599 SOUTHWEST FWY, 77074"
      },
      {
          "city_key": "HOU",
          "incident_code": "057395522",
          "incident_date": "2022-05-01T02:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 65XX 6599 STROUD DR, 77074",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6986,
          "incident_longitude": -95.4991,
          "incident_address": "65XX 6599 STROUD DR, 77074"
      },
      {
          "city_key": "HOU",
          "incident_code": "057385722",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 65XX 6599 WESTHEIMER RD, 77057",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.738,
          "incident_longitude": -95.4986,
          "incident_address": "65XX 6599 WESTHEIMER RD, 77057"
      },
      {
          "city_key": "HOU",
          "incident_code": "057383422",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 30XX 3099 SEAGLER RD, 77042",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.733,
          "incident_longitude": -95.5554,
          "incident_address": "30XX 3099 SEAGLER RD, 77042"
      },
      {
          "city_key": "HOU",
          "incident_code": "057371922",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "All Other Offenses",
          "incident_offense_code": "90Z",
          "incident_offense_description": "All Other Offenses",
          "incident_offense_detail_description": "All Other Offenses at 21XX 2199 TRAVIS ST, 77002",
          "incident_offense_crime_against": "Person, Property, or Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other offenses",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7492,
          "incident_longitude": -95.3728,
          "incident_address": "21XX 2199 TRAVIS ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057366022",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 118XX 11899 SANDPIPER DR, 77035",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6511,
          "incident_longitude": -95.5036,
          "incident_address": "118XX 11899 SANDPIPER DR, 77035"
      },
      {
          "city_key": "HOU",
          "incident_code": "057388722",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 50XX 5099 WASHINGTON AVE, 77007",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7704,
          "incident_longitude": -95.4116001,
          "incident_address": "50XX 5099 WASHINGTON AVE, 77007"
      },
      {
          "city_key": "HOU",
          "incident_code": "057385022",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 79XX 7999 ROCK ROSE ST, 77051",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6735,
          "incident_longitude": -95.3569,
          "incident_address": "79XX 7999 ROCK ROSE ST, 77051"
      },
      {
          "city_key": "HOU",
          "incident_code": "057373022",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "All Other Offenses",
          "incident_offense_code": "90Z",
          "incident_offense_description": "All Other Offenses",
          "incident_offense_detail_description": "All Other Offenses at 85XX 8599 PITNER RD, 77080",
          "incident_offense_crime_against": "Person, Property, or Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other offenses",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8295,
          "incident_longitude": -95.5001,
          "incident_address": "85XX 8599 PITNER RD, 77080"
      },
      {
          "city_key": "HOU",
          "incident_code": "057365822",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 83XX 8399 PARK PLACE BLVD, 77017",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6913,
          "incident_longitude": -95.2697,
          "incident_address": "83XX 8399 PARK PLACE BLVD, 77017"
      },
      {
          "city_key": "HOU",
          "incident_code": "057422322",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23H",
          "incident_offense_description": "All Other Larceny",
          "incident_offense_detail_description": "All Other Larceny at 12XX 1299 MAIN ST, 77002",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other larceny",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7555,
          "incident_longitude": -95.3662001,
          "incident_address": "12XX 1299 MAIN ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057372422",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 59XX 5999 SELINSKY RD, 77048",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6355,
          "incident_longitude": -95.3274,
          "incident_address": "59XX 5999 SELINSKY RD, 77048"
      },
      {
          "city_key": "HOU",
          "incident_code": "057432122",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 11XX 1199 PROVIDENCE ST, 77002",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7684,
          "incident_longitude": -95.3561,
          "incident_address": "11XX 1199 PROVIDENCE ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057381022",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Counterfeiting/Forgery",
          "incident_offense_code": "250",
          "incident_offense_description": "Counterfeiting/Forgery",
          "incident_offense_detail_description": "Counterfeiting/Forgery at 26XX 2699 PIERCE ST, 77003",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Counterfeiting, forgery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7412,
          "incident_longitude": -95.3571,
          "incident_address": "26XX 2699 PIERCE ST, 77003"
      },
      {
          "city_key": "HOU",
          "incident_code": "057375222",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Weapon Law Violations",
          "incident_offense_code": "520",
          "incident_offense_description": "Weapon Law Violations",
          "incident_offense_detail_description": "Weapon Law Violations at 118XX 11899 BEECHNUT ST, 77072",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Weapon law violations",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6892,
          "incident_longitude": -95.5864,
          "incident_address": "118XX 11899 BEECHNUT ST, 77072"
      },
      {
          "city_key": "HOU",
          "incident_code": "057385122",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Family Offenses, Nonviolent",
          "incident_offense_code": "90F",
          "incident_offense_description": "Family Offenses, Nonviolent",
          "incident_offense_detail_description": "Family Offenses, Nonviolent at 13XX 1399, WORMS, 77020",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Family offenses, no violence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7734,
          "incident_longitude": -95.3313,
          "incident_address": "13XX 1399, WORMS, 77020"
      },
      {
          "city_key": "HOU",
          "incident_code": "057386122",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 77XX 7799 CHANNELSIDE ST, 77012",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7168,
          "incident_longitude": -95.2834,
          "incident_address": "77XX 7799 CHANNELSIDE ST, 77012"
      },
      {
          "city_key": "HOU",
          "incident_code": "057412022",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 141XX 14199 BANDERA ST, 77015",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7771,
          "incident_longitude": -95.1718,
          "incident_address": "141XX 14199 BANDERA ST, 77015"
      },
      {
          "city_key": "HOU",
          "incident_code": "057382922",
          "incident_date": "2022-05-01T01:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 64XX 6499 LOCKWOOD DR, 77028",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.8181,
          "incident_longitude": -95.3185,
          "incident_address": "64XX 6499 LOCKWOOD DR, 77028"
      },
      {
          "city_key": "CXLA",
          "incident_code": "220018189",
          "incident_date": "2022-05-01T00:47:00Z",
          "incident_offense": "Family Offenses",
          "incident_offense_code": "N/A",
          "incident_offense_description": "Domestic Violence/Simple Assault",
          "incident_offense_detail_description": "Domestic Violence/Simple Assault at 5XX REDBUD AVE, FRESNO, TX 77583",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Assault Family Violence",
          "incident_source_name": "Fort Bend County Sheriff's Office",
          "incident_latitude": 29.5173,
          "incident_longitude": -95.4459,
          "incident_address": "5XX REDBUD AVE, FRESNO, TX 77583"
      },
      {
          "city_key": "HOU",
          "incident_code": "057365322",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Trespass of Real Property",
          "incident_offense_code": "90J",
          "incident_offense_description": "Trespass of Real Property",
          "incident_offense_detail_description": "Trespass of Real Property at 75XX 7599 OFFICE CITY DR, 77012",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Trespass of real property",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6997,
          "incident_longitude": -95.2879,
          "incident_address": "75XX 7599 OFFICE CITY DR, 77012"
      },
      {
          "city_key": "HOU",
          "incident_code": "057355322",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Counterfeiting/Forgery",
          "incident_offense_code": "250",
          "incident_offense_description": "Counterfeiting/Forgery",
          "incident_offense_detail_description": "Counterfeiting/Forgery at 100XX 10099 MAIN ST, 77054",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Counterfeiting, forgery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6764,
          "incident_longitude": -95.4294,
          "incident_address": "100XX 10099 MAIN ST, 77054"
      },
      {
          "city_key": "HOU",
          "incident_code": "057354722",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 77XX 7799 CORPORATE DR, 77036",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6954,
          "incident_longitude": -95.5525,
          "incident_address": "77XX 7799 CORPORATE DR, 77036"
      },
      {
          "city_key": "HOU",
          "incident_code": "057356722",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "All Other Offenses",
          "incident_offense_code": "90Z",
          "incident_offense_description": "All Other Offenses",
          "incident_offense_detail_description": "All Other Offenses at 44XX 4499 TRAVIS ST, 77002",
          "incident_offense_crime_against": "Person, Property, or Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other offenses",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7339,
          "incident_longitude": -95.3844,
          "incident_address": "44XX 4499 TRAVIS ST, 77002"
      },
      {
          "city_key": "HOU",
          "incident_code": "057361822",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23H",
          "incident_offense_description": "All Other Larceny",
          "incident_offense_detail_description": "All Other Larceny at 32XX 3299, TRUXILLO, 77004",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other larceny",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7257,
          "incident_longitude": -95.3613,
          "incident_address": "32XX 3299, TRUXILLO, 77004"
      },
      {
          "city_key": "HOU",
          "incident_code": "057353722",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 76XX 7699 ELM ST, 77023",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7217,
          "incident_longitude": -95.2918,
          "incident_address": "76XX 7699 ELM ST, 77023"
      },
      {
          "city_key": "HOU",
          "incident_code": "057358822",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Robbery",
          "incident_offense_code": "120",
          "incident_offense_description": "Robbery",
          "incident_offense_detail_description": "Robbery at 77XX 7799 CORPORATE DR, 77036",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Robbery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6954,
          "incident_longitude": -95.5525,
          "incident_address": "77XX 7799 CORPORATE DR, 77036"
      },
      {
          "city_key": "HOU",
          "incident_code": "057359922",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23G",
          "incident_offense_description": "Theft of Motor Vehicle Parts or Accessories",
          "incident_offense_detail_description": "Theft of Motor Vehicle Parts or Accessories at 109XX 10999 GULF FWY, 77034",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft of motor vehicle parts or accessory",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6377,
          "incident_longitude": -95.2409,
          "incident_address": "109XX 10999 GULF FWY, 77034"
      },
      {
          "city_key": "HOU",
          "incident_code": "057360722",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 61XX 6199 WILLOWBEND BLVD, 77096",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6667,
          "incident_longitude": -95.5014,
          "incident_address": "61XX 6199 WILLOWBEND BLVD, 77096"
      },
      {
          "city_key": "HOU",
          "incident_code": "057357822",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Trespass of Real Property",
          "incident_offense_code": "90J",
          "incident_offense_description": "Trespass of Real Property",
          "incident_offense_detail_description": "Trespass of Real Property at 24XX 2499 BRAZOS ST, 77006",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Trespass of real property",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7491,
          "incident_longitude": -95.3777,
          "incident_address": "24XX 2499 BRAZOS ST, 77006"
      },
      {
          "city_key": "HOU",
          "incident_code": "057340122",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 63XX 6399 WILL CLAYTON PKWY, 77338",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.9848,
          "incident_longitude": -95.3072,
          "incident_address": "63XX 6399 WILL CLAYTON PKWY, 77338"
      },
      {
          "city_key": "HOU",
          "incident_code": "057349722",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 58XX 5899 SOUTHINGTON ST, 77033",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6806,
          "incident_longitude": -95.3351,
          "incident_address": "58XX 5899 SOUTHINGTON ST, 77033"
      },
      {
          "city_key": "HOU",
          "incident_code": "057353522",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 29XX 2999 WASHINGTON AVE, 77007",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7688,
          "incident_longitude": -95.3899,
          "incident_address": "29XX 2999 WASHINGTON AVE, 77007"
      },
      {
          "city_key": "HOU",
          "incident_code": "057349222",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Drug/Narcotic Offenses",
          "incident_offense_code": "35A",
          "incident_offense_description": "Drug/Narcotic Violations",
          "incident_offense_detail_description": "Drug/Narcotic Violations at 43XX 4399 S LOOP, 77051",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Drug, narcotic violations",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6797,
          "incident_longitude": -95.356,
          "incident_address": "43XX 4399 S LOOP, 77051"
      },
      {
          "city_key": "HOU",
          "incident_code": "057349322",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Counterfeiting/Forgery",
          "incident_offense_code": "250",
          "incident_offense_description": "Counterfeiting/Forgery",
          "incident_offense_detail_description": "Counterfeiting/Forgery at 58XX 5899 SIDNEY ST, 77021",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Counterfeiting, forgery",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7026,
          "incident_longitude": -95.3516,
          "incident_address": "58XX 5899 SIDNEY ST, 77021"
      },
      {
          "city_key": "HOU",
          "incident_code": "057349022",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "All Other Offenses",
          "incident_offense_code": "90Z",
          "incident_offense_description": "All Other Offenses",
          "incident_offense_detail_description": "All Other Offenses at 24XX 2499 DUNLAVY ST, 77019",
          "incident_offense_crime_against": "Person, Property, or Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "All other offenses",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7447,
          "incident_longitude": -95.4021,
          "incident_address": "24XX 2499 DUNLAVY ST, 77019"
      },
      {
          "city_key": "HOU",
          "incident_code": "057463522",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Motor Vehicle Theft",
          "incident_offense_code": "240",
          "incident_offense_description": "Motor Vehicle Theft",
          "incident_offense_detail_description": "Motor Vehicle Theft at 77XX 7799 SAYLYNN LN, 77075",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Motor vehicle theft",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6178,
          "incident_longitude": -95.2835,
          "incident_address": "77XX 7799 SAYLYNN LN, 77075"
      },
      {
          "city_key": "HOU",
          "incident_code": "057403422",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23F",
          "incident_offense_description": "Theft From Motor Vehicle",
          "incident_offense_detail_description": "Theft From Motor Vehicle at 23XX 2399 PIERCE ST, 77003",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft from motor vehicle",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7423,
          "incident_longitude": -95.3595,
          "incident_address": "23XX 2399 PIERCE ST, 77003"
      },
      {
          "city_key": "HOU",
          "incident_code": "057345422",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Driving Under the Influence",
          "incident_offense_code": "90D",
          "incident_offense_description": "Driving Under the Influence",
          "incident_offense_detail_description": "Driving Under the Influence at 121XX 12199 FLEMING DR, 77013",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Driving under the influence",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7757,
          "incident_longitude": -95.222,
          "incident_address": "121XX 12199 FLEMING DR, 77013"
      },
      {
          "city_key": "HOU",
          "incident_code": "057351622",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13C",
          "incident_offense_description": "Intimidation",
          "incident_offense_detail_description": "Intimidation at 120XX 12099 SABO RD, 77089",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Intimidation",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6051,
          "incident_longitude": -95.2166,
          "incident_address": "120XX 12099 SABO RD, 77089"
      },
      {
          "city_key": "HOU",
          "incident_code": "057398522",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23F",
          "incident_offense_description": "Theft From Motor Vehicle",
          "incident_offense_detail_description": "Theft From Motor Vehicle at 9XX 999 CROSBY ST, 77019",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Theft from motor vehicle",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7585,
          "incident_longitude": -95.3763,
          "incident_address": "9XX 999 CROSBY ST, 77019"
      },
      {
          "city_key": "HOU",
          "incident_code": "057463422",
          "incident_date": "2022-05-01T00:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 52XX 5299 LARKIN ST, 77007",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7792,
          "incident_longitude": -95.4137,
          "incident_address": "52XX 5299 LARKIN ST, 77007"
      },
      {
          "city_key": "HOU",
          "incident_code": "057337422",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13B",
          "incident_offense_description": "Simple Assault",
          "incident_offense_detail_description": "Simple Assault at 110XX 11099 LARKWOOD DR, 77096",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Simple assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6561,
          "incident_longitude": -95.5071,
          "incident_address": "110XX 11099 LARKWOOD DR, 77096"
      },
      {
          "city_key": "HOU",
          "incident_code": "057319222",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 16XX 1699 BLALOCK RD, 77080",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.7999,
          "incident_longitude": -95.5241,
          "incident_address": "16XX 1699 BLALOCK RD, 77080"
      },
      {
          "city_key": "HOU",
          "incident_code": "057339822",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Drug/Narcotic Offenses",
          "incident_offense_code": "35A",
          "incident_offense_description": "Drug/Narcotic Violations",
          "incident_offense_detail_description": "Drug/Narcotic Violations at 90XX 9099 FONDREN RD, 77074",
          "incident_offense_crime_against": "Society",
          "incident_offense_action": "C",
          "incident_source_original_type": "Drug, narcotic violations",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6803,
          "incident_longitude": -95.5089,
          "incident_address": "90XX 9099 FONDREN RD, 77074"
      },
      {
          "city_key": "RSG",
          "incident_code": "22-21840",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Larceny/Theft Offenses",
          "incident_offense_code": "23F",
          "incident_offense_description": "Theft From Motor Vehicle",
          "incident_offense_detail_description": "Theft From Motor Vehicle at 9XX COLE AVE, ROSENBERG, TX 77471",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "BURGLARY OF MOTOR VEHICLE",
          "incident_source_name": "ROSENBERG POLICE DEPARTMENT",
          "incident_latitude": 29.5617,
          "incident_longitude": -95.7845,
          "incident_address": "9XX COLE AVE, ROSENBERG, TX 77471"
      },
      {
          "city_key": "HOU",
          "incident_code": "057318522",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Destruction/Damage/Vandalism of Property",
          "incident_offense_code": "290",
          "incident_offense_description": "Destruction/Damage/Vandalism of Property",
          "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 81XX 8199 MARTIN LUTHER KING BLVD, 77033",
          "incident_offense_crime_against": "Property",
          "incident_offense_action": "C",
          "incident_source_original_type": "Destruction, damage, vandalism",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6664,
          "incident_longitude": -95.3373,
          "incident_address": "81XX 8199 MARTIN LUTHER KING BLVD, 77033"
      },
      {
          "city_key": "HOU",
          "incident_code": "057348722",
          "incident_date": "2022-04-30T23:00:00Z",
          "incident_offense": "Assault Offenses",
          "incident_offense_code": "13A",
          "incident_offense_description": "Aggravated Assault",
          "incident_offense_detail_description": "Aggravated Assault at 76XX 7699 BEECHNUT ST, 77074",
          "incident_offense_crime_against": "Person",
          "incident_offense_action": "C",
          "incident_source_original_type": "Aggravated Assault",
          "incident_source_name": "Houston Police Department",
          "incident_latitude": 29.6933,
          "incident_longitude": -95.5223,
          "incident_address": "76XX 7699 BEECHNUT ST, 77074"
      }
  ]
}

//mapQuest API key: HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg
L.mapquest.key = "HnpQ1prGRhwRunRNG2qZvQ4BykgnGXIg";
let map = new L.mapquest.map("map", {
  center: [32.715736, -117.161087],
  layers: L.mapquest.tileLayer("map"),
  zoom: 12,
});

//creates different icons and assigns them to a variable
const theftIcon = L.icon({
  iconUrl: "./assets/images/theft.png",
  iconSize: [20, 20],
});
const assaultIcon = L.icon({
  iconUrl: "./assets/images/assault.png",
  iconSize: [20, 20],
});
const burglaryIcon = L.icon({
  iconUrl: "./assets/images/burglary.png",
  iconSize: [20, 20],
});
const drunkIcon = L.icon({
  iconUrl: "./assets/images/drunk.png",
  iconSize: [20, 20],
});
const robberyIcon = L.icon({
  iconUrl: "./assets/images/robbery.png",
  iconSize: [20, 20],
});
const duiIcon = L.icon({
  iconUrl: "./assets/images/dui.png",
  iconSize: [20, 20],
});
const vandalismIcon = L.icon({
  iconUrl: "./assets/images/vandalism.png",
  iconSize: [20, 20],
});
const drugIcon = L.icon({
  iconUrl: "./assets/images/drug.png",
  iconSize: [20, 20],
})
const copIcon = L.icon({
  iconUrl: "./assets/images/cop.png",
  iconSize: [20, 20],
});

function initMap(centerCord, crimeArr) {
  
  map = new L.mapquest.map("map", { //creates a new map centered on the location that the user searched
    center: [centerCord.lat, centerCord.lng],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });
  
  checkboxchecker() //function that can filter the type of crimes the user wants to view
  
  crimeArr.incidents.forEach(crime => {
    if (crime.incident_offense.match(regex)) {
      let crimeIcon;
      if (/Theft/i.test(crime.incident_offense)) { //If the word "Theft" is in the crime description, the REgExp returns true and adds corresponding icon
        crimeIcon = theftIcon;
      }
      else if (/Assault/i.test(crime.incident_offense)) {
        crimeIcon = assaultIcon;
      }
      else if (/Burglary/i.test(crime.incident_offense)) {
        crimeIcon = burglaryIcon;
      }
      else if (/Drunkenness/i.test(crime.incident_offense)) {
        crimeIcon = drunkIcon;
      }
      else if (/Robbery/i.test(crime.incident_offense)) {
        crimeIcon = robberyIcon;
      }
      else if (/Driving/i.test(crime.incident_offense)) {
        crimeIcon = duiIcon;
      }
      else if (/Vandalism/i.test(crime.incident_offense)) {
        crimeIcon = vandalismIcon;
      }
      else if (/Drug/i.test(crime.incident_offense)) {
        crimeIcon = drugIcon;
      }
      else {
        crimeIcon = copIcon;
      }
      L.marker([crime.incident_latitude, crime.incident_longitude], { icon: crimeIcon }).bindTooltip(crime.incident_offense_detail_description).addTo(map);
    } //adds a custom marker, depending on the type of crime, at the location of the crime to the map  
  });
}

//store the city the user searches into local
let searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory")) || [];
searchBtnEl.addEventListener("click", startSearch); //when search icon gets clicked get clicked,
searchInputEl.addEventListener('keyup', checkEnter) //when user presses enter key
//Begins search when user clicks search icon
function startSearch() {
  searchWrap.classList.remove('active'); //hides the search history drop-down
  let inputText = searchInputEl.value.toLowerCase().split(" "); 
  for (let i = 0; i < inputText.length; i++) { //this turns the users entered text into title case
    inputText[i] = inputText[i].charAt(0).toUpperCase() + inputText[i].slice(1);
  }
  let city = inputText.join(" ");
  //OpenWeatherMap API for getting lat and lng key: ce8a9858dadfcfb05f86b5d9eedb659d
  //link to geocoding API with the city value that was chosen above as a parameter
  let locationRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city ? city : "San Diego"}&limit=1&appid=ce8a9858dadfcfb05f86b5d9eedb659d`;
  searchInputEl.value = ""; //clears text in text area
  getGeoCord(locationRequestUrl);
}

//take the city that the user searches and obtains the latitude and longitude of that city
function getGeoCord(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if(data.length == 0) {
        return
      }
      else {
        map.remove(); //removes the map (new map gets added in initMap()), we do this to remove all of the markers from the previous search
        let cityName = data[0].name; //gets the first city returned in search from API
        if (searchHistoryArr.indexOf(cityName) < 0 && data.length > 0) {
          //this makes sure there are no repeated citys in search history
          searchHistoryArr.push(cityName);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArr));
        }
        //gets the latitude and longitude of the city returned by API
        let geoCord = {
          lat: data[0].lat,
          lng: data[0].lon,
        };
        initMap(geoCord, crimeDetails);
        //CrimeDataAPICall(geoCord)
    }

    });
}

// function CrimeDataAPICall(latlong) {
//   // Crime Data API key: xO6cRTOnFe8kchDeQaXr32fi6yLc1Z8M5O0UOZ7h We're only limited to 100 calls on this key
//   const datetime_ini = "2020-01-01 00:00:00"; // yyyy-MM-dd'T'HH: mm: ss.SSS'Z or YYYY-MM-DD HH:mm:ss
//   let datetime_end = moment().format("YYYY-MM-DD HH:mm:ss"); //Gets current date to search the crime API
//   radius = 20; //Search radius in miles
//   var request = new XMLHttpRequest();
//   request.open("GET", "https://api.crimeometer.com/v1/incidents/raw-data?lat=" + latlong.lat +"&lon=" +latlong.lng +"&distance=" +radius +"mi&datetime_ini=" +datetime_ini +"&datetime_end=" + datetime_end +"&page=1"
//   ); //API call setup 
//   request.setRequestHeader("Content-Type", "object"); //Setting header to return an object
//   request.setRequestHeader("x-api-key","xO6cRTOnFe8kchDeQaXr32fi6yLc1Z8M5O0UOZ7h"); //Setting header to send API key

//   request.onreadystatechange = function () { //Checks for a response 
//     if (this.readyState === 4) { //If the response is succsessful add crime data to crimedetails array
//       crimeDetails = JSON.parse(this.responseText);
//       initMap(latlong, crimeDetails); //passes crime data and latitude to the initmap function 
//     }
//   };
//   request.send(); // Sends the API request
// }

var regex = "" //Empty string that will contain the search filters for crimes
function checkboxchecker(){ 
  regex = "" //Reset for filter on every search 
  let wordmatch = "" //local variable for search filter
  if (document.getElementById("destruction").checked){ // checks if the checkbox for "destruction of property" is checked and adds that search filter to wordmatch. Repeated for each if statement.
    wordmatch+="destruction|"
  }
  if (document.getElementById("robbery").checked){ 
    wordmatch+="robbery|"
  }
  if (document.getElementById("dui").checked){
    wordmatch+="dui|influence|"
  }
  if (document.getElementById("drunk").checked){
    wordmatch+="drunk|"
  }
  if (document.getElementById("burglary").checked){
    wordmatch+="burglary|"
  }
  if (document.getElementById("assault").checked){
    wordmatch+="assault|"
  }
  if (document.getElementById("larceny").checked){
    wordmatch+="larceny|"
  }
  if (document.getElementById("drugs").checked){
    wordmatch+="drug|narcotic|"
  }
  wordmatch = wordmatch.substring(0, wordmatch.length - 1) //removes the last " | " from the wordmatch variable
  regex = new RegExp(wordmatch, 'i') //rewrites regex variable into a regular expression constructor using wordmatch as the filter list. 'i' denotes case insensitivity filter. 
}

searchInputEl.onkeyup = (e) => {  //every time a key gets released while typing in search bar
  let userData = e.target.value; //value of key that got released
  let emptyArr = [];
  if (userData) {
    emptyArr = searchHistoryArr.filter((data) => { //if the value the user is entering matches a value in our searchHistoryArr, add to empty arr
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArr = emptyArr.map((data) => { //adds each match to a list element 
      return data = `<li>${data}</li>`;
    });
    searchWrap.classList.add('active');  
    showSuggestions(emptyArr);
    let allSugg = suggestionBox.querySelectorAll('li'); //gives each recommendation event listener
    for (let i=0; i<allSugg.length; i++) {
      allSugg[i].setAttribute('onclick', "select(this)");
    }
  }
  else {
    searchWrap.classList.remove('active');
  }
}

function select(element) { //when user clicks on any of the search recommendations
  searchInputEl.value = element.textContent; //autofills the search bar with the name of city that the user clicked on
  searchWrap.classList.remove('active'); //removes search recommendations from screen 
  startSearch();
}

function showSuggestions(list) { //makes the search suggestion drop down appear on UI
  let listData;
  if (!list.length) { //if no matches are found, the value of the search recommendation is equal to what the user is actively typing 
    listData = `<li>${searchInputEl.value}</li>`;
  }
  else { 
    listData = list.join(''); //if a match is found, the recommended city(s) is shown
  }
  suggestionBox.innerHTML = listData; //adds the list to html
}

function checkEnter(e) { //when user is typing in search bar, if they hit the enter key the search will execute 
  if (e.key === "Enter") {
    startSearch()
  }
  else {
    return;
  }
}