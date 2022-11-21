import React, { useState } from "react";

const Student = () => {
  const [myname, setMyname] = useState();
  const [myemail, setMyemail] = useState();

  const [alldata, setAlldata] = useState([]);

  //     const update=(e)=>{
  // setMyname(e.target.value)
  // console.log(myname)
  //     }

  const submited = () => {
    if (myemail && myname) {
      const newEntry = { id: new Date().getTime(), myemail, myname };
      setAlldata([...alldata, newEntry]);
      console.log(alldata);

      setMyname("");
      setMyemail("");
    } else {
      alert("plese fill th dara");
    }
  };

  const deletedata = (id) => {
    const delData = alldata.filter((curEli) => {
      return curEli.id!==id;
    
    });
    console.log( delData)
    setAlldata(delData);
  };
  return (
    <>
      <div className="main flex  mt-4 space-x-4 h-full w-screen p-4 ">
        <div className="main space-y-4  rounded-xl shadow-lg ">
          <div className="heading bg-green-700 text-4xl text-white text-center p-2">
            Add Students
          </div>
          <div className="inputArea w-full text-center">
            <input
              type="text"
              placeholder="Name "
              className="w-full"
              name="myname"
              value={myname}
              onChange={(e) => setMyname(e.target.value)}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full"
              name="myemail"
              value={myemail}
              onChange={(e) => setMyemail(e.target.value)}
            />
          </div>
          <div className="button m-4">
            <button className="w-full  p-1" onClick={submited}>
              ADD
            </button>
          </div>
        </div>

        <div className="main  rounded-xl shadow-xl  w-5/6">
          <div className="haeder bg-red-500 text-4xl text-white text-center p-2">
            <h1>Student List</h1>
          </div>
          <div className="headig bg-gray-800 p-3">
            <div className="flex ">
              <div className="w-40  font-semibold text-white">Id</div>
              <div className=" w-48  font-semibold text-white ...">Name</div>
              <div className="w-80  font-semibold text-white ...">Email</div>
              <div className="flex-1 w-32  font-semibold text-white ...">
                Action
              </div>
            </div>
          </div>
          <div className="headig">
            {alldata.map((val,index) => {
              return (
                <div className="flex border-2 border-200 px-4 " key={index}>
                  <div className=" w-40 font-bold" >{val.id}</div>
                  <div className=" w-48  " >{val.myname}</div>
                  <div className=" w-80 ...">{val.myemail}</div>
                  <div className="flex-1 w-32 ...">
                    <button className="p-1 text-sm mr-4 bg-blue-800">
                      edit
                    </button>
                    <button
                      className="p-1 text-sm bg-red-900 "
                      onClick={() => deletedata(val.id)}
                    >
                      dekete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
