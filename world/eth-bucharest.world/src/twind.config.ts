import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineClamp from '@twind/preset-line-clamp';
import twindBaseConfig from '../../../libs/twindBaseConfig.js';
export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind(), presetLineClamp()],
  ...twindBaseConfig,
});
