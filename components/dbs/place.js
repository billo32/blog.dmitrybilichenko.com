import Link from 'next/link'
const Place = (props) => {
  return (
    <li className="my-8 font-sans font-medium leading-6 tracking-wider">
      <div className="text-[15px]">{props.title}</div>
      <div className="text-[13px]">{props.subtitle}</div>
      <Link key={props.linkTitle} href={props.link}>
        <a className="text-[15px] underline">{props.linkTitle}</a>
      </Link>
    </li>
  )
}

export default Place
