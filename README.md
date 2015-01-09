## Summon Hacks

Minor Summon 2.0 CSS and Javascript modifications and tweaks to improve usability and accessibility until these issues are resolved in the core product.

### Developing

    $ cd /path/to/repo
    $ cp uql.conf.new.json uql.conf.json
    $ vim uql.conf.json // to put in the api keys of "uql-frontend-deploy" (NOT YOUR USER)
    $ npm install
    $ grunt

### Deploying

Edit uql.conf.json and then:

    $ cd /path/to/repo
    $ grunt deploy
