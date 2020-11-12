#!/bin/bash

pwd

# remove containers
docker-compose -f ~/projects/github/cicd-boilerplate/backend/docker-compose.yml down

# create new containers
docker-compose -f ~/projects/github/cicd-boilerplate/backend/docker-compose.yml up -d --build
