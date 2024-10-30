// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ammarabid29")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      GitHub followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;
