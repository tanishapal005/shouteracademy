// FilterBar.js
const FilterBar = () => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <div className="grid grid-cols-4 gap-4">
      <div>
        <label className="block text-gray-700">Search</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Search..." />
      </div>
   
      <div>
        <label className="block text-gray-700">Courses</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Enter Course" />
      </div>
      <div>
        <label className="block text-gray-700">Status</label>
        <select className="w-full border rounded p-2">
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className=" flex py-2 mb-1 mt-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Show Results</button>
      </div>
    </div>
  </div>
);
export default FilterBar;
