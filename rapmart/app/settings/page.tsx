import React from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const SettingsPage: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={{ ...styles.header, fontFamily: irishGrover.style.fontFamily }}>Settings</h1>
            <div style={styles.section}>
                <h2 style={styles.subHeader}>Profile</h2>
                <div style={styles.item}>
                    <label style={styles.label}>Username:</label>
                    <input type="text" style={styles.input} />
                </div>
                <div style={styles.item}>
                    <label style={styles.label}>Email:</label>
                    <input type="email" style={styles.input} />
                </div>
                <div style={styles.item}>
                    <label style={styles.label}>Password:</label>
                    <input type="password" style={styles.input} />
                </div>
                <button style={styles.button}>Save Changes</button>
            </div>
            <div style={styles.section}>
                <h2 style={styles.subHeader}>Preferences</h2>
                <div style={styles.item}>
                    <label style={styles.label}>Language:</label>
                    <select style={styles.input}>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                    </select>
                </div>
                <div style={styles.item}>
                    <label style={styles.label}>Theme:</label>
                    <select style={styles.input}>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
                <button style={styles.button}>Save Preferences</button>
            </div>
            <div style={styles.section}>
                <h2 style={styles.subHeader}>Notifications</h2>
                <div style={styles.item}>
                    <label style={styles.label}>Email Notifications:</label>
                    <input type="checkbox" style={styles.checkbox} />
                </div>
                <div style={styles.item}>
                    <label style={styles.label}>SMS Notifications:</label>
                    <input type="checkbox" style={styles.checkbox} />
                </div>
                <button style={styles.button}>Save Notifications</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#FFF2F2',
        color: '#2D336B',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '3em', // Increased font size
        marginBottom: '20px',
    },
    section: {
        marginBottom: '20px',
    },
    subHeader: {
        fontSize: '1.5em',
        marginBottom: '10px',
        color: '#7886C7',
    },
    item: {
        marginBottom: '10px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        padding: '8px',
        border: '1px solid #A9B5DF',
        borderRadius: '4px',
        width: '100%',
    },
    checkbox: {
        marginLeft: '10px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#2D336B',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default SettingsPage;