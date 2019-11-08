let Data = [
  {
    title: "appRedesign",
    data: {
      date: "FALL || 2018",
      header: "WhatsApp appRedesign",
      role: "UI design",
      content: [
        {
          type: "img",
          src: [
            require("@/assets/projects/appredesign//whatsappThree.jpg"),
            require("@/assets/projects/appredesign/whatsappTwo.jpg")
          ]
        },
        {
          type: "text",
          parag:
            "Whatasapp app redesign created to give the app more of a Art Deco vibe.",
          link: []
        }
      ]
    }
  },

  {
    title: "UX-design",
    data: {
      date: "Spring || 2019",
      header: "UX-design",
      role: "Ux-Design, Interaction Design",
      content: [
        {
          type: "img",
          src: [
            require("../src/assets/projects/uxDesign/kohFinal.gif"),
            require("@/assets/projects/uxDesign/kohlanta-01.png"),
            require("@/assets/projects/uxDesign/kohlanta-02.png"),
            require("@/assets/projects/uxDesign/kohlanta-03.png"),
            require("@/assets/projects/uxDesign/kohlanta-05.png")
          ]
        },

        {
          type: "text",
          parag:
            "UX design for kohlanta property management. This was built to suggest improvemnets to the already existing website.",
          link: [
            "https://xd.adobe.com/view/e6817629-6f0d-45f8-7c15-57d8f84dadab-90b0/"
          ]
        }
      ]
    }
  },

  {
    title: "WebApplication",
    data: {
      date: "FALL || 2019",
      header: "Client-server communication",
      role: "full-stack developer",
      content: [
        {
          type: "img",
          src: [require("../src/assets/projects/bigpharma/home.png")]
        },

        {
          type: "text",
          parag:
            "Bigpharma is a prototype of a survey app that collects, curates and analyzes users data in the context of pharmacetical development. It is bult with Vue.js, Node.js and Express.js.",
          link: ["https://inspiring-feynman-0b43cb.netlify.com"]
        }
      ]
    }
  },
  {
    title: "Browser-based-game",
    data: {
      date: "FALL || 2017",
      header: "Client-side programming",
      role: "programmer",
      content: [
        {
          type: "img",
          src: [require("../src/assets/thumbnails/dropdead.png")]
        },

        {
          type: "text",
          parag:
            "Dropdead is a browser based jump and shoot game that is built with Javascript and Phaser framework.",
          link: ["https://soniamianji.github.io"]
        }
      ]
    }
  }
];

export default Data;
