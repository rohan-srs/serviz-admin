import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import "../../components/utils/colors";
import { blackBackground, greyBackground, whiteText, yellowAccent } from "../../components/utils/colors";

const AllProjects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Project Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "year",
      headerName: "Year",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "classname",
      headerName: "Class",
      flex: 1,
    },
    {
      field: "grp_id",
      headerName: "Group ID",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={blackBackground} sx={{ ml: "10px",fontWeight: "semibold" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="ALL PROJECTS" subtitle="List Of All Projects" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .css-bvbdia-MuiTablePagination-root":{
            color:blackBackground,
          },
          "& .css-1mxm56-MuiButtonBase-root-MuiButton-root":{
            color:whiteText,
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "10p",
          },
          "& .name-column--cell": {
            // color: colors.grey[100],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[300],
            color: blackBackground,
            borderBottom: "none",
          },
          
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            color: greyBackground,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AllProjects;
