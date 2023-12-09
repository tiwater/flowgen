'use client';

import { ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-toastify/dist/ReactToastify.css';

const Containers = () => {
  return (
    <>
      <ToastContainer position="bottom-right" theme="colored" hideProgressBar />
      <Tooltip
        id="default-tooltip"
        className="bg-base-100 text-base-content"
        place="bottom"
      />
      <Tooltip
        id="html-tooltip"
        classNameArrow="html-tooltip-arrow bg-gray-700 border-r border-b border-gray-500"
        className="!bg-gray-600 !border !border-gray-500 !text-gray-200 !px-2 !py-1"
        style={{ maxWidth: '300px', zIndex: 9999 }}
        clickable
      />
    </>
  );
};

export default Containers;