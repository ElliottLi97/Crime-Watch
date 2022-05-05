const searchWrap = document.querySelector('.searchBarBtn')
const searchInputEl = document.querySelector("#search");
const searchBtnEl = document.querySelector("#searchBtn");
const suggestionBox = document.querySelector('#searchHistory')
const mapEl = document.querySelector("#map");



var crimeDetails = { //hardcoded info in case the crime API key expires 
    "total_incidents": 173846,
    "total_pages": 1739,
    "incidents": [
        {
            "city_key": "SAN",
            "incident_code": "180898529",
            "incident_date": "2022-04-19T23:49:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK I ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6281244,
            "incident_longitude": -117.0855693,
            "incident_address": "500 BLOCK I ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180898344",
            "incident_date": "2022-04-19T10:45:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6309335,
            "incident_longitude": -117.0894611,
            "incident_address": "500 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180898335",
            "incident_date": "2022-04-19T09:31:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6341139,
            "incident_longitude": -117.091077,
            "incident_address": "400 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180898325",
            "incident_date": "2022-04-19T08:14:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1100 BLOCK FOURTH AV",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6124001,
            "incident_longitude": -117.0735292,
            "incident_address": "1100 BLOCK FOURTH AV"
        },
        {
            "city_key": "SAN",
            "incident_code": "180898297",
            "incident_date": "2022-04-19T05:33:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK GUAVA AV",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6321092,
            "incident_longitude": -117.0819121,
            "incident_address": "500 BLOCK GUAVA AV"
        },
        {
            "city_key": "SAN",
            "incident_code": "180898285",
            "incident_date": "2022-04-19T00:40:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 300 BLOCK F ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6408972,
            "incident_longitude": -117.080913,
            "incident_address": "300 BLOCK F ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180853167",
            "incident_date": "2022-04-18T16:49:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 600 BLOCK H ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6304235,
            "incident_longitude": -117.0910118,
            "incident_address": "600 BLOCK H ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180853038",
            "incident_date": "2022-04-17T21:45:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6309335,
            "incident_longitude": -117.0894611,
            "incident_address": "500 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180853030",
            "incident_date": "2022-04-17T18:18:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1000 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6136454,
            "incident_longitude": -117.0827928,
            "incident_address": "1000 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180797739",
            "incident_date": "2022-04-17T07:12:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6341139,
            "incident_longitude": -117.091077,
            "incident_address": "400 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180775231",
            "incident_date": "2022-04-16T14:52:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK F ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6400586,
            "incident_longitude": -117.0839476,
            "incident_address": "400 BLOCK F ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180775213",
            "incident_date": "2022-04-16T14:03:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6309335,
            "incident_longitude": -117.0894611,
            "incident_address": "500 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180905416",
            "incident_date": "2022-04-16T00:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23C",
            "incident_offense_description": "Shoplifting",
            "incident_offense_detail_description": "Shoplifting at 500 BLOCK OF MARKETPLACE BOULEVARD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.701124,
            "incident_longitude": -117.101869,
            "incident_address": "500 BLOCK OF MARKETPLACE BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180737999",
            "incident_date": "2022-04-15T18:09:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1800 BLOCK MAIN CT",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.5949313,
            "incident_longitude": -117.0385289,
            "incident_address": "1800 BLOCK MAIN CT"
        },
        {
            "city_key": "SAN",
            "incident_code": "180737889",
            "incident_date": "2022-04-15T14:06:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 300 BLOCK H ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6337385,
            "incident_longitude": -117.0791878,
            "incident_address": "300 BLOCK H ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180737803",
            "incident_date": "2022-04-15T11:49:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK FIFTH AV",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6433032,
            "incident_longitude": -117.0898277,
            "incident_address": "400 BLOCK FIFTH AV"
        },
        {
            "city_key": "SAN",
            "incident_code": "180702867",
            "incident_date": "2022-04-14T16:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1200 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6066071,
            "incident_longitude": -117.0801723,
            "incident_address": "1200 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180737696",
            "incident_date": "2022-04-14T12:23:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1000 BLOCK THIRD AV",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6328131,
            "incident_longitude": -117.0767167,
            "incident_address": "1000 BLOCK THIRD AV"
        },
        {
            "city_key": "SAN",
            "incident_code": "180702824",
            "incident_date": "2022-04-14T07:22:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 700 BLOCK PLAZA CT",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6370235,
            "incident_longitude": -117.0301731,
            "incident_address": "700 BLOCK PLAZA CT"
        },
        {
            "city_key": "SAN",
            "incident_code": "180702815",
            "incident_date": "2022-04-14T02:51:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1000 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6136454,
            "incident_longitude": -117.0827928,
            "incident_address": "1000 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180653032",
            "incident_date": "2022-04-13T23:17:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK TELEGRAPH CANYON RD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6283089,
            "incident_longitude": -117.0462874,
            "incident_address": "400 BLOCK TELEGRAPH CANYON RD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180702808",
            "incident_date": "2022-04-13T16:30:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6309335,
            "incident_longitude": -117.0894611,
            "incident_address": "500 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180702807",
            "incident_date": "2022-04-13T16:29:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 500 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6309335,
            "incident_longitude": -117.0894611,
            "incident_address": "500 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180652849",
            "incident_date": "2022-04-13T14:33:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 300 BLOCK H ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6337385,
            "incident_longitude": -117.0791878,
            "incident_address": "300 BLOCK H ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180652799",
            "incident_date": "2022-04-13T11:24:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1200 BLOCK BROADWAY",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6066071,
            "incident_longitude": -117.0801723,
            "incident_address": "1200 BLOCK BROADWAY"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635025",
            "incident_date": "2022-04-13T00:17:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 9000 BLOCK CLAIREMONT MESA BOULEVARD",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8315132,
            "incident_longitude": -117.1340826,
            "incident_address": "9000 BLOCK CLAIREMONT MESA BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635100",
            "incident_date": "2022-04-13T00:05:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 9200 BLOCK AMYS STREET",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7204633,
            "incident_longitude": -117.0013555,
            "incident_address": "9200 BLOCK AMYS STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180905398",
            "incident_date": "2022-04-13T00:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23C",
            "incident_offense_description": "Shoplifting",
            "incident_offense_detail_description": "Shoplifting at 400 BLOCK OF MARKETPLACE BOULEVARD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.702076,
            "incident_longitude": -117.10141,
            "incident_address": "400 BLOCK OF MARKETPLACE BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636395",
            "incident_date": "2022-04-12T23:20:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 200 BLOCK ENCINITAS AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7056021,
            "incident_longitude": -117.0222119,
            "incident_address": "200 BLOCK ENCINITAS AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635013",
            "incident_date": "2022-04-12T23:20:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 1900 BLOCK CHATSWORTH BOULEVARD",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7353251,
            "incident_longitude": -117.2322991,
            "incident_address": "1900 BLOCK CHATSWORTH BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636399",
            "incident_date": "2022-04-12T21:51:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 14TH STREET & IMPERIAL AVENUE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.70628,
            "incident_longitude": -117.151868,
            "incident_address": "14TH STREET & IMPERIAL AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636854",
            "incident_date": "2022-04-12T21:12:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 14100 BLOCK TIERRA BONITA ROAD",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9678978,
            "incident_longitude": -117.0274499,
            "incident_address": "14100 BLOCK TIERRA BONITA ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636400",
            "incident_date": "2022-04-12T21:10:00Z",
            "incident_offense": "Robbery",
            "incident_offense_code": "120",
            "incident_offense_description": "Robbery",
            "incident_offense_detail_description": "Robbery at 8500 BLOCK COSTA VERDE BOULEVARD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Robbery",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8672542,
            "incident_longitude": -117.2165796,
            "incident_address": "8500 BLOCK COSTA VERDE BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636391",
            "incident_date": "2022-04-12T20:46:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 800 BLOCK 25TH STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7137353,
            "incident_longitude": -117.1402922,
            "incident_address": "800 BLOCK 25TH STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636991",
            "incident_date": "2022-04-12T20:45:00Z",
            "incident_offense": "Burglary/Breaking & Entering",
            "incident_offense_code": "220",
            "incident_offense_description": "Burglary/Breaking & Entering",
            "incident_offense_detail_description": "Burglary/Breaking & Entering at 400 BLOCK EL SUENO",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Burglary",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9919723,
            "incident_longitude": -117.2655718,
            "incident_address": "400 BLOCK EL SUENO"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636388",
            "incident_date": "2022-04-12T20:30:00Z",
            "incident_offense": "Robbery",
            "incident_offense_code": "120",
            "incident_offense_description": "Robbery",
            "incident_offense_detail_description": "Robbery at 1200 BLOCK GARNET AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Robbery",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7983457,
            "incident_longitude": -117.2480751,
            "incident_address": "1200 BLOCK GARNET AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636844",
            "incident_date": "2022-04-12T19:15:00Z",
            "incident_offense": "Burglary/Breaking & Entering",
            "incident_offense_code": "220",
            "incident_offense_description": "Burglary/Breaking & Entering",
            "incident_offense_detail_description": "Burglary/Breaking & Entering at 200 BLOCK OCEAN VIEW AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Burglary",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9448738,
            "incident_longitude": -117.2585749,
            "incident_address": "200 BLOCK OCEAN VIEW AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636394",
            "incident_date": "2022-04-12T19:06:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 3700 BLOCK 30TH STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7452858,
            "incident_longitude": -117.1301057,
            "incident_address": "3700 BLOCK 30TH STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180591280",
            "incident_date": "2022-04-12T17:55:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 700 BLOCK H ST",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6297376,
            "incident_longitude": -117.0934682,
            "incident_address": "700 BLOCK H ST"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635295",
            "incident_date": "2022-04-12T17:55:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 5000 BLOCK 73RD STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7699163,
            "incident_longitude": -117.0404538,
            "incident_address": "5000 BLOCK 73RD STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635302",
            "incident_date": "2022-04-12T17:40:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 1700 BLOCK GARNET AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8003472,
            "incident_longitude": -117.2383995,
            "incident_address": "1700 BLOCK GARNET AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636390",
            "incident_date": "2022-04-12T17:28:00Z",
            "incident_offense": "Sex Offenses",
            "incident_offense_code": "N/A",
            "incident_offense_description": "Sex Offense/All Other",
            "incident_offense_detail_description": "Sex Offense/All Other at 1900 BLOCK 47TH STREET",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7254008,
            "incident_longitude": -117.0935619,
            "incident_address": "1900 BLOCK 47TH STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634096",
            "incident_date": "2022-04-12T17:24:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 2800 BLOCK JACKSON STREET",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7576729,
            "incident_longitude": -117.1958088,
            "incident_address": "2800 BLOCK JACKSON STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636384",
            "incident_date": "2022-04-12T17:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 6300 BLOCK RANCHO MISSION ROAD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7857344,
            "incident_longitude": -117.1103852,
            "incident_address": "6300 BLOCK RANCHO MISSION ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636378",
            "incident_date": "2022-04-12T17:00:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at CARDINAL ROAD & GENESEE AVENUE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.792268,
            "incident_longitude": -117.157093,
            "incident_address": "CARDINAL ROAD & GENESEE AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636547",
            "incident_date": "2022-04-12T16:07:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 2900 BLOCK ALTA VIEW DRIVE",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.6758592,
            "incident_longitude": -117.0401787,
            "incident_address": "2900 BLOCK ALTA VIEW DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636387",
            "incident_date": "2022-04-12T15:28:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at GENESEE AVENUE & MOUNT ALIFAN DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.81726,
            "incident_longitude": -117.180829,
            "incident_address": "GENESEE AVENUE & MOUNT ALIFAN DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635297",
            "incident_date": "2022-04-12T15:10:00Z",
            "incident_offense": "Motor Vehicle Theft",
            "incident_offense_code": "240",
            "incident_offense_description": "Motor Vehicle Theft",
            "incident_offense_detail_description": "Motor Vehicle Theft at 4400 BLOCK QUINCE STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7368873,
            "incident_longitude": -117.0981669,
            "incident_address": "4400 BLOCK QUINCE STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635293",
            "incident_date": "2022-04-12T15:10:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 8100 BLOCK MIRA MESA BOULEVARD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9125941,
            "incident_longitude": -117.1488941,
            "incident_address": "8100 BLOCK MIRA MESA BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636493",
            "incident_date": "2022-04-12T15:07:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 14TH STREET & IMPERIAL AVENUE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.70628,
            "incident_longitude": -117.151868,
            "incident_address": "14TH STREET & IMPERIAL AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634091",
            "incident_date": "2022-04-12T14:30:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at JAMACHA ROAD & OFF RAMP",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.714951,
            "incident_longitude": -117.006756,
            "incident_address": "JAMACHA ROAD & OFF RAMP"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636490",
            "incident_date": "2022-04-12T14:20:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 03RD AVENUE & ASH STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.719899,
            "incident_longitude": -117.162031,
            "incident_address": "03RD AVENUE & ASH STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636373",
            "incident_date": "2022-04-12T14:14:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 3800 BLOCK HELIX STREET",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7480454,
            "incident_longitude": -116.9995625,
            "incident_address": "3800 BLOCK HELIX STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636397",
            "incident_date": "2022-04-12T13:30:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 2300 BLOCK ULRIC STREET",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7856052,
            "incident_longitude": -117.1688907,
            "incident_address": "2300 BLOCK ULRIC STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636977",
            "incident_date": "2022-04-12T13:14:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 9800 BLOCK PROSPECT AVENUE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8314193,
            "incident_longitude": -116.9836789,
            "incident_address": "9800 BLOCK PROSPECT AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636485",
            "incident_date": "2022-04-12T13:00:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 1000 BLOCK IMPERIAL AVENUE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7062649,
            "incident_longitude": -117.155515,
            "incident_address": "1000 BLOCK IMPERIAL AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636377",
            "incident_date": "2022-04-12T12:39:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 25TH STREET & IMPERIAL AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.706344,
            "incident_longitude": -117.140208,
            "incident_address": "25TH STREET & IMPERIAL AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636450",
            "incident_date": "2022-04-12T10:26:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 2600 BLOCK EAST MISSION BAY DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7806251,
            "incident_longitude": -117.2092438,
            "incident_address": "2600 BLOCK EAST MISSION BAY DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634569",
            "incident_date": "2022-04-12T10:11:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 1200 BLOCK IMPERIAL AVENUE",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7062997,
            "incident_longitude": -117.1533977,
            "incident_address": "1200 BLOCK IMPERIAL AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634566",
            "incident_date": "2022-04-12T10:00:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 1100 BLOCK UNION STREET",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.71679,
            "incident_longitude": -117.1656268,
            "incident_address": "1100 BLOCK UNION STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634578",
            "incident_date": "2022-04-12T09:50:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 200 W BLOCK B STREET",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7177827,
            "incident_longitude": -117.164741,
            "incident_address": "200 W BLOCK B STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636448",
            "incident_date": "2022-04-12T09:44:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 5200 BLOCK GAINES STREET",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7641348,
            "incident_longitude": -117.1954608,
            "incident_address": "5200 BLOCK GAINES STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636492",
            "incident_date": "2022-04-12T09:43:00Z",
            "incident_offense": "Burglary/Breaking & Entering",
            "incident_offense_code": "220",
            "incident_offense_description": "Burglary/Breaking & Entering",
            "incident_offense_detail_description": "Burglary/Breaking & Entering at 3300 BLOCK MERIDIAN AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Burglary",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.74043,
            "incident_longitude": -117.0576004,
            "incident_address": "3300 BLOCK MERIDIAN AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636480",
            "incident_date": "2022-04-12T09:30:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 400 BLOCK CUYAMACA AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.702117,
            "incident_longitude": -117.107031,
            "incident_address": "400 BLOCK CUYAMACA AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636468",
            "incident_date": "2022-04-12T09:22:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 2200 BLOCK EAST MISSION BAY DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7791932,
            "incident_longitude": -117.2096207,
            "incident_address": "2200 BLOCK EAST MISSION BAY DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636479",
            "incident_date": "2022-04-12T09:00:00Z",
            "incident_offense": "Fraud Offenses",
            "incident_offense_code": "26A",
            "incident_offense_description": "False Pretenses/Swindle/Confidence Game",
            "incident_offense_detail_description": "False Pretenses/Swindle/Confidence Game at 7500 BLOCK GIRARD AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8406738,
            "incident_longitude": -117.2725686,
            "incident_address": "7500 BLOCK GIRARD AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636446",
            "incident_date": "2022-04-12T08:45:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 3300 BLOCK MIDWAY DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7501971,
            "incident_longitude": -117.210928,
            "incident_address": "3300 BLOCK MIDWAY DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634476",
            "incident_date": "2022-04-12T08:01:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 300 BLOCK PARK BOULEVARD",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7079905,
            "incident_longitude": -117.1542853,
            "incident_address": "300 BLOCK PARK BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636451",
            "incident_date": "2022-04-12T07:20:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 500 BLOCK 14TH STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.710473,
            "incident_longitude": -117.1519208,
            "incident_address": "500 BLOCK 14TH STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634589",
            "incident_date": "2022-04-12T06:06:00Z",
            "incident_offense": "Driving Under the Influence",
            "incident_offense_code": "90D",
            "incident_offense_description": "Driving Under the Influence",
            "incident_offense_detail_description": "Driving Under the Influence at 10800 BLOCK CARMEL COUNTRY ROAD",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9448137,
            "incident_longitude": -117.2161342,
            "incident_address": "10800 BLOCK CARMEL COUNTRY ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636489",
            "incident_date": "2022-04-12T04:30:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at 7400 BLOCK MISSION GORGE ROAD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.807566,
            "incident_longitude": -117.078448,
            "incident_address": "7400 BLOCK MISSION GORGE ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636433",
            "incident_date": "2022-04-12T03:55:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 2700 BLOCK C STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7168859,
            "incident_longitude": -117.1360141,
            "incident_address": "2700 BLOCK C STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635935",
            "incident_date": "2022-04-12T03:16:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 8300 BLOCK PARKWAY DRIVE",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7788338,
            "incident_longitude": -117.0180583,
            "incident_address": "8300 BLOCK PARKWAY DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636431",
            "incident_date": "2022-04-12T02:28:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23H",
            "incident_offense_description": "All Other Larceny",
            "incident_offense_detail_description": "All Other Larceny at HANCOCK STREET & KURTZ STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.758046,
            "incident_longitude": -117.214052,
            "incident_address": "HANCOCK STREET & KURTZ STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635291",
            "incident_date": "2022-04-12T01:30:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 2600 BLOCK GRAND AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8019954,
            "incident_longitude": -117.2217867,
            "incident_address": "2600 BLOCK GRAND AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636435",
            "incident_date": "2022-04-12T01:00:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 3300 BLOCK NEOSHO PLACE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.8317533,
            "incident_longitude": -117.2134334,
            "incident_address": "3300 BLOCK NEOSHO PLACE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635294",
            "incident_date": "2022-04-12T01:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 10600 BLOCK BROOKHOLLOW COURT",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.910606,
            "incident_longitude": -117.1617021,
            "incident_address": "10600 BLOCK BROOKHOLLOW COURT"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636449",
            "incident_date": "2022-04-12T00:30:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at MISSION BOULEVARD & SANTA RITA PLACE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.79,
            "incident_longitude": -117.253466,
            "incident_address": "MISSION BOULEVARD & SANTA RITA PLACE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636393",
            "incident_date": "2022-04-12T00:05:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 10900 BLOCK PACIFIC POINT PLACE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.97547,
            "incident_longitude": -117.090531,
            "incident_address": "10900 BLOCK PACIFIC POINT PLACE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636477",
            "incident_date": "2022-04-12T00:02:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 2000 BLOCK JULIAN AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7019519,
            "incident_longitude": -117.1410368,
            "incident_address": "2000 BLOCK JULIAN AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636430",
            "incident_date": "2022-04-12T00:01:00Z",
            "incident_offense": "Sex Offenses",
            "incident_offense_code": "N/A",
            "incident_offense_description": "Sex Offense/All Other",
            "incident_offense_detail_description": "Sex Offense/All Other at 4000 BLOCK VALETA STREET",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7471105,
            "incident_longitude": -117.2284906,
            "incident_address": "4000 BLOCK VALETA STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635299",
            "incident_date": "2022-04-12T00:01:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 10200 BLOCK MAYA LINDA ROAD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.903473,
            "incident_longitude": -117.1179727,
            "incident_address": "10200 BLOCK MAYA LINDA ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635301",
            "incident_date": "2022-04-12T00:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 6300 BLOCK INMAN STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7899794,
            "incident_longitude": -117.1815778,
            "incident_address": "6300 BLOCK INMAN STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635298",
            "incident_date": "2022-04-12T00:00:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 12000 BLOCK ALTA CARMEL COURT",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9927226,
            "incident_longitude": -117.0712115,
            "incident_address": "12000 BLOCK ALTA CARMEL COURT"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636426",
            "incident_date": "2022-04-11T23:50:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 00 BLOCK TONY GWYNN DRIVE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7067798,
            "incident_longitude": -117.1582473,
            "incident_address": "00 BLOCK TONY GWYNN DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636410",
            "incident_date": "2022-04-11T23:42:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 12500 BLOCK HEATHERTON COURT",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9452146,
            "incident_longitude": -117.0882437,
            "incident_address": "12500 BLOCK HEATHERTON COURT"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635085",
            "incident_date": "2022-04-11T23:33:00Z",
            "incident_offense": "Motor Vehicle Theft",
            "incident_offense_code": "240",
            "incident_offense_description": "Motor Vehicle Theft",
            "incident_offense_detail_description": "Motor Vehicle Theft at 2800 BLOCK 04TH AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7345263,
            "incident_longitude": -117.1612466,
            "incident_address": "2800 BLOCK 04TH AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636845",
            "incident_date": "2022-04-11T23:30:00Z",
            "incident_offense": "Robbery",
            "incident_offense_code": "120",
            "incident_offense_description": "Robbery",
            "incident_offense_detail_description": "Robbery at 800 BLOCK PALM AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Robbery",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.584378,
            "incident_longitude": -117.11554,
            "incident_address": "800 BLOCK PALM AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636990",
            "incident_date": "2022-04-11T23:10:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 14600 BLOCK TIERRA BONITA ROAD",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9781854,
            "incident_longitude": -117.0276133,
            "incident_address": "14600 BLOCK TIERRA BONITA ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636434",
            "incident_date": "2022-04-11T23:03:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 6600 BLOCK ALVARADO ROAD",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7776594,
            "incident_longitude": -117.0587498,
            "incident_address": "6600 BLOCK ALVARADO ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636439",
            "incident_date": "2022-04-11T23:00:00Z",
            "incident_offense": "Larceny/Theft Offenses",
            "incident_offense_code": "23F",
            "incident_offense_description": "Theft From Motor Vehicle",
            "incident_offense_detail_description": "Theft From Motor Vehicle at 5000 BLOCK CAMINO DEL ARROYO",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.766437,
            "incident_longitude": -117.158586,
            "incident_address": "5000 BLOCK CAMINO DEL ARROYO"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635109",
            "incident_date": "2022-04-11T22:50:00Z",
            "incident_offense": "Motor Vehicle Theft",
            "incident_offense_code": "240",
            "incident_offense_description": "Motor Vehicle Theft",
            "incident_offense_detail_description": "Motor Vehicle Theft at 4500 BLOCK WINONA AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7590239,
            "incident_longitude": -117.0879034,
            "incident_address": "4500 BLOCK WINONA AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636398",
            "incident_date": "2022-04-11T22:20:00Z",
            "incident_offense": "Sex Offenses",
            "incident_offense_code": "N/A",
            "incident_offense_description": "Sex Offense/All Other",
            "incident_offense_detail_description": "Sex Offense/All Other at 9300 BLOCK BABAUTA ROAD",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9356538,
            "incident_longitude": -117.1258856,
            "incident_address": "9300 BLOCK BABAUTA ROAD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180634564",
            "incident_date": "2022-04-11T22:16:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 3000 BLOCK CLAIREMONT DRIVE",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7944677,
            "incident_longitude": -117.19424,
            "incident_address": "3000 BLOCK CLAIREMONT DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636427",
            "incident_date": "2022-04-11T22:07:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 3700 BLOCK WAWONA DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7360701,
            "incident_longitude": -117.2316598,
            "incident_address": "3700 BLOCK WAWONA DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636052",
            "incident_date": "2022-04-11T22:04:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 11600 BLOCK TREADWELL DRIVE",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.9287514,
            "incident_longitude": -117.0615203,
            "incident_address": "11600 BLOCK TREADWELL DRIVE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636383",
            "incident_date": "2022-04-11T22:00:00Z",
            "incident_offense": "Destruction/Damage/Vandalism of Property",
            "incident_offense_code": "290",
            "incident_offense_description": "Destruction/Damage/Vandalism of Property",
            "incident_offense_detail_description": "Destruction/Damage/Vandalism of Property at 4200 BLOCK WIGHTMAN STREET",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Vandalism",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7477947,
            "incident_longitude": -117.1044888,
            "incident_address": "4200 BLOCK WIGHTMAN STREET"
        },
        {
            "city_key": "SAN",
            "incident_code": "180635111",
            "incident_date": "2022-04-11T21:30:00Z",
            "incident_offense": "Motor Vehicle Theft",
            "incident_offense_code": "240",
            "incident_offense_description": "Motor Vehicle Theft",
            "incident_offense_detail_description": "Motor Vehicle Theft at 4200 BLOCK CHEROKEE AVENUE",
            "incident_offense_crime_against": "Property",
            "incident_offense_action": "C",
            "incident_source_original_type": "Theft",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7533009,
            "incident_longitude": -117.1147641,
            "incident_address": "4200 BLOCK CHEROKEE AVENUE"
        },
        {
            "city_key": "SAN",
            "incident_code": "180636429",
            "incident_date": "2022-04-11T21:22:00Z",
            "incident_offense": "Assault Offenses",
            "incident_offense_code": "13B",
            "incident_offense_description": "Simple Assault",
            "incident_offense_detail_description": "Simple Assault at 3100 BLOCK SPORTS ARENA BOULEVARD",
            "incident_offense_crime_against": "Person",
            "incident_offense_action": "C",
            "incident_source_original_type": "Assault",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7516783,
            "incident_longitude": -117.2054995,
            "incident_address": "3100 BLOCK SPORTS ARENA BOULEVARD"
        },
        {
            "city_key": "SAN",
            "incident_code": "180633886",
            "incident_date": "2022-04-11T20:40:00Z",
            "incident_offense": "Drug/Narcotic Offenses",
            "incident_offense_code": "35A",
            "incident_offense_description": "Drug/Narcotic Violations",
            "incident_offense_detail_description": "Drug/Narcotic Violations at 5100 BLOCK MISSION CENTER ROAD",
            "incident_offense_crime_against": "Society",
            "incident_offense_action": "C",
            "incident_source_original_type": "Arrest",
            "incident_source_name": "SanDiego_Police_Departments",
            "incident_latitude": 32.7706425,
            "incident_longitude": -117.1549176,
            "incident_address": "5100 BLOCK MISSION CENTER ROAD"
        }
    ]
};



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
  iconSize: [12, 20],
});
const assaultIcon = L.icon({
  iconUrl: "./assets/images/assault.png",
  iconSize: [12, 20],
});
const burglaryIcon = L.icon({
  iconUrl: "./assets/images/burglary.png",
  iconSize: [12, 20],
});
const drunkIcon = L.icon({
  iconUrl: "./assets/images/drunk.png",
  iconSize: [12, 20],
});
const robberyIcon = L.icon({
  iconUrl: "./assets/images/robbery.png",
  iconSize: [12, 20],
});
const duiIcon = L.icon({
  iconUrl: "./assets/images/dui.png",
  iconSize: [12, 20],
});
const vandalismIcon = L.icon({
  iconUrl: "./assets/images/vandalism.png",
  iconSize: [12, 20],
});
const copIcon = L.icon({
  iconUrl: "./assets/images/cop.png",
  iconSize: [12, 20],
});

