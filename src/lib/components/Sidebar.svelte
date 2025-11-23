<nav class="sidebar">
  <div class="logo">
    <img src="/images/agappe.jpeg" alt="Logo Ágappe" />
  </div>

  <ul class="menu">
    <li><a href="/">Home</a></li>
    <li><a href="/shop">Shop</a></li>
    <li><a href="/accessories">Accessories</a></li>
    <li><a href="/beauty">Beauty</a></li>
    <li><a href="/home-decor">Home Decor</a></li>
    <li><a href="/curate">Ágappe Curate</a></li>
    <li><a href="/sobre">About</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/ritual">Ritual</a></li>
  </ul>

  <footer class="ritual">
    <p>
      Ritual del día:<br />
      respira · siente · eleva
    </p>
  </footer>
</nav>

<style>
  .sidebar {
    width: 230px;
    background: var(--card-bg);
    border-right: 1px solid rgba(0, 0, 0, 0.04);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.25rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
  }

  .logo img {
    width: 132px;
    border-radius: 0.9rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  .menu {
    margin-top: 2.2rem;
    list-style: none;
    padding: 0;
  }

  .menu li + li {
    margin-top: 0.6rem;
  }

  .menu a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    display: block;
    padding: 0.45rem 0.2rem;
    border-radius: 999px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .menu a:hover {
    background: rgba(0, 0, 0, 0.03);
    color: var(--primary);
  }

  .ritual {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 900px) {
    .sidebar {
      display: none;
    }
  }
</style>
