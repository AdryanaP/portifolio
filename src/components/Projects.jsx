export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Twitter com NuxtJs e Vue",
      link: "https://github.com/AdryanaP/twitter-nuxtjs",
    },
    {
      id: 2,
      title: "Tip Calculator",
      link: "https://github.com/AdryanaP/tip-calculator",
    },
    {
      id: 3,
      title: "Google",
      link: "https://github.com/AdryanaP/google",
    },
    {
      id: 4,
      title: "Estação do Café",
      link: "https://github.com/VinnyMendes/EstacaoCafe",
    },
  ];

  return (
    <div className="p-4 md:flex md:justify-center gap-48 md:content-center md:justify-items-center h-screen pt-20">
      <div className="space-y-8 md:max-w-30 md:self-center">
        <ul className="grid grid-cols-2 gap-4 justify-center justify-items-center">
          {projects.map((item) => {
            return (
              <li className="text-center" key={item.id}>
                <p>{item.title}</p>
                <a href={item.link}>
                  Link
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
