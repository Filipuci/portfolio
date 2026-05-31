import type { ProjectType } from "@/components/types/ProjectType";
import PokedexImg from "@/assets/images/projects/PokedexImg.png"
import SignupFormValidationImg from "@/assets/images/projects/SignupFormValidationImg.png"
import ChatAppImg from "@/assets/images/projects/ChatAppImg.png"
import PortfolioImg from "@/assets/images/projects/PortfolioImg.png"

export const ProjectData: ProjectType[] = [
  {
    category: 'Web app',
    title: 'Pokedéx',
    shortDescription: 'Pokédex desenvolvida com React, TypeScript, TanStack Query e Axios, com paginação, cache e carregamento dinâmico de dados.',
    image: PokedexImg,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'TanStack Query', 'Axios']
  },
  {
    category: 'Form',
    title: 'Sign up Form Validation',
    shortDescription: 'Formulário de cadastro com React Hook Form, validação com Zod e feedback de UX.',
    image: SignupFormValidationImg,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'ReactHookForm', 'Zod']
  },
  {
    category: 'Landing Page',
    title: 'Portfólio',
    shortDescription: 'Meu portfólio pessoal desenvolvido com foco em perfomance, acessibilidade e design minimalista',
    image: PortfolioImg,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'ReactHookForm', 'Zod']
  },
  {
    category: 'Study Project',
    title: 'Chat App',
    shortDescription: 'Projeto focado em gerenciamento de estado global com Context API e persistência local utilizando LocalStorage.',
    image: ChatAppImg,
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'ContextAPI', 'LocalStorage']
  },
]