import { fallback, required } from './values.js';

export type NodeEnv<T = undefined> =
  | T
  | 'development'
  | 'production'
  | undefined;

/**
 * give NODE_ENV value or given fallback value
 */
export const getEnv = (
  envKey: string,
  defaultValue?: string,
): string | undefined => fallback(process.env[envKey], defaultValue);

/**
 * returns NODE_ENV value or given fallback value
 */
export const getNodeEnv = (defaultValue?: string): string | undefined =>
  getEnv('NODE_ENV', defaultValue);

/**
 * returns NODE_ENV value or given fallback otherwise throws
 */
export const getRequiredEnv = (envKey: string, defaultValue?: string): string =>
  required(getEnv(envKey, defaultValue), envKey);

/**
 * strict check NODE_ENV with given value
 */
const is = <T>(value: NodeEnv<T>): boolean => process.env.NODE_ENV === value;

export const Env = {
  is,
  isDev: is('development'),
  isProd: is('production'),
  isTest: is('test'),
};
