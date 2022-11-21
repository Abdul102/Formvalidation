import React from "react";

const Stulist = () => {
  return (
    <div className="main  rounded-xl shadow-xl  ">
      <div className="haeder bg-red-500 text-4xl text-white text-center p-2">
        <h1>Student List</h1>
      </div>
      <div className="stu-table">
        <table className="w-full text-center ">
          <tr className=" border-2 border-gray-900">
            <th className="p-8px  bg-gray-800 text-white p-4 ">id</th>
            <th className="p-8px  bg-gray-800 text-white p-4">Name</th>
            <th className="p-8px  bg-gray-800 text-white p-4">Email</th>
            <th className="p-8px  bg-gray-800 text-white p-4">action</th>
          </tr>
        

          <tr>
            <td className="border-2 border-red-400">1</td>
            <td className="border-2 border-red-400">Maria Anders</td>
            <td className="border-2 border-red-400">Germany</td>
            <td className="border-2 border-red-400">
              <div className="actionarea">
                <button className="text-sm p-1 mr-4 bg-blue-700">edit</button>
                <button className="text-sm p-1 bg-red-900">delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-red-400">1</td>
            <td className="border-2 border-red-400">Maria Anders</td>
            <td className="border-2 border-red-400">Germany</td>
            <td className="border-2 border-red-400">
              <div className="actionarea">
                <button className="text-sm p-1 mr-4 bg-blue-700">edit</button>
                <button className="text-sm p-1 bg-red-900">delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td className="border-2 border-red-400">1</td>
            <td className="border-2 border-red-400">Maria Anders</td>
            <td className="border-2 border-red-400">Germany</td>
            <td className="border-2 border-red-400">
              <div className="actionarea">
                <button className="text-sm p-1 mr-4 bg-blue-700">edit</button>
                <button className="text-sm p-1 bg-red-900">delete</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Stulist;
