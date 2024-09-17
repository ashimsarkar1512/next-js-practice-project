import Image from 'next/image';
import React from 'react';

const ServiceCard = ({service}) => {
            const {img ,title,price}=service || {}
            return (
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                        <Image height={120} width={430} src={img} alt={title}></Image>
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{title}</h2>
                          <div className="card-actions justify-between items-center">
                                    <p className='text-primary font-semibold'> price : ${price}</p>
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
            );
};

export default ServiceCard;