#!/usr/bin/env bash
nohup java -Dloader.path=./lib -jar /usr/local/rms/main/rms_main-1.0.0.jar --spring.profiles.active=prod &