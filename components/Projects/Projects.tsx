"use client";

import { Card } from "flowbite-react";

export function Projects() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card
          className="mt-10 max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/assets/image1.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="mt-10 max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/assets/image1.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        <Card
          className="mt-10 max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/assets/image1.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
}
