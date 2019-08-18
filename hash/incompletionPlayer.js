function solution(participant, completion) {
    var compareCompletion = participant
    completion.map((index) => {
        if(compareCompletion.indexOf(index)!==-1) {
            compareCompletion.splice(compareCompletion.indexOf(index),1)
        }
        
    })
    console.log(compareCompletion[0])
    return compareCompletion[0];
}

solution(["leo", "kiki", "eden"],["eden", "kiki"])
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
