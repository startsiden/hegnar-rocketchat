<img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" width="500" />

<h1 align="center">
  The ultimate Free Open Source Solution for team communications.
</h1>

## Install node_modules

```
$ yarn
```

## Go into the meteor app

```
$ cd apps/meteor
```

## build the meteor/react app into a new folder

```
$ meteor build --server-only --directory /Users/sinisa/builds/rocketchat-build
```

## Copy the docker setup into the build folder

- hegnar-Dockerfile
- hegnar-docker-compose.yml

## Navigate to build

```
$ cd /Users/sinisa/builds/rocketchat-build
```

## Start the containerization

```
$ docker-compose -f hegnar-docker-compose.yml up --build
```
