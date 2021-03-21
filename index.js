
function superbowlWin(record){
    for (const outcome of record){
        if (outcome.result == 'W'){
            return outcome.year;
        }
    }
    return;
}
