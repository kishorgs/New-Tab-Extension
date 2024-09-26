const originalTitle = document.title;
let title = "";

function dynamicGreeting() {
  const time = new Date();
  const hour = time.getHours();

  if (hour >= 5 && hour <= 12) {
    title = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    title = "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    title = "Good evening";
  } else {
    title = "Good night";
  }
}

dynamicGreeting();

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = `Hello Kishor ${title}`;
  } else {
    document.title = originalTitle;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
    },
    opacity: {
      value: 0.9,
      random: false,
    },
    size: {
      value: 6,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
