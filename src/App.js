import { useState, useEffect } from "react";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001")

function App() {
  const [change, setChange] = useState(false)
  const [name, setName] = useState("Anonymous")
  const [tempName, setTempName] = useState(name)
  const [message, setMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)
  const handleChange = () => {
    setChange(!change)
  }
  const handleSetName = () => {
    setName(tempName)
    setChange(!change)
  }
  const sendMessage = () => {
    console.log("==============")
    socket.emit("send_massage", { message })
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceiveMessage(data?.message)
    })
  }, [socket])

  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className="container border" style={{ height: "100dvh", position: "relative" }}>
        <div className="px-5">
          <h1 className="text-center">Chat Application</h1>
          <div className="row mb-5 border align-items-center">
            <div className="col-8">
              {!change ? <h2>{name}</h2> : <input value={tempName} onChange={(e) => setTempName(e.target.value)} />}
            </div>
            <div className="col-4 justify-content-evenly d-flex ">
              {!change ? <button className="btn btn-warning" onClick={() => handleChange()}>Edit</button> : <>
                <button className="btn btn-success" onClick={() => handleSetName()}>Save</button>
                <button className="btn btn-secondary" onClick={() => handleChange()}>Cancel</button>
              </>}

            </div>
          </div>
          <h1>Messge : {receiveMessage}</h1>
        </div>

        <div className="row d-flex align-items-center" style={{ position: "absolute", bottom: 10, width: "100%" }}>
          <div className="col-md-10 col-8">
            <input style={{ width: "100%" }} className="py-1" placeholder="Enter message..." onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="col-md-2 col-4">
            <button style={{ width: "100%" }} className="btn btn-secondary" onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
