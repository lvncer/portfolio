# Portfolio Website

## ディレクトリ構造

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router のページとレイアウト
│   │   ├── certifications/
│   │   ├── experiences/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── social/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # React コンポーネント
│   │   ├── home/
│   │   ├── ui/
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   ├── Squares.tsx
│   │   └── theme-provider.tsx
│   └── lib/              # ユーティリティ関数
│       └── utils.ts
├── public/               # 静的ファイル
├── components.json       # shadcn/ui 設定
├── tsconfig.json         # TypeScript 設定
├── next.config.js        # Next.js 設定
└── package.json
```
