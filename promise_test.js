function getApiData(){
    return new  Promise(function(resolve, reject){

        const x = 200;

        const ApiData = {
            "login" : "msiam18@gmail.com",
            "name" : "Abu Sayed"
        };

        try{
            if(x === 200){
                setTimeout(async () => {
                    await resolve(ApiData);
                },0);
            } else if(x !== 200){
                setTimeout(async ()=>{
                    await reject("ERROR FROM NOT 200");
                },0);
            }
        } catch (e){
            setTimeout(()=>{
                reject("ERROR FROM CATCH");
            },1000);
        }
    });
}

const userName = "sayed123";

function createUser(){
    return new Promise((function (resolve, reject){
        console.log("CREATE USER INITIATING");
        // console.log(req.body.name);
        // resolve("DONE");
        const ApiData = {
            "login" : "msiam18@gmail.com",
            "name" : "Abu Sayed"
        };

        getUserExist().then((result) => {
            console.log("result is: "+result);
            resolve(ApiData);
        }).catch((e) => {
            console.log("error is: "+e);
            reject({
                "message" : "Something Error",
            });
        });

    }));
}

function getUserExist(){
    return new Promise((function (resolve, reject){
        console.log("CHECK USER EXIST INITIATING");
        if(userName === "sayed123"){
            resolve("true");
        }
        else{
            reject("false");
        }
    }));
}

/*
getApiData().then((data) => {
    console.log(data.login);
    console.log("if success name: "+data.name);
}).catch((e)=>{
    console.log("if error "+e);
});*/

module.exports = {
    createUser : createUser
}