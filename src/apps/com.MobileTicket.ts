import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.MobileTicket.ui.activity.MainActivity',
          matches: 'TextView[id="com.MobileTicket:id/tv_skip"]',
          exampleUrls: ['https://i.gkd.li/snapshot/1773386415186'],
          resetMatch: 'app',
          matchTime: 10000,
        },
      ],
    },
  ],
});
