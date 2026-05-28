import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '高德地图开屏广告',
      rules: [
        {
          activityIds: 'com.autonavi.map.activity.NewMapActivity',
          matches: '@LinearLayout >1 TextView[text="跳过广告"]',
          exampleUrls: ['https://i.gkd.li/snapshot/1779970005164'],
          resetMatch: 'app',
          matchTime: 10000,
        },
      ],
    },
  ],
});
