import { GetStaticProps } from "next";

import Categoria from "../../components/Categorias/Index";
import itemsList from "../../listaItems/Index";

export default function index() {
  return (
    <div>
      <Categoria />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = itemsList.map((i) => {
    return {
      params: {
        category: i.categoria,
        id: i.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
