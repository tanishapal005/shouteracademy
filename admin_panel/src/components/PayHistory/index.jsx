import { useState } from "react";

const PaymentHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const payments = [
    { id: 1, user: "John Doe", amount: "$50", date: "2025-03-25", status: "Success", method: "Credit Card", invoiceLink: "/invoices/invoice1.pdf", transactionId: "TXN12345" },
    { id: 2, user: "Jane Smith", amount: "$30", date: "2025-03-26", status: "Pending", method: "PayPal", invoiceLink: "", transactionId: "TXN12346" },
    { id: 3, user: "Mike Johnson", amount: "$20", date: "2025-03-27", status: "Failed", method: "Bank Transfer", invoiceLink: "", transactionId: "TXN12347" },
    { id: 4, user: "Emily Davis", amount: "$40", date: "2025-03-28", status: "Success", method: "Credit Card", invoiceLink: "/invoices/invoice2.pdf", transactionId: "TXN12348" },
    { id: 5, user: "Robert Brown", amount: "$25", date: "2025-03-29", status: "Pending", method: "PayPal", invoiceLink: "", transactionId: "TXN12349" },
    { id: 6, user: "Sophia Lee", amount: "$60", date: "2025-03-30", status: "Success", method: "Credit Card", invoiceLink: "/invoices/invoice3.pdf", transactionId: "TXN12350" },
    { id: 7, user: "William Wilson", amount: "$35", date: "2025-03-31", status: "Failed", method: "Bank Transfer", invoiceLink: "", transactionId: "TXN12351" },
  ];

  // 🔹 Search + Filter logic
  const filteredPayments = payments
    .filter((payment) =>
      payment.user.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((payment) => (filterStatus === "All" ? true : payment.status === filterStatus));

  // 🔹 Pagination logic
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>

      {/* 🔹 Search & Filter Options */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by User..."
          className="border p-2 rounded w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      {/* 🔹 Payment Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">User</th>
              <th className="border p-3">Amount</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Payment Method</th>
              <th className="border p-3">Invoice</th>
              <th className="border p-3">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPayments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border p-3">{payment.user}</td>
                <td className="border p-3">{payment.amount}</td>
                <td className="border p-3">{payment.date}</td>
                <td
                  className={`border p-3 font-semibold ${
                    payment.status === "Success"
                      ? "text-green-500"
                      : payment.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {payment.status}
                </td>
                <td className="border p-3">{payment.method}</td>
                <td className="border p-3">
                  {payment.status === "Success" && payment.invoiceLink ? (
                    <a
                      href={payment.invoiceLink}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="border p-3">{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className={`px-3 py-1 border rounded ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-1 border rounded bg-gray-200">
          {currentPage} / {totalPages}
        </span>
        <button
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
