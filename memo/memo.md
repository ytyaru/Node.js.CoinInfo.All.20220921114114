coininfoの全コイン種別を調べる

　24種あった。

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

　[前回][]のやつに`network`の設定を追加した。`coininfo`で`MONA`を指定すると返される。

[]:

```sh
vim index.js
```
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

# 実行

```sh
node index.js
```

# 結果

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

　出力された。でもオブジェクト。名前の一覧だけ欲しいのだが。

## 試行３

　`coininfo('コイン名')`のうち引数で渡すコイン名一覧がほしかった。なのに`coininfo`にはそれを返すプロパティやメソッドがない。そんなバカなと思ったのでコードを読んでみたら、内部でもってるだけで外部に渡さない設計だった……。

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

　これを外部にも公開してほしかったなぁ……。

　以下のようにしても`undefined`。参照できない。

```javascript
const coininfo = require('coininfo');
console.log('coininfo.supportedCoins:', coininfo.supportedCoins)
```

# 情報源

* [coininfo][]
* [monacoind 不要の faucet を作ってみた (骨格だけ)][]
	* [app.js][]

[coininfo]:https://github.com/cryptocoinjs/coininfo
[monacoind 不要の faucet を作ってみた (骨格だけ)]:https://qiita.com/cryptcoin-junkey/items/fc6d62c22d4444d98c45
[app.js]:https://github.com/monaco-ex/sample-sending-monacoin/blob/master/app.js

