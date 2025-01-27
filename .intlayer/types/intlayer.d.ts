/* eslint-disable */
import { Locales } from 'intlayer';
import type { ComponentKeyContent as _g1EAq5UN1rJqzfYaJqJW } from './component-key.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "component-key": _g1EAq5UN1rJqzfYaJqJW;
  }

  type ConfigLocales = Locales.ENGLISH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}