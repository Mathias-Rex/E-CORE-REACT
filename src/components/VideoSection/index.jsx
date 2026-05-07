export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <h2>Tekintse meg gyártósorunkat működés közben</h2>
        <div className="video-container">
          <video
            id="factoryVideo"
            className="factory-video"
            autoplay
            muted
            loop
          >
            <source
              src="https://res.cloudinary.com/djemtfagn/video/upload/v1776333088/factory_forward_reverse_j1uh8t.mp4"
              type="video/mp4"
            />
            A böngésző nem támogatja a videó lejátszást.
          </video>
        </div>
      </div>
    </section>
  );
}