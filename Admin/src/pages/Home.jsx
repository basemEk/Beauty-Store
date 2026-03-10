// import { LineChart } from "@mui/x-charts/LineChart";
import { LineChart } from "@mui/x-charts";

function Home() {
  return (
    <div className="flex h-full bg-gray-200 p-6 gap-6">
      {/* LEFT SIDE (Main Content) */}
      <div className="flex flex-col flex-[2] gap-6">
        {/* CARDS */}
        <div className="flex gap-6">
          <div className="bg-white flex-1 h-56 shadow-md rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 border-[10px] border-blue-400 rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-lg mt-2">Products</h2>
          </div>

          <div className="bg-white flex-1 h-56 shadow-md rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 border-[10px] border-red-400 rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">100</h2>
            </div>
            <h2 className="font-semibold text-lg mt-2">Orders</h2>
          </div>

          <div className="bg-white flex-1 h-56 shadow-md rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 border-[10px] border-gray-400 rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-lg mt-2">Users</h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-lg font-bold mb-4">Latest Transactions</h3>

          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">$200</td>
                <td className="py-3 px-4 text-green-500">Approved</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">$200</td>
                <td className="py-3 px-4 text-red-500">Declined</td>
              </tr>
              <tr>
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">$200</td>
                <td className="py-3 px-4 text-green-500">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* RIGHT SIDE PANEL */}
      <div className="flex flex-col w-1/3 bg-white rounded-lg shadow-xl p-5">
        <div className="flex flex-col items-center bg-white p-5 mb-5 shadow-xl rounded-lg">
          <h2 className="font-bold text-2xl">Text Revenu: $200,000</h2>
        </div>
        <div className="flex flex-col items-center bg-white p-5 mb-5 shadow-xl rounded-lg">
          <h2 className="font-bold text-2xl">Total Losses: $0</h2>
        </div>

        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={300}
          margin={{left: 30, right: 30, top: 30, bottom: 30}}
          grid={{vertical: true, horizontal: true}}
        />
      </div>
    </div>
  );
}

export default Home;
