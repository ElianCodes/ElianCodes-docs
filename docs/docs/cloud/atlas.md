---
sidebar_position: 2
---

# MongoDB Atlas

For my databases, I tend to switch between [Google Cloud SQL](<https://cloud.google.com/sql>) and [MongoDB atlas](<https://atlas.mongodb.com>). The nice thing about MongoDB Atlas is that it has a great free cluster type, which I used a lot as a student, since I couldn't always pay for a full-fetched SQL server. MongoDB also integrates nicely with JavaScript, which I really like to use. Although I would recommend a new webdeveloper to start with relational databases.

Not that long I discovered [Planetscale](</docs/cloud/planetscale>), which is now my default for basic MySQL databases

## MongoDB Cluster options

### MongoDB Serverless Cluster

The newest of the three and still in beta, but very very cool! This type of cluster is designed to scale with your website or audience and has a pay-as-you-go model. It actually comes at a very cheap $0.3 per million reads, which compared to a dedicated cluster of $57 per month is a big change!

In the case of the ElianCodes website, I chose this cluster because I won't need it as much, since it's mainly static things and doesn't require a lot of writes.

Note: *not all features are available yet with the serverless cluster. For instance, Strapi won't connect to it.*

[Check out the official Serverless Cluster docs](<https://www.mongodb.com/cloud/atlas/serverless>)

### MongoDB Dedicated Cluster

This would be the best option for a big Saas or so backed by MongoDB. It offers 100's of TB's of data, a configurable amount of RAM and all other Production quality things. The only downside is that it ofcourse comes at a bigger cost.

Inside the dedicated cluster option are a lot of other options which are configurable, I won't go any deeper on them here, since it just would be way to much!

### MongoDB Shared Cluster

The shared cluster is the cheapest of the three (even free). It's mainly built & ment for small project and exploring MongoDB (Atlas and just database features). I must say that it's plan is actually quite generous and that I have been able to run production quality websites backed by it. It's mainly the cap of storage that would be the problem here. It's capped at a max of 5GB's of storage.

[Checkout the official pricing and guide here](<https://www.mongodb.com/pricing>)
