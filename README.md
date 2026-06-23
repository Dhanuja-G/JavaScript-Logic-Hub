# DSA Q1: ZigZag Conversion

## Problem

Convert the string `PAYPALISHIRING` into zigzag form using `numRows = 3`.

Pattern:

```text
P   A   H   N
A P L S I I G
Y   I   R
```

Output:

```text
PAHNAPLSIIGYIR
```

## Logic

The HTML page is used only for input and output. The actual ZigZag Conversion algorithm is written in JavaScript inside the `convert(s, numRows)` function.

The program creates rows using a JavaScript array. It moves down and up through the rows to create the zigzag pattern.

Movement:

```text
0 -> 1 -> 2 -> 1 -> 0
```

## Time Complexity

```text
O(n)
```

## Space Complexity

```text
O(n)
```

## How to Run

Open `zigzag.html` in a browser.

Enter a string and number of rows, then click `Convert`.

You can also check the default output in the browser console.

## Viva Answer

HTML is used only to take input and display output. The actual DSA logic is implemented in JavaScript using the `convert(s, numRows)` function.
