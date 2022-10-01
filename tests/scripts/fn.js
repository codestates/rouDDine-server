const fn = {
        add : (num1, num2) => num1 + num2,
        createUser :  (name, email) => {
            console.log("실제 유저가 생성되었습니다.")
            return {
                name, 
                email,
                social : null
            };
        },
        connectUserDb : () =>{
            return new Promise(res =>{
                setTimeout(()=>{
                    res({
                            name : "Mike",
                            age : 30,
                            gender : "male",
                        });
                }, 500);
            });
        },
        disconnectDb : () =>{
            return new Promise(res => {
                setTimeout(() => {
                    res();
                }, 500);
            })
        },
}

module.exports = fn;