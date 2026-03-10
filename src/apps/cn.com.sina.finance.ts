import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.sina.finance',
  name: '新浪财经',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '开屏广告',
      rules: [
        {
          activityIds: 'cn.com.sina.finance.start.ui.LoadingActivity',
          matches: '[id="android:id/content"] >4 LinearLayout[clickable=true]',
          exampleUrls: ['https://i.gkd.li/snapshot/1773125973402'],
          resetMatch: 'app',
          matchTime: 10000,
        },
      ],
    },
  ],
});
