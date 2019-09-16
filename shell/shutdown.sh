#!/usr/bin/env bash
ps -ef | grep rms_main-1.0.0.jar | grep -v grep | awk '{print "kill -9 " $2}' | sh
rm -rf logs/ nohup.out
