import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const People = () => {
  const [peopleData, setPeopleData] = useState({
    faculty: [],
    assocFaculty: [],
    phd: [],
    mtech: [],
    research: [],
    staff: [],
    alumni: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheBuster = new Date().getTime();
    const csvUrl = `${import.meta.env.BASE_URL}LHSR_Website_Consolidated.csv?v=${cacheBuster}`;

    fetch(csvUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Could not load CSV — HTTP ' + res.status);
        return res.text();
      })
      .then((csv) => {
        const data = Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (h) => h.trim().replace(/^\uFEFF/, ''),
        }).data;

        const grouped = {
          faculty: [],
          assocFaculty: [],
          phd: [],
          mtech: [],
          research: [],
          staff: [],
          alumni: [],
        };

        const normalizeExternalUrl = (url) => {
          const value = (url || '').trim();
          if (!value) return '';
          return /^https?:\/\//i.test(value) ? value : `https://${value}`;
        };

        data.forEach((person) => {
          if (!person.Name || !person.Name.trim()) return;

          const p = { ...person };
          p.imgId = p.ID ? p.ID.trim() : '';
          p.linkedInProfile = normalizeExternalUrl(p.LinkedIn_Profile);
          p.websiteUrl = p.Website_Link ? normalizeExternalUrl(p.Website_Link) : '';
          p.googleScholar = p.Google_Scholar ? normalizeExternalUrl(p.Google_Scholar) : '';

          const role = (p.Role || '').toLowerCase();
          const category = (p.Category || '').toLowerCase();

          if (category.includes('faculty')) {
            if (category.includes('associated') || category.includes('adjunct')) {
              grouped.assocFaculty.push(p);
            } else {
              grouped.faculty.push(p);
            }
          } else {
            if (category.includes('alumni')) {
              grouped.alumni.push(p);
            } else if (role.includes('phd')) {
              grouped.phd.push(p);
            } else if (
              role.includes('mtech') ||
              role.includes('m.tech') ||
              role.includes('m tech') ||
              role.includes('m. tech')
            ) {
              grouped.mtech.push(p);
            } else if (category.includes('research')) {
              grouped.research.push(p);
            } else if (category.includes('staff')) {
              grouped.staff.push(p);
            } else {
              grouped.research.push(p); // default to research if unspecified
            }
          }
        });

        setPeopleData(grouped);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading/parsing CSV:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const renderFacultyCard = (person) => {
    const initial = person.Name.charAt(0).toUpperCase();
    return (
      <div key={person.imgId || person.Name} className="faculty-card">
        <div className="faculty-photo-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/${person.imgId}.jpg`}
            alt={person.Name}
            onError={(e) => {
              if (!e.target.dataset.retried) {
                e.target.dataset.retried = true;
                e.target.src = `${import.meta.env.BASE_URL}images/${person.imgId}.jpeg`;
              } else {
                e.target.parentNode.classList.add('no-image');
                e.target.style.display = 'none';
                if (!e.target.parentNode.querySelector('.faculty-letter')) {
                  const letterDiv = document.createElement('div');
                  letterDiv.className = 'faculty-letter';
                  letterDiv.innerText = initial;
                  e.target.parentNode.appendChild(letterDiv);
                }
              }
            }}
          />
          <div className="faculty-card-base">
            <div className="faculty-name">{person.Name}</div>
            <div className="faculty-role">{person.Role || ''}</div>
          </div>
          <div className="faculty-card-hover">
            <div className="faculty-name">{person.Name}</div>
            <div className="faculty-role">{person.Role || ''}</div>
            <p className="faculty-research">{person.Research_Field || ''}</p>
            {person.Hobbies && (
              <p className="faculty-research" style={{ marginTop: '8px', fontStyle: 'italic' }}>
                <strong>Hobbies:</strong> {person.Hobbies}
              </p>
            )}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '12px',
              }}
            >
              {person.linkedInProfile && (
                <a
                  className="people-card-linkedin"
                  href={person.linkedInProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              )}
              {person.googleScholar && (
                <a
                  className="people-card-linkedin"
                  href={person.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scholar ↗
                </a>
              )}
              {person.websiteUrl && (
                <a
                  className="people-card-linkedin"
                  href={person.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPeopleCard = (person) => {
    const initial = person.Name.charAt(0).toUpperCase();
    return (
      <div key={person.imgId || person.Name} className="people-card">
        <div className="people-card-photo-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/${person.imgId}.jpg`}
            alt={person.Name}
            onError={(e) => {
              if (!e.target.dataset.retried) {
                e.target.dataset.retried = true;
                e.target.src = `${import.meta.env.BASE_URL}images/${person.imgId}.jpeg`;
              } else {
                e.target.parentNode.classList.add('no-image');
                e.target.style.display = 'none';
                if (!e.target.parentNode.querySelector('.people-card-letter')) {
                  const letterDiv = document.createElement('div');
                  letterDiv.className = 'people-card-letter';
                  letterDiv.innerText = initial;
                  e.target.parentNode.appendChild(letterDiv);
                }
              }
            }}
          />
          <div className="people-card-base">
            <div className="people-card-name">{person.Name}</div>
            <div className="people-card-role">{person.Role || ''}</div>
          </div>
          <div className="people-card-hover">
            <div className="people-card-name">{person.Name}</div>
            <div className="people-card-role">{person.Role || ''}</div>
            {person.Research_Field && (
              <div className="people-card-research">{person.Research_Field}</div>
            )}
            {person.Hobbies && (
              <div
                className="people-card-research"
                style={{ fontSize: '0.8rem', marginTop: '4px', opacity: 0.9 }}
              >
                <em>Hobbies: {person.Hobbies}</em>
              </div>
            )}
            {person.linkedInProfile && (
              <a
                className="people-card-linkedin"
                href={person.linkedInProfile}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 'auto' }}
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page active" id="page-people">
      <div className="page-header">
        <div className="page-header-meta">Our People</div>
        <h1>Meet the Team</h1>
        <p>
          A multidisciplinary group of researchers dedicated to pushing the boundaries of high-speed
          aerodynamics and shock wave physics.
        </p>
      </div>

      <div className="page-content">
        {loading && <p>Loading team members...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && (
          <>
            {peopleData.faculty.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Core Faculty</h2>
                  <span className="people-count">
                    {String(peopleData.faculty.length).padStart(2, '0')} members
                  </span>
                </div>
                <div className="faculty-grid">{peopleData.faculty.map(renderFacultyCard)}</div>
              </section>
            )}

            {peopleData.assocFaculty.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Associated & Adjunct Faculty</h2>
                  <span className="people-count">
                    {String(peopleData.assocFaculty.length).padStart(2, '0')} members
                  </span>
                </div>
                <div className="faculty-grid">{peopleData.assocFaculty.map(renderFacultyCard)}</div>
              </section>
            )}

            {peopleData.phd.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Ph.D. Scholars</h2>
                  <span className="people-count">
                    {String(peopleData.phd.length).padStart(2, '0')} students
                  </span>
                </div>
                <div className="people-grid">{peopleData.phd.map(renderPeopleCard)}</div>
              </section>
            )}

            {peopleData.mtech.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">M.Tech. (Research) Scholars</h2>
                  <span className="people-count">
                    {String(peopleData.mtech.length).padStart(2, '0')} students
                  </span>
                </div>
                <div className="people-grid">{peopleData.mtech.map(renderPeopleCard)}</div>
              </section>
            )}

            {peopleData.research.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Research Fellows & Assistants</h2>
                  <span className="people-count">
                    {String(peopleData.research.length).padStart(2, '0')} members
                  </span>
                </div>
                <div className="people-grid">{peopleData.research.map(renderPeopleCard)}</div>
              </section>
            )}

            {peopleData.staff.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Technical & Project Staff</h2>
                  <span className="people-count">
                    {String(peopleData.staff.length).padStart(2, '0')} members
                  </span>
                </div>
                <div className="people-grid">{peopleData.staff.map(renderPeopleCard)}</div>
              </section>
            )}

            {peopleData.alumni.length > 0 && (
              <section className="people-section">
                <div className="people-section-header">
                  <h2 className="people-section-title">Alumni</h2>
                  <span className="people-count">
                    {String(peopleData.alumni.length).padStart(2, '0')} members
                  </span>
                </div>
                <div className="people-grid">{peopleData.alumni.map(renderPeopleCard)}</div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default People;
