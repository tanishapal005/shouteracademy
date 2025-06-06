import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, X, ChevronDown, ChevronUp, Search, Check, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addrole = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roleName: "",
    description: "",
    permissions: [],
    status: "Active",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPermissionCategories, setShowPermissionCategories] = useState(true);

  const permissionCategories = {
    "User Management": [
      "Read Users",
      "Write Users",
      "Delete Users",
      "Manage User Roles",
    ],
    "Content Management": [
      "Create Content",
      "Edit Content",
      "Delete Content",
      "Publish Content",
    ],
    "System Administration": [
      "Edit Roles",
      "Manage System Settings",
      "View Audit Logs",
    ],
    "Reports & Analytics": [
      "Access Reports",
      "Generate Analytics",
      "Export Data",
    ],
    
  };

  const allPermissions = Object.values(permissionCategories).flat();

  const filteredPermissions = allPermissions.filter(permission =>
    permission.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.roleName.trim()) {
      newErrors.roleName = "Role name is required";
    } else if (formData.roleName.length > 50) {
      newErrors.roleName = "Role name must be less than 50 characters";
    }
    
    if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }
    
    if (formData.permissions.length === 0) {
      newErrors.permissions = "At least one permission is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(perm => perm !== permission)
        : [...prev.permissions, permission],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Role added successfully!");
      navigate("/roles");
    } catch (error) {
      toast.error("Failed to add role. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="flex justify-center mt-20 ml-60 p-6">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Add New Role</h2>
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="roleName" className="text-gray-700 font-medium mb-1">
              Role Name *
            </label>
            <input
              id="roleName"
              type="text"
              name="roleName"
              value={formData.roleName}
              onChange={handleChange}
              className={`border rounded-lg p-2 ${errors.roleName ? "border-red-500" : "border-gray-300"}`}
              placeholder="e.g., Administrator"
              maxLength={50}
            />
            {errors.roleName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.roleName}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-gray-700 font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className={`border rounded-lg p-2 ${errors.description ? "border-red-500" : "border-gray-300"}`}
              placeholder="Describe this role's responsibilities..."
              maxLength={500}
            />
            <div className="flex justify-between">
              {errors.description && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {errors.description}
                </p>
              )}
              <span className="text-xs text-gray-500 ml-auto">
                {formData.description.length}/500
              </span>
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-medium">
                Assign Permissions *
              </label>
              <button
                type="button"
                onClick={() => setShowPermissionCategories(!showPermissionCategories)}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                {showPermissionCategories ? (
                  <>
                    <ChevronUp size={16} className="mr-1" /> Hide Categories
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="mr-1" /> Show Categories
                  </>
                )}
              </button>
            </div>

            <div className="relative mb-4">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search permissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {errors.permissions && (
              <p className="text-red-500 text-sm mb-2 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.permissions}
              </p>
            )}

            <div className="border rounded-lg p-4 max-h-96 overflow-y-auto">
              {searchTerm ? (
                <div className="space-y-2">
                  {filteredPermissions.length > 0 ? (
                    filteredPermissions.map((permission, idx) => (
                      <label key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.permissions.includes(permission)}
                            onChange={() => handleCheckboxChange(permission)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.permissions.includes(permission) ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
                            {formData.permissions.includes(permission) && <Check size={14} className="text-white" />}
                          </div>
                        </div>
                        <span>{permission}</span>
                      </label>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No permissions found matching your search</p>
                  )}
                </div>
              ) : showPermissionCategories ? (
                Object.entries(permissionCategories).map(([category, permissions]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {permissions.map((permission, idx) => (
                        <label key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={formData.permissions.includes(permission)}
                              onChange={() => handleCheckboxChange(permission)}
                              className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.permissions.includes(permission) ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
                              {formData.permissions.includes(permission) && <Check size={14} className="text-white" />}
                            </div>
                          </div>
                          <span>{permission}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allPermissions.map((permission, idx) => (
                    <label key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={formData.permissions.includes(permission)}
                          onChange={() => handleCheckboxChange(permission)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.permissions.includes(permission) ? "bg-blue-600 border-blue-600" : "border-gray-300"}`}>
                          {formData.permissions.includes(permission) && <Check size={14} className="text-white" />}
                        </div>
                      </div>
                      <span>{permission}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {formData.permissions.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Selected permissions ({formData.permissions.length}):
                </p>
                <div className="flex flex-wrap gap-2">
                  {formData.permissions.map((permission, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center"
                    >
                      {permission}
                      <button
                        type="button"
                        onClick={() => handleCheckboxChange(permission)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2 flex gap-4 mt-6 border-t pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <PlusCircle size={18} /> Add Role
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              disabled={isSubmitting}
              className="px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
            >
              <X size={18} /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addrole;