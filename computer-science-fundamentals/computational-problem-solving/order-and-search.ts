const divideByTwo = (num: number) => num / 2

function findBooks(totalBooks: number) {
  let timesSearched = 0
  let booksLeft = totalBooks

  while (booksLeft > 1) {
    timesSearched++
    booksLeft = divideByTwo(booksLeft)
  }

  return timesSearched
}

findBooks(16000) //?


const books = 160000

