#!/bin/bash

set -eu

sudo rm -rf /opt/yes-test
sudo cp -rfv app /opt/yes-test
sudo chmod +x /opt/yes-test/run
