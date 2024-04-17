# Housing Development Board (HDB) Rental Flat Selector

This interactive map visualises what key amenities, facilities and services are accessible from Housing Development Board (HDB) rental flats within fixed time-distances in Singapore. It is meant to empower low-income families in their rental flat application processes to decide where best in Singapore to live. 

The map can be accessed here: https://rental-flats.vercel.app/ 

## What is this project about? 

As a small and highly urbanised state, it is often said that nothing in Singapore is ever too far away. It takes only half an hour to drive from one end of the country to the other, and two hours by public transport. 

But quips like these ignore that distance affects time, and the lack of time is a challenge for Singapore’s poorest. There are always many places they have to frequent beyond work and home; going to the market for food, paying bills at the post office, depositing cash at the bank, sending the kids to school, or visiting the social service office for welfare services (Teo 2019, 81–82). Time shortage is exacerbated by distance when these amenities are far from their homes (Teo 2019, 26). 

Majority of Singapore’s poorest live in rental flats provided by the Housing Development Board (HDB) which are scattered across the island. This isochrone map interactive aims to understand time poverty by visualising what is accessible from rental flats within certain time-distance durations. It is inspired by data activism, and seeks to utilise data for “counter-hegemonic imaginaries [...] for emancipation purposes” (Chenou and Cepeda-Másmela 2019, 398).

## What is time poverty, and how does isochrones illustrate it?

Isochrones are a visual spatial representation of what is accessible from a certain location within a given time (Mapbox, n.d.). Essentially, it facilitates a visual understanding of the relationship between time and distance, and hence spatial time poverty. Time poverty is a phenomenon where an individual is time scarce when competing claims on their time constrain their choices significantly, leading to disempowerment and lack of control over discretionary time for rest (Carmichael et al. 2024, 344). It usually happens that most of their hours are taken up by ‘necessary time’ such as work, chores, and errands for essential needs (Ng 2023, 297; Carmichael et al. 2024, 344).

In this context, it is essential for low-income families that key amenities are easily accessible by walking or public transport in their neighbourhoods. The further and longer one has to travel to access these necessities, the less time they have. 

## What is the purpose of this map, what datasets are in it, and where are they from?

