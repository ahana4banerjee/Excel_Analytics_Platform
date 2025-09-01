import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { FaUsers, FaBoxOpen, FaChartLine, FaTools } from "react-icons/fa";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);
  const [showUser, setShowUser] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({ name: "", email: "", role: "" });

  const handleUserShow = (user = null) => {
    setEditingUser(user);
    setUserForm(user || { name: "", email: "", role: "" });
    setShowUser(true);
  };
  const handleUserClose = () => setShowUser(false);
  const handleUserChange = (e) =>
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  const handleUserSave = () => {
    if (editingUser) {
      setUsers(
        users.map((u) =>
          u.id === editingUser.id ? { ...userForm, id: u.id } : u
        )
      );
    } else {
      setUsers([...users, { ...userForm, id: users.length + 1 }]);
    }
    handleUserClose();
  };
  const handleUserDelete = (id) => setUsers(users.filter((u) => u.id !== id));

  const [products, setProducts] = useState([
    { id: 1, name: "Data Cleaning Toolkit", price: 1500, stock: 100 },
    { id: 2, name: "Sales Report Template", price: 750, stock: 200 },
    { id: 3, name: "Financial Dashboard Pack", price: 2500, stock: 50 },
  ]);
  const [showProduct, setShowProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleProductShow = (product = null) => {
    setEditingProduct(product);
    setProductForm(product || { name: "", price: "", stock: "" });
    setShowProduct(true);
  };
  const handleProductClose = () => setShowProduct(false);
  const handleProductChange = (e) =>
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  const handleProductSave = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...productForm, id: p.id } : p
        )
      );
    } else {
      setProducts([...products, { ...productForm, id: products.length + 1 }]);
    }
    handleProductClose();
  };
  const handleProductDelete = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Monthly Sales",
      description: "Sales data for the last month",
    },
    {
      id: 2,
      title: "User Growth",
      description: "New user registrations and trends",
    },
  ]);
  const [showReport, setShowReport] = useState(false);
  const [editingReport, setEditingReport] = useState(null);
  const [reportForm, setReportForm] = useState({ title: "", description: "" });

  const handleReportShow = (report = null) => {
    setEditingReport(report);
    setReportForm(report || { title: "", description: "" });
    setShowReport(true);
  };
  const handleReportClose = () => setShowReport(false);
  const handleReportChange = (e) =>
    setReportForm({ ...reportForm, [e.target.name]: e.target.value });
  const handleReportSave = () => {
    if (editingReport) {
      setReports(
        reports.map((r) =>
          r.id === editingReport.id ? { ...reportForm, id: r.id } : r
        )
      );
    } else {
      setReports([...reports, { ...reportForm, id: reports.length + 1 }]);
    }
    handleReportClose();
  };
  const handleReportDelete = (id) =>
    setReports(reports.filter((r) => r.id !== id));
  const [settings, setSettings] = useState([
    { id: 1, key: "Site Name", value: "Excel Analytics Platform" },
    { id: 2, key: "Theme", value: "Dark" },
    { id: 3, key: "User Role", value: "Admin, User" },
  ]);
  const [showSetting, setShowSetting] = useState(false);
  const [editingSetting, setEditingSetting] = useState(null);
  const [settingForm, setSettingForm] = useState({ key: "", value: "" });

  const handleSettingShow = (setting = null) => {
    setEditingSetting(setting);
    setSettingForm(setting || { key: "", value: "" });
    setShowSetting(true);
  };
  const handleSettingClose = () => setShowSetting(false);
  const handleSettingChange = (e) =>
    setSettingForm({ ...settingForm, [e.target.name]: e.target.value });
  const handleSettingSave = () => {
    if (editingSetting) {
      setSettings(
        settings.map((s) =>
          s.id === editingSetting.id ? { ...settingForm, id: s.id } : s
        )
      );
    } else {
      setSettings([...settings, { ...settingForm, id: settings.length + 1 }]);
    }
    handleSettingClose();
  };
  const handleSettingDelete = (id) =>
    setSettings(settings.filter((s) => s.id !== id));

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4 text-center">Admin Dashboard</h2>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4 className="fw-bold mb-3">
            <FaUsers className="me-2 text-danger" />
            Manage Users
          </h4>
          <div className="text-end mb-2">
            <Button variant="success" onClick={() => handleUserShow()}>
              + Add User
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleUserShow(u)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleUserDelete(u.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4 className="fw-bold mb-3">
            <FaBoxOpen className="me-2 text-primary" />
            Manage Products
          </h4>
          <div className="text-end mb-2">
            <Button variant="success" onClick={() => handleProductShow()}>
              + Add Product
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleProductShow(p)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleProductDelete(p.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4 className="fw-bold mb-3">
            <FaChartLine className="me-2 text-success" />
            Manage Analytics
          </h4>
          <div className="text-end mb-2">
            <Button variant="success" onClick={() => handleReportShow()}>
              + Add Report
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r, i) => (
                <tr key={r.id}>
                  <td>{i + 1}</td>
                  <td>{r.title}</td>
                  <td>{r.description}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleReportShow(r)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleReportDelete(r.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4 className="fw-bold mb-3">
            <FaTools className="me-2 text-secondary" />
            Manage Settings
          </h4>
          <div className="text-end mb-2">
            <Button variant="success" onClick={() => handleSettingShow()}>
              + Add Setting
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Key</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {settings.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.key}</td>
                  <td>{s.value}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleSettingShow(s)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleSettingDelete(s.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Modal show={showUser} onHide={handleUserClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingUser ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userForm.name}
                onChange={handleUserChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userForm.email}
                onChange={handleUserChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={userForm.role}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUserClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUserSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showProduct} onHide={handleProductClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProduct ? "Edit Product" : "Add Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productForm.price}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={productForm.stock}
                onChange={handleProductChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleProductClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleProductSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showReport} onHide={handleReportClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingReport ? "Edit Report" : "Add Report"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={reportForm.title}
                onChange={handleReportChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={reportForm.description}
                onChange={handleReportChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReportClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleReportSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSetting} onHide={handleSettingClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingSetting ? "Edit Setting" : "Add Setting"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Key</Form.Label>
              <Form.Control
                type="text"
                name="key"
                value={settingForm.key}
                onChange={handleSettingChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                name="value"
                value={settingForm.value}
                onChange={handleSettingChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSettingClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSettingSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
