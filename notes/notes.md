# [Why, When and How to use Redis in ASP.net MVC Core](https://garywoodfine.com/why-when-and-how-to-use-redis-in-asp-net-mvc-core/)

> The evolution to mobile based technology has forced a rethink on database technology and an explosion of Document based and NoSQL databases.

Q. What does the evolution of mobile based technologies have to do with database technologies? 

Q. What is _memcached_?
A. Ah, not just some shorthand for _memory cache_: [Memcached](http://memcached.org/about).

Q. What is a websocket? That's a term I hear thrown a lot, and I can't remember if I ever finished the RFC spec.
A. [The WebSocket Protocol](https://tools.ietf.org/html/rfc6455)


# [Redis InMemoryCache in ASP.net MVC Core](https://garywoodfine.com/redis-inmemory-cache-asp-net-mvc-core/)

Q. What is _Redis_?  
A. From the article:
>Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

Shhh, no tears. Just make files
- Download redis
- tar -zxvf ~/Downloads/redis-{version} -C destination
- Install mingw 


vEthernet (DockerNAT) Properties 
Uninstall and reinstall file printer after throwing error trying to bind port 6379 for the docker redis image (docker run image -> running container of image)

Q. Redis data types?
A. https://redis.io/topics/data-types-intro
Interesting tidbit about keys potentially being image hashes 