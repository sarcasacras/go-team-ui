import React from 'react';
import Image from "next/image";
import { CardProps } from '../types/componentTypes';

export default function Card({ title, children, isAuthorized = false }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg min-h-[250px] flex flex-col h-full justify-start">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black font-semibold text-xl">{title}</h2>
        <div className='flex gap-2'>
          {isAuthorized ? <Image src='/plus.png' alt='Add sign' height={32} width={32} /> : null}
          <Image src='/more.png' alt='More options' height={32} width={32} />
        </div>
      </div>
      {children}
    </div>
  );
}


