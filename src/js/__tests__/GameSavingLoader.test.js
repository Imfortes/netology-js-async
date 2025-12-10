import GameSavingLoader from '../classes/GameSavingLoader';
import read from '../reader';
import json from '../parser';

jest.mock('../reader', () => jest.fn());
jest.mock('../parser', () => jest.fn());
jest.setTimeout(10000);

describe('GameSavingLoader', () => {

  test('Load game', async () => {
    const loader = new GameSavingLoader();
    expect(loader).toBeInstanceOf(GameSavingLoader);
  })

  test('Load data without throw errors', async () => {
    const mockBuffer = new ArrayBuffer(10);
    const mockResult = { id: 1, name: 'Test' };

    read.mockResolvedValue(mockBuffer);
    json.mockResolvedValue(mockResult);

    const loader = new GameSavingLoader();
    const result = await loader.load();

    expect(result).toEqual(mockResult);
    expect(read).toHaveBeenCalledTimes(1);
    expect(json).toHaveBeenCalledTimes(1);
  });
})
