interface AvatarProps {
  title: string;
  src: string;
}

const avatarsPath = "src/assets/images/avatars";

export const communityAvatars: AvatarProps[] = [
  {
    title: "Carros",
    src: `${avatarsPath}/community/cars.webp`,
  },
  {
    title: "Desenhos",
    src: `${avatarsPath}/community/toons.webp`,
  },
  {
    title: "Crazy",
    src: `${avatarsPath}/community/crazy.webp`,
  },
  {
    title: "Fofos",
    src: `${avatarsPath}/community/cute.webp`,
  },
  {
    title: "Animes",
    src: `${avatarsPath}/community/anime.webp`,
  },
  {
    title: "Leitura",
    src: `${avatarsPath}/community/reading.webp`,
  },
  {
    title: "Meu ovo",
    src: `${avatarsPath}/community/myEggs.webp`,
  },
  {
    title: "My books",
    src: `${avatarsPath}/community/reading.webp`,
  },
  {
    title: "Cafeeee",
    src: `${avatarsPath}/community/coffee.webp`,
  },
];

export const friendAvatars: AvatarProps[] = [
  {
    title: "Fernando",
    src: `${avatarsPath}/friends/fernando.webp`,
  },
  {
    title: "Ana",
    src: `${avatarsPath}/friends/ana.webp`,
  },
  {
    title: "Carlos",
    src: `${avatarsPath}/friends/carlos.webp`,
  },
  {
    title: "Vitor",
    src: `${avatarsPath}/friends/vitor.webp`,
  },
  {
    title: "Matheus",
    src: `${avatarsPath}/friends/matheus.webp`,
  },
  {
    title: "Ramos",
    src: `${avatarsPath}/friends/ramos.webp`,
  },
  {
    title: "Eiji",
    src: `${avatarsPath}/friends/eiji.webp`,
  },
  {
    title: "Julia",
    src: `${avatarsPath}/friends/julia.webp`,
  },
  {
    title: "Carol",
    src: `${avatarsPath}/friends/carol.webp`,
  },
];
