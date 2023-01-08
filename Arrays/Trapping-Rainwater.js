const blocks = [2, 4, 7, 4, 0, 10, 2, 5, 1];

function trappingRainwater(blocks) {
  const blocksLength = blocks.length;

  let leftTallestBlocks = [];
  let rightTallestBlocks = [];
  let trappedWater = 0;

  let leftMax = blocks[0];
  let rightMax = blocks[blocksLength - 1];

  for (let i = 0; i < blocksLength; i++) {
    if (blocks[i] > leftMax) {
      leftMax = blocks[i];
    }
    leftTallestBlocks.push(leftMax);

    if (blocks[blocksLength - 1 - i] > rightMax) {
      rightMax = blocks[blocksLength - 1 - i];
    }
    rightTallestBlocks.unshift(rightMax);
  }

  for (let i = 0; i < blocksLength; i++) {
    trappedWater +=
      Math.min(leftTallestBlocks[i], rightTallestBlocks[i]) - blocks[i];
  }

  return trappedWater;
}
trappingRainwater(blocks);
