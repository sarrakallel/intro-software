function splitParity(x) {
return [[...x.filter(e => e%2 == 0)],
[...x.filter(e => e%2 == 1)]];
}
