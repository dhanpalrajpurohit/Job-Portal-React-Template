import React from 'react'

const TAGS = [
    "Design & Creative",
    "Marketing",
    "Administration",
    "Teaching & Education",
    "Engineering",
    "Software & Web",
    "Telemarketing"
]
function Tags() {
  return (
    <div className="row">
                <div className="col-lg-12">
                    <div className="popular_search d-flex align-items-center">
                        <span>Popular Search:</span>
                        <ul>
                            {
                                TAGS.map((tag)=>{
                                    return <li><a href="#">{tag}</a></li>
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Tags
