// TODO: write your code here
import sum from './basic';
import GameSavingLoader from "./classes/GameSavingLoader";

console.log('worked');

console.log(sum([1, 2]));

(async () => {
  try {
    const loader = new GameSavingLoader();
    const data = await loader.load();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
})()
