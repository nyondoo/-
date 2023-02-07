# 출근도장 웹사이트 (어플 하우머치 참고)

React를 활용하여 웹사이트 만들기

- DEMO : (링크)

## 💡 개발 목표

React 컴포넌트와 Hooks, Redux 사용 및 이해. 백엔드 서버를 연결한 웹페이지 구축

## 개발 기간

- 23.01.28 ~ 23.02.04 (7일)

### ⚙️ 사용 기술

- React
- Redux
- Node.js
- Express
- MySQL

## 📌 주요 기능

- 메인 화면 (READ)

  메인 화면을 렌더할 때마다 DB에서 근무지 정보를 불러옴.

- 근무지가 없는 상태

  <img src="https://user-images.githubusercontent.com/116782318/217128561-c5c8476e-f280-40c3-9b22-decab9d6a1c7.png" alt='메인화면' height="500px">

- 근무지 작성 (CREATE)

  근무지 작성 완료버튼 클릭 시 새로운 근무지 정보가 DB에 입력, 메인 화면을 렌더하면서 DB에서 근무지 정보를 READ해옴 (React Redux, useEffect, Sequelize 사용)

  <img src="https://user-images.githubusercontent.com/116782318/217128565-735b3aeb-a35b-4488-a9c0-dedaa57f14eb.png" alt='근무지 정보 입력' height="500px">

  <img src="https://user-images.githubusercontent.com/116782318/217128566-fc949a91-9b20-410e-be2f-055da22b6e9d.png" alt='근무지 추가' height="500px">

- 근무 일정 추가 (UPDATE)

  (1) 출근 버튼 클릭 시 당일 일급 추가, 근무지 블록 컴포넌트의 월급 값이 변경되면서 리렌더링 (React Redux, useState, Sequelize 사용)

  <img src="https://user-images.githubusercontent.com/116782318/217128582-b9edb632-58a2-4d5d-9f4c-cea024ea11f5.png" height="500px">

  <img src="https://user-images.githubusercontent.com/116782318/217128574-d9ca59aa-7908-43dd-ba97-3c9e2372587c.png" height="500px">

(2) 직접 추가 버튼 클릭 시 선택한 날짜의 일급 추가, 근무지 블록 컴포넌트의 월급 값이 변경되면서 리렌더링 ("react-multi-date-picker" 라이브러리, React Redux, useState, Sequelize 사용)

<img src="https://user-images.githubusercontent.com/116782318/217128578-b8899a69-a008-4f6b-968f-b54f20d0547e.png" height="500px">

<img src="https://user-images.githubusercontent.com/116782318/217128579-b9aa4dac-9354-4387-9b04-bf49d3221ad9.png" height="500px">

- 근무지 삭제 (DELETE)

  휴지통 버튼 클릭 시 해당 근무지를 DB에서 삭제, 이후 메인화면을 렌더하면서 화면에서도 해당 블록이 사라짐 (React Redux, Sequelize 사용)

  <img src="https://user-images.githubusercontent.com/116782318/217128584-1b6d7448-0ca3-4781-abe7-f72b61f034ed.png" height="500px">

  <img src="https://user-images.githubusercontent.com/116782318/217128586-13bc81eb-27d5-41cb-b5fb-0a92a5d58857.png" height="500px">

## 개선사항
