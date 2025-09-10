# OpenThe Share - Backend

이 프로젝트는 기업의 사회공헌(CSR/ESG) 프로그램을 소개하는 웹사이트의 백엔드 API 서버입니다.

## 🚀 주요 기술 스펙 (Tech Stack)

-   **Framework**: [Spring Boot 3.2.5](https://spring.io/projects/spring-boot)
-   **Language**: [Java 17](https://www.oracle.com/java/technologies/downloads/#java17)
-   **Build Tool**: [Gradle 8.7](https://gradle.org/)
-   **Data Persistence**: [Spring Data JPA (Hibernate)](https://spring.io/projects/spring-data-jpa)
-   **Database**: [PostgreSQL](https://www.postgresql.org/)
-   **Testing**: [JUnit 5](https://junit.org/junit5/), [Mockito](https://site.mockito.org/)
-   **IDE**: [IntelliJ IDEA](https://www.jetbrains.com/idea/)

## 📂 프로젝트 구조

```
backend/
├── 📁 gradle/                  # Gradle Wrapper
├── 📁 src/
│   ├── 📁 main/
│   │   ├── 📁 java/com/opentheshare/
│   │   │   ├── 📁 config/     # CORS 등 웹 설정
│   │   │   ├── 📁 controller/ # API 엔드포인트 정의 (HTTP 요청 처리)
│   │   │   ├── 📁 dto/        # 데이터 전송 객체 (API 응답 형식 정의)
│   │   │   ├── 📁 entity/     # JPA 엔티티 (DB 테이블과 매핑)
│   │   │   ├── 📁 repository/ # 데이터베이스 접근 (JPA Repository)
│   │   │   ├── 📁 service/    # 비즈니스 로직
│   │   │   └── 📄 Application.java # Spring Boot 시작점
│   │   └── 📁 resources/
│   │       └── 📄 application.properties # 애플리케이션 설정 (DB 연결 정보 등)
│   └── 📁 test/                  # 단위 및 통합 테스트 코드
├── 📄 build.gradle              # 프로젝트 의존성 및 빌드 설정
└── 📄 gradlew                   # Gradle 실행 스크립트
```

## 💻 로컬 환경에서 실행하는 방법 (IntelliJ IDEA 기준)

**사전 준비**:
-   [Java 17 (JDK)](https://www.oracle.com/java/technologies/downloads/#java17)
-   [PostgreSQL](https://www.postgresql.org/download/) (설치 및 실행 상태여야 함)

1.  **데이터베이스 설정**:
    1.  PostgreSQL에 접속하여 새로운 데이터베이스를 생성합니다. (예: `opentheshare_db`)
    2.  생성한 데이터베이스에 프로젝트 루트의 `db/schema.sql` 파일의 내용을 실행하여 테이블을 생성합니다.
    3.  이어서 `db/data.sql` 파일의 내용을 실행하여 초기 데이터를 테이블에 삽입합니다.

2.  **프로젝트 열기**:
    -   IntelliJ IDEA를 실행하고 `File > Open`을 클릭합니다.
    -   다운로드한 프로젝트에서 `backend` 폴더를 선택하고 `Open`을 클릭합니다.
    -   IntelliJ가 자동으로 Gradle 프로젝트를 인식하고 필요한 의존성을 다운로드합니다. (오른쪽 아래에 진행률 표시)

3.  **애플리케이션 설정**:
    -   `src/main/resources/application.properties` 파일을 엽니다.
    -   아래 항목들을 자신의 로컬 PostgreSQL 환경에 맞게 수정합니다.
        ```properties
        spring.datasource.url=jdbc:postgresql://localhost:5432/opentheshare_db
        spring.datasource.username=YOUR_POSTGRES_USERNAME
        spring.datasource.password=YOUR_POSTGRES_PASSWORD
        ```

4.  **백엔드 서버 실행**:
    -   `src/main/java/com/opentheshare/Application.java` 파일을 엽니다.
    -   `main` 메소드 옆에 있는 녹색 '▶︎' 실행 버튼을 클릭하고 `Run 'Application.main()'`을 선택합니다.
    -   콘솔 창에 Spring Boot 로고와 함께 `Tomcat started on port(s): 8080` 메시지가 나타나면 서버가 정상적으로 실행된 것입니다.

5.  **API 테스트 (선택 사항)**:
    -   웹 브라우저나 API 클라이언트(Postman 등)에서 `http://localhost:8080/api/v1/homepage` 주소로 접속합니다.
    -   홈페이지에 필요한 모든 데이터가 JSON 형식으로 출력되면 API가 정상적으로 작동하는 것입니다.

6.  **단위 테스트 실행 (선택 사항)**:
    -   IntelliJ의 'Project' 뷰에서 `src/test/java` 폴더를 우클릭합니다.
    -   `Run 'Tests in 'java''`를 선택하여 모든 단위 테스트를 실행하고 코드의 안정성을 검증할 수 있습니다.