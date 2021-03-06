import { KeyedReduceFn } from '@collectable/core';
import { HashMapStructure } from '../internals/HashMap';
import { fold } from '../internals/primitives';

export function reduce<K, V, R> (f: KeyedReduceFn<R, V, K>, seed: R, map: HashMapStructure<K, V>): R;
export function reduce<K, V, R> (f: KeyedReduceFn<R, V, K>, seed: R, map: HashMapStructure<K, V>): R {
  return fold(f, seed, map);
}
