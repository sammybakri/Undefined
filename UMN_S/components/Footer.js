import React from 'react';

export default function Footer() {
  return (
    <div className='flex justify-center items-center gap-3 py-2'>
      <a href = "https://www.google.com/?client=safari&channel=iphone_bm" target = "blank">
      <i class="fa-brands fa-instagram opacity-50 duration-300 hover:scale-150 hover:opacity-100 cursor-pointer"></i>
      </a>
      <a href = "https://www.google.com/?client=safari&channel=iphone_bm" target = "blank">
      <i class="fa-brands fa-twitter opacity-50 duration-300 hover:scale-150 hover:opacity-100 cursor-pointer "></i>
      </a>
      <a href = "https://www.google.com/?client=safari&channel=iphone_bm" target = "blank">
      <i class="fa-brands fa-linkedin opacity-50 duration-300 hover:scale-150 hover:opacity-100 cursor-pointer "></i>
      </a>
    </div>
  );
}

