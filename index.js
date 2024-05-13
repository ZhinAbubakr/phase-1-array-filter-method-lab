// Code your solution here

function findMatching(drivers, query) {
  const lowercaseQuery = query.toLowerCase();
  return drivers.filter((driver) =>
    driver.toLowerCase().includes(lowercaseQuery)
  );
}

function fuzzyMatch(drivers, query) {
  const lowercaseQuery = query.toLowerCase();
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(lowercaseQuery)
  );
}

function matchName(driverObjects, query) {
  const lowercaseQuery = query.toLowerCase();
  return driverObjects.filter(
    (driver) => driver.name.toLowerCase() === lowercaseQuery
  );
}
