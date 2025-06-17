---
layout: post  
title: "Analytical presentations: Looking for the right things"
subtitle: "Smoke and mirrors aplenty"
image: "/img/Presentation.png"
bigimg: "/img/Presentation.png"
share-img: "/img/Presentation.png"
date: 2021-08-26 00:53:00 +0600
category: tutorial
tags:
  - Reflection
  - Analytics
  - Presentation
  - tutorial
---


Last few years, analytics and its companion words (Big Data, Machine Learning etc.) have become victims of overuse and abuse. At every meeting you get a few people utter this words for any or everything. Yes, they have become huge but very few companies possess the amount of data or processing capabilities or talents or all of the above to truly realize the potential. On top of it, misrepresentation (or should I say 'presentation') of data has become rampant. From my moderate experience with dealing with analytical reports (both receiving and sending ends), here I'm trying to list down some tips to help the uninitiated to navigate through smoke and mirror

## Each word is a filter

![](https://media.giphy.com/media/celuaOLksXkeVSF2H2/giphy.gif)

Consider an area where there are 100 shops. Among those, 20 are local and 5 of those local ones sell sweets. Yet we see numbers presented with titles like '**'#1 local sweets shop"** which indicates you merely topped among the 5 local sweet shops and may very well be behind the rest 95. Quite a filtering going on.  

## Beware of baselines

![Baseline fall](https://media.giphy.com/media/3o6Zt7YExBfE89p6Yo/giphy.gif)

We often come across claims like **"X district have 100% YoY growth"**.  This does not necessarily translates to better market performance. Growing to 2 from 1 may indicate 100% increase. Your competition may have grown by more leading to your loss of market share (i.e. loss of fair share of opportunity). Bottom-line is verify performance against peers and use absolute numbers along with percent growth.

##  Watch out for asterisks

![](https://media.giphy.com/media/McgWV3RzDQZZNdFWRA/giphy.gif)

The dreaded **"*"** - often leading to pesky little footnotes that nobody can decode. You see a presentation with superb visualization of growth by districts in a map with the title **"YoY profit growth by districts"**. The asterisk leads to footnote saying "New outlets launched within last year excluded". You get standing ovation from audience on that day but may very well get roasted at year end review as those new outlets may be unprofitable.

## Mind the scales

![](https://media.giphy.com/media/ww9Z3l8wl4szKyRIro/giphy.gif)

The age-old method shrewd managers use to lie with statistics.  It is best to always start axis from 0. But if you really need to highlight a certain part, insert a gap indicator to be transparent to audience.

## Know your metrics

![](https://media.giphy.com/media/EDFsgd92Oosnu/giphy.gif)

This is the most offensive part of data communication where the  communicator takes advantage of commonly used terms to fool the audience who trust on their expertise. Consider an analyst presenting a churn prediction model where the objective is to predict the users who are likely to churn out in near future. The company's churn rate is 5%. S/he presents that accuracy of the model is 90% and the audience give a standing ovation as 90% is good. A+ for sure - right?  

Lets dig a little deeper. Company churn rate is 5% meaning out of 100 customer 5 will churn and 95 will remain. One day your kid came to the office and by accident put an input that changes the prediction against all 100 customers to 0 i.e. they will not churn. At next month, 5 person churned as usual but you find accuracy of the model to be 95%. It seems your kid is apparently outperforming the highly paid analyst. Something is not right - Right? And the culprit is the metric. 

Here we are concerned about accurately finding out who will churn. So, our target metrics should be something that calculates out of those predicted to churn, how many actually churned. So, precision NOT accuracy will be the right metric here. You can refer to this [Wikipedia Link](https://en.wikipedia.org/wiki/Template:Diagnostic_testing_diagram) to learn about different metrics for classification problems. Your desired metric may be different.

## Conclusion

That's it folks. To summarize- 

1. Tread carefully with words
2. Compare to understand baseline
3. Read the asterisks
4. Axis marks are your friend. Ask for them.
5. Ask for right metric for the job

This is my personal opinion and first attempt at sharing my reflections about the world as I see it. 
You may agree or disagree - that's fine as we all got inherent biases. 

Note - Gifs are sourced from [Giphy](https://giphy.com) and property of individual creators.



