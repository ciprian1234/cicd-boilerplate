#!/bin/bash
cd ~/projects/github/cicd-boilerplate
git pull
git status
sudo service nginx stop
