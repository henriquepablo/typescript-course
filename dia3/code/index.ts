// union type permite aceitar mais de um tipo. Exemplo:
/*
    function userInput(a:number | string, b:number | string) {
        let result;
        if (typeof a === 'string' &&  typeof b === 'string') {
            result = a + b;
        } 
        else {
            result = a.toString() + b.toString();
        }
        return result;
    }
*/


function userInput(a:number | string, b:number | string) {
    let result;
    if (typeof a === 'string' &&  typeof b === 'string') {
        result = a + b;
    } 
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
