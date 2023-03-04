# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


App.tsx: 앱의 최상위 컴포넌트
index.tsx: 앱의 진입점
components/AddTodoForm.tsx: 새로운 할 일을 추가하기 위한 폼 컴포넌트
components/TodoItem.tsx: 할 일 항목 컴포넌트
components/TodoList.tsx: 모든 할 일을 보여주는 컴포넌트
pages/TodoPage.tsx: 할 일 페이지 컴포넌트
store/actions/todoActions.ts: 할 일 관련 액션 생성자 함수
store/reducers/todoReducer.ts: 할 일 관련 리듀서
store/slices/todoSlice.ts: 할 일 관련 slice
store/configureStore.ts: Redux store 설정 파일
store/index.ts: 앱의 모든 리듀서 및 미들웨어를 결합하여 Redux store를 생성하는 파일
utils/constants.ts: 앱에서 사용되는 상수 값 등을 정의하는 파일