// FilterBar.js
const FilterBar = () => (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700">Course Name</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Enter Course Name" />
        </div>
  
        <div>
          <label className="block text-gray-700">Course Publish Date</label>
          <input type="date" className="w-full border rounded p-2" />
        </div>
  
        <div>
          <label className="block text-gray-700">Status</label>
          <select className="w-full border rounded p-2">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
  
        <div>
          <label className="block text-gray-700">Course ID</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Enter Course ID" />
        </div>
  
        <div className="flex py-2 mb-1 mt-3 col-span-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full md:w-auto">
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
  
  export default FilterBar;
  