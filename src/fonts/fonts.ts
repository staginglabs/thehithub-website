// poppins

import { Poppins } from 'next/font/google';

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

//body style
export const bodyStyle = 'text-2xl leading-9 text-[#0F351D] antialiased';

//buttons
export const primary_button = 'flex items-center justify-center rounded-full bg-[#18A34B] text-white py-3.5 pl-6.5 pr-2.5 h-[50px] text-base leading-[1em] font-medium hover:bg-green-700 hover:text-white gap-2.5';

export const secondary_button = 'flex items-center justify-center rounded-full bg-[#F8E108] py-3.5 pl-6.5 pr-2.5 h-[50px] text-base leading-[1em] font-bold hover:bg-green-700 hover:text-white gap-2.5';


//banner list text (li)

export const banner_list_text = 'text-base leading-7.5 font-medium flex items-center gap-x-2.5 leading-[1em] tracking-[1.6px] uppercase'

//list text (li)

export const list_text = 'text-base leading-7.5 font-medium'

