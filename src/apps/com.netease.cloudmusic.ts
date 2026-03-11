import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '开屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '[id="com.netease.cloudmusic:id/skipBtn"]',
          exampleUrls: ['https://i.gkd.li/snapshot/1773138740255'],
          resetMatch: 'app',
          matchTime: 10000,
        },
      ],
    },
  ],
});
