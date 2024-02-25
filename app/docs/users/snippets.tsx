"use client"

import { useCopySnippet } from "@/hooks/useCopyToClipboard"
import CopyButton from "@/components/CopyButton"
import {motion} from 'framer-motion'

export const AllUsersSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
        <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("https://fakestoreapi.in/api/users")
.then(res => res.json())
.then(res => console.log(res))
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
export const AllUsersOutputSnip = () => {

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
        "message": "Here you go! You've received 20 users.",
        "users": [
          {
            "id": 1,
            "email": "michael@simpson.com",
            "username": "michaelsimpson",
            "password": "@K(5UejhL&",
            "name": {
              "firstname": "Michael",
              "lastname": "Simpson"
            },
            "address": {
              "city": "Joelton",
              "street": "Angela Spring",
              "number": "868",
              "zipcode": "75070",
              "geolocation": {
                "lat": 19.7091875,
                "long": -14.782061
              }
            },
            "phone": "562.548.9768x73853"
          },
          //{...}
          {
            "id": 20,
            "email": "timothy@burton.com",
            "username": "timothyburton",
            "password": "&$)QeGpZ25",
            "name": {
              "firstname": "Timothy",
              "lastname": "Burton"
            },
            "address": {
              "geolocation": {...}
            },
            "phone": "+1-293-912-5353x125"
          }
        ]
      }
        `}     
          </code>
        </pre>
      </div>
    )
}
export const SingleUserSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
      <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("https://fakestoreapi.in/api/users/7") 
.then(res => res.json())
.then(res => console.log(res))
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
export const SingleUserOutputSnip = () => {
    
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
    "message": "Here you've a single user requested for id 7",
    "user": {
      "id": 7,
      "email": "tracy@frey.com",
      "username": "tracyfrey",
      "password": "#y5ITp+_(C",
      "name": {
        "firstname": "Tracy",
        "lastname": "Frey"
      },
      "address": {
        "city": "East Mary",
        "street": "Tracey Trace",
        "number": "107",
        "zipcode": "16482",
        "geolocation": {
          "lat": -0.870534,
          "long": -98.235893
        }
      },
      "phone": "493.409.0584"
    }
  }
        `}
          </code>
        </pre>
      </div>
    )
}
export const LimitedUserSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
      <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("https://fakestoreapi.in/api/users?limit=2") 
.then(res => res.json())
.then(res => console.log(res))
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
export const LimitedUserOutputSnip = () => {
    
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
        "message": "Here you go! You've received 2 users.",
        "users": [
          {
            "id": 1,
            "email": "michael@simpson.com",
            "username": "michaelsimpson",
            "password": "@K(5UejhL&",
            "name": {...},
            "address": {...},
            "phone": "562.548.9768x73853"
          },
          {
            "id": 2,
            "email": "april@boyd.com",
            "username": "aprilboyd",
            "password": "k8WR_hX0+m",
            "name": {...},
            "address": {...},
            "phone": "9329508218"
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
{`fetch("https://fakestoreapi.in/api/users?page=2")
.then(res => res.json())
.then(res => console.log(res))
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
        <div>
           <p>
              ⚡ By default, we send 20 users. use{" "}
              <span className="px-2 pt-[2px] pb-1 rounded-md dark:text-[#b8bb26] bg-zinc-200 dark:bg-[#1d2021] whitespace-nowrap">
                /users?page=2&limit=20
              </span>{" "}
              to limit users per page.
            </p>
            <p className="py-2">
              {/* 💁‍♂️ You don't need to pass{" "} */}
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
    "message": "Here you go! You've received 20 users.",
    "users": [
      {
        "id": 21,
        "email": "destiny@powers.com",
        "username": "destinypowers",
        "password": "h6I6La6H2(",
        "name": {...},
        "address": {...},
        "phone": "(725)466-6824"
      },
      //{...}
      {
        "id": 40,
        "email": "lisa@underwood.com",
        "username": "lisaunderwood",
        "password": "Lt7R*0Go^@",
        "name": {...},
        "address": {...},
        "phone": "(392)603-8492"
      }
    ]
  }
        `}
          </code>
        </pre>
      </div>
    )
}
export const AddUserSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
      <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
   {`fetch("https://fakestoreapi.in/api/users", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "email": "Thala@seven.com",
        "username": "MSDhoni",
        "password": "@2011WC",
        "name": {
          "firstname": "Mahendra Singh",
          "lastname": "Dhoni"
        },
        "address": {
          "city": "Rachi",
          "street": "Local Boy",
          "number": "7777777",
          "zipcode": "7777",
          "geolocation": {
            "lat": 77.77777,
            "long": 77.77777
          }
        },
        "phone": "777777777"
    })
  })
  `}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
export const AddUserOutputSnip = () => {
    
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
    "message": "Here is the user you sent, which we have just returned you back...",
    "user": {
      "id": 51,
      "email": "Thala@seven.com",
      "username": "MSDhoni",
      "password": "@2011WC",
      "name": {
        "firstname": "Mahendra Singh",
        "lastname": "Dhoni"
      },
      "address": {
        "city": "Rachi",
        "street": "Local Boy",
        "number": "7777777",
        "zipcode": "7777",
        "geolocation": {
          "lat": 77.77777,
          "long": 77.77777
        }
      },
      "phone": "777777777"
    }
  }
        `}
          </code>
        </pre>
      </div>
    )
}
export const UpdateUserSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
      <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
   {`fetch("https://fakestoreapi.in/api/users/18", {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        "email": "Virat@king.com",
        "username": "Viratkholi",
        "password": "@ESALEECUPNAMDE",
        "name": {
          "firstname": "Virat",
          "lastname": "Kohli"
        },
        "address": {
          "city": "Delhi",
          "street": "Local Boy",
          "number": "181818",
          "zipcode": "181818",
          "geolocation": {
            "lat": 18.1818,
            "long": 18.181818
          }
        },
        "phone": "18181818"
    })
  })
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
  export const UpdateUserOutputSnip = () => {
    
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
    "message": "The user with id 18 has been updated with your provided data",
    "user": {
      "id": 18,
      "email": "Virat@king.com",
      "username": "Viratkholi",
      "password": "@ESALEECUPNAMDE",
      "name": {
        "firstname": "Virat",
        "lastname": "Kohli"
      },
      "address": {
        "city": "Delhi",
        "street": "Local Boy",
        "number": "181818",
        "zipcode": "181818",
        "geolocation": {
          "lat": 18.1818,
          "long": 18.181818
        }
      },
      "phone": "18181818"
    }
  }
 `}
          </code>
        </pre>
      </div>
    )
}
  export const DeleteUserSnip = () => {
    const {snipRef, handleCopy, isCopied} = useCopySnippet()
  
    return (
      <pre className="relative">
          <code ref={snipRef} className="hljs rounded-md outline outline-1 outline-white/10">
{`fetch("https://fakestoreapi.in/api/users/11", {
method: 'DELETE',
}).then(res => res.json())
.then(res => console.log(res))
`}          
          </code>
          <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
        </pre>
    )
}
  export const DeleteUserOutputSnip = () => {
    
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
    "message": "User with id 11 has been deleted"
  }
 `}
          </code>
        </pre>
      </div>
    )
}