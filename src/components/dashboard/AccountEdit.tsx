import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useUpdateProfileMutation } from "../../store/api/userApi"; // Import the RTK Query hook
import { toast } from "react-toastify";
import LayoutV6 from "../layouts/LayoutV6";

const ProfileEdit = () => {
  const navigate = useNavigate();
  let auth = useSelector((state: RootState) => state.user);
  // Fallback to localStorage if Redux user is missing
  if (!auth.user && typeof window !== "undefined") {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      auth = { ...auth, user: JSON.parse(userStr) };
    }
  }
  const [updateProfile, { isLoading }] = useUpdateProfileMutation(); // Use RTK Query hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/");
    } else if (auth.user) {
      setFormData({
        name: auth.user.name || "",
        email: auth.user.email || "",
        phone: auth.user.phone || "",
      });
    }
  }, [auth, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateProfile({
        name: formData.name,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      }).unwrap(); // unwrap() throws an error if the request fails

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <LayoutV6 breadCrumb="Edit Profile" title="Edit Profile">
      <div className="my-account-content account-edit">
        <form onSubmit={handleSubmit} className="" id="form-profile-edit">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="John Doe"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              readOnly
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneInput"
              placeholder="123-456-7890"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </LayoutV6>
  );
};

export default ProfileEdit;
