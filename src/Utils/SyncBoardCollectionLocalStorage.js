export const loadState = () => {
  try {
    const serializedBoardCollectionState = localStorage.getItem('boardsCollection');
    if (serializedBoardCollectionState === null) {
      return undefined;
    }
    return JSON.parse(serializedBoardCollectionState)
  } catch (err) {
    return undefined;
  }
}

export const saveState = boards => {
  try {
    const serializedBoardCollectionState = JSON.stringify(boards)
    localStorage.setItem('boardsCollection', serializedBoardCollectionState)
  } catch (err) {
    new Error(err)
  }
}