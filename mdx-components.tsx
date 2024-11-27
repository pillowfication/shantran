import type { MDXComponents } from 'mdx/types'

export function useMDXComponents (components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: props => <h1 className='text-xl text-primary uppercase mb-4 [&:not(:first-child)]:mt-10' {...props} />,
    h2: props => <h2 className='text-lg text-primary uppercase mb-4 [&:not(:first-child)]:mt-10' {...props} />,
    h3: props => <h3 className='text-base text-primary uppercase mb-4 [&:not(:first-child)]:mt-10' {...props} />,
    p: props => <p className='mb-4' {...props} />,
    a: props => <a className='text-primary hover:underline' {...props} />,
    ol: props => <ol className='list-decimal ml-4' {...props} />,
    ul: props => <ul className='list-disc ml-4' {...props} />,
    blockquote: props => <blockquote className='border-l-4 border-l-gray-300 p-2 pl-4 md:p-4 md:pl-8 [&>p:last-child]:m-0 ml-[0.15rem] mb-4' {...props} />
  }
}
