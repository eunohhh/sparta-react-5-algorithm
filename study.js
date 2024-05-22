function solution(a, b, n) {
    let count = 0;

    if (n < a) return 0;

    while (n >= a) {
        const get = Math.floor(n / a) * b;
        const minus = n % a;

        count += get;
        n = get + minus;
    }

    return count;
}

const case1 = [2, 1, 20];
const case2 = [3, 1, 20];

solution(...case2);
