export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 md:px-12 lg:px-20 py-8 mt-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
        <p>
          &copy; {year} Juan Pablo Tazzioli
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:juanpablotazzioli@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/juanpablotazzioli/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>Valencia, Spain</span>
        </div>
      </div>
    </footer>
  );
}
