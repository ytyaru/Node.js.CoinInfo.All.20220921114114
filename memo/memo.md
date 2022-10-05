coininfoの全コイン種別を調べる

　コードを読んだり書いたりして調べた。

<!-- more -->

# ブツ

* [リポジトリ][]

[リポジトリ]:https://github.com/ytyaru/Node.js.CoinInfo.All.20220921114114

## インストール＆実行

```sh
NAME='Node.js.CoinInfo.All.20220921114114'
git clone https://github.com/ytyaru/$NAME
cd $NAME
npm install
node index.js
```

# プロジェクト作成

```sh
NAME=hello-coininfo
mkdir $NAME
cd $NAME
npm init -y
npm i tiny-secp256k1 ecpair coininfo bitcoinjs-lib
```
```sh
node index.js
```

# ソースコード作成

```sh
vim index.js
```

# 追記

　コメントで[Object.keys][]を教えていただきました。おかげさまで綺麗なコードが書けました。ありがとうございます。

[Object.keys]:https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

## コード

```javascript
const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

const names = Object.keys(coininfo)
const units = Object.values(coininfo).map(coin=>coin.main.unit)
console.assert(names.length === units.length)
for (let i=0; i<names.length; i++) {
    console.log(`${units[i]}\t${names[i]}`)
}
```

## 実行結果

```sh
BCH	bitcoincash
BLK	blackcoin
BTC	bitcoin
BTG	bitcoin gold
RYO	c0ban
CITY	citycoin
DASH	dash
DNR	denarius
DCR	decred
DGB	digibyte
DOGE	dogecoin
GRS	groestlcoin
LTC	litecoin
VIA	viacoin
MONA	monacoin
NBT	nubits
NMC	namecoin
PPC	peercoin
QTUM	qtum
RVN	ravencoin
RDD	reddcoin
VTC	vertcoin
x42	x42
ZEC	zcash
```

　ソートしたほうがいいのでは？　と一瞬おもったが、デフォルト順で`names`と`units`の順序が対応しているのでソートしないほうがいい。もし`names`と`units`が各自ソートしてしまったら対応順が狂ってしまう。たとえば`units`の5つ目にある`RYO`とか。これは`c0ban`という名前と対応しているはず。でも`RYO`のほうは辞書順でソートすると（`RVN`の下）にいってしまう。なのでソートしないまま使った。

<details><summary>旧コード</summary>

　上のコードと比べると、どれだけ残念なことをしていたかよくわかる。

　じつは下のコードを書いているとき「なんかもっといい方法ないのか」と思っていたものの、具体的にどうすればいいかわからず。JavaScriptの知識が足りていないことが露呈。コメントで教えていただき勉強できた。感謝！

```javascript
const tinysecp = require('tiny-secp256k1');
const coininfo = require('coininfo');
const ecpair = require('ecpair');
const bitcoin = require('bitcoinjs-lib');

//console.log('coininfo:', coininfo) // 成功だがオブジェクト。ここからunitだけを取得したい。
//console.log('coininfo:', coininfo.keys()) // エラー
//console.log('coininfo:', coininfo().keys()) // エラー
//console.log('coininfo.supportedCoins:', coininfo.supportedCoins) // エラー

console.log(coininfo.bitcoincash.main.unit)
console.log(coininfo.blackcoin.main.unit)
console.log(coininfo.bitcoin.main.unit)
console.log(coininfo['bitcoin gold'].main.unit)
console.log(coininfo.c0ban.main.unit)
console.log(coininfo.citycoin.main.unit)
console.log(coininfo.dash.main.unit)
console.log(coininfo.denarius.main.unit)
console.log(coininfo.decred.main.unit)
console.log(coininfo.digibyte.main.unit)
console.log(coininfo.dogecoin.main.unit)
console.log(coininfo.groestlcoin.main.unit)
console.log(coininfo.litecoin.main.unit)
console.log(coininfo.viacoin.main.unit)
console.log(coininfo.monacoin.main.unit)
console.log(coininfo.nubits.main.unit)
console.log(coininfo.namecoin.main.unit)
console.log(coininfo.peercoin.main.unit)
console.log(coininfo.qtum.main.unit)
console.log(coininfo.ravencoin.main.unit)
console.log(coininfo.reddcoin.main.unit)
console.log(coininfo.vertcoin.main.unit)
console.log(coininfo.x42.main.unit)
console.log(coininfo.zcash.main.unit)

console.log('------------------------------------')

console.log(coininfo.bitcoincash.main.name)
console.log(coininfo.blackcoin.main.name)
console.log(coininfo.bitcoin.main.name)
console.log(coininfo['bitcoin gold'].main.name)
console.log(coininfo.c0ban.main.name)
console.log(coininfo.citycoin.main.name)
console.log(coininfo.dash.main.name)
console.log(coininfo.denarius.main.name)
console.log(coininfo.decred.main.name)
console.log(coininfo.digibyte.main.name)
console.log(coininfo.dogecoin.main.name)
console.log(coininfo.groestlcoin.main.name)
console.log(coininfo.litecoin.main.name)
console.log(coininfo.viacoin.main.name)
console.log(coininfo.monacoin.main.name)
console.log(coininfo.nubits.main.name)
console.log(coininfo.namecoin.main.name)
console.log(coininfo.peercoin.main.name)
console.log(coininfo.qtum.main.name)
console.log(coininfo.ravencoin.main.name)
console.log(coininfo.reddcoin.main.name)
console.log(coininfo.vertcoin.main.name)
console.log(coininfo.x42.main.name)
console.log(coininfo.zcash.main.name)
```

