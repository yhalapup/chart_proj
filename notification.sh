echo 'notify:
- channel: slack
  trigger-on: done
  room: general
  team: mytest1
  branch: master*
  message: "<@asaichuk>, test message"' > notify_rule.yml
