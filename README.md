# 柏原けやき苑 - 未来介護ガジェット研究所

シュタインズ・ゲートの「未来ガジェット研究所」風にデザインされた柏原けやき苑のウェブサイトです。

## 🚀 プロジェクト構成

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro          # ASCIIアートロゴ付きヘッダー
│   │   ├── Navigation.astro      # ナビゲーションメニュー
│   │   ├── Marquee.astro         # 流れる文字（マーキー）
│   │   ├── HeroBanner.astro      # メインビジュアル
│   │   ├── Greeting.astro        # 挨拶セクション
│   │   ├── ServiceCard.astro     # サービスカード（単体）
│   │   ├── ServiceGrid.astro     # サービス一覧グリッド
│   │   ├── ContactSection.astro  # お問い合わせセクション
│   │   ├── Sidebar.astro         # サイドバー
│   │   └── Footer.astro          # フッター
│   ├── layouts/
│   │   └── Layout.astro          # ベースレイアウト
│   ├── pages/
│   │   └── index.astro           # トップページ
│   └── styles/
│       └── global.css            # グローバルスタイル
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 デザインコンセプト

- **CRTモニター風エフェクト**: スキャンライン、ちらつきアニメーション
- **ターミナル風カラースキーム**: 緑色（#00ff41）をベースにしたハッカー風デザイン
- **2000年代初期の個人サイト風**: マーキー、アクセスカウンター、UNDER CONSTRUCTION表示
- **秘密結社風**: サービスをGADGET-001〜008としてコードネーム付きで表示

## 🧞 コマンド

| コマンド                   | 説明                                           |
| :------------------------ | :----------------------------------------------|
| `npm install`             | 依存関係をインストール                            |
| `npm run dev`             | ローカル開発サーバーを起動 (`localhost:4321`)      |
| `npm run build`           | 本番用にビルド (`./dist/`)                       |
| `npm run preview`         | ビルド結果をローカルでプレビュー                   |

## 📝 カスタマイズ

### サービス情報の変更

`src/components/ServiceGrid.astro` の `defaultServices` 配列を編集：

```typescript
const defaultServices: Service[] = [
  {
    number: '001',
    name: 'サービス名',
    codeName: 'CODE NAME',
    description: '説明文',
    status: 'active', // 'active' | 'special' | 'classified'
    href: '/path',
  },
  // ...
];
```

### プロフィール情報の変更

`src/components/Sidebar.astro` の props を編集するか、`index.astro` でコンポーネントに props を渡す。

### カラーテーマの変更

`src/styles/global.css` の CSS変数を編集：

```css
:root {
  --primary-green: #00ff41;    /* メインカラー */
  --dark-green: #003b00;       /* ダークグリーン */
  --bg-dark: #0a0a0a;          /* 背景色 */
  --accent-yellow: #ffcc00;    /* アクセント（黄色） */
  --accent-red: #ff4141;       /* アクセント（赤） */
}
```

## 🔧 技術スタック

- [Astro](https://astro.build/) v4.16+
- Pure CSS（フレームワーク不使用）
- Google Fonts（VT323, Zen Kaku Gothic New）

## 📄 ライセンス

柏原けやき苑の実際の施設情報が含まれています。デザインテンプレートとしてご使用の場合は、施設情報を適宜変更してください。

---

*El Psy Kongroo.*
