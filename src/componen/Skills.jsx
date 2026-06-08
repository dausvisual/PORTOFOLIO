export default function Skills() {
  const techSkills = [
    { name: 'ArcGIS', pct: '95%' }, { name: 'QGIS', pct: '90%' },
    { name: 'AutoCAD', pct: '85%' }, { name: 'Global Mapper', pct: '85%' },
    { name: 'Drone Mapping', pct: '90%' }, { name: 'GNSS & Total Station', pct: '90%' }
  ];
  const softSkills = [
    { icon: 'bx-brain', name: 'Problem Solving' }, { icon: 'bx-pie-chart-alt', name: 'Analytical Thinking' },
    { icon: 'bx-group', name: 'Team Collaboration' }, { icon: 'bx-message-rounded-dots', name: 'Communication' },
    { icon: 'bx-task', name: 'Project Management' }, { icon: 'bx-refresh', name: 'Adaptability' }
  ];

  return (
    <section id="skills">
      <h5 className="heading-sm">SKILLS</h5>
      <h2 className="heading">My Expertise & Skills</h2>
      <div className="skills-container">
        <div>
          <h3 style={{marginBottom: '3rem', fontSize: '2rem'}}>Technical Skills</h3>
          {techSkills.map((s, i) => (
            <div className="skill-bar" key={i}>
              <div className="skill-info"><span>{s.name}</span><span>{s.pct}</span></div>
              <div className="progress-bg"><div className="progress-fill" style={{width: s.pct}}></div></div>
            </div>
          ))}
        </div>
        <div>
          <h3 style={{marginBottom: '3rem', fontSize: '2rem'}}>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((s, i) => (
              <div className="soft-card" key={i}>
                <i className={`bx ${s.icon}`}></i>
                <p>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}