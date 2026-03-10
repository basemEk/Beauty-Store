import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Users() {
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "role", headerName: "Role", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: params => (
        <Link to={`/product/${params.id}`}>
          <button className="bg-gray-400 text-black px-4 py-1 rounded text-sm cursor-pointer hover:bg-slate-300 flex items-center justify-center">
            {/* FaEdit colored black as requested */}
            <FaEdit />
          </button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: params => (
        <div className="flex items-center justify-center w-full h-full">
          <FaTrash
            className="text-red-500 cursor-pointer m-2 hover:text-red-700"
            onClick={() => console.log("Delete item:", params.id)}
          />
        </div>
      ),
    },
  ];

  const data = [
    {
      _id: "u001",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "123-456-7890",
      role: "Admin",
    },
    {
      _id: "u002",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "234-567-8901",
      role: "User",
    },
    {
      _id: "u003",
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "345-678-9012",
      role: "User",
    },
    {
      _id: "u004",
      name: "David Clark",
      email: "david@example.com",
      phone: "456-789-0123",
      role: "Admin",
    },
    {
      _id: "u005",
      name: "Eve Stone",
      email: "eve@example.com",
      phone: "567-890-1234",
      role: "User",
    },
    {
      _id: "u006",
      name: "Frank Wilson",
      email: "frank@example.com",
      phone: "678-901-2345",
      role: "Admin",
    },
    {
      _id: "u007",
      name: "Grace Lee",
      email: "grace@example.com",
      phone: "789-012-3456",
      role: "User",
    },
    {
      _id: "u008",
      name: "Henry Kim",
      email: "henry@example.com",
      phone: "890-123-4567",
      role: "Admin",
    },
  ];

  return (
    <div className="p-8 w-full bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">All Users</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={row => row._id}
          checkboxSelection
          pageSizeOptions={[8, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } },
          }}
          disableRowSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              color: "#374151",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #f3f4f6",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Users;
