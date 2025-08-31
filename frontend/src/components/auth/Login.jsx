import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { USER_ENDPOINT } from "../../assets/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.role) newErrors.role = "Role is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      try {
      const res = await fetch(`${USER_ENDPOINT}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSuccess(false);
        setErrors({ apiError: data.message || "Signup failed" });
        console.error("Signup Error:", data);
      } else {
        // Save token in localStorage/sessionStorage
        setSuccess(true);
        setErrors({});
        localStorage.setItem("token", data.token);
        console.log("Signup Success:", data);
        navigate("/");

        // Redirect user
       // navigate("/dashboard");
      }
    } catch (error) {
      setSuccess(false);
      setErrors({ apiError: "Server error. Try again later." });
      console.error("Error:", error);
    }
  }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="text-center mb-4">Login</h2>
        {success && <Alert variant="success">Login Successful!</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label column sm={4}>
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPassword">
            <Form.Label column sm={4}>
              Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formRole">
            <Form.Label column sm={4}>
              Role
            </Form.Label>
            <Col sm={8}>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  label="User"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleChange}
                  isInvalid={!!errors.role}
                  className="me-3"
                />
                <Form.Check
                  type="radio"
                  label="Admin"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                  isInvalid={!!errors.role}
                />
              </div>
              {errors.role && (
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              )}
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button
              variant="secondary"
              type="reset"
              onClick={() => setFormData({ email: "", password: "" })}
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
