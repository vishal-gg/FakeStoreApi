import { json } from "stream/consumers"

export const AllProductsSnip = () => {
  return (
    <div className="overflow-x-auto">
        <pre className="language-js rounded-lg">
           <code>fetch("api/products")</code><br />
           <code>.then(res =&gt; res.json)</code><br />
           <code>.then(res =&gt; console.log(res));</code>
        </pre>
    </div>
  )
}

export const SingleProductSnip = async () => {
  return (
    <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
         <code>fetch("api/products/1")</code><br />
         <code>.then(res =&gt; res.json)</code><br />
         <code>.then(res =&gt; console.log(res));</code>
      </pre>
   </div>
  )
}
export const LimitedProductsSnip = async () => {
  return (
    <div className="overflow-x-auto">
      <pre className="language-js rounded-lg">
         <code>fetch("api/products?limit=10")</code><br />
         <code>.then(res =&gt; res.json)</code><br />
         <code>.then(res =&gt; console.log(res));</code>
      </pre>
   </div>
  )
}
export const PaginatedProductsSnip = async () => {
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
export const ProductsCategorySnip = async () => {
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

