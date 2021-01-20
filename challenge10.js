const testInput1 = 
`16
10
15
5
1
11
7
19
6
12
4`;

const testInput2 = 
`28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const realInput = 
`47
99
115
65
10
55
19
73
80
100
71
110
64
135
49
3
1
98
132
2
38
118
66
116
104
87
79
114
40
37
44
97
4
140
60
86
56
133
7
146
85
111
134
53
121
77
117
21
12
81
145
129
107
93
22
48
11
54
92
78
67
20
138
125
57
96
26
147
124
34
74
143
13
28
126
50
29
70
39
63
41
91
32
84
144
27
139
33
88
72
23
103
16`;

class AdapterSet {
    constructor({input}) {
        this.adapters = input.split(/\r?\n/g).map(x => parseInt(x));
        this.adapters.sort((a, b) => a - b);
        this.adapters.push(this.adapters[this.adapters.length - 1] + 3);
        this.adapters.unshift(0);
    }

    get diffDist() {
        let res = new Array(4).fill(0);
        // index 0 has value 0.  first adapter is index 1.
        for (let i = 1; i < this.adapters.length; i++) {
            let a1 = this.adapters[i - 1];
            let a2 = this.adapters[i];
            if (this.validDiff({adapter1: a1, adapter2: a2, tolerance: 3})) {
                res[a2 - a1] += 1;
            } else {
                throw new Error(`adapter out of tolerance at index ${i}`);
            }
        }
        return res;
    }
    
    get differences() {
        let res = [0];
        for (let i = 1; i < this.adapters.length; i++) {
            res.push(this.adapters[i] - this.adapters[i-1]); 
        }
        return res;
    }
    
    validDiff({adapter1, adapter2, tolerance}) {
        return Math.abs(adapter2 - adapter1) > tolerance ? false : true;
    }

    
    // relies on the fact that there are no gaps of 2 anywhere in the input.
    // also relies on start input of 0 and final diff of 3.
    // assumes a tolerance of 3 jolts between adapters.
    // finally, there are no runs of 1-gap adapters >= 5.
    // then:
    // a string of 2 gaps of 1 doubles the number of permutations.
    // a string of 3 gaps of 1 doubles twice (*4)
    // a string of 4 gaps of 1 multiplies permutations by 7.
    getArrangements() {
        let diffString = this.differences.join('');
        let fours = [...diffString.matchAll(/(?<=[03])1111(?=[03])/g)].length;
        let threes = [...diffString.matchAll(/(?<=[03])111(?=[03])/g)].length;
        let twos = [...diffString.matchAll(/(?<=[03])11(?=[03])/g)].length;
        return 7**fours * 4**threes * 2**twos;
    }
}

const set1 = new AdapterSet({input: testInput1});
const set2 = new AdapterSet({input: testInput2});
const set3 = new AdapterSet({input: realInput});
console.log(set1.getArrangements());
console.log(set3.getArrangements());
console.log();