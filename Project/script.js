/* Custom CSS for About Me page */

/* Global Styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #6b48ff 0%, #00ddeb 100%);
    padding: 100px 20px;
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    z-index: 1;
  }
  
  .hero h1 {
    position: relative;
    z-index: 2;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    animation: fadeInDown 1s ease-out;
  }
  
  .hero p {
    position: relative;
    z-index: 2;
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInUp 1s ease-out 0.3s;
    animation-fill-mode: both;
  }
  
  /* Navigation */
  nav {
    background-color: #ffffff;
    transition: all 0.3s ease;
  }
  
  nav .nav-link {
    color: #6b48ff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 15px;
    position: relative;
    transition: color 0.3s ease;
  }
  
  nav .nav-link:hover {
    color: #00ddeb;
  }
  
  nav .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #00ddeb;
    transition: width 0.3s ease;
  }
  
  nav .nav-link:hover::after {
    width: 100%;
  }
  
  /* Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero {
      padding: 60px 20px;
    }
  
    .hero h1 {
      font-size: 2.5rem;
    }
  
    .hero p {
      font-size: 1rem;
    }
  
    nav .nav-link {
      font-size: 0.9rem;
      padding: 8px 10px;
    }
  }
  
  @media (max-width: 576px) {
    .hero {
      padding: 40px 15px;
    }
  
    .hero h1 {
      font-size: 2rem;
    }
  
    nav .container {
      flex-direction: column;
      gap: 10px;
    }
  }