<script lang="ts">
  import "../lib/styles/themes.css";
  import { page } from "$app/stores";

  type NavLink = { name: string; href: string };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Accessories", href: "/accessories" },
    { name: "Beauty", href: "/beauty" },
    { name: "Home Decor", href: "/home-decor" },
    { name: "Ágappe Curate", href: "/curate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
</script>

<div class="layout">
  <header class="header">
    <a href="/" class="logo">
      <img src="/images/agape.jpeg" alt="Ágappe logo" class="logo-img" />
      <span class="logo-text">ÁGAPPE</span>
    </a>

    <nav class="nav">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-link {($page.url.pathname === link.href) ||
          ($page.url.pathname.startsWith(link.href) && link.href !== "/")
            ? "active"
            : ""}"
          aria-label={link.name}
        >
          {link.name}
        </a>
      {/each}
    </nav>
  </header>

  <main class="page">
    <slot />
  </main>

  <footer class="footer">
    <section class="footer-inner">
      <div class="footer-brand">
        <p class="footer-logo">ÁGAPPE</p>
        <p class="footer-tagline">Curated treasures with elegance.</p>
      </div>

      <div class="footer-cols">
        <div>
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/curate">Ágappe Curate</a>
        </div>
        <div>
          <h4>Brand</h4>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Follow</h4>
          <span>Instagram</span>
          <span>TikTok</span>
        </div>
      </div>
    </section>

    <p class="footer-bottom">
      © {new Date().getFullYear()} Ágappe — Elegance with intention.
    </p>
  </footer>
</div>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at top, #f9f1e7 0, var(--bg-cream) 45%, #f2e5d6 100%);
    color: var(--text-main);
    font-family: var(--font-sans);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem;
    border-bottom: 1px solid var(--border-subtle);
    background: rgba(246, 239, 230, 0.98);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.6rem;
  }

  .logo-img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 18px rgba(207, 166, 103, 0.45);
  }

  .logo-text {
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.16em;
    color: var(--emerald);
  }

  .nav {
    display: flex;
    gap: 1.5rem;
  }

  .nav-link {
    position: relative;
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding-bottom: 0.15rem;
    transition: color 0.2s ease;
  }

  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--gold), var(--emerald));
    transition: width 0.25s ease;
  }

  .nav-link:hover {
    color: var(--emerald);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-link.active {
    color: var(--wine);
  }

  .nav-link.active::after {
    width: 100%;
  }

  .page {
    flex: 1;
    padding: 2.5rem 1.5rem 3.5rem;
  }

  .footer {
    padding: 2rem 1.5rem 1rem;
    background: linear-gradient(180deg, #f3e6d7, #e9daca);
    border-top: 1px solid var(--border-subtle);
  }

  .footer-inner {
    max-width: 1120px;
    margin: 0 auto 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-logo {
    font-family: var(--font-serif);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 1.1rem;
  }

  .footer-tagline {
    color: var(--text-muted);
    margin-top: 0.4rem;
  }

  .footer-cols {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .footer-cols h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 0.4rem;
  }

  .footer-cols a,
  .footer-cols span {
    display: block;
    font-size: 0.9rem;
    color: var(--text-muted);
    text-decoration: none;
    margin-bottom: 0.2rem;
  }

  .footer-cols a:hover {
    color: var(--emerald);
  }

  .footer-bottom {
    max-width: 1120px;
    margin: 0 auto;
    text-align: left;
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .header {
      padding: 0.7rem 1rem;
    }

    .nav {
      gap: 0.9rem;
      font-size: 0.78rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .page {
      padding: 1.8rem 1rem 2.8rem;
    }

    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
