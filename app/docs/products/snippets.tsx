"use client"

import { useCopySnippet } from "@/hooks/useCopyToClipboard"
import CopyButton from "@/components/CopyButton"
import {motion} from 'framer-motion'

export const AllProductsSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
      <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("https://fakestoreapi.in/api/products")
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
  "status": "SUCCESS",
  "message": "Here you go! You've received...",
  "products": [
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
   ]
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
 {`fetch("https://fakestoreapi.in/api/products/2") 
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const SingleProductOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "Here you've a single product requested for id 2",
  "product": {
    "id": 2,
    "title": "Microsoft Xbox X/S Wireless...",
    "image": "https://storage...",
    "price": 57,
    "description": "Experience the modernized design...",
    "brand": "microsoft",
    "model": "Xbox X/S",
    "color": "white",
    "category": "gaming",
    "popular": true,
    "discount": 4
  }
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const LimitedProductSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products?limit=2") 
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const LimitedProductOutputSnip = () => {
  
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
    "status": "SUCCESS",
    "message": "Here you go! You've received 2...",
    "products": [
      {
        "id": 1,
        "title": "Sony WH-1000XM3 Bluetooth...",
        "image": "https://storage...",
        "price": 773,
        "description": "Digital noise cancelling...",
        "brand": "sony",
        "model": "WH-1000XM3",
        "color": "silver",
        "category": "audio",
        "discount": 11
      },
      {
        "id": 2,
        "title": "Microsoft Xbox X/S Wireless...",
        "image": "https://storage...",
        "price": 57,
        "description": "Experience the modernized...",
        "brand": "microsoft",
        "model": "Xbox X/S",
        "color": "white",
        "category": "gaming",
        "popular": true,
        "discount": 4
      }
    ]
  }
      `}
        </code>
      </pre>
    </div>
  )
}
export const PaginationSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
  <>  <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products?page=2")
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
      <div>
         <p>
            ⚡ By default, we send 50 products. use{" "}
            <span className="px-2 pt-[2px] pb-1 rounded-md dark:text-[#b8bb26] bg-zinc-200 dark:bg-[#1d2021] whitespace-nowrap">
              /products?page=2&limit=20
            </span>{" "}
            to limit products per page.
          </p>
          <p className="py-2">
            💁‍♂️ You don't need to pass{" "}
            <span className="px-2 pt-[2px] pb-1 rounded-md dark:text-[#b8bb26] bg-zinc-200 dark:bg-[#1d2021] whitespace-nowrap">
              ?skip=20
            </span>{" "}
            query, we took care of that.
          </p>
         </div>
      </>
  )
}
export const PaginationOutputSnip = () => {
  
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
    "status": "SUCCESS",
    "message": "Here you go! You've received 50...",
    "products": [    
  {
    "id": 51,
    "title": " Samsung  4K Ultra ...",
    "image": "https://storage...",
    "price": 2016,
    "description": "Resolution: 4K Ultra HD (3840x2160)...",
    "brand": "samsung",
    "model": "QA55Q80RAKXXL",
    "color": "black",
    "category": "tv",
    "onSale": true,
    "discount": 19
  }, 
  // {...},   
  {
    "id": 100,
    "title": "Logitech G PRO X Gaming...",
    "image": "https://storage...",
    "price": 336,
    "description": "Blue VO!CE microphone technology*...",
    "brand": "Logitech G",
    "model": "G PRO X",
    "color": "black",
    "category": "gaming",
    "discount": 9
  }
 ]
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const ProductsCategorySnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products/category")
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const ProductsCategoryOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "We have 6 categories to choose from.",
  "categories": [
    "tv",
    "audio",
    "laptop",
    "mobile",
    "gaming",
    "appliances"
  ]
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const ProductsofCategorySnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products/category?type=mobile")
.then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const ProductsofCategoryOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "You've received products from the mobile category only.",
  "products": [
    {
      "id": 8,
      "title": "Samsung Galaxy S21 FE 5G...",
      "image": "https://storage...",
      "price": 434,
      "description": "Pro-grade Camera with AI Single Take...",
      "brand": "samsung",
      "model": "Samsung Galaxy S21 FE 5G ...",
      "color": "Lavender",
      "category": "mobile",
      "discount": 9,
      "onSale": true
    },
    {
      "id": 10,
      "title": "Samsung Galaxy S22 5G...",
      "image": "https://storage...",
      "price": 760,
      "description": "Pro-grade Camera that lets...",
      "brand": "samsung",
      "model": "Samsung Galaxy S22 5G",
      "color": "White",
      "category": "mobile",
      "discount": 29
    },
  ]
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const AddProductSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products", {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Apple Vision Pro",
    brand: "Apple",
    model: "Apple vision pro First Gen",
     color: "Black",
    category: "appliances",
    discount: 1
  })
})
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const AddProductOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "Here is the product you sent,...",
  "product": {
    "id": 150,
    "title": "Apple Vision Pro",
    "brand": "Apple",
    "model": "Apple vision pro First Gen",
    "color": "Black",
    "category": "appliances",
    "discount": 1
  }
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const UpdateProductSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products/2", {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: "Apple vision pro Second Gen",
    color: "Blue",
    discount: 47
  })
})
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const UpdateProductOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "The product with id 2 has been replaced with your provided data",
  "product": {
    "id": "2",
    "title": "Apple Vision Pro",
    "brand": "Apple",
    "model": "Apple vision pro Second Gen",
    "color": "Blue",
    "category": "appliances",
    "discount": "47"
  }
}
      `}
        </code>
      </pre>
    </div>
  )
}
export const DeleteProductSnip = () => {
  const {snipRef, handleCopy, isCopied} = useCopySnippet()

  return (
    <pre className="relative">
        <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
 {`fetch("https://fakestoreapi.in/api/products/2", {
  method: 'DELETE',
}).then(res => res.json())
.then(res => console.log(res))
`}          
        </code>
        <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
      </pre>
  )
}
export const DeleteProductOutputSnip = () => {
  
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
  "status": "SUCCESS",
  "message": "Product with id 2 has been deleted"
}
      `}
        </code>
      </pre>
    </div>
  )
}
