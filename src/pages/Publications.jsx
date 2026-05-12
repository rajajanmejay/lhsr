import React, { useState, useMemo } from 'react';

const Publications = () => {
  const [yearFilter, setYearFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const scholarProfiles = [
    {
      name: 'Gopalan Jagadeesh',
      role: 'Professor',
      link: 'https://scholar.google.com/citations?user=eVRuYlgAAAAJ&hl=en',
    },
    {
      name: 'Srisha Rao M V',
      role: 'Associate Professor',
      link: 'https://scholar.google.com/citations?hl=en&user=eURBmWYAAAAJ',
    },
    {
      name: 'S Saravanan',
      role: 'Principal Research Scientist',
      link: 'https://scholar.google.com/citations?user=cDLhMckAAAAJ&hl=en',
    },
  ];

  const publications = [
    {
      year: '2026',
      title: 'Turbulent spots in hypersonic transitional planar and axisymmetric boundary layers',
      authors: 'Bajpai Ankit, Jagadeesh Gopalan',
      meta: 'Journal of Fluid Mechanics, 2026',
      link: 'https://arxiv.org/abs/2601.08795',
      linkText: 'DOI ↗',
    },
    {
      year: '2026',
      title: 'Kinematics of Single-Winged Spinning Seeds: A Study on Mahogany and Buddha Coconut Samaras',
      authors: 'Rajkamal Sah, Yogeshwaran G, Srisha M V Rao, Gopalan Jagadeesh',
      meta: 'Physics of Fluids, 2026',
      link: 'https://arxiv.org/abs/2603.08746',
      linkText: 'View Paper ↗',
    },
    {
      year: '2025',
      title: 'Experimental Investigation of Lift-Up and Instability Characteristics Induced by a Rotating Cone-Cylinder Model',
      authors: 'Rajkamal Sah, Sumit Sunil Tambe, Jagadeesh Gopalan',
      meta: 'Physics of Fluids, Vol. 37, Issue 7, 074108, 2025',
      link: 'https://pubs.aip.org/aip/pof/article/37/7/074108/3354898',
      linkText: 'DOI ↗',
    },
    {
      year: '2024',
      title: 'Dynamics of Wingtip Vortex in Natural Samaras',
      authors: 'Yogeshwaran G, Srisha M.V. Rao, Jagadeesh G',
      meta: 'Physics of Fluids, Vol. 36, Issue 12, 123621, 2024',
      link: 'https://pubs.aip.org/aip/pof/article/36/12/123621/3325721/Dynamics-of-wingtip-vortex-in-natural-samaras',
      linkText: 'DOI ↗',
    },
    {
      year: '2024',
      title: 'Surrogate model based multi-objective optimisation of supercritical CO2 ejectors',
      authors: 'S. Paul, R. P. Srikar, Srisha Rao M V, P. Kumar',
      meta: 'International Journal of Refrigeration, 2024',
      link: 'https://www.sciencedirect.com/science/article/abs/pii/S0896844624003280',
      linkText: 'View publication ↗',
    },
    {
      year: '2023',
      title: 'Low-frequency unsteadiness of recompression shock structures in the diffuser of supersonic ejectors',
      authors: 'P. Gupta, P. Kumar, Srisha Rao M V',
      meta: 'Physics of Fluids, 2023',
      link: 'https://doi.org/10.1063/5.0137051',
      linkText: 'DOI ↗',
    },
    {
      year: '2022',
      title: 'Shock-induced leading-edge separation in hypersonic flows',
      authors: 'L. Srinath, R. Sriram, P. Akhilesh, G. Jagadeesh',
      meta: 'Journal of Fluid Mechanics, 2022',
      link: 'https://doi.org/10.1017/jfm.2022.619',
      linkText: 'DOI ↗',
    },
    {
      year: '2022',
      title: 'Artificial neural network model for single-phase real gas ejectors',
      authors: 'P. Gupta, Srisha Rao M V, P. Kumar',
      meta: 'Applied Thermal Engineering, 2022',
      link: 'https://doi.org/10.1016/j.applthermaleng.2021.117615',
      linkText: 'DOI ↗',
    },
    {
      year: '2021',
      title: 'Length scale for the estimation of buzz frequency in the limit of high mechanical blockage in mixed-compression intakes',
      authors: 'M. K. K. Devaraj, P. Jutur, Srisha M V Rao, G. Jagadeesh, G. T. K. Anavardham',
      meta: 'Journal of Fluid Mechanics, 2021',
      link: 'https://doi.org/10.1017/jfm.2021.230',
      linkText: 'DOI ↗',
    },
    {
      year: '2021',
      title: 'Investigation of local unstart in a hypersonic scramjet intake at a Mach number of 6',
      authors: 'M. K. K. Devaraj, P. Jutur, Srisha M V Rao, G. Jagadeesh, G. T. K. Anavardham',
      meta: 'Aerospace Science and Technology, 2021',
      link: 'https://doi.org/10.1016/j.ast.2021.106789',
      linkText: 'DOI ↗',
    },
    {
      year: '2021',
      title: 'Effect of the axial cavity with an opposing high-pressure jet combination in a Mach 6 flow condition',
      authors: 'B. Sudarshan, S. M. Rao, G. Jagadeesh, S. Saravanan',
      meta: 'Acta Astronautica, 2021',
      link: 'https://doi.org/10.1016/j.actaastro.2020.09.021',
      linkText: 'DOI ↗',
    },
    {
      year: '2021',
      title: 'Insights into the shockwave attenuation in miniature shock tubes',
      authors: 'S. Janardhanraj, K. Abhishek, G. Jagadeesh',
      meta: 'Experimental Thermal and Fluid Science, 2021',
      link: 'https://cir.nii.ac.jp/crid/1360588384083606528',
      linkText: 'View record ↗',
    },
    {
      year: '2020',
      title: 'Experimental investigation of unstart dynamics driven by subsonic spillage in a hypersonic scramjet intake at Mach 6',
      authors: 'M. K. K. Devaraj, P. Jutur, Srisha M V Rao, G. Jagadeesh, G. T. K. Anavardham',
      meta: 'Physics of Fluids, 2020',
      link: 'https://doi.org/10.1063/1.5135096',
      linkText: 'DOI ↗',
    },
    {
      year: '2020',
      title: 'Impulse loading of plates using a diverging shock tube',
      authors: 'O. S. Isaac, G. Jagadeesh',
      meta: 'Experimental Mechanics, 2020',
      link: 'https://doi.org/10.1007/s11340-020-00576-7',
      linkText: 'DOI ↗',
    },
  ];

  const years = ['All', ...Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a)];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return publications.filter((pub) => {
      const matchesYear = yearFilter === 'All' || pub.year === yearFilter;
      const matchesSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.authors.toLowerCase().includes(q) ||
        pub.meta.toLowerCase().includes(q);
      return matchesYear && matchesSearch;
    });
  }, [yearFilter, searchQuery]);

  return (
    <div className="page active" id="page-publications">
      <div className="page-header">
        <div className="page-header-meta">Publications</div>
        <h1>Selected Works</h1>
        <p>
          A sample of recent publications from the laboratory spanning experimental fluid dynamics,
          chemical kinetics, and applied shock wave research.
        </p>
      </div>
      <div className="page-content" style={{ maxWidth: '900px', padding: '5rem 2.5rem' }}>
        <section className="scholar-panel" aria-labelledby="scholar-profiles-title">
          <div className="section-tag" id="scholar-profiles-title">
            Google Scholar
          </div>
          <div className="scholar-grid">
            {scholarProfiles.map((profile) => (
              <div className="scholar-card" key={profile.name}>
                <div className="scholar-card-name">{profile.name}</div>
                <div className="scholar-card-role">{profile.role}</div>
                <a
                  className="scholar-link"
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <div className="pub-controls">
          <input
            className="pub-search"
            type="search"
            placeholder="Search by title, author, or journal…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search publications"
          />
          <div className="pub-year-filters" role="group" aria-label="Filter by year">
            {years.map((y) => (
              <button
                key={y}
                className={`pub-year-btn${yearFilter === y ? ' active' : ''}`}
                onClick={() => setYearFilter(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="pub-empty">No publications match your search.</p>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filtered.map((pub, idx) => (
            <article key={idx} className="publication-item">
              <div className="publication-year">{pub.year}</div>
              <div>
                <div className="publication-title">{pub.title}</div>
                <div className="publication-authors">{pub.authors}</div>
                <div className="publication-meta">{pub.meta}</div>
                <a
                  className="publication-link"
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
