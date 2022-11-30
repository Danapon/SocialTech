process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    
    // 最初の入力値をスペース区切りで配列に格納
    let num = lines[0].split(' '); 
    
    // 順位(カウント用)
    let top10 = 0;

    // 各入力行の格納の配列
    let splitLine = [];
    
    // カロリー累計
    let cumulative = 0;
    
    for (let i = 0; i < lines.length; i++) {
        
        splitLine = lines[i].split(' ');
        
        if (i !== 0) {
            
            // トップ10以内の料理のみインクリメント
            if (splitLine[0] >= 1 && splitLine[0] <= 10) {
                
                top10++;
                
            }
            
            cumulative = cumulative + Number(splitLine[1]);
            
            // console.log(cumulative);
            
            // console.log(top10);
            
            // カロリー累計が上限を超えずに10位までの料理を食べ終わった場合
            if (cumulative < num[1] && top10 === 10) {
                
                console.log('Yes\n');
                break;
                
            }
            
            // カロリー累計が上限を超えた場合
            if (cumulative >= num[1]) {
                
                console.log(top10 + '\n');
                break;
                
            }
            
        }
        
    }
    
});