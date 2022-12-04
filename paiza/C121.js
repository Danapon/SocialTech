process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
let line = lines[0].split(' ');

const mealCount = line[0];

const caroryLimit = line[1];

let top10 = 0;

let cumulative = 0;

for (let i = 1; i < lines.length; i++) {

    const splitLine = lines[i].split(' ');

    const rank = splitLine[0];

    const carory = splitLine[1];

    cumulative = cumulative + Number(carory);

    if (cumulative > caroryLimit) {

        console.log(top10 + '\\n');
        break;

    }

    if (rank >= 1 && rank <= 10) {

        top10++;

    }

    if (cumulative <= caroryLimit && top10 === 10) {

        console.log('Yes\\n');
        break;

    }

}
    
});
