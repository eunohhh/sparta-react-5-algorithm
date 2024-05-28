// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
    // 공백 단위로 잘라서 배열에 저장
    const splitted = s.split(" ");
    // 저장한 배열로 map 돌려서, 각 아이템 배열화해서 반전시킨뒤 다시 스트링으로(join)
    const mapped = splitted.map((text) => [...text].reverse().join(""));
    // map 의 결과를 공백으로 구분하여 조인
    const joined = mapped.join(" ");

    return joined;
}

function testReverseEachWord() {
    const testCases = [
        { input: "the sky is blue", expected: "eht yks si eulb" },
        { input: "hello world", expected: "olleh dlrow" },
        { input: "a b c d", expected: "a b c d" },
        { input: "Palindrome", expected: "emordnilaP" },
        { input: "I love coding", expected: "I evol gnidoc" },
    ];

    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = reverseEachWord(input);
            if (result !== expected)
                throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출
testReverseEachWord();
