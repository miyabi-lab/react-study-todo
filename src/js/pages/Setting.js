import React, {useContext, useEffect, useState} from "react"
import {useParams, useSearchParams} from "react-router-dom";
import {GlobalContext} from "../providers/GlobalProvider";

const Setting = () => {

  // global state
  const {user, setUser} = useContext(GlobalContext)
  // local state
  const [username, setUsername] = useState('')

  const onChangeUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const updateUsername = () => {
    // @TODO ValidationはTypescriptの型を使うといいのか？
    if (username === '') {
      alert('Please enter some text.')
      return
    }

    // setUser(user => ({...user, username: username}))
    // // @TODO 古いデータが表示される。レンダリング前だから？
    // console.log(user)

    let newUser = {...user, username: username}
    setUser(user => newUser)
    // @TODO 別の変数に入れれば最新の値が取れる
    console.log(newUser)
    ///////////////////////////////////////////
    alert('Username updated.')
  }

  return (
    <>
      <div className="container" style={{marginTop: "60px"}}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Set username</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="form-inline">
              <div className="form-group">
                <input type="text"
                       className="form-control mr-3"
                       id="newTodoForm"
                       defaultValue={user.username}
                       onChange={onChangeUsernameInput}
                />
                <button type="button"
                        className="btn btn-primary mr-1"
                        onClick={updateUsername}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting