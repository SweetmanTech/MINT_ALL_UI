const getFormattedDrops = (raw, chainId) =>
  raw.map((item) => ({
    contractAddress: item.contract.address,
    chainId, // Assuming chainId is the same as in the hook argument
    uri: item.tokenUri,
    blockNumber: item.mint ? item.mint.blockNumber.toString() : null,
    type: item.tokenType,
    timestamp: item.timestamp,
    tokenId: item.tokenId,
  }))

export default getFormattedDrops
