function getInput() {
    try {

        let values = prompt('Please enter a sequence of 3 numbers separate by spaces').trim().split(' ');
        return isInputValid(values);

    } catch (e) {

        alert(e.message);
        window.location.reload();
    }
    
}

function isInputValid(data) {

    let isValid = data.filter(v => !Number(v));
    if (data.length < 3) {

        throw new Error('Invalid number of values!!!, Please enter min 3 values');

    }else if(isValid.length > 0) {

        throw new Error('Invalid number');

    }else {
    
        return data;
    }

}

function bestSequence(getSequence) {
    
    const seq = getSequence()
    const result = [];
    let i = 0;

    // I I F E
    (function takeSeq() {
        if (seq.length < 3) {
            return;
        }

        result.push({
             index: i, 
             sequence: seq.slice(0, 3), 
             sum: seq.slice(0, 3).reduce((a, b) => Number(a) + Number(b))
        });
        
        seq.shift();
        i++;

        return takeSeq();
    })();

    
    return result.sort((a, b) => {
        return a.sum - b.sum
    }).pop();

}

const bestResult = bestSequence(getInput);
alert(`{sequence : [${bestResult.sequence}], sum: ${bestResult.sum}}`);
