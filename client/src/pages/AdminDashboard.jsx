import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ productCount: 0, contactCount: 0 });
    const [contacts, setContacts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const isAdmin = localStorage.getItem('isAdmin');

        if (!token || isAdmin !== 'true') {
            navigate('/admin/login');
            return;
        }

        fetchData(token);
    }, [navigate]);

    const fetchData = async (token) => {
        try {
            const [statsRes, contactsRes, productsRes] = await Promise.all([
                fetch('http://localhost:5000/api/admin/stats', {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch('http://localhost:5000/api/admin/contacts', {
                    headers: { 'Authorization': `Bearer ${token}` }
                }),
                fetch('http://localhost:5000/api/products')
            ]);

            if (statsRes.ok && contactsRes.ok && productsRes.ok) {
                const statsData = await statsRes.json();
                const contactsData = await contactsRes.json();
                const productsData = await productsRes.json();

                setStats(statsData || { productCount: 0, contactCount: 0 });
                setContacts(Array.isArray(contactsData) ? contactsData : []);
                // Products API returns {success, count, data} structure
                const productsArray = productsData.data || productsData;
                setProducts(Array.isArray(productsArray) ? productsArray : []);
            } else {
                setError('Failed to fetch data');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>

            <div className="stats-container">
                <div className="stat-card">
                    <h3>Total Products</h3>
                    <p className="stat-number">{stats.productCount}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Contacts</h3>
                    <p className="stat-number">{stats.contactCount}</p>
                </div>
            </div>

            <div className="data-section">
                <h2>Contact Messages</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Phone</th>
                                <th>Interest</th>
                                <th>Message</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(contacts) && contacts.length > 0 ? (
                                contacts.map((contact) => (
                                    <tr key={contact._id}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.company}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.interest}</td>
                                        <td>{contact.message}</td>
                                        <td>{new Date(contact.date).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center' }}>No contact messages yet</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="data-section">
                <h2>Products</h2>
                <div className="products-grid">
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p className="category">{product.category}</p>
                                <p className="description">{product.description}</p>
                                <ul className="features">
                                    {Array.isArray(product.features) && product.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
