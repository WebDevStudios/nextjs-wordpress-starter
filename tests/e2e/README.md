# E2E Test

At the moment, E2E only works for members of WebDevStudios. See #2 below as to why.

A few important things.

1. `wp-content` in Docker is being replaced with the content from https://github.com/WebDevStudios/wds-headless-wordpress

   The content is pulled in using `git clone` in our **local** machine and not inside a Docker container.

2. After cloning the repo above, we also perform `composer install`, again in our **local** machine and not inside Docker Container. Please take note that at the moment, only members of WebDevStudios can run `composer install` and the general public needs to run `COMPOSER=composer-public.json`.

3. `/tests/e2e/seed.sql` isn't included in the repo yet.
