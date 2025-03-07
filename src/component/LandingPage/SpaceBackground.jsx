import React, { memo, useEffect, useRef } from "react";
import p5 from "p5";

const Starfield = memo(() => {
  
  const sketchRef = useRef();

  useEffect(() => {
    let paused = false;
    let mid = { x: 0, y: 0 };
    let stars;
    let starsCanvas;

    const createStarfield = (p) => {
      const arr = [];
      const numStars = 30;
      const halfWidth = p.windowWidth * 0.5;
      const halfHeight = p.windowHeight * 0.5;
      for (let i = 0; i < numStars; i += 1) {
        let hue = p.random(360);
        let brightness = 50;
        let pos = {
          x: p.random(-halfWidth, halfWidth),
          y: p.random(-halfHeight, halfHeight),
          z: p.random(-1000, 100),
        };
        const maxZPos = 1000;
        const startPosZ = pos.z - 1000;
        let rate = 5;
        const _update = () => {
          pos.z += rate;
          if (pos.z > maxZPos) {
            pos.z = startPosZ;
          }
          brightness = p.map(pos.z, startPosZ, maxZPos, 0, 100);
        };
        const render = (c) => {
          _update();
          c.push();
          c.translate(pos.x, pos.y, pos.z);
          c.fill(hue, 0, brightness);
          c.sphere(1, 5, 7);
          c.pop();
        };

        arr.push({
          render,
        });
      }
      return arr;
    };

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB);
        mid = {
          x: p.windowWidth * 0.5,
          y: p.windowHeight * 0.5,
        };

        starsCanvas = p.createGraphics(p.windowWidth, p.windowHeight, p.WEBGL);
        starsCanvas.colorMode(p.HSB);
        starsCanvas.noStroke();
        stars = createStarfield(p);
      };

      p.draw = () => {
        if (!paused) {
          p.clear();
          starsCanvas.clear();
          stars.forEach((s) => s.render(starsCanvas));
          p.image(starsCanvas, 0, 0);
        }
      };

      p.keyPressed = () => {
        if (p.keyCode === p.ESCAPE) {
          paused = !paused;
          return false;
        }
       return true
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
})

export default Starfield;
