import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RootState from "../../interfaces/rootState";
import { getUsers } from "../../redux/actions/user";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", minWidth: 100, flex: 1 },
  {
    field: "name",
    headerName: "Name",
    minWidth: 400,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    minWidth: 300,
    flex: 1,
  },
  {
    field: "username",
    headerName: "Username",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 300,
    flex: 1,
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.isLoading);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ height: 400 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Users
      </Typography>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        loading={loading}
      />
    </Box>
  );
};

export default Users;
