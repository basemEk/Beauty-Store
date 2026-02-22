import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Products() {
  //Products Data 
  const data = [
    {
      _id: "108",
      title: "Vitamin C Serum",
      img: "https://images.pexels.com/photos/4792671/pexels-photo-4792671.jpeg",
      desc: "Serum with Vitamin C for skin brightening.",
      originalPrice: 50.0,
      discountedPrice: 45.0,
      inStock: true,
    },
    {
      _id: "109",
      title: "Hydrating Facial Cleanser",
      img: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
      desc: "Gentle cleanser for deep hydration and sensitive skin.",
      originalPrice: 25.0,
      discountedPrice: 20.0,
      inStock: true,
    },
    {
      _id: "110",
      title: "Retinol Night Cream",
      img: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg",
      desc: "Advanced anti-aging cream for overnight skin repair.",
      originalPrice: 65.0,
      discountedPrice: 55.0,
      inStock: true,
    },
    {
      _id: "111",
      title: "Matte Liquid Lipstick",
      img: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
      desc: "Long-lasting matte finish in a classic ruby red shade.",
      originalPrice: 18.0,
      discountedPrice: 15.0,
      inStock: true,
    },
    {
      _id: "112",
      title: "Organic Rose Water Toner",
      img: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg",
      desc: "Refreshing natural toner to balance skin pH.",
      originalPrice: 22.0,
      discountedPrice: 18.0,
      inStock: true,
    },
    {
      _id: "113",
      title: "Exfoliating Coffee Scrub",
      img: "https://images.pexels.com/photos/6621235/pexels-photo-6621235.jpeg",
      desc: "Invigorating body scrub for smooth and glowing skin.",
      originalPrice: 30.0,
      discountedPrice: 24.0,
      inStock: false,
    },
    {
      _id: "114",
      title: "Hyaluronic Acid Mist",
      img: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg",
      desc: "Instant moisture boost for dehydrated complexions.",
      originalPrice: 28.0,
      discountedPrice: 22.5,
      inStock: true,
    },
    {
      _id: "115",
      title: "Waterproof Mascara",
      img: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg",
      desc: "Volumizing mascara that stays put all day long.",
      originalPrice: 15.0,
      discountedPrice: 12.0,
      inStock: true,
    },
    {
      _id: "116",
      title: "Niacinamide 10% Formula",
      img: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg",
      desc: "Reduces the appearance of skin blemishes and congestion.",
      originalPrice: 35.0,
      discountedPrice: 30.0,
      inStock: true,
    },
    {
      _id: "117",
      title: "Mineral Sunscreen SPF 50",
      img: "https://images.pexels.com/photos/520603/pexels-photo-520603.jpeg",
      desc: "Broad-spectrum protection without the white cast.",
      originalPrice: 40.0,
      discountedPrice: 35.0,
      inStock: true,
    },
    {
      _id: "118",
      title: "Lavender Essential Oil",
      img: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg",
      desc: "Pure essential oil for relaxation and skin soothing.",
      originalPrice: 12.0,
      discountedPrice: 10.0,
      inStock: true,
    },
    {
      _id: "119",
      title: "Charcoal Face Mask",
      img: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg",
      desc: "Deep pore cleansing mask to remove impurities.",
      originalPrice: 20.0,
      discountedPrice: 16.0,
      inStock: true,
    },
    {
      _id: "120",
      title: "Golden Glow Highlighter",
      img: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg",
      desc: "Shimmering powder for a radiant, sun-kissed look.",
      originalPrice: 24.0,
      discountedPrice: 20.0,
      inStock: true,
    },
    {
      _id: "121",
      title: "Argan Hair Oil",
      img: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
      desc: "Nourishing oil to tame frizz and add shine.",
      originalPrice: 45.0,
      discountedPrice: 38.0,
      inStock: true,
    },
    {
      _id: "122",
      title: "Eyeliner Gel Pen",
      img: "https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg",
      desc: "Precision gel liner for sharp and smoky eyes.",
      originalPrice: 14.0,
      discountedPrice: 11.5,
      inStock: true,
    },
    {
      _id: "123",
      title: "Shea Butter Hand Cream",
      img: "https://images.pexels.com/photos/6621230/pexels-photo-6621230.jpeg",
      desc: "Rich moisturizing cream for dry and cracked hands.",
      originalPrice: 10.0,
      discountedPrice: 8.0,
      inStock: true,
    },
    {
      _id: "124",
      title: "Tea Tree Spot Treatment",
      img: "https://images.pexels.com/photos/3616764/pexels-photo-3616764.jpeg",
      desc: "Fast-acting treatment for sudden skin breakouts.",
      originalPrice: 16.0,
      discountedPrice: 14.0,
      inStock: true,
    },
    {
      _id: "125",
      title: "Moisturizing Lip Balm",
      img: "https://images.pexels.com/photos/3910064/pexels-photo-3910064.jpeg",
      desc: "Beeswax and coconut oil blend for soft lips.",
      originalPrice: 8.0,
      discountedPrice: 6.5,
      inStock: true,
    },
    {
      _id: "126",
      title: "Brightening Eye Cream",
      img: "https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg",
      desc: "Reduces dark circles and puffiness around eyes.",
      originalPrice: 42.0,
      discountedPrice: 36.0,
      inStock: true,
    },
    {
      _id: "127",
      title: "Setting Spray - Dewy",
      img: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
      desc: "Locks in makeup with a fresh, glowing finish.",
      originalPrice: 19.0,
      discountedPrice: 15.0,
      inStock: true,
    },
  ];

  // 2. Define columns SECOND (Inside the function)
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: params => (
        <div className="flex items-center h-full">
          <img
            className="h-10 w-10 rounded-full object-cover mr-3"
            src={params.row.img}
            alt="product image"
          />
          <span className="truncate">{params.row.title}</span>
        </div>
      ),
    },
    { field: "desc", headerName: "Description", width: 150 },
    {
      field: "discountedPrice",
      headerName: "Price ($)",
      width: 110,
      renderCell: params => `$${params.row.discountedPrice}`,
    },
    { field: "inStock", headerName: "In Stock", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      sortable: false,
      renderCell: params => (
        <Link to={`/product/${params.row._id}`}>
          <button className=" px-4 py-1 rounded text-sm cursor-pointer hover:text-slate-600">
            <FaEdit size={16} onClick={() => console.log("Delete ID:", params.row._id)}/>
          </button>
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      sortable: false,
      renderCell: params => (
        <div className="flex items-center justify-center h-full w-full">
          <FaTrash
            className="text-red-500 cursor-pointer hover:text-red-700"
            size={16}
            onClick={() => console.log("Delete ID:", params.row._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 w-full bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">All Products</h1>
        <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors">
          Create
        </button>
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

export default Products;