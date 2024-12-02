<script lang="ts">
  import { onMount } from 'svelte';

  import { CaretLeft, CaretRight } from 'phosphor-svelte';

  type Slide = string; // Define a type for slides
  const Slides: Slide[] = [
    '/videos/slide1.mp4',
    '/videos/slide2.mp4',
    '/videos/slide4.mp4',
    '/videos/slide5.mp4'
  ];

  let currentSlide = $state(0);
  let interval: number;
  let videoRefs: HTMLVideoElement[] = [];

  // Navigate to the next slide
  const nextSlide = () => {
    resetSlide(currentSlide);
    currentSlide = (currentSlide + 1) % Slides.length;
    activateSlide(currentSlide);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    resetSlide(currentSlide);
    currentSlide = (currentSlide - 1 + Slides.length) % Slides.length;
    activateSlide(currentSlide);
  };

  // Auto-slide functionality
  const startAutoSlide = () => {
    interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change every 3 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(interval);
  };

  onMount(() => {
    startAutoSlide();
    activateSlide(currentSlide);
    return stopAutoSlide; // Cleanup on component destruction
  });

  // Utility to check media type
  const isVideo = (url: string): boolean => url.endsWith('.mp4');

  const resetSlide = async (index: number) => {
    const video = videoRefs[index];
    if (video) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      video.pause();
      video.currentTime = 0;
    }
  };

  const activateSlide = (index: number) => {
    const video = videoRefs[index];
    if (video) {
      video.play();
    }
  };
</script>

<!-- Slider Wrapper -->
<section
  class="slider"
  onmouseover={stopAutoSlide}
  onmouseleave={startAutoSlide}
  onfocus={stopAutoSlide}
  onblur={startAutoSlide}
  role="banner"
  aria-label="Image and video carousel"
>
  <div class="slides" style="transform: translateX(-{currentSlide * 100}%)">
    {#each Slides as slide, index}
      {#if isVideo(slide)}
        <video class="slide" src={slide} bind:this={videoRefs[index]} muted loop></video>
      {:else}
        <div
          class="slide"
          style="background-image: url('{slide}')"
          aria-label={`Slide ${index}`}
        ></div>
      {/if}
    {/each}
  </div>

  <!-- Controls -->
  <div class="controls" aria-label="Carousel navigation">
    <button class="button" onclick={prevSlide} aria-label="Previous Slide">
      <CaretLeft weight="bold" />
    </button>
    <button class="button" onclick={nextSlide} aria-label="Next Slide">
      <CaretRight weight="bold" />
    </button>
  </div>

  <!-- Navigation Dots -->
  <div class="dots" role="tablist" aria-label="Slide selector">
    {#each Slides as _, index}
      <button
        class="dot {currentSlide === index ? 'active' : ''}"
        onclick={() => (currentSlide = index)}
        role="tab"
        tabindex="0"
        aria-selected={currentSlide === index}
        aria-label={`Go to Slide ${index + 1}`}
      ></button>
    {/each}
  </div>
</section>

<style>
  .slider {
    position: relative;
    overflow: hidden;
    margin: auto;
  }

  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .slide {
    min-width: 100%;
    height: calc(100vh - var(--nav-bar-height));
    background-size: cover;
    background-position: center;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .button {
    color: hsla(0, 0%, 0%, 0.3);
    cursor: pointer;
    pointer-events: auto;
    font-size: 32px;

    &:nth-child(1) {
      margin-left: 24px;
    }

    &:nth-child(2) {
      margin-right: 24px;
    }
  }

  .dots {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .dot.active {
    background-color: white;
  }
</style>
