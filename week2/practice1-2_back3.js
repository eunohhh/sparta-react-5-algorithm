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
    let temp = {};
    let temp2 = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (temp[char]) {
            temp[char]++;
        } else {
            temp[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (temp[char] > 1) {
            if (temp2.indexOf(char) === -1) {
                temp2.push(char);
                temp[char]--;
            } else {
                // 있을 경우에
                const idx = [...s].indexOf(char);
                temp2.splice(idx, 1);
                temp2.push(char);
                temp[char]--;
            }
        }
    }

    console.log(temp, temp2);

    // let result = "";
    // for (let i = 0; i < s.length - 1; i++) {
    //     for (let j = i + 1; j < s.length; j++) {
    //         if (s[i] !== s[j]) {
    //             continue;
    //         } else {
    //             let repeating = "";
    //             let k = 0;
    //             while (s[i + k] === s[j + k]) {
    //                 repeating += s[i + k];
    //                 k++;
    //             }
    //             if (repeating.length > result.length) {
    //                 result = repeating;
    //             }
    //         }
    //     }
    // }
    // return result;

    // 문자열의 마지막 문자를 제외하고 반복
    // i번째 문자 뒤의 문자열을 한 문자씩 비교 반복
    //
    // i,j번째 문자가 같을 경우, 또 반복문을 통해 i,j의 뒤에 있는 문자들을 다른 문자가 나올 때까지 비교하여, 겹치는 문자를 새로운 변수에 넣어준다.
    // 해당 문자가 result의 길이보다 길 경우, result는 해당 문자가 된다.
    // 반복문을 다 돌았다면 result는 가장 긴 반복되는 부분 문자열이기 때문에 result를 return 해준다.

    let result = "";

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let k = 0;
            while (
                i + k < s.length &&
                j + k < s.length &&
                s[i + k] === s[j + k]
            ) {
                k++;
            }
            if (k > result.length) {
                result = s.slice(i, i + k);
            }
        }
    }

    return result;
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
