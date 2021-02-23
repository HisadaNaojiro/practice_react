import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [open, setOpen] = useState(false);
  const items = props.items || [];
  const handleSetOpen = () => {
    setOpen(true);
  }
  const handleSetClose = () => {
    setOpen(false);
  }
  return(
      <>
        {open && (
            <>
              {(() => items.map((val, index) => {
                return (
                    <div key={index}>{val.name}</div>
                );
              }))()}
            <button type={"button"} onClick={handleSetClose}>閉じる</button>
            </>
        )}
        {!open && <button type={"button"} onClick={handleSetOpen}>開く</button>}
      </>
  );
};

const elements = document.getElementsByClassName("test");
for (const ele of Array.from(elements)) {
  let initialState = {}

  if (ele.dataset.json) {
    initialState = JSON.parse((ele.dataset.json));
  }
  ReactDOM.render(<App {...initialState} />, ele);
}
//ReactDOM.render(<App />, document.getElementById("app"))
