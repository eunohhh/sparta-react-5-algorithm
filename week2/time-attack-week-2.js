// 문제 정의:
// 주어진 문자열 배열에서 가장 긴 팰린드롬을 찾아 반환하라. 만약 팰린드롬이 없다면 빈 문자열을 반환한다.

// 조건:
// 팰린드롬은 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때 동일한 문자열을 의미한다.
// 대소문자를 구분하지 않으며, 공백과 특수 문자는 무시한다.
// reverse 함수를 사용하지 않는다.

// 예시:

// 입력: ["abc","car","ada","racecar","cool"]
// 출력: "racecar" (길이가 같은 팰린드롬이 여러 개라면 사전 순서대로 가장 앞에 있는 것을 선택)

// 입력: ["notapalindrome","racecar"]
// 출력: "racecar"

// 입력: ["def","ghi"]
// 출력: "" (팰린드롬이 없으므로 빈 문자열 반환)

function findLongestPalindrome(words) {
    // 팰린드롬 판별 함수
    // 배웠던 것 그대로...
    const isPalindrome = (str) => {
        const sanitizedString = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

        let left = 0;
        let right = sanitizedString.length - 1;

        while (left < right) {
            if (sanitizedString[left] !== sanitizedString[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    // 팰린드롬만 필터 한뒤 정렬
    // 정렬 방법은 길이가 다르면 내림차순
    // 길이가 같으면 사전순
    const filtered = words
        .filter((word) => isPalindrome(word))
        .sort((a, b) => {
            if (a.length !== b.length) return b.length - a.length;
            return a.localeCompare(b);
        });

    return filtered.length > 0 ? filtered[0] : "";
}

// 테스트 코드
function testFindLongestPalindrome() {
    const testCases = [
        {
            input: ["abc", "car", "ada", "racecar", "cool"],
            expected: "racecar",
        },
        { input: ["notapalindrome", "racecar"], expected: "racecar" },
        { input: ["def", "ghi"], expected: "" },
        {
            input: ["level", "noon", "radar", "12321", "abcde"],
            expected: "12321",
        },
        { input: ["ab", "ba", "abc", "aba"], expected: "aba" },
        {
            input: ["A man, a plan, a canal, Panama", "racecar", "madam"],
            expected: "A man, a plan, a canal, Panama",
        },
        { input: ["", "a", "bb", "ccc", "dddd", "eeeee"], expected: "eeeee" }, // 빈 문자열 포함
        { input: ["madamimadam", "racecar", "a"], expected: "madamimadam" }, // 여러 팰린드롬 중 가장 긴 것
        {
            input: ["aibohphobia", "detartrated", "deified"],
            expected: "aibohphobia",
        },
        { input: ["nope", "not a palindrome", "definitely not"], expected: "" }, // 팰린드롬이 없는 경우
    ];

    testCases.forEach(({ input, expected }, index) => {
        try {
            const result = findLongestPalindrome(input);
            if (result !== expected)
                throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 node week2/time-attack-week-2-normal.js
testFindLongestPalindrome();
