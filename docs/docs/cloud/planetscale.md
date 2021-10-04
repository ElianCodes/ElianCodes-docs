---
sidebar_position: 4
---

# Planetscale

[Planetscale](<https://planetscale.com/>) is a serverless database platform. It feels a lot like [Netlify](<https://netlify.com>) or [Vercel](<https://vercel.com>), but with databases.

*Note: Planetscale is still in Beta*

## Pricing

One of the most cool things about Planetscale is that it has a completely free plan without creditcard info required. In the free package, you'll probably get enough for a little sideproject or even a full website.

### Developer / Free plan

- 100M row reads
- 10M row writes
- 10GB of storage
- 3 database branches

### Scaler / pay-as-you-go plan

- $15 per 100M reads
- $15 per 10M row writes
- $1.25 per 1GB of storage

The [usage monitor](<#realtime-usage-monitoring>) will keep you always informed about your plan, possible costs and number of requests ect.

Even the payed plan in a quite simple website or Saas or whatever is awesome compared to something like Google Cloud SQL, but in something like Cloud SQL, you'll have full control, higher speeds, higher configuration and your own VM.

A thing to note about the princing, is that it's a model per database, this can be nice since you only might need one database that has a paying plan and other databases won't be affected.

## Branches

Something I really like about Planetscale is that it has it's own branching system, which feels a lot like the oh so familiar git branching system. In the free plan you have 3 branches, but that should be enough I guess.

You can create 'Deploy requests' from one database to another, which can be compared with Pull Requests in git.

Modifications to the `main` branch of a database in Planetscale are disabled, so everything will have to go through a deploy request. Might seem irritating or unhandy at first, but when working with others on a project, it might save the day when developer Dave accidentally removed a table on production.

A quick note about branching; merging a branch in Planetscale will only merge the structure, not the data of the database.

## Realtime monitor

### Realtime usage monitoring

The realtime usage monitor will give you insights on when your database got read or got written to. This is a handy feature to see if you should scale, or maybe your website sourcecode is written inefficiently and you should refactor some database actions. It will also show you the current cost if you've enabled the Scaler plan.

### Database schema monitoring

Next to monitoring the database and it's statistics, you also have the possibility to generate a realtime database schema, which will show you the columns ect. in a table. Very handy! Other than that, you can also keep track of changes is the schema by checking out the deploy requests.

## Backups

Scaleplanet also takes regular database backups at no additional cost. It specifically states on their website that they take a daily backup free of charge, which users can't even remove, so you'll be safe in their hands. Ofcourse, you can also create new backups manually by simply clicking a button on the interface. One thing I haven't figured out yet is if the backup only includes the database schema or if it also contains the data. I'm hoping for the latter.
