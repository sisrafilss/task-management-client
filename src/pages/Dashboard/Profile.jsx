import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useEffect, useState } from "react";
import { serverURL } from "../../../serverURL";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const url = `${serverURL}/user/${user?.email}`;
    axios.get(url).then((response) => {
      setUserInfo(response?.data);
    });
  }, [user?.email]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto mt-8">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center mb-6">
            <img
              src={userInfo?.photoURL}
              alt={userInfo?.name}
              className="h-16 w-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{userInfo?.name}</h2>
              <p className="text-gray-600">{userInfo?.email}</p>
            </div>
          </div>
          <div className="mb-4">
            {userInfo?.contactNumber && (
              <p className="text-gray-700">
                <span className="font-semibold">Contact Number:</span>{" "}
                {userInfo?.contactNumber}
              </p>
            )}
            {userInfo?.address && (
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span>{" "}
                {userInfo?.address}
              </p>
            )}
            {userInfo?.age && (
              <p className="text-gray-700">
                <span className="font-semibold">Age:</span> {userInfo?.age}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
