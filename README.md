# :pushpin: 출근도장 
>아르바이트 출근&월급 관리 서비스 (어플 하우머치 참고)  
>아르바이트를 하면서 사장님이 제대로 월급을 주시는 건지 더블체크하기 위해 만들어보았습니다.

- DEMO : (http://43.201.17.158:3000)
<br />

## 1. 프로젝트 개요
>`개발 기간` 2023.01.28 ~ 2023.02.04  
>
>`개발 인원` 개인 프로젝트  
>
>`개발 목표` React 컴포넌트와 Hooks, Redux 사용 및 이해. 백엔드 서버를 연결한 웹페이지 구축  

<br />

## 2. 사용 기술
#### `Back-end`
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">

#### `Front-end`
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> 

</br>

## 3. ERD
<img width="110" alt="image" src="https://user-images.githubusercontent.com/116782318/223374838-e04d861b-87e1-45eb-9c41-c14ff0c6b496.png">

</br>

## 4. 주요 구현 기능
이 서비스는 클릭 한 번으로 출근 기록이 가능하고, 한 눈에 월급을 파악할 수 있습니다.

</br>

<div markdown="1">

### 4.1. 메인 화면(READ)
<img width="267" alt="image" src="https://user-images.githubusercontent.com/116782318/223375692-f1df7ce0-500d-477d-8547-bac949dceb57.png">

- **메인 화면** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/78cc57d6e6c6a3fb2ee896293f7f674c8d25c6fe/mainapp/client/src/Components/Block.jsx#L17)
  - React 화면단에서, 메인 화면을 렌더할 때마다 DB에서 근무지 정보를 불러와 보여줍니다.
  - 화면 전환은 삼항연산자로 조건부 렌더링하여 보여줍니다. :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/ca897b3303473ab5b25ceac8685c73326b926968/mainapp/client/src/Components/Main.jsx#L15)
  
 </br>

### 4.2.1 근무지 등록(CREATE)

<img src="https://user-images.githubusercontent.com/116782318/217128566-fc949a91-9b20-410e-be2f-055da22b6e9d.png" alt='근무지 추가' height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128565-735b3aeb-a35b-4488-a9c0-dedaa57f14eb.png" alt='근무지 정보 입력' height="500px">

- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/WorkInfo.jsx#L101)
  - 입력한 근무지 정보를 작성하여 POST요청을 비동기로 날립니다.
  
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L9)
  - DB에 근무지 정보를 저장한 후 true값을 응답합니다.
  
- **결과 응답** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/WorkInfo.jsx#L114)
  - 요청에 대한 응답을 받으면 리듀서를 호출하여 메인 페이지를 렌더합니다. :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/store/modules/switchview.js#L43)

</br>
  
### 4.2.2 출근/직접 입력 버튼(UPDATE)

<img src="https://user-images.githubusercontent.com/116782318/217128578-b8899a69-a008-4f6b-968f-b54f20d0547e.png" height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128579-b9aa4dac-9354-4387-9b04-bf49d3221ad9.png" height="500px">

- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L67)
  - 출근 버튼 클릭 시 클릭한 근무지 이름과 근무 일자(현재 일자)를 담은 POST요청을 날립니다.
 
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L30)
  - 해당 근무지의 DB에 출근버튼일 경우 당일 근무, 직접 입력한 경우 입력한 날짜들이 기록됩니다.
  - 처리 성공 시 true값과 현재 월급을 응답으로 보내줍니다.
  
- **결과 응답** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L17)
  - true값을 받으면 근무지 정보를 조회하는 axios비동기 요청을 보냅니다. Block컴포넌트의 월급 값이 바뀌어 화면이 리렌더링 됩니다.

</br>

### 4.2.3 근무지 삭제 (DELETE)

<img src="https://user-images.githubusercontent.com/116782318/217128584-1b6d7448-0ca3-4781-abe7-f72b61f034ed.png" height="500px">
<img src="https://user-images.githubusercontent.com/116782318/217128586-13bc81eb-27d5-41cb-b5fb-0a92a5d58857.png" height="500px">
  
- **Axios 비동기 요청** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/client/src/Components/Block.jsx#L44)
  - 해단 근무지의 id를 담은 POST요처을 날립니다.
 
- **요청 처리** :pushpin: [코드 확인](https://github.com/nyondoo/Check-Work/blob/7e82d7d7b876c66643d6ef05f26780e02bb3b418/mainapp/server/controller/main.js#L58)
  - 해당 근무지를 DB에서 삭제합니다.

</br>

## 5. 핵심 트러블 슈팅
### 5.1. 근무지 삭제결과가 화면단에 반영되지 않는 오류
- 근무지 삭제 버튼(휴지통 아이콘) 클릭 시 DB에 반영이 되나, 화면단에서 반영이 되지 않는 문제가 있었습니다.
- 브라우저 콘손을 확인해보니 서버 단에서 제대로 응답이 오지 않고 있었습니다.
- 서버 근무지 삭제 API의 응답 코드를 확인해보았습니다.
- **기존 코드** 
<div markdown="1">

~~~javascript
exports.deleteWork = async (req, res) => {
    let delResult = await Work.destroy({
      where: {
        id: req.body.id,
      },
    })
    res.send({ msg: true });
};
~~~
</div>

- 비동기적으로 처리되고 있기 때문에 DB삭제가 끝난 후 응답이 보내지는 것이 아닌, DB삭제 처리와 동시에 응답이 이루어지고 있었습니다.  
- 따라서 아래 **개선된 코드**와 같이 try-catch문으로 에러처리 하였고 변수를 선언하는 대신, DB삭제 후 .then으로 연결하여 DB삭제 처리가 끝난 후 응답을 실행하도록 바꾸었습니다.
<div markdown="1">

~~~javascript
exports.deleteWork = async (req, res) => {
  try {
    await Work.destroy({
      where: {
        id: req.body.id,
      },
    }).then((result) => {
      res.send(true);
    });
  } catch {
    res.send(false);
  }
};
~~~

</div>

</br>

