# wanted-pre-onboarding-challenge-fe-2

본 프로젝트는 pocojang님의 [jsdoc-bolierplate](https://github.com/pocojang/jsdoc-boilerplate)를 사용해 초기 셋팅을 하였습니다.

[배포된 GitHub Page](https://seongjin2427.github.io/wanted-pre-onboarding-challenge-fe-2/index)

<br>

---

## Usage

### Install

```bash
npm install
or
yarn
```

### Build

```bash
npm run docs
or
yarn docs
```

#### Reference

- [jsdoc.app](https://jsdoc.app)

---

<details>
<summary style='font-size: 20px; margin-top: 16px; margin-bottom: 10px;'>
📝 사전 미션
</summary>

<h1>필수 요구사항</h1>

> 아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

</details>

---

<details>
<summary style='font-size: 20px; margin-top: 16px; margin-bottom: 10px;'>
📝 2차 미션
</summary>

<h1>챌린지 과제 가이드</h1>

> 요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 Interface로 설계하고 모델링하는 챌린지 과제입니다.
- 모든 요구사항은 선언을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 Requirements

### 필수 요구사항

> 아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

### Todo

```ts
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

#### Modeling (Shape)

```ts
Item {
  property(required),
  property(optional),
}
```

</details>

---

<br>

## JSDoc 사전 과제 수행 후기

/\*\* 를 통해 주석을 다는 기능을 알고 있었지만, 어노테이션과 함께 이렇게 실제로 사용해서 구현해보니 잘만 사용하면 효율적인 개발을 진행할 수 있겠다는 생각이 들었습니다. JSDoc을 잘 작성해 둔다면 다른 개발자들과 협업할 때도 의사소통할 때 많은 도움이 될 것이라고 생각합니다.
타입스크립트가 현재는 많이 활용되고 있지만, 문서화 실행 스크립트를 통해 API 문서를 바로 추출할 수 있다는 점이 가장 좋았다고 느꼈습니다.

JSDoc에 대해서는 지식이 전무했습니다.
<br>
Todo 앱에 대한 요구사항을 구현부가 아닌 JSDoc만을 이용해서 나타낸다는게 익숙하지 않아 어떻게 시작해야할지 감이 오지 않아 우선 pocojang님의 [보일러 플레이트](https://github.com/pocojang/jsdoc-boilerplate)를 활용해 첫 발자국을 떼었습니다. 그 후 [JSDoc](https://jsdoc.app) 공식 홈페이지를 찾아 어떻게 타입을 선언하고 파라미터에 대한 타입을 지정할 수 있는지 필요해 보이는 것 같은 내용을 보며 구현하였습니다.

<br>

## 사전 과제 시 고민했던 점

최초 보일러 플레이트에는 `src/index.js`로 바로 샘플 코드가 작성되어 있었는데, CRUD의 기능은 기능이라는 별도의 분리가 필요하다고 생각되어 `src/features/todo.js`라는 자바스크립트 파일을 별도로 만들어 구현했습니다.

<br>

## 깃허브 페이지 배포

깃허브 페이지 페이지 역시 기능이 존재한다는것을 알고 있었지만 실제로 사용해본건 이번에 처음 사용해봤습니다. 단순히 깃허브 설정에 들어가 경로만 정해주는 것 만으로도 정적 페이지를 배포 할 수 있다는 편리함에 놀랐습니다. 정적 페이지를 배포할 경우가 생긴다면 자주 사용할 것 같습니다.

<br>
