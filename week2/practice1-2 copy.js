// 문제 정의:
// 주어진 문자열에서 가장 긴 반복되는 부분 문자열을 찾으시오. 반복되는 부분 문자열이 없다면 빈 문자열을 반환하시오.

// 예시:

// 입력: "mississippi"
// 출력: "issi"

// 입력: "abcdefgabcdefg"
// 출력: "abcdefg"

// 입력: "xyzxyzxyz"
// 출력: "xyzxyz"

// 입력: "abcde"
// 출력: ""

function longestRepeatingSubstring(s) {
    // 문제 풀이
    // const set = new Set(s);
    // const join = [...set].join("");

    // if (set === join) return "";

    // for (const char of s) {
    //     if (temp[char]) {
    //         temp[char]++;
    //     } else {
    //         temp[char] = 1;
    //     }
    // }
    let temp = {};
    let temp2 = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (temp[char]) {
            temp[char]++;
            temp2.push(char);
        } else {
            temp[char] = 1;
        }
    }

    // for(const char in temp){
    //     if(char > 1){

    //     }
    // }

    // let temp2 = "";
    // let temp3 = [];
    // let answer = "";
    // [...s].forEach((e, i, a) => {
    //     // temp2 = temp2 + e;
    //     // const next = a[i + 1];
    //     const index = a.indexOf(e);
    //     if (index !== -1) {
    //         temp3.push(index);

    //         // if (temp2[temp2.length - 1] !== next) {
    //         //     answer = answer + next;
    //         // }
    //     }
    // });

    // const filtered = temp3.filter((e) => e !== 0);
    // const min = Math.min(...filtered);
    // const max = Math.max(...filtered);

    // const sliced = [...s].slice(min, max + min + 1);

    console.log(temp, temp2);

    return answer;

    return answer;
}

// 테스트 코드
function testLongestRepeatingSubstring() {
    const testCases = [
        { input: "banana", expected: "ana" },
        { input: "abcdef", expected: "" },
        { input: "abcabc", expected: "abc" },
        { input: "aaaa", expected: "aaa" },
        { input: "abababab", expected: "ababab" },
        { input: "mississippi", expected: "issi" },
        { input: "abcdefgabcdefg", expected: "abcdefg" },
        { input: "xyzxyzxyz", expected: "xyzxyz" },
        { input: "abcde", expected: "" },
        { input: "abracadabra", expected: "abra" },
    ];

    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = longestRepeatingSubstring(input);
            if (result !== expected)
                throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출
testLongestRepeatingSubstring();
