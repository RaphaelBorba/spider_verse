interface IProps {
  params: {
    id: string;
  };
}

export default function HeroPage({ params: { id } }: IProps) {
  return (
    <main>
      <h1>Spider {id}</h1>
    </main>
  );
}
