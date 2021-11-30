export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Twitter com NuxtJs e Vue",
      description:
        "Réplica do antigo layout do Twitter. Projeto feito em Vue e Nuxt.js, com Tailwind e Mirage.js para realizar uma api simulada com arquitetura de banco de dados. Design responsivo, funções de publicar e favoritar um tweet, além de exibir os tweets no feed através de uma requisição HTTP com Axios. Foi um desafio pois nunca havia programado em Vue e tive 10 dias para realizar esse projeto, além de aprender Tailwind e o Mirage.js",
      link: "https://github.com/AdryanaP/twitter-nuxtjs",
    },
    {
      id: 2,
      title: "Tip Calculator",
      description:
        "Calculadora de gorjetas responsivo. Projeto feito com React, Next.js, CSS Modules, FlexBox e Grid. Aprendi nesse projeto componentização, compartilhando informações entre os componentes pais e os filhos e gerenciamento de estado para tornar o app dinâmico.",
      link: "https://github.com/AdryanaP/tip-calculator",
    },
    {
      id: 3,
      title: "Google",
      description:
        "Réplica de uma página de pesquisa estática do google. Projeto feito com React, Next.js, FlexBox e Grid. Aprendi nesse projeto a fazer requisições HTTP com FETCH, extraindo de uma API os dados necessários para compor os resultados da página de pesquisa.",
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
      <div className="space-y-8  md:self-center">
        <ul className="space-y-3 md:grid grid-cols-2 gap-4 justify-center justify-items-center">
          {projects.map((item) => {
            return (
              <li className="text-center" key={item.id}>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-justify">{item.description}</p>
                <a href={item.link} rel="noreferrer noopener" target="_blank">
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