## 結果

```sh
BCH
BLK
BTC
BTG
RYO
CITY
DASH
DNR
DCR
DGB
DOGE
GRS
LTC
VIA
MONA
NBT
NMC
PPC
QTUM
RVN
RDD
VTC
x42
ZEC
------------------------------------
BitcoinCash
BlackCoin
Bitcoin
Bitcoin Gold
c0ban
CityCoin
Dash
Denarius
Decred
DigiByte
Dogecoin
Groestlcoin
Litecoin
Viacoin
Monacoin
NuBits
Namecoin
Peercoin
Qtum
Ravencoin
ReddCoin
Vertcoin
x42
Zcash
```

</details>

# 実行

```sh
node index.js
```

　とりあえずこれを`unit.txt`, `name.txt`にそれぞれ保存した。

　そしてその２つをくっつけてTSVにした。

```sh
paste -d '\t' unit.txt name.txt > coins.tsv
```

単位|名前
----|----
`BCH`|`BitcoinCash`
`BLK`|`BlackCoin`
`BTC`|`Bitcoin`
`BTG`|`Bitcoin Gold`
`RYO`|`c0ban`
`CITY`|`CityCoin`
`DASH`|`Dash`
`DNR`|`Denarius`
`DCR`|`Decred`
`DGB`|`DigiByte`
`DOGE`|`Dogecoin`
`GRS`|`Groestlcoin`
`LTC`|`Litecoin`
`VIA`|`Viacoin`
`MONA`|`Monacoin`
`NBT`|`NuBits`
`NMC`|`Namecoin`
`PPC`|`Peercoin`
`QTUM`|`Qtum`
`RVN`|`Ravencoin`
`RDD`|`ReddCoin`
`VTC`|`Vertcoin`
`x42`|`x42`
`ZEC`|`Zcash`

　ビットコインと名のつくものが３つもある。`BTC`がビットコインだと思われる。

　私が知っているのはせいぜいモナコイン、ビットコイン、ライトコインくらい。

　世の中には数万種類もの暗号通貨があるらしい。

# 試行

　`coininfo('コイン名')`のうち引数で渡すコイン名一覧がほしかった。でもREADMEにはそれらしいメソッドやプロパティは書いてなかった。なので色々試した。

## 試行１

```javascript
const coininfo = require('coininfo');
```

```javascript
console.log(coininfo.keys())
```

```javascript
console.log(coininfo().keys())
```

　エラー。

## 試行２


```javascript
console.log(coininfo))
```

　色々出た。でもコインの名だけ欲しい。

## 試行３

　`coininfo('コイン名')`のうち引数で渡すコイン名一覧がほしかった。なのに`coininfo`にはそれを返すプロパティやメソッドがない。READMEにも書いてない。そんなバカなと思ってコードを読んでみたら、内部でもってるだけで外部に渡さない設計だった……。

* [coininfo.js][]

[coininfo.js]:https://github.com/cryptocoinjs/coininfo/blob/master/lib/coininfo.js

　`supportedCoins`という変数でオブジェクトとして持っている。

```javascript
...
var supportedCoins = {}
...
  supportedCoins[unit] = coin.main
  supportedCoins[name] = coin.main
...
```

　`supportedCoins`を外部にも公開してほしかった。

　以下のようにしても`undefined`。参照できない。

```javascript
const coininfo = require('coininfo');
console.log('coininfo.supportedCoins:', coininfo.supportedCoins)
```

## 試行４

　コメントで[Object.keys][]を教えていただき綺麗なコードで書けました。ありがとうございます。

# 情報源

* [coininfo][]
* [monacoind 不要の faucet を作ってみた (骨格だけ)][]
	* [app.js][]

[coininfo]:https://github.com/cryptocoinjs/coininfo
[monacoind 不要の faucet を作ってみた (骨格だけ)]:https://qiita.com/cryptcoin-junkey/items/fc6d62c22d4444d98c45
[app.js]:https://github.com/monaco-ex/sample-sending-monacoin/blob/master/app.js

