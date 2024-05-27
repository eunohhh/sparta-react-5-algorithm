// 문제 정의:
// 주어진 두 문자열에서 첫 번째 문자열이 두 번째 문자열에 포함되는지 여부를 확인하시오. 포함된다면 true, 포함되지 않는다면 false를 반환하시오.
// 단, 'include' 함수는 사용하지 마시오.

// 예시:
// 입력: "abc", "aabcc"
// 출력: true
// 입력: "abc", "def"
// 출력: false

function isSubstring(s1, s2) {
    // 문제 풀이
    // 첫번째 문자가 두번째 문자보다 길이가 길 경우 false
    if (s1.length > s2.length) return false;
    // 두번째 문자열을 순회
    for (let i = 0; i <= s2.length - s1.length; i++) {
        // 첫번째 문자열과 첫번째 문자열 길이 만큼 두번째 문자열을 비교를 하고
        // 일치하면 true 함수를 끝냅니다.
        if (s1 === s2.slice(i, i + s1.length)) return true;
        // 일치하지 않으면 for loop 계속 돌린다.(문자열 길이가 일치하지 않을 경우...)
    }
    // 트루에 걸리지 않았다면 false 리턴
    return false;
}

// 테스트 코드
function testIsSubstring() {
    const testCases = [
        { input: ["abc", "aabcc"], expected: true },
        { input: ["abc", "def"], expected: false },
        { input: ["hello", "hello world"], expected: true },
        { input: ["test", "testing"], expected: true },
        { input: ["apple", "pineapple"], expected: true },
        { input: ["", "anystring"], expected: true }, // 빈 문자열은 항상 포함됨
        { input: ["anystring", ""], expected: false }, // 어떤 문자열도 빈 문자열에 포함되지 않음
        { input: ["a", "a"], expected: true }, // 동일한 한 글자 문자열
        { input: ["longerstring", "short"], expected: false }, // 첫 번째 문자열이 더 긴 경우
        { input: ["abc", "ababc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 중간에 포함되는 경우
        { input: ["abc", "abcabcabc"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 여러 번 포함되는 경우
        { input: ["hello", "ohelloohello"], expected: true }, // 첫 번째 문자열이 두 번째 문자열의 끝과 시작에 걸쳐 있는 경우
        { input: ["abc", "xyzxyz"], expected: false }, // 완전히 다른 문자열
        { input: ["repeat", "repeatrepeatrepeat"], expected: true }, // 첫 번째 문자열이 두 번째 문자열에 반복되는 경우
    ];

    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = isSubstring(input[0], input[1]);
            if (result !== expected)
                throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출
testIsSubstring();
