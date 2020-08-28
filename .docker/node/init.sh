#!/usr/bin/env bash

set -e

git config --global user.name $GIT_USERNAME
git config --global user.email $GIT_EMAIL

exec "$@"
