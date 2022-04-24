import React, { useState } from "react";
import Image from "next/image";

function WebImage({ src, width, layout, height, alt, className, children }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-3xl bg-gray-200">
      <Image
        src={src}
        objectFit="cover"
        width={width}
        height={height}
        layout={layout}
        alt={alt ? alt : ""}
        onLoadingComplete={() => setLoading(false)}
        className={`${className} duration-700 ease-in-out ${
          loading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }`}
        // placeholder="blur"
        // blurDataURL="/banner.jpg"
      />
    </div>
  );
}

export default WebImage;
