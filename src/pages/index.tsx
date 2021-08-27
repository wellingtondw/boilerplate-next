type Props = {
  title: string
}

export default function Home({ title = 'Teste' }: Props) {
  return (
    <h1>{title}</h1>
  )
}
