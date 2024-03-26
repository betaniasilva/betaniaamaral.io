const getDataYearCopyWriting = () => {
  return {
    year: new Date().getFullYear(),
  };
};

const { year } = getDataYearCopyWriting();

export const footerData = {
  title: "Betânia",
  navLinks: [
    {
      text: "Inicio",
      href: "#",
    },
    {
      text: "Sobre",
      href: "#about",
    },
    {
      text: "Experiencia",
      href: "#experience",
    },
    {
      text: "Seriços",
      href: "#services",
    },
    {
      text: "Portfolio",
      href: "#portfolio",
    },
    {
      text: "Estudos",
      href: "#studied",
    },
    {
      text: "Contato",
      href: "#contact",
    },
  ],
  socialRedes: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/betania.amaral.9/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/la_bett/",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/bet%C3%A2nia-amaral-321960285/",
    },
    {
      name: "Github",
      href: "https://github.com/betaniasilva",
    },
  ],
  copyWriter: `Copyright © ${year} Betânia Amaral. Todos os direitos reservados.`,
};
