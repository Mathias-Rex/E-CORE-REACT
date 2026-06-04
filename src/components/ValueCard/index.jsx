export default function CarrierCard({ values }) {
  console.log(values);
  return (
    <div className="feature-card">
      <img src={values?.image} alt={values?.title} />
      <h3>{values?.title}</h3>
      <p>{values?.description}</p>
    </div>
  );
}
