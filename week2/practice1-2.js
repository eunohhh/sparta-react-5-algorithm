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
    // 한글자면 그냥 리턴
    if (s.length < 2) return "";
    // 반복되는 부분 문자열 담을 변수 만들기
    let repeatingStr = "";

    // 이중 for 문 돌고 나서 최종적으로 남은 repeatingStr 이 answer
    for (let i = 1; i < s.length; i++) {
        const temp = {};
        // i 만큼 줄이면서, <= 으로
        for (let j = 0; j <= s.length - i; j++) {
            // 반복일 경우
            if (temp[s.substr(j, i)]) {
                repeatingStr = s.substr(j, i);
                // 반복 아닐 경우
            } else {
                temp[s.substr(j, i)] = 1;
            }
            // console.log(temp);
        }
    }
    return repeatingStr ? repeatingStr : "";
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

// let temp = {};
// let temp2 = [];

// for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (temp[char]) {
//         temp[char]++;
//     } else {
//         temp[char] = 1;
//     }
// }

// for (const char in temp) {
//     if (temp[char] > 1) {
//         if (temp2.indexOf(char) === -1) {
//             temp2.push(char);
//             temp[char]--;
//         } else {
//             // 있을 경우에
//             const idx = [...s].indexOf(char);
//             temp2.splice(idx, 1);
//             temp2.push(char);
//             temp[char]--;
//         }
//     }
// }

// console.log(temp, temp2);
