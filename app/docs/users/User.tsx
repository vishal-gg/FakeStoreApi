import React from "react";
import { TbUsers } from "react-icons/tb";
import AllUser from "./AllUser";
import SingleUser from "./SingleUser";
import LimitedUser from "./LimitedUser";
import PaginationUser from "./PaginationUser";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const User = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-semibold my-24 text-pink-500">
          <TbUsers className="inline mr-[2px] -translate-y-[2px]" /> Users
        </h2>
        <div className="space-y-16 pb-[22rem] max-lg:pb-6 ">
          <AllUser />
          <SingleUser />
          <LimitedUser />
          <PaginationUser />
          <AddUser />
          <UpdateUser />
          <DeleteUser />
        </div>
      </div>
    </>
  );
};

export default User;
