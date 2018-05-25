function run(){
    let p = new Promise(function(resolve,reject){
        resolve('555')
    })

    return p;
}

run().then(
    function(data){
        console.log('1:',data);
        return Promise.resolve(data);
    }
).then(
    function(data){
        console.log('2:',data);
    }
)