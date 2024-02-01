import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/User/userAction";
const UserContainerAsync = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading !...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List </h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => (
            <p key={user.id} className="fade show mb-2 bg-dark text-white p-2">
              {user.name}
            </p>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainerAsync);
