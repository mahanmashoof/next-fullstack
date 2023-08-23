## CSS:

gap
object-fit
-webkit-background-clip
flex: 1
animation

## layout

ex: protfolio

## next.config.js

### allowing external images

```
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};
```

## context

create/use context

## Data fetching

### server side

getData function
notFound()

### client side

swr

## Mongo db

src/utils/db.js
src/models/
src/app/api

## meta data

src/app/contact/page (static)
src/app/blog/[id]/page (dynamic)

## auth

### google

src/app/api/auth
SessionProvider => authprovider (since if using "use client" in layout.js, the metadata can't be used anymore => prevents SSR)
src/components/authProvider
src/app/dashboard/(auth)/login

### email & password

src/app/dashboard/(auth)/register
src/app/api/auth/register
