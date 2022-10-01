const fn = require('./scripts/fn');

let user;

beforeAll(async ()=>{
    user = await fn.connectUserDb();
})
afterAll(()=>{
    return fn.disconnectDb();
})

test("이름은 Mike", () =>{
    expect(user.name).toBe("Mike")
})
test("나이는 30", () =>{
    expect(user.age).toBe(30)
})
test("성별은 남성", () =>{
    expect(user.gender).toBe("male")
})

// jest.mock("./scripts/fn")
// fn.createUser.mockReturnValue({name : "Mike", email : "asdf@gmail.com", social : null})

// test("유저를 만든다.", () =>{
//     const user = fn.createUser("Mike", "asdf@gmail.com")
//     expect(user.name).toBe("Mike");
//     expect(user.email).toBe("asdf@gmail.com");
//     expect(user.social).toBe(null);
// })
