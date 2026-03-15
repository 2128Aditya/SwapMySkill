import { useState } from "react";

function useUser() {
  const [users, setUsers] = useState([]);

  return { users, setUsers };
}

export default useUser;