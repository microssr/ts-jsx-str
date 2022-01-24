export type Props = {
  [id: string]: string
}

const renderProps = (props: Props): string => {
  return Object.entries(props)
    .map(([key, value]) => {
      if (key === 'className') {
        return `class="${value}"`
      }
      else {
        return `${key}="${value}"`
      }
    })
    .join(' ')
}

type TagLiteral = string
type TagFunction = (props: Props, children: string[]) => string
type Tag = TagLiteral | TagFunction

const createElement = (tag: Tag, props: Props, ...children: string[]) => {
  if (props === null) {
    props = {}
  }

  if (typeof tag === 'function') {
    return tag(props, children)
  }
  else {
    const innerHTML = children.join('')

    if (Object.keys(props).length > 0) {
      return `<${tag} ${renderProps(props)}>${innerHTML}</${tag}>`
    }
    else {
      return `<${tag}>${innerHTML}</${tag}>`
    }
  }
}

export const JSX = { createElement }
export default JSX
