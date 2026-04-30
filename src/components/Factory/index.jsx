export default function Factory() {
    return (
    <section>
    <div style={{marginTop: '5rem', padding: '3rem', background: 'rgba(26, 31, 46, 0.6)', borderRadius: '10px', border: '1px solid rgba(0, 217, 255, 0.2)'}}>
        <h3 style={{textAlign: 'center', color: '#00d9ff', marginBottom: '2rem'}}>
        Gyártási létesítményeink
        </h3>
</div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>

                <div>
                    <h4 style={{color: '#00d9ff', fontSize: '2.5rem'}}>4</h4>
                    <p>Gyár a Naprendszerben</p>
                </div>


                <div>
                    <h4 style={{color: '#00d9ff', fontSize: '2.5rem'}}>12,431</h4>
                    <p>Munkatárs világszerte</p>
                </div>


                <div>
                    <h4 style={{color: '#00d9ff', fontSize: '2.5rem'}}>15,736</h4>
                    <p>Leszállított jármű</p>
                </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center'}}>
          {/* Statisztika 4: Szabadalmak */}
        <div>
            <h4 style={{color: '#00d9ff', fontSize: '2.5rem'}}>567</h4>
            <p>Szabadalom és innováció</p>
        </div>
        </div>
    </div>

    <div style={{marginTop: '5rem', textAlign: 'center'}}>
        <a href="../carreers/index.html" className="cta-button">Karrier lehetőségek</a>
    </div>
    </section>
    );
}