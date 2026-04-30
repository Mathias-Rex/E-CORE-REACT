export default function ValuesCards() {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '4rem', marginBottom: '2rem', color: '#00d9ff'}}>
        Értékeink
      </h2>

      <div className="values-grid">
        <div className="value-card">
          <h4>Innováció</h4>
          <p>
            Folyamatosan keressük az új megoldásokat és technológiákat,
            hogy járműveink a legjobbak legyenek az iparágban.
          </p>
        </div>

        <div className="value-card">
          <h4>Minőség</h4>
          <p>
            Minden járművünk szigorú minőségellenőrzésen esik át,
            hogy garantáljuk a megbízhatóságot és a biztonságot.
          </p>
        </div>

        <div className="value-card">
          <h4>Fenntarthatóság</h4>
          <p>
            Elkötelezettek vagyunk amellett, hogy minimalizáljuk környezeti
            lábnyomunkat és felelősségteljesen bánjunk az erőforrásokkal.
          </p>
        </div>

        <div className="value-card">
          <h4>Ügyfél fókusz</h4>
          <p>
            Ügyfeleink igényei állnak működésünk középpontjában.
            Minden járművünk testreszabható az egyedi követelményeknek megfelelően.
          </p>
        </div>
      </div>
    </>
  );
}