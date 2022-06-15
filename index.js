function superbowlWin(record) {
    const var1 = record.find(element => element.result ==='W'); 
    if (var1 && var1.result === 'W'){
    return var1.year}
    return undefined
}
