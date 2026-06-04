export default function CarrierCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-department">{job.department}</p>
        </div>
        <div className="job-count">{job.count} pozíció</div>
      </div>
      <div className="job-details">
        <p className="job-description">{job.description}</p>
        <div className="job-requirements">
          <strong>Előnyök:</strong> {job.requirements.join(", ")}
        </div>
        <div className="job-meta">
          <span className="job-type">{job.type}</span>
          <span className="job-location">{job.location}</span>
        </div>
      </div>
      <button className="apply-button">Jelentkezem</button>
    </div>
  );
}
