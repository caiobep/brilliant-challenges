// Resources and Tradeoffs

// In computer science the dispute for time (processing) and space (memroy)
// is almost constant.


// Quiz 3 - Part 1
const optimisticAttemptsRequiredToFindPairOfSocks = (numberOfSocksToLookFor) => {
    return (numberOfSocksToLookFor + 2) / 2
}

optimisticAttemptsRequiredToFindPairOfSocks(4) //?
optimisticAttemptsRequiredToFindPairOfSocks(6) //?
optimisticAttemptsRequiredToFindPairOfSocks(20) //?


// Quiz 3 - Part 2
const totalInspectionsToFindSocksPairs = (numberOfPairsToLookFor) => {
    let socksMissing = numberOfPairsToLookFor
    let inspections = 0

    while (socksMissing > 0) {
        inspections += optimisticAttemptsRequiredToFindPairOfSocks(socksMissing)
        socksMissing -= 2
    }

    return inspections
}


totalInspectionsToFindSocksPairs(20) //?


// Quiz 3 - Part 3
const bedAlgorithmToFindPairOfSocks = (numberOfSocks) => {
    return numberOfSocks //?
}
