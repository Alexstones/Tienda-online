<script lang="ts">
  import "../lib/styles/themes.css";

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Colecciones", href: "/colecciones" },
    { name: "Sobre Ágappe", href: "/sobre" },
    { name: "Contacto", href: "/contacto" }
  ];
</script>

<div class="layout">
  <header class="header">
    <a href="/" class="logo">
      <img src="/images/agape.jpeg" alt="Ágappe Logo" class="logo-img" />
      <span class="logo-text">ÁGAPPE</span>
    </a>

    <nav class="nav">
      {#each navLinks as link}
        <a href={link.href} class="nav-link" aria-label={link.name}>{link.name}</a>
      {/each}
    </nav>
  </header>

  <main class="page">
    <slot />
  </main>

  <footer class="footer">
    <p>© {new Date().getFullYear()} Ágappe · Tesoros con alma ✨</p>
  </footer>
</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #faf9f6, #f1efea);
    color: var(--text-main);
    font-family: var(--font-sans);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.6rem;
  }

  .logo-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
  }

  .logo-text {
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary-deep);
  }

  .nav {
    display: flex;
    gap: 1.5rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    transition: color 0.2s ease;
  }
  .nav-link:hover {
    color: var(--primary);
  }

  .page {
    flex: 1;
    padding: 2rem 1rem;
  }

  .footer {
    text-align: center;
    padding: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(6px);
  }
</style>
