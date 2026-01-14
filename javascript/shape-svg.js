//2D - Shape
 //Svgs
const twoD = {
    square : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00FFFF" /> <stop offset="100%" stop-color="#008B8B" /> </linearGradient>
    </defs>
    <rect x="25" y="25" width="150" height="150" fill="url(#cyanGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
</svg>`,
    rectangle : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF69B4" /> <stop offset="50%" stop-color="#FF8C00" /> <stop offset="100%" stop-color="#FFD700" /> </linearGradient>
    </defs>
    <rect x="20" y="60" width="160" height="80" fill="url(#sunsetGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
</svg>`,
    circle : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="blueSphereGradient" cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
            <stop offset="0%" stop-color="#4169E1" /> <stop offset="100%" stop-color="#00008B" /> </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="75" fill="url(#blueSphereGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
    </svg>`,
    triangle : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#E6E6FA" /> <stop offset="100%" stop-color="#708090" /> </linearGradient>
    </defs>
    <polygon points="100,25 25,175 175,175" fill="url(#silverGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
    </svg>`,
    rhombus : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9370DB" /> <stop offset="100%" stop-color="#4B0082" /> </linearGradient>
    </defs>
    <polygon points="100,20 180,100 100,180 20,100" fill="url(#purpleGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
</svg>`,
    trapezium : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#32CD32" /> <stop offset="100%" stop-color="#006400" /> </linearGradient>
    </defs>
    <polygon points="50,50 150,50 180,150 20,150" fill="url(#greenGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
</svg>`,
    kite : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF4500" /> <stop offset="100%" stop-color="#8B0000" /> </linearGradient>
    </defs>
    <polygon points="100,20 160,80 100,180 40,80" fill="url(#redGradient)" stroke="#FFFFFF" stroke-width="2" shape-rendering="crispEdges" />
</svg>`
}
const threeD = {
    cube :`<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cubeTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#80D8FF" />
      <stop offset="100%" stop-color="#40C4FF" />
    </linearGradient>
    <linearGradient id="cubeFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#40C4FF" />
      <stop offset="100%" stop-color="#00B0FF" />
    </linearGradient>
    <linearGradient id="cubeSide" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00B0FF" />
      <stop offset="100%" stop-color="#0091EA" />
    </linearGradient>
  </defs>
  <polygon points="50,50 150,50 175,25 75,25" fill="url(#cubeTop)" />
  <polygon points="50,50 150,50 150,150 50,150" fill="url(#cubeFront)" />
  <polygon points="150,50 175,25 175,125 150,150" fill="url(#cubeSide)" />
</svg>`,
    cuboid : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cuboidTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F48FB1" />
      <stop offset="100%" stop-color="#F06292" />
    </linearGradient>
    <linearGradient id="cuboidFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F06292" />
      <stop offset="100%" stop-color="#E91E63" />
    </linearGradient>
    <linearGradient id="cuboidSide" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E91E63" />
      <stop offset="100%" stop-color="#C2185B" />
    </linearGradient>
  </defs>
  <polygon points="50,60 150,60 175,35 75,35" fill="url(#cuboidTop)" />
  <polygon points="50,60 150,60 150,140 50,140" fill="url(#cuboidFront)" />
  <polygon points="150,60 175,35 175,115 150,140" fill="url(#cuboidSide)" />
</svg>`,
    sphere : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sphereGradient" cx="40%" cy="40%" r="60%" fx="30%" fy="30%">
      <stop offset="0%" stop-color="#FFFFFF" /> <stop offset="40%" stop-color="#448AFF" />
      <stop offset="100%" stop-color="#2962FF" /> </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="75" fill="url(#sphereGradient)" />
</svg>`, 
    cylinder : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cylinderBody" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#66BB6A" />
      <stop offset="50%" stop-color="#A5D6A7" />
      <stop offset="100%" stop-color="#66BB6A" />
    </linearGradient>
    <radialGradient id="cylinderTop" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#A5D6A7" />
      <stop offset="100%" stop-color="#66BB6A" />
    </radialGradient>
  </defs>
  <rect x="50" y="50" width="100" height="100" fill="url(#cylinderBody)" />
  <ellipse cx="100" cy="150" rx="50" ry="15" fill="#66BB6A" />
  <ellipse cx="100" cy="50" rx="50" ry="15" fill="url(#cylinderTop)" />
</svg>`,
    cone : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FF5252" />
      <stop offset="50%" stop-color="#FF8A80" />
      <stop offset="100%" stop-color="#FF5252" />
    </linearGradient>
  </defs>
  <polygon points="100,25 50,150 150,150" fill="url(#coneGradient)" />
  <ellipse cx="100" cy="150" rx="50" ry="15" fill="#FF5252" />
</svg>`,
    pyramid : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pyramidFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#BDBDBD" />
    </linearGradient>
    <linearGradient id="pyramidSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0E0E0" />
      <stop offset="100%" stop-color="#9E9E9E" />
    </linearGradient>
  </defs>
  <polygon points="100,25 150,150 175,125" fill="url(#pyramidSide)" />
  <polygon points="100,25 50,150 150,150" fill="url(#pyramidFront)" />
</svg>`,
    torus : `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="torusGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
      <stop offset="0%" stop-color="#EA80FC" /> <stop offset="60%" stop-color="#AA00FF" /> <stop offset="100%" stop-color="#4A148C" /> </radialGradient>
    <mask id="torusHole">
      <rect x="0" y="0" width="200" height="200" fill="white" />
      <circle cx="100" cy="100" r="35" fill="black" />
    </mask>
  </defs>
  <circle cx="100" cy="100" r="75" fill="url(#torusGradient)" mask="url(#torusHole)" />
</svg>`

}
 //text color
const bg = {
    square:`background: linear-gradient(to right, #00f2fe, #badfffff); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    rectangle:`background: linear-gradient(to right, #ff9a44, #fc6076);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    circle:`background: linear-gradient(to right, #00c6fb, #005bea);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    triangle:`background: linear-gradient(to bottom, #E6E9F0, #536976);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    rhombus:`background: linear-gradient(to right, #d387ab, #b721ff);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    trapezium:`background: linear-gradient(to right, #43e97b, #38f9d7);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    kite:`background: linear-gradient(to right, #f83600, #f9d423);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    cube:`background: linear-gradient(to right, #00f2fe, #badfffff); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    cuboid:`background: linear-gradient(to right, #ff9a44, #fc6076);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    sphere:`background: linear-gradient(to right, #00c6fb, #005bea);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    pyramid:`background: linear-gradient(to bottom, #E6E9F0, #536976);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    torus:`background: linear-gradient(to right, #d387ab, #b721ff);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    cylinder:`background: linear-gradient(to right, #43e97b, #38f9d7);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`,
    cone:`background: linear-gradient(to right, #f83600, #f9d423);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))`

}



