const timeToCutTheDoghIntoTriangles = 2;
const timeToSpreadFillingOntoTriangles = 4;
const timeToRollFilledTrianglesIntoCrescents = 10;
const timeToPlacePastriesIntoTheOven = 20;
const timeToRemovePastriesFromTheOven = 4;
const timeToLeftThePastriesCool = 10;

const sum = (...args: number[]) => args.reduce((sum, item) => sum + item, 0);

const workers = 2;

const parallelWork = sum(
  timeToCutTheDoghIntoTriangles,
  timeToSpreadFillingOntoTriangles,
  timeToRollFilledTrianglesIntoCrescents,
  timeToRemovePastriesFromTheOven
); //?

const notParallelWork = sum(
  timeToLeftThePastriesCool,
  timeToPlacePastriesIntoTheOven
); //?

const pierreTotalTime = sum(
  timeToCutTheDoghIntoTriangles / workers,
  timeToSpreadFillingOntoTriangles / workers,
  timeToRollFilledTrianglesIntoCrescents / workers,
  timeToPlacePastriesIntoTheOven,
  timeToRemovePastriesFromTheOven / workers,
  timeToLeftThePastriesCool
); //?

const bakeryTime = sum(parallelWork / 16, notParallelWork); //?

const desiredTime = 35;
parallelWork;
workers;
notParallelWork;

const workersNeededFor5MinutesGain =
  parallelWork / -(notParallelWork - (40 - 5)); //?

const pierreAverageProductionPerMinute = 200 / 20; //?

const averagePasteriesForMinute = 200 / 30; //?
