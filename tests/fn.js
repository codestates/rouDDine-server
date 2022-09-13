module.exports = {
        add : (num1, num2) => num1 + num2,
        createUser :  name => {
            console.log("실제 유저가 생성되었습니다.")
            return {
                name,
            };
        },
        connectUserDb : () =>{
            return new promises(res =>{
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
            return new promise(res => {
                setTimeout(() => {
                    res();
                }, 500);
            })
        }
}
