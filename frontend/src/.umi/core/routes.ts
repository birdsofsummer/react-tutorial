// @ts-nocheck
import { ApplyPluginsType } from '/q/web/code/js/react/editor/node_modules/_@umijs_runtime@3.2.14@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.tsx').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
