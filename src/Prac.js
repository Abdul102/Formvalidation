import React, { useState } from "react";

const myData = [
  {
    name: "abdul",
  },
  {
     name: "rehman",
  },
  {
     name: "zahool",
  },
];

const Prac = () => {
  const [myname, setMyname] = useState(myData);

  const delData = (id) => {
    const newdata = myname.filter((curEli) => {
      return curEli.id !== id;
    });
    setMyname(newdata);
    // alert(id);
    // console.log(id)
  };
  return (
    <>
      {myname.map((curEli,index) => {
        return (
          <div key={index}>
            <h1>{curEli.name}</h1>
            <button onClick={() => delData(curEli.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Prac;
