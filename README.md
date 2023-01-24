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

In order to use the environment variables ensure you create three environment files: `.env`, `.env.development`, `.env.production`

Use the following criteria to set your environment variables:

- `.env` - Common variables that are not specific to any environment.
- `.env.development` - Variables that are only specific to `development` or `test` environments.
- `.env.production` -  Variables that are ONLY specific to production environment. Example: `SENTRY`

```
[ENVIRONMENT_DETAILS]

[DOMAIN]
CURRENT_SITE_DOMAIN=

[SENTRY]
SENTRY_DNS=

[COMMON_API_CREDS]
REACT_APP_API_URL=https://myApiServerUrl.com
```

**NB**:
- Ensure you use the prefix `REACT_APP_` to store all the variables that are needed in the React Application. Example: `REACT_APP_NAME=janedoe`
- **DO NOT** commit any of your environment files to version control.

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
Authors:
   * **Joseph Wambua** - *Initial work* - [mutuajoseph](https://github.com/mutuajoseph)
   * **Ian Okumu** - *Environment Setup* - [otsembo](https://github.com/otsembo)
   * [please add you author creds here]

**Status**: `maintained, and is currently in development`

**Version**: `v0.1.0`

**React Version**: `18.2.+`


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