L.marker([32.715736, -117.161087], { icon: copIcon }).addTo(map);
L.marker([32.8, -117.2], { icon: duiIcon }).addTo(map);
L.marker([32.6, -117.1], { icon: vandalismIcon }).addTo(map);
L.marker([32.9, -117], { icon: drunkIcon }).addTo(map);

function initMap(centerCord, crimeArr) {
  
  map = new L.mapquest.map("map", {
    center: [centerCord.lat, centerCord.lng],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });
  
  checkboxchecker()
  
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
      else {
        crimeIcon = copIcon;
      }
      //chain else if statements for all possible crimes
      L.marker([crime.incident_latitude, crime.incident_longitude], { icon: crimeIcon }).bindTooltip(crime.incident_offense_detail_description).addTo(map);
    }
  });
}

//store the city the user searches into local
let searchHistoryArr = JSON.parse(localStorage.getItem("searchHistory")) || [];
searchBtnEl.addEventListener("click", startSearch); //when blue search button get clicked,
searchInputEl.addEventListener('keyup', checkEnter)
//Begins are search when user clicks search icon
function startSearch() {
  
  searchWrap.classList.remove('active');
  let inputText = searchInputEl.value.toLowerCase().split(" "); //this turns the users entered text into title case
  for (let i = 0; i < inputText.length; i++) {
    inputText[i] = inputText[i].charAt(0).toUpperCase() + inputText[i].slice(1);
  }
  let city = inputText.join(" ");
  //OpenWeatherMap API for getting lat and lng key: ce8a9858dadfcfb05f86b5d9eedb659d
  //link to geocoding API with the city value that was chosen above as a parameter
  let locationRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city ? city : "San Diego"}&limit=1&appid=ce8a9858dadfcfb05f86b5d9eedb659d`;
  searchInputEl.value = ""; //clears text in text area
  getGeoCord(locationRequestUrl);
}

//take the most current city that the user searches and obtain the lat and long of city
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
        map.remove();
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
        //initMap(geoCord, crimeDetails);
        CrimeDataAPICall(geoCord)
    }

    });
}

function CrimeDataAPICall(latlong) {
  // Crime Data API key: gpuXbzy7VI8nN51pmvGzSPPYl1TeGQa16HiOiSn5 We're only limited to 100 calls on this key
  // var lat = "33.1434" //xx.yyyy
  // var lon = "-117.1661"
  // var distance = "5mi" // Xunits unit types: mi yd ft km m
  const datetime_ini = "2020-01-01 00:00:00"; // yyyy-MM-dd'T'HH: mm: ss.SSS'Z or YYYY-MM-DD HH:mm:ss
  let datetime_end = moment().format("YYYY-MM-DD HH:mm:ss");
  radius = 20; //hardcoded for now
  var request = new XMLHttpRequest();
  console.log(latlong.lat)
  console.log(latlong.lng)
  request.open("GET", "https://api.crimeometer.com/v1/incidents/raw-data?lat=" + latlong.lat +"&lon=" +latlong.lng +"&distance=" +radius +"mi&datetime_ini=" +datetime_ini +"&datetime_end=" + datetime_end +"&page=1"
  ); //Variable values
  // request.open('GET', 'https://api.crimeometer.com/v1/incidents/raw-data?lat=' + lat + '&lon=' + lon +
  // '&distance=' + distance + '&datetime_ini=' + datetime_ini + '&datetime_end=' + datetime_end + '&page=1'); //Hardcoded values for testing
  request.setRequestHeader("Content-Type", "object");
  request.setRequestHeader(
    "x-api-key",
    "xO6cRTOnFe8kchDeQaXr32fi6yLc1Z8M5O0UOZ7h"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
      console.log(JSON.parse(this.responseText));
      crimeDetails = JSON.parse(this.responseText);
      console.log(crimeDetails);
      console.log(
        "Crime Address",
        crimeDetails.incidents[0].incident_address,
        "Crime",
        crimeDetails.incidents[0].incident_offense,
        "Lat:",
        crimeDetails.incidents[0].incident_latitude,
        "Long",
        crimeDetails.incidents[0].incident_longitude
      );
      initMap(latlong, crimeDetails);
    }
  };
  request.send();
}

var regex = ""
function checkboxchecker(){
  regex = ""
  let wordmatch = ""
  if (document.getElementById("destruction").checked){
    console.log("dest checked")
    wordmatch+="destruction|"
  }
  if (document.getElementById("robbery").checked){
    console.log("checked")
    wordmatch+="robbery|"
  }
  if (document.getElementById("dui").checked){
    console.log("checked")
    wordmatch+="dui|"
  }
  if (document.getElementById("drunk").checked){
    console.log("checked")
    wordmatch+="drunk|"
  }
  if (document.getElementById("burglary").checked){
    console.log("checked")
    wordmatch+="burglary|"
  }
  if (document.getElementById("assault").checked){
    console.log("checked")
    wordmatch+="assault|"
  }
  if (document.getElementById("larceny").checked){
    console.log("checked")
    wordmatch+="larceny|"
  }
  wordmatch = wordmatch.substring(0, wordmatch.length - 1)
  regex = new RegExp(wordmatch, 'i')
}

searchInputEl.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArr = [];
  if (userData) {
    emptyArr = searchHistoryArr.filter((data) => {
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArr = emptyArr.map((data) => {
      return data = `<li>${data}</li>`;
    });
    searchWrap.classList.add('active');
    showSuggestions(emptyArr);
    let allSugg = suggestionBox.querySelectorAll('li');
    for (let i=0; i<allSugg.length; i++) {
      allSugg[i].setAttribute('onclick', "select(this)");
    }
  }
  else {
    searchWrap.classList.remove('active');
  }
}

function select(element) {
  searchInputEl.value = element.textContent;
  searchWrap.classList.remove('active');
  startSearch();
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    listData = `<li>${searchInputEl.value}`;
  }
  else {
    listData = list.join('');
  }
  suggestionBox.innerHTML = listData;
}

function checkEnter(e) {
  if (e.key === "Enter") {
    startSearch()
  }
  else {
    return;
  }
}
