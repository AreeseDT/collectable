import { MappableIterator } from '@collectable/core';
import { keys } from '@collectable/red-black-tree';
import { SortedSetStructure } from './SortedSet';
import { SortedSetItem } from './types';

export function iterate<T> (set: SortedSetStructure<T>): IterableIterator<SortedSetItem<T>> {
  return keys(set._tree);
}

function valueOf<T> (item: SortedSetItem<T>): T {
  return item.value;
}

export function iterateValues<T> (set: SortedSetStructure<T>): IterableIterator<T> {
  return new MappableIterator<SortedSetItem<T>, T>(keys(set._tree), valueOf);
}

export function isIterable<T> (arg: any): arg is Iterable<SortedSetItem<T>> {
  return !!arg && Symbol.iterator in arg;
}

