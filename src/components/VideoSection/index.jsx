export default function VideoSection() {
  return (
    <section class="video-section">
      <div class="container">
        <h2>Tekintse meg gyártósorunkat működés közben</h2>
        <div class="video-container">
          <video
            id="factoryVideo"
            class="factory-video"
            autoplay={true}
            muted={true}
            loop={true}
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