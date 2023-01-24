# THE FORCE PLATFORM WEB

**THE FORCE PLATFORM WEB** A web application for Star Wars fans; get information about all the films in the franchise.

## REQUIREMENTS
### Prerequisites
* node v14.17.4 and above
* npm 6.14.14 and above
* React 18.2.0
* Then install the various packages from package.json `npm install`
* If the above results to an error use the following command `npm install`
* Create environment variables

## ENVIRONMENT VARIABLES
```
[ENVIRONMENT_DETAILS]

[DOMAIN]
CURRENT_SITE_DOMAIN=

[SENTRY]
SENTRY_DNS=

[COMMON_API_CREDS]
REACT_APP_API_URL=https://myApiServerUrl.com
```

## DOCKERIZE THE APPLICATION
* Run the command below from the terminal depending on the environment needed.
```
[DEV]
docker-compose -f docker-compose-dev.yml up --build -d

[UAT]
docker-compose -f docker-compose-uat.yml up --build -d

[PROD]
docker-compose -f docker-compose-prod.yml up --build -d

```

Meta
----
Author:
   * **Joseph Wambua** - *Initial work* - [mutuajoseph](https://github.com/mutuajoseph)
   * [please add you author creds here]

Status:
    maintained, and is currently in development

Version:
    v0.1.0

React Version:
    18.2.0 and above


Usage
-----


## License
This project is licensed under the MIT License

Documentation
-------------
You can see the documentation over at **Read the Docs**

Resources
-------------

* https://react-typescript-cheatsheet.netlify.app/