The primary purpose of this map is to empower low-income families by providing more information that will better facilitate their decision-making process on where to live. It seeks to replace the [web-based map tool](https://services2.hdb.gov.sg/webapp/AA11EMAP/AA11PMainPage) provided by the HDB that is meant to help low-income families reach a decision on which area of housing they should make an application to. 

The [current map](https://services2.hdb.gov.sg/webapp/AA11EMAP/AA11PMainPage) is an image of Singapore divided by urban planning regions, and one has to click further to get a list of addresses. None of the addresses are spatially visualised, or have further details on what is nearby. In contrast, another type of public housing, the Built-to-Order (BTO) flats are offered to most Singaporeans with [descriptive details](https://www.teoalida.com/singapore/hdb-brochures/BTO-2024-02/rail_garden_@_cck.pdf) on amenities and on future developments nearby.

This map hence visualises the following:

| Title                            | Category/Type             | Source                     | Link                                                                       | Date accessed | File Name                                                |
|----------------------------------|---------------------------|----------------------------|----------------------------------------------------------------------------|---------------|----------------------------------------------------------|
| HDB Rental Flats                 | Housing                   | Housing Development Board  | https://services2.hdb.gov.sg/webapp/AA11EMAP/AA11PMainPage | 3 April 2024  | rental_blocks_geocoded.csv                                                           |
| Post Offices                     | Banking and Payment Services | SingPost                  | https://www.singpost.com/list-of-post-offices               | 7 April 2024  | singapore_postoffices.csv                                                           |
| Bank Offices (DBS/POSB)          | Banking and Payment Services | DBS Bank                  | https://www.dbs.com.sg/index/locator.page?filter=PB | 7 April 2024  | singapore_banks.csv                                                            |
| Food Centres & Markets           | Food & Essentials         | National Environment Agency | https://beta.data.gov.sg/collections/1389/datasets/d_a57a245b3cf3ec76ad36d55393a16e97/view | 3 April 2024  | singapore_market_foodcentre.geojson                                                           |
| Supermarkets                     | Food & Essentials         | Singapore Food Agency     | https://beta.data.gov.sg/collections/1451/datasets/d_cac2c32f01960a3ad7202a99c27268a0/view         | 3 April 2024  | singapore_supermarkets.geojson                                                            | 
| Health Facilities                | Healthcare                | OpenStreetMap              | https://data.humdata.org/dataset/hotosm_sgp_health_facilities | 3 April 2024  | singapore_healthcare.geojson                                                           |
| Primary and Secondary Schools    | Education                 | Ministry of Education      | https://beta.data.gov.sg/collections/457/datasets/d_9aba12b5527843afb0b2e8e4ed6ac6bd/view | 3 April 2024  | singapore_schools.csv                                                           | 
| Parks and Nature Reserves        | Parks                     | National Parks Board      | https://beta.data.gov.sg/collections/1489/datasets/d_77d7ec97be83d44f61b85454f844382f/view | 3 April 2024  | singapore_parks_reserves.geojson                                                           | 

These datasets have been chosen based on the anecdotes provided in interview excerpts in Teo You Yenn’s book, This is What Inequality Looks Like, reflecting the often frequented locations by low-income families in Singapore. 

## Tools, methodology, and limitations

This project is inspired by geospatial digital commons (Elwood 2008, 175), which is why I have uploaded the web app, its code and datasets here on Github. Github is a platform that facilitates open data and collaboration due to its rigorous version control mechanisms while maintaining a clear change history. By opening the data on Github, it could be further refined and updated by others over time, or used for other purposes. 

The app is built on [Mapbox](https://www.mapbox.com/), a versatile mapping tool that is built with OpenStreetMap data, and can be heavily customised for various purposes. The datasets used were uploaded to Mapbox’s dataset studio and exported into tilesets to be made into an interactive map.

While Mapbox does provide their own Isochrone API, it does not provide specific calculations for public transport. Instead, I have used [Geoapify’s](https://www.geoapify.com/) Isolines to draw up the necessary parameters for this project which included a public transport option, and is free for use. 

Several of the datasets used are manually scraped from the source cites (i.e. government webpages) as addresses, before they are geocoded and given spatial attributes in longitudinal and latitudinal values using Google’s Geocoding API using Python. This occasionally turned out some errors and were placed outside of Singapore, which were corrected manually. 

This project was heavily dependent on the algorithms and technical processes afforded by tools such as Google, Mapbox, and Geoapify. Naturally, this also means that the data represented on this tool carries with it biases and potentially imperfect information. For example, it is unclear how Geoapify makes its calculations on time-distances. Some datasets were also sourced from volunteered geographic information such as Humanitarian OpenStreetMap, which can be “patchwork” in nature and potentially perpetuate further inequalities (Elwood 2008, 178). 

## References and sources

Bay, Ann-Helén, dir. 2022. Why Is It so Hard to Escape Poverty? https://www.youtube.com/watch?v=D9N7QaIOkG8.

Carmichael, Fiona, Christian K. Darko, Patricia Daley, Joanne Duberley, Marco Ercolani, Tim Schwanen, and Daniel Wheatley. 2024. “Time Poverty and Gender in Urban sub‐Saharan Africa: Long Working Days and Long Commutes in Ghana’s Greater Accra Metropolitan Area.” Journal of International Development 36 (1): 343–64. https://doi.org/10.1002/jid.3817.

Chenou, Jean-Marie, and Carolina Cepeda-Másmela. 2019. “#NiUnaMenos: Data Activism From the Global South.” Television & New Media 20 (4): 396–411. https://doi.org/10.1177/1527476419828995.

DBS. n.d. “Bank Branches & ATMs.” Accessed April 3, 2024. https://www.dbs.com.sg/index/locator.page?filter=PB.

Elwood, Sarah. 2008. “Volunteered Geographic Information: Future Research Directions Motivated by Critical, Participatory, and Feminist GIS.” GeoJournal 72 (3–4): 173–83. https://doi.org/10.1007/s10708-008-9186-0.

Ferguson, James. 2020. “The Social Life of Cash Payments: Money, Markets, and the Mutualities of Poverty.” In Give a Man a Fish, 119–40. Duke University Press. https://doi.org/10.1515/9780822375524-007.

Geoapify. 2020. “Isoline API | Isochrones and Isodistances.” Geoapify. January 23, 2020. https://www.geoapify.com/isoline-api/.

HDB. 2024. “Eligibility Criteria and Schemes.” January 18, 2024. https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-hdb/public-rental-scheme/eligibility.
———. n.d. “Map of HDB Rental Flats in Singapore.” Housing Development Board. Accessed April 3, 2024. https://services2.hdb.gov.sg/webapp/AA11EMAP/AA11PMainPage.

Kidd, Dorothy. 2019. “Extra-Activism: Counter-Mapping and Data Justice.” Information, Communication & Society 22 (7): 954–70. https://doi.org/10.1080/1369118X.2019.1581243.

Liew, Isabelle. 2024. “Nearly 950 Families in Rental Flats Bought HDB Homes in 2023, Highest since Covid-19 Hit.” The Straits Times, February 8, 2024. https://www.straitstimes.com/singapore/housing/nearly-950-families-in-rental-flats-bought-homes-in-2023-highest-since-covid-19-hit-hdb.

Loh, Pei Ying. 2022. “How Attainable Is the Singapore Dream?” Kontinentalist, August 30, 2022. https://kontinentalist.com/stories/affordability-of-hdb-housing-policies-and-living-cost-for-low-income-singaporeans.

Mapbox. n.d. “What Are Isochrones?” Accessed April 13, 2024. https://www.mapbox.com/insights/isochrones.

Ministry of Education. n.d. “School Directory and Information.” CSV. Data.gov.sg. Accessed April 3, 2024. https://beta.data.gov.sg/collections/457/datasets/d_9aba12b5527843afb0b2e8e4ed6ac6bd/view.

National Environment Agency. 2023. “NEA Market and Food Centre.” Geojson. Data.gov.sg. https://beta.data.gov.sg/collections/1389/datasets/d_a57a245b3cf3ec76ad36d55393a16e97/view.

National Parks Board. 2023. “NParks Parks and Nature Reserves.” Geojson. Data.gov.sg. https://beta.data.gov.sg/collections/1489/datasets/d_77d7ec97be83d44f61b85454f844382f/view.

Ng, Irene. 2023. “Going beyond Income Poverty in Singapore: Exploring Digital, Attention and Time Poverties.” Southeast Asian Affairs 2023 (1): 291–301.

Platt, Lucinda. 2019. “Income, Wealth and Poverty.” In Understanding Inequalities: Stratification and Difference, Second edition, 210–36. Cambridge, UK ; Medford, MA: Polity.

Shanyang, Yin. 2017. “Isochronic Singapore: A Gentle Introduction to Isochrone Maps.” Medium (blog). December 6, 2017. https://medium.com/@yinshanyang/isochronic-singapore-a-gentle-introduction-to-isochrone-maps-9cceebc72f60.

Singapore Food Agency. 2019. “Supermarkets.” Geojson. Data.gov.sg. https://beta.data.gov.sg/collections/1451/datasets/d_cac2c32f01960a3ad7202a99c27268a0/view.

Singpost. n.d. “List of Post Office Locations.” Singapore Post. Accessed April 17, 2024. https://www.singpost.com/list-of-post-offices.
Teo, Youyenn. 2019. This Is What Inequality Looks like: Essays. New edition. Singapore: Ethos Books.

