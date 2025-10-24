<nav class="sidebar">
  <div class="logo">
    <img src="/images/agappe.jpeg" alt="Logo Ágappe" />
  </div>
  <ul class="menu">
    <li><a href="/">Inicio</a></li>
    <li><a href="/colecciones">Colecciones</a></li>
    <li><a href="/ritual">Ritual</a></li>
    <li><a href="/sobre">Sobre Ágappe</a></li>
  </ul>
  <footer class="ritual">
    <p>Ritual del día:<br />respira · siente · eleva</p>
  </footer>
</nav>

<style>
  .sidebar {
    width: 220px;
    background: var(--card-bg);
    border-right: 1px solid rgba(0,0,0,0.05);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    position: fixed;
  }
  .logo img {
    width: 120px;
    border-radius: 0.8rem;
  }
  .menu {
    margin-top: 2rem;
    list-style: none;
    padding: 0;
  }
  .menu li {
    margin-bottom: 1rem;
  }
  .menu a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 500;
  }
  .menu a:hover {
    color: var(--primary);
  }
  .ritual {
    font-size: 0.8rem;
    color: var(--text-muted);
    text-align: center;
  }
</style>
