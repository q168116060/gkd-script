import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 168,
  name: 'hax的GKD订阅🚀',
  version: 0,
  author: 'hax',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/q168116060/gkd-script',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
