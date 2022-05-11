import { OnLoadResult } from 'esbuild';
import { StringOptions } from 'sass';
import { sassPlugin } from './plugin';
export declare type Type = 'css' | 'style' | 'css-text' | 'lit-css';
export declare type SassPluginOptions = StringOptions<'sync'> & {
    filter?: RegExp;
    importMapper?: (url: string) => string;
    includePaths?: string[];
    basedir?: string;
    type?: Type;
    cache?: Map<string, CachedResult> | boolean;
    transform?: (css: string, resolveDir: string, filePath: string) => string | OnLoadResult | Promise<string | OnLoadResult>;
    precompile?: (source: string, path: string) => string;
    cssImports?: boolean;
    nonce?: string;
};
export default sassPlugin;
export { sassPlugin };
export { makeModule, postcssModules } from './utils';
export declare type CachedResult = {
    mtimeMs: number;
    result: OnLoadResult;
};
