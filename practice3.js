// 두 단어가 애너그램인지 확인
// 문제 정의:
// 두 단어 A와 B가 주어졌을 때, A의 알파벳 순서를 바꾸어 B를 만들 수 있는지 확인하라. 가능하다면 true, 아니라면 false를 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 공백은 무시한다.
// 두 단어의 길이는 같아야 한다.
// 예시:

// 입력: "listen", "silent"
// 출력: true
// 입력: "hello", "bello"
// 출력: false

function isAnagram(a, b) {
    // 맵 자료형을 이용해 판별
    // 객체사용시 .keys 기타등등 이런거 써야해서 불편
    const hash = new Map();

    for (let x of a) {
        // a 의 각 요소로부터 각 알파벳 값이 이미 Map 에 있으면, 해당 프로퍼티의 값을 +1
        // 없으면 1로
        if (hash.has(x)) hash.set(x, hash.get(x) + 1);
        else hash.set(x, 1);
    }
    for (let x of b) {
        // b 의 각 요소로부터 Map에 해당하는 값이 없거나 0이면 애너그램이 아니므로 false 리턴
        // Map에 b의 각 요소 값이 있으면(a와 b에 겹치는 알파벳이 있으면) 알파벳 키 값 -1
        if (!hash.has(x) || hash.get(x) === 0) return false;
        hash.set(x, hash.get(x) - 1);
    }

    // 모두 통과하면(위에 return false)에 안걸렸으면 true 리턴
    return true;
}

// 테스트 코드
function testIsAnagram() {
    const testCases = [
        { input: ["listen", "silent"], expected: true },
        { input: ["hello", "bello"], expected: false },
        { input: ["anagram", "nagaram"], expected: true },
        { input: ["rat", "car"], expected: false },
    ];

    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = isAnagram(input[0], input[1]);
            if (result !== expected)
                throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 : 터미널에 node practice3.js 실행
testIsAnagram();
