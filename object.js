const fs = require("fs");
const path = require("path");

function getImages(dirPath) {
  let result = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      result = result.concat(getImages(filePath)); // Recurse if directory
    } else {
      const ext = path.extname(filePath);
      if (ext === ".jpg" || ext === ".png" || ext === ".jpeg" || ext === ".avif") {
        // Check if file is an image
        result.push({
          name: path.basename(filePath),
          path: filePath,
          description: "", // Add description property
          link: "", // Add link property
        });
      }
    }
  }

  return result;
}

const images = getImages("./Colors"); // Replace with your folder path
console.log(images);



let imageObject = [
  {
    Colors: [
      {
        name: "AdobeColor",
        path: "Colors\\AdobeColor.png",
        description: "A color palette generator based on color theory.",
        link: "https://color.adobe.com/",
      },
      {
        name: "BrandColors",
        path: "Colors\\BrandColors.png",
        description: "Provides official brand color hex codes.",
        link: "https://brandcolors.net/",
      },
      {
        name: "Color-Leap",
        path: "Colors\\Color-Leap.jpg",
        description:
          "Allows users to search through 180 color palettes used throughout the last 4000 years.",
        link: "https://colorleap.app/",
      },
      {
        name: "ColorClaim",
        path: "Colors\\ColorClaim.png",
        description: "A collection of favorite color combinations.",
        link: "https://www.vanschneider.com/colors",
      },
      {
        name: "ColorHunt",
        path: "Colors\\ColorHunt.png",
        description:
          "A web app where artists can create and share color themes.",
        link: "https://colorhunt.co/",
      },
      {
        name: "Coolors",
        path: "Colors\\Coolors.png",
        description: "A super fast color palettes generator.",
        link: "https://coolors.co/",
      },
      {
        name: "Culrs",
        path: "Colors\\Culrs.png",
        description: "Provides curated colors in context.",
        link: "https://culrs.com/",
      },
      {
        name: "EvaColor",
        path: "Colors\\EvaColor.png",
        description: "A complete design system for Sketch.",
        link: "https://colors.eva.design/",
      },
      {
        name: "HappyHues",
        path: "Colors\\HappyHues.png",
        description: "A color palette inspiration site.",
        link: "https://www.happyhues.co/",
      },
      {
        name: 'farbvelo.avif',
        path: 'Colors\\farbvelo.avif',
        description: 'A color picking tool',
        link: 'https://farbvelo.elastiq.ch/'
      },
      {
        name: "InstaHues",
        path: "Colors\\InstaHues.png",
        description:
          "Unfortunately, I couldn't find a specific description for InstaHues.",
        link: "https://instahues.com/",
      },
      {
        name: "MakeTintsandShades",
        path: "Colors\\MakeTintsandShades.png",
        description: "A tool to generate tints and shades of a given color.",
        link: "https://maketintsandshades.com/",
      },
      {
        name: "Picular",
        path: "Colors\\Picular.png",
        description: "A Google-inspired color picker.",
        link: "https://picular.co/",
      },
      {
        name: "Pigment",
        path: "Colors\\Pigment.png",
        description: "A unique way to generate fresh and vibrant colors.",
        link: "https://pigment.shapefactory.co/",
      },
      {
        name: "Tint and shade generator",
        path: "Colors\\TintShadeGenerator.png",
        description:
          " A user-friendly tool for creating custom color variations",
        link: "https://maketintsandshades.com/",
      },
    ],    
    Components: [
      {
        name: "Daisy",
        path: "Components\\Daisy.png",
        description: "A plugin for Tailwind CSS for beautiful websites",
        link: "https://daisyui.com",
      },
      {
        name: "Flowbite",
        path: "Components\\Flowbite.png",
        description: "A library of components built on top of Tailwind CSS",
        link: "https://flowbite.com",
      },
      {
        name: "Material-UI",
        path: "Components\\Material-UI.png",
        description: "A popular React UI framework",
        link: "https://mui.com",
      },
      {
        name: "Meraki-UI",
        path: "Components\\Meraki-UI.png",
        description: "A collection of responsive Tailwind CSS components",
        link: "https://merakiui.com",
      },
      {
        name: "Tailblocks",
        path: "Components\\Tailblocks.png",
        description: "Ready-to-use blocks by Tailwind CSS",
        link: "https://tailblocks.cc",
      },
      {
        name: "Tailwind-Elements",
        path: "Components\\Tailwind-Elements.png",
        description: "A collection of open-source UI components",
        link: "https://tailwind-elements.com",
      },
      {
        name: "Tailwind-UI",
        path: "Components\\Tailwind-UI.png",
        description: "Official Tailwind CSS components & templates",
        link: "https://tailwindui.com",
      },
    ],
    CSS: [
      {
        name: "100 css buttons",
        path: "CSS\\100-css-buttons.avif",
        description: "A collection of 100 CSS button styles.",
        link: "https://ui-buttons.web.app/",
      },
      {
        name: "Animista",
        path: "CSS\\Animista.png",
        description: "CSS animations on demand.",
        link: "https://animista.net/",
      },
      {
        name: "Colordoo",
        path: "CSS\\Colordoo.jpeg",
        description: "Color palette generator.",
        link: "https://designkiki.com/colordoo/",
      },
      {
        name: "CoolBackgrounds",
        path: "CSS\\CoolBackgrounds.png",
        description: "Stunning backgrounds and textures.",
        link: "https://coolbackgrounds.io/",
      },
      {
        name: "CSS-Gradient",
        path: "CSS\\CSS-Gradient.png",
        description: "CSS gradient generator.",
        link: "https://cssgradient.io/",
      },
      {
        name: "CSSButton Generator",
        path: "CSS\\CSSButton.png",
        description: "CSS button generator.",
        link: "https://www.cssbuttongenerator.com/",
      },
      {
        name: "CSSGenerator",
        path: "CSS\\CSSGenerator.png",
        description: "Comprehensive CSS generator.",
        link: "https://css-generator.netlify.app/",
      },
      {
        name: "CSSGrid Generator",
        path: "CSS\\CSSGrid.png",
        description: "Guide to CSS grid layout.",
        link: "https://cssgrid-generator.netlify.app/",
      },
      {
        name: "GlassmorphismGenerator",
        path: "CSS\\GlassmorphismGenerator.png",
        description: "Glassmorphism effect generator.",
        link: "https://hype4.academy/tools/glassmorphism-generator",
      },
      {
        name: "GlassUI Generator",
        path: "CSS\\GlassUI.png",
        description: "UI library for glassmorphism.",
        link: "https://ui.glass/generator/",
      },
      {
        name: "Gradient",
        path: "CSS\\Gradient.png",
        description: "CSS gradient generator.",
        link: "https://gradient.shapefactory.co/",
      },
      {
        name: "MeshGradients",
        path: "CSS\\MeshGradients.png",
        description: "Beautiful gradient meshes.",
        link: "http://ww1.meshgradients.design/lander",
      },
      {
        name: "Neumorphic Generator",
        path: "CSS\\Neumorphic.png",
        description: "Neumorphism design resources.",
        link: "https://neumorphic.design/",
      },
      {
        name: "Neumorphism",
        path: "CSS\\Neumorphism.png",
        description: "Neumorphism design trend guide.",
        link: "https://neumorphism.io/#e0e0e0",
      },
    ],
    Icons: [
      {
        name: "3dicons",
        path: "Icons\\3dicons.avif",
        description: "Free 3D icons in various formats.",
        link: "https://3dicons.co/",
      },
      {
        name: "Akar-Icons",
        path: "Icons\\Akar-Icons.png",
        description: "Open-source SVG icon library.",
        link: "https://akaricons.com/",
      },
      {
        name: "Boxicons",
        path: "Icons\\Boxicons.png",
        description: "High-quality web-friendly icons.",
        link: "https://boxicons.com/",
      },
      {
        name: "Flaticon",
        path: "Icons\\Flaticon.png",
        description: "Free vector icons database.",
        link: "https://www.flaticon.com/",
      },
      {
        name: "FontAwesome",
        path: "Icons\\FontAwesome.png",
        description: "Icon set and toolkit.",
        link: "https://fontawesome.com/",
      },
      {
        name: "Freeicons",
        path: "Icons\\Freeicons.png",
        description: "Free icons platform.",
        link: "https://freeicons.io/",
      },
      {
        name: "IconFinder",
        path: "Icons\\IconFinder.png",
        description: "Icon search engine and marketplace.",
        link: "https://www.iconfinder.com/",
      },
      {
        name: "Icons8",
        path: "Icons\\Icons8.png",
        description: "Diverse free icons library.",
        link: "https://icons8.com/",
      },
      {
        name: "IconScout",
        path: "Icons\\IconScout.png",
        description: "Design resources marketplace.",
        link: "https://iconscout.com/",
      },
      {
        name: "Iconshock",
        path: "Icons\\Iconshock.png",
        description: "Free icons and stock icons collection.",
        link: "https://www.iconshock.com/",
      },
      {
        name: "Ionicons",
        path: "Icons\\Ionicons.png",
        description: "Open-source icon set for web, iOS, Android, and desktop.",
        link: "https://ionic.io/ionicons",
      },
      {
        name: "Radix-Icons",
        path: "Icons\\Radix-Icons.png",
        description: "A crisp set of 15×15 icons designed by the Modulz team.",
        link: "https://www.radix-ui.com/icons",
      },
    ],    
    Illustrations: [
      {
        name: "404-Error",
        path: "Illustrations\\404-Error.png",
        description: "Free 404 error illustrations.",
        link: "https://www.error404.fun/",
      },
      {
        name: "DrawKit",
        path: "Illustrations\\DrawKit.png",
        description: "Hand-drawn vector illustration resources.",
        link: "https://www.drawkit.com/",
      },
      {
        name: "FreeIllustration",
        path: "Illustrations\\FreeIllustration.png",
        description: "High-quality free illustrations library.",
        link: "https://freeillustrations.xyz/",
      },
      {
        name: "Handz",
        path: "Illustrations\\Handz.jpeg",
        description: "3D hand gestures for product mockups.",
        link: "https://www.handz.design/",
      },
      {
        name: "Humans",
        path: "Illustrations\\Humans.png",
        description: "Mix-&-match illustrations of people.",
        link: "https://humans.wannathis.one/",
      },
      {
        name: "Illustration-Kit",
        path: "Illustrations\\Illustration-Kit.png",
        description: "Open-source illustration kit.",
        link: "https://www.illustrationkit.com/",
      },
      {
        name: "Khagwal3D",
        path: "Illustrations\\Khagwal3D.png",
        description: "Free 3D illustrations.",
        link: "https://3d.khagwal.com/",
      },
      {
        name: "LottieFiles",
        path: "Illustrations\\LottieFiles.png",
        description: "Free Lottie animations and plugins.",
        link: "https://lottiefiles.com/",
      },
      {
        name: "Ouch",
        path: "Illustrations\\Ouch.png",
        description: "Free vector illustrations to class up your project.",
        link: "https://icons8.com/illustrations",
      },
      {
        name: "Pixeltrue",
        path: "Illustrations\\Pixeltrue.png",
        description: "Free & premium vector illustrations.",
        link: "https://www.pixeltrue.com/",
      },
      {
        name: "PowerPeoplePlatform",
        path: "Illustrations\\PowerPeoplePlatform.png",
        description: "Illustrations for your next project.",
        link: "https://powerpeopleplatform.com/",
      },
      {
        name: "StorySet",
        path: "Illustrations\\StorySet.png",
        description: "Awesome free customizable illustrations.",
        link: "https://storyset.com/",
      },
      {
        name: "unDraw",
        path: "Illustrations\\unDraw.png",
        description: "Open-source illustrations for any idea.",
        link: "https://undraw.co/illustrations",
      },
    ],    
    Stock_Photos: [
      {
        name: "Pexels",
        path: "Stock Photos\\Pexels.png",
        description: "Free stock photos and videos.",
        link: "https://www.pexels.com/",
      },
      {
        name: "Pixabay",
        path: "Stock Photos\\Pixabay.png",
        description: "Free images and videos you can use anywhere.",
        link: "https://pixabay.com/",
      },
      {
        name: "pxfuel",
        path: "Stock Photos\\pxfuel.avif",
        description: "Royalty free stock photos free & unlimited download.",
        link: "https://www.pxfuel.com/",
      },
      {
        name: "Shutterstock",
        path: "Stock Photos\\Shutterstock.png",
        description: "High-quality stock images, photos, vectors, and illustrations.",
        link: "https://www.shutterstock.com/",
      },
      {
        name: "Unsplash",
        path: "Stock Photos\\Unsplash.png",
        description: "The internet’s source of freely usable images.",
        link: "https://unsplash.com/",
      },
    ],    
    SVG: [
      {
        name: "BlobMaker",
        path: "SVG\\BlobMaker.png",
        description: "Generates SVG blob shapes.",
        link: "https://www.blobmaker.app/",
      },
      {
        name: "DiceBear",
        path: "SVG\\DiceBear.png",
        description: "Generates unique SVG avatars.",
        link: "https://www.dicebear.com/",
      },
      {
        name: "Freepik",
        path: "SVG\\Freepik.png",
        description: "Offers free vector art, illustrations, icons, PSD and photos.",
        link: "https://www.freepik.com/",
      },
      {
        name: "GetWave",
        path: "SVG\\GetWave.png",
        description: "Generates unique SVG waves.",
        link: "https://getwaves.io/",
      },
      {
        name: "Haikei",
        path: "SVG\\Haikei.png",
        description: "Generates unique SVG designs.",
        link: "https://app.haikei.app/",
      },
      {
        name: "Shapefest",
        path: "SVG\\Shapefest.png",
        description: "A massive free library of beautifully rendered 3D shapes.",
        link: "https://shapefest.com/",
      },
      {
        name: "svg-pattern-generator",
        path: "SVG\\svg-pattern-generator.png",
        description: "Generates SVG patterns.",
        link: "https://10015.io/tools/svg-pattern-generator#google_vignette",
      },
      {
        name: "SVGRepo",
        path: "SVG\\SVGRepo.png",
        description: "Free SVG Vectors and Icons.",
        link: "https://www.svgrepo.com/",
      },
    ],    
  },
];

