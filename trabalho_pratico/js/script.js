

function getFullName(){
    const globalNames = ['Julio Cesar', 'Valéria Regina', 'Daniel Vitor', 'João Felipe']
    function getGroupMembers(names){
        const members = names.sort((a, b) => {
            return a.localeCompare(b)
        })
        console.log(members)
    }
    
    getGroupMembers(globalNames);
}

function onlyNumbersFrom(value){
    return value
    .split('')
    .filter((char) => {
        return Number(char);
    })
    .join('');
}
