const mockFn1 = jest.fn();
const mockFn2 = jest.fn(num => num +1);


function forEachAdd1(arr){
    arr.forEach(num => {
        mockFn1(num+1)
    })
}

forEachAdd1([10,20,30])


test("함수 호출은 3번 됩니다", () =>{
    expect(mockFn1.mock.calls.length).toBe(3);
});

test("전달된 값은 11, 21, 31 입니다", () =>{
    expect(mockFn1.mock.calls[0][0]).toBe(11);
    expect(mockFn1.mock.calls[1][0]).toBe(21);
    expect(mockFn1.mock.calls[2][0]).toBe(31);
});


mockFn2(10);
mockFn2(20);
mockFn2(30);

test("10에서 1 증가한 값을 반환합니다.", () =>{
    expect(mockFn2.mock.results[0].value).toBe(11);
})
test("20에서 1 증가한 값을 반환합니다.", () =>{
    expect(mockFn2.mock.results[1].value).toBe(21);
})

test("30에서 1 증가한 값을 반환합니다.", () =>{
    expect(mockFn2.mock.results[2].value).toBe(31);
})

// [1,2,3,4,5].filter(num => mockFn3(num));

// mockFn3.mockReturnValueOnce(true);
// mockFn3.mockReturnValueOnce(false);
// mockFn3.mockReturnValueOnce(true);
// mockFn3.mockReturnValue(false);
// mockFn3.mockReturnValue(true);

// mockFn3();
// mockFn3();
// mockFn3();
// mockFn3();

// test("홀수는 1,3,5", ()=>{
//     expect(result).toStrictEqual([1,3,5]);
// });

