export default function getRandomSubset<T>(array: T[], size: number): T[] {
  const shuffledArray = [...array].sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, size);
}
