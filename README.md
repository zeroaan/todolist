# TodoList

- https://zeroaan.github.io/todolist/
- 기간 : 20년 10월 15일 ~ 10월 16일
- 소개 : React와 Redux를 이용하여 TodoList를 만들어 보았다.

<br>

![screen](./img/screen.gif)

<br>

- 처음 redux를 접했을 때 class 컴포넌트를 사용해서 mapStateToProps와 mapDispatchToProps, connect함수를 이용했으나 function 컴포넌트를 사용하면서 useDispatch와 useSelector를 사용해 다음과 같이 코드를 만들었다.
- Immer 라이브러리를 사용하여 가독성 문제와 불변성을 지켜주며 관리해주었다.

<br>

### src/store/actions/types

- action과 reducer 에서 사용하는 type들을 만들어 주었다.

```js
export const ADD_LIST = "add_list"
export const DELETE_LIST = "delete_list"
export const EDIT_LIST = "edit_list"
export const COMPLETE_LIST = "complete_list"

export const VISIBLE_ALL = "visible_all"
export const VISIBLE_ACTIVE = "visible_active"
export const VISIBLE_COMPLETED = "visible_completed"
export const CLEAR_COMPLETED = "clear_completed"
```

<br>

### src/store/actions/todo.js

- todo list에서 필요한 action들을 만들어 주었다.

```js
import * as types from "./types"

export const addList = (text) => {
  return {
    type: types.ADD_LIST,
    text: text,
  }
}
// ...생략
export const clearCompleted = () => {
  return {
    type: types.CLEAR_COMPLETED,
  }
}
```

<br>

### src/store/reducers/todo.js

- Immer 라이브러리를 사용하였다.
- todo list에서 필요한 reducer들을 만들어 주었다.
- 이전 상태의 state와 action을 합쳐 새로운 state를 만들어 주었다.

<br />

#### immer 미사용

- 불변성을 지키기 위해 코드가 길어짐으로 가독성이 좋지 않음

```js
export default (state, action) => {
  let newState = {}
  let newTodo = []
  let i = 0
  switch (action.type) {
    case types.ADD_LIST:
      newTodo = [{ text: action.text, complete: false }, ...state.todo]
      newState = { ...state, todo: newTodo }
      return newState

    // ... 생략

    case types.CLEAR_COMPLETED:
      while (i < state.todo.length) {
        if (state.todo[i].complete === false) {
          newTodo = [...newTodo, state.todo[i]]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    default:
      return state
  }
}
```

<br />

#### immer 사용

```js
const todoReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_LIST:
        draft.todo.unshift({ text: action.text, complete: false, invisible: false })
        break

      // ... 생략

      case types.CLEAR_COMPLETED:
        draft.todo = state.todo.filter((v) => !v.complete)
        break
      default:
        break
    }
  })
}
```

<br>

### src/components/DisplayList.js

- useDispatch, useSelector를 사용하여 상태관리를 하였다.

```jsx
import React from "react"
import { useSelector } from "react-redux"

import DisplayListItem from "components/DisplayListItem"
import VisibleList from "components/VisibleList"

const DisplayList = () => {
  const { todo } = useSelector((store) => store.todo)

  return (
    <>
      {todo.map((v, i) => (
        <DisplayListItem key={v.text + i} text={v.text} index={i} />
      ))}
      {todo.length > 0 && <VisibleList />}
    </>
  )
}

export default DisplayList
```

<br>

### 반응형으로 만들어주어 모바일에서도 이용할 수 있도록 하였다.

![responsive](./img/responsive.png)
