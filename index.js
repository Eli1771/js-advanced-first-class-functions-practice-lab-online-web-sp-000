// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const results = [...drivers];
  results.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return results;
}

function driversByName(drivers) {
  const results = [...drivers];
  results.sort(function(a, b) {
    return b.name - a.name;
  });
  return results;
}

function totalRevenue(drivers) {
  
}

function averageRevenue(drivers) {
  
}