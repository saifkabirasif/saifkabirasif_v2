---
layout: post  
title: "Tableau Tales : Data Price"
subtitle: "Benchmarking countries around the globe"
image: "/img/Data_Price.png"
bigimg: "/img/Data_Price.png"
share-img: "/img/Data_Price.png"
cover: /images/post_images/Data_Price.webp
date: 2021-12-01 00:53:00 +0600
categories: 
  - tech
tags:
  - Tableau
  - Analytics
  - Visualization
  - Data price
  - Telecom
  - tutorial
---


For last couple of years, I have been using Tableau extensively for professional purposes. I found Tableau to be  extremely user friendly with very lenient learning curve although automations and integration with R and Python leave much to be desired. The good thing is that there is a public version of Tableau available for free. 

For my first public dashboard, I have chosen to visualize data price per gigabyte of internet across 200+ countries. The data has been  sourced from the excellent [report](https://www.cable.co.uk) by cable.co.uk.

Key dashboard features include - 

* Ranking of countries based on average price per gigabytes of data
* Last three years trend of price
* Cheapest and priciest package price for 1 gigabytes of data

You can check out the dashboard below (Switch to full screen for better view) -

<iframe seamless src="https://public.tableau.com/views/PriceperGB-Globalbenchmark/Dashboard1?:showVizHome=no&:embed=true&:device=desktop&:toolbar=no" width="100%" height="500" frameborder="0" scrolling="yes" allowfullscreen="true"></iframe>
Some tips on challenges I faced doing this -

* Finding flags with proper naming to match with Tableau has been a chore. Search for iso2 (2-lettered) country codes
* To easily map flags with shapes, alphabetically order the flags and delete the flags whose info is not in the dataset
* To align the flags like a tabular column, create a calculated field with same value and manipulate x-axis until you find the sweet spot

That's it for now folks. Hopefully, I will be coming back with some Tableau contents soon.