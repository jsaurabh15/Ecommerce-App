import React, {useState, useEffect} from 'react'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom'
import Layout from "../components/Layout/Layout"

const Categories = () => {
    const categories = useCategory();

  return (
    <Layout title="All Categories">
        <div className="container">
            <div className="row">
                {categories?.map(c => (
                    <div className="col-md-4 mb-3 mt-5 gx-3 gy-3" key={c._id}>
                        <div className="card">
                            <Link to={`/category/${c.slug}`} className='btn cat-btn'> {c.name} </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Categories
