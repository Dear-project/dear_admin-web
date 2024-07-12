#!/bin/bash
# before-install.sh

# 기존 .next 디렉토리 삭제
if [ -d /home/ubuntu/chagok/.next ]; then
  rm -rf /home/ubuntu/chagok/.next
fi