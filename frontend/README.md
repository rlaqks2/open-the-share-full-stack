# OpenThe Share - Frontend

이 프로젝트는 기업의 사회공헌(CSR/ESG) 프로그램을 소개하는 웹사이트의 프론트엔드입니다.

## 🚀 주요 기술 스펙 (Tech Stack)

-   **Framework**: [React 18](https://reactjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **IDE**: [WebStorm](https://www.jetbrains.com/webstorm/)

## 📂 프로젝트 구조

```
frontend/
├── 📄 index.html             # HTML 진입점
├── 📁 src/
│   ├── 📁 components/          # 재사용 가능한 UI 컴포넌트 (모달, 레이아웃, 섹션 등)
│   ├── 📁 data/               # 임시 목업 데이터
│   ├── 📁 hooks/              # 커스텀 훅 (e.g., useScrollObserver)
│   ├── 📄 App.tsx             # 메인 애플리케이션 컴포넌트
│   ├── 📄 main.tsx            # React 앱을 DOM에 렌더링하는 진입점
│   └── 📄 index.css           # 전역 스타일 및 Tailwind CSS 설정
├── 📄 package.json            # 프로젝트 의존성 및 스크립트
├── 📄 tailwind.config.js      # Tailwind CSS 설정 파일
└── 📄 tsconfig.json           # TypeScript 설정 파일
```

## 💻 로컬 환경에서 실행하는 방법 (WebStorm 기준)

**사전 준비**: [Node.js](https://nodejs.org/) (v18 이상 권장)가 설치되어 있어야 합니다.

1.  **프로젝트 열기**:
    -   WebStorm을 실행하고 `File > Open`을 클릭합니다.
    -   다운로드한 프로젝트에서 `frontend` 폴더를 선택하고 `Open`을 클릭합니다.

2.  **의존성 설치**:
    -   WebStorm 하단의 **Terminal** 탭을 엽니다.
    -   아래 명령어를 입력하여 프로젝트에 필요한 모든 라이브러리를 설치합니다.
        ```bash
        npm install
        ```

3.  **개발 서버 실행**:
    -   의존성 설치가 완료되면, 터미널에 아래 명령어를 입력하여 개발 서버를 시작합니다.
        ```bash
        npm run dev
        ```
    -   서버가 시작되면 터미널에 `http://localhost:5173` 와 같은 주소가 나타납니다. 이 주소를 클릭하거나 웹 브라우저에 복사하여 붙여넣으면 웹사이트를 확인할 수 있습니다.

    > ✨ **참고**: 이 프론트엔드 프로젝트는 백엔드 서버 없이도 내장된 임시 데이터(`mockData`)를 사용하여 독립적으로 완벽하게 작동합니다.