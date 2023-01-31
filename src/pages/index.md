---
title: '職務経歴書'
layout: '../layouts/blog.astro'

pdf_options:
  format: A4
  margin: 30mm 20mm
  displayHeaderFooter: true
  headerTemplate: |-
    <style>
      @import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

      section {
        margin: 0 auto;
        font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        font-size: 10px;
      }
    </style>
    <section>
      職務経歴書 - <span class="date"></span>
    </section>
  footerTemplate: |-
    <section>
      <div>
        Page <span class="pageNumber"></span>
        of <span class="totalPages"></span>
      </div>
    </section>
---

## 基本情報

| key | value |
|---|---|
| 氏名 | 三井 翔吾 (Mitsui Shogo) |
| 生年月日 | 1986/03/24 |
| 居住地 | 福岡県福岡市 |
| 最終学歴 | 九州大学芸術工学部 |

---

## 各種アカウント

[![GitHub](https://img.shields.io/badge/todays--mitsui-12100E?style=flat&logo=GitHub&logoColor=white)](https://github.com/todays-mitsui)
[![Twitter](https://img.shields.io/badge/@todays__mitsui-1DA1F2?style=flat&logo=Twitter&logoColor=white)](https://twitter.com/todays_mitsui)
[![Qiita](https://img.shields.io/badge/todays--mitsui-55C500?style=flat&logo=Qiita&logoColor=white)](https://qiita.com/todays-mitsui)
[![Blog:無駄と文化](https://img.shields.io/badge/blog:%E7%84%A1%E9%A7%84%E3%81%A8%E6%96%87%E5%8C%96-242527?style=flat&logoColor=white)](https://blog.mudatobunka.org/)
[![Facebook](https://img.shields.io/badge/mitsui.shogo-3B5998?style=flat&logo=Facebook&logoColor=white)](https://www.facebook.com/mitsui.shogo)

---

## 保有スキル

- JavaScript / TypeScript + Vue.js / React でのフロントエンド開発・設計
- WordPress 6.1 をベースにした Web サイト制作
- カスタム WordPress プラグイン開発
- Webサイトのフロントエンドコーディング (HTML, CSS, jQuery)
- Haskell によるパーサ実装

---

## 技術スタック

### 言語

![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=lightgrey)
![PHP](https://img.shields.io/badge/-PHP-7A86B8?style=flat&logo=php&logoColor=white)
![HTML](https://img.shields.io/badge/-HTML-E54C21?style=flat&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS-016CB4?style=flat&logo=CSS3&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=Python&logoColor=white)
![Haskell](https://img.shields.io/badge/-Haskell-9E358F?style=flat&logo=Haskell&logoColor=white)

### フレームワーク・その他

![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white)
![React](https://img.shields.io/badge/-React-45b8d8?style=flat&logo=react&logoColor=white)
![WordPress](https://img.shields.io/badge/-WordPress-0073AA?style=flat&logo=WordPress&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-46a2f1?style=flat&logo=docker&logoColor=white)

---

## 職務経歴詳細

### 株式会社あつまる (2014/01～現在)

CMS つき Web サイトの制作、またその基盤となる CMS の開発に従事しています。  
集客効果が高く安全で使いやすいサイトを短期間で構築できるようサイト基盤を継続的に開発・保守してきました。 
バックエンド (管理画面) 開発からフロントエンドコーディングまで一貫して担当しています。開発の主体としてサイト品質 (ユーザービリティ, セキュリティ, 表示速度) を担保する責任を追う立場にあります。

- **プロジェクト規模：**
  - 平均 3～5 人のチーム開発
- **役割：**
  - プログラマ - 要件整理, 実装, テスト, 保守
- **プロジェクト詳細：**
  - WordPress をベースとしたサイト制作 (管理画面カスタマイズを含む)
  - WordPress のブロックエディタに対応したカスタムブロックの開発
  - PHP での API 開発
  - 問い合わせフォームの構築・継続的改善
- **その他：**
  - Web サーバーのセットアップ・設定
  - ドメインのセットアップ・設定 (DNS 設定, 切り替え時の計画)
  - 2名の部下を持ち、チーム全体の案件管理
  - 外注パートナーとの連携を主導 (業務内容の指示, 進捗管理, 人月交渉)
  - システム領域の内部監査担当
  - 社内の業務効率化のための改善施策立案, ツールの内製

### 株式会社 西山酒造場 (2008/04～2013/12)

日本酒の製造・パッケージ管理・商品の発送・Web ショップの運営に従事していました。  
約2年事のジョブローテーションで各部署を経験、部署を跨いだ業務改善に携わりました。  
Web ショップの運営の傍ら受注処理の自動化システムを自作し運用していました。

- **プロジェクト規模：**
  - 個人開発
- **役割：**
  - 企画, 設計, 実装, 導入交渉, 継続的改善
- **プロジェクト詳細：**
  - 複数の Web ショップからの受注情報を統合し、在庫情報と突き合わせたうえで出荷日の決定。送り状データの作成までを自動化
  - Haskell+HTML+CSS で管理画面を作成し、担当者が少ない操作で受注処理を行えるよう支援
- **成果：**
  - 手作業での送り状データ作成に比べ処理能力が約7倍に向上し、ピーク時のスムーズな出荷対応に貢献

---

## 業務外活動

### 勉強会・カンファレンスでの登壇

- **PHPerKaigi 2022 - 20分トーク**
  - [サイト制作をぐるっと一周して分かった、WordPress が人類に提供しているもの](https://fortee.jp/phperkaigi-2022/proposal/dc2a455b-ad88-4f12-8cad-880028a0ab01)
- **PHP カンファレンス沖縄 2021 - 15分トーク, ライトニングトーク**
  - [たまには PHP で、パーサ(構文解析器)を書いていこう](https://fortee.jp/phpcon-okinawa-2021/proposal/4808604f-9a85-41f7-8cb8-2f8c299d3e09)
- **初夏のJavaScript祭 in メンバーズキャリア - ライトニングトーク**
  - [TypeScript に手を出したらエディタのコード補完が賢くなって驚いた](https://docs.google.com/presentation/d/1rBhoP1j6tIntvGYIzK04SVTZA0RgUYNKIcJ-eL1teg0/edit?usp=sharing)


### 勉強会の主催

- **JavaScriptつまみ食いハンズオン**
  - [JavaScriptつまみ食い部](https://cherrypick-js.connpass.com/)

自社エンジニア採用の母集団形成のために勉強会を主催していました。  
JavaScript 関連の流行りの技術についてハンズオンでちょっとかじる程度に学べるというコンセプトの勉強会です。

- **各回のテーマ**
  - 第1回 - Firebase
  - 第2回 - Nuxt.js (Vue.js)
  - 第3回 - TensorFlow.js
  - 第4回 - LT 大会
  - 第5回 - AR.js

### 技術記事投稿

- **個人ブログ**
  - [無駄と文化](https://blog.mudatobunka.org/)
- **Qiita**
  - [todays-mitsui の投稿した記事](https://qiita.com/todays-mitsui)
- **株式会社あつまる エンジニアブログ**
  - [id:todays_mitsui の投稿した記事](https://tech.atsu-maru.co.jp/archive/author/todays_mitsui)

### 個人開発活動

| プロジェクト名 | 使用言語 | 概要 | 関連リンク |
|---|---|---|---|
| [skeleton-validator](https://github.com/todays-mitsui/skeleton-validator) | ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | フォームの入力値をリアクティブに検証することに主眼を置いたミニマルな JavaScript バリデータです | |
| [mhatl.js](https://github.com/todays-mitsui/mhatl.js) | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=lightgrey) | MCMC (メトロポリス・ヘイスティング法) の動作原理を JavaScript でビジュアルに表現したデモです | [デモ](https://todays-mitsui.github.io/mhatl.js/) <br> [解説記事](https://tech.atsu-maru.co.jp/entry/2020/06/30/123646) |
| [mogul.js](https://github.com/todays-mitsui/mogul.js) | ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | 型無しラムダ計算の簡約をインタラクティブにステップ表示できる計算機です | [デモ](https://mogul-lang.mudatobunka.org/) <br> [解説記事](https://qiita.com/todays-mitsui/items/e28de509b9e1feceb6b4) | 
| [rhino.js](https://github.com/todays-mitsui/rhino.js) | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=lightgrey) | サイコロをテーマにしたメディアアートです。2次元物理演算エンジンを使用しています | [デモ](https://todays-mitsui.github.io/rhino.js/) |
| [lambda2ski](https://github.com/todays-mitsui/lambda2ski) | ![Haskell](https://img.shields.io/badge/-Haskell-9E358F?style=flat&logo=Haskell&logoColor=white) | 関数抽象(無名関数) を SKI コンビネータとして展開するトランスレータです | [解説記事](https://qiita.com/todays-mitsui/items/39ca5ee274213471796c) |

---

## 意欲・興味

- 自分で手を動かして何かを作ることが好きです。これまでに企画・設計をするなかでも自分で実装をして形になったものを見せることを重視してきました
- 作ったものに愛着をもって継続的に改善していくことに喜びを覚えます。プロダクトについて常に考え・常に学んでより良くしていきたいと思っています
- 不具合対応にアサインされた経験が多く、半ば炎上している状態から状況把握・原因究明して情報共有・意思決定を素早く進めることに自信があります
- これまでバックエンド・フロントエンドの一通りを独学で習得してきました。新しい技術への興味も強く、自ら情報収集して学習することが得意です

---

## 希望条件

- 福岡県福岡市在住です。オフィスが福岡県外にある場合は基本リモートでの勤務を希望します
  - とはいえ、同じチームの同僚と対面で働くことは好きです。定期的に出社する体制があると喜びます
- 自らプロダクトを作り、継続的に改善していけるような体制が好きです
