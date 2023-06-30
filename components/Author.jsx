import React from 'react';
import Image from 'next/image';

// import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute left-0 right-0 -top-16">
            <Image
                unoptimized
                // loader={grpahCMSImageLoader}
                alt={author.name}
                height="90"
                width="95"
                className="inline-flex align-middle rounded-full"
                src={ author.photo ? author.photo.url : "/authimg.jpg" }
            />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-ls">{author.bio}</p>
    </div>
);

export default Author;