export function getData(): Promise<any[]> {
    return new Promise((r) => r([1, 2, 3]));
}
