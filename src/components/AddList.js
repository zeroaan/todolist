import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { FaRegPaperPlane } from "react-icons/fa"

import * as actions from "../store/actions/todo"

const FormAdd = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  background-color: white;
  width: 800px;
  height: 70px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

const InputAdd = styled.input`
  font-family: "Ubuntu", sans-serif;
  font-size: 22px;
  outline: none;
  border: none;
  width: 500px;
  height: 40px;
  color: black;

  &:focus {
    color: rgb(0, 175, 175);
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 200px;
  }
`

const ButtonIcon = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 22px;
  background-color: white;
  color: rgb(0, 175, 175);
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const AddList = () => {
  const dispatch = useDispatch()
  const [list, setList] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (list !== "") {
      dispatch(actions.addList(list))
      setList("")
    }
  }
  const onChange = (e) => {
    const { value } = e.target
    setList(value)
  }

  return (
    <FormAdd onSubmit={onSubmit}>
      <InputAdd type="text" placeholder="할 일 입력" value={list} onChange={onChange} autoFocus />
      <ButtonIcon>
        <FaRegPaperPlane />
      </ButtonIcon>
    </FormAdd>
  )
}

export default AddList
