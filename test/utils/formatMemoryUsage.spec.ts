import { describe, expect, it } from 'vitest';
import { formatMemoryUsage } from '../../src/utils/formatMemoryUsage';

describe('Format memory tests', () => {
  it('should return a string', () => {
    const { heapUsed } = process.memoryUsage();
    expect(formatMemoryUsage(heapUsed)).toBeTypeOf('string');
  });
});
