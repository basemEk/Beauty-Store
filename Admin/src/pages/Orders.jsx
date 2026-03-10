import { DataGrid } from "@mui/x-data-grid";
import { FaClock, FaCheckDouble, FaCheckCircle } from "react-icons/fa";

function Orders() {
  // logic based on image_4ba5a5.png and image_4ba9a3.png
  const columns = [
    { field: "_id", headerName: "Order ID", width: 100 },
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === 0 || params.row.status === 1 ? (
              <FaClock className="text-yellow-500 text-[25px] cursor-pointer mt-2" />
            ) : (
              <FaCheckDouble className="text-green-500 text-[25px] mt-2" />
            )}
          </>
        );
      },
    },
    {
      field: "Deliver",
      headerName: "Mark as Delivered",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === 1 || params.row.status === 0 ? (
              <FaCheckCircle 
                className="text-[25px] cursor-pointer mt-2" 
                onClick={() => console.log("Updating order:", params.row._id)}
              />
            ) : (
              "..."
            )}
          </>
        );
      },
    },
  ];

  // Data updated with 'status' to reflect image_4c9320.png
  // 0/1 = Pending (Clock), 2 = Delivered (CheckDouble)
  const data = [
    { _id: "o101", name: "Alice Johnson", email: "alice@example.com", status: 1 },
    { _id: "o102", name: "Bob Smith", email: "bob@example.com", status: 0 },
    { _id: "o103", name: "Charlie Brown", email: "charlie@example.com", status: 2 },
    { _id: "o104", name: "David Clark", email: "david@example.com", status: 1 },
    { _id: "o105", name: "Eve Stone", email: "eve@example.com", status: 0 },
    { _id: "o106", name: "Frank Wilson", email: "frank@example.com", status: 1 },
    { _id: "o107", name: "Grace Lee", email: "grace@example.com", status: 2 },
    { _id: "o108", name: "Henry Kim", email: "henry@example.com", status: 1 },
  ];

  return (
    <div className="p-8 w-full bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Orders</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row._id}
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
              display: "flex",
              alignItems: "center",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Orders;