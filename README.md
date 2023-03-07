# :pushpin: 출근도장 
>아르바이트 출근&월급 관리 서비스 (어플 하우머치 참고)
>React를 활용하여 웹사이트 만들기

- DEMO : (http://43.201.17.158:3000)
<br />

## 1. 제작 기간 & 참여 인원
- 2023.01.28 ~ 2023.02.04
- 개인 프로젝트
- 개발 목표 : React 컴포넌트와 Hooks, Redux 사용 및 이해. 백엔드 서버를 연결한 웹페이지 구축

<br />

## 2. 사용 기술
#### `Back-end`
- Node.js
- Express
- MySQL
#### `Front-end`
- React
- Redux

</br>

## 3. ERD 설계
<img width="110" alt="image" src="https://user-images.githubusercontent.com/116782318/223374838-e04d861b-87e1-45eb-9c41-c14ff0c6b496.png">


## 4. 핵심 기능
이 서비스는 클릭 한 번으로 출근 기록이 가능하고, 한 눈에 월급을 파악할 수 있습니다.

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 4.1. 메인 화면(READ)
<img width="267" alt="image" src="https://user-images.githubusercontent.com/116782318/223375692-f1df7ce0-500d-477d-8547-bac949dceb57.png">

- **메인 화면** :pushpin: [코드 확인](https://github.com/nyondoo/mileeasy/blob/2961f19f5153e97090b62d15a886ee0ad1d3bbfc/views/mbtitest.ejs#L33)
  - React 화면단에서, 메인 화면을 렌더할 때마다 DB에서 근무지 정보를 불러와 보여줍니다.


### 4.2.1 근무지 등록(CREATE)

<img src="https://user-images.githubusercontent.com/116782318/217128566-fc949a91-9b20-410e-be2f-055da22b6e9d.png" alt='근무지 추가' height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128565-735b3aeb-a35b-4488-a9c0-dedaa57f14eb.png" alt='근무지 정보 입력' height="500px">

- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/WorkInfo.jsx#L101)
  - 입력한 근무지 정보를 작성하여 POST요청을 비동기로 날립니다.
  
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L9)
  - DB에 근무지 정보를 저장한 후 true값을 응답합니다.
  
- **결과 응답** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/WorkInfo.jsx#L114)
  - 요청에 대한 응답을 받으면 리듀서를 호출하여 메인 페이지를 렌더합니다. :pushpin: [코드 확인] (https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/store/modules/switchview.js#L43)

### 4.2.2 출근/직접 입력 버튼(UPDATE)



- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L67)
  - 출근 버튼 클릭 시 클릭한 근무지 이름과 근무 일자(현재 일자)를 담은 POST요청을 날립니다.
 
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L30)
  - 해당 근무지의 DB에 출근버튼일 경우 당일 근무, 직접 입력한 경우 입력한 날짜들이 기록됩니다.
  - 처리 성공 시 true값과 현재 월급을 응답으로 보내줍니다.
  
- **결과 응답** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L17)
  - true값을 받으면 근무지 정보를 조회하는 axios비동기 요청을 보냅니다. Block컴포넌트의 월급 값이 바뀌어 화면이 리렌더링 됩니다.


<img src="https://user-images.githubusercontent.com/116782318/217128578-b8899a69-a008-4f6b-968f-b54f20d0547e.png" height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128579-b9aa4dac-9354-4387-9b04-bf49d3221ad9.png" height="500px">


### 4.2.3 근무지 삭제 (DELETE)

- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L44)
  - 해단 근무지의 id를 담은 POST요처을 날립니다.
 
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L58)
  - 해당 근무지를 DB에서 삭제합니다.

  <img src="https://user-images.githubusercontent.com/116782318/217128584-1b6d7448-0ca3-4781-abe7-f72b61f034ed.png" height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128586-13bc81eb-27d5-41cb-b5fb-0a92a5d58857.png" height="500px">

## 개선사항
(1) 로그인 기능 추가
- 현재는 제작자 혼자서만 사용 가능한 상황..
- 로그인 기능을 추가하여 회원별로 근무지 정보를 관리할 수 있도록 해야 실제 서비스가 가능

(2) 근무지 정보 수정 기능 추가
- 현재는 월급을 추가하는 기능 뿐
- 시급, 근무지 명 등의 정보를 수정할 수 있어야 함

(3) 근무지 삭제 시 비동기 처리로 인한 렌더링 오류

