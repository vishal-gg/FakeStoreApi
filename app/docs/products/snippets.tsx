"use client"

import { useCopySnippet } from "@/hooks/useCopyToClipboard"
import CopyButton from "@/components/CopyButton"
import {motion} from 'framer-motion'

export const AllProductsSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
      <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("api/products")
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}

export const AllProductsOutputSnip = () => {
  
  return (
    <div className="relative overflow-hidden rounded-md mt-10">
      <motion.span
      initial={{backdropFilter: 'blur(10px)', backgroundColor: '#0d1117'}}
      animate={{backdropFilter: 'blur(0px)', backgroundColor: '#0d111700'}}
      transition={{duration: .3}}
      className="absolute inset-0 pointer-events-none"></motion.span>
      <pre>
        <code className="hljs rounded-md outline outline-1 outline-white/10">
      {`
  {
    id: 1,
    title: "Sony WH-1000XM3...",
    image: "https://storage...",
    price: 773,
    description: "Industry leading Active Noise...",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11
  },
  {
    id: 2,
    title: "Microsoft Xbox...",
    image: "https://storage...",
    price: 57,
    description: "Experience the modernized design of the Xbox...",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4
  },
  // {...},
  {
    id: 149,
    title: 'Security Camera, IP67 Waterproof...',
    image: 'https://storage...',
    price: 737,
    description: 'Microwave induction is an active...',
    brand: "Wuqioei",
    model: "YN50",
    color: "black+white",
    category: "appliances",
    onSale: true,
    discount: 23
  }
      `}
        </code>
      </pre>
    </div>
  )
}

export const SingleProductSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("api/products/2")
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}


export const LimitedProductsSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()
  return (
    <pre className="relative">
    <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("api/products")
.then(res => res.json())
.then(res => console.log(res))
`}          
    </code>
    <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
  </pre>
  )
}
export const PaginatedProductsSnip = () => {
  return (
    <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
         <code>fetch("api/products?page=2")</code><br />
         <code>.then(res =&gt; res.json)</code><br />
         <code>.then(res =&gt; console.log(res));</code>
      </pre>
   </div>
  )
}
export const ProductsCategorySnip = () => {
  return (
    <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
         <code>fetch("api/products/category")</code><br />
         <code>.then(res =&gt; res.json)</code><br />
         <code>.then(res =&gt; console.log(res));</code>
      </pre>
   </div>
  )
}

export const ProductsofCategorySnip = () => {
  return (
    <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
         <code>fetch("api/products/category?type=mobile")</code><br />
         <code>.then(res =&gt; res.json)</code><br />
         <code>.then(res =&gt; console.log(res));</code>
      </pre>
   </div>
  )
}

export const AddProductSnip = () => {
  return (
  <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
        <code>fetch("api/products", &#123;</code><br />
        <code>  method: 'POST',</code><br />
        <code>  headers: &#123; 'Content-Type': 'application/json' &#125;,</code><br />
        <code>  body: JSON.stringify(&#123;</code><br />
        <code>    title: 'product title',</code><br />
        <code>    brand: "abc brand",</code><br />
        <code>    model: "xyz model",</code><br />
        <code>    color: "silver",</code><br />
        <code>    category: "appliances",</code><br />
        <code>    discount: 50</code><br />
  
        <code>  &#125;)</code><br />
        <code>&#125;)</code><br />
      </pre>
  </div>
  ) 
}

export const UpdateProductSnip = () => {
  return (
    <div className="overflow-x-auto">
        <pre className="language-js rounded-lg">
          <code>fetch("api/products/2", &#123;</code><br />
          <code>  method: 'PUT',</code><br />
          <code>  headers: &#123; 'Content-Type': 'application/json' &#125;,</code><br />
          <code>  body: JSON.stringify(&#123;</code><br />
          <code>    title: 'product title',</code><br />
          <code>    brand: "abc brand",</code><br />
          <code>    model: "xyz model",</code><br />
          <code>    color: "silver",</code><br />
          <code>    category: "appliances",</code><br />
          <code>    discount: 50</code><br />
          <code>  &#125;)</code><br />
          <code>&#125;)</code><br />
        </pre>
    </div>
  ) 
}
export const DeleteProductSnip = () => {
  return (
    <div className="overflow-x-auto">
        <pre className="language-js rounded-lg">
          <code>fetch("api/products/2", &#123;</code><br />
          <code>  method: 'DELETE',</code><br />
          <code>  headers: &#123; 'Content-Type': 'application/json' &#125;,</code><br />
          <code>  body: JSON.stringify(&#123;</code><br />
          <code>    title: 'product title',</code><br />
          <code>    brand: "abc brand",</code><br />
          <code>    model: "xyz model",</code><br />
          <code>    color: "silver",</code><br />
          <code>    category: "appliances",</code><br />
          <code>    discount: 50</code><br />
          <code>  &#125;)</code><br />
          <code>&#125;)</code><br />
        </pre>
    </div>
  ) 
}

