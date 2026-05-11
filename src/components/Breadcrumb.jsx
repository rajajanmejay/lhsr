import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...pathnames.map((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const name = pathname.charAt(0).toUpperCase() + pathname.slice(1).replace('-', ' ');
      return { name, path };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        padding: '1rem 2.5rem',
        fontSize: '0.875rem',
        color: 'var(--muted)',
        borderBottom: '1px solid var(--border)',
        marginTop: '76px',
      }}
    >
      <ol
        style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} style={{ display: 'flex', alignItems: 'center' }}>
            {index === breadcrumbs.length - 1 ? (
              <span style={{ color: 'var(--white)' }}>{crumb.name}</span>
            ) : (
              <>
                <Link
                  to={crumb.path}
                  style={{
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--blue2)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--blue)')}
                >
                  {crumb.name}
                </Link>
                <span
                  style={{
                    margin: '0 0.5rem',
                    color: 'var(--border)',
                  }}
                >
                  /
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
