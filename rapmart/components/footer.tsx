import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.left}>
                <p>&copy; 2025 RVzyz Corporation. All rights reserved.</p>
                <p>Contact us: vicente2221464@mkt.ceu.edu.ph</p>
            </div>
            <div style={styles.right}>
                <p>Follow us on:</p>
                <a href="https://twitter.com/yourcompany" style={styles.link}>Twitter</a>
                <a href="https://facebook.com/yourcompany" style={styles.link}>Facebook</a>
                <a href="https://instagram.com/yourcompany" style={styles.link}>Instagram</a>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#2D336B',
        color: '#fff',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        textAlign: 'left' as 'left',
    },
    right: {
        textAlign: 'right' as 'right',
    },
    link: {
        color: '#fff',
        marginLeft: '0.5rem',
    },
};

export default Footer;