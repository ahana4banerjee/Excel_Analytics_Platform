import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { USER_ENDPOINT } from "../../assets/utils";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";
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
      const response = await fetch(`${USER_ENDPOINT}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setErrors({});
        console.log("Signup Success:", data);
      } else {
        setSuccess(false);
        setErrors({ apiError: data.message || "Signup failed" });
        console.error("Signup Error:", data);
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
        <h2 className="text-center mb-4">Sign Up</h2>
        {success && <Alert variant="success">Signup Successful!</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column sm={4}>
              Name
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
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
          <Form.Group as={Row} className="mb-3" controlId="formConfirmPassword">
            <Form.Label column sm={4}>
              Confirm Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="success" type="submit">
              Sign Up
            </Button>
            <Button
              variant="secondary"
              type="reset"
              onClick={() =>
                setFormData({ name: "", email: "", password: "", confirmPassword: "" })
              }
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
