---
sidebar_position: 1
slug: /cloud/
---

# Google Cloud

Since my employment with [vBridge](<https://www.vbridge.eu>) I started experimenting with [Google Cloud](<https://cloud.google.com>) on my own, since vBridge mainly uses Google Cloud, before I used Azure a little bit, but my use was never really advanced.

## What is Google Cloud

Google Cloud is a cloud platform by Google (duh 🤦‍♂️) and my go to for a cloud provider. I really like the UI and integration with the Google workspace things.

## The things I most use

Below are some of the components in Google Cloud I tend to use the most.

### [Google Cloud Storage](<https://cloud.google.com/storage>)

Google Cloud Storage is a great way to store backups or host static websites and sites. Google Cloud storage also comes at a great cheap price. They have options for location of the storage, but also for multi-regions (which come at a slightly higher price). There are various options between archive storage (long term), coldline (long-term backups), nearline (backups) and standard (frequently accessed data).

A bucket, can also be given public access and a home- & errorpage, which works great for a static website (like this website is).

### [Google Cloud Run](<https://cloud.google.com/run>)

Google Cloud Run can be compared to a [Docker](<https://docker.com>) container running in the cloud. Great for websites with SSR or API-hosting. Cloud Run also has scaling options, which is great if you're not experienced with Kubernetes but still need a performant website or API. Not that long ago, Google Cloud introduced the always alocated CPU, so there's always at least one container available (which of course has a price-increase).

### [Google Cloud Build](<https://cloud.google.com/build>)

### [Google Cloud SQL](<https://cloud.google.com/sql>)
