function findMatching(drivers,name){
    const result = drivers.filter((driver) => driver.toUpperCase() == name.toUpperCase());

    return result
}
    
function fuzzyMatch(drivers, match){
    const results = drivers.filter((driver)=> driver.toUpperCase().substring(0,2) === match.toUpperCase())
    return results
}

function matchName(drivers, name){
    
const result = drivers.filter(driver => driver.name === name);

return result
}